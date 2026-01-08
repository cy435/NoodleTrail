<template>
  <page-meta page-style="overflow:auto;min-height:100vh" />
  <view class="footprints-page">
    <!-- 顶部：搜索 + 分类Tab（美食 / 景点 / 非遗体验地） -->
    <view class="top-panel">
      <view class="search-row">
        <view class="search-bar">
          <input
            class="search-input"
            v-model="searchKeyword"
            type="text"
            placeholder="搜索美食/景点/非遗体验中心"
            confirm-type="search"
            @confirm="handleSearchConfirm"
          />
          <text v-if="searchKeyword" class="search-clear" @tap="clearSearch">×</text>
        </view>
        <image
          class="search-btn-icon"
          src="/static/assets/搜索.png"
          mode="aspectFit"
          @tap="tapSearchButton"
        />
      </view>

      <!-- 搜索结果弹窗：输入关键词后在顶部展示相关店铺列表 -->
      <view
        v-if="searchPanelVisible && displayPoiList.length"
        class="search-result-panel"
      >
        <scroll-view scroll-y class="search-result-scroll">
          <view
            v-for="item in displayPoiList"
            :key="item.id"
            class="search-result-item"
            @tap="openPoiDetail(item)"
          >
            <view class="search-result-name">{{ item.name }}</view>
            <view class="search-result-meta">
              <text class="search-result-type">
                {{
                  getPoiCategoryText(item) ||
                  (activeCategory === 'food'
                    ? '美食'
                    : activeCategory === 'scenic'
                      ? '景点'
                      : '非遗体验地')
                }}
              </text>
              <text
                v-if="item.address"
                class="search-result-address"
              >
                {{ item.address }}
              </text>
            </view>
          </view>
        </scroll-view>
      </view>

      <view class="category-tabs">

        <view
          v-for="tab in categoryTabs"
          :key="tab.id"
          :class="['category-tab', { 'category-tab--active': activeCategory === tab.id }]"
          @tap="changeCategory(tab.id)"
        >
          {{ tab.label }}
        </view>
      </view>
    </view>

    <!-- 中间：用户定位地图，展示当前位置 + 附近地点 -->
    <view class="map-section">
      <view class="location-header">
        <text class="location-title">{{ locationText }}</text>
        <view class="location-actions">
          <view class="recenter-btn" @tap="locateAndLoad">
            <text class="recenter-icon">📍</text>
            <text class="recenter-text">重新定位</text>
          </view>
          <view class="manual-location-btn" @tap="chooseLocation">
            <text class="manual-location-text">手动选择</text>
          </view>
        </view>
      </view>


      <view
        class="map-canvas"
        :class="{ 'map-canvas--expanded': isMapExpanded }"
      >
        <map
          class="map-native"
          :latitude="latitude"
          :longitude="longitude"
          :markers="markers"
          :scale="scale"
          @markertap="handleMarkerTap"
          @regionchange="handleRegionChange"
        />

        <view
          v-if="!hasLocation && !loadingPois"
          class="map-placeholder"
        >
          <text>正在定位附近的美食与景点...</text>
        </view>
        <view v-if="navigationUrl" class="map-webview-overlay">
          <web-view
            class="map-webview"
            :src="navigationUrl"
          />
        </view>

        <!-- 右下角：放大地图按钮（默认状态） -->
        <view
          v-if="!isMapExpanded"
          class="map-expand-toggle map-expand-toggle--bottom-right"
          @tap.stop="expandMap"
        >
          <text class="map-expand-toggle-icon">⤢</text>
          <text class="map-expand-toggle-text">放大地图</text>
        </view>

        <!-- 左上角：还原按钮（地图已放大时显示） -->
        <view
          v-else
          class="map-expand-toggle map-expand-toggle--top-left"
          @tap.stop="resetMapSize"
        >
          <text class="map-expand-toggle-icon">←</text>
          <text class="map-expand-toggle-text">返回</text>
        </view>
      </view>

    </view>

    <!-- 筛选标签 + 下拉弹层（贴着标签，类似美团样式） -->
    <view class="filter-wrapper" v-if="activeCategory !== 'heritage'">

      <view class="filter-row">
        <view
          v-for="tag in filterTags"
          :key="tag.id"
          :class="['filter-tag', { 'filter-tag--active': tag.active }]"
          @tap="tapFilterTag(tag)"
        >
          <view class="filter-tag-inner">
            <text class="filter-tag-text">{{ tag.label }}</text>
            <text
              v-if="tag.hasArrow"
              class="filter-tag-arrow"
              :class="{ 'filter-tag-arrow--open': activeFilterPopup === tag.id }"
            >
              ▼
            </text>
          </view>
        </view>

        <view
          v-for="tag in quickFilterTags"
          :key="tag.id"
          :class="['quick-filter-tag', { 'quick-filter-tag--active': isQuickFilterActive(tag.id) }]"
          @tap="tapQuickFilter(tag)"
        >
          {{ tag.label }}
        </view>
      </view>

      <!-- 筛选弹窗：根据 activeFilterPopup 显示附近 / 分类 / 排序 -->
      <view
        v-if="activeFilterPopup"
        class="filter-dropdown"
      >
        <!-- 附近弹窗：根据当前大类切换内容 -->
        <view v-if="activeFilterPopup === 'nearby'" class="filter-popup-content">
          <!-- 美食：距离 + 热门地标 -->
          <view v-if="activeCategory === 'food'">
            <view class="popup-section">
              <view class="popup-section-title">距离我</view>
              <view class="popup-chips">
                <view
                  v-for="option in nearbyDistanceOptions"
                  :key="option.value"
                  :class="['popup-chip', 'popup-chip--distance', { 'popup-chip--active': selectedRadius === option.value }]"
                  @tap="selectNearbyDistance(option)"
                >
                  {{ option.label }}
                </view>
              </view>
            </view>


            <view class="popup-section">
              <view class="popup-section-title">热门地标</view>
              <view class="landmark-layout">
                <view class="landmark-menu">
                  <view
                    v-for="group in nearbyLandmarkGroups"
                    :key="group.id"
                    :class="['landmark-menu-item', { 'landmark-menu-item--active': group.id === activeLandmarkGroupId }]"
                    @tap="selectLandmarkGroup(group)"
                  >
                    {{ group.label }}
                  </view>
                </view>
              <view class="landmark-list">
                <view
                  v-for="item in currentLandmarkItems"
                  :key="item.id"
                  :class="['landmark-item', { 'landmark-item--active': selectedNearbyLandmarkId === item.id }]"
                  @tap="selectNearbyLandmark(item)"
                >
                  {{ item.label }}
                </view>
              </view>

              </view>
            </view>
          </view>

          <!-- 景点：左侧直线距离 / 商圈 / 地标，右侧列表 -->
          <view v-else-if="activeCategory === 'scenic'" class="scenic-nearby-layout">
            <view class="landmark-layout">
              <view class="landmark-menu">
                <view
                  v-for="menu in scenicNearbyMenus"
                  :key="menu.id"
                  :class="['landmark-menu-item', { 'landmark-menu-item--active': menu.id === activeScenicNearbyMenuId }]"
                  @tap="selectScenicNearbyMenu(menu)"
                >
                  {{ menu.label }}
                </view>
              </view>
              <view class="landmark-list">
                <!-- 直线距离 -->
                <view v-if="activeScenicNearbyMenuId === 'distance'">
                  <view class="popup-section-title scenic-subtitle">附近（智能范围）</view>
                  <view
                    v-for="option in scenicDistanceOptions"
                    :key="option.value"
                    class="scenic-distance-item"
                    :class="{ 'scenic-distance-item--active': selectedRadius === option.value }"
                    @tap="selectNearbyDistance(option)"
                  >
                    {{ option.label }}
                  </view>
                </view>

                <!-- 全城商区 -->
                <view v-else-if="activeScenicNearbyMenuId === 'business'">
                  <view
                    v-for="item in scenicBusinessAreas"
                    :key="item.id"
                    :class="['landmark-item', { 'landmark-item--active': selectedNearbyLandmarkId === item.id }]"
                    @tap="selectNearbyLandmark(item)"
                  >
                    {{ item.label }}
                  </view>
                </view>


                <!-- 地标 -->
                <view v-else-if="activeScenicNearbyMenuId === 'landmark'">
                  <view
                    v-for="item in scenicLandmarks"
                    :key="item.id"
                    :class="['landmark-item', { 'landmark-item--active': selectedNearbyLandmarkId === item.id }]"
                    @tap="selectNearbyLandmark(item)"
                  >
                    {{ item.label }}
                  </view>
                </view>

              </view>
            </view>
          </view>

          <!-- 其他类型：先复用美食的距离筛选 -->
          <view v-else>
            <view class="popup-section">
              <view class="popup-section-title">距离我</view>
              <view class="popup-chips">
                <view
                  v-for="option in nearbyDistanceOptions"
                  :key="option.value"
                  :class="['popup-chip', 'popup-chip--distance', { 'popup-chip--active': selectedRadius === option.value }]"
                  @tap="selectNearbyDistance(option)"
                >
                  {{ option.label }}
                </view>
              </view>
            </view>

          </view>
        </view>


        <!-- 分类弹窗：美食 / 景点分类 -->
        <view
          v-else-if="activeFilterPopup === 'category'"
          class="filter-popup-content"
        >
          <!-- 美食分类：沿用原来的标签样式，支持多选 -->
          <view v-if="activeCategory === 'food'" class="popup-section">
            <view class="popup-section-title">美食分类</view>
            <view class="popup-chips">
              <view
                v-for="option in foodCategoryOptions"
                :key="option.id"
                :class="['popup-chip', { 'popup-chip--active': isFoodCategoryActive(option) }]"
                @tap="selectFoodCategory(option)"
              >
                {{ option.label }}
              </view>
            </view>
          </view>

          <!-- 景点分类：纵向列表，仅展示 全部分类 + 5A/4A/3A/2A -->
          <view v-else-if="activeCategory === 'scenic'" class="popup-section">
            <view class="popup-section-title">全部分类</view>
            <view class="scenic-category-list">
              <view
                v-for="option in scenicCategoryPopupOptions"
                :key="option.id"
                class="scenic-category-item"
                :class="{ 'scenic-category-item--active': isScenicCategoryActive(option) }"
                @tap="selectFoodCategory(option)"
              >
                {{ option.label }}
              </view>
            </view>

          </view>


          <!-- 其他类型暂时复用美食分类结构，支持多选 -->
          <view v-else class="popup-section">
            <view class="popup-section-title">分类</view>
            <view class="popup-chips">
              <view
                v-for="option in foodCategoryOptions"
                :key="option.id"
                :class="['popup-chip', { 'popup-chip--active': isFoodCategoryActive(option) }]"
                @tap="selectFoodCategory(option)"
              >
                {{ option.label }}
              </view>
            </view>
          </view>
        </view>


        <!-- 排序弹窗：美食 / 景点通用，景点仅显示“推荐排序/好评优先” -->
        <view
          v-else-if="activeFilterPopup === 'sort'"
          class="filter-popup-content"
        >
          <view class="popup-section">
            <view class="popup-section-title">排序方式</view>
            <view class="sort-list">
              <view
                v-for="option in sortOptionsForPopup"
                :key="option.id"
                :class="['sort-item', { 'sort-item--active': activeSortId === option.id }]"
                @tap="selectSortOption(option)"
              >
                <text class="sort-item-label">{{ option.label }}</text>
              </view>
            </view>

          </view>
        </view>

      </view>
    </view>


    <!-- 下方：附近地点列表卡片 -->
    <view :class="['poi-list', { 'poi-list--heritage': activeCategory === 'heritage' }]"><!-- 非遗横向滚动 -->
      <view
        v-for="item in displayPoiList"
        :key="item.id"
        :class="[
          'poi-card',
          {
            'poi-card--food': activeCategory === 'food',
            'poi-card--heritage': activeCategory === 'heritage',
            'poi-card--scenic': activeCategory === 'scenic'
          }
        ]"
        @tap="openPoiDetail(item)"
      >
        <!-- 美食卡片：左图右文，多行信息展示 -->
        <view v-if="activeCategory === 'food'" class="poi-food">
          <image
            class="poi-card-thumb"
            :src="getFoodCover(item)"
            mode="aspectFill"
          />
          <view class="poi-card-right">
            <view class="poi-title-line">
              <text class="poi-name poi-name--food">{{ item.name }}</text>
            </view>
            <view class="poi-rating-line">
              <text v-if="getPoiScore(item)" class="poi-score">
                {{ getPoiScore(item) }}分
              </text>
              <text v-if="getPoiAvgPriceText(item)" class="poi-price">
                {{ getPoiAvgPriceText(item) }}
              </text>
            </view>
            <view class="poi-meta-line">
              <text class="poi-meta-location">
                {{ getFoodTravelTimeText(item) }}
              </text>
            </view>
            <view class="poi-food-tags">
              <view class="poi-tags-left">
                <text
                  v-for="tag in getFoodTypeTags(item)"
                  :key="tag"
                  class="poi-tag-pill poi-tag-pill--food"
                >
                  {{ tag }}
                </text>
              </view>
            </view>
            <!-- 距离显示在右下角 -->
            <view v-if="item.distance" class="poi-distance-bottom-right">
              <text class="poi-distance-strong">
                距您{{ formatDistance(item.distance) }}
              </text>
            </view>
          </view>
        </view>

        <!-- 非遗体验地：仿照示例的左图右文卡片（不展示评论条数） -->
        <view v-else-if="activeCategory === 'heritage'" class="heritage-card">
          <image
            class="poi-card-thumb"
            :src="getFoodCover(item)"
            mode="aspectFill"
          />
          <view class="poi-card-right">
            <view class="poi-title-line">
              <text class="poi-name">{{ item.name }}</text>
            </view>
            <!-- 评分 + 人均价格 -->
            <view class="heritage-rating-line">
              <view class="heritage-rating-left">
                <text v-if="getPoiScore(item)" class="poi-score">
                  {{ getPoiScore(item) }}分
                </text>
                <text v-if="getPoiAvgPriceText(item)" class="poi-price">
                  {{ getPoiAvgPriceText(item) }}
                </text>
              </view>
            </view>
            <!-- 地区划分，例如“高新区 / 小寨商圈” -->
            <view class="heritage-meta-line">
              <text v-if="getHeritageAreaText(item)" class="heritage-area">
                {{ getHeritageAreaText(item) }}
              </text>
            </view>
            <!-- 位置下方展示步行时间，例如“步行约8分钟” -->
            <view class="heritage-travel-line">
              <text class="heritage-travel-text">
                {{ getFoodTravelTimeText(item) }}
              </text>
            </view>
            <!-- 分类胶囊标签，紧挨着步行时间下方 -->
            <view
              v-if="getPoiCategoryText(item)"
              class="heritage-category-line"
            >
              <text
                class="poi-tag-pill poi-tag-pill--food"
              >
                {{ getPoiCategoryText(item) }}
              </text>
            </view>
            <!-- 简短介绍，一行截断 -->
            <text v-if="getHeritageIntro(item)" class="heritage-intro">
              {{ getHeritageIntro(item) }}
            </text>
            <!-- 底部右侧距离 -->
            <view
              v-if="item.distance"
              class="heritage-bottom-line"
            >
              <text class="poi-distance-strong">
                距您{{ formatDistance(item.distance) }}
              </text>
            </view>






          </view>
        </view>






        <!-- 景点：左图右文卡片布局（名字 → 评分 → 步行时间 → 标签 + 右下角距离） -->
        <view v-else class="poi-food poi-scenic">
          <image
            class="poi-card-thumb"
            :src="getFoodCover(item)"
            mode="aspectFill"
          />
          <view class="poi-card-right">
            <!-- 名称 -->
            <view class="poi-title-line">
              <text class="poi-name">{{ item.name }}</text>
            </view>
            <!-- 评分 -->
            <view class="poi-rating-line">
              <text v-if="getPoiScore(item)" class="poi-score">
                {{ getPoiScore(item) }}分
              </text>
            </view>
            <!-- 步行时间估算 -->
            <view class="poi-meta-line">
              <text class="poi-meta-location">
                {{ getFoodTravelTimeText(item) }}
              </text>
            </view>
            <!-- 标签（去重后最多 3 个，样式与美食一致） + 右下角距离 -->
            <view class="poi-food-tags poi-scenic-tags">
              <view class="poi-tags-left">
                <text
                  v-for="tag in getPoiTags(item)"
                  :key="tag"
                  class="poi-tag-pill poi-tag-pill--food"
                >
                  {{ tag }}
                </text>
              </view>
              <text
                v-if="item.distance"
                class="poi-distance-strong"
              >
                {{ formatDistance(item.distance) }}
              </text>
            </view>
          </view>
        </view>




      </view>

      <!-- 加载更多 -->
      <view
        v-if="!loadingPois && displayPoiList.length > 0 && hasMore"
        class="load-more-btn"
        @tap="loadMorePois"
      >
        <text class="load-more-text">加载更多</text>
      </view>

      <view
        v-if="!loadingPois && displayPoiList.length === 0"
        class="empty-hint"
      >
        <text>当前区域暂时没有找到相关地点，可以换个关键词或移动地图试试～</text>
      </view>
    </view>

    <!-- 返回顶部按钮（全局悬浮） -->
    <view
      v-if="showBackToTop"
      class="back-to-top-btn"
      @tap="backToTop"
    >
      <text class="back-to-top-icon">↑</text>
      <text class="back-to-top-text">返回顶部</text>
    </view>

  </view>
</template>

<script>
const { getPois, getNavigationUrl, getHotspots } = require('../../api/map.js')
const { fetchLocationCandidates } = require('../../api/checkin.js')




// 高德美食 type 映射：去重 + 相近类型归一，用于美食标签
const FOOD_TYPE_IGNORE_LIST = ['餐饮服务']

const FOOD_TYPE_SYNONYM_MAP = {
  快餐厅: '快餐',
  快餐店: '快餐',
  小吃快餐店: '小吃快餐',
  小吃店: '小吃快餐',
  茶艺馆: '茶饮',
  茶馆: '茶饮',
  糕饼店: '糕点',
  面包房: '糕点',
  中餐厅: '中餐',
  火锅店: '火锅',
  烧烤: '烧烤',
  烧烤店: '烧烤',
  咖啡厅: '咖啡',
  咖啡馆: '咖啡'
}

const FOOD_TYPE_PRETTY_TEXT_MAP = {
  快餐: '快餐简餐',
  小吃快餐: '小吃快餐',
  茶饮: '茶馆下午茶',
  糕点: '糕点烘焙',
  中餐: '家常中餐',
  火锅: '火锅聚餐',
  烧烤: '烧烤烤串',
  咖啡: '咖啡甜点'
}

export default {
  name: 'ShanweiMap',
  data() {
    return {
      searchKeyword: '',
      // 标签筛选使用的关键词（例如“魏家凉皮”），不展示在搜索框中
      tagKeyword: '',
      // 搜索结果弹窗是否可见
      searchPanelVisible: false,
      activeCategory: 'food',

      categoryTabs: [

        { id: 'food', label: '美食' },
        { id: 'scenic', label: '景点' },
        { id: 'heritage', label: '非遗体验地' }
      ],
      // 顶部主筛选标签：附近 / 分类 / 排序
      filterTags: [
        { id: 'nearby', label: '附近', active: true, hasArrow: true },
        { id: 'category', label: '分类', active: false, hasArrow: true },
        { id: 'sort', label: '排序', active: false, hasArrow: true }
      ],
      // 第二行快捷标签（已移除“营业中”快捷筛选）
      quickFilterTags: [
        { id: 'noodle', label: '面馆' },
        { id: 'shaanxi', label: '陕西菜' },
        { id: 'nearby500', label: '附近500m' },
        { id: 'weijia', label: '魏家凉皮' }
      ],


      activeFilterPopup: '',

      // 附近筛选
      nearbyDistanceOptions: [
        { value: 500, label: '附近500m' },
        { value: 1000, label: '1km内' },
        { value: 3000, label: '3km内' },
        { value: 5000, label: '5km内' }
      ],
      // 默认 5km 内的门店
      selectedRadius: 5000,

      nearbyLandmarkGroups: [
        {
          id: 'scenic',
          label: '热门景区',
          items: [
            { id: 'scenic_dayanta', label: '大雁塔', keyword: '大雁塔' },
            { id: 'scenic_xiaoyanta', label: '小雁塔', keyword: '小雁塔' },
            { id: 'scenic_wall', label: '西安城墙', keyword: '城墙' },
            { id: 'scenic_huaqingchi', label: '华清池', keyword: '华清池' }
          ]
        },
        {
          id: 'food_street',
          label: '美食街',
          items: [
            { id: 'street_huimin', label: '回民街', keyword: '回民街' },
            { id: 'street_yongxingfang', label: '永兴坊', keyword: '永兴坊' },
            { id: 'street_defu', label: '德福巷', keyword: '德福巷' }
          ]
        },
        {
          id: 'business',
          label: '热门商圈',
          items: [
            { id: 'biz_xiaozhai', label: '小寨商圈', keyword: '小寨' },
            { id: 'biz_gaoxin', label: '高新商圈', keyword: '高新' },
            { id: 'biz_datang', label: '大唐不夜城', keyword: '大唐不夜城' }
          ]
        }
      ],
      activeLandmarkGroupId: 'scenic',

      // 景点附近筛选（直线距离 / 商圈 / 地标）
      scenicNearbyMenus: [
        { id: 'distance', label: '直线距离' },
        { id: 'business', label: '全城商区' },
        { id: 'landmark', label: '地标' }
      ],
      activeScenicNearbyMenuId: 'distance',
      scenicDistanceOptions: [
        { value: 1000, label: '1km' },
        { value: 3000, label: '3km' },
        { value: 5000, label: '5km' },
        { value: 10000, label: '10km' },
        { value: 30000, label: '30km' }
      ],




      // 分类筛选
      foodCategoryOptions: [
        { id: 'all', label: '全部', keywords: [] },
        { id: 'chinese', label: '中餐', keywords: ['中餐'] },
        { id: 'snack_fast', label: '小吃快餐', keywords: ['小吃', '快餐'] },
        { id: 'noodle', label: '面馆', keywords: ['面', '面馆'] },
        { id: 'halal', label: '清真菜', keywords: ['清真'] },
        { id: 'northwest', label: '西北菜', keywords: ['西北'] },
        { id: 'bbq', label: '烤肉', keywords: ['烤肉', '烧烤'] },
        { id: 'shaanxi', label: '陕西菜', keywords: ['陕西'] },
        { id: 'burger', label: '汉堡包', keywords: ['汉堡'] },
        { id: 'milk_tea', label: '奶茶/茶饮', keywords: ['奶茶', '茶饮'] },
        { id: 'dessert', label: '糕点/烘焙', keywords: ['糕点', '烘焙', '甜品'] },
        { id: 'paomo', label: '泡馍', keywords: ['泡馍', '羊肉泡馍'] },
        { id: 'roujiamo', label: '肉夹馍', keywords: ['肉夹馍'] },
        { id: 'breakfast_must', label: '早餐必吃', keywords: ['早餐', '早点'] },
        { id: 'heritage_food', label: '非遗美食', keywords: ['非遗'] },
        { id: 'night_snack', label: '夜市小吃', keywords: ['夜市', '夜宵'] },

        { id: 'buffet', label: '自助餐', keywords: ['自助'] },
        { id: 'liangpi', label: '凉皮', keywords: ['凉皮'] },
        { id: 'skewer', label: '烤串', keywords: ['烤串', '串'] }
      ],
      selectedFoodCategoryId: 'all',

      // 景点分类
      scenicCategoryOptions: [
        // 通用"全部"选项
        { id: 'all', label: '全部分类', keywords: [] },

        // A 级景区等级（使用 scenicLevel 传参）
        { id: '5a', label: '5A景区', keywords: ['5a', '5A级', '5a景区'], scenicLevel: '5A' },
        { id: '4a', label: '4A景区', keywords: ['4a', '4A级', '4a景区'], scenicLevel: '4A' },

        // 旧的人文/免费等分类，主要给快捷标签使用（仍保留本地关键字过滤）
        { id: 'culture', label: '人文景观', keywords: ['人文', '文化', '古镇', '古街'] },
        { id: 'relic', label: '人文古迹', keywords: ['人文古迹', '文物古迹', '古迹', '遗址', '博物馆', '碑林'] },
        { id: 'park', label: '公园', keywords: ['公园', '湿地', '植物园', '动物园'] },
        { id: 'free', label: '免费景点', keywords: ['免费'] },
        { id: '3a', label: '3A景区', keywords: ['3a', '3A级', '3a景区'] },
        { id: '2a', label: '2A景区', keywords: ['2a', '2A级', '2a景区'] },

        // 新的 scenicTags 分类标签（与后端 scenicTags 一致）
        { id: 'nature', label: '自然景观', keywords: ['自然景观'], scenicTags: ['自然景观'] },
        { id: 'water', label: '水上项目', keywords: ['水上项目'], scenicTags: ['水上项目'] },
        { id: 'exhibition', label: '展览馆', keywords: ['展览馆', '展馆'], scenicTags: ['展览馆'] },
        { id: 'zoo', label: '动物园', keywords: ['动物园'], scenicTags: ['动物园'] },
        { id: 'botanical', label: '植物园', keywords: ['植物园'], scenicTags: ['植物园'] },
        { id: 'ski', label: '滑雪景区', keywords: ['滑雪景区', '滑雪'], scenicTags: ['滑雪景区'] },
        { id: 'leisure', label: '休闲园区', keywords: ['休闲园区'], scenicTags: ['休闲园区'] },
        { id: 'landmark_building', label: '地标建筑', keywords: ['地标建筑'], scenicTags: ['地标建筑'] },
        { id: 'theme_park', label: '主题乐园', keywords: ['主题乐园'], scenicTags: ['主题乐园'] },
        { id: 'hot_spring', label: '温泉景区', keywords: ['温泉景区', '温泉'], scenicTags: ['温泉景区'] },
        { id: 'culture_block', label: '人文街区', keywords: ['人文街区'], scenicTags: ['人文街区'] },
        { id: 'memorial_place', label: '纪念地', keywords: ['纪念地'], scenicTags: ['纪念地'] }
      ],

      selectedScenicCategoryId: 'all',
      // 当前选中的景点等级（5A/4A）与分类标签（自然景观等），用于传给后端
      scenicLevelFilter: '',
      scenicTagsFilter: '',
      // 当前多选的 scenicTags 对应的选项 id 集合（如 ['nature','park']）
      selectedScenicTagIds: [],


      // 排序筛选


      sortOptions: [
        { id: 'recommend', label: '推荐排序' },
        { id: 'rating', label: '好评优先' },
        { id: 'price_low', label: '低价优先' }
      ],
      activeSortId: 'recommend',

      activeQuickFilterId: '',
      selectedNearbyLandmarkId: '',
      onlyShowOpen: false,

      // 城市 & 定位信息
      cityName: '',
      userLng: null,
      userLat: null,

      // 当前搜索中心（“我” 或 某个热门地标）
      centerType: 'user',
      centerLng: null,
      centerLat: null,

      // 分类多选（用于传给后端的 foodCategory）
      selectedCategories: [],

      // 热门地标原始列表
      hotspots: [],

      latitude: 34.34127, // 默认西安坐标

      longitude: 108.93984,
      scale: 15,
      hasLocation: false,
      locating: false,
      locationText: '定位中...',

      markers: [],
      poiList: [],
      loadingPois: false,
      navigationUrl: '',
      // 地图是否放大显示（照顾老年用户查看）
      isMapExpanded: false,
      // 分页参数
      page: 1,
      hasMore: true,
      // 是否显示“返回顶部”按钮
      showBackToTop: false
    }
  },
  computed: {
    displayPoiList() {
      // 基于后端返回的原始顺序（默认已经按距离排好），
      // 再按文档示例：先分类过滤，再按照排序类型进行评分/价格排序
      let list = Array.isArray(this.poiList) ? this.poiList.slice() : []

      if (this.activeCategory === 'food') {
        // 美食分类：如果后端已经通过 foodCategory 参数筛选了，前端就不再做筛选
        // 只有当后端没有筛选时（selectedCategories为空），才在前端做本地筛选
        const hasBackendFilter = Array.isArray(this.selectedCategories) && this.selectedCategories.length > 0
        if (!hasBackendFilter && this.selectedFoodCategoryId && this.selectedFoodCategoryId !== 'all') {
          const categoryOption = this.foodCategoryOptions.find(
            (item) => item.id === this.selectedFoodCategoryId
          )
          const categoryLabel = (categoryOption && categoryOption.label) || '全部'
          list = this.filterFoodPoisByCategoryDoc(list, categoryLabel)
        }

        // 营业中筛选（如果后端返回 businessStatus/openStatus 等字段）
        if (this.onlyShowOpen && this.hasOpenStatusField(list)) {
          list = list.filter((poi) => this.isPoiOpen(poi))
        }
      } else if (this.activeCategory === 'scenic') {
        // 景点分类：
        // - 若已通过 scenicLevel/scenicTags（传给后端）筛选，则不再做关键字二次过滤
        // - 否则保留原有的关键字匹配逻辑，兼容旧的本地分类
        if (!this.scenicLevelFilter && !this.scenicTagsFilter) {
          if (this.selectedScenicCategoryId && this.selectedScenicCategoryId !== 'all') {
            const category = this.scenicCategoryOptions.find(
              (item) => item.id === this.selectedScenicCategoryId
            )
            if (category && Array.isArray(category.keywords) && category.keywords.length > 0) {
              list = list.filter((poi) => this.matchPoiByKeywords(poi, category.keywords))
            }
          }
        }
      }


      // 排序：推荐排序保持后端原始顺序；好评优先 / 低价优先按文档示例排序
      list = this.sortPoisByDoc(list)

      return list
    },




    currentLandmarkItems() {
      const groups = Array.isArray(this.nearbyLandmarkGroups)
        ? this.nearbyLandmarkGroups
        : []
      if (!groups.length) {
        return []
      }
      const activeId = this.activeLandmarkGroupId || (groups[0] && groups[0].id)
      const group = groups.find((item) => item.id === activeId) || groups[0]
      return Array.isArray(group.items) ? group.items : []
    },

    scenicBusinessAreas() {
      const groups = Array.isArray(this.nearbyLandmarkGroups)
        ? this.nearbyLandmarkGroups
        : []
      const bizGroup = groups.find((item) => item.id === 'business')
      return bizGroup && Array.isArray(bizGroup.items) ? bizGroup.items : []
    },

    scenicLandmarks() {
      const groups = Array.isArray(this.nearbyLandmarkGroups)
        ? this.nearbyLandmarkGroups
        : []
      const scenicGroup = groups.find((item) => item.id === 'scenic')
      return scenicGroup && Array.isArray(scenicGroup.items) ? scenicGroup.items : []
    },

    scenicCategoryPopupOptions() {
      const options = Array.isArray(this.scenicCategoryOptions)
        ? this.scenicCategoryOptions
        : []
      // 景点分类下拉弹窗中展示的标签（与后端 scenicLevel/scenicTags 一一对应）
      const allowIds = [
        'all',
        '5a',
        '4a',
        'nature',
        'relic',
        'water',
        'exhibition',
        'zoo',
        'botanical',
        'ski',
        'leisure',
        'park',
        'landmark_building',
        'theme_park',
        'hot_spring',
        'culture_block',
        'memorial_place'
      ]
      return options.filter((item) => allowIds.indexOf(item.id) !== -1)
    },


    sortOptionsForPopup() {
      const options = Array.isArray(this.sortOptions) ? this.sortOptions : []
      if (this.activeCategory === 'scenic') {
        // 景点排序：仅保留 推荐排序 / 好评优先
        return options.filter((item) => item.id === 'recommend' || item.id === 'rating')
      }
      return options
    }
  },


  onLoad(options) {
    if (options && typeof options === 'object') {
      const { keyword, category } = options
      if (keyword) {
        try {
          this.searchKeyword = decodeURIComponent(keyword)
        } catch (e) {
          this.searchKeyword = keyword
        }
      }
      if (category && ['food', 'scenic', 'heritage'].includes(category)) {
        this.activeCategory = category
      }
    }

    // 定位完成后，locateAndLoad 内部会根据 cityName 自动调用 loadHotspots
    this.locateAndLoad()
  },



  // 监听页面滚动，用于控制“返回顶部”按钮展示
  onPageScroll(e) {
    const top = (e && e.scrollTop) || 0
    this.showBackToTop = top > 600
  },

  methods: {
    async locateAndLoad() {
      if (this.locating) {
        return
      }
      this.locating = true
      this.locationText = '定位中...'
      // 重新定位等同于一次新的搜索，重置分页
      this.page = 1
      this.hasMore = true

      try {
        // 使用封装好的高德定位 + 解析接口，拿经纬度和格式化地址
        const info = await fetchLocationCandidates()
        const latitude = info && info.latitude
        const longitude = info && info.longitude

        if (!latitude || !longitude) {
          throw new Error('定位失败')
        }

        // 更新用户位置
        this.userLat = latitude
        this.userLng = longitude

        // 当前搜索中心设为“我”
        this.centerType = 'user'
        this.centerLat = latitude
        this.centerLng = longitude

        // 地图中心也同步
        this.latitude = latitude
        this.longitude = longitude

        this.hasLocation = true
        this.scale = 16
        this.locationText = '当前位置附近'

        // 从返回的 city / formattedAddress 中解析城市名，用于 /hotspots 和 /pois
        // 后端返回结构可能是 { success, data: { city, formattedAddress } }
        const baseInfo = info && (info.data || info)
        const rawCity = baseInfo && baseInfo.city
        const rawAddress = baseInfo && baseInfo.formattedAddress
        const addr = String(rawCity || rawAddress || '').trim()
        if (addr) {
          const cityMatch = addr.match(/([^省市]+市)/)
          // 优先取“石家庄市”这类纯城市名，匹配不到就用原始字符串兜底
          this.cityName = (cityMatch && cityMatch[1]) || addr
        }


        // 默认 5km 内
        this.selectedRadius = 5000
        this.page = 1
        this.hasMore = true
        this.selectedCategories = []

        // 定位成功后，用当前城市刷新热门地标 + 美食列表
        await this.loadHotspots()
        await this.loadNearbyPois()
      } catch (err) {
        console.warn('[shanwei-map] locateAndLoad fail:', err)
        this.hasLocation = false
        this.locationText = '定位失败，可尝试重新定位'
        uni.showToast({ title: '定位失败，请检查定位权限', icon: 'none' })
        // 即便定位失败，也尝试按默认坐标加载一次附近点
        await this.loadNearbyPois()
      } finally {
        this.locating = false
      }
    },


    async loadHotspots() {
      try {
        const params = {}
        // 按当前城市请求热门地标列表
        if (this.cityName) {
          params.city = this.cityName
        }
        const hotspots = await getHotspots(params)
        const list = Array.isArray(hotspots) ? hotspots : []

        // 存一份原始列表，方便其他地方复用
        this.hotspots = list



        const scenic = []
        const foodStreet = []
        const business = []

        list.forEach((h, index) => {
          if (!h) {
            return
          }
          const base = {
            id:
              h.id != null && h.id !== ''
                ? String(h.id)
                : `hotspot-${index}`,
            label: h.name || '',
            longitude: h.longitude,
            latitude: h.latitude,
            city: h.city || '',
            rawCategory: h.category
          }
          const category = (h.category || '').toUpperCase()
          if (category === 'SCENIC') {
            scenic.push(base)
          } else if (category === 'FOOD_STREET') {
            foodStreet.push(base)
          } else if (category === 'BUSINESS_DISTRICT') {
            business.push(base)
          }
        })

        const groups = []

        if (scenic.length) {
          groups.push({
            id: 'scenic',
            label: '热门景区',
            items: scenic
          })
        }
        if (foodStreet.length) {
          groups.push({
            id: 'food_street',
            label: '美食街',
            items: foodStreet
          })
        }
        if (business.length) {
          groups.push({
            id: 'business',
            label: '热门商圈',
            items: business
          })
        }

        if (groups.length) {
          this.nearbyLandmarkGroups = groups
          this.activeLandmarkGroupId = groups[0].id
        }
      } catch (err) {
        console.warn('[shanwei-map] loadHotspots fail:', err)
      }
    },

    // 手动选择当前位置（用户在地图上点选）
    chooseLocation() {

      uni.chooseLocation({
        type: 'gcj02',
        success: (res) => {
          if (!res || !res.latitude || !res.longitude) {
            return
          }

          // 更新用户位置为手动选择点
          this.userLat = res.latitude
          this.userLng = res.longitude

          // 当前搜索中心仍视为“我”
          this.centerType = 'user'
          this.centerLat = res.latitude
          this.centerLng = res.longitude

          // 地图中心
          this.latitude = res.latitude
          this.longitude = res.longitude
          this.hasLocation = true
          this.scale = 16

          // 尝试从地址中解析城市名
          const addr = (res.address || res.name || '').trim()
          if (addr) {
            const cityMatch = addr.match(/([^省市]+市)/)
            if (cityMatch && cityMatch[1]) {
              this.cityName = cityMatch[1]
            }
          }

          this.locationText = res.name || '已选择位置附近'
          // 手动选择位置后从第一页重新加载
          this.page = 1
          this.hasMore = true
          this.selectedCategories = []
          // 选点之后也重新拉一次热门地标，让列表切换到该城市
          this.loadHotspots()
          this.loadNearbyPois()
        },



        fail: () => {
          uni.showToast({
            title: '未选择位置',
            icon: 'none'
          })
        }
      })
    },

    // 地图缩放 / 拖动结束时，根据缩放等级控制门店名字是否显示
    handleRegionChange(e) {
      if (!e || e.type !== 'end') {
        return
      }
      const scale = e.detail && e.detail.scale
      if (typeof scale === 'number' && !Number.isNaN(scale)) {
        this.scale = scale
      }
      // 根据当前缩放等级重新构造 markers，决定是否显示美食店名
      this.buildMarkers()
    },

    // 放大地图：高度增大到接近半屏
    expandMap() {
      this.isMapExpanded = true
    },

    // 还原地图高度到初始大小
    resetMapSize() {
      this.isMapExpanded = false
    },

    // 加载更多附近地点（分页）
    async loadMorePois() {
      if (this.loadingPois || !this.hasMore) {
        return
      }
      this.page += 1
      await this.loadNearbyPois()
    },

    // 返回页面顶部，方便浏览长列表
    backToTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },


    getCurrentPoiType() {
      if (this.activeCategory === 'food') {
        return 1
      }
      if (this.activeCategory === 'scenic') {
        return 2
      }
      return 3
    },

    // 根据当前经纬度和 displayPoiList 构造地图标记，并在放大时适度展示名称
    // 使用 displayPoiList 确保地图标记与列表显示的数据一致
    buildMarkers() {
      const markers = []

      // 当前用户位置：只显示图标，不显示"我在这里"文字
      if (this.latitude && this.longitude) {
        markers.push({
          id: 0,
          latitude: this.latitude,
          longitude: this.longitude,
          iconPath: '/static/assets/地点.png',
          width: 28,
          height: 28
        })
      }

      // 使用 displayPoiList 确保地图标记与列表显示的数据一致
      const list = this.displayPoiList || []
      const scale =
        typeof this.scale === 'number' && !Number.isNaN(this.scale) ? this.scale : 0

      // 只有在放大到一定级别时才显示店名，避免拥挤
      // - <=16：从不显示
      // - 17：仅在门店数量较少时显示
      // - 18+：逐步放开数量
      let shouldShowLabels = false
      if (scale >= 19) {
        shouldShowLabels = list.length > 0
      } else if (scale >= 18) {
        shouldShowLabels = list.length > 0 && list.length <= 40
      } else if (scale >= 17) {
        shouldShowLabels = list.length > 0 && list.length <= 25
      }

      // 控制最多显示多少个名字，越放大越多
      let maxLabels = 0
      if (shouldShowLabels) {
        if (scale >= 19) {
          maxLabels = 24
        } else if (scale >= 18) {
          maxLabels = 16
        } else {
          maxLabels = 8
        }
      }

      // 选出需要显示名字的 POI（按距离由近到远）
      const labelTargetIds = new Set()
      if (shouldShowLabels && maxLabels > 0) {
        const sorted = list
          .filter((p) => p.latitude && p.longitude && p.name)
          .slice()
          .sort((a, b) => {
            const da = Number(a.distance)
            const db = Number(b.distance)
            const na = Number.isNaN(da) ? Number.POSITIVE_INFINITY : da
            const nb = Number.isNaN(db) ? Number.POSITIVE_INFINITY : db
            return na - nb
          })

        sorted.slice(0, maxLabels).forEach((p) => {
          labelTargetIds.add(p.markerId)
        })
      }

      // 名称相对于图标的偏移（上 / 下 / 左 / 右 轮流分布）
      const labelOffsets = [
        { anchorX: 0, anchorY: -40 }, // 上方
        { anchorX: 0, anchorY: 40 }, // 下方
        { anchorX: -60, anchorY: 0 }, // 左侧
        { anchorX: 60, anchorY: 0 } // 右侧
      ]
      let labelIndex = 0

      // 根据缩放级别调整字体大小，避免名字看起来过于粗大
      let labelFontSize = 10
      if (scale >= 19) {
        labelFontSize = 14
      } else if (scale >= 18) {
        labelFontSize = 12
      } else if (scale >= 17) {
        labelFontSize = 11
      }

      const poiMarkers = list
        .filter((p) => p.latitude && p.longitude)
        .map((p) => {
          let poiIconPath = '/static/assets/热门推荐.png'
          if (this.activeCategory === 'food') {
            poiIconPath = '/static/assets/面.png'
          } else if (this.activeCategory === 'scenic') {
            poiIconPath = '/static/assets/旅游.png'
          } else {
            poiIconPath = '/static/assets/我的.png'
          }

          const marker = {
            id: p.markerId,
            latitude: p.latitude,
            longitude: p.longitude,
            iconPath: poiIconPath,
            width: 28,
            height: 28
          }

          if (shouldShowLabels && labelTargetIds.has(p.markerId) && p.name) {
            const offset = labelOffsets[labelIndex % labelOffsets.length]
            labelIndex += 1
            marker.label = {
              content: p.name,
              color: '#ffffff',
              fontSize: labelFontSize,
              borderRadius: 16,
              bgColor: '#ff7a18',
              padding: 6,
              textAlign: 'center',
              anchorX: offset.anchorX,
              anchorY: offset.anchorY
            }
          }

          return marker
        })

      this.markers = markers.concat(poiMarkers)
    },


    async loadNearbyPois() {
      if (this.loadingPois) {
        return
      }

      this.loadingPois = true

      const currentPage = this.page || 1

      const params = {
        type: this.getCurrentPoiType(),
        page: currentPage
      }

      const keyword = this.searchKeyword || this.tagKeyword
      if (keyword) {
        params.keyword = keyword
      }

      // 使用当前搜索中心（“我” 或 选中的地标）作为查询圆心
      const centerLng = this.centerLng || this.longitude
      const centerLat = this.centerLat || this.latitude
      if (centerLng && centerLat) {
        params.userLng = centerLng
        params.userLat = centerLat

        // radius 单位为米，直接使用当前选中的半径；分页只通过 page 控制
        const radius = Number(this.selectedRadius) || 5000
        params.radius = radius
      }

      // 传递城市名（如果有）
      if (this.cityName) {
        params.city = this.cityName
      }

      // 分类多选：selectedCategories → foodCategory（多选逗号分隔）
      const categories = Array.isArray(this.selectedCategories)
        ? this.selectedCategories.filter((c) => c && c.trim())
        : []
      if (categories.length) {
        params.foodCategory = categories.join(',')
      }

      // 景点分类：使用 scenicLevel / scenicTags 传参
      if (this.activeCategory === 'scenic') {
        if (this.scenicLevelFilter) {
          params.scenicLevel = this.scenicLevelFilter
        }
        if (this.scenicTagsFilter) {
          params.scenicTags = this.scenicTagsFilter
        }
      }

      try {
        const pois = await getPois(params)

        const rawList = Array.isArray(pois) ? pois : []

        const mappedList = rawList.map((item, index) => ({
          ...item,
          // 保留后端 id 用于详情页；没有 id 时使用 page-index 兜底，避免重复
          id:
            item.id != null && item.id !== ''
              ? item.id
              : `${currentPage}-${index}`,
          name: item.name || '',
          address: item.address || '',
          distance: item.distance || '',
          type: item.type || '',
          latitude: item.latitude,
          longitude: item.longitude
        }))

        if (currentPage === 1) {
          this.poiList = mappedList
        } else {
          const existing = Array.isArray(this.poiList) ? this.poiList : []
          const existingIds = new Set(existing.map((item) => item.id))
          const appended = mappedList.filter((item) => !existingIds.has(item.id))
          this.poiList = existing.concat(appended)
        }

        // 统一为所有 poi 生成连续的 markerId，保证与地图点击事件匹配
        this.poiList = (Array.isArray(this.poiList) ? this.poiList : []).map(
          (item, index) => ({
            ...item,
            markerId: index + 1
          })
        )

        // hasMore：只要当前页有数据，就允许继续加载下一页（同一半径）
        this.hasMore = rawList.length > 0

        // 基于最新 poiList 和缩放等级构建 markers
        this.buildMarkers()
      } catch (err) {
        console.warn('[shanwei-map] loadNearbyPois fail:', err)
        uni.showToast({ title: '附近地点获取失败', icon: 'none' })
      } finally {
        this.loadingPois = false
      }
    },

    changeCategory(id) {
      if (this.activeCategory === id) {
        return
      }
      this.activeCategory = id
      this.activeFilterPopup = ''
      // 切换大类时重置分页
      this.page = 1
      this.hasMore = true


      // 不同大类使用不同的筛选标签
      if (id === 'food') {
        this.filterTags = [
          { id: 'nearby', label: '附近', active: true, hasArrow: true },
          { id: 'category', label: '分类', active: false, hasArrow: true },
          { id: 'sort', label: '排序', active: false, hasArrow: true }
        ]
        this.quickFilterTags = [
          { id: 'noodle', label: '面馆' },
          { id: 'shaanxi', label: '陕西菜' },
          { id: 'nearby500', label: '附近500m' },
          { id: 'weijia', label: '魏家凉皮' },
          { id: 'open', label: '营业中' }
        ]
      } else if (id === 'scenic') {
        this.filterTags = [
          { id: 'nearby', label: '附近', active: true, hasArrow: true },
          { id: 'category', label: '分类', active: false, hasArrow: true },
          { id: 'sort', label: '排序', active: false, hasArrow: true }
        ]
        // 景点下的快捷标签：人文景观 / 文物古迹 / 公园 / 免费景点
        this.quickFilterTags = [
          { id: 'scenic_culture', label: '人文景观' },
          { id: 'scenic_relic', label: '文物古迹' },
          { id: 'scenic_park', label: '公园' },
          { id: 'scenic_free', label: '免费景点' }
        ]
        this.activeScenicNearbyMenuId = 'distance'
      } else {



        // 非遗等其他类型，先使用与美食类似的标签文案
        this.filterTags = [
          { id: 'nearby', label: '附近', active: true, hasArrow: true },
          { id: 'category', label: '分类', active: false, hasArrow: true },
          { id: 'sort', label: '排序', active: false, hasArrow: true }
        ]
        this.quickFilterTags = []
      }

      // 切换大类时重置部分筛选状态
      if (id !== 'food') {
        this.selectedFoodCategoryId = 'all'
        this.activeSortId = 'recommend'
        this.activeQuickFilterId = ''
        this.onlyShowOpen = false
        this.tagKeyword = ''
        this.selectedCategories = []
      }

      this.selectedNearbyLandmarkId = ''

      // 切换大类时关闭搜索结果弹窗
      this.searchPanelVisible = false




      this.loadNearbyPois()
    },


    async handleSearchConfirm(e, options = {}) {
      const value = (e && e.detail && e.detail.value) || this.searchKeyword || ''
      this.searchKeyword = String(value).trim()
      // 手动搜索时清空标签关键词
      this.tagKeyword = ''
      // 搜索时重置分页
      this.page = 1
      this.hasMore = true

      if (!this.searchKeyword) {
        this.searchPanelVisible = false
        await this.loadNearbyPois()
        return
      }

      await this.loadNearbyPois()

      // 显示搜索结果弹窗
      this.searchPanelVisible = true

      if (options && options.navigateToDetail) {
        const list = this.displayPoiList
        if (Array.isArray(list) && list.length === 1) {
          this.openPoiDetail(list[0])
        }
      }
    },



    tapSearchButton() {
      // 点击搜索图标时，除了筛选列表，还会在只有一个结果时直接进详情
      this.handleSearchConfirm(
        { detail: { value: this.searchKeyword } },
        { navigateToDetail: true }
      )
    },


    clearSearch() {
      if (!this.searchKeyword && !this.tagKeyword) {
        return
      }
      this.searchKeyword = ''
      this.tagKeyword = ''
      this.searchPanelVisible = false
      this.selectedNearbyLandmarkId = ''
      // 清空搜索时重置分页
      this.page = 1
      this.hasMore = true
      this.loadNearbyPois()
    },




    tapFilterTag(tag) {
      if (!tag) {
        return
      }
      this.filterTags = this.filterTags.map((item) => ({
        ...item,
        active: item.id === tag.id
      }))

      if (['nearby', 'category', 'sort'].includes(tag.id)) {
        this.toggleFilterPopup(tag.id)
      }
    },

    toggleFilterPopup(type) {
      this.activeFilterPopup = this.activeFilterPopup === type ? '' : type
    },

    closeFilterPopup() {
      this.activeFilterPopup = ''
    },

    selectLandmarkGroup(group) {
      if (!group) {
        return
      }
      this.activeLandmarkGroupId = group.id
    },

    selectScenicNearbyMenu(menu) {
      if (!menu) {
        return
      }
      this.activeScenicNearbyMenuId = menu.id
    },

    selectNearbyDistance(option) {
      if (!option) {
        return
      }

      this.selectedRadius = option.value
      // 切换距离时重置分页
      this.page = 1
      this.hasMore = true
      this.closeFilterPopup()
      this.loadNearbyPois()
    },


    selectNearbyLandmark(option) {
      if (!option) {
        return
      }

      const hasCoordinate =
        option.longitude !== undefined &&
        option.latitude !== undefined &&
        option.longitude !== null &&
        option.latitude !== null &&
        option.longitude !== '' &&
        option.latitude !== ''

      if (hasCoordinate) {
        // 当前搜索中心切换为选中的地标
        this.centerType = 'landmark'
        this.centerLat = option.latitude
        this.centerLng = option.longitude

        // 地图中心同步到该地标
        this.latitude = option.latitude
        this.longitude = option.longitude
        this.locationText = `${option.label || '已选择地标'} 附近`
        // 使用地标坐标作为圆心时，不再带关键词
        this.searchKeyword = ''
        this.tagKeyword = ''
      } else {
        const keyword = option.keyword || option.label
        this.searchKeyword = keyword
      }

      this.selectedNearbyLandmarkId = option.id
      // 选地标相当于一次新的搜索，重置分页
      this.page = 1
      this.hasMore = true
      this.closeFilterPopup()
      this.loadNearbyPois()
    },




    selectFoodCategory(option) {
      if (!option) {
        return
      }

      if (this.activeCategory === 'scenic') {
        // 景点分类：支持 scenicLevel 单选 + scenicTags 多选
        const hasLevel = !!option.scenicLevel
        const hasTags =
          option.scenicTags !== undefined &&
          option.scenicTags !== null &&
          option.scenicTags !== ''

        if (option.id === 'all') {
          this.selectedScenicCategoryId = 'all'
          this.scenicLevelFilter = ''
          this.scenicTagsFilter = ''
          this.selectedScenicTagIds = []
        } else if (hasLevel && !hasTags) {
          // A 级景区（5A / 4A）：视为单选
          this.selectedScenicCategoryId = option.id
          this.scenicLevelFilter = option.scenicLevel || ''
          this.scenicTagsFilter = ''
          this.selectedScenicTagIds = []
        } else if (hasTags) {
          // scenicTags 多选：点击即切换选中状态
          const id = option.id
          const exists =
            Array.isArray(this.selectedScenicTagIds) &&
            this.selectedScenicTagIds.includes(id)

          if (exists) {
            this.selectedScenicTagIds = this.selectedScenicTagIds.filter((x) => x !== id)
          } else {
            this.selectedScenicTagIds = (this.selectedScenicTagIds || []).concat(id)
          }

          // 标签多选时，清空 scenicLevelFilter，只使用 scenicTags 过滤
          this.scenicLevelFilter = ''

          const allTagValues = []
          ;(this.selectedScenicTagIds || []).forEach((tagId) => {
            const opt = this.scenicCategoryOptions.find((item) => item.id === tagId)
            if (!opt) {
              return
            }
            const tagArr = Array.isArray(opt.scenicTags)
              ? opt.scenicTags
              : opt.scenicTags
                ? [opt.scenicTags]
                : []
            tagArr.forEach((t) => {
              if (t && allTagValues.indexOf(t) === -1) {
                allTagValues.push(t)
              }
            })
          })
          this.scenicTagsFilter = allTagValues.join(',')

          // scenicTags 多选时，不再依赖 selectedScenicCategoryId 做本地关键字过滤
          this.selectedScenicCategoryId = 'all'
        } else {
          // 兼容没有 scenicLevel/scenicTags 的旧配置
          this.selectedScenicCategoryId = option.id
          this.scenicLevelFilter = ''
          this.scenicTagsFilter = ''
          this.selectedScenicTagIds = []
        }

        // 切换景点分类时重置分页并重新加载（支持多选场景）
        this.page = 1
        this.hasMore = true
        this.loadNearbyPois()
      } else {
        this.selectedFoodCategoryId = option.id

        // 将美食分类映射到 selectedCategories，用于传给后端的 foodCategory
        if (option.id === 'all') {
          this.selectedCategories = []
        } else if (option.label) {
          this.selectedCategories = [option.label]
        }

        // 切换分类时重置分页并重新加载美食列表
        this.page = 1
        this.hasMore = true
        this.loadNearbyPois()
        this.closeFilterPopup()
      }
    },





    selectSortOption(option) {
      if (!option) {
        return
      }
      this.activeSortId = option.id
      this.closeFilterPopup()
    },

    tapQuickFilter(tag) {
      if (!tag) {
        return
      }

      // 再次点击同一个快捷标签，则重置
      if (this.activeQuickFilterId === tag.id) {
        this.resetQuickFilter(tag.id)
        return
      }

      this.activeQuickFilterId = tag.id

      // 美食快捷筛选
      if (this.activeCategory === 'food') {
        if (tag.id === 'nearby500') {
          this.selectedRadius = 500
          this.page = 1
          this.hasMore = true
          this.loadNearbyPois()
        } else if (tag.id === 'noodle') {
          // 面馆
          this.selectedFoodCategoryId = 'noodle'
          this.selectedCategories = ['面馆']
          this.page = 1
          this.hasMore = true
          this.loadNearbyPois()
        } else if (tag.id === 'shaanxi') {
          // 陕西菜
          this.selectedFoodCategoryId = 'shaanxi'
          this.selectedCategories = ['陕西菜']
          this.page = 1
          this.hasMore = true
          this.loadNearbyPois()
        } else if (tag.id === 'weijia') {
          // 使用标签关键词筛选魏家凉皮，但不在搜索框中展示文字
          this.searchKeyword = ''
          this.tagKeyword = '魏家凉皮'
          this.page = 1
          this.hasMore = true
          this.loadNearbyPois()
        }
        return
      }

      // 景点快捷筛选：直接绑定到景点分类
      if (this.activeCategory === 'scenic') {
        if (tag.id === 'scenic_culture') {
          this.selectedScenicCategoryId = 'culture'
        } else if (tag.id === 'scenic_relic') {
          this.selectedScenicCategoryId = 'relic'
        } else if (tag.id === 'scenic_park') {
          this.selectedScenicCategoryId = 'park'
        } else if (tag.id === 'scenic_free') {
          this.selectedScenicCategoryId = 'free'
        }
        this.page = 1
        this.hasMore = true
        this.loadNearbyPois()
      }

    },

    resetQuickFilter(id) {
      this.activeQuickFilterId = ''

      if (this.activeCategory === 'food') {
        if (id === 'nearby500') {
          // 恢复到默认 5km 内
          this.selectedRadius = 5000
          this.page = 1
          this.hasMore = true
          this.loadNearbyPois()
        } else if (id === 'noodle' || id === 'shaanxi') {
          this.selectedFoodCategoryId = 'all'
          this.selectedCategories = []
          this.page = 1
          this.hasMore = true
          this.loadNearbyPois()
        } else if (id === 'weijia') {
          this.searchKeyword = ''
          this.tagKeyword = ''
          this.page = 1
          this.hasMore = true
          this.loadNearbyPois()
        }
      } else if (this.activeCategory === 'scenic') {
        if (
          id === 'scenic_culture' ||
          id === 'scenic_relic' ||
          id === 'scenic_park' ||
          id === 'scenic_free'
        ) {
          this.selectedScenicCategoryId = 'all'
          this.page = 1
          this.hasMore = true
          this.loadNearbyPois()
        }
      }
    },

    // 判断景点分类弹窗中某个选项是否处于选中状态（用于多选高亮）
    isScenicCategoryActive(option) {
      if (!option) {
        return false
      }

      // "全部分类"：当既没有 scenicLevelFilter，也没有 scenicTagsFilter，且未选中任何 scenicTags 时视为选中
      if (option.id === 'all') {
        return (
          !this.scenicLevelFilter &&
          !this.scenicTagsFilter &&
          Array.isArray(this.selectedScenicTagIds) &&
          this.selectedScenicTagIds.length === 0
        )
      }

      // A 级景区（5A / 4A）：与当前 scenicLevelFilter 匹配
      if (option.scenicLevel) {
        return this.scenicLevelFilter === option.scenicLevel
      }

      // scenicTags：根据多选列表判断
      if (option.scenicTags) {
        return Array.isArray(this.selectedScenicTagIds)
          ? this.selectedScenicTagIds.includes(option.id)
          : false
      }

      // 兼容没有 scenicLevel/scenicTags 的旧配置
      return this.selectedScenicCategoryId === option.id
    },

    // 判断美食分类是否选中
    isFoodCategoryActive(option) {
      if (!option) {
        return false
      }
      return this.selectedFoodCategoryId === option.id
    },

    // 判断快捷标签是否选中
    isQuickFilterActive(tagId) {
      return this.activeQuickFilterId === tagId
    },



    matchPoiByKeywords(poi, keywords = []) {
      if (!poi || !keywords || keywords.length === 0) {
        return true
      }
      const baseText = [
        poi.name,
        poi.address,
        poi.type,
        poi.category,
        poi.tag,
        Array.isArray(poi.tags) ? poi.tags.join(' ') : ''
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      const keys = keywords.map((kw) => String(kw).toLowerCase())

      return keys.some((kw) => baseText.indexOf(kw) !== -1)
    },

    // 文档中的分类示例函数（美食）：
    // 使用高德原始 type + 店名进行本地过滤
    filterFoodPoisByCategoryDoc(pois, categoryLabel) {
      if (!Array.isArray(pois)) {
        return []
      }
      const category = categoryLabel || '全部'
      if (!category || category === '全部') {
        return pois
      }

      return pois.filter((poi) => {
        const t = poi.type || ''
        const name = poi.name || ''

        switch (category) {
          case '中餐':
            return t.includes('中餐厅')
          case '小吃快餐':
            return t.includes('快餐') || t.includes('小吃')
          case '面馆':
            return t.includes('面馆') || name.includes('面')
          case '清真菜':
            return name.includes('清真') || t.includes('清真')
          case '陕西菜':
            return name.includes('陕西') || name.includes('陕菜')
          case '奶茶/茶饮':
            return name.includes('奶茶') || name.includes('茶饮')
          case '糕点/烘焙':
            return t.includes('糕饼店') || t.includes('面包房')
          case '泡馍':
            return name.includes('泡馍')
          case '肉夹馍':
            return name.includes('肉夹馍')
          case '早餐必吃':
            return name.includes('早餐') || name.includes('早点')
          case '非遗美食':
            return name.includes('非遗')
          case '夜市小吃':
            return name.includes('夜市') || name.includes('夜宵')
          case '自助餐':
            return name.includes('自助') || t.includes('自助')
          case '凉皮':
            return name.includes('凉皮')
          case '烤串':
            return name.includes('烤串') || name.includes('烧烤')
          default:
            return true
        }
      })
    },

    hasOpenStatusField(list) {

      if (!Array.isArray(list) || list.length === 0) {
        return false
      }
      const item = list[0]
      return (
        Object.prototype.hasOwnProperty.call(item, 'businessStatus') ||
        Object.prototype.hasOwnProperty.call(item, 'openStatus') ||
        Object.prototype.hasOwnProperty.call(item, 'is_open')
      )
    },

    isPoiOpen(poi) {
      if (!poi) {
        return false
      }
      if (typeof poi.businessStatus !== 'undefined') {
        return String(poi.businessStatus) === '1' || poi.businessStatus === 1
      }
      if (typeof poi.openStatus !== 'undefined') {
        return String(poi.openStatus) === '1' || poi.openStatus === 1
      }
      if (typeof poi.is_open !== 'undefined') {
        return !!poi.is_open
      }
      return true
    },

    getScoreValue(poi) {
      if (!poi) {
        return 0
      }
      const raw =
        poi.score ||
        poi.rating ||
        poi.commentScore ||
        poi.comment_score
      const num = Number(raw)
      if (Number.isNaN(num)) {
        return 0
      }
      return num
    },

    getDistanceValue(poi) {
      if (!poi || poi.distance === undefined || poi.distance === null || poi.distance === '') {
        return Number.POSITIVE_INFINITY
      }
      const num = Number(poi.distance)
      if (Number.isNaN(num)) {
        return Number.POSITIVE_INFINITY
      }
      return num
    },

    getAvgPriceValue(poi) {

      if (!poi) {
        return Number.POSITIVE_INFINITY
      }
      const raw =
        poi.avgPrice ||
        poi.avg_price ||
        poi.averagePrice ||
        poi.average_price ||
        poi.price
      const num = Number(raw)
      if (Number.isNaN(num)) {
        return Number.POSITIVE_INFINITY
      }
      return num
    },

    sortByScoreDesc(list) {
      if (!Array.isArray(list)) {
        return []
      }
      const cloned = list.slice()
      cloned.sort((a, b) => this.getScoreValue(b) - this.getScoreValue(a))
      return cloned
    },

    sortByPriceAsc(list) {
      if (!Array.isArray(list)) {
        return []
      }
      const cloned = list.slice()
      cloned.sort((a, b) => this.getAvgPriceValue(a) - this.getAvgPriceValue(b))
      return cloned
    },

    // 排序函数：
    // - 推荐排序：按距离从近到远（缺失距离排在最后）
    // - 好评优先：按 rating 从高到低
    // - 低价优先：按 price 从低到高，缺失价格排在最后
    sortPoisByDoc(list) {
      if (!Array.isArray(list)) {
        return []
      }
      const cloned = list.slice()

      if (this.activeSortId === 'rating') {
        return cloned.sort((a, b) => {
          const ra = a.rating != null ? Number(a.rating) : 0
          const rb = b.rating != null ? Number(b.rating) : 0
          return rb - ra
        })
      }

      if (this.activeSortId === 'price_low') {
        return cloned.sort((a, b) => {
          const pa = a.price != null ? Number(a.price) : Number.MAX_VALUE
          const pb = b.price != null ? Number(b.price) : Number.MAX_VALUE
          return pa - pb
        })
      }

      // 推荐排序：统一按距离近 -> 远
      return cloned.sort((a, b) => this.getDistanceValue(a) - this.getDistanceValue(b))
    },



    handleMarkerTap(e) {
      const rawId = e.detail && (e.detail.markerId || e.detail.markerid)
      if (rawId === undefined || rawId === null) {
        return
      }
      const markerId = Number(rawId)
      // id 为 0 的是“我在这里”，不做跳转
      if (!Number.isFinite(markerId) || markerId === 0) {
        return
      }

      const found = this.poiList.find((p) => Number(p.markerId) === markerId)
      if (!found) {
        return
      }
      // 直接复用卡片点击逻辑：美食进详情，景点/非遗走导航
      this.openPoiDetail(found)
    },



    async openPoiDetail(item) {
      if (!item) {
        return
      }

      // 美食：跳转到门店详情页
      if (this.activeCategory === 'food') {
        const tags = this.getPoiTags(item)
        const query = []

        const push = (key, value) => {
          if (value === undefined || value === null || value === '') {
            return
          }
          query.push(`${key}=${encodeURIComponent(String(value))}`)
        }

        push('id', item.id)
        push('name', item.name)
        push('cover', this.getFoodCover(item))
        push('avgPrice', this.getAvgPriceValue(item))
        push('category', this.getPoiCategoryText(item))
        push('address', item.address)
        push('distance', item.distance)
        push('latitude', item.latitude)
        push('longitude', item.longitude)
        push('score', this.getScoreValue(item))
        if (Array.isArray(tags) && tags.length) {
          push('tags', JSON.stringify(tags))
        }
        // 若后端有营业时间/电话字段，可按需追加
        if (item.businessTime) {
          push('businessTime', String(item.businessTime))
        }

        if (item.phone) {
          push('phone', item.phone)
        }

        const queryStr = query.join('&')
        uni.navigateTo({ url: `/pages/index/FoodPoiDetail?${queryStr}` })
        return
      }

      // 景点：进入景点详情页（在详情页内再提供导航按钮）
      if (this.activeCategory === 'scenic') {
        const tags = this.getPoiTags(item)
        const query = []

        const push = (key, value) => {
          if (value === undefined || value === null || value === '') {
            return
          }
          query.push(`${key}=${encodeURIComponent(String(value))}`)
        }

        push('id', item.id)
        push('name', item.name)
        push('cover', this.getFoodCover(item))
        push('category', this.getPoiCategoryText(item))
        push('address', item.address)
        push('distance', item.distance)
        push('latitude', item.latitude)
        push('longitude', item.longitude)
        push('score', this.getScoreValue(item))
        if (Array.isArray(tags) && tags.length) {
          push('tags', JSON.stringify(tags))
        }

        const queryStr = query.join('&')
        uni.navigateTo({ url: `/pages/index/ScenicPoiDetail?${queryStr}` })
        return
      }

      // 非遗体验地：进入“非遗体验中心详情”页，内部再提供导航按钮
      if (this.activeCategory === 'heritage') {
        const tags = this.getPoiTags(item)
        const query = []

        const push = (key, value) => {
          if (value === undefined || value === null || value === '') {
            return
          }
          query.push(`${key}=${encodeURIComponent(String(value))}`)
        }

        push('id', item.id)
        push('name', item.name)
        push('cover', this.getFoodCover(item))
        push('avgPrice', this.getAvgPriceValue(item))
        push('category', this.getPoiCategoryText(item))
        push('address', item.address)
        push('distance', item.distance)
        push('latitude', item.latitude)
        push('longitude', item.longitude)
        push('score', this.getScoreValue(item))
        if (Array.isArray(tags) && tags.length) {
          push('tags', JSON.stringify(tags))
        }
        if (item.businessTime) {
          push('businessTime', String(item.businessTime))
        }
        if (item.businessStatus !== undefined && item.businessStatus !== null) {
          push('businessStatus', item.businessStatus)
        }
        if (item.openStatus !== undefined && item.openStatus !== null) {
          push('openStatus', item.openStatus)
        }
        if (item.phone) {
          push('phone', item.phone)
        }

        const queryStr = query.join('&')
        uni.navigateTo({ url: `/pages/index/HeritagePoiDetail?${queryStr}` })
        return
      }

      // 其他类型：后端路线规划 + 小程序内导航
      if (!item.latitude || !item.longitude) {
        uni.showToast({ title: '该地点暂无位置信息', icon: 'none' })
        return
      }

      if (!this.longitude || !this.latitude) {
        uni.showToast({ title: '正在获取当前位置，请稍后再试', icon: 'none' })
        return
      }

      try {
        uni.showLoading({ title: '正在规划路线...', mask: true })

        // 这里的 getNavigationUrl 现在返回的是“路线对象”
        const route = await getNavigationUrl({
          startLon: this.longitude,
          startLat: this.latitude,
          endLon: item.longitude,
          endLat: item.latitude
        })

        uni.hideLoading()

        if (!route) {
          uni.showToast({ title: '路线规划失败，请稍后再试', icon: 'none' })
          return
        }

        // 可选：从路线里取出距离/时间做提示
        const firstRoute =
          route.result &&
          Array.isArray(route.result.routes) &&
          route.result.routes[0]

        if (firstRoute) {
          const km = (firstRoute.distance / 1000).toFixed(1)
          const minutes = Math.round(firstRoute.duration / 60)
          uni.showToast({
            title: `约${km}公里，${minutes}分钟`,
            icon: 'none'
          })
        }

        // 实际导航：用小程序内置地图打开目的地
        uni.openLocation({
          latitude: Number(item.latitude),
          longitude: Number(item.longitude),
          name: item.name || '目的地',
          address: item.address || '',
          scale: 18
        })
      } catch (e) {
        uni.hideLoading()
        console.warn('[shanwei-map] openPoiDetail navigation error:', e)
        uni.showToast({ title: '路线规划失败，请稍后再试', icon: 'none' })
      }

    },



    formatDistance(distance) {
      if (distance === undefined || distance === null || distance === '') {
        return ''
      }
      const num = Number(distance)
      if (Number.isNaN(num)) {
        return String(distance)
      }
      if (num >= 1000) {
        const km = (num / 1000).toFixed(1)
        return `${km.replace(/\.0$/, '')}km`
      }
      return `${Math.round(num)}m`
    },

    // 以下几个方法用于美食卡片展示（封面、时间、评分、标签等）
    // 这里给出一个兜底实现，便于在没有全量字段时也能正常渲染页面
    getFoodCover(item) {
      if (!item) {
        return ''
      }
      // 优先使用后端提供的封面字段：imageUrl > cover > image > thumbnail
      return (
        item.imageUrl ||
        item.cover ||
        item.image ||
        item.thumbnail ||
        '/static/assets/热门推荐.png'
      )
    },


    getFoodTravelTimeText(item) {
      if (!item || !item.distance) {
        return '步行可达'
      }
      const meters = Number(item.distance)
      if (Number.isNaN(meters)) {
        return '步行可达'
      }
      // 简单估算：80m / 分钟
      const minutes = Math.max(1, Math.round(meters / 80))
      return `步行约${minutes}分钟`
    },

    getPoiScore(item) {
      const score = this.getScoreValue(item)
      if (!score) {
        return ''
      }
      return score.toFixed(1).replace(/\.0$/, '')
    },

    getPoiCategoryText(item) {
      if (!item) {
        return ''
      }
      // 美食场景下：优先使用去重 + 美化后的类型标签
      if (this.activeCategory === 'food') {
        const typeTags = this.getFoodTypeTags(item)
        if (Array.isArray(typeTags) && typeTags.length) {
          return typeTags[0]
        }
      }
      // 兼容常见字段：category/type + 自定义分类
      return (
        item.categoryName ||
        item.category ||
        item.type ||
        ''
      )
    },

    // 美食类型标签：基于高德 type 做去重 + 近义词合并，并输出好看的文案
    getFoodTypeTags(item) {
      if (!item) {
        return []
      }
      const rawType = (
        item.type ||
        item.category ||
        item.categoryName ||
        ''
      ).trim()
      if (!rawType) {
        return []
      }

      const parts = rawType
        .split(/[;；]/)
        .map((s) => s.trim())
        .filter(Boolean)
      if (!parts.length) {
        return []
      }

      const result = []
      const seenCanonical = []

      parts.forEach((part) => {
        if (!part || FOOD_TYPE_IGNORE_LIST.indexOf(part) !== -1) {
          return
        }
        const canonical = FOOD_TYPE_SYNONYM_MAP[part] || part
        if (seenCanonical.indexOf(canonical) !== -1) {
          return
        }
        seenCanonical.push(canonical)
        const pretty = FOOD_TYPE_PRETTY_TEXT_MAP[canonical] || canonical
        result.push(pretty)
      })

      if (!result.length && rawType) {
        result.push('美食')
      }

      return result.slice(0, 3)
    },

    // 景点类型标签：基于高德 type 做分割与简化，用作景点下方标签
    getScenicTypeTags(item) {
      if (!item || !item.type) {
        return []
      }
      const rawType = String(item.type).trim()
      if (!rawType) {
        return []
      }

      const parts = rawType
        .split(/[;；]/)
        .map((s) => s.trim())
        .filter(Boolean)
      if (!parts.length) {
        return []
      }

      const result = []
      const seen = []

      parts.forEach((part) => {
        if (!part) {
          return
        }
        // 把“风景名胜相关”这类尾巴剪掉
        let base = part.replace(/相关$/, '')
        base = base.trim()
        if (!base) {
          return
        }
        if (seen.indexOf(base) !== -1) {
          return
        }
        seen.push(base)
        result.push(base)
      })

      return result.slice(0, 3)
    },

    getPoiAvgPriceText(item) {
      const price = this.getAvgPriceValue(item)
      if (!price || !Number.isFinite(price) || price <= 0) {
        return ''
      }
      return `人均¥${Math.round(price)}`
    },

    getPoiTags(item) {
      if (!item) {
        return []
      }
      const tags = []
      if (Array.isArray(item.tags)) {
        tags.push(...item.tags)
      }
      if (item.special) {
        tags.push(item.special)
      }
      if (item.feature) {
        tags.push(item.feature)
      }
      // 美食列表下，把美食类型标签也一起作为标签传递给详情页
      if (this.activeCategory === 'food') {
        const typeTags = this.getFoodTypeTags(item)
        if (Array.isArray(typeTags) && typeTags.length) {
          tags.push(...typeTags)
        }
      }
      // 景点列表下：把景点类型标签也拼到标签里
      if (this.activeCategory === 'scenic') {
        const scenicTypeTags = this.getScenicTypeTags(item)
        if (Array.isArray(scenicTypeTags) && scenicTypeTags.length) {
          tags.push(...scenicTypeTags)
        }
      }
      // 去重
      return Array.from(new Set(tags)).slice(0, 3)
    },

    // 非遗卡片用的地区文案：优先使用 region/area，其次从地址里截取
    getHeritageAreaText(item) {
      if (!item) {
        return ''
      }
      const region = (item.region || item.area || '').trim()
      if (region) {
        return region
      }
      const address = (item.address || '').trim()
      if (!address) {
        return ''
      }
      // 简单从地址中截取“区/县/镇/街道”前后的片段，兜底直接返回地址
      const match = address.match(/(.{0,12}(区|县|镇|街道|乡|路|街).{0,8})/)
      return match ? match[1] : address
    },

    // 非遗卡片用的一句话简介，从常见字段中取值并做长度截断
    getHeritageIntro(item) {
      if (!item) {
        return ''
      }
      const raw =
        item.briefIntro ||
        item.highlight ||
        item.comment ||
        item.contentIntroduction ||
        item.introduction ||
        item.description ||
        ''
      const text = String(raw).trim()
      if (!text) {
        return ''
      }
      return text.length > 24 ? `${text.slice(0, 24)}...` : text
    }
  }
}

</script>

<style lang="scss" scoped>
.footprints-page {
  min-height: 100vh;
  padding: 16rpx 20rpx 24rpx;
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
  box-sizing: border-box;
}

.top-panel {
  /* 颜色风格跟详情页顶部信息卡统一 */
  background: #fffef7;
  border-radius: 24rpx;
  padding: 16rpx 20rpx 10rpx;
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.06);
  border: 2rpx solid #f0e0c0;
  margin-bottom: 18rpx;
}


.search-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

/* 搜索结果弹窗样式 */
.search-result-panel {
  margin-top: 10rpx;
  margin-bottom: 6rpx;
  background: #ffffff;
  border-radius: 18rpx;
  border: 2rpx solid #f0e0c0;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.06);
  max-height: 320rpx;
  overflow: hidden;
}

.search-result-scroll {
  max-height: 320rpx;
}

.search-result-item {
  padding: 12rpx 16rpx;
  border-bottom: 1rpx solid #f5e0c2;
}

.search-result-item:last-child {
  border-bottom-width: 0;
}

.search-result-name {
  font-size: 26rpx;
  font-weight: 600;
  color: #5a2c12;
}

.search-result-meta {
  margin-top: 4rpx;
  display: flex;
  flex-direction: column;
  gap: 2rpx;
  font-size: 22rpx;
  color: #8c5c2a;
}

.search-result-type {
  color: #c47a2a;
}

.search-result-address {
  color: #8c5c2a;
}

.search-bar {

  flex: 1;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border-radius: 999rpx;
  padding: 8rpx 18rpx;
  display: flex;
  box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.06);
}

.search-input {
  flex: 1;
  font-size: 24rpx;
  color: #5a2c12;
}

.search-clear {
  font-size: 28rpx;
  padding-left: 8rpx;
}

.search-btn-icon {
  width: 56rpx;
  height: 56rpx;
  margin-left: 8rpx;
}

.category-tabs {
  margin-top: 12rpx;
  display: flex;
  justify-content: space-around;
}

.category-tab {
  flex: 1;
  text-align: center;
  padding: 10rpx 0;
  font-size: 26rpx;
  color: #8c5c2a;
}

.category-tab--active {
  font-weight: 700;
  color: #5a2c12;
  position: relative;
}

.category-tab--active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 40rpx;
  height: 4rpx;
  border-radius: 999rpx;
  background: #ffb74d;
  transform: translateX(-50%);
}

.map-section {
  /* 地图模块外框配色与详情页 section-card 保持一致 */
  background: #fffef7;
  border-radius: 24rpx;
  border: 2rpx solid #f0e0c0;
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.06);
  padding: 12rpx 12rpx 16rpx;
  margin-bottom: 10rpx;
}


.location-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rpx 8rpx;
}

.location-title {
  font-size: 24rpx;
  color: #8c5c2a;
}

.location-actions {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.recenter-btn {
  display: flex;
  align-items: center;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
  background: #ffe9b0;
}

.manual-location-btn {
  display: flex;
  align-items: center;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
  background: #ffe9b0;
}

.recenter-icon {
  font-size: 26rpx;
  margin-right: 4rpx;
}

.recenter-text {
  font-size: 22rpx;
}

.manual-location-text {
  font-size: 22rpx;
}


.map-canvas {
  width: 100%;
  height: 460rpx;
  border-radius: 20rpx;
  overflow: hidden;
  position: relative;
}

/* 放大状态下的地图高度，接近半屏效果 */
.map-canvas--expanded {
  height: 64vh;
}

.map-native {
  width: 100%;
  height: 100%;
}

.map-webview-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.map-webview {

  width: 100%;
  height: 100%;
}

/* 地图放大/还原按钮样式 */
.map-expand-toggle {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 6rpx;
  padding: 6rpx 14rpx;
  border-radius: 999rpx;
  background: rgba(255, 254, 247, 0.96);
  border: 2rpx solid #f0e0c0;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.08);
  font-size: 22rpx;
  color: #8c5c2a;
}

.map-expand-toggle--bottom-right {
  right: 16rpx;
  bottom: 16rpx;
}

.map-expand-toggle--top-left {
  left: 16rpx;
  top: 16rpx;
}

.map-expand-toggle-icon {
  font-size: 24rpx;
}

.map-expand-toggle-text {
  font-size: 22rpx;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  color: #8c5c2a;
}

/* 加载更多按钮样式 */
.load-more-btn {
  margin: 16rpx auto 0;
  padding: 10rpx 28rpx;
  border-radius: 999rpx;
  border: 2rpx solid #f0e0c0;
  background: #fffef7;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);
  font-size: 24rpx;
  color: #8c5c2a;
  text-align: center;
  width: 60%;
}

.load-more-text {
  font-size: 24rpx;
}

/* 返回顶部按钮 */
.back-to-top-btn {
  position: fixed;
  right: 24rpx;
  bottom: 180rpx;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 6rpx;
  padding: 8rpx 18rpx;
  border-radius: 999rpx;
  background: rgba(255, 254, 247, 0.96);
  border: 2rpx solid #f0e0c0;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.15);
  font-size: 22rpx;
  color: #8c5c2a;
}

.back-to-top-icon {
  font-size: 26rpx;
}

.back-to-top-text {
  font-size: 22rpx;
}


.filter-row {
  margin-top: 12rpx;
  margin-bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding: 0 4rpx;
}

.filter-wrapper {
  position: relative;
  z-index: 20;
}

.filter-dropdown {
  margin: 0 -20rpx 8rpx;
  padding: 20rpx 20rpx 24rpx;
  background: #ffffff;
  border-radius: 0 0 24rpx 24rpx;
  box-shadow: 0 12rpx 24rpx rgba(0, 0, 0, 0.08);
  border-top: 2rpx solid #f0e0c0;
}


.filter-tag {
  flex-shrink: 0;
  margin-right: 12rpx;
  padding: 8rpx 16rpx;
  border-radius: 999rpx;
  background: #fff5e6;
  border: 2rpx solid #f0e0c0;
  font-size: 24rpx;
  color: #8c5c2a;
}

.filter-tag--active {
  background: #ffb74d;
  border-color: #ff9800;
  color: #5a2c12;
}

.filter-tag-inner {
  display: flex;
  align-items: center;
  gap: 6rpx;
}

.filter-tag-text {
  white-space: nowrap;
}

.filter-tag-arrow {
  font-size: 20rpx;
  color: #c47a2a;
  transition: transform 0.2s ease;
}

.filter-tag-arrow--open {
  transform: rotate(180deg);
}

.filter-tag--active .filter-tag-arrow {
  color: #5a2c12;
}

.quick-filter-row {
  margin-bottom: 12rpx;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding: 0 4rpx;
}

.quick-filter-tag {
  flex-shrink: 0;
  margin-right: 12rpx;
  padding: 6rpx 14rpx;
  border-radius: 999rpx;
  background: #fff9ec;
  border: 2rpx solid #f0e0c0;
  font-size: 22rpx;
  color: #8c5c2a;
}

.quick-filter-tag--active {
  background: #ffe0b2;
  border-color: #ff9800;
  color: #5a2c12;
}

.filter-popup-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.filter-popup-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: 320rpx;
  background: #fffaf1;
  border-radius: 0 0 24rpx 24rpx;
  border-top: 2rpx solid #f0e0c0;
  padding: 20rpx 20rpx 24rpx;
}

.filter-popup-content {
  max-height: 480rpx;
  overflow-y: auto;
}

.popup-section {
  margin-bottom: 16rpx;
}

.popup-section-title {
  font-size: 24rpx;
  color: #8c5c2a;
  margin-bottom: 12rpx;
}

.popup-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
}

.popup-chip {
  padding: 8rpx 16rpx;
  border-radius: 999rpx;
  background: #fff5e6;
  border: 2rpx solid #f0e0c0;
  font-size: 24rpx;
  color: #8c5c2a;
}

.popup-chip--distance {
  font-weight: 600;
}



.popup-chip--active {
  background: #ffb74d;
  border-color: #ff9800;
  color: #5a2c12;
}

.landmark-layout {
  margin-top: 8rpx;
  display: flex;
  border-radius: 16rpx;
  overflow: hidden;
  border: 2rpx solid #f0e0c0;
  background: #fffdf7;
}

.landmark-menu {
  width: 190rpx;
  background: #fff5e0;
  border-right: 2rpx solid #f0e0c0;
}

.landmark-menu-item {
  padding: 16rpx 12rpx;
  font-size: 26rpx;
  font-weight: 600;
  color: #8c5c2a;
  border-bottom: 2rpx solid #f8e9d2;
}


.landmark-menu-item--active {
  background: #ffe0b2;
  color: #5a2c12;
  font-weight: 600;
}

.landmark-list {
  flex: 1;
  padding: 12rpx 16rpx;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.landmark-item {
  padding: 10rpx 14rpx;
  border-radius: 999rpx;
  background: #fff5e6;
  border: 2rpx solid #f0e0c0;
  font-size: 24rpx;
  color: #8c5c2a;
}

.landmark-item--active {
  color: #ff6f00;
  border-color: #ff9800;
  font-weight: 600;
}


.scenic-nearby-layout {
  margin-top: 8rpx;
}

.scenic-subtitle {
  font-size: 24rpx;
  color: #c47a2a;
  margin-bottom: 12rpx;
}

.scenic-distance-item {
  padding: 14rpx 0;
  font-size: 26rpx;
  color: #5a2c12;
  border-bottom: 1rpx solid #f0e0c0;
  font-weight: 600;
}


.scenic-distance-item--active {
  color: #ff6f00;
}

.scenic-category-list {
  margin-top: 8rpx;
}

.scenic-category-item {
  padding: 14rpx 0;
  font-size: 26rpx;
  color: #5a2c12;
  border-bottom: 1rpx solid #f0e0c0;
}

.scenic-category-item--active {
  color: #ff6f00;
}

.sort-list {
  display: flex;
  flex-direction: column;
  margin-top: 8rpx;
}

.sort-item {
  width: 100%;
  text-align: left;
  padding: 12rpx 0;
  font-size: 28rpx;
  color: #8c5c2a;
}

.sort-item--active {
  color: #ff6f00;
  font-weight: 600;
}

.sort-item-label {
  white-space: nowrap;
}




.sort-item-check {
  margin-left: 12rpx;
  font-size: 24rpx;
}

.poi-list {
  margin-top: 8rpx;

  display: flex;
  flex-direction: column;
  gap: 12rpx;
}



.poi-card {

  /* 列表卡片配色与详情页 section-card 一致 */
  background: #fffef7;
  border-radius: 20rpx;
  border: 2rpx solid #f0e0c0;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.04);
  padding: 14rpx 18rpx;
  width: 100%;
  box-sizing: border-box;
}


.poi-card--food {
  /* 美食卡片也使用同一模块底色，风格统一 */
  background: #fffef7;
}

.poi-card--scenic {
  /* 景点卡片缩小padding，使卡片更紧凑 */
  padding: 10rpx 14rpx;
}

.poi-card--scenic .poi-title-line {
  margin-bottom: 4rpx;
}

.poi-card--scenic .poi-rating-line {
  margin-top: 0;
}

.poi-card--scenic .poi-meta-line {
  margin-top: 0;
}

.poi-card--scenic .poi-food-tags {
  margin-top: 2rpx;
}





.poi-card--heritage {
  /* 非遗卡片与美食/景点保持一致，占满整行宽度 */
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  flex-shrink: 1;
}


.poi-food {

  display: flex;
  flex-direction: row;
  gap: 12rpx;
}

.poi-card-thumb {
  /* 放大左侧图片尺寸，突出店铺封面 */
  width: 210rpx;
  height: 200rpx;
  border-radius: 16rpx;
  overflow: hidden;
  flex-shrink: 0;
  background: #f5f5f5;
}



.poi-card-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
  position: relative;
}

.heritage-card {
  display: flex;
  flex-direction: row;
  gap: 12rpx;
}

.heritage-rating-line {
  margin-top: 2rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22rpx;
  color: #c47a2a;
}

.heritage-rating-left {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.heritage-meta-line {
  margin-top: 4rpx;
  display: flex;
  align-items: center;
  gap: 8rpx;
  font-size: 22rpx;
  color: #8c5c2a;
}

.heritage-area {
  color: #8c5c2a;
}

/* 非遗卡片：位置下方的步行时间 + 右侧距离行 */
.heritage-travel-line {
  margin-top: 2rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22rpx;
  color: #8c5c2a;
}

.heritage-travel-text {
  color: #8c5c2a;
}



.heritage-intro {
  margin-top: 2rpx;
  font-size: 22rpx;
  color: #8c5c2a;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.heritage-bottom-line {
  margin-top: 6rpx;
  display: flex;
  justify-content: flex-end;
}

.heritage-category-line {
  margin-top: 2rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rpx;
  flex-wrap: nowrap;
}





.poi-title-line {

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6rpx;
}

.poi-name {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
}

.poi-name--food {
  font-size: 30rpx;
  font-weight: 700;
}

.poi-distance {
  font-size: 22rpx;
  color: #c47a2a;
}

.poi-address {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
}

.poi-meta-line {
  font-size: 22rpx;
  color: #8c5c2a;
  margin-top: 2rpx;
}

/* 景点卡片：地点下方的品类胶囊标签行 */
.poi-category-line {
  margin-top: 4rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}


.poi-rating-line {
  margin-top: 2rpx;
  display: flex;
  align-items: center;
  gap: 12rpx;
  font-size: 22rpx;
  color: #c47a2a;
}

.poi-score {
  padding: 2rpx 8rpx;
  border-radius: 8rpx;
  background: #fff3e0;
  color: #ff6f00;
}

.poi-category {
  color: #8c5c2a;
}

.poi-price {
  color: #8c5c2a;
}

.poi-food-tags {
  margin-top: 4rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rpx;
}

.poi-tags-left {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}

.poi-tags-line {
  margin-top: 8rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}

.poi-tag,
.poi-tag-pill {
  font-size: 22rpx;
  color: #7b2f00;
  background: #ffecc7;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
}

// 美食卡片下的类型标签样式：边框 + 更精致的配色
.poi-tag-pill--food {
  border: 2rpx solid #ffd08a;
  background: rgba(255, 236, 199, 0.35);
  color: #a45500;
}

.poi-distance-strong {
  flex-shrink: 0;
  font-size: 22rpx;
  color: #c47a2a;
}

/* 美食卡片距离显示在右下角 */
.poi-distance-bottom-right {
  position: absolute;
  right: 0;
  bottom: 0;
}

/* 非遗列表卡片尺寸压缩，仅影响非遗列表 */
.poi-card--heritage {
  padding: 8rpx 14rpx;
}

/* 非遗卡片左侧图片放大，向下拓展更多高度 */
.poi-card--heritage .poi-card-thumb {
  height: 180rpx;
}

/* 景点卡片左侧图片缩小 */
.poi-scenic .poi-card-thumb {
  width: 180rpx;
  height: 160rpx;
}




/* 非遗卡片内部行间距适当压缩 */
.poi-card--heritage .poi-title-line {
  margin-bottom: 2rpx;
}

.poi-card--heritage .heritage-meta-line {
  margin-top: 2rpx;
}

.poi-card--heritage .heritage-travel-line {
  margin-top: 0;
}

.poi-card--heritage .heritage-intro {
  margin-top: 2rpx;
}


.empty-hint {

  margin-top: 24rpx;
  text-align: center;
  font-size: 24rpx;
  color: #8c5c2a;
}
</style>

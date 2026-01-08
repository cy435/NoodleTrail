<template>
  <view class="shop-page">
    <!-- 顶部：店铺图片（可扩展为轮播） -->
    <view class="shop-hero">
      <image
        class="shop-hero-img"
        :src="heroImage"
        mode="aspectFill"
      />
    </view>

    <!-- 店铺关键信息卡片 -->
      <view class="shop-info-card">
      <view class="shop-name-row">
        <text class="shop-name">{{ shop.name || '美食门店' }}</text>
        <view
          v-if="showRecentlyViewed"
          class="shop-badge-row shop-badge-row--inline"
        >
          <text class="shop-badge">刚刚浏览</text>
        </view>
      </view>
      <view class="shop-subtitle-row">
        <text class="shop-subtitle-type">{{ smallTypeLabel }}</text>
        <text class="shop-subtitle-sep">｜</text>
        <text class="shop-subtitle-price">{{ displayAvgPrice }}</text>
      </view>



      <view class="shop-meta-row">
        <view class="shop-score-block">
          <view class="shop-score-main-row">
            <text class="shop-score-label">评分</text>
            <text class="shop-score-main">{{ displayScore }}</text>
          </view>
          <view v-if="ratingStars && ratingStars.length" class="shop-score-stars-row">
            <text
              v-for="(star, index) in ratingStars"
              :key="index"
              :class="['score-star', `score-star--${star}`]"
            >★</text>
            <text v-if="ratingDesc" class="score-desc">{{ ratingDesc }}</text>
          </view>
        </view>
        <view class="shop-meta-right">
          <view class="shop-meta-line shop-meta-line--category">
            <view
              v-if="normalizedTags && normalizedTags.length"
              class="meta-tag-chips"
            >
              <text
                v-for="(tag, index) in normalizedTags"
                :key="tag"
                :class="['shop-tag', { 'shop-tag--primary': index === 0 }]"
              >{{ tag }}</text>
            </view>
            <text v-else class="meta-value meta-value--muted">暂无特色标签</text>
          </view>
        </view>

      </view>





    </view>



    <!-- 位置与驾车信息 -->
    <view class="section-card">
      <view class="section-header section-header--location">
        <view class="location-header-left" @tap="navigateToShop">
          <text class="section-title">位置</text>
          <text
            v-if="driveInfoText"
            class="location-drive"
          >{{ driveInfoText }}</text>
          <view class="location-line">
            <text class="location-label">地址</text>
            <text class="location-value">{{ shop.address || '暂无地址信息' }}</text>
            <text
              v-if="shop.alias"
              class="location-alias"
            >别名：{{ shop.alias }}</text>
          </view>
        </view>
        <view class="location-header-actions">
          <view class="location-icon-btn" @tap="navigateToShop">
            <image
              class="icon-map"
              src="/static/assets/地图.png"
              mode="aspectFill"
            />
            <text class="icon-label">{{ navButtonText }}</text>
          </view>
          <view class="location-icon-btn" @tap="callPhone">
            <image
              class="icon-phone"
              src="/static/assets/电话.png"
              mode="aspectFit"
            />
            <text class="icon-label">拨打电话</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 推荐菜（用户推荐） -->
    <view class="section-card">
      <view class="section-header section-header--with-action">
        <text class="section-title">推荐菜</text>
        <text
          class="section-action"
          @tap="onAddDish"
        >我要推荐</text>
      </view>
      <view
        v-if="recommendedDishes && recommendedDishes.length"
        class="dish-grid"
      >
        <view
          v-for="dish in recommendedDishes"
          :key="dish.id"
          class="dish-card"
        >
          <view v-if="getDishImage(dish)" class="dish-image-wrapper">
            <image
              class="dish-image"
              :src="getDishImage(dish)"
              mode="aspectFill"
              @error="handleDishImageError(dish, $event)"
              :lazy-load="true"
            />
            <view v-if="dish._imageError" class="dish-image-placeholder">
              <text class="dish-placeholder-icon">🍜</text>
            </view>
          </view>
          <view class="dish-content">
            <view class="dish-main-row">
              <text class="dish-name">{{ dish.name }}</text>
              <text
                v-if="dish.price != null && dish.price !== ''"
                class="dish-price"
              >¥{{ dish.price }}</text>
            </view>
            <view class="dish-footer-row">
              <text class="dish-recommend-count">
                {{
                  (dish.recommendCount != null && dish.recommendCount !== '')
                    ? dish.recommendCount
                    : (dish.recommendedCount != null && dish.recommendedCount !== '')
                      ? dish.recommendedCount
                      : (dish.count != null && dish.count !== '')
                        ? dish.count
                        : 0
                }}人推荐
              </text>
              <text
                v-if="canDeleteDish(dish)"
                class="dish-delete"
                @tap="onDeleteDish(dish)"
              >删除</text>
            </view>
          </view>
        </view>
      </view>

      <view v-else class="section-body">
        <text class="section-text section-text--muted">暂无推荐菜，欢迎为本店补充~</text>
      </view>
    </view>


    <!-- 评论列表（用户评论） -->
    <view class="section-card">
      <view class="section-header section-header--with-action">
        <text class="section-title">评论</text>
        <text
          class="section-action"
          @tap="onAddComment"
        >写评论</text>
      </view>
      <view
        v-if="comments && comments.length"
        class="comment-list"
      >
        <view
          v-for="item in comments"
          :key="item.id"
          class="comment-card"
        >
          <view class="comment-header">
            <view class="comment-user">
              <image
                v-if="item.avatarUrl || item.avatar"
                class="comment-avatar-img"
                :src="item.avatarUrl || item.avatar"
                mode="aspectFill"
              />
              <text
                v-else
                class="comment-avatar"
              >{{ item.userName ? item.userName.charAt(0) : '食' }}</text>
              <view class="comment-user-meta">
                <text class="comment-name">{{ item.userName || '热心食客' }}</text>
                <text class="comment-time">{{ item.time || item.date || '' }}</text>
              </view>
            </view>
            <view
              v-if="item.score"
              class="comment-score-row"
            >
              <text
                v-for="(star, sIndex) in getCommentStars(item.score)"
                :key="sIndex"
                :class="['score-star', `score-star--${star}`]"
              >★</text>
              <text class="comment-score-text">{{ item.score }}分</text>
            </view>
            <text
              v-else
              class="comment-score comment-score--empty"
            >暂无评分</text>
          </view>


          <text class="comment-text">{{ item.content }}</text>

          <view
            v-if="item.images && item.images.length"
            class="comment-img-row"
          >
            <image
              v-for="(img, idx) in item.images"
              :key="idx"
              class="comment-img"
              :src="img"
              mode="aspectFill"
              @tap="previewCommentImages(item, idx)"
            />
          </view>

          <view class="comment-footer">
            <view class="comment-actions">
              <view
                class="comment-action"
                :class="{ 'comment-action--active': item._liked }"
                @tap="onLikeComment(item)"
              >
                <text class="comment-action-icon">👍</text>
                <text class="comment-action-text">
                  {{ item.likeCount != null ? item.likeCount : 0 }}
                </text>
              </view>
              <view
                class="comment-action"
                :class="{ 'comment-action--active': item._disliked }"
                @tap="onDislikeComment(item)"
              >
                <text class="comment-action-icon">👎</text>
                <text class="comment-action-text">
                  {{
                    item.dislikeCount != null
                      ? item.dislikeCount
                      : (item.unlikeCount != null ? item.unlikeCount : 0)
                  }}
                </text>
              </view>
              <view
                class="comment-action comment-action--danger"
                @tap="onDeleteComment(item)"
              >
                <text class="comment-action-icon">🗑</text>
                <text class="comment-action-text">删除</text>
              </view>
            </view>
          </view>

        </view>
      </view>
      <view v-else class="section-body">
        <text class="section-text section-text--muted">暂时还没有评论，欢迎成为第一位点评的食客～</text>
      </view>
    </view>

    <!-- 推荐菜 / 评论 弹窗：点击“我要推荐”和“写评论”时弹出 -->
    <view
      v-if="showDishDialog"
      class="overlay-mask"
      @tap="closeDishDialog"
    >
      <view class="overlay-panel" @tap.stop>
        <view class="overlay-header">
          <text class="overlay-title">推荐菜</text>
          <text class="overlay-close" @tap="closeDishDialog">×</text>
        </view>
        <view class="overlay-body">
          <view class="form-item">
            <text class="form-label">菜名</text>
            <input
              class="form-input"
              v-model="dishForm.name"
              placeholder="例如：招牌牛肉面"
              confirm-type="done"
            />
          </view>
          <view class="form-item">
            <text class="form-label">价格</text>
            <input
              class="form-input"
              v-model="dishForm.price"
              type="number"
              placeholder="可选，单位元"
              confirm-type="done"
            />
          </view>
          <view class="form-item">
            <text class="form-label">图片（可选）</text>
            <view class="form-images-row">

              <view
                v-if="dishForm.image"
                class="form-image-wrapper"
                @tap="previewDishImage"
              >
                <image
                  :src="dishForm.image"
                  class="form-image"
                  mode="aspectFill"
                />
                <text
                  class="form-image-delete"
                  @tap.stop="removeDishImage"
                >×</text>
              </view>
              <view
                v-else
                class="form-image-add"
                @tap="chooseDishImage"
              >
                <text class="form-image-add-icon">＋</text>
                <text class="form-image-add-text">添加图片</text>
              </view>
            </view>
          </view>
        </view>

        <view class="overlay-footer">
          <button
            class="overlay-btn overlay-btn--secondary"
            @tap="closeDishDialog"
          >取消</button>
          <button
            class="overlay-btn overlay-btn--primary"
            @tap="submitDishRecommendation"
          >提交</button>
        </view>
      </view>
    </view>

    <view
      v-if="showCommentDialog"
      class="overlay-mask"
      @tap="closeCommentDialog"
    >
      <view class="overlay-panel" @tap.stop>
        <view class="overlay-header">
          <text class="overlay-title">写评论</text>
          <text class="overlay-close" @tap="closeCommentDialog">×</text>
        </view>
        <view class="overlay-body">
          <view class="form-item">
            <text class="form-label">评分</text>
            <view class="form-rating">
              <text
                v-for="(star, index) in 5"
                :key="index"
                :class="['form-rating-star', { 'form-rating-star--active': Number(commentForm.score) > index && Number(commentForm.score) > 0 }]"
                @tap="setCommentScore(index)"
              >★</text>
              <text
                v-if="Number(commentForm.score) > 0"
                class="form-rating-score-text"
              >{{ commentForm.score }} 分</text>
            </view>
          </view>
          <view class="form-item">
            <text class="form-label">评论内容</text>
            <textarea
              class="form-textarea"
              v-model="commentForm.content"
              placeholder="说说口味、环境、服务等体验～"
              auto-height
              maxlength="300"
            />
          </view>
          <view class="form-item">
            <text class="form-label">图片（可选）</text>
            <view class="form-images-row">
              <view
                v-for="(img, index) in commentForm.images"
                :key="index"
                class="form-image-wrapper"
                @tap="previewCommentFormImage(index)"
              >
                <image
                  :src="img"
                  class="form-image"
                  mode="aspectFill"
                />
                <text
                  class="form-image-delete"
                  @tap.stop="removeCommentImage(index)"
                >×</text>
              </view>
              <view
                v-if="!commentForm.images || commentForm.images.length < maxCommentImages"
                class="form-image-add"
                @tap="chooseCommentImages"
              >
                <text class="form-image-add-icon">＋</text>
                <text class="form-image-add-text">添加图片</text>
              </view>
            </view>
          </view>
        </view>
        <view class="overlay-footer">
          <button
            class="overlay-btn overlay-btn--secondary"
            @tap="closeCommentDialog"
          >取消</button>
          <button
            class="overlay-btn overlay-btn--primary"
            @tap="submitComment"
          >提交</button>
        </view>
      </view>
    </view>

    <!-- 添加到清单弹窗：与陕味集页面风格一致 -->
    <view
      v-if="showAddToListDialog"
      class="dialog-mask"
      @tap="closeAddToListDialog"
    >
      <view class="add-to-list-dialog" @tap.stop>
        <view class="dialog-title">添加到清单</view>

        <!-- 门店信息 -->
        <view class="food-info">
          <text class="food-info-name">{{ (shop && shop.name) || '' }}</text>
        </view>

        <!-- 选择日期 -->
        <view class="dialog-section">
          <view class="section-label">选择日期</view>
          <picker
            mode="date"
            :value="checklistDateTemp || checklistDate"
            start="2000-01-01"
            end="2100-12-31"
            @change="onChecklistDateChange"
          >
            <view class="date-picker-btn">
              <text>{{ checklistDate }}</text>
              <text class="picker-arrow">▼</text>
            </view>
          </picker>
        </view>

        <!-- 选择清单 -->
        <view class="dialog-section">
          <view class="section-label">选择清单</view>

          <view
            v-if="checklists.length > 0"
            class="checklist-list"
          >
            <view
              v-for="list in checklists"
              :key="list.id"
              class="checklist-item"
              :class="{ active: selectedChecklistId === list.id }"
              @tap="selectChecklist(list)"
            >
              <text class="checklist-name">{{ list.name }}</text>
              <text
                v-if="selectedChecklistId === list.id"
                class="check-icon"
              >✓</text>
            </view>
          </view>

          <view
            v-if="checklists.length === 0"
            class="no-checklist-tip"
          >
            <text>该日期没有清单，请先创建清单</text>
          </view>
        </view>

        <!-- 备注输入 -->
        <view class="dialog-section">
          <view class="section-label">备注（可选）</view>
          <textarea
            class="note-input"
            v-model="addToListNote"
            placeholder="请输入备注"
            placeholder-style="color: #999"
            maxlength="200"
            :auto-height="true"
          />
        </view>

        <!-- 操作按钮 -->
        <view class="dialog-actions">
          <view
            class="dialog-btn cancel"
            @tap="closeAddToListDialog"
          >取消</view>
          <view
            class="dialog-btn confirm"
            @tap="confirmAddToList"
          >确定</view>
        </view>
      </view>
    </view>

    <!-- 附近推荐 -->
    <view
      v-if="nearbyShops && nearbyShops.length"
      class="section-card"
    >
      <view class="section-header">
        <text class="section-title">附近推荐</text>
      </view>
      <view class="nearby-list">
        <view
          v-for="item in nearbyShops"
          :key="item.id"
          class="nearby-card"
          @tap="openNearbyShop(item)"
        >
          <image
            class="nearby-img"
            :src="item.cover"
            mode="aspectFill"
          />
          <view class="nearby-info">
            <text class="nearby-name">{{ item.name }}</text>
            <text
              v-if="item.distance"
              class="nearby-distance"
            >{{ formatDistance(item.distance) }}</text>
          </view>
        </view>
      </view>
    </view>


    <!-- 底部操作条：收藏 / 已体验 / 分享 + 导航 -->
    <view class="bottom-bar">
      <view class="bottom-left">
        <view
          class="bottom-icon-item"
          :class="{ 'bottom-icon-item--active': isFavorited }"
          @tap="toggleFavorite"
        >
          <image
            class="bottom-icon-img"
            :class="{ 'bottom-icon-img--active': isFavorited }"
            src="/static/assets/收藏.png"
            mode="aspectFit"
          />
          <text class="bottom-label">{{ isFavorited ? '已收藏' : '收藏' }}</text>
        </view>
        <view
          class="bottom-icon-item"
          :class="{ 'bottom-icon-item--active': isExperienced }"
          @tap="toggleExperienced"
        >
          <image
            class="bottom-icon-img"
            :class="{ 'bottom-icon-img--active': isExperienced }"
            src="/static/assets/体验.png"
            mode="aspectFit"
          />
          <text class="bottom-label">{{ isExperienced ? '已体验' : '体验' }}</text>
        </view>
        <!-- #ifdef MP-WEIXIN -->
        <button
          class="bottom-icon-item"
          :class="{ 'bottom-icon-item--active': hasShared }"
          open-type="share"
          @tap.stop="shareShop"
        >
          <image
            class="bottom-icon-img"
            :class="{ 'bottom-icon-img--active': hasShared }"
            src="/static/assets/分享2.png"
            mode="aspectFit"
          />
          <text class="bottom-label">分享</text>
        </button>
        <!-- #endif -->
        <!-- #ifndef MP-WEIXIN -->
        <view
          class="bottom-icon-item"
          :class="{ 'bottom-icon-item--active': hasShared }"
          @tap="shareShop"
        >
          <image
            class="bottom-icon-img"
            :class="{ 'bottom-icon-img--active': hasShared }"
            src="/static/assets/分享2.png"
            mode="aspectFit"
          />
          <text class="bottom-label">分享</text>
        </view>
        <!-- #endif -->
      </view>

      <view class="bottom-right">
        <view
          class="add-to-list-btn"
          @tap="openAddToListDialog"
        >
          <text class="add-to-list-text">加入清单</text>
          <image
            class="add-to-list-icon"
            src="/static/assets/加入清单.png"
            mode="widthFix"
          />
        </view>
      </view>



    </view>

    <!-- 简单内嵌导航 web-view（点击导航后展示，可按需扩展成弹层） -->
    <view v-if="navigationUrl" class="nav-webview-wrap">
      <web-view :src="navigationUrl" class="nav-webview" />
    </view>
  </view>
</template>

<script>
const { getPoiDetail, getPois, submitPoiRecommendedDish, submitPoiComment, deletePoiComment, deleteRecommendDish, updatePoiFavorite, updatePoiExperience, reactPoiComment, uploadImage } = require('../../api/map.js')

const { checkShared, recordShare } = require('../../api/share.js')
const { addFoodToChecklist } = require('../../api/foods.js')


// 腾讯位置服务路线规划插件配置：使用你在腾讯位置服务后台申请的「微信小程序」key
const AMAP_ROUTE_PLAN_KEY = 'PL2BZ-2QP6Q-OG45Q-BUYY4-QMEPK-4NB55'
const AMAP_ROUTE_PLAN_REFERER = '秦食匠艺'

// 当前页面对应的 POI 类型：1=美食
const POI_TYPE = 1


export default {
  name: 'FoodPoiDetail',
  data() {
    return {
      shop: {
        id: '',
        name: '',
        cover: '',
        // 评分相关：用于展示顶部的“评分 X.X 分”以及星级
        score: '',
        avgPrice: '',
        category: '',
        address: '',
        distance: '', // 单位：米
        latitude: null,
        longitude: null,
        phone: '',
        city: '',
        type: '',
        typeCode: '',
        alias: '',
        naviPoiId: '',
        entranceLatitude: null,
        entranceLongitude: null,
        openStatus: null,
        openingHours: ''
      },

      userLat: null,
      userLng: null,
      tags: [],
      businessTimeText: '',
      introText: '',
      tipsText: '',
      recommendedDishes: [],
      comments: [],
      nearbyShops: [],
      showMoreInfo: false,
      isFavorited: false,
      isExperienced: false,
      hasShared: false,
      navigationUrl: '',
      showRecentlyViewed: false,

      // 推荐菜 / 评论弹窗相关状态
      showDishDialog: false,
      dishForm: {
        name: '',
        price: '',
        image: ''
      },
      showCommentDialog: false,
      commentForm: {
        score: 0,
        content: '',
        images: []
      },
      submittingDish: false,
      submittingComment: false,

      // 评论图片相关配置
      maxCommentImages: 6,

      // 加入清单弹窗相关状态
      showAddToListDialog: false,
      checklistDate: new Date().toISOString().split('T')[0],
      checklistDateTemp: '',
      checklists: [],
      selectedChecklistId: '',
      addToListNote: ''

    }

  },

  computed: {
    heroImage() {
      return (
        this.shop.cover ||
        '/static/assets/热门推荐.png'
      )
    },
    displayScore() {
      if (
        !this.shop ||
        this.shop.score === undefined ||
        this.shop.score === null ||
        this.shop.score === ''
      ) {
        return '0.0'
      }
      const num = Number(this.shop.score)
      if (Number.isNaN(num) || num < 0) {
        return '0.0'
      }
      return num.toFixed(1).replace(/\.0$/, '')
    },

    ratingValue() {
      if (!this.shop || this.shop.score === undefined || this.shop.score === null || this.shop.score === '') {
        return 0
      }
      const num = Number(this.shop.score)
      if (Number.isNaN(num) || num < 0) {
        return 0
      }
      return num
    },

    ratingStars() {
      const value = this.ratingValue
      if (!value) {
        return []
      }
      const stars = []
      const fullCount = Math.floor(value)
      const hasHalf = value - fullCount >= 0.5 && fullCount < 5
      for (let i = 0; i < fullCount && stars.length < 5; i += 1) {
        stars.push('full')
      }
      if (hasHalf && stars.length < 5) {
        stars.push('half')
      }
      while (stars.length < 5) {
        stars.push('empty')
      }
      return stars
    },

    ratingDesc() {
      const v = this.ratingValue
      if (!v) {
        return ''
      }
      if (v >= 4) return '口碑不错'
      if (v >= 3) return '评价尚可'
      return '评价较少'
    },


    displayAvgPrice() {
      if (
        !this.shop ||
        this.shop.avgPrice === undefined ||
        this.shop.avgPrice === null ||
        this.shop.avgPrice === ''
      ) {
        return '人均待定'
      }
      const num = Number(this.shop.avgPrice)
      if (Number.isNaN(num) || num <= 0) {
        return '人均待定'
      }
      return `人均¥${Math.round(num)}`
    },

    driveInfoText() {
      const distance = this.shop && this.shop.distance
      if (!distance) {
        return ''
      }
      const meters = Number(distance)
      if (Number.isNaN(meters) || meters <= 0) {
        return ''
      }
      const km = meters / 1000
      const minutes = Math.max(3, Math.round((km / 20) * 60)) // 假设均速 20km/h
      const kmText = km >= 1 ? `${km.toFixed(1).replace(/\.0$/, '')}公里` : `${Math.round(meters)}米`
      return `驾车约${kmText} ${minutes}分钟`
    },

    walkTimeText() {
      const distance = this.shop && this.shop.distance
      const meters = Number(distance)
      if (!distance || Number.isNaN(meters) || meters <= 0) {
        return '距离较近'
      }
      const minutes = Math.ceil(meters / 50)
      if (!minutes || minutes <= 0) {
        return '距离较近'
      }
      return `步行${minutes}分钟可达`
    },

    normalizedTags() {
      const list = []
      if (Array.isArray(this.tags)) {
        list.push(...this.tags)
      }
      if (!list.length && this.shop && this.shop.category) {
        list.push(
          ...String(this.shop.category)
            .split(/[;，、\/]/)
            .map((s) => s.trim())
            .filter(Boolean)
        )
      }
      const generic = [
        '餐饮服务',
        '风景名胜',
        '购物服务',
        '生活服务',
        '公司企业',
        '政府机构及社会团体',
        '旅游服务',
        '休闲娱乐',
        '体育休闲服务'
      ]
      const seen = new Set()
      const result = []
      list.forEach((tag) => {
        if (!tag) return
        const cleaned = String(tag).replace(/#/g, '').trim()
        if (!cleaned) return
        if (generic.indexOf(cleaned) !== -1) return
        const key = cleaned.toLowerCase()
        if (seen.has(key)) return
        seen.add(key)
        result.push(cleaned)
      })
      return result.slice(0, 4)
    },
    smallTypeLabel() {
      const rawType = this.shop && this.shop.type ? String(this.shop.type).trim() : ''
      const fallback = this.shop && this.shop.category
        ? String(this.shop.category).trim()
        : '餐饮服务'
      if (!rawType) {
        return fallback || '餐饮服务'
      }
      const parts = rawType
        .split(/[;；]/)
        .map((s) => s.trim())
        .filter(Boolean)
      if (!parts.length) {
        return fallback || rawType || '餐饮服务'
      }
      return parts[parts.length - 1]
    },
    navButtonText() {
      if (
        this.shop &&
        this.shop.entranceLatitude &&
        this.shop.entranceLongitude
      ) {
        return '精准导航'
      }
      return '导航'
    },
    defaultDishImage() {

      return '/static/assets/热门推荐.png'
    }
  },

  onLoad(options) {
    const opt = options || {}
    this.shop.id = opt.id || ''
    this.shop.name = opt.name || ''
    this.shop.cover = opt.cover || ''
    this.shop.avgPrice = opt.avgPrice || ''
    this.shop.category = opt.category || ''
    this.shop.address = opt.address || ''
    this.shop.distance = opt.distance || ''
    this.shop.latitude = opt.latitude ? Number(opt.latitude) : null
    this.shop.longitude = opt.longitude ? Number(opt.longitude) : null

    // 兼容 score / rating 两种字段来源，优先使用显式传入的 score
    if (opt.score !== undefined && opt.score !== null && opt.score !== '') {
      this.shop.score = Number(opt.score)
    } else if (opt.rating !== undefined && opt.rating !== null && opt.rating !== '') {
      this.shop.score = Number(opt.rating)
    } else {
      this.shop.score = ''
    }

    this.shop.phone = opt.phone || ''


    // 列表页会传过来的用户位置（用于 /api/map/poi-detail 计算距离）
    if (opt.userLat) {
      this.userLat = Number(opt.userLat)
    }
    if (opt.userLng) {
      this.userLng = Number(opt.userLng)
    }


    if (opt.tags) {
      try {
        const parsed = JSON.parse(decodeURIComponent(opt.tags))
        if (Array.isArray(parsed)) {
          this.tags = parsed
        }
      } catch (e) {
        this.tags = String(opt.tags)
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      }
    }

    if (opt.businessTime) {
      this.businessTimeText = decodeURIComponent(opt.businessTime)
    }

    if (this.shop.name) {
      uni.setNavigationBarTitle({ title: this.shop.name })
    }

    this.updateRecentlyViewedFlag()
    this.initUserLocation()
    this.loadLocalState()
    this.checkShareStatus()
  },


  methods: {
    initUserLocation() {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          this.userLat = res.latitude
          this.userLng = res.longitude
          // 定位成功后拉取一次后端详情（带上用户坐标）
          if (this.fetchPoiDetail) {
            this.fetchPoiDetail()
          }
        },
        fail: () => {
          // 即便无法获取定位，也尝试拉一次详情（不带坐标）
          if (this.fetchPoiDetail) {
            this.fetchPoiDetail()
          }
        }
      })
    },
    async fetchPoiDetail() {
      if (!this.shop || !this.shop.id || !getPoiDetail) {
        return
      }
      try {
        const res = await getPoiDetail({
          id: this.shop.id,
          type: 1,
          userLng: this.userLng,
          userLat: this.userLat
        })
        if (!res || res.success === false) {
          return
        }
        const data = res.data || res
        if (!data) {
          return
        }
        const poi = data.poi || data

        // 合并后端返回的字段到现有 shop 结构，保持已有样式不变
        if (poi.id != null) this.shop.id = poi.id
        if (poi.name) this.shop.name = poi.name
        if (poi.imageUrl || poi.cover || poi.image || poi.thumbnail) {
          this.shop.cover =
            poi.imageUrl || poi.cover || poi.image || poi.thumbnail
        }

        // 别名、类型编码、导航相关隐性字段
        if (poi.alias) this.shop.alias = poi.alias
        if (poi.typecode) this.shop.typeCode = poi.typecode
        if (poi.navi_poiid || poi.naviPoiId) {
          this.shop.naviPoiId = poi.navi_poiid || poi.naviPoiId
        }
        if (poi.entr_location) {
          let entrLng = null
          let entrLat = null
          const el = poi.entr_location
          if (typeof el === 'string') {
            const parts = el.split(',')
            if (parts.length >= 2) {
              const lng = Number(parts[0])
              const lat = Number(parts[1])
              if (!Number.isNaN(lng) && !Number.isNaN(lat)) {
                entrLng = lng
                entrLat = lat
              }
            }
          } else if (el && typeof el === 'object') {
            const lng = el.longitude != null ? Number(el.longitude) : NaN
            const lat = el.latitude != null ? Number(el.latitude) : NaN
            if (!Number.isNaN(lng) && !Number.isNaN(lat)) {
              entrLng = lng
              entrLat = lat
            }
          }
          if (entrLng != null && entrLat != null) {
            this.shop.entranceLongitude = entrLng
            this.shop.entranceLatitude = entrLat
          }
        }

        if (
          poi.avgPrice != null ||
          poi.averagePrice != null ||
          poi.price != null
        ) {
          const avg =
            poi.avgPrice != null
              ? poi.avgPrice
              : poi.averagePrice != null
                ? poi.averagePrice
                : poi.price
          this.shop.avgPrice = avg
        }
        if (poi.categoryName || poi.category || poi.type) {
          this.shop.category = poi.categoryName || poi.category || poi.type
        }
        if (poi.address) this.shop.address = poi.address
        if (poi.distance != null) this.shop.distance = poi.distance
        if (poi.latitude != null) this.shop.latitude = poi.latitude
        if (poi.longitude != null) this.shop.longitude = poi.longitude
        // 评分字段：对齐列表页的兜底逻辑，优先使用 rating，再兼容多种字段
        const scoreCandidates = []
        if (poi) {
          scoreCandidates.push(
            poi.rating,
            poi.score,
            poi.commentScore,
            poi.comment_score
          )
        }
        scoreCandidates.push(
          data && data.rating,
          data && data.score,
          data && data.commentScore,
          data && data.comment_score
        )

        let mergedScore = null

        const pickScore = (raw) => {
          if (raw === undefined || raw === null || raw === '') return null
          const num = Number(raw)
          if (Number.isNaN(num) || num <= 0) return null
          return num
        }

        for (let i = 0; i < scoreCandidates.length; i += 1) {
          const candidate = pickScore(scoreCandidates[i])
          if (candidate != null) {
            mergedScore = candidate
            break
          }
        }

        // 动态兜底：如果上面的常用字段都没有命中，则在 poi/data 上自动查找字段名包含 score/rating 的数值字段
        if (mergedScore == null && poi && typeof poi === 'object') {
          Object.keys(poi).some((key) => {
            if (!/score|rating/i.test(key)) return false
            const candidate = pickScore(poi[key])
            if (candidate == null) return false
            mergedScore = candidate
            return true
          })
        }
        if (mergedScore == null && data && typeof data === 'object') {
          Object.keys(data).some((key) => {
            if (!/score|rating/i.test(key)) return false
            const candidate = pickScore(data[key])
            if (candidate == null) return false
            mergedScore = candidate
            return true
          })
        }

        if (mergedScore != null) {
          this.shop.score = mergedScore
        }


        // 电话字段：兼容 tel / phone

        if (poi.tel || poi.phone) {
          this.shop.phone = poi.tel || poi.phone
        }

        // 城市 & 原始类型 & 营业状态等字段
        if (poi.city) this.shop.city = poi.city
        if (poi.type) this.shop.type = poi.type
        if (poi.openStatus !== undefined && poi.openStatus !== null) {
          this.shop.openStatus = poi.openStatus
        }
        if (poi.openingHours) {
          this.shop.openingHours = poi.openingHours
        }

        // 标签：优先使用高德 tag 字段，其次使用后端 tags 数组
        if (poi.tag) {
          const tagList = String(poi.tag)
            .split(/[，,]/)
            .map((s) => s.trim())
            .filter(Boolean)
          if (tagList.length) {
            this.tags = tagList
          }
        } else if (Array.isArray(poi.tags)) {
          this.tags = poi.tags
        }


        // 店铺介绍 / 小贴士
        if (typeof data.intro === 'string') {
          this.introText = data.intro
        }
        if (typeof data.tips === 'string') {
          this.tipsText = data.tips
        }

        // 营业时间：detail.businessTime / poi.businessTime / poi.openingHours
        if (data.businessTime) {
          this.businessTimeText = data.businessTime
        } else if (poi.businessTime || poi.openingHours) {
          this.businessTimeText = poi.businessTime || poi.openingHours
        }

        // 收藏 / 体验状态：优先使用后端返回的字段
        if (Object.prototype.hasOwnProperty.call(data, 'favorite')) {
          this.isFavorited = !!data.favorite
        }
        if (Object.prototype.hasOwnProperty.call(data, 'experienced')) {
          this.isExperienced = !!data.experienced
        }

        // 附近推荐：基于当前门店经纬度拉取周边同类型门店
        this.loadNearbyShops()


        // 后端如返回推荐菜 / 评论，可直接替换掉本地 mock

        if (
          Array.isArray(data.recommendedDishes) &&
          data.recommendedDishes.length
        ) {
          this.recommendedDishes = this.aggregateRecommendedDishes(data.recommendedDishes)
        }
        if (Array.isArray(data.comments) && data.comments.length) {
          this.comments = this.normalizeCommentList(data.comments)
        }



        if (this.shop.name) {
          uni.setNavigationBarTitle({ title: this.shop.name })
        }
      } catch (e) {
        console.warn('[FoodPoiDetail] fetchPoiDetail fail:', e)
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

    openMap() {
      const targetLat = this.shop.entranceLatitude || this.shop.latitude
      const targetLng = this.shop.entranceLongitude || this.shop.longitude
      if (!targetLat || !targetLng) {
        uni.showToast({ title: '暂无位置信息', icon: 'none' })
        return
      }

      const name = this.shop.name || '美食门店'
      const address = this.shop.address || ''

      // 优先使用腾讯位置服务路线规划插件（仅在微信小程序内有效）
      if (typeof wx !== 'undefined' && wx.navigateTo && AMAP_ROUTE_PLAN_KEY) {
        try {
          const endPoint = JSON.stringify({
            name,
            latitude: Number(targetLat),
            longitude: Number(targetLng)
          })
          const enableAI = true
          const navigation = 1
          const layerStyle = 1
          const referer = AMAP_ROUTE_PLAN_REFERER || ''
          wx.navigateTo({
            url: `plugin://routePlan/index?key=${AMAP_ROUTE_PLAN_KEY}&referer=${referer}&endPoint=${endPoint}&enableAI=${enableAI}&navigation=${navigation}&layerStyle=${layerStyle}`,
            success: () => {
              // 插件调用成功
            },
            fail: (err) => {
              // 插件调用失败（如域名未授权等），回退到微信原生地图
              console.warn('[FoodPoiDetail] 路线规划插件失败，使用微信原生地图:', err)
              uni.openLocation({
                latitude: Number(targetLat),
                longitude: Number(targetLng),
                name,
                address,
                scale: 18
              })
            }
          })
          return
        } catch (e) {
          // 如果插件跳转失败，则回退到微信原生地图
          console.warn('[FoodPoiDetail] 路线规划插件异常，使用微信原生地图:', e)
        }
      }

      // 回退：直接打开微信原生地图
      uni.openLocation({
        latitude: Number(targetLat),
        longitude: Number(targetLng),
        name,
        address,
        scale: 18
      })
    },


    callPhone() {
      const raw = this.shop && this.shop.phone
      if (!raw) {
        uni.showToast({ title: '暂无电话信息', icon: 'none' })
        return
      }
      const phone = String(raw).trim()
      if (!phone) {
        uni.showToast({ title: '暂无电话信息', icon: 'none' })
        return
      }
      const content = `拨打 ${phone}`
      uni.showModal({
        title: '联系电话',
        content,
        confirmText: '复制号码',
        cancelText: '返回',
        confirmColor: '#336699',
        success: (res) => {
          if (res.confirm) {
            uni.setClipboardData({
              data: phone,
              success: () => {
                uni.showToast({ title: '号码已复制', icon: 'none' })
              }
            })
          }
        }
      })
    },
    previewCommentImages(item, index) {
      if (!item || !Array.isArray(item.images) || !item.images.length) {
        return
      }
      uni.previewImage({
        current: item.images[index] || item.images[0],
        urls: item.images
      })
    },
    
    // 获取推荐菜图片
    getDishImage(dish) {
      if (!dish) return ''
      const candidates = [
        dish.image,
        dish.imageUrl,
        dish.cover,
        dish.thumbnail,
        dish.dishImage
      ]
      for (const url of candidates) {
        if (url && typeof url === 'string' && url.trim()) {
          const trimmed = url.trim()
          // 过滤掉临时路径和无效值
          if (trimmed.startsWith('tmp/') || 
              trimmed.startsWith('http://tmp/') || 
              trimmed.startsWith('https://tmp/') ||
              trimmed === 'null' || 
              trimmed === 'undefined') {
            continue
          }
          // 返回有效的URL
          if (trimmed.startsWith('http://') || 
              trimmed.startsWith('https://') || 
              trimmed.startsWith('/') ||
              trimmed.startsWith('data:image/')) {
            return trimmed
          }
        }
      }
      return ''
    },
    
    // 处理推荐菜图片加载错误
    handleDishImageError(dish, e) {
      console.warn('[FoodPoiDetail] 推荐菜图片加载失败:', dish.id, e)
      this.$set(dish, '_imageError', true)
    },

    // 写评论弹窗内：选择/预览/删除图片（选择后立即上传）
    chooseCommentImages() {
      const max = this.maxCommentImages || 6
      const current = Array.isArray(this.commentForm.images) ? this.commentForm.images : []
      const remain = max - current.length
      if (remain <= 0) {
        uni.showToast({ title: `最多选择${max}张图片`, icon: 'none' })
        return
      }
      
      uni.chooseImage({
        count: remain,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: async (res) => {
          const tempPaths = res.tempFilePaths || []
          if (tempPaths.length === 0) {
            return
          }
          
          // 显示上传进度提示
          uni.showLoading({ title: '上传图片中...', mask: true })
          
          try {
            // 逐个上传图片，获取服务器 URL
            const uploadedUrls = []
            for (let i = 0; i < tempPaths.length; i++) {
              try {
                const imageUrl = await uploadImage(tempPaths[i])
                uploadedUrls.push(imageUrl)
                console.log(`[FoodPoiDetail] 图片 ${i + 1}/${tempPaths.length} 上传成功:`, imageUrl)
              } catch (err) {
                console.error(`[FoodPoiDetail] 图片 ${i + 1} 上传失败:`, err)
                uni.showToast({ 
                  title: `第${i + 1}张图片上传失败: ${err.message || '未知错误'}`, 
                  icon: 'none',
                  duration: 3000
                })
                // 上传失败的图片跳过，不添加到列表
              }
            }
            
            // 将上传成功的 URL 添加到图片列表
            if (uploadedUrls.length > 0) {
              const newImages = current.concat(uploadedUrls).slice(0, max)
              this.commentForm.images = newImages
              console.log('[FoodPoiDetail] 图片上传完成，当前图片列表:', newImages)
            } else {
              uni.showToast({ title: '所有图片上传失败', icon: 'none' })
            }
          } catch (err) {
            console.error('[FoodPoiDetail] chooseCommentImages upload error:', err)
            uni.showToast({ title: '上传图片失败', icon: 'none' })
          } finally {
            uni.hideLoading()
          }
        },
        fail: (err) => {
          console.error('[FoodPoiDetail] chooseCommentImages error:', err)
          if (err.errMsg && !err.errMsg.includes('cancel')) {
            uni.showToast({ title: '选择图片失败', icon: 'none' })
          }
        }
      })
    },
    removeCommentImage(index) {
      if (!Array.isArray(this.commentForm.images)) return
      if (index < 0 || index >= this.commentForm.images.length) return
      this.commentForm.images.splice(index, 1)
    },
    previewCommentFormImage(index) {
      if (!Array.isArray(this.commentForm.images) || !this.commentForm.images.length) return
      uni.previewImage({
        current: this.commentForm.images[index],
        urls: this.commentForm.images
      })
    },

    // 推荐菜弹窗：选择/预览/删除图片（选择后立即上传）
    chooseDishImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: async (res) => {
          const paths = res.tempFilePaths || []
          if (paths.length === 0) {
            return
          }
          
          const tempPath = paths[0]
          
          // 显示上传进度提示
          uni.showLoading({ title: '上传图片中...', mask: true })
          
          try {
            const imageUrl = await uploadImage(tempPath)
            this.dishForm.image = imageUrl
            console.log('[FoodPoiDetail] 推荐菜图片上传成功:', imageUrl)
          } catch (err) {
            console.error('[FoodPoiDetail] 推荐菜图片上传失败:', err)
            uni.showToast({ 
              title: `图片上传失败: ${err.message || '未知错误'}`, 
              icon: 'none',
              duration: 3000
            })
          } finally {
            uni.hideLoading()
          }
        },
        fail: (err) => {
          console.error('[FoodPoiDetail] chooseDishImage error:', err)
          if (err.errMsg && !err.errMsg.includes('cancel')) {
            uni.showToast({ title: '选择图片失败', icon: 'none' })
          }
        }
      })
    },
    removeDishImage() {
      if (this.dishForm) {
        this.dishForm.image = ''
      }
    },
    previewDishImage() {
      if (!this.dishForm || !this.dishForm.image) return
      const url = this.dishForm.image
      uni.previewImage({
        current: url,
        urls: [url]
      })
    },

    onAddDish() {

      this.openDishDialog()
    },
    onAddComment() {
      this.openCommentDialog()
    },

    openDishDialog() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({ title: '店铺信息未就绪', icon: 'none' })
        return
      }
      this.dishForm = {
        name: '',
        price: '',
        image: ''
      }
      this.showDishDialog = true

    },
    closeDishDialog() {
      this.showDishDialog = false
    },
    async submitDishRecommendation() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({ title: '店铺信息未就绪', icon: 'none' })
        return
      }
      const name = (this.dishForm.name || '').trim()
      let image = this.dishForm && this.dishForm.image ? String(this.dishForm.image).trim() : ''
      
      // 如果图片是临时路径，需要先上传
      if (image && (image.startsWith('tmp/') || image.startsWith('http://tmp/') || image.startsWith('https://tmp/'))) {
        uni.showLoading({ title: '上传图片中...', mask: true })
        try {
          image = await uploadImage(image)
          this.dishForm.image = image
        } catch (err) {
          uni.hideLoading()
          console.error('[FoodPoiDetail] 推荐菜图片上传失败:', err)
          uni.showToast({ title: '图片上传失败，请重试', icon: 'none' })
          return
        }
        uni.hideLoading()
      }
      
      if (!name && !image) {
        uni.showToast({ title: '请填写菜名或选择图片', icon: 'none' })
        return
      }
      if (this.submittingDish) return
      this.submittingDish = true
      try {
        let priceNum
        if (this.dishForm.price !== '' && this.dishForm.price !== null && this.dishForm.price !== undefined) {
          const num = Number(this.dishForm.price)
          if (!Number.isNaN(num) && num > 0) {
            priceNum = num
          }
        }
        const payload = {
          poiId: this.shop.id
        }
        if (name) {
          payload.dishName = name
        }
        if (image) {
          // 确保只传 URL，过滤掉临时路径
          if (image.startsWith('http://') || image.startsWith('https://')) {
            payload.image = image
          } else {
            console.warn('[FoodPoiDetail] 过滤掉无效的图片路径:', image)
          }
        }
        if (priceNum !== undefined) {
          payload.price = priceNum
        }
        const res = await submitPoiRecommendedDish(payload)


        uni.showToast({ title: '推荐已提交，感谢分享', icon: 'none' })
        this.showDishDialog = false

        let combinedList = []
        if (res && Array.isArray(res.recommendedDishes)) {
          combinedList = res.recommendedDishes
        } else {
          combinedList = (this.recommendedDishes || []).concat([
            {
              id: `local-${Date.now()}`,
              name: name || '推荐菜',
              price: priceNum,
              image,
              imageUrl: image,
              recommendCount: 1,
              _localCreatedByMe: true,
              canDelete: true,
              isLocal: true
            }
          ])
        }

        this.recommendedDishes = this.aggregateRecommendedDishes(combinedList)
      } catch (e) {
        console.warn('[FoodPoiDetail] submitPoiRecommendedDish fail:', e)
        uni.showToast({ title: '提交失败，请稍后再试', icon: 'none' })
      } finally {
        this.submittingDish = false
      }
    },

    openCommentDialog() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({ title: '店铺信息未就绪', icon: 'none' })
        return
      }
      this.commentForm = {
        score: 0,
        content: '',
        images: []
      }
      this.showCommentDialog = true
    },
    closeCommentDialog() {
      this.showCommentDialog = false
    },
    setCommentScore(index) {
      const idx = Number(index)
      if (Number.isNaN(idx)) {
        this.commentForm.score = 0
        return
      }
      const rating = Math.min(5, Math.max(1, Math.round(idx + 1)))
      this.commentForm.score = rating
    },
    async submitComment() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({ title: '店铺信息未就绪', icon: 'none' })
        return
      }
      const content = (this.commentForm.content || '').trim()
      if (!content) {
        uni.showToast({ title: '请填写评论内容', icon: 'none' })
        return
      }
      const num = Number(this.commentForm.score)
      if (Number.isNaN(num) || num < 1 || num > 5) {
        uni.showToast({ title: '请先选择评分', icon: 'none' })
        return
      }
      if (this.submittingComment) return
      this.submittingComment = true
      try {
        const payload = {
          poiId: this.shop.id,
          content,
          score: num
        }
        // 只传 URL 数组，过滤掉临时路径（以防万一）
        const images = Array.isArray(this.commentForm.images) 
          ? this.commentForm.images.filter(url => {
              // 过滤掉临时路径和无效值
              if (!url || typeof url !== 'string') return false
              const trimmed = url.trim()
              // 过滤掉 tmp/ 开头的临时路径
              if (trimmed.startsWith('tmp/') || trimmed.startsWith('http://tmp/') || trimmed.startsWith('https://tmp/')) {
                console.warn('[FoodPoiDetail] 过滤掉临时路径:', trimmed)
                return false
              }
              // 只保留 http/https 开头的 URL
              return trimmed.startsWith('http://') || trimmed.startsWith('https://')
            })
          : []
        if (images.length) {
          payload.images = images
        }
        const res = await submitPoiComment(payload)

        uni.showToast({ title: '评论已提交，感谢反馈', icon: 'none' })
        this.showCommentDialog = false
        if (res && Array.isArray(res.comments)) {
          this.comments = this.normalizeCommentList(res.comments)
        } else {
          this.comments = this.normalizeCommentList([
            {
              id: `local-${Date.now()}`,
              userName: '',
              score: payload.score,
              date: new Date().toISOString(),
              content,
              images,
              likeCount: 0,
              dislikeCount: 0,
              isLocal: true
            },
            ...this.comments
          ])
        }

      } catch (e) {
        console.warn('[FoodPoiDetail] submitPoiComment fail:', e)
        uni.showToast({ title: '提交失败，请稍后再试', icon: 'none' })
      } finally {
        this.submittingComment = false
      }
    },

    getCommentStars(rawScore) {
      if (rawScore === undefined || rawScore === null || rawScore === '') return []
      const value = Number(rawScore)
      if (Number.isNaN(value) || value <= 0) return []
      const stars = []
      const fullCount = Math.floor(value)
      const hasHalf = value - fullCount >= 0.5 && fullCount < 5
      for (let i = 0; i < fullCount && stars.length < 5; i += 1) {
        stars.push('full')
      }
      if (hasHalf && stars.length < 5) {
        stars.push('half')
      }
      while (stars.length < 5) {
        stars.push('empty')
      }
      return stars
    },

    ensureCommentInteractionState(item) {
      if (!item) return
      if (item._liked == null) item._liked = false
      if (item._disliked == null) item._disliked = false


      if (typeof item.likeCount !== 'number') {
        const raw = item.likeCount != null ? item.likeCount : 0
        const num = Number(raw)
        item.likeCount = Number.isNaN(num) ? 0 : num
      }

      let rawDislike = item.dislikeCount
      if (rawDislike == null && item.unlikeCount != null) {
        rawDislike = item.unlikeCount
      }
      if (typeof rawDislike !== 'number') {
        const num = rawDislike != null ? Number(rawDislike) : 0
        item.dislikeCount = Number.isNaN(num) ? 0 : num
      } else {
        item.dislikeCount = rawDislike
      }
      item.unlikeCount = item.dislikeCount
    },
    async onLikeComment(item) {
      if (!item || !item.id) return
      if (item._reacting) return
      this.ensureCommentInteractionState(item)

      const currentLiked = item._liked === true
      const reaction = currentLiked ? 0 : 1

      item._reacting = true
      try {
        const res = await reactPoiComment({
          commentId: item.id,
          reaction
        })
        if (!res) return

        const payload = res
        const likeCount = Number(payload.likeCount)
        const dislikeCount = Number(payload.dislikeCount)
        if (!Number.isNaN(likeCount)) {
          item.likeCount = likeCount
        }
        if (!Number.isNaN(dislikeCount)) {
          item.dislikeCount = dislikeCount
          item.unlikeCount = dislikeCount
        }
        const r = Number(payload.reaction)
        item._liked = r === 1
        item._disliked = r === -1
      } catch (e) {
        console.warn('[FoodPoiDetail] react like fail:', e)
        uni.showToast({ title: '操作失败，请稍后再试', icon: 'none' })
      } finally {
        item._reacting = false
      }
    },
    async onDislikeComment(item) {
      if (!item || !item.id) return
      if (item._reacting) return
      this.ensureCommentInteractionState(item)

      const currentDisliked = item._disliked === true
      const reaction = currentDisliked ? 0 : -1

      item._reacting = true
      try {
        const res = await reactPoiComment({
          commentId: item.id,
          reaction
        })
        if (!res) return

        const payload = res
        const likeCount = Number(payload.likeCount)
        const dislikeCount = Number(payload.dislikeCount)
        if (!Number.isNaN(likeCount)) {
          item.likeCount = likeCount
        }
        if (!Number.isNaN(dislikeCount)) {
          item.dislikeCount = dislikeCount
          item.unlikeCount = dislikeCount
        }
        const r = Number(payload.reaction)
        item._liked = r === 1
        item._disliked = r === -1
      } catch (e) {
        console.warn('[FoodPoiDetail] react dislike fail:', e)
        uni.showToast({ title: '操作失败，请稍后再试', icon: 'none' })
      } finally {
        item._reacting = false
      }
    },


    async onDeleteComment(item) {
      if (!item) {
        return
      }

      const rawId = item.id
      const idStr = rawId != null ? String(rawId) : ''

      // 本地临时评论（local- 开头或标记为 isLocal）只做前端删除，不调用后端
      const isLocal = idStr.startsWith('local-') || item.isLocal === true
      const numericId = /^[0-9]+$/.test(idStr) ? idStr : ''

      if (isLocal || !numericId) {
        this.comments = (this.comments || []).filter((c) => c !== item && c.id !== rawId)
        uni.showToast({ title: '已删除本地评论', icon: 'none' })
        return
      }

      try {
        const res = await deletePoiComment(numericId)
        if (res === null) {
          uni.showToast({ title: '删除失败，请稍后再试', icon: 'none' })
          return
        }
        this.comments = (this.comments || []).filter((c) => c.id !== rawId)
        uni.showToast({ title: '评论已删除', icon: 'none' })
      } catch (e) {
        console.warn('[FoodPoiDetail] deletePoiComment fail:', e)
        uni.showToast({ title: '删除失败，请稍后再试', icon: 'none' })
      }
    },

    async onDeleteDish(dish) {
      if (!dish) {
        return
      }

      const rawId = dish.id
      const idStr = rawId != null ? String(rawId) : ''

      // 本地临时推荐（local- 开头或标记为 isLocal/_localCreatedByMe）只做前端删除
      const isLocal = idStr.startsWith('local-') || dish.isLocal === true || dish._localCreatedByMe === true
      const numericId = /^[0-9]+$/.test(idStr) ? idStr : ''

      if (isLocal || !numericId) {
        this.recommendedDishes = (this.recommendedDishes || []).filter((d) => d !== dish && d.id !== rawId)
        uni.showToast({ title: '已删除本地推荐', icon: 'none' })
        return
      }

      try {
        const res = await deleteRecommendDish(numericId)
        if (res === null) {
          uni.showToast({ title: '删除失败，请稍后再试', icon: 'none' })
          return
        }
        this.recommendedDishes = (this.recommendedDishes || []).filter((d) => d.id !== rawId)
        uni.showToast({ title: '推荐菜已删除', icon: 'none' })
      } catch (e) {
        console.warn('[FoodPoiDetail] deleteRecommendDish fail:', e)
        uni.showToast({ title: '删除失败，请稍后再试', icon: 'none' })
      }
    },
    canDeleteDish(dish) {
      if (!dish) return false
      if (dish.canDelete === true) return true
      if (dish.isOwner === true || dish.mine === true) return true
      if (dish._localCreatedByMe === true) return true
      return false
    },


    openNearbyShop(item) {


      if (!item || !item.id) {
        return
      }
      const query = []
      const push = (key, value) => {
        if (value === undefined || value === null || value === '') return
        query.push(`${key}=${encodeURIComponent(String(value))}`)
      }
      push('id', item.id)
      push('name', item.name)
      push('cover', item.cover)
      push('distance', item.distance)
      push('latitude', item.latitude)
      push('longitude', item.longitude)
      push('userLat', this.userLat)
      push('userLng', this.userLng)
      const queryStr = query.join('&')
      uni.navigateTo({ url: `/pages/index/FoodPoiDetail?${queryStr}` })
    },

    async toggleFavorite() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({ title: '店铺信息未就绪', icon: 'none' })
        return
      }
      const current = !!this.isFavorited
      const target = !current
      try {
        const res = await updatePoiFavorite({
          poiId: this.shop.id,
          type: POI_TYPE,
          favorite: target
        })
        if (res == null) {
          throw new Error('接口返回异常')
        }
        const finalState = !!res
        this.isFavorited = finalState
        this.saveLocalState()
        uni.showToast({
          title: this.isFavorited ? '已收藏' : '已取消收藏',
          icon: 'none'
        })
      } catch (e) {
        console.warn('[FoodPoiDetail] toggleFavorite fail:', e)
        uni.showToast({ title: '操作失败，请稍后重试', icon: 'none' })
      }
    },
    async toggleExperienced() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({ title: '店铺信息未就绪', icon: 'none' })
        return
      }
      const current = !!this.isExperienced
      const target = !current
      try {
        const res = await updatePoiExperience({
          poiId: this.shop.id,
          type: POI_TYPE,
          experienced: target
        })
        if (res == null) {
          throw new Error('接口返回异常')
        }
        const finalState = !!res
        this.isExperienced = finalState
        this.saveLocalState()
        uni.showToast({
          title: this.isExperienced ? '已体验' : '已取消体验标记',
          icon: 'none'
        })
      } catch (e) {
        console.warn('[FoodPoiDetail] toggleExperienced fail:', e)
        uni.showToast({ title: '操作失败，请稍后重试', icon: 'none' })
      }
    },

    shareShop() {
      // 微信小程序中，点击分享按钮会自动触发 onShareAppMessage
      // 这里只需要提示用户，或者可以不做任何处理
      // #ifdef MP-WEIXIN
      console.log('[FoodPoiDetail] 用户点击分享按钮，店铺ID:', this.shop.id, '店铺名称:', this.shop.name)
      // #endif
      
      // #ifndef MP-WEIXIN
      uni.showToast({ title: '请在微信小程序中分享', icon: 'none' })
      // #endif
    },
    
    // 微信小程序分享配置
    onShareAppMessage(options) {
      console.log('[FoodPoiDetail] onShareAppMessage 被调用', options)
      
      if (!this.shop || !this.shop.id) {
        console.warn('[FoodPoiDetail] 分享时店铺信息为空')
        return {
          title: '邀请你和我一起品尝美食~',
          path: '/pages/index/FoodPoiDetail'
        }
      }

      // 构建分享路径
      const sharePath = `/pages/index/FoodPoiDetail?id=${encodeURIComponent(this.shop.id)}`
      
      // 分享标题：使用指定的文案格式
      const shopName = this.shop.name || '店铺'
      const shareTitle = `邀请你和我一起品尝该${shopName}的美食~`
      
      // 分享图片：只有当有真实图片时才设置，避免显示占位符
      const heroImg = this.heroImage || this.shop.cover || ''
      const defaultPlaceholder = '/static/assets/热门推荐.png'
      // 只有当图片存在且不是默认占位图时才设置 imageUrl
      const shareImageUrl = heroImg && heroImg !== defaultPlaceholder && heroImg.trim() !== '' 
        ? heroImg 
        : undefined
      
      console.log('[FoodPoiDetail] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        shopId: this.shop.id,
        shopName: shopName,
        imageUrl: shareImageUrl || '未设置（无图片）'
      })

      // 记录分享行为
      this.recordShareBehavior(shareTitle, sharePath).catch(err => {
        console.error('[FoodPoiDetail] 记录分享行为失败', err)
      })

      // 构建返回对象，如果没有有效图片则不设置 imageUrl
      const shareResult = {
        title: shareTitle,
        path: sharePath
      }
      if (shareImageUrl) {
        shareResult.imageUrl = shareImageUrl
      }
      return shareResult
    },
    toggleMoreInfo() {
      this.showMoreInfo = !this.showMoreInfo
    },
    moreInfoText() {
      const parts = []
      if (this.businessTimeText) {
        parts.push(`营业时间：${this.businessTimeText}`)
      }
      if (this.introText) {
        parts.push(this.introText)
      }
      if (this.tipsText) {
        parts.push(this.tipsText)
      }
      if (parts.length) {
        return parts.join('\n')
      }
      if (this.shop.phone) {
        return `该店铺暂未补充更多信息，可致电${this.shop.phone}咨询`
      }
      return '该店铺暂未补充更多信息，建议到店前电话咨询'
    },

    async checkShareStatus() {
      try {
        if (!this.shop.id) return
        const res = await checkShared(this.shop.id, 'FOOD_POI')
        if (res && (res.isShared === true || (res.data && res.data.isShared === true))) {
          this.hasShared = true
        }
      } catch (e) {
        // 忽略错误
      }
    },
    async recordShareBehavior(title, path) {
      try {
        if (!this.shop.id) return
        await recordShare({
          targetId: this.shop.id,
          targetType: 'FOOD_POI',
          shareChannel: 'WECHAT_SHARE',
          shareTitle: title,
          shareDesc: this.shop.address || '',
          shareCover: this.heroImage || this.shop.cover,
          extra: { path }
        })
        // 标记为已分享
        this.hasShared = true
      } catch (e) {
        // 忽略埋点失败
        console.warn('[FoodPoiDetail] 记录分享行为失败:', e)
      }
    },
    async loadNearbyShops() {
      if (!this.shop || !this.shop.latitude || !this.shop.longitude) {
        return
      }
      try {
        const params = {
          type: 1,
          userLng: this.shop.longitude,
          userLat: this.shop.latitude,
          page: 1,
          radius: 1000
        }
        const raw = await getPois(params)
        const list = Array.isArray(raw) ? raw : []
        const mapped = list.map((item, index) => ({
          id: item.id != null && item.id !== '' ? item.id : `${index}`,
          name: item.name || '',
          distance: item.distance || '',
          latitude: item.latitude,
          longitude: item.longitude,
          cover:
            item.imageUrl ||
            item.cover ||
            item.image ||
            item.thumbnail ||
            this.shop.cover ||
            '/static/assets/热门推荐.png'
        }))

        const filtered = mapped.filter((item) => item.id !== this.shop.id)
        this.nearbyShops = filtered.slice(0, 3)
      } catch (e) {
        console.warn('[FoodPoiDetail] loadNearbyShops fail:', e)
      }
    },
    navigateToShop() {
      this.openMap()
    },

    updateRecentlyViewedFlag() {
      try {
        if (!this.shop || !this.shop.id) return
        const key = `food_poi_last_visit_${this.shop.id}`
        const now = Date.now()
        const last = uni.getStorageSync(key)
        if (typeof last === 'number' && last > 0 && now - last <= 2 * 60 * 1000) {
          this.showRecentlyViewed = true
        } else {
          this.showRecentlyViewed = false
        }
        uni.setStorageSync(key, now)
      } catch (e) {
        // 忽略本地存储失败
      }
    },
    loadLocalState() {
      try {
        if (!this.shop.id) return
        const key = `food_poi_state_${this.shop.id}`
        const value = uni.getStorageSync(key)
        if (value && typeof value === 'object') {
          this.isFavorited = !!value.isFavorited
          this.isExperienced = !!value.isExperienced
        }
      } catch (e) {}
    },
    saveLocalState() {
      try {
        if (!this.shop.id) return
        const key = `food_poi_state_${this.shop.id}`
        const value = {
          isFavorited: this.isFavorited,
          isExperienced: this.isExperienced
        }
        uni.setStorageSync(key, value)
        
        // 保存到统一的足迹存储
        if (this.isFavorited) {
          this.saveToFootprints('favorite', {
            id: this.shop.id,
            name: this.shop.name || '',
            category: this.smallTypeLabel || '美食',
            city: this.extractCityFromShop(),
            cover: this.shop.cover || '',
            address: this.shop.address || '',
            type: 'food',
            timestamp: Date.now()
          })
        } else {
          this.removeFromFootprints('favorite', this.shop.id)
        }
        
        if (this.isExperienced) {
          this.saveToFootprints('experienced', {
            id: this.shop.id,
            name: this.shop.name || '',
            category: this.smallTypeLabel || '美食',
            city: this.extractCityFromShop(),
            cover: this.shop.cover || '',
            address: this.shop.address || '',
            type: 'food',
            timestamp: Date.now()
          })
        } else {
          this.removeFromFootprints('experienced', this.shop.id)
        }
      } catch (e) {
        console.warn('[FoodPoiDetail] saveLocalState error:', e)
      }
    },
    extractCityFromShop() {
      const city = this.shop.city || ''
      if (city) return city.replace(/市$/, '')
      const address = this.shop.address || ''
      const cityMatch = address.match(/(西安|宝鸡|咸阳|渭南|延安|榆林|汉中|安康|商洛|铜川)/)
      return cityMatch ? cityMatch[1] : ''
    },
    saveToFootprints(category, data) {
      try {
        const key = `footprints_${category}_food`
        const list = uni.getStorageSync(key) || []
        const index = list.findIndex(item => item.id === data.id)
        if (index >= 0) {
          list[index] = data
        } else {
          list.push(data)
        }
        uni.setStorageSync(key, list)
        
        // 同时保存到统一的足迹存储，用于足迹页面统计
        const unifiedKey = `poi_footprints_${category}`
        const unifiedList = uni.getStorageSync(unifiedKey) || []
        const unifiedIndex = unifiedList.findIndex(item => item.id === data.id && item.type === 'food')
        const unifiedItem = {
          ...data,
          type: 'food',
          poiType: 'food'
        }
        if (unifiedIndex >= 0) {
          unifiedList[unifiedIndex] = unifiedItem
        } else {
          unifiedList.push(unifiedItem)
        }
        uni.setStorageSync(unifiedKey, unifiedList)
      } catch (e) {
        console.warn('[FoodPoiDetail] saveToFootprints error:', e)
      }
    },
    removeFromFootprints(category, id) {
      try {
        const key = `footprints_${category}_food`
        const list = uni.getStorageSync(key) || []
        const filtered = list.filter(item => item.id !== id)
        uni.setStorageSync(key, filtered)
        
        // 同时从统一足迹存储中移除
        const unifiedKey = `poi_footprints_${category}`
        const unifiedList = uni.getStorageSync(unifiedKey) || []
        const unifiedFiltered = unifiedList.filter(item => !(item.id === id && item.type === 'food'))
        uni.setStorageSync(unifiedKey, unifiedFiltered)
      } catch (e) {
        console.warn('[FoodPoiDetail] removeFromFootprints error:', e)
      }
    },

    // 打开“添加到清单”弹窗
    async openAddToListDialog() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({ title: '店铺信息未就绪', icon: 'none' })
        return
      }
      this.checklistDate = new Date().toISOString().split('T')[0]
      this.checklistDateTemp = this.checklistDate
      this.selectedChecklistId = ''
      this.addToListNote = ''
      await this.loadChecklistsByDate(this.checklistDate)
      this.showAddToListDialog = true
    },

    // 关闭“添加到清单”弹窗
    closeAddToListDialog() {
      this.showAddToListDialog = false
      this.checklists = []
      this.selectedChecklistId = ''
      this.addToListNote = ''
    },

    // 加载指定日期的清单列表（用于添加到清单）
    async loadChecklistsByDate(date) {
      try {
        const checklistApi = require('../../api/checklist.js')
        const response = await checklistApi.myChecklists({ date })
        let lists = []
        if (response && response.success !== false && response.data) {
          lists = Array.isArray(response.data) ? response.data : []
        } else if (Array.isArray(response)) {
          lists = response
        }
        this.checklists = lists
        if (lists.length === 1) {
          this.selectedChecklistId = lists[0].id
        }
      } catch (err) {
        console.error('[FoodPoiDetail] 加载清单列表失败:', err)
        this.checklists = []
      }
    },

    // 弹窗内日期切换
    async onChecklistDateChange(e) {
      const newDate = e.detail && e.detail.value
      if (!newDate || newDate === this.checklistDate) return
      this.checklistDate = newDate
      this.checklistDateTemp = newDate
      this.selectedChecklistId = ''
      this.addToListNote = ''
      await this.loadChecklistsByDate(newDate)
    },

    // 选择清单
    selectChecklist(list) {
      if (!list || !list.id) return
      this.selectedChecklistId = list.id
    },

    // 确认添加当前店铺到选中清单
    async confirmAddToList() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({ title: '店铺信息缺失', icon: 'none' })
        return
      }
      if (!this.selectedChecklistId) {
        uni.showToast({ title: '请选择清单', icon: 'none' })
        return
      }
      try {
        uni.showLoading({ title: '正在加入清单...', mask: true })
        const result = await addFoodToChecklist(this.selectedChecklistId, {
          id: this.shop.id,
          name: this.shop.name || '',
          introduction: this.addToListNote || ''
        })
        uni.hideLoading()
        if (result) {
          this.showAddToListDialog = false
          uni.showToast({ title: '已添加到清单', icon: 'success' })
        } else {
          throw new Error('添加失败')
        }
      } catch (err) {
        uni.hideLoading()
        console.error('[FoodPoiDetail] 添加到清单失败:', err)
        uni.showToast({ title: err.message || '添加失败', icon: 'none' })
      }
    },

    formatCommentTime(raw) {
      if (!raw) return ''
      let text = String(raw).trim()
      // 处理形如 2025-12-26T10:23:30 或带 Z 的格式
      text = text.replace('T', ' ')
      text = text.replace(/\.000Z?$/, '').replace(/Z$/, '')
      return text
    },
    normalizeCommentList(list) {
      if (!Array.isArray(list)) return []
      return list.map((item) => {
        if (!item) return item
        const normalized = { ...item }

        // 昵称：兼容多种字段
        normalized.userName =
          normalized.userName ||
          normalized.nickname ||
          normalized.nickName ||
          normalized.userNick ||
          ''

        // 头像：兼容多种字段
        normalized.avatarUrl =
          normalized.avatarUrl ||
          normalized.avatar ||
          normalized.userAvatar ||
          normalized.headImg ||
          normalized.headImgUrl ||
          normalized.headimgurl ||
          ''

        // 时间：优先使用 time/date/timestamp，统一成不带 T 的字符串
        const rawTime =
          normalized.time ||
          normalized.date ||
          normalized.createTime ||
          normalized.createdAt ||
          normalized.created_at ||
          ''
        const displayTime = this.formatCommentTime(rawTime)
        normalized.time = displayTime
        normalized.date = displayTime

        // 图片：统一到 images 数组
        if (!Array.isArray(normalized.images)) {
          if (Array.isArray(normalized.imageUrls)) {
            normalized.images = normalized.imageUrls
          } else if (typeof normalized.imagesJson === 'string') {
            try {
              const parsed = JSON.parse(normalized.imagesJson)
              normalized.images = Array.isArray(parsed) ? parsed : []
            } catch (e) {
              normalized.images = []
            }
          } else if (typeof normalized.image === 'string' && normalized.image) {
            normalized.images = [normalized.image]
          } else {
            normalized.images = []
          }
        }

        // 点赞/点踩计数和本地交互状态
        this.ensureCommentInteractionState(normalized)
        return normalized
      })
    },

    normalizeDishName(raw) {

      if (!raw) return ''
      let name = String(raw).toLowerCase()

      // 去掉括号及其中说明
      name = name.replace(/[（(][^）)]*[）)]/g, '')

      // 去掉常见修饰词前缀：招牌/特色/人气/必点/推荐/热门/经典 等
      name = name.replace(/^(招牌|特色|人气|必点|推荐|热门|经典)+/g, '')

      // 去掉空格和常见分隔符号
      name = name.replace(/[\s·•，,。、\.！!？\?\-—_~]/g, '')

      return name.trim()
    },
    aggregateRecommendedDishes(list) {
      if (!Array.isArray(list) || !list.length) return []
      const map = {}
      const order = []
      list.forEach((item, index) => {
        if (!item) return
        const rawName = (item.name || item.dishName || '').trim()
        if (!rawName) return
        const key = this.normalizeDishName(rawName)
        if (!key) return

        // 统计次数：优先使用后端给的次数字段，没有就按 1 次算
        let count = 0
        const countFields = ['recommendCount', 'recommendedCount', 'count', 'times']
        for (let i = 0; i < countFields.length; i += 1) {
          const v = item[countFields[i]]
          if (v !== undefined && v !== null && v !== '') {
            const n = Number(v)
            if (!Number.isNaN(n) && n > 0) {
              count = n
              break
            }
          }
        }
        if (count <= 0) count = 1

        // 价格尽量取一个合理值
        const priceCandidates = [item.price, item.avgPrice, item.averagePrice]
        let price = null
        for (let i = 0; i < priceCandidates.length; i += 1) {
          const v = priceCandidates[i]
          if (v !== undefined && v !== null && v !== '') {
            const n = Number(v)
            if (!Number.isNaN(n) && n > 0) {
              price = n
              break
            }
          }
        }

        const imageUrl = item.imageUrl || item.image || item.cover || item.thumbnail || ''

        const canDelete =
          item.canDelete === true ||
          item.isOwner === true ||
          item.mine === true ||
          item._localCreatedByMe === true

        if (!map[key]) {
          map[key] = {
            id: item.id != null ? item.id : key || String(index),
            name: rawName,
            recommendCount: count,
            price: price != null ? price : undefined,
            image: imageUrl,
            imageUrl,
            canDelete
          }

          order.push(key)
        } else {
          const target = map[key]
          target.recommendCount += count
          if (rawName.length < target.name.length) {
            target.name = rawName
          }
          if (target.price == null && price != null) {
            target.price = price
          }
          // 如果当前没有图片或图片无效，使用新的图片
          if ((!target.image || !target.imageUrl || target.image.startsWith('tmp/')) && imageUrl) {
            target.image = imageUrl
            target.imageUrl = imageUrl
          }
          if (!target.canDelete && canDelete) {
            target.canDelete = true
          }
        }
      })

      const result = order.map((key) => map[key])
      result.sort((a, b) => {
        const ca = typeof a.recommendCount === 'number' ? a.recommendCount : 0
        const cb = typeof b.recommendCount === 'number' ? b.recommendCount : 0
        if (ca === cb) return 0
        return cb - ca
      })
      return result
    },

    mockRecommendAndCommentsIfEmpty() {
      if (!this.recommendedDishes || this.recommendedDishes.length === 0) {
        this.recommendedDishes = [
          {
            id: 'demo-1',
            name: '招牌菜品',
            price: 42,
            image: this.defaultDishImage,
            recommendCount: 12
          },
          {
            id: 'demo-2',
            name: '人气必点',
            price: 28,
            image: this.defaultDishImage,
            recommendCount: 8
          }
        ]
      }
      if (!this.comments || this.comments.length === 0) {
        const today = new Date()
        const dateText = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
          today.getDate()
        ).padStart(2, '0')}`
        this.comments = this.normalizeCommentList([
          {
            id: 'c1',
            userName: '热心食客A',
            score: 4.2,
            date: dateText,
            content: '口味不错，出餐很快，环境也干净整洁，下次还会再来～',
            images: [],
            likeCount: 5,
            dislikeCount: 0
          },
          {
            id: 'c2',
            userName: '本地吃货',
            score: 4.5,
            date: dateText,
            content: '份量足，性价比高，适合和朋友一起来聚餐。',
            images: [],
            likeCount: 3,
            dislikeCount: 1
          }
        ])
      }
    }


  }
}
</script>

<style lang="scss" scoped>
.shop-page {
  min-height: 100vh;
  /* 增大底部内边距，避免被底部操作栏遮挡 */
  padding-bottom: 200rpx;
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  box-sizing: border-box;
}

.shop-hero {
  width: 100%;
  height: 420rpx;
  overflow: hidden;
}

.shop-hero-img {

  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.shop-info-card {
  margin: 16rpx 20rpx 12rpx;
  padding: 18rpx 20rpx 16rpx;
  border-radius: 24rpx;
  background: rgba(255, 254, 247, 0.98);
  box-shadow: 0 10rpx 22rpx rgba(188, 134, 67, 0.12);
  border: 1rpx solid rgba(240, 224, 192, 0.8);
}



.shop-name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shop-name {
  font-size: 32rpx;
  font-weight: 700;
}

.shop-subtitle-row {
  margin-top: 4rpx;
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.shop-subtitle-type {
  font-size: 24rpx;
  color: #8c5c2a;
}

.shop-subtitle-sep {
  font-size: 22rpx;
  color: #d0aa78;
}

.shop-subtitle-price {
  font-size: 24rpx;
  color: #8c5c2a;
}

.shop-badge-row {
  margin-top: 6rpx;
}

.shop-badge-row--inline {
  margin-top: 0;
  margin-left: 12rpx;
}



.shop-badge {
  font-size: 22rpx;
  color: #ffffff;
  background: #ff8a65;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
}

.shop-meta-row {
  margin-top: 14rpx;
  display: flex;
  align-items: center;
}

.shop-score-block {
  width: 200rpx;
  padding-right: 16rpx;
  border-right: 1rpx solid #f0e0c0;
}

.shop-score-main-row {
  display: flex;
  align-items: baseline;
}


.shop-score-main {
  font-size: 36rpx;
  font-weight: 700;
  color: #ff6f00;
}

.shop-score-label {
  margin-right: 6rpx;
  font-size: 26rpx;
  font-weight: 600;
  color: #8c5c2a;
  position: relative;
  top: -2rpx;
}


.shop-score-stars-row {
  margin-top: 4rpx;
  display: flex;
  align-items: center;
}

.score-star {
  font-size: 22rpx;
  margin-right: 2rpx;
  color: #ffd28a;
}

.score-star--full {
  color: #ffb74d;
}

.score-star--half {
  color: #ffc06a;
  opacity: 0.8;
}

.score-star--empty {
  color: #e0cbb0;
}

.score-desc {
  margin-left: 6rpx;
  font-size: 20rpx;
  color: #b79a78;
}


.shop-meta-right {
  flex: 1;
  padding-left: 16rpx;
}

.shop-meta-line {
  display: flex;
  align-items: center;
  gap: 8rpx;
  margin-bottom: 4rpx;
}

.shop-meta-line--category {
  align-items: flex-start;
  margin-top: 6rpx;
}


.meta-label {
  font-size: 24rpx;
  color: #8c5c2a;
}

.meta-value {
  font-size: 24rpx;
  color: #5a2c12;
}

.meta-value--muted {
  color: #b79a78;
}


.meta-tag-chips {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}

.shop-tag-row {

  margin-top: 16rpx;
  padding-top: 6rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
  border-top: 1rpx dashed #f0e0c0;
}

.shop-tag {
  font-size: 22rpx;
  color: #7b2f00;
  background: #ffecc7;
  padding: 4rpx 14rpx;
  border-radius: 999rpx;
}

.shop-tag--primary {
  background: linear-gradient(90deg, #ffb74d 0%, #ff8a65 100%);
  color: #ffffff;
  font-weight: 600;
}


.section-card {
  margin: 8rpx 20rpx;
  padding: 14rpx 18rpx 16rpx;
  border-radius: 22rpx;
  background: rgba(255, 254, 247, 0.96);
  box-shadow: 0 6rpx 16rpx rgba(188, 134, 67, 0.1);
  border: 1rpx solid rgba(240, 224, 192, 0.7);
}


.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8rpx;
}

.section-header--with-action {
  margin-bottom: 2rpx;
}

.section-header--location {
  align-items: flex-start;
  margin-bottom: 2rpx;
}

.location-header-left {
  display: flex;
  flex-direction: column;
  gap: 7rpx;
}


.location-header-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8rpx;
}




.section-title {
  font-size: 30rpx;
  font-weight: 600;
}

.section-action {
  font-size: 24rpx;
  color: #c47a2a;
}

.section-body {
  margin-top: 4rpx;
}

.section-text {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.6;
}

.section-text--muted {
  color: #b79a78;
}

.dish-grid {
  margin-top: 6rpx;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12rpx;
}

.dish-card {
  border-radius: 16rpx;
  background: #fff5e6;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 200rpx;
}

.dish-image-wrapper {
  width: 100%;
  height: 200rpx;
  flex-shrink: 0;
  position: relative;
  background: #f5f5f5;
  overflow: hidden;
}

.dish-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.dish-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.dish-placeholder-icon {
  font-size: 48rpx;
}

.dish-content {
  flex: 1;
  padding: 10rpx 12rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100rpx;
}

.dish-main-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10rpx;
}

.dish-name {
  flex: 1;
  font-size: 26rpx;
  font-weight: 600;
  color: #5a2c12;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dish-price {
  font-size: 22rpx;
  color: #c47a2a;
}

.dish-footer-row {
  margin-top: 4rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dish-recommend-count {
  font-size: 22rpx;
  color: #b79a78;
}

.dish-delete {
  font-size: 22rpx;
  color: #c47a2a;
}

.drive-info {

  margin: 2rpx 0 6rpx;
}



.drive-text {
  font-size: 24rpx;
  color: #c47a2a;
}

.location-drive {
  font-size: 24rpx;
  color: #c47a2a;
}


.location-row {
  margin-top: 2rpx;
  display: flex;
  align-items: flex-start;
}



.location-left {
  flex: 1;
  padding-right: 12rpx;
}

.location-line {
  margin-top: 24rpx;
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}



.location-distance {
  font-size: 22rpx;
  color: #b79a78;
}

.location-alias {
  font-size: 22rpx;
  color: #b79a78;
}


.location-label {
  font-size: 30rpx;
  font-weight: 600;
  color: #5a2c12;
}


.location-value {
  font-size: 24rpx;
  color: #c47a2a;
}


.location-right {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}

.location-icon-btn {
  width: 120rpx;
  height: 80rpx;
  border-radius: 16rpx;
  background: #fff5e0;
  border: 2rpx solid #f0e0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-map {
  width: 60rpx;
  height: 60rpx;
  display: block;
}

.icon-phone {
  width: 44rpx;
  height: 44rpx;
  display: block;
}


.icon-label {
  margin-top: 2rpx;
  font-size: 20rpx;
  color: #8c5c2a;
}

.nearby-list {
  margin-top: 6rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rpx;
}

.nearby-card {
  background: #fff5e0;
  border-radius: 16rpx;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.nearby-img {
  width: 100%;
  height: 140rpx;
  object-fit: cover;
}

.nearby-info {
  position: relative;
  padding: 4rpx 6rpx 6rpx;
  min-height: 60rpx;
}

.nearby-name {
  font-size: 24rpx;
  font-weight: 600;
  color: #5a2c12;
  padding-right: 40rpx; /* 预留右下角距离位置，避免文字被遮挡 */
}

.nearby-distance {
  position: absolute;
  right: 6rpx;
  bottom: 6rpx;
  font-size: 22rpx;
  color: #c47a2a;
}



.comment-list {
  margin-top: 4rpx;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.comment-card {
  padding: 10rpx 8rpx 8rpx;
  border-radius: 16rpx;
  background: #fff5e6;
}

.comment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.comment-user {
  display: flex;
  align-items: center;
  gap: 10rpx;
}

.comment-avatar {
  width: 48rpx;
  height: 48rpx;
  border-radius: 24rpx;
  background: #ffd98a;
  text-align: center;
  line-height: 48rpx;
  font-size: 26rpx;
  color: #7b2f00;
}

.comment-avatar-img {
  width: 48rpx;
  height: 48rpx;
  border-radius: 24rpx;
  object-fit: cover;
}

.comment-user-meta {

  display: flex;
  flex-direction: column;
}

.comment-name {
  font-size: 24rpx;
  font-weight: 600;
}

.comment-time {
  font-size: 20rpx;
  color: #b79a78;
}

.comment-score {
  font-size: 24rpx;
  color: #ff6f00;
}

.comment-text {
  margin-top: 8rpx;
  font-size: 24rpx;
  color: #5a2c12;
  line-height: 1.6;
}

.comment-img-row {
  margin-top: 6rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rpx;
}

.comment-img {
  width: 100%;
  height: 180rpx;
  border-radius: 10rpx;
  object-fit: cover;
}


.comment-footer {
  margin-top: 8rpx;
  display: flex;
  justify-content: flex-end;
}

.comment-actions {
  display: flex;
  gap: 16rpx;
}

.comment-action {
  display: flex;
  align-items: center;
  gap: 4rpx;
  font-size: 22rpx;
  color: #b79a78;
}

.comment-action--active {
  color: #ffb74d;
}

.comment-action-icon {
  font-size: 24rpx;
}

.comment-action-text {
  font-size: 22rpx;
}


.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8rpx 16rpx 8rpx;
  padding-bottom: calc(8rpx + env(safe-area-inset-bottom));
  background: rgba(255, 250, 241, 0.98);
  box-shadow: 0 -6rpx 16rpx rgba(188, 134, 67, 0.16);
  border-top: 1rpx solid rgba(240, 224, 192, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}


.bottom-left {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.bottom-icon-item {
  min-width: 90rpx;
  padding: 4rpx 6rpx;
  border-radius: 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20rpx;
  color: #8c5c2a;
}

/* 微信小程序 button 组件样式重置 */
button.bottom-icon-item {
  background: transparent;
  border: none;
  margin: 0;
  padding: 4rpx 6rpx;
  line-height: normal;
  font-size: 20rpx;
  color: #8c5c2a;
}

button.bottom-icon-item::after {
  border: none;
}

.bottom-icon-item--active {
  background: transparent;
}

.bottom-icon-item--active .bottom-label {
  color: #c47a2a;
}

.bottom-icon-img {
  width: 36rpx;
  height: 36rpx;
  filter: grayscale(80%) brightness(1.05);
  transition: filter 0.2s ease;
}

.bottom-icon-img--active {
  filter: none;
}

.bottom-icon {
  font-size: 28rpx;
}

.bottom-label {
  margin-top: 2rpx;
}

.bottom-right {
  margin-left: 12rpx;
}

.add-to-list-btn {
  min-width: 220rpx;
  height: 72rpx;
  padding: 0 24rpx;
  border-radius: 999rpx;
  background: #ffcc33;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.12);
}

.add-to-list-text {
  font-size: 26rpx;
  font-weight: 600;
  color: #5a2c12;
}

.add-to-list-icon {
  width: 40rpx;
  height: 40rpx;
  display: block;
}


.nav-webview-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background: #fffaf1;
}


.nav-webview {
  width: 100%;
  height: 100%;
}


/* 添加到清单弹窗样式（沿用陕味集样式） */
.dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 210;
}

.add-to-list-dialog {
  width: 640rpx;
  max-height: 80vh;
  background: #fff5dc;
  border-radius: 24rpx;
  padding: 32rpx;
  box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.dialog-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #5a2c12;
  text-align: center;
  margin-bottom: 24rpx;
}

.food-info {
  padding: 16rpx 20rpx;
  background: #fff5e6;
  border-radius: 12rpx;
  margin-bottom: 24rpx;
  border: 2rpx solid #e8d4b8;
}

.food-info-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #5a2c12;
}

.dialog-section {
  margin-bottom: 24rpx;
}

.section-label {
  font-size: 26rpx;
  font-weight: 600;
  color: #5a2c12;
  margin-bottom: 12rpx;
}

.date-picker-btn {
  height: 72rpx;
  background: #ffffff;
  border-radius: 12rpx;
  padding: 0 20rpx;
  border: 2rpx solid #cfa86a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28rpx;
  color: #5a2c12;
}

.picker-arrow {
  color: #8c5c2a;
  font-size: 20rpx;
}

.checklist-list {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  max-height: 300rpx;
  overflow-y: auto;
}

.checklist-item {
  height: 72rpx;
  background: #ffffff;
  border-radius: 12rpx;
  padding: 0 20rpx;
  border: 2rpx solid #cfa86a;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checklist-item.active {
  background: #ffe6a8;
  border-color: #e3b34b;
}

.checklist-name {
  font-size: 28rpx;
  color: #5a2c12;
}

.check-icon {
  font-size: 32rpx;
  color: #5a2c12;
  font-weight: 700;
}

.no-checklist-tip {
  padding: 24rpx;
  text-align: center;
  background: #fff5e6;
  border-radius: 12rpx;
  border: 2rpx dashed #cfa86a;
  color: #8c5c2a;
  font-size: 26rpx;
}

.note-input {
  width: 100%;
  min-height: 120rpx;
  background: #ffffff;
  border-radius: 12rpx;
  padding: 16rpx 20rpx;
  border: 2rpx solid #cfa86a;
  font-size: 28rpx;
  color: #5a2c12;
  box-sizing: border-box;
}

.dialog-actions {
  display: flex;
  gap: 16rpx;
  margin-top: 24rpx;
}

.dialog-btn {
  flex: 1;
  height: 72rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12rpx;
  font-size: 28rpx;
  font-weight: 600;
}

.dialog-btn.cancel {
  background: #e0d5c7;
  color: #5a2c12;
}

.dialog-btn.confirm {
  background: #ffcc33;
  color: #5a2c12;
  border: 2rpx solid #e3b34b;
}


/* 推荐菜 / 评论弹窗样式 */
.overlay-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.overlay-panel {
  width: 86%;
  max-width: 640rpx;
  max-height: 80vh;
  background: #fffef7;
  border-radius: 28rpx;
  padding: 20rpx 22rpx 18rpx;
  box-shadow: 0 20rpx 40rpx rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.overlay-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12rpx;
}

.overlay-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #5a2c12;
}

.overlay-close {
  font-size: 32rpx;
  color: #b79a78;
  padding: 4rpx 8rpx;
}

.overlay-body {
  flex: 1;
  padding: 4rpx 0 10rpx;
  overflow-y: auto;
}

.form-item {
  margin-bottom: 14rpx;
}

.form-label {
  font-size: 24rpx;
  color: #8c5c2a;
  margin-bottom: 6rpx;
  display: block;
}

.form-input {
  width: 100%;
  padding: 10rpx 14rpx;
  border-radius: 18rpx;
  border: 2rpx solid #f0e0c0;
  font-size: 24rpx;
  box-sizing: border-box;
  background: #ffffff;
}

.form-textarea {
  width: 100%;
  padding: 10rpx 14rpx;
  border-radius: 18rpx;
  border: 2rpx solid #f0e0c0;
  font-size: 24rpx;
  min-height: 120rpx;
  box-sizing: border-box;
  background: #ffffff;
}

.form-rating {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.form-rating-star {
  font-size: 32rpx;
  color: #dfd5c7;
}

.form-rating-star--active {
  color: #ffb74d;
}

.form-rating-score-text {
  font-size: 24rpx;
  color: #c47a2a;
  margin-left: 6rpx;
}

.form-images-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
}

.form-image-wrapper {
  position: relative;
  width: 150rpx;
  height: 150rpx;
  border-radius: 16rpx;
  overflow: hidden;
  background: #fff5e6;
}

.form-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.form-image-delete {
  position: absolute;
  top: 4rpx;
  right: 4rpx;
  padding: 2rpx 8rpx;
  font-size: 22rpx;
  border-radius: 999rpx;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}

.form-image-add {
  width: 150rpx;
  height: 150rpx;
  border-radius: 16rpx;
  border: 2rpx dashed #f0e0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #c47a2a;
  background: #fffef7;
}

.form-image-add-icon {
  font-size: 36rpx;
  line-height: 1;
}

.form-image-add-text {
  margin-top: 4rpx;
  font-size: 22rpx;
}

.overlay-footer {
  margin-top: 12rpx;
  display: flex;
  justify-content: flex-end;
  gap: 12rpx;
}

.overlay-btn {
  min-width: 140rpx;
  height: 64rpx;
  border-radius: 999rpx;
  font-size: 24rpx;
  line-height: 64rpx;
  text-align: center;
  padding: 0 22rpx;
}

.overlay-btn--secondary {
  background: #fff5e6;
  color: #8c5c2a;
  border: 2rpx solid #f0e0c0;
}

.overlay-btn--primary {
  background: linear-gradient(90deg, #ffb74d 0%, #ff8a65 100%);
  color: #5a2c12;
  border: none;
}
</style>


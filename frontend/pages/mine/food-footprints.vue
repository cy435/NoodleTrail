<template>
  <page-meta page-style="overflow:auto;min-height:100vh" />
  <view class="footprints-page">
    <!-- 顶部统计卡片：城市 + 美食 + 非遗 -->
    <view class="header-card">
      <view class="header-title-row">
        <text class="header-title">陕味足迹大全</text>
        <text class="header-subtitle">看看你在三秦大地走过了多少路</text>
      </view>

      <view class="header-stats-row">
        <view class="stat-pill">
          <text class="stat-number">{{ stats.citiesCount }}</text>
          <text class="stat-label">打卡城市</text>
        </view>
        <view class="stat-pill">
          <text class="stat-number">{{ stats.visitedFoodCount }}</text>
          <text class="stat-label">美食打卡</text>
        </view>
        <view class="stat-pill">
          <text class="stat-number">{{ stats.scenicExperiencedCount }}</text>
          <text class="stat-label">景点游玩</text>
        </view>
        <view class="stat-pill">
          <text class="stat-number">{{ stats.heritageExperiencedCount }}</text>
          <text class="stat-label">非遗体验</text>
        </view>
      </view>

      <view v-if="!privacyAgree" class="privacy-hint">
        <text>你在设置中关闭了个性化统计，足迹数据仅保存在本地。</text>
      </view>
    </view>

    <!-- 顶部主 Tab：足迹 / 收藏 -->
    <view class="main-tabs">
      <view
        class="main-tab"
        :class="{ 'main-tab--active': activeMainTab === 'visited' }"
        @tap="switchMainTab('visited')"
      >
        足迹
      </view>
      <view
        class="main-tab"
        :class="{ 'main-tab--active': activeMainTab === 'favorite' }"
        @tap="switchMainTab('favorite')"
      >
        收藏
      </view>
    </view>

    <!-- 加载与错误提示 -->
    <view v-if="loading && visitedList.length === 0 && cityStats.length === 0" class="loading-block">
      <text>足迹加载中...</text>
    </view>
    <view v-else-if="errorMessage" class="error-block">
      <text class="error-text">{{ errorMessage }}</text>
    </view>

    <!-- 足迹视图：城市 + 记录列表 -->
    <view v-else-if="activeMainTab === 'visited'" class="visited-section">
      <!-- 城市足迹 -->
      <view class="section-header">
        <view class="section-title-group">
          <view class="section-title-with-icon">
            <image class="section-title-icon" :src="iconZuji" mode="aspectFit" />
            <text class="section-title">城市足迹</text>
          </view>
          <text class="section-subtitle">已经在 {{ stats.citiesCount }} 座城市留下足迹</text>
        </view>
      </view>

      <scroll-view
        class="city-chips-scroll"
        scroll-x
        enable-flex
        v-if="cityStats.length > 0"
      >
        <view
          v-for="city in cityStats"
          :key="city.cityId || city.cityName"
          class="city-chip"
        >
          <view class="chip-header">
            <view class="chip-icon">📍</view>
            <text class="chip-name">{{ city.cityName }}</text>
            <view class="chip-badge-wrapper">
              <text class="chip-badge chip-badge--food">{{ city.foodCount }}</text>
              <text class="chip-badge chip-badge--scenic">{{ city.scenicCount || 0 }}</text>
              <text class="chip-badge chip-badge--heritage">{{ city.heritageCount }}</text>
            </view>
          </view>
          <text class="chip-tagline">
            {{ city.tagline || '这一城的味道，你已经亲自去过。' }}
          </text>
          <view class="chip-stats">
            <text class="chip-stat-text">{{ city.foodCount }} 次美食打卡</text>
            <text v-if="city.heritageCount > 0" class="chip-stat-divider">·</text>
            <text v-if="city.heritageCount > 0" class="chip-stat-text">{{ city.heritageCount }} 次非遗体验</text>
            <text v-if="city.scenicCount > 0" class="chip-stat-divider">·</text>
            <text v-if="city.scenicCount > 0" class="chip-stat-text">{{ city.scenicCount }} 次景点游玩</text>
          </view>
        </view>
      </scroll-view>
      <view v-else class="city-empty">
        <view class="empty-icon">🗺️</view>
        <text class="empty-text">还没有任何城市足迹</text>
        <text class="empty-hint">去探索陕西的美食、景点和非遗，开始你的足迹之旅吧～</text>
      </view>

      <!-- 分类子 Tab：美食打卡 / 景点游玩 / 非遗体验 -->
      <view class="sub-tabs">
        <view
          class="sub-tab"
          :class="{ 'sub-tab--active': activeCategoryTab === 'food' }"
          @tap="switchCategoryTab('food')"
        >
          美食打卡
        </view>
        <view
          class="sub-tab"
          :class="{ 'sub-tab--active': activeCategoryTab === 'scenic' }"
          @tap="switchCategoryTab('scenic')"
        >
          景点游玩
        </view>
        <view
          class="sub-tab"
          :class="{ 'sub-tab--active': activeCategoryTab === 'heritage' }"
          @tap="switchCategoryTab('heritage')"
        >
          非遗体验
        </view>
      </view>

      <!-- 足迹记录列表 -->
      <view v-if="displayVisitedList.length === 0" class="records-empty">
        <text class="empty-text">还没有相关记录</text>
        <view class="empty-actions">
          <text class="empty-link" @tap="goToCheckinRecords">去发布美食打卡</text>
          <text class="empty-divider">·</text>
          <text class="empty-link" @tap="goToHeritageRecords">去体验非遗 / 景点</text>
        </view>
      </view>
      <view v-else class="records-list">
        <view
          v-for="item in displayVisitedList"
          :key="item.uid"
          class="record-card visited-card"
          @tap="openPoiDetail(item)"
        >
          <view class="record-image-wrapper" v-if="item.cover">
            <image
              class="record-image"
              :src="item.cover"
              mode="aspectFill"
            />
          </view>
          <view class="record-content">
            <view class="record-header">
              <view class="record-tag" :class="'record-tag--' + item.type">
                <text>{{ item.typeLabel }}</text>
              </view>
              <text class="record-date">{{ item.date }}</text>
            </view>
            <view class="record-main">
              <text class="record-title">{{ item.title }}</text>
              <text
                v-if="item.subtitle"
                class="record-subtitle"
              >
                {{ item.subtitle }}
              </text>
            </view>
            <view class="record-meta">
              <view class="meta-left">
                <text v-if="item.city" class="meta-city">📍 {{ item.city }}</text>
                <text v-else class="meta-city meta-city--unknown">📍 陕西</text>
              </view>
              <view class="meta-right">
                <text class="meta-badge">已体验</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 收藏视图：展示收藏过的美食店铺 / 景点 / 非遗体验中心这些"地方" -->
    <view v-else class="favorite-section">
      <view v-if="loadingFavorite && favoriteFoodList.length === 0 && favoriteScenicList.length === 0 && favoriteHeritageList.length === 0" class="loading-block">
        <text>收藏数据加载中...</text>
      </view>
      <view v-else>
        <view class="section-header">
          <view class="section-title-group">
            <view class="section-title-with-icon">
              <image class="section-title-icon" :src="iconShoucang" mode="aspectFit" />
              <text class="section-title">我的收藏</text>
            </view>
            <text class="section-subtitle">收藏过的陕味地点会在这里汇总展示</text>
          </view>
        </view>

      <view class="favorite-stats-row">
        <view
          class="stat-pill stat-pill--soft"
          :class="{ 'stat-pill--active': activeFavoriteTab === 'food' }"
          @tap="switchFavoriteTab('food')"
        >
          <text class="stat-number">{{ favoriteFoodList.length }}</text>
          <text class="stat-label">美食打卡</text>
        </view>
        <view
          class="stat-pill stat-pill--soft"
          :class="{ 'stat-pill--active': activeFavoriteTab === 'scenic' }"
          @tap="switchFavoriteTab('scenic')"
        >
          <text class="stat-number">{{ favoriteScenicList.length }}</text>
          <text class="stat-label">景点游玩</text>
        </view>
        <view
          class="stat-pill stat-pill--soft"
          :class="{ 'stat-pill--active': activeFavoriteTab === 'heritage' }"
          @tap="switchFavoriteTab('heritage')"
        >
          <text class="stat-number">{{ favoriteHeritageList.length }}</text>
          <text class="stat-label">非遗体验</text>
        </view>
      </view>

        <view v-if="displayFavoriteList.length === 0" class="records-empty">
          <text class="empty-text">暂时还没有收藏的陕味地点</text>
          <text class="empty-hint">可以在「陕味趣游地图」或各城市页收藏你想去/想再去的地方～</text>
        </view>
        <view v-else class="records-list">
          <view
            v-for="item in displayFavoriteList"
            :key="item.id"
            class="record-card visited-card favorite-card"
            @tap="openPoiDetailFromFavorite(item)"
          >
            <view class="record-image-wrapper" v-if="item.cover">
              <image
                class="record-image"
                :src="item.cover"
                mode="aspectFill"
              />
            </view>
            <view class="record-content">
              <view class="record-header">
                <view class="record-tag" :class="'record-tag--' + (item.poiType || 'food')">
                  <text>{{ item.poiType === 'food' || item.poiType === 1 ? '美食打卡' : item.poiType === 'scenic' || item.poiType === 2 ? '景点游玩' : '非遗体验' }}</text>
                </view>
                <text class="record-date">{{ item.favoriteDate || '' }}</text>
              </view>
              <view class="record-main">
                <text class="record-title">{{ item.name }}</text>
                <text
                  v-if="item.subtitle || item.category || item.address"
                  class="record-subtitle"
                >
                  {{ item.subtitle || item.category || item.address || (item.poiType === 'food' || item.poiType === 1 ? '美食门店' : item.poiType === 'scenic' || item.poiType === 2 ? '景点' : '非遗体验中心') }}
                </text>
              </view>
              <view class="record-meta">
                <view class="meta-left">
                  <text v-if="item.cityHint" class="meta-city">📍 {{ item.cityHint }}</text>
                  <text v-else class="meta-city meta-city--unknown">📍 陕西</text>
                </view>
                <view class="meta-right">
                  <text class="meta-badge meta-badge--favorite">已收藏</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const { getMyHeritageRecords } = require('../../api/heritage.js')
const { getPoiExperiences, getMyFavoritePois } = require('../../api/map.js')
const { IMG } = require('../../api/imageMap.js')
import iconZuji from '../../static/assets/zuji.png'
import iconShoucang from '../../static/assets/收藏.png'

// 与首页 / 城市详情保持一致的城市配置
const CITY_CONFIG = [
  { id: 'xian', name: '西安', tagline: '长安城下万面同煮' },
  { id: 'baoji', name: '宝鸡', tagline: '臊子酸辣，擀面皮筋爽' },
  { id: 'xianyang', name: '咸阳', tagline: '泾渭河畔的豪放拉面' },
  { id: 'weinan', name: '渭南', tagline: '黄河东岸的宽与细' },
  { id: 'yanan', name: '延安', tagline: '黄土地上的烈烈辣香' },
  { id: 'yulin', name: '榆林', tagline: '榆塞粗犷的陕北筋道' },
  { id: 'hanzhong', name: '汉中', tagline: '巴山背篓里的米皮香' },
  { id: 'ankang', name: '安康', tagline: '秦巴山里蒸出的湿润口感' },
  { id: 'shangluo', name: '商洛', tagline: '秦岭南麓的山泉酸爽' },
  { id: 'tongchuan', name: '铜川', tagline: '耀州臊子浇满铜魂' }
]

const CITY_NAME_TO_ID = CITY_CONFIG.reduce((map, city) => {
  map[city.name] = city.id
  map[city.name + '市'] = city.id
  return map
}, {})

export default {
  name: 'FoodFootprintsSummary',
  data() {
    return {
      IMG,
      iconZuji,
      iconShoucang,
      loading: false,
      loadingFavorite: false, // 收藏数据单独加载状态
      errorMessage: '',
      privacyAgree: true,

      activeMainTab: 'visited', // visited | favorite
      activeCategoryTab: 'food', // food | scenic | heritage

      stats: {
        citiesCount: 0,
        visitedFoodCount: 0,
        scenicExperiencedCount: 0,
        heritageExperiencedCount: 0,
        favoriteFoodCount: 0,
        favoriteScenicCount: 0,
        favoriteHeritageCount: 0
      },

      cityStats: [],
      visitedList: [],

      favoriteFoodList: [],
      favoriteScenicList: [],
      favoriteHeritageList: [],

      activeFavoriteTab: 'food',

      // 内部临时数据
      _cityFoodCountMap: {},
      _cityScenicCountMap: {},
      _cityHeritageCountMap: {},
      
      // 缓存相关
      _cacheKey: 'food_footprints_cache',
      _cacheTimestampKey: 'food_footprints_cache_time',
      _cacheExpireTime: 5 * 60 * 1000 // 5分钟缓存过期
    }
  },
  computed: {
    displayVisitedList() {
      if (this.activeCategoryTab === 'food') {
        return this.visitedList.filter((item) => item.type === 'food')
      }
      if (this.activeCategoryTab === 'scenic') {
        return this.visitedList.filter((item) => item.type === 'scenic')
      }
      if (this.activeCategoryTab === 'heritage') {
        return this.visitedList.filter((item) => item.type === 'heritage')
      }
      return this.visitedList
    },
    displayFavoriteList() {
      if (this.activeFavoriteTab === 'food') {
        return this.favoriteFoodList
      }
      if (this.activeFavoriteTab === 'scenic') {
        return this.favoriteScenicList
      }
      return this.favoriteHeritageList
    }
  },
  onLoad() {
    this.bootstrap()
  },
  onShow() {
    // 只在需要刷新时重新加载，否则使用缓存
    this.bootstrap(true)
  },
  methods: {
    async bootstrap(forceRefresh = false) {
      // 先尝试从缓存加载
      if (!forceRefresh && this.loadFromCache()) {
        console.log('[FoodFootprints] 从缓存加载数据成功')
        // 后台静默刷新
        this.refreshInBackground()
        return
      }

      this.loading = true
      this.errorMessage = ''
      this.cityStats = []
      this.visitedList = []
      this.favoriteHeritageList = []
      this._cityFoodCountMap = {}
      this._cityScenicCountMap = {}
      this._cityHeritageCountMap = {}

      this.loadPrivacySetting()

      try {
        // 优先加载足迹数据（用户主要看的内容）
        await Promise.all([
          this.loadHeritageFootprints(),
          this.loadPoiFootprints()
        ])
        // 先执行去重，再统计城市数据
        this.mergeVisitedList()
        this.mergeCityStats()
        
        // 保存缓存
        this.saveToCache()
        
        // 足迹数据加载完成，可以显示页面了
        this.loading = false
        
        // 延迟加载收藏数据（非关键数据，不阻塞页面显示）
        setTimeout(() => {
          this.loadFavoriteFootprints()
        }, 300)
        
        this.updateUserDataCache()
      } catch (err) {
        console.error('[FoodFootprints] bootstrap error:', err)
        this.errorMessage = '加载足迹数据失败，请稍后重试'
        this.loading = false
      }
    },

    // 从缓存加载数据
    loadFromCache() {
      try {
        const cacheData = uni.getStorageSync(this._cacheKey)
        const cacheTime = uni.getStorageSync(this._cacheTimestampKey)
        
        if (!cacheData || !cacheTime) {
          return false
        }
        
        // 检查缓存是否过期
        const now = Date.now()
        if (now - cacheTime > this._cacheExpireTime) {
          console.log('[FoodFootprints] 缓存已过期')
          return false
        }
        
        // 恢复数据
        if (cacheData.stats) {
          this.stats = { ...this.stats, ...cacheData.stats }
        }
        if (Array.isArray(cacheData.cityStats)) {
          this.cityStats = cacheData.cityStats
        }
        if (Array.isArray(cacheData.visitedList)) {
          this.visitedList = cacheData.visitedList
        }
        if (Array.isArray(cacheData.favoriteFoodList)) {
          this.favoriteFoodList = cacheData.favoriteFoodList
        }
        if (Array.isArray(cacheData.favoriteScenicList)) {
          this.favoriteScenicList = cacheData.favoriteScenicList
        }
        if (Array.isArray(cacheData.favoriteHeritageList)) {
          this.favoriteHeritageList = cacheData.favoriteHeritageList
        }
        
        return true
      } catch (e) {
        console.warn('[FoodFootprints] loadFromCache error:', e)
        return false
      }
    },

    // 保存数据到缓存
    saveToCache() {
      try {
        const cacheData = {
          stats: { ...this.stats },
          cityStats: [...this.cityStats],
          visitedList: [...this.visitedList],
          favoriteFoodList: [...this.favoriteFoodList],
          favoriteScenicList: [...this.favoriteScenicList],
          favoriteHeritageList: [...this.favoriteHeritageList]
        }
        uni.setStorageSync(this._cacheKey, cacheData)
        uni.setStorageSync(this._cacheTimestampKey, Date.now())
      } catch (e) {
        console.warn('[FoodFootprints] saveToCache error:', e)
      }
    },

    // 后台静默刷新
    async refreshInBackground() {
      try {
        await Promise.all([
          this.loadHeritageFootprints(),
          this.loadPoiFootprints()
        ])
        this.mergeVisitedList()
        this.mergeCityStats()
        this.saveToCache()
        this.loadFavoriteFootprints()
        this.updateUserDataCache()
      } catch (err) {
        console.error('[FoodFootprints] refreshInBackground error:', err)
      }
    },

    loadPrivacySetting() {
      let agree = true
      try {
        const stored = uni.getStorageSync('app_settings')
        if (stored && typeof stored === 'object' && typeof stored.privacyAgree === 'boolean') {
          agree = stored.privacyAgree
        }
      } catch (e) {
        console.warn('[FoodFootprints] loadPrivacySetting error:', e)
      }
      this.privacyAgree = agree
    },


    async loadHeritageFootprints() {
      try {
        const result = await getMyHeritageRecords()
        const favoriteList =
          (result && Array.isArray(result.favoriteList) && result.favoriteList) || []

        // 统计数据会在 mergeVisitedList 中统一计算
        this.stats.heritageFavoriteCount = favoriteList.length

        // 注意：这里不处理 experiencedList，因为"我的非遗"中的体验记录
        // 不应该显示在"足迹"页面的"非遗体验"分类中
        // "足迹"页面的"非遗体验"只显示从"陕味趣游地图"点击体验的POI记录
        // experiencedList 的数据应该只在"我的非遗"页面显示

        // 将收藏的非遗项目按类型拆分为「美食打卡 / 景点游玩 / 非遗体验」三类收藏
        const mappedFavorites = favoriteList.map((raw, index) => {
          const safeItem = raw || {}
          const title =
            safeItem.name ||
            safeItem.heritageName ||
            safeItem.title ||
            '非遗项目'
          const category = safeItem.category || safeItem.heritageType || ''
          const cityHint = this.extractCityNameFromHeritage(safeItem)
          const dateValue =
            safeItem.favoriteAt ||
            safeItem.createdAt ||
            safeItem.createTime ||
            safeItem.timestamp ||
            ''

          const favoriteType = this.resolveFavoriteType(category)
          
          // 获取封面图片
          let cover = safeItem.cover || safeItem.imageUrl || safeItem.image || safeItem.thumbnail || ''
          if (!cover && Array.isArray(safeItem.images) && safeItem.images.length > 0) {
            cover = safeItem.images[0]
          }
          if (!cover) {
            cover = '/static/assets/热门推荐.png'
          }
          
          const desc = safeItem.contentIntroduction || safeItem.description || safeItem.desc || ''
          const subtitle = desc ? this.truncateText(desc, 40) : (category || '')

          return {
            id: safeItem.id || safeItem.heritageId || index,
            name: title,
            category,
            cityHint,
            favoriteDate: this.formatDate(dateValue),
            favoriteType,
            poiType: favoriteType, // 用于卡片样式
            cover: cover,
            subtitle: subtitle,
            address: safeItem.address || safeItem.region || safeItem.area || ''
          }
        })

        // 确保 mappedFavorites 是数组
        if (Array.isArray(mappedFavorites) && mappedFavorites.length > 0) {
          this.splitFavoriteLists(mappedFavorites)
        } else {
          console.log('[FoodFootprints] loadHeritageFootprints: mappedFavorites 为空或不是数组')
        }

        // 不再将"我的非遗"中的体验记录添加到 visitedList
        // 足迹页面的"非遗体验"只显示从"陕味趣游地图"点击体验的POI记录
      } catch (err) {
        console.error('[FoodFootprints] loadHeritageFootprints error:', err)
      }
    },

    async loadPoiFootprints() {
      try {
        // 先从后端接口获取体验列表
        let foodExperiences = []
        let scenicExperiences = []
        let heritageExperiences = []
        let hasBackendError = false
        
        try {
          const results = await Promise.all([
            getPoiExperiences({ type: 1 }).catch(function(e) {
              console.warn('[FoodFootprints] 获取美食体验数据失败:', e)
              return []
            }),
            getPoiExperiences({ type: 2 }).catch(function(e) {
              console.warn('[FoodFootprints] 获取景点体验数据失败:', e)
              return []
            }),
            getPoiExperiences({ type: 3 }).catch(function(e) {
              console.warn('[FoodFootprints] 获取非遗体验数据失败:', e)
              return []
            })
          ])
          foodExperiences = results[0] || []
          scenicExperiences = results[1] || []
          heritageExperiences = results[2] || []
          
          console.log('[FoodFootprints] 从后端获取体验数据 - 美食:', foodExperiences.length, '景点:', scenicExperiences.length, '非遗:', heritageExperiences.length)
        } catch (e) {
          console.error('[FoodFootprints] getPoiExperiences 整体失败:', e)
          hasBackendError = true
        }

        const cityPoiCountMap = {}
        const poiVisitedRecords = []

        // 处理美食体验
        const self = this
        const processExperiences = function(experiences, poiType) {
          return (experiences || []).map(function(item, index) {
            const safeItem = item || {}
            const poi = safeItem.poi || safeItem
            
            const poiId = poi.id || safeItem.poiId || safeItem.id
            let name = poi.name || safeItem.name || ''
            if (!name) {
              if (poiType === 'food') {
                name = '美食门店'
              } else if (poiType === 'scenic') {
                name = '景点'
              } else {
                name = '非遗体验中心'
              }
            }
            const cityName = self.extractCityNameFromPoi(poi) || self.extractCityNameFromPoi(safeItem)
            const displayCity = cityName || ''

            if (displayCity) {
              if (!cityPoiCountMap[displayCity]) {
                cityPoiCountMap[displayCity] = { food: 0, scenic: 0, heritage: 0 }
              }
              cityPoiCountMap[displayCity][poiType] += 1
            }

            let typeLabel = '美食打卡'
            if (poiType === 'scenic') {
              typeLabel = '景点游玩'
            } else if (poiType === 'heritage') {
              typeLabel = '非遗体验'
            }

            const category = poi.category || poi.categoryName || safeItem.category || ''
            const address = poi.address || poi.fullAddress || poi.full_address || safeItem.address || ''
            const subtitle = category || address || ''
            const dateValue = safeItem.experiencedAt || safeItem.createdAt || safeItem.timestamp || Date.now()
            
            let cover = poi.cover || poi.imageUrl || poi.image || poi.thumbnail || safeItem.cover || ''
            if (!cover && Array.isArray(poi.images) && poi.images.length > 0) {
              cover = poi.images[0]
            }
            if (!cover) {
              cover = '/static/assets/热门推荐.png'
            }

            return {
              uid: 'poi-' + poiType + '-' + (poiId || index),
              type: poiType,
              typeLabel: typeLabel,
              title: name,
              subtitle: subtitle ? self.truncateText(subtitle, 40) : '',
              city: displayCity,
              date: self.formatDate(dateValue),
              poiId: poiId,
              poiType: poiType,
              cover: cover
            }
          })
        }

        // 处理三种类型的体验数据
        poiVisitedRecords.push(
          ...processExperiences(foodExperiences, 'food'),
          ...processExperiences(scenicExperiences, 'scenic'),
          ...processExperiences(heritageExperiences, 'heritage')
        )

        console.log('[FoodFootprints] 处理后端体验数据，共', poiVisitedRecords.length, '条记录')

        // 更新城市统计
        Object.keys(cityPoiCountMap).forEach(cityName => {
          const counts = cityPoiCountMap[cityName]
          if (!this._cityFoodCountMap[cityName]) {
            this._cityFoodCountMap[cityName] = 0
          }
          if (!this._cityScenicCountMap[cityName]) {
            this._cityScenicCountMap[cityName] = 0
          }
          if (!this._cityHeritageCountMap[cityName]) {
            this._cityHeritageCountMap[cityName] = 0
          }
          this._cityFoodCountMap[cityName] += counts.food
          this._cityScenicCountMap[cityName] += counts.scenic
          this._cityHeritageCountMap[cityName] += counts.heritage
        })

        // 统计数据会在 mergeVisitedList 中统一计算

        // 合并到 visitedList
        this.visitedList = [...this.visitedList, ...poiVisitedRecords]

        // 如果后端没有数据，尝试从本地存储加载（作为兜底）
        if (poiVisitedRecords.length === 0) {
          console.log('[FoodFootprints] 后端没有返回体验数据，尝试从本地存储加载')
          this.loadPoiFootprintsFromLocal()
        } else {
          console.log('[FoodFootprints] ✅ 成功从后端加载体验数据，共', poiVisitedRecords.length, '条')
        }
      } catch (err) {
        console.error('[FoodFootprints] loadPoiFootprints error:', err)
        console.error('[FoodFootprints] 错误详情:', err.stack || err)
        // 出错时从本地存储加载
        console.log('[FoodFootprints] 发生错误，尝试从本地存储加载数据')
        this.loadPoiFootprintsFromLocal()
      }
    },

    loadPoiFootprintsFromLocal() {
      try {
        // 从本地存储加载 POI 体验足迹（experienced）作为兜底
        const experiencedKey = 'poi_footprints_experienced'
        const experiencedList = uni.getStorageSync(experiencedKey) || []
        
        if (!Array.isArray(experiencedList) || experiencedList.length === 0) {
          return
        }

        const cityPoiCountMap = {}
        const poiVisitedRecords = []

        experiencedList.forEach((item, index) => {
          const safeItem = item || {}
          const poiType = safeItem.type || safeItem.poiType || 'food'
          const cityName = this.extractCityNameFromPoi(safeItem)
          const displayCity = cityName || ''

          if (displayCity) {
            if (!cityPoiCountMap[displayCity]) {
              cityPoiCountMap[displayCity] = { food: 0, scenic: 0, heritage: 0 }
            }
            if (poiType === 'food') {
              cityPoiCountMap[displayCity].food += 1
            } else if (poiType === 'scenic') {
              cityPoiCountMap[displayCity].scenic += 1
            } else if (poiType === 'heritage') {
              cityPoiCountMap[displayCity].heritage += 1
            }
          }

          let typeLabel = '美食打卡'
          let type = 'food'
          if (poiType === 'scenic') {
            typeLabel = '景点游玩'
            type = 'scenic'
          } else if (poiType === 'heritage') {
            typeLabel = '非遗体验'
            type = 'heritage'
          }

          const title = safeItem.name || '地点'
          const subtitle = safeItem.category || safeItem.address || ''
          const dateValue = safeItem.timestamp || Date.now()

          poiVisitedRecords.push({
            uid: `poi-${poiType}-${safeItem.id || index}`,
            type,
            typeLabel,
            title,
            subtitle: subtitle ? this.truncateText(subtitle, 40) : '',
            city: displayCity,
            date: this.formatDate(dateValue),
            poiId: safeItem.id,
            poiType,
            cover: safeItem.cover || '/static/assets/热门推荐.png'
          })
        })

        // 更新城市统计
        Object.keys(cityPoiCountMap).forEach(cityName => {
          const counts = cityPoiCountMap[cityName]
          if (!this._cityFoodCountMap[cityName]) {
            this._cityFoodCountMap[cityName] = 0
          }
          if (!this._cityScenicCountMap[cityName]) {
            this._cityScenicCountMap[cityName] = 0
          }
          if (!this._cityHeritageCountMap[cityName]) {
            this._cityHeritageCountMap[cityName] = 0
          }
          this._cityFoodCountMap[cityName] += counts.food
          this._cityScenicCountMap[cityName] += counts.scenic
          this._cityHeritageCountMap[cityName] += counts.heritage
        })

        // 统计数据会在 mergeVisitedList 中统一计算

        // 合并到 visitedList
        this.visitedList = [...this.visitedList, ...poiVisitedRecords]
      } catch (err) {
        console.error('[FoodFootprints] loadPoiFootprintsFromLocal error:', err)
      }
    },

    async loadFavoriteFootprints() {
      // 如果已经在加载中，避免重复加载
      if (this.loadingFavorite) {
        return
      }
      
      this.loadingFavorite = true
      try {
        // 重置列表，避免重复数据
        this.favoriteFoodList = []
        this.favoriteScenicList = []
        this.favoriteHeritageList = []
        
        // 移除定位获取，避免阻塞（定位不是必需的）
        // 如果需要距离计算，可以在用户切换到收藏标签时再获取
        
        // 分别获取三种类型的收藏数据（后端必须按 type 查询）
        const [foodFavoritesRaw, scenicFavoritesRaw, heritageFavoritesRaw] = await Promise.all([
          this.loadFavoritePoisFromBackend({ type: 1 }),
          this.loadFavoritePoisFromBackend({ type: 2 }),
          this.loadFavoritePoisFromBackend({ type: 3 })
        ])
        
        console.log('[FoodFootprints] 从后端获取收藏数据 - 美食:', foodFavoritesRaw.length, '景点:', scenicFavoritesRaw.length, '非遗:', heritageFavoritesRaw.length)
        
        // 处理美食收藏数据
        const foodFavorites = this.processFavoriteList(foodFavoritesRaw, 'food')
        // 处理景点收藏数据
        const scenicFavorites = this.processFavoriteList(scenicFavoritesRaw, 'scenic')
        // 处理非遗收藏数据
        const heritageFavorites = this.processFavoriteList(heritageFavoritesRaw, 'heritage')
        
        console.log('[FoodFootprints] 后端数据处理完成 - 美食:', foodFavorites.length, '景点:', scenicFavorites.length, '非遗:', heritageFavorites.length)
        
        // 直接使用后端数据
        this.favoriteFoodList = foodFavorites
        this.favoriteScenicList = scenicFavorites
        this.favoriteHeritageList = heritageFavorites

        // 更新收藏统计
        this.stats.favoriteFoodCount = this.favoriteFoodList.length
        this.stats.favoriteScenicCount = this.favoriteScenicList.length
        this.stats.favoriteHeritageCount = this.favoriteHeritageList.length
        
        // 更新缓存
        this.saveToCache()
        
        console.log('[FoodFootprints] ✅ 收藏数据加载完成 - 美食:', this.stats.favoriteFoodCount, '景点:', this.stats.favoriteScenicCount, '非遗:', this.stats.favoriteHeritageCount)
      } catch (err) {
        console.error('[FoodFootprints] loadFavoriteFootprints error:', err)
        console.error('[FoodFootprints] 错误详情:', err.stack || err)
        // 出错时重置列表
        this.favoriteFoodList = []
        this.favoriteScenicList = []
        this.favoriteHeritageList = []
        this.stats.favoriteFoodCount = 0
        this.stats.favoriteScenicCount = 0
        this.stats.favoriteHeritageCount = 0
      } finally {
        this.loadingFavorite = false
      }
    },

    // 处理收藏列表数据
    processFavoriteList(rawList, expectedType) {
      if (!Array.isArray(rawList) || rawList.length === 0) {
        return []
      }
      
      const result = []
      const seenIds = new Set()
      
      rawList.forEach((item, index) => {
        const safeItem = item || {}
        const poi = safeItem.poi || safeItem
        
        // 获取 POI ID
        const poiId = poi.id || safeItem.poiId || safeItem.id
        
        if (!poiId) {
          console.warn(`[FoodFootprints] 跳过无效项（无ID）:`, safeItem)
          return
        }
        
        // 去重
        if (seenIds.has(String(poiId))) {
          console.log(`[FoodFootprints] 跳过重复项（ID: ${poiId}）`)
          return
        }
        seenIds.add(String(poiId))
        
        const cityHint = this.extractCityNameFromPoi(poi) || this.extractCityNameFromPoi(safeItem)
        
        let cover = poi.cover || poi.imageUrl || poi.image || poi.thumbnail || safeItem.cover || safeItem.imageUrl || ''
        if (!cover && Array.isArray(poi.images) && poi.images.length > 0) {
          cover = poi.images[0]
        }
        if (!cover && Array.isArray(safeItem.images) && safeItem.images.length > 0) {
          cover = safeItem.images[0]
        }
        if (!cover) {
          cover = '/static/assets/热门推荐.png'
        }
        
        const favoriteItem = {
          id: String(poiId),
          name: poi.name || safeItem.name || '地点',
          category: poi.category || poi.categoryName || safeItem.category || safeItem.categoryName || '',
          cityHint: cityHint || '陕西',
          favoriteDate: this.formatDate(safeItem.favoriteAt || safeItem.createdAt || safeItem.timestamp || safeItem.favoriteDate),
          poiType: expectedType,
          address: poi.address || poi.fullAddress || poi.full_address || safeItem.address || '',
          cover: cover,
          subtitle: poi.category || poi.address || safeItem.category || safeItem.address || '',
          // 如果有距离信息，也保存下来
          distance: poi.distance !== undefined ? poi.distance : (safeItem.distance !== undefined ? safeItem.distance : null)
        }

        result.push(favoriteItem)
      })
      
      return result
    },

    // 从后端获取收藏的POI列表
    async loadFavoritePoisFromBackend(params = {}) {
      try {
        // 必须传入 type 参数
        if (!params.type || (params.type !== 1 && params.type !== 2 && params.type !== 3)) {
          console.warn('[FoodFootprints] loadFavoritePoisFromBackend 警告: 必须传入 type 参数 (1=美食, 2=景点, 3=非遗)')
          return []
        }
        
        // 调用获取收藏POI列表的接口
        const favorites = await getMyFavoritePois(params)
        console.log(`[FoodFootprints] 后端接口返回数据 (type=${params.type}):`, favorites)
        
        if (Array.isArray(favorites)) {
          if (favorites.length > 0) {
            console.log(`[FoodFootprints] ✅ 从后端获取到收藏POI数量 (type=${params.type}):`, favorites.length)
            return favorites
          } else {
            console.log(`[FoodFootprints] ℹ️ 后端返回空数组 (type=${params.type})，用户可能没有收藏此类POI`)
            return []
          }
        }
        console.warn('[FoodFootprints] ⚠️ 后端返回的数据格式不正确，不是数组:', typeof favorites, favorites)
        return []
      } catch (err) {
        console.error('[FoodFootprints] ❌ loadFavoritePoisFromBackend error:', err)
        // 检查是否是未登录错误
        if (err.statusCode === 401 || (err.message && err.message.includes('UNAUTHORIZED'))) {
          console.warn('[FoodFootprints] 用户未登录，需要先登录')
          // 可以在这里触发登录逻辑
          // uni.navigateTo({ url: '/pages/login/index' })
        }
        return []
      }
    },

    extractCityNameFromPoi(item) {
      const explicitCity = (item.city || '').trim()
      if (explicitCity) {
        return this.normalizeCityName(explicitCity)
      }

      const addressText = (item.address || '').trim()
      if (!addressText) {
        return ''
      }

      const knownName = CITY_CONFIG.map((c) => c.name).find((name) =>
        addressText.indexOf(name) !== -1
      )
      if (knownName) {
        return knownName
      }

      const cityIndex = addressText.indexOf('市')
      if (cityIndex > 0 && cityIndex <= 4) {
        return addressText.slice(0, cityIndex)
      }

      return ''
    },

    splitFavoriteLists(favorites) {
      try {
        // 确保输入是数组
        if (!Array.isArray(favorites)) {
          console.warn('[FoodFootprints] splitFavoriteLists: favorites 不是数组', typeof favorites)
          return
        }
        
        const foodList = []
        const scenicList = []
        const heritageList = []
        const seenIds = {
          food: new Set(),
          scenic: new Set(),
          heritage: new Set()
        }

        favorites.forEach((item) => {
          if (!item || !item.id) {
            return
          }
          
          const type = item.favoriteType || 'heritage'
          const itemId = String(item.id) // 确保 ID 是字符串
          
          // 去重：如果该ID已经存在于对应类型的列表中，跳过
          if (type === 'food') {
            if (!seenIds.food.has(itemId)) {
              seenIds.food.add(itemId)
              foodList.push(item)
            }
          } else if (type === 'scenic') {
            if (!seenIds.scenic.has(itemId)) {
              seenIds.scenic.add(itemId)
              scenicList.push(item)
            }
          } else {
            if (!seenIds.heritage.has(itemId)) {
              seenIds.heritage.add(itemId)
              heritageList.push(item)
            }
          }
        })

        // 合并到现有列表时也要去重
        const mergeAndDeduplicate = function(existingList, newList) {
          if (!Array.isArray(existingList)) {
            existingList = []
          }
          if (!Array.isArray(newList)) {
            newList = []
          }
          
          const idSet = new Set()
          const result = []
          
          // 先添加现有列表中的项
          existingList.forEach(function(item) {
            if (item && item.id) {
              const itemId = String(item.id)
              if (!idSet.has(itemId)) {
                idSet.add(itemId)
                result.push(item)
              }
            }
          })
          
          // 再添加新列表中的项（跳过已存在的）
          newList.forEach(function(item) {
            if (item && item.id) {
              const itemId = String(item.id)
              if (!idSet.has(itemId)) {
                idSet.add(itemId)
                result.push(item)
              }
            }
          })
          
          return result
        }

        // 确保列表已初始化
        if (!Array.isArray(this.favoriteFoodList)) {
          this.favoriteFoodList = []
        }
        if (!Array.isArray(this.favoriteScenicList)) {
          this.favoriteScenicList = []
        }
        if (!Array.isArray(this.favoriteHeritageList)) {
          this.favoriteHeritageList = []
        }
        
        this.favoriteFoodList = mergeAndDeduplicate(this.favoriteFoodList, foodList)
        this.favoriteScenicList = mergeAndDeduplicate(this.favoriteScenicList, scenicList)
        this.favoriteHeritageList = mergeAndDeduplicate(this.favoriteHeritageList, heritageList)

        // 统计总收藏数，后续如需可在顶部其它位置展示
        this.stats.heritageFavoriteCount = favorites.length
        
        console.log('[FoodFootprints] splitFavoriteLists 完成 - 美食:', foodList.length, '景点:', scenicList.length, '非遗:', heritageList.length)
      } catch (err) {
        console.error('[FoodFootprints] splitFavoriteLists error:', err)
        console.error('[FoodFootprints] splitFavoriteLists favorites:', favorites)
      }
    },

    mergeCityStats() {
      // 从 visitedList 中重新统计所有数据，确保数据一致性
      const cityFoodCountMap = {}
      const cityScenicCountMap = {}
      const cityHeritageCountMap = {}
      const allCityNames = new Set()

      this.visitedList.forEach(item => {
        if (!item.city) return
        
        allCityNames.add(item.city)
        
        if (item.type === 'food') {
          if (!cityFoodCountMap[item.city]) {
            cityFoodCountMap[item.city] = 0
          }
          cityFoodCountMap[item.city] += 1
        } else if (item.type === 'scenic') {
          if (!cityScenicCountMap[item.city]) {
            cityScenicCountMap[item.city] = 0
          }
          cityScenicCountMap[item.city] += 1
        } else if (item.type === 'heritage') {
          if (!cityHeritageCountMap[item.city]) {
            cityHeritageCountMap[item.city] = 0
          }
          cityHeritageCountMap[item.city] += 1
        }
      })

      const statsList = []
      allCityNames.forEach((cityName) => {
        const foodCount = cityFoodCountMap[cityName] || 0
        const scenicCount = cityScenicCountMap[cityName] || 0
        const heritageCount = cityHeritageCountMap[cityName] || 0
        const config = this.findCityConfigByName(cityName)

        statsList.push({
          cityId: config ? config.id : '',
          cityName,
          tagline: config ? config.tagline : '',
          foodCount,
          scenicCount,
          heritageCount,
          totalCount: foodCount + scenicCount + heritageCount
        })
      })

      statsList.sort((a, b) => {
        if (b.totalCount !== a.totalCount) {
          return b.totalCount - a.totalCount
        }
        return a.cityName.localeCompare(b.cityName)
      })

      this.cityStats = statsList
      this.stats.citiesCount = statsList.length
    },

    mergeVisitedList() {
      if (!Array.isArray(this.visitedList)) {
        this.visitedList = []
        return
      }

      // 去重：使用唯一标识符去重
      const seenKeys = new Set()
      const deduplicatedList = []
      
      this.visitedList.forEach(item => {
        if (!item) return
        
        // 生成唯一标识符：优先使用 poiId，其次使用 id，最后使用 uid
        let uniqueKey = ''
        if (item.poiId) {
          // 有 poiId 的记录（来自 POI 详情页），优先使用 poiId
          uniqueKey = `${item.type}-poi-${item.poiId}`
        } else if (item.id) {
          // 有 id 的记录（来自非遗记录）
          uniqueKey = `${item.type}-id-${item.id}`
        } else {
          // 使用 uid 作为唯一标识
          uniqueKey = item.uid || `${item.type}-${item.title || ''}`
        }
        
        // 如果已经存在，跳过（保留第一个出现的记录）
        if (!seenKeys.has(uniqueKey)) {
          seenKeys.add(uniqueKey)
          deduplicatedList.push(item)
        } else {
          // 如果遇到重复，记录日志以便调试
          console.log('[FoodFootprints] 发现重复记录，已跳过:', uniqueKey, item.title)
        }
      })

      // 排序：按日期降序
      const sorted = deduplicatedList.sort((a, b) => {
        const timeA = a.date || ''
        const timeB = b.date || ''
        return timeA < timeB ? 1 : timeA > timeB ? -1 : 0
      })
      
      this.visitedList = sorted

      // 从最终的 visitedList 中统计顶部数据，确保数据一致性
      this.stats.visitedFoodCount = this.visitedList.filter(item => item.type === 'food').length
      this.stats.scenicExperiencedCount = this.visitedList.filter(item => item.type === 'scenic').length
      this.stats.heritageExperiencedCount = this.visitedList.filter(item => item.type === 'heritage').length
    },

    updateUserDataCache() {
      if (!this.privacyAgree) {
        return
      }
      try {
        uni.setStorageSync('userData', {
          visitedCount: this.stats.visitedFoodCount,
          citiesCount: this.stats.citiesCount
        })
      } catch (e) {
        console.warn('[FoodFootprints] updateUserDataCache failed:', e)
      }
    },

    extractCityNameFromCheckin(item) {
      const explicitCity = (item.city || '').trim()
      if (explicitCity) {
        return this.normalizeCityName(explicitCity)
      }

      const locationText =
        (item.locationName || item.location || '').trim()
      if (!locationText) {
        return ''
      }

      const knownName = CITY_CONFIG.map((c) => c.name).find((name) =>
        locationText.indexOf(name) !== -1
      )
      if (knownName) {
        return knownName
      }

      const cityIndex = locationText.indexOf('市')
      if (cityIndex > 0 && cityIndex <= 4) {
        return locationText.slice(0, cityIndex)
      }

      return ''
    },

    extractCityNameFromHeritage(item) {
      const explicitCity = (item.city || item.cityName || '').trim()
      if (explicitCity) {
        return this.normalizeCityName(explicitCity)
      }

      const regionText =
        (item.region || item.area || item.address || '').trim()
      if (!regionText) {
        return ''
      }

      const knownName = CITY_CONFIG.map((c) => c.name).find((name) =>
        regionText.indexOf(name) !== -1
      )
      if (knownName) {
        return knownName
      }

      const cityIndex = regionText.indexOf('市')
      if (cityIndex > 0 && cityIndex <= 4) {
        return regionText.slice(0, cityIndex)
      }

      return ''
    },

    normalizeCityName(name) {
      if (!name) {
        return ''
      }
      const trimmed = String(name).trim()
      if (!trimmed) {
        return ''
      }
      if (CITY_NAME_TO_ID[trimmed]) {
        const config = this.findCityConfigById(CITY_NAME_TO_ID[trimmed])
        return config ? config.name : trimmed.replace(/市$/, '')
      }
      return trimmed.replace(/市$/, '')
    },

    resolveFavoriteType(categoryText) {
      const text = String(categoryText || '').trim()
      if (!text) {
        return 'heritage'
      }

      if (text.includes('饮食') || text.includes('美食') || text.includes('食品')) {
        return 'food'
      }

      if (text.includes('民俗') || text.includes('节庆') || text.includes('习俗')) {
        return 'scenic'
      }

      return 'heritage'
    },

    findCityConfigByName(name) {
      if (!name) {
        return ''
      }
      const trimmed = String(name).trim()
      if (!trimmed) {
        return ''
      }
      if (CITY_NAME_TO_ID[trimmed]) {
        const config = this.findCityConfigById(CITY_NAME_TO_ID[trimmed])
        return config ? config.name : trimmed.replace(/市$/, '')
      }
      return trimmed.replace(/市$/, '')
    },

    findCityConfigByName(name) {
      const clean = this.normalizeCityName(name)
      return CITY_CONFIG.find((c) => c.name === clean) || null
    },

    findCityConfigById(id) {
      return CITY_CONFIG.find((c) => c.id === id) || null
    },

    truncateText(text, maxLength) {
      const str = String(text || '')
      if (str.length <= maxLength) {
        return str
      }
      return `${str.slice(0, maxLength)}...`
    },

    formatDate(value) {
      if (!value) {
        return ''
      }
      try {
        if (typeof value === 'string') {
          const match = value.match(/^(\d{4}-\d{2}-\d{2})/)
          if (match) {
            return match[1]
          }
        }
        const date = new Date(value)
        if (Number.isNaN(date.getTime())) {
          return String(value)
        }
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
      } catch (e) {
        return String(value)
      }
    },

    switchMainTab(tab) {
      if (this.activeMainTab === tab) {
        return
      }
      this.activeMainTab = tab
      
      // 切换到收藏标签时，如果数据未加载则加载
      if (tab === 'favorite' && this.favoriteFoodList.length === 0 && this.favoriteScenicList.length === 0 && this.favoriteHeritageList.length === 0) {
        this.loadFavoriteFootprints()
      }
    },

    switchCategoryTab(tab) {
      if (this.activeCategoryTab === tab) {
        return
      }
      this.activeCategoryTab = tab
    },

    switchFavoriteTab(tab) {
      if (this.activeFavoriteTab === tab) {
        return
      }
      this.activeFavoriteTab = tab
    },

    goToMapFlavors() {
      uni.navigateTo({
        url: '/pages/index/Map-Flavors'
      })
    },

    goToCheckinRecords() {
      uni.navigateTo({
        url: '/pages/mine/checkin-records'
      })
    },

    goToHeritageRecords() {
      uni.navigateTo({
        url: '/pages/mine/heritage-records'
      })
    },

    openPoiDetail(item) {
      if (!item || !item.poiId) {
        return
      }
      const poiType = item.poiType || item.type || 'food'
      let url = ''
      if (poiType === 'food') {
        url = `/pages/index/FoodPoiDetail?id=${item.poiId}`
      } else if (poiType === 'scenic') {
        url = `/pages/index/ScenicPoiDetail?id=${item.poiId}`
      } else if (poiType === 'heritage') {
        url = `/pages/index/HeritagePoiDetail?id=${item.poiId}`
      }
      if (url) {
        uni.navigateTo({ url })
      }
    },

    openPoiDetailFromFavorite(item) {
      if (!item || !item.id) {
        return
      }
      const poiType = item.poiType || 'food'
      let url = ''
      if (poiType === 'food') {
        url = `/pages/index/FoodPoiDetail?id=${item.id}`
      } else if (poiType === 'scenic') {
        url = `/pages/index/ScenicPoiDetail?id=${item.id}`
      } else if (poiType === 'heritage') {
        url = `/pages/index/HeritagePoiDetail?id=${item.id}`
      }
      if (url) {
        uni.navigateTo({ url })
      }
    },

    openHeritageDetail(item) {
      const name = item && (item.name || item.title)
      if (!name) {
        uni.showToast({ title: '地点信息不完整', icon: 'none' })
        return
      }
      const encoded = encodeURIComponent(name)
      const favoriteType = item && item.favoriteType
      const category =
        favoriteType && ['food', 'scenic', 'heritage'].includes(favoriteType)
          ? favoriteType
          : 'heritage'
      uni.navigateTo({
        url: `/pages/index/Map-Flavors?keyword=${encoded}&category=${category}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.footprints-page {
  min-height: 100vh;
  padding: 16rpx 20rpx 40rpx;
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
  box-sizing: border-box;
}

.header-card {
  background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
  border-radius: 24rpx;
  padding: 24rpx 26rpx 20rpx;
  box-shadow: 0 10rpx 28rpx rgba(255, 152, 0, 0.4);
  border: 3rpx solid #fdd28a;
  margin-bottom: 20rpx;
  position: relative;
  overflow: hidden;
}

.header-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 200rpx;
  height: 200rpx;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
}

.header-title-row {
  margin-bottom: 14rpx;
}

.header-title {
  display: block;
  font-size: 34rpx;
  font-weight: 700;
  color: #ffffff;
}

.header-subtitle {
  display: block;
  margin-top: 6rpx;
  font-size: 24rpx;
  color: #fff9e6;
}

.header-stats-row {
  margin-top: 4rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}

.stat-pill {
  flex: 1;
  margin-right: 10rpx;
  padding: 12rpx 14rpx;
  border-radius: 18rpx;
  background: rgba(255, 255, 255, 0.2);
  border: 2rpx solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10rpx);
  transition: all 0.3s ease;
}

.stat-pill:last-child {
  margin-right: 0;
}

.stat-pill:active {
  transform: scale(0.95);
  background: rgba(255, 255, 255, 0.25);
}

.stat-pill--soft {
  background: #fff5e6;
  border-color: #f1dec3;
}

.stat-number {
  display: block;
  font-size: 30rpx;
  font-weight: 700;
  color: #ffffff;
}

.stat-pill--soft .stat-number {
  color: #5a2c12;
}

.stat-label {
  display: block;
  margin-top: 4rpx;
  font-size: 22rpx;
  color: #fffbe7;
}

.stat-pill--soft .stat-label {
  color: #8c5c2a;
}

.privacy-hint {
  margin-top: 10rpx;
  padding: 8rpx 10rpx;
  border-radius: 12rpx;
  background: rgba(255, 255, 255, 0.18);
}

.privacy-hint text {
  font-size: 22rpx;
  color: #fff9e6;
}

.main-tabs {
  margin-top: 14rpx;
  margin-bottom: 10rpx;
  display: flex;
  background: #fff5e6;
  border-radius: 999rpx;
  padding: 4rpx;
  border: 3rpx solid #e8d4b8;
}

.main-tab {
  flex: 1;
  text-align: center;
  padding: 10rpx 0;
  font-size: 26rpx;
  color: #8c5c2a;
  border-radius: 999rpx;
}

.main-tab--active {
  background: #ffb74d;
  color: #5a2c12;
  font-weight: 700;
  box-shadow: 0 4rpx 10rpx rgba(255, 152, 0, 0.3);
}

.loading-block,
.error-block {
  padding: 80rpx 20rpx;
  text-align: center;
}

.error-text {
  font-size: 26rpx;
  color: #b71c1c;
}

.visited-section,
.favorite-section {
  margin-top: 8rpx;
}

.section-header {
  margin-top: 6rpx;
  margin-bottom: 10rpx;
  padding: 0 4rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title-group {
  flex: 1;
}

.section-title-with-icon {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.section-title-icon {
  width: 36rpx;
  height: 36rpx;
  flex-shrink: 0;
}

.section-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
}

.section-subtitle {
  display: block;
  margin-top: 4rpx;
  font-size: 22rpx;
  color: #8c5c2a;
}

.section-link {
  font-size: 24rpx;
  color: #c47a2a;
}

.city-chips-scroll {
  margin-top: 4rpx;
  padding: 6rpx 4rpx 0 0;
  white-space: nowrap;
}

.city-chip {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  min-width: 280rpx;
  max-width: 340rpx;
  padding: 18rpx 20rpx;
  margin-right: 14rpx;
  background: linear-gradient(135deg, #fff5e6 0%, #fffef7 100%);
  border-radius: 24rpx;
  border: 3rpx solid #e8d4b8;
  box-shadow: 0 6rpx 16rpx rgba(188, 134, 67, 0.12);
  position: relative;
  overflow: hidden;
}

.city-chip::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6rpx;
  background: linear-gradient(90deg, #ffb74d 0%, #ff8a65 100%);
}

.chip-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8rpx;
  flex-wrap: wrap;
}

.chip-icon {
  font-size: 28rpx;
  margin-right: 6rpx;
}

.chip-name {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  flex: 1;
}

.chip-badge-wrapper {
  display: flex;
  gap: 6rpx;
  margin-top: 4rpx;
  width: 100%;
}

.chip-badge {
  font-size: 20rpx;
  padding: 2rpx 8rpx;
  border-radius: 8rpx;
  font-weight: 600;
}

.chip-badge--food {
  background: #ffecc7;
  color: #7b2f00;
}

.chip-badge--scenic {
  background: #d3e5ff;
  color: #1a5490;
}

.chip-badge--heritage {
  background: #e0d5ff;
  color: #4b2f7b;
}

.chip-tagline {
  font-size: 22rpx;
  color: #8c5c2a;
  line-height: 1.5;
  margin-bottom: 6rpx;
}

.chip-stats {
  display: flex;
  align-items: center;
  gap: 6rpx;
  margin-top: 4rpx;
  padding-top: 8rpx;
  border-top: 1rpx dashed #e8d4b8;
}

.chip-stat-text {
  font-size: 20rpx;
  color: #8c5c2a;
}

.chip-stat-divider {
  font-size: 20rpx;
  color: #cfa86a;
}

.city-empty {
  padding: 60rpx 20rpx 30rpx;
  text-align: center;
  background: #fff5e6;
  border-radius: 24rpx;
  border: 2rpx dashed #e8d4b8;
}

.empty-icon {
  font-size: 64rpx;
  margin-bottom: 16rpx;
  display: block;
}

.empty-text {
  display: block;
  font-size: 28rpx;
  color: #8c5c2a;
  margin-bottom: 10rpx;
  font-weight: 600;
}

.empty-hint {
  display: block;
  font-size: 24rpx;
  color: #b79a78;
  line-height: 1.6;
}

.sub-tabs {
  margin-top: 6rpx;
  display: flex;
  background: #fff5e6;
  border-radius: 16rpx;
  padding: 4rpx;
  border: 3rpx solid #e8d4b8;
}

.sub-tab {
  flex: 1;
  text-align: center;
  padding: 8rpx 0;
  font-size: 24rpx;
  color: #8c5c2a;
  border-radius: 12rpx;
}

.sub-tab--active {
  background: #ffe9b0;
  color: #5a2c12;
  font-weight: 700;
}

.records-empty {
  padding: 50rpx 10rpx 10rpx;
  text-align: center;
}

.empty-actions {
  margin-top: 6rpx;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-link {
  font-size: 24rpx;
  color: #c47a2a;
}

.empty-divider {
  margin: 0 8rpx;
  font-size: 24rpx;
  color: #cfa86a;
}

.records-list {
  margin-top: 10rpx;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.record-card {
  background: linear-gradient(135deg, #fff5e6 0%, #fffef7 100%);
  border-radius: 20rpx;
  border: 3rpx solid #e8d4b8;
  box-shadow: 0 4rpx 12rpx rgba(188, 134, 67, 0.1);
  padding: 16rpx 18rpx 14rpx;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.record-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6rpx;
  background: linear-gradient(180deg, #ffb74d 0%, #ff8a65 100%);
}

.record-card:active {
  transform: scale(0.98);
  box-shadow: 0 2rpx 8rpx rgba(188, 134, 67, 0.15);
}

.visited-card {
  display: flex;
  flex-direction: row;
  padding: 0;
  overflow: hidden;
}

.visited-card::before {
  display: none;
}

.record-image-wrapper {
  width: 200rpx;
  height: 200rpx;
  flex-shrink: 0;
  overflow: hidden;
  background: #f5f5f5;
}

.record-image {
  width: 100%;
  height: 100%;
  display: block;
}

.record-content {
  flex: 1;
  padding: 16rpx 18rpx 14rpx;
  display: flex;
  flex-direction: column;
  position: relative;
}

.record-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6rpx;
  background: linear-gradient(180deg, #ffb74d 0%, #ff8a65 100%);
}

.favorite-card {
  border-color: #ffd98a;
}

.favorite-card::before {
  background: linear-gradient(180deg, #ffd98a 0%, #ffcc33 100%);
}

.record-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rpx;
}

.record-tag {
  align-self: flex-start;
  padding: 4rpx 14rpx;
  border-radius: 999rpx;
  font-size: 20rpx;
  font-weight: 600;
}

.record-tag--food {
  background: linear-gradient(90deg, #ffecc7 0%, #ffd98a 100%);
  color: #7b2f00;
}

.record-tag--scenic {
  background: linear-gradient(90deg, #d3e5ff 0%, #b3d5ff 100%);
  color: #1a5490;
}

.record-tag--heritage {
  background: linear-gradient(90deg, #e0d5ff 0%, #d3c3ff 100%);
  color: #4b2f7b;
}

.record-tag--favorite {
  background: linear-gradient(90deg, #ffd98a 0%, #ffcc33 100%);
  color: #5a2c12;
}

.record-date {
  font-size: 22rpx;
  color: #b79a78;
}

.record-main {
  margin-bottom: 10rpx;
}

.record-title {
  display: block;
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  line-height: 1.4;
}

.record-subtitle {
  display: block;
  margin-top: 6rpx;
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
}

.record-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8rpx;
  padding-top: 8rpx;
  border-top: 1rpx dashed #e8d4b8;
}

.meta-left {
  flex-direction: row;
  display: flex;
  align-items: center;
}

.meta-city {
  font-size: 22rpx;
  color: #c47a2a;
  font-weight: 500;
}

.meta-city--unknown {
  color: #a0a0a0;
}

.meta-right {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.meta-date {
  font-size: 22rpx;
  color: #8c5c2a;
}

.meta-badge {
  font-size: 20rpx;
  padding: 2rpx 10rpx;
  border-radius: 8rpx;
  background: #ffecc7;
  color: #7b2f00;
  font-weight: 600;
}

.meta-badge--favorite {
  background: #ffd98a;
  color: #5a2c12;
}

.favorite-stats-row {
  margin-top: 6rpx;
  margin-bottom: 10rpx;
  display: flex;
  justify-content: flex-start;
  gap: 10rpx;
}

.stat-pill--active {
  background: #ffe9b0;
  border-color: #f1c05b;
}

.favorite-tip {
  margin-top: 16rpx;
  padding: 10rpx 12rpx;
  border-radius: 16rpx;
  background: #fff8eb;
  border: 2rpx dashed #e0c89a;
}

.favorite-tip text {
  font-size: 22rpx;
  color: #8c5c2a;
}
</style>

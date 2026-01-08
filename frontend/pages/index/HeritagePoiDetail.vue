<template>
  <view class="heritage-poi-page">
    <!-- 顶部：体验中心图片（单张，大图，无搜索/收藏图标） -->
    <view class="hero-wrap">
      <image
        class="hero-img"
        :src="heroImage"
        mode="aspectFill"
      />
    </view>

    <!-- 关键信息卡片：名称 + 评分 + 人均 + 类别 -->
    <view class="info-card">
      <view class="name-row">
        <text class="name-text">{{ poi.name || '非遗体验中心' }}</text>
      </view>

      <view class="score-row">
        <view class="score-left">
          <text v-if="displayScore" class="score-main">{{ displayScore }}</text>
          <text v-if="displayScore" class="score-label">评分</text>
        </view>
        <view class="score-right">
          <text class="avg-price" v-if="displayAvgPrice">{{ displayAvgPrice }}</text>
        </view>
      </view>

      <!-- 类别标签和设施标签放在一行 -->
      <view class="category-tags-row" v-if="poi.category || (facilityTags && facilityTags.length)">
        <text v-if="poi.category" class="category">{{ poi.category }}</text>
        <text
          v-for="tag in facilityTags"
          :key="tag"
          class="facility-pill"
        >{{ tag }}</text>
      </view>

      <!-- 基地位置 -->
      <view
        v-if="poi.address || poi.fullAddress"
        class="location-row"
      >
        <view class="location-left">
          <view class="location-line">
            <text class="location-label">基地位置</text>
            <text class="location-value">{{ poi.address || poi.fullAddress }}</text>
          </view>
        </view>
        <view
          v-if="poi.latitude && poi.longitude"
          class="location-icon-btn"
          @tap="navigateToPoi"
        >
          <image
            class="icon-map"
            src="/static/assets/地图.png"
            mode="aspectFill"
          />
          <text class="icon-label">导航</text>
        </view>
      </view>
    </view>


    <!-- 体验基地介绍模块：展示 siteName + basicIntro -->
    <view
      v-if="heritageDetail.siteName || heritageDetail.basicIntro"
      class="section-card"
    >
      <view class="section-header">
        <text class="section-title">体验基地介绍</text>
      </view>
      <view class="section-body">
        <view
          v-if="heritageDetail.siteName"
          class="section-subtitle-block"
        >
          <text class="section-subtitle-label">基地名称</text>
        </view>
        <text
          v-if="heritageDetail.siteName"
          class="section-subtitle-value section-subtitle-value--block"
        >{{ heritageDetail.siteName }}</text>
        <view
          v-if="heritageDetail.basicIntro"
          class="heritage-intro-block"
        >
          <text class="section-subtitle-small">介绍基地</text>
          <text class="section-text">{{ heritageDetail.basicIntro }}</text>
        </view>
      </view>
    </view>




    <!-- 非遗项目介绍模块：历史渊源 + 内容介绍 -->
    <view
      v-if="heritageDetail.historicalOrigin || heritageDetail.contentIntroduction || introText"
      class="section-card"
    >
      <view class="section-header">
        <text class="section-title">非遗项目介绍</text>
      </view>
      <view class="section-body">
        <view
          v-if="heritageDetail.historicalOrigin"
          class="heritage-intro-block"
        >
          <text class="section-subtitle-small">历史渊源</text>
          <text class="section-text">{{ heritageDetail.historicalOrigin }}</text>
        </view>
        <view
          v-if="heritageDetail.contentIntroduction || introText"
          class="heritage-intro-block"
        >
          <text class="section-subtitle-small">内容介绍</text>
          <text class="section-text">{{ heritageDetail.contentIntroduction || introText }}</text>
        </view>
      </view>
    </view>




    <!-- 营业信息模块：营业中 + 时间 + 设施标签（仅在有数据时展示） -->

    <view v-if="hasBusinessInfo" class="section-card">
      <view class="section-header">
        <text class="section-title">营业信息</text>
      </view>
      <view class="section-body business-body">
        <view
          class="business-status-line"
          v-if="hasBusinessStatus || businessTimeText"
        >
          <text
            v-if="hasBusinessStatus"
            :class="['business-status', { 'business-status--open': isOpen, 'business-status--closed': !isOpen }]"
          >
            {{ isOpen ? '营业中' : '休息中' }}
          </text>
          <text class="business-time" v-if="businessTimeText">{{ businessTimeText }}</text>
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

        <!-- 非遗体验中心信息 -->
        <view class="food-info">
          <text class="food-info-name">{{ (poi && poi.name) || '' }}</text>
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
            placeholder="请输入备注，如体验时段、同行人等"
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




    <!-- 底部操作条：收藏 / 已体验 / 分享 + 加入清单 -->
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
          open-type="share"
          @tap.stop="sharePoi"
        >
          <image
            class="bottom-icon-img"
            src="/static/assets/分享2.png"
            mode="aspectFit"
          />
          <text class="bottom-label">分享</text>
        </button>
        <!-- #endif -->
        <!-- #ifndef MP-WEIXIN -->
        <view
          class="bottom-icon-item"
          @tap="sharePoi"
        >
          <image
            class="bottom-icon-img"
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



    <!-- 内嵌导航 web-view（点击导航后展示） -->
    <view v-if="navigationUrl" class="nav-webview-wrap">
      <web-view :src="navigationUrl" class="nav-webview" />
    </view>
  </view>
</template>

<script>
const { getPoiDetail, updatePoiFavorite, updatePoiExperience } = require('../../api/map.js')

// 腾讯位置服务路线规划插件配置：使用你在腾讯位置服务后台申请的「微信小程序」key
const AMAP_ROUTE_PLAN_KEY = 'PL2BZ-2QP6Q-OG45Q-BUYY4-QMEPK-4NB55'
const AMAP_ROUTE_PLAN_REFERER = '秦食匠艺'

// 当前页面对应的 POI 类型：3=非遗
const POI_TYPE = 3

export default {
  name: 'HeritagePoiDetail',
  data() {
    return {
      poi: {
        id: '',
        name: '',
        cover: '',
        avgPrice: '',
        category: '',
        address: '',
        fullAddress: '',
        distance: '',
        latitude: null,
        longitude: null,
        score: '',
        phone: '',
        businessStatus: '',
        openStatus: ''
      },
      userLat: null,
      userLng: null,
      tags: [],
      facilityTags: [],
      businessTimeText: '',
      comments: [],
      heritageDetail: {
        category: '',
        historicalOrigin: '',
        contentIntroduction: '',
        siteName: '',
        basicIntro: '',
        videoUrl: ''
      },
      introText: '',
      tipsText: '',

      isFavorited: false,

      isExperienced: false,
      navigationUrl: '',

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
      return this.poi.cover || '/static/assets/热门推荐.png'
    },
    displayScore() {
      if (!this.poi || !this.poi.score) {
        return ''
      }
      const num = Number(this.poi.score)
      if (Number.isNaN(num) || num <= 0) {
        return ''
      }
      return num.toFixed(1).replace(/\.0$/, '')
    },
    displayAvgPrice() {
      if (
        !this.poi ||
        this.poi.avgPrice === undefined ||
        this.poi.avgPrice === null ||
        this.poi.avgPrice === ''
      ) {
        return ''
      }
      const num = Number(this.poi.avgPrice)
      if (Number.isNaN(num) || num <= 0) {
        return ''
      }
      return `¥${Math.round(num)}/人`
    },
    distanceText() {
      if (!this.poi || !this.poi.distance) {
        return ''
      }
      return this.formatDistance(this.poi.distance)
    },
    isOpen() {
      let status = null
      if (this.poi) {
        if (this.poi.businessStatus !== undefined && this.poi.businessStatus !== null) {
          status = this.poi.businessStatus
        } else if (this.poi.openStatus !== undefined && this.poi.openStatus !== null) {
          status = this.poi.openStatus
        }
      }
      if (status === '' || status === undefined || status === null) {
        return true
      }
      if (typeof status === 'number') {
        return status === 1
      }
      const text = String(status).toLowerCase()
      if (text === '1' || text === 'open' || text === '营业中') {
        return true
      }
      return false
    },
    hasBusinessStatus() {
      if (!this.poi) {
        return false
      }
      if (
        this.poi.businessStatus !== undefined &&
        this.poi.businessStatus !== null &&
        this.poi.businessStatus !== ''
      ) {
        return true
      }
      if (
        this.poi.openStatus !== undefined &&
        this.poi.openStatus !== null &&
        this.poi.openStatus !== ''
      ) {
        return true
      }
      return false
    },
    hasBusinessInfo() {
      const hasStatus = this.hasBusinessStatus
      const hasTime = !!this.businessTimeText
      const hasFacilities = Array.isArray(this.facilityTags) && this.facilityTags.length > 0
      return hasStatus || hasTime || hasFacilities
    }
  },

  onLoad(options) {
    const opt = options || {}
    this.poi.id = opt.id || ''
    this.poi.name = opt.name || ''
    this.poi.cover = opt.cover || ''
    this.poi.avgPrice = opt.avgPrice || ''
    this.poi.category = opt.category || '非遗体验'
    this.poi.address = opt.address || ''
    this.poi.distance = opt.distance || ''
    this.poi.latitude = opt.latitude ? Number(opt.latitude) : null
    this.poi.longitude = opt.longitude ? Number(opt.longitude) : null
    this.poi.score = opt.score || ''
    this.poi.phone = opt.phone || ''
    this.poi.businessStatus = opt.businessStatus || ''
    this.poi.openStatus = opt.openStatus || ''

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

    // 设施标签（可选），支持 JSON 字符串或逗号分隔
    if (opt.facilityTags) {
      try {
        const parsed = JSON.parse(decodeURIComponent(opt.facilityTags))
        if (Array.isArray(parsed)) {
          this.facilityTags = parsed
        }
      } catch (e) {
        this.facilityTags = String(opt.facilityTags)
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      }
    }

    if (opt.businessTime) {
      this.businessTimeText = decodeURIComponent(opt.businessTime)
    }

    if (this.poi.name) {
      uni.setNavigationBarTitle({ title: this.poi.name })
    }

    this.initUserLocation()
    this.loadLocalState()
  },

  methods: {
    initUserLocation() {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          this.userLat = res.latitude
          this.userLng = res.longitude
          if (this.fetchPoiDetail) {
            this.fetchPoiDetail()
          }
        },
        fail: () => {
          if (this.fetchPoiDetail) {
            this.fetchPoiDetail()
          }
        }
      })
    },
    async fetchPoiDetail() {
      if (!this.poi || !this.poi.id || !getPoiDetail) {
        return
      }
      try {
        const res = await getPoiDetail({
          id: this.poi.id,
          type: 3,
          userLng: this.userLng,
          userLat: this.userLat
        })
        if (!res || res.success === false) {
          return
        }
        let data = res.data || res
        if (!data) {
          return
        }

        // 兼容接口返回数组或对象两种形式
        let detail = data
        let poi = data.poi || data
        if (Array.isArray(poi)) {
          poi = poi[0] || null
        }
        if (!poi) {
          return
        }
        if (Array.isArray(detail)) {
          detail = {}
        }

        // 非遗表字段：detail.heritage（可能是对象或数组）
        let heritage = null
        if (detail && typeof detail === 'object' && detail.heritage) {
          heritage = detail.heritage
          if (Array.isArray(heritage)) {
            heritage = heritage[0] || null
          }
        }

        const pick = (primary, ...fallbacks) => {
          if (primary !== undefined && primary !== null && primary !== '') {
            return primary
          }
          for (let i = 0; i < fallbacks.length; i += 1) {
            const v = fallbacks[i]
            if (v !== undefined && v !== null && v !== '') {
              return v
            }
          }
          return undefined
        }

        // 兼容新的“非遗地点”字段：site_name / full_address / site_type
        const idFromAll = pick(poi.id, heritage && heritage.id)
        if (idFromAll != null) this.poi.id = idFromAll

        const siteName = pick(
          poi.name || poi.site_name,
          heritage && (heritage.name || heritage.site_name)
        )
        if (siteName) this.poi.name = siteName

        const coverFromAll = pick(
          poi.imageUrl || poi.cover || poi.image || poi.thumbnail,
          heritage && (heritage.imageUrl || heritage.cover || heritage.image || heritage.thumbnail)
        )
        if (coverFromAll) {
          this.poi.cover = coverFromAll
        }

        const avgFromAll = pick(
          poi.avgPrice,
          poi.averagePrice,
          poi.price,
          heritage && heritage.avgPrice,
          heritage && heritage.averagePrice,
          heritage && heritage.price
        )
        if (avgFromAll != null) {
          this.poi.avgPrice = avgFromAll
        }

        // site_type：ORIGIN / BASE / MUSEUM 等，映射成中文标签；没有时兼容旧的 category/type
        const siteType = pick(poi.site_type, heritage && heritage.site_type)
        if (siteType) {
          const typeTextMap = {
            ORIGIN: '发源地',
            BASE: '体验基地',
            MUSEUM: '展馆'
          }
          const key = String(siteType).toUpperCase()
          this.poi.category = typeTextMap[key] || this.poi.category || '非遗体验地'
        } else {
          const categoryFromAll = pick(
            poi.categoryName || poi.category || poi.type,
            heritage && (heritage.categoryName || heritage.category || heritage.type)
          )
          if (categoryFromAll) {
            this.poi.category = categoryFromAll
          }
        }

        const addressFromAll = pick(
          poi.address || poi.fullAddress || poi.full_address,
          heritage && (heritage.address || heritage.fullAddress || heritage.full_address)
        )
        if (addressFromAll) {
          this.poi.address = addressFromAll
        }
        
        // 单独保存fullAddress用于显示
        if (poi.fullAddress || poi.full_address) {
          this.poi.fullAddress = poi.fullAddress || poi.full_address
        }

        // 体验基地 & 非遗项目详情字段
        if (heritage) {
          if (heritage.category) {
            this.heritageDetail.category = heritage.category
          }
          if (heritage.historicalOrigin) {
            this.heritageDetail.historicalOrigin = heritage.historicalOrigin
          }
          if (heritage.contentIntroduction) {
            this.heritageDetail.contentIntroduction = heritage.contentIntroduction
          }
          if (heritage.videoUrl) {
            this.heritageDetail.videoUrl = heritage.videoUrl
          }
        }

        if (poi.siteName || poi.site_name) {
          this.heritageDetail.siteName = poi.siteName || poi.site_name
        }
        if (poi.basicIntro) {
          this.heritageDetail.basicIntro = poi.basicIntro
        }

        if (typeof detail.intro === 'string') {
          this.introText = detail.intro
        }

        if (typeof detail.tips === 'string') {
          this.tipsText = detail.tips
        }

        const distanceFromAll = pick(

          poi.distance,
          heritage && heritage.distance
        )
        if (distanceFromAll != null) {
          this.poi.distance = distanceFromAll
        }

        const latFromAll = pick(
          poi.latitude,
          heritage && heritage.latitude
        )
        if (latFromAll != null) {
          this.poi.latitude = latFromAll
        }

        const lngFromAll = pick(
          poi.longitude,
          heritage && heritage.longitude
        )
        if (lngFromAll != null) {
          this.poi.longitude = lngFromAll
        }

        const scoreFromAll = pick(
          poi.score,
          poi.rating,
          heritage && heritage.score,
          heritage && heritage.rating
        )
        if (scoreFromAll != null) {
          this.poi.score = scoreFromAll
        }

        const phoneFromAll = pick(
          poi.tel || poi.phone,
          heritage && (heritage.tel || heritage.phone)
        )
        if (phoneFromAll) {
          this.poi.phone = phoneFromAll
        }

        const businessStatusFromAll = pick(
          poi.businessStatus,
          heritage && heritage.businessStatus
        )
        if (businessStatusFromAll !== undefined) {
          this.poi.businessStatus = businessStatusFromAll
        }

        const openStatusFromAll = pick(
          poi.openStatus,
          heritage && heritage.openStatus
        )
        if (openStatusFromAll !== undefined) {
          this.poi.openStatus = openStatusFromAll
        }

        // 标签：兼容数组或字符串形式，支持 heritage.tags / heritage.tag
        let tagsSource = null
        if (Array.isArray(poi.tags)) {
          tagsSource = poi.tags
        } else if (heritage && Array.isArray(heritage.tags)) {
          tagsSource = heritage.tags
        }
        if (tagsSource) {
          this.tags = tagsSource
        } else {
          const rawTags = pick(
            poi.tags || poi.tag,
            heritage && (heritage.tags || heritage.tag)
          )
          if (rawTags) {
            const list = String(rawTags)
              .split(/[，,、\/:;]/)
              .map((s) => s.trim())
              .filter(Boolean)
            if (list.length) {
              this.tags = list
            }
          }
        }

        if (Array.isArray(detail.facilityTags)) {
          this.facilityTags = detail.facilityTags
        } else if (Array.isArray(poi.facilityTags)) {
          this.facilityTags = poi.facilityTags
        } else if (heritage && Array.isArray(heritage.facilityTags)) {
          this.facilityTags = heritage.facilityTags
        }

        const businessTimeFromAll = pick(
          detail.businessTime,
          poi.businessTime,
          poi.openingHours,
          heritage && (heritage.businessTime || heritage.openingHours)
        )
        if (businessTimeFromAll) {
          this.businessTimeText = businessTimeFromAll
        }

        if (Array.isArray(detail.comments) && detail.comments.length) {
          this.comments = detail.comments
        }

        if (this.poi.name) {
          uni.setNavigationBarTitle({ title: this.poi.name })
        }
      } catch (e) {
        console.warn('[HeritagePoiDetail] fetchPoiDetail fail:', e)
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

    navigateToPoi() {
      if (!this.poi.latitude || !this.poi.longitude) {
        uni.showToast({ title: '暂无位置信息', icon: 'none' })
        return
      }

      const name = this.poi.name || '目的地'
      const address = this.poi.address || ''

      // 优先使用腾讯位置服务路线规划插件
      if (typeof wx !== 'undefined' && wx.navigateTo && AMAP_ROUTE_PLAN_KEY) {
        try {
          const endPoint = JSON.stringify({
            name,
            latitude: Number(this.poi.latitude),
            longitude: Number(this.poi.longitude)
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
              console.warn('[HeritagePoiDetail] 路线规划插件失败，使用微信原生地图:', err)
              uni.openLocation({
                latitude: Number(this.poi.latitude),
                longitude: Number(this.poi.longitude),
                name,
                address,
                scale: 18
              })
            }
          })
          return
        } catch (e) {
          // 插件失败时回退
          console.warn('[HeritagePoiDetail] 路线规划插件异常，使用微信原生地图:', e)
        }
      }

      // 回退：打开微信原生地图
      uni.openLocation({
        latitude: Number(this.poi.latitude),
        longitude: Number(this.poi.longitude),
        name,
        address,
        scale: 18
      })
    },

    openHeritageVideo() {
      const url = this.heritageDetail && this.heritageDetail.videoUrl
      if (!url) {
        uni.showToast({ title: '暂无视频链接', icon: 'none' })
        return
      }
      try {
        uni.setClipboardData({
          data: String(url),
          success: () => {
            uni.showToast({ title: '视频链接已复制，可在浏览器打开', icon: 'none' })
          }
        })
      } catch (e) {
        uni.showToast({ title: '复制失败，请稍后再试', icon: 'none' })
      }
    },


    callPhone() {

      const raw = this.poi && this.poi.phone
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
    async toggleFavorite() {
      if (!this.poi || !this.poi.id) {
        uni.showToast({ title: '地点信息未就绪', icon: 'none' })
        return
      }
      const current = !!this.isFavorited
      const target = !current
      try {
        const res = await updatePoiFavorite({
          poiId: this.poi.id,
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
        console.warn('[HeritagePoiDetail] toggleFavorite fail:', e)
        uni.showToast({ title: '操作失败，请稍后重试', icon: 'none' })
      }
    },
    async toggleExperienced() {
      if (!this.poi || !this.poi.id) {
        uni.showToast({ title: '地点信息未就绪', icon: 'none' })
        return
      }
      const current = !!this.isExperienced
      const target = !current
      try {
        const res = await updatePoiExperience({
          poiId: this.poi.id,
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
        console.warn('[HeritagePoiDetail] toggleExperienced fail:', e)
        uni.showToast({ title: '操作失败，请稍后重试', icon: 'none' })
      }
    },
    sharePoi() {
      // 微信小程序中，点击分享按钮会自动触发 onShareAppMessage
      // #ifdef MP-WEIXIN
      console.log('[HeritagePoiDetail] 用户点击分享按钮，非遗ID:', this.poi.id, '非遗名称:', this.poi.name)
      // #endif
      
      // #ifndef MP-WEIXIN
      uni.showToast({ title: '请在微信小程序中分享', icon: 'none' })
      // #endif
    },
    
    // 微信小程序分享配置
    onShareAppMessage(options) {
      console.log('[HeritagePoiDetail] onShareAppMessage 被调用', options)
      
      if (!this.poi || !this.poi.id) {
        console.warn('[HeritagePoiDetail] 分享时非遗信息为空')
        return {
          title: '这个非遗好有体验的意义，让我们一起去吧~',
          path: '/pages/index/HeritagePoiDetail'
        }
      }

      // 构建分享路径
      const sharePath = `/pages/index/HeritagePoiDetail?id=${encodeURIComponent(this.poi.id)}`
      
      // 分享标题：使用指定的文案格式
      const heritageName = this.poi.name || '非遗体验中心'
      const shareTitle = `这个${heritageName}好有体验的意义，让我们一起去吧~`
      
      // 分享图片：只有当有真实图片时才设置，避免显示占位符
      const heroImg = this.heroImage || this.poi.cover || ''
      const defaultPlaceholder = '/static/assets/热门推荐.png'
      // 只有当图片存在且不是默认占位图时才设置 imageUrl
      const shareImageUrl = heroImg && heroImg !== defaultPlaceholder && heroImg.trim() !== '' 
        ? heroImg 
        : undefined
      
      console.log('[HeritagePoiDetail] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        poiId: this.poi.id,
        heritageName: heritageName,
        imageUrl: shareImageUrl || '未设置（无图片）'
      })

      // 记录分享行为
      this.recordShareBehavior(shareTitle, sharePath).catch(err => {
        console.error('[HeritagePoiDetail] 记录分享行为失败', err)
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
    
    async recordShareBehavior(title, path) {
      try {
        if (!this.poi.id) return
        const { recordShare } = require('../../api/share.js')
        await recordShare({
          targetId: this.poi.id,
          targetType: 'HERITAGE_POI',
          shareChannel: 'WECHAT_SHARE',
          shareTitle: title,
          shareDesc: this.poi.address || this.poi.fullAddress || '',
          shareCover: this.heroImage || this.poi.cover,
          extra: { path }
        })
      } catch (e) {
        // 忽略埋点失败
        console.warn('[HeritagePoiDetail] 记录分享行为失败:', e)
      }
    },
    loadLocalState() {
      try {
        if (!this.poi.id) return
        const key = `heritage_poi_state_${this.poi.id}`
        const value = uni.getStorageSync(key)
        if (value && typeof value === 'object') {
          this.isFavorited = !!value.isFavorited
          this.isExperienced = !!value.isExperienced
        }
      } catch (e) {}
    },
    saveLocalState() {
      try {
        if (!this.poi.id) return
        const key = `heritage_poi_state_${this.poi.id}`
        const value = {
          isFavorited: this.isFavorited,
          isExperienced: this.isExperienced
        }
        uni.setStorageSync(key, value)
        
        // 保存到统一的足迹存储
        if (this.isFavorited) {
          this.saveToFootprints('favorite', {
            id: this.poi.id,
            name: this.poi.name || '',
            category: this.poi.category || '非遗体验',
            city: this.extractCityFromPoi(),
            cover: this.poi.cover || '',
            address: this.poi.address || this.poi.fullAddress || '',
            type: 'heritage',
            timestamp: Date.now()
          })
        } else {
          this.removeFromFootprints('favorite', this.poi.id)
        }
        
        if (this.isExperienced) {
          this.saveToFootprints('experienced', {
            id: this.poi.id,
            name: this.poi.name || '',
            category: this.poi.category || '非遗体验',
            city: this.extractCityFromPoi(),
            cover: this.poi.cover || '',
            address: this.poi.address || this.poi.fullAddress || '',
            type: 'heritage',
            timestamp: Date.now()
          })
        } else {
          this.removeFromFootprints('experienced', this.poi.id)
        }
      } catch (e) {
        console.warn('[HeritagePoiDetail] saveLocalState error:', e)
      }
    },
    extractCityFromPoi() {
      const city = this.poi.city || ''
      if (city) return city.replace(/市$/, '')
      const address = this.poi.address || this.poi.fullAddress || ''
      const cityMatch = address.match(/(西安|宝鸡|咸阳|渭南|延安|榆林|汉中|安康|商洛|铜川)/)
      return cityMatch ? cityMatch[1] : ''
    },
    saveToFootprints(category, data) {
      try {
        const key = `footprints_${category}_heritage`
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
        const unifiedIndex = unifiedList.findIndex(item => item.id === data.id && item.type === 'heritage')
        const unifiedItem = {
          ...data,
          type: 'heritage',
          poiType: 'heritage'
        }
        if (unifiedIndex >= 0) {
          unifiedList[unifiedIndex] = unifiedItem
        } else {
          unifiedList.push(unifiedItem)
        }
        uni.setStorageSync(unifiedKey, unifiedList)
      } catch (e) {
        console.warn('[HeritagePoiDetail] saveToFootprints error:', e)
      }
    },
    removeFromFootprints(category, id) {
      try {
        const key = `footprints_${category}_heritage`
        const list = uni.getStorageSync(key) || []
        const filtered = list.filter(item => item.id !== id)
        uni.setStorageSync(key, filtered)
        
        // 同时从统一足迹存储中移除
        const unifiedKey = `poi_footprints_${category}`
        const unifiedList = uni.getStorageSync(unifiedKey) || []
        const unifiedFiltered = unifiedList.filter(item => !(item.id === id && item.type === 'heritage'))
        uni.setStorageSync(unifiedKey, unifiedFiltered)
      } catch (e) {
        console.warn('[HeritagePoiDetail] removeFromFootprints error:', e)
      }
    },
    mockCommentsIfEmpty() {
      if (!this.comments || this.comments.length === 0) {
        const today = new Date()
        const dateText = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
          today.getDate()
        ).padStart(2, '0')}`
        this.comments = [
          {
            id: 'c1',
            userName: '亲子游客',
            score: 4.8,
            date: dateText,
            content: '老师很耐心，体验项目丰富，小朋友玩得很开心，强烈推荐来打卡～',
            images: []
          },
          {
            id: 'c2',
            userName: '手作爱好者',
            score: 4.6,
            date: dateText,
            content: '环境干净舒适，非遗老师讲得很细致，成品也很有纪念意义。',
            images: []
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.heritage-poi-page {
  min-height: 100vh;
  padding-bottom: 200rpx;

  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  box-sizing: border-box;
}

.hero-wrap {
  width: 100%;
  height: 320rpx;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.info-card {
  margin: 16rpx 20rpx 12rpx;

  padding: 18rpx 20rpx 16rpx;
  border-radius: 24rpx;
  background: #fffef7;
  box-shadow: 0 12rpx 24rpx rgba(0, 0, 0, 0.08);
  border: 2rpx solid #f0e0c0;
}

.name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name-text {
  font-size: 32rpx;
  font-weight: 700;
}

.category-tags-row {
  margin-top: 6rpx;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8rpx;
}

.info-card .location-row {
  margin-top: 12rpx;
  margin-bottom: 0;
}

.score-row {

  margin-top: 12rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.score-left {
  display: flex;
  align-items: baseline;
  gap: 8rpx;
}

.score-main {
  font-size: 36rpx;
  font-weight: 700;
  color: #ff6f00;
}

.score-label {
  font-size: 24rpx;
  color: #c47a2a;
}

.score-right {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.avg-price {
  font-size: 24rpx;
  color: #8c5c2a;
}

.category {
  font-size: 24rpx;
  color: #7b2f00;
  background: #ffecc7;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
}

.tag-row {
  margin-top: 10rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}

.tag-pill {
  font-size: 22rpx;
  color: #7b2f00;
  background: #ffecc7;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
}

.section-card {
  margin: 10rpx 20rpx 0;
  border-radius: 20rpx;
  background: #fffef7;
  border: 2rpx solid #f0e0c0;
  box-shadow: 0 6rpx 14rpx rgba(0, 0, 0, 0.06);
}

.section-header {
  padding: 14rpx 18rpx 8rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-header--with-extra .section-extra {
  font-size: 24rpx;
  color: #c47a2a;
}

.section-title {
  font-size: 28rpx;
  font-weight: 600;
}

.section-body {
  padding: 4rpx 18rpx 14rpx;
}

.section-text {
  font-size: 26rpx;
  color: #8c5c2a;
}

.section-text--muted {
  color: #b08a5a;
}

.section-subtitle-line {
  margin-bottom: 6rpx;
  display: flex;
  align-items: baseline;
  gap: 6rpx;
}

.section-subtitle-label {
  font-size: 28rpx;
  color: #8c5c2a;
  font-weight: 600;
}

.section-subtitle-value {
  font-size: 26rpx;
  color: #5a2c12;
}

.section-subtitle-value--block {
  display: block;
  margin-top: 4rpx;
  margin-bottom: 4rpx;
}

.location-row {
  margin-top: 4rpx;
  margin-bottom: 4rpx;
  display: flex;
  align-items: center;
}

.location-left {
  flex: 1;
  padding-right: 12rpx;
}

.location-line {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.location-label {
  font-size: 24rpx;
  color: #8c5c2a;
}

.location-value {
  font-size: 24rpx;
  color: #5a2c12;
  line-height: 1.5;
}

.location-icon-btn {
  width: 140rpx;
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

.icon-label {
  margin-top: 2rpx;
  font-size: 20rpx;
  color: #5a2c12;
}

.heritage-category-row {
  margin-bottom: 6rpx;
  display: flex;
  align-items: center;
  gap: 6rpx;
}

.heritage-category-label {
  font-size: 24rpx;
  color: #8c5c2a;
}

.heritage-category-value {
  font-size: 24rpx;
  color: #7b2f00;
  background: #ffecc7;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
}

.heritage-intro-block {
  margin-top: 8rpx;
}

.heritage-intro-block .section-text {
  text-indent: 2em;
  line-height: 1.8;
  font-size: 26rpx;
  color: #8c5c2a;
}

.section-subtitle-small {
  font-size: 30rpx;
  color: #8c5c2a;
  font-weight: 600;
  margin-bottom: 8rpx;
  display: block;
}

.section-text--link {
  color: #336699;
  text-decoration: underline;
}

.business-body {

  padding-bottom: 16rpx;
}

.business-status-line {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 8rpx;
}

.business-status {
  font-size: 24rpx;
  padding: 4rpx 14rpx;
  border-radius: 999rpx;
  background: #ccc;
  color: #ffffff;
}

.business-status--open {
  background: #43a047;
}

.business-status--closed {
  background: #b0b0b0;
}

.business-time {
  font-size: 24rpx;
  color: #8c5c2a;
}

.facility-pill {
  font-size: 22rpx;
  color: #7b2f00;
  background: #ffecc7;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
}

.facility-row--empty .facility-empty-text {
  font-size: 22rpx;
  color: #b08a5a;
}

.address-main-line {
  margin-bottom: 4rpx;
}

.address-text {
  font-size: 24rpx;
  color: #8c5c2a;
}

.address-sub-line {
  margin-bottom: 8rpx;
}

.distance-text {
  font-size: 22rpx;
  color: #c47a2a;
}

.address-actions {
  margin-top: 4rpx;
  display: flex;
  gap: 12rpx;
}

.address-action-btn {
  display: flex;
  align-items: center;
  padding: 6rpx 12rpx;
  border-radius: 999rpx;
  background: #ffe9b0;
}

.action-icon {
  width: 40rpx;
  height: 40rpx;
  margin-right: 4rpx;
  display: block;
}

.action-icon--map {
  width: 52rpx;
  height: 52rpx;
}

.action-icon--phone {
  width: 44rpx;
  height: 44rpx;
}

.action-label {
  font-size: 22rpx;
}




.comment-list {
  padding: 4rpx 18rpx 16rpx;
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.comment-card {
  padding: 10rpx 12rpx;
  border-radius: 16rpx;
  background: #fffaf1;
}

.comment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.comment-user {
  display: flex;
  align-items: center;
}

.comment-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  background: #ffe0b2;
  text-align: center;
  line-height: 40rpx;
  font-size: 24rpx;
  margin-right: 8rpx;
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
  color: #b08a5a;
}

.comment-score {
  font-size: 24rpx;
  color: #ff6f00;
}

.comment-text {
  margin-top: 6rpx;
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
}

.comment-img-row {
  margin-top: 8rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}

.comment-img {
  width: 160rpx;
  height: 120rpx;
  border-radius: 10rpx;
  overflow: hidden;
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
  z-index: 10;
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

</style>

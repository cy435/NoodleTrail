<template>
  <view class="scenic-page">
    <!-- 顶部：景点图片轮播 -->
    <view class="scenic-hero">
      <swiper
        class="scenic-swiper"
        circular
        autoplay
        indicator-dots
        interval="4000"
        duration="500"
      >
        <swiper-item
          v-for="(img, idx) in heroImages"
          :key="idx"
        >
          <image
            class="scenic-hero-img"
            :src="img"
            mode="aspectFill"
          />
        </swiper-item>
      </swiper>
    </view>

    <!-- 景点关键信息卡片 -->
    <view class="scenic-info-card">
      <view class="scenic-name-row">
        <text class="scenic-name">{{ scenic.name || '景点' }}</text>
        <text v-if="distanceText" class="scenic-distance-bottom-right">距离{{ distanceText }}</text>
      </view>
      <view class="scenic-meta-row">
        <text v-if="displayScore" class="scenic-score">{{ displayScore }}分</text>
        <text v-if="scenic.category" class="scenic-category">{{ scenic.category }}</text>
      </view>
      <view v-if="normalizedTags && normalizedTags.length" class="scenic-tag-row">
        <text
          v-for="tag in normalizedTags"
          :key="tag"
          class="scenic-tag"
        >{{ tag }}</text>
      </view>
    </view>

    <!-- 景点介绍 -->
    <view class="section-card">
      <view class="section-header">
        <text class="section-title">景点介绍</text>
      </view>
      <view class="section-body">
        <text class="section-text">{{ scenic.intro || '景点介绍待补充～' }}</text>
      </view>
    </view>

    <!-- 小贴士：门票预约 / 注意事项 / 推荐路线 / 门票价格 -->
    <view class="section-card">
      <view class="section-header">
        <text class="section-title">小贴士</text>
      </view>
      <view class="section-body">
        <view
          v-if="tips.reserveAhead"
          class="tips-row"
        >
          <text class="tips-label">门票预约</text>
          <text class="tips-value">{{ tips.reserveAhead }}</text>
        </view>
        <view
          v-if="tips.notice"
          class="tips-row"
        >
          <text class="tips-label">注意事项</text>
          <text class="tips-value">{{ tips.notice }}</text>
        </view>
        <view
          v-if="tips.route"
          class="tips-row"
        >
          <text class="tips-label">推荐路线</text>
          <text class="tips-value">{{ tips.route }}</text>
        </view>
        <view
          v-if="tips.ticketPrice"
          class="tips-row"
        >
          <text class="tips-label">门票价格</text>
          <text class="tips-value">{{ tips.ticketPrice }}</text>
        </view>
        <view
          v-if="!hasTips"
          class="tips-empty"
        >
          <text class="section-text section-text--muted">小贴士信息待补充～</text>
        </view>
      </view>
    </view>

    <!-- 位置与步行信息，仅保留地址 + 导航 -->
    <view class="section-card">
      <view class="section-header">
        <text class="section-title">位置</text>
      </view>
      <view
        class="drive-info"
        v-if="walkInfoText"
      >
        <text class="drive-text">{{ walkInfoText }}</text>
      </view>

      <view class="location-row">
        <view class="location-left">
          <view class="location-line">
            <text class="location-label">地址</text>
            <text class="location-value">{{ scenic.address || '暂无地址信息' }}</text>
          </view>
        </view>
        <view class="location-right">
          <view
            class="location-icon-btn"
            @tap="navigateToScenic"
          >
            <image
              class="icon-map"
              src="/static/assets/地图.png"
              mode="aspectFill"
            />
            <text class="icon-label">导航</text>
          </view>
          <view
            v-if="scenic.phone"
            class="location-icon-btn"
            @tap="callPhone"
          >
            <image
              class="icon-phone"
              src="/static/assets/电话.png"
              mode="aspectFit"
            />
            <text class="icon-label">电话</text>
          </view>
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

        <!-- 景点信息 -->
        <view class="food-info">
          <text class="food-info-name">{{ (scenic && scenic.name) || '' }}</text>
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
          open-type="share"
          @tap.stop="shareScenic"
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
          @tap="shareScenic"
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
    <view
      v-if="navigationUrl"
      class="nav-webview-wrap"
    >
      <web-view
        :src="navigationUrl"
        class="nav-webview"
      />
    </view>
  </view>
</template>

<script>
const { getPoiDetail, updatePoiFavorite, updatePoiExperience } = require('../../api/map.js')

// 腾讯位置服务路线规划插件配置：使用你在腾讯位置服务后台申请的「微信小程序」key
const AMAP_ROUTE_PLAN_KEY = 'PL2BZ-2QP6Q-OG45Q-BUYY4-QMEPK-4NB55'
const AMAP_ROUTE_PLAN_REFERER = '秦食匠艺'

// 当前页面对应的 POI 类型：2=景点
const POI_TYPE = 2

export default {
  name: 'ScenicPoiDetail',
  data() {
    return {
      scenic: {
        id: '',
        name: '',
        cover: '',
        images: [],
        category: '',
        address: '',
        distance: '', // 单位：米
        latitude: null,
        longitude: null,
        score: '',
        intro: '',
        phone: ''
      },
      userLat: null,
      userLng: null,
      tags: [],
      tips: {
        reserveAhead: '',
        notice: '',
        route: '',
        ticketPrice: ''
      },
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
    heroImages() {
      const list = Array.isArray(this.scenic.images) ? this.scenic.images.filter(Boolean) : []
      if (list.length > 0) {
        return list
      }
      if (this.scenic.cover) {
        return [this.scenic.cover]
      }
      return ['/static/assets/热门推荐.png']
    },
    distanceText() {
      if (!this.scenic.distance) {
        return ''
      }
      return this.formatDistance(this.scenic.distance)
    },
    displayScore() {
      if (!this.scenic || !this.scenic.score) {
        return ''
      }
      const num = Number(this.scenic.score)
      if (Number.isNaN(num) || num <= 0) {
        return ''
      }
      return num.toFixed(1).replace(/\.0$/, '')
    },
    walkInfoText() {
      const distance = this.scenic && this.scenic.distance
      if (!distance) {
        return ''
      }
      const meters = Number(distance)
      if (Number.isNaN(meters) || meters <= 0) {
        return ''
      }
      const km = meters / 1000
      const minutes = Math.max(5, Math.round(meters / 80)) // 简单按 80m/分钟估算
      const kmText = km >= 1 ? `${km.toFixed(1).replace(/\.0$/, '')}公里` : `${Math.round(meters)}米`
      return `距离步行约${kmText} ${minutes}分钟`
    },
    hasTips() {
      return !!(
        this.tips.reserveAhead ||
        this.tips.notice ||
        this.tips.route ||
        this.tips.ticketPrice
      )
    },
    normalizedTags() {
      if (!this.tags || !Array.isArray(this.tags) || this.tags.length === 0) {
        return []
      }
      return this.tags.map(tag => {
        // 将"人文景观"替换为"自然景观"
        if (tag === '人文景观') {
          return '自然景观'
        }
        // 将"文物古迹"替换为"人文古迹"
        if (tag === '文物古迹') {
          return '人文古迹'
        }
        return tag
      })
    }
  },
  onLoad(options) {
    const opt = options || {}
    this.scenic.id = opt.id || ''
    this.scenic.name = opt.name || ''
    this.scenic.cover = opt.cover || ''
    this.scenic.category = opt.category || ''
    this.scenic.address = opt.address || ''
    this.scenic.distance = opt.distance || ''
    this.scenic.latitude = opt.latitude ? Number(opt.latitude) : null
    this.scenic.longitude = opt.longitude ? Number(opt.longitude) : null
    this.scenic.score = opt.score || ''
    this.scenic.intro = opt.intro ? decodeURIComponent(opt.intro) : ''
    this.scenic.phone = opt.phone || ''

    if (opt.images) {
      try {
        const parsed = JSON.parse(decodeURIComponent(opt.images))
        if (Array.isArray(parsed)) {
          this.scenic.images = parsed
        }
      } catch (e) {
        // 忽略解析失败
      }
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

    // 小贴士字段（可选）：tipsReserve / tipsNotice / tipsRoute / tipsPrice
    if (opt.tipsReserve) {
      this.tips.reserveAhead = decodeURIComponent(opt.tipsReserve)
    }
    if (opt.tipsNotice) {
      this.tips.notice = decodeURIComponent(opt.tipsNotice)
    }
    if (opt.tipsRoute) {
      this.tips.route = decodeURIComponent(opt.tipsRoute)
    }
    if (opt.tipsPrice) {
      this.tips.ticketPrice = decodeURIComponent(opt.tipsPrice)
    }

    if (this.scenic.name) {
      uni.setNavigationBarTitle({ title: this.scenic.name })
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
      if (!this.scenic || !this.scenic.id || !getPoiDetail) {
        return
      }
      try {
        const res = await getPoiDetail({
          id: this.scenic.id,
          type: 2,
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

        if (poi.id != null) this.scenic.id = poi.id
        if (poi.name) this.scenic.name = poi.name
        if (poi.imageUrl || poi.cover || poi.image || poi.thumbnail) {
          this.scenic.cover = poi.imageUrl || poi.cover || poi.image || poi.thumbnail
        }
        if (Array.isArray(poi.images)) {
          this.scenic.images = poi.images
        }
        if (poi.categoryName || poi.category) {
          this.scenic.category = poi.categoryName || poi.category
        }
        if (poi.address) this.scenic.address = poi.address
        if (poi.distance != null) this.scenic.distance = poi.distance
        if (poi.latitude != null) this.scenic.latitude = poi.latitude
        if (poi.longitude != null) this.scenic.longitude = poi.longitude
        if (poi.score != null || poi.rating != null) {
          this.scenic.score = poi.score != null ? poi.score : poi.rating
        }
        if (poi.tel || poi.phone) {
          this.scenic.phone = poi.tel || poi.phone
        }

        if (Array.isArray(poi.tags)) {
          this.tags = poi.tags
        }

        if (data.intro) {
          this.scenic.intro = data.intro
        } else if (poi.intro) {
          this.scenic.intro = poi.intro
        }

        if (data.tips) {
          const t = data.tips
          if (t.reserveAhead) this.tips.reserveAhead = t.reserveAhead
          if (t.notice) this.tips.notice = t.notice
          if (t.route) this.tips.route = t.route
          if (t.ticketPrice) this.tips.ticketPrice = t.ticketPrice
        }

        if (this.scenic.name) {
          uni.setNavigationBarTitle({ title: this.scenic.name })
        }
      } catch (e) {
        console.warn('[ScenicPoiDetail] fetchPoiDetail fail:', e)
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

    navigateToScenic() {
      if (!this.scenic.latitude || !this.scenic.longitude) {
        uni.showToast({ title: '暂无位置信息', icon: 'none' })
        return
      }

      const name = this.scenic.name || '景点'
      const address = this.scenic.address || ''

      // 优先使用腾讯位置服务路线规划插件
      if (typeof wx !== 'undefined' && wx.navigateTo && AMAP_ROUTE_PLAN_KEY) {
        try {
          const endPoint = JSON.stringify({
            name,
            latitude: Number(this.scenic.latitude),
            longitude: Number(this.scenic.longitude)
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
              console.warn('[ScenicPoiDetail] 路线规划插件失败，使用微信原生地图:', err)
              uni.openLocation({
                latitude: Number(this.scenic.latitude),
                longitude: Number(this.scenic.longitude),
                name,
                address,
                scale: 18
              })
            }
          })
          return
        } catch (e) {
          // 插件失败时回退
          console.warn('[ScenicPoiDetail] 路线规划插件异常，使用微信原生地图:', e)
        }
      }

      // 回退：打开微信原生地图
      uni.openLocation({
        latitude: Number(this.scenic.latitude),
        longitude: Number(this.scenic.longitude),
        name,
        address,
        scale: 18
      })
    },

    callPhone() {
      const raw = this.scenic && this.scenic.phone
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


    async toggleFavorite() {
      if (!this.scenic || !this.scenic.id) {
        uni.showToast({ title: '景点信息未就绪', icon: 'none' })
        return
      }
      const current = !!this.isFavorited
      const target = !current
      try {
        const res = await updatePoiFavorite({
          poiId: this.scenic.id,
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
        console.warn('[ScenicPoiDetail] toggleFavorite fail:', e)
        uni.showToast({ title: '操作失败，请稍后重试', icon: 'none' })
      }
    },
    async toggleExperienced() {
      if (!this.scenic || !this.scenic.id) {
        uni.showToast({ title: '景点信息未就绪', icon: 'none' })
        return
      }
      const current = !!this.isExperienced
      const target = !current
      try {
        const res = await updatePoiExperience({
          poiId: this.scenic.id,
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
        console.warn('[ScenicPoiDetail] toggleExperienced fail:', e)
        uni.showToast({ title: '操作失败，请稍后重试', icon: 'none' })
      }
    },
    shareScenic() {
      // 微信小程序中，点击分享按钮会自动触发 onShareAppMessage
      // #ifdef MP-WEIXIN
      console.log('[ScenicPoiDetail] 用户点击分享按钮，景点ID:', this.scenic.id, '景点名称:', this.scenic.name)
      // #endif
      
      // #ifndef MP-WEIXIN
      uni.showToast({ title: '请在微信小程序中分享', icon: 'none' })
      // #endif
    },
    
    // 微信小程序分享配置
    onShareAppMessage(options) {
      console.log('[ScenicPoiDetail] onShareAppMessage 被调用', options)
      
      if (!this.scenic || !this.scenic.id) {
        console.warn('[ScenicPoiDetail] 分享时景点信息为空')
        return {
          title: '想跟你一起去看这个景点的风景~',
          path: '/pages/index/ScenicPoiDetail'
        }
      }

      // 构建分享路径
      const sharePath = `/pages/index/ScenicPoiDetail?id=${encodeURIComponent(this.scenic.id)}`
      
      // 分享标题：使用指定的文案格式
      const scenicName = this.scenic.name || '景点'
      const shareTitle = `想跟你一起去看这个${scenicName}的风景~`
      
      // 分享图片：只有当有真实图片时才设置，避免显示占位符
      const defaultPlaceholder = '/static/assets/热门推荐.png'
      let shareImageUrl = undefined
      
      // 优先使用第一张图片
      if (this.heroImages && this.heroImages.length > 0) {
        const firstImg = this.heroImages[0]
        if (firstImg && firstImg !== defaultPlaceholder && firstImg.trim() !== '') {
          shareImageUrl = firstImg
        }
      }
      
      // 如果没有有效图片，尝试使用 cover
      if (!shareImageUrl && this.scenic.cover) {
        const coverImg = this.scenic.cover
        if (coverImg && coverImg !== defaultPlaceholder && coverImg.trim() !== '') {
          shareImageUrl = coverImg
        }
      }
      
      console.log('[ScenicPoiDetail] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        scenicId: this.scenic.id,
        scenicName: scenicName,
        imageUrl: shareImageUrl || '未设置（无图片）'
      })

      // 记录分享行为
      this.recordShareBehavior(shareTitle, sharePath).catch(err => {
        console.error('[ScenicPoiDetail] 记录分享行为失败', err)
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
        if (!this.scenic.id) return
        const { recordShare } = require('../../api/share.js')
        await recordShare({
          targetId: this.scenic.id,
          targetType: 'SCENIC_POI',
          shareChannel: 'WECHAT_SHARE',
          shareTitle: title,
          shareDesc: this.scenic.address || '',
          shareCover: this.heroImages && this.heroImages.length > 0 ? this.heroImages[0] : this.scenic.cover,
          extra: { path }
        })
      } catch (e) {
        // 忽略埋点失败
        console.warn('[ScenicPoiDetail] 记录分享行为失败:', e)
      }
    },
    loadLocalState() {
      try {
        if (!this.scenic.id) return
        const key = `scenic_poi_state_${this.scenic.id}`
        const value = uni.getStorageSync(key)
        if (value && typeof value === 'object') {
          this.isFavorited = !!value.isFavorited
          this.isExperienced = !!value.isExperienced
        }
      } catch (e) {}
    },
    saveLocalState() {
      try {
        if (!this.scenic.id) return
        const key = `scenic_poi_state_${this.scenic.id}`
        const value = {
          isFavorited: this.isFavorited,
          isExperienced: this.isExperienced
        }
        uni.setStorageSync(key, value)
        
        // 保存到统一的足迹存储
        if (this.isFavorited) {
          this.saveToFootprints('favorite', {
            id: this.scenic.id,
            name: this.scenic.name || '',
            category: this.scenic.category || '景点',
            city: this.extractCityFromScenic(),
            cover: this.scenic.cover || '',
            address: this.scenic.address || '',
            type: 'scenic',
            timestamp: Date.now()
          })
        } else {
          this.removeFromFootprints('favorite', this.scenic.id)
        }
        
        if (this.isExperienced) {
          this.saveToFootprints('experienced', {
            id: this.scenic.id,
            name: this.scenic.name || '',
            category: this.scenic.category || '景点',
            city: this.extractCityFromScenic(),
            cover: this.scenic.cover || '',
            address: this.scenic.address || '',
            type: 'scenic',
            timestamp: Date.now()
          })
        } else {
          this.removeFromFootprints('experienced', this.scenic.id)
        }
      } catch (e) {
        console.warn('[ScenicPoiDetail] saveLocalState error:', e)
      }
    },
    extractCityFromScenic() {
      const address = this.scenic.address || ''
      const cityMatch = address.match(/(西安|宝鸡|咸阳|渭南|延安|榆林|汉中|安康|商洛|铜川)/)
      return cityMatch ? cityMatch[1] : ''
    },
    saveToFootprints(category, data) {
      try {
        const key = `footprints_${category}_scenic`
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
        const unifiedIndex = unifiedList.findIndex(item => item.id === data.id && item.type === 'scenic')
        const unifiedItem = {
          ...data,
          type: 'scenic',
          poiType: 'scenic'
        }
        if (unifiedIndex >= 0) {
          unifiedList[unifiedIndex] = unifiedItem
        } else {
          unifiedList.push(unifiedItem)
        }
        uni.setStorageSync(unifiedKey, unifiedList)
      } catch (e) {
        console.warn('[ScenicPoiDetail] saveToFootprints error:', e)
      }
    },
    removeFromFootprints(category, id) {
      try {
        const key = `footprints_${category}_scenic`
        const list = uni.getStorageSync(key) || []
        const filtered = list.filter(item => item.id !== id)
        uni.setStorageSync(key, filtered)
        
        // 同时从统一足迹存储中移除
        const unifiedKey = `poi_footprints_${category}`
        const unifiedList = uni.getStorageSync(unifiedKey) || []
        const unifiedFiltered = unifiedList.filter(item => !(item.id === id && item.type === 'scenic'))
        uni.setStorageSync(unifiedKey, unifiedFiltered)
      } catch (e) {
        console.warn('[ScenicPoiDetail] removeFromFootprints error:', e)
      }
    },

    // 打开“添加到清单”弹窗
    async openAddToListDialog() {
      if (!this.scenic || !this.scenic.id) {
        uni.showToast({ title: '景点信息未就绪', icon: 'none' })
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

    // 加载指定日期的清单列表
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
        console.error('[ScenicPoiDetail] 加载清单列表失败:', err)
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

    // 确认添加到清单
    async confirmAddToList() {
      if (!this.scenic || !this.scenic.id) {
        uni.showToast({ title: '景点信息缺失', icon: 'none' })
        return
      }
      if (!this.selectedChecklistId) {
        uni.showToast({ title: '请选择清单', icon: 'none' })
        return
      }
      try {
        const checklistApi = require('../../api/checklist.js')
        uni.showLoading({ title: '正在加入清单...', mask: true })
        const result = await checklistApi.addItem(this.selectedChecklistId, {
          content: this.scenic.name || '景点',
          note: this.addToListNote || (this.scenic.address ? `地址：${this.scenic.address}` : '')
        })
        uni.hideLoading()
        if (result && result.id) {
          this.showAddToListDialog = false
          uni.showToast({ title: '已添加到清单', icon: 'success' })
        } else {
          uni.showToast({ title: '添加失败，请稍后再试', icon: 'none' })
        }
      } catch (err) {
        uni.hideLoading()
        console.error('[ScenicPoiDetail] 添加到清单失败:', err)
        uni.showToast({ title: err.message || '添加失败', icon: 'none' })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.scenic-page {
  min-height: 100vh;
  padding-bottom: 120rpx;
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  box-sizing: border-box;
}

.scenic-hero {
  width: 100%;
  height: 380rpx;
  overflow: hidden;
}

.scenic-swiper {
  width: 100%;
  height: 100%;
}

.scenic-hero-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.scenic-info-card {
  margin: 8rpx 20rpx 12rpx;
  padding: 18rpx 20rpx 16rpx;
  border-radius: 24rpx;
  background: #fffef7;
  box-shadow: 0 12rpx 24rpx rgba(0, 0, 0, 0.08);
  border: 2rpx solid #f0e0c0;
  position: relative;
}

.scenic-name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.scenic-name {
  font-size: 32rpx;
  font-weight: 700;
}

.scenic-distance-bottom-right {
  position: absolute;
  right: 20rpx;
  bottom: 16rpx;
  font-size: 24rpx;
  color: #c47a2a;
}

.scenic-meta-row {
  margin-top: 10rpx;
  display: flex;
  align-items: center;
  gap: 24rpx;
}

.scenic-score {
  font-size: 28rpx;
  font-weight: 700;
  color: #ff6f00;
}

.scenic-category {
  font-size: 24rpx;
  color: #8c5c2a;
}

.scenic-tag-row {
  margin-top: 10rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}

.scenic-tag {
  font-size: 22rpx;
  color: #7b2f00;
  background: #ffecc7;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
}

.section-card {
  margin: 8rpx 20rpx;
  padding: 14rpx 18rpx 16rpx;
  border-radius: 22rpx;
  background: #fffef7;
  box-shadow: 0 8rpx 20rpx rgba(0, 0, 0, 0.06);
  border: 2rpx solid #f0e0c0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8rpx;
}

.section-title {
  font-size: 30rpx;
  font-weight: 600;
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

.tips-row {
  margin-bottom: 8rpx;
  display: flex;
  align-items: flex-start;
  gap: 12rpx;
}

.tips-label {
  width: 160rpx;
  font-size: 24rpx;
  color: #8c5c2a;
}

.tips-value {
  flex: 1;
  font-size: 24rpx;
  color: #5a2c12;
  line-height: 1.6;
}

.tips-empty {
  margin-top: 4rpx;
}

.drive-info {
  margin: 4rpx 0 8rpx;
}

.drive-text {
  font-size: 24rpx;
  color: #c47a2a;
}

.location-row {
  margin-top: 8rpx;
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
}

.location-right {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
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




.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 8rpx 16rpx 8rpx;
  padding-bottom: calc(8rpx + env(safe-area-inset-bottom));
  background: #ffffff;
  box-shadow: 0 -6rpx 16rpx rgba(0, 0, 0, 0.12);
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
  background: #ffffff;
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

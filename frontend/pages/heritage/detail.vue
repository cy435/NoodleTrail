<template>
  <view class="detail-page">

    <!-- 顶部媒体模块：优先视频，无视频则显示图片 -->
    <view class="media-wrap">
      <!-- 原生视频播放（优先） -->
      <video
        v-if="media.type === 'video'"
        class="media"
        :src="media.src"
        controls
        :poster="poster"
        enable-progress-gesture
        show-progress
        show-fullscreen-btn
        @error="onVideoError"
      />
      <!-- 解析/播放失败时的 H5 兜底：使用 web-view 打开原页面或分享链接 -->
      <web-view
        v-else-if="media.type === 'webview'"
        class="media media-webview"
        :src="media.src"
      />
      <!-- 兜底：没有视频时显示封面图片 -->
      <image
        v-else
        class="media"
        :src="media.src"
        mode="aspectFill"
        :lazy-load="true"
      />

    </view>

    <!-- 绿色名称条 -->
    <view class="name-bar">
      <text class="heritage-name">{{ detail.name }}</text>
    </view>

    <!-- 历史渊源 -->
    <view class="section history">
      <view class="section-title-row">
        <text class="section-title">历史渊源</text>
        <!-- #ifdef MP-WEIXIN -->
        <button
          class="section-share-icon"
          open-type="share"
          @tap.stop="onShareClick"
        >
          <image
            :src="IMG.shareIcon2"
            class="section-share-icon-img"
            mode="aspectFit"
          />
        </button>
        <!-- #endif -->
        <!-- #ifndef MP-WEIXIN -->
        <view
          class="section-share-icon"
          @tap.stop="onShareClick"
        >
          <image
            :src="IMG.shareIcon2"
            class="section-share-icon-img"
            mode="aspectFit"
          />
        </view>
        <!-- #endif -->
      </view>
      <view class="section-body">
        <text class="section-text">{{ detail.history || '暂无介绍' }}</text>
      </view>
    </view>

    <!-- 内容介绍 -->
    <view class="section content">
      <view class="section-title">内容介绍</view>
      <view class="section-body">
        <text class="section-text">{{ detail.desc || '暂无介绍' }}</text>
      </view>
    </view>

    <!-- 底部操作按钮 -->
    <view class="action-buttons">
      <view 
        class="action-btn experience-btn" 
        :class="{ active: isExperienced, disabled: loading }"
        @tap="handleExperience"
      >
        <text class="btn-icon">{{ isExperienced ? '✓' : '○' }}</text>
        <text class="btn-text">{{ isExperienced ? '已体验' : '标记已体验' }}</text>
      </view>
      <view 
        class="action-btn favorite-btn" 
        :class="{ active: isFavorited, disabled: loading }"
        @tap="handleFavorite"
      >
        <text class="btn-icon">{{ isFavorited ? '★' : '☆' }}</text>
        <text class="btn-text">{{ isFavorited ? '已收藏' : '收藏' }}</text>
      </view>
    </view>


    <!-- #ifdef MP-WEIXIN -->
    <canvas
      canvas-id="heritagePosterCanvas"
      class="poster-canvas"
      style="width: 375px; height: 640px; position: fixed; left: -9999px; top: -9999px;"
    ></canvas>
    <!-- #endif -->

  </view>
</template>

<script>
import { 
  getAllHeritages, 
  searchHeritages, 
  getHeritageById,
  markAsExperienced,
  cancelExperience,
  toggleFavorite,
  getFavoriteStatus,
  getExperienceStatus,
  buildVideoProxyUrl
} from '../../api/heritage.js'
import { checkShared, recordShare } from '../../api/share.js'
import { IMG } from '../../api/imageMap.js'


export default {
  name: 'HeritageDetail',
  data() {
    return {
      IMG,
      id: '',

      detail: {
        id: '',
        name: '',
        desc: '',
        cover: IMG.retouch_2025112414394823,
        history: '',
        videoUrl: '',
        tags: '',
        qrcode: IMG.retouch_2025112414394823
      },
      poster: IMG.retouch_2025112414394823,
      isExperienced: false, // 是否已体验
      isFavorited: false, // 是否已收藏
      videoSourceType: '', // shaanxi_feiyi / bilibili / douyin / other
      useWebView: false, // 是否使用 web-view 兜底
      fallbackUrl: '', // web-view 打开的 H5 地址或原视频链接
      loading: false,
      // 分享海报状态
      shareState: {
        hasShared: false,
        generating: false
      }
    }
  },
  computed: {
    media() {
      const video = this.detail.videoUrl
      const cover = this.detail.cover || this.poster

      // 已切换为 web-view 兜底播放原页面/H5
      if (this.useWebView && this.fallbackUrl) {
        return { type: 'webview', src: this.fallbackUrl }
      }

      if (video && typeof video === 'string') {
        const sourceType = this.videoSourceType || this.detectVideoSourceType(video)

        // B 站 / 抖音：统一走后端 /api/videoProxy 代理播放
        if (sourceType === 'bilibili' || sourceType === 'douyin') {
          const proxied = buildVideoProxyUrl(video)
          if (proxied) {
            return { type: 'video', src: proxied }
          }
          // 代理地址生成失败时，直接用 H5 页兜底
          return { type: 'webview', src: this.fallbackUrl || video }
        }

        // 陕西非遗网：如果是可直连的 HTTPS 视频，直接用原始地址；否则也可以走代理
        if (sourceType === 'shaanxi_feiyi') {
          if (this.isValidVideoUrl(video)) {
            return { type: 'video', src: video }
          }
          const proxied = buildVideoProxyUrl(video)
          if (proxied) {
            return { type: 'video', src: proxied }
          }
        }

        // 其他来源（例如非遗网站的详情 .html 页面）：同样优先走后端代理
        if (sourceType === 'other') {
          const proxied = buildVideoProxyUrl(video)
          if (proxied) {
            return { type: 'video', src: proxied }
          }
          // 代理地址构建失败时走 H5 兜底
          return { type: 'webview', src: this.fallbackUrl || video }
        }

        // 保留 YouTube 的兼容逻辑（如果仍有历史数据）
        if (sourceType === 'youtube') {
          const proxied = buildVideoProxyUrl(video)
          if (proxied) {
            return { type: 'video', src: proxied }
          }
          const embedUrl = this.convertYouTubeUrl(video)
          if (embedUrl) {
            return { type: 'webview', src: embedUrl }
          }
        }

        // 兜底：仍然尝试按直链视频处理一次
        if (this.isValidVideoUrl(video)) {
          return { type: 'video', src: video }
        }
      }

      return { type: 'image', src: cover }
    }
  },
  onLoad(query) {
    console.log('[heritage-detail] onLoad 参数:', query)
    // 支持从分享链接进入，参数可能是 id 或 heritageId
    this.id = query?.id || query?.heritageId || ''
    if (!this.id) {
      // 必须从“陕非遗”列表卡片进入，未携带 id 时强制返回列表页
      uni.showToast({ title: '请从列表卡片进入详情', icon: 'none', duration: 1500 })
      setTimeout(() => {
        uni.reLaunch({ url: '/pages/heritage/index' })
      }, 300)
      return
    }
    this.bootstrap()
  },
  methods: {
    async bootstrap() {
      try {
        let found = null

        // 1) 优先按 id 直接查询
        if (this.id) {
          try {
            const d1 = await getHeritageById(this.id)
            if (d1 && (d1.id || d1.name)) {
              found = d1
            }
          } catch (_) {}
        }

        // 2) 回退：拉取全部再匹配 id
        if (!found) {
          const list = await getAllHeritages({ page: 1, size: 1000 })
          found = list.find(h => String(h.id) === String(this.id)) || null
        }

        // 最终映射（后端返回 HeritageDTO，字段为 name, contentIntroduction, historicalOrigin, imageUrl, videoUrl, category）
        const item = found || {}
        this.detail = {
          id: item.id || this.id,
          name: item.name || item.heritageName || item.title || '非遗项目',
          desc: item.contentIntroduction || item.description || item.desc || '',
          cover: this.pickCover(item),
          history: item.historicalOrigin || '',
          videoUrl: item.videoUrl || item.video || item.videoURL || item.mediaUrl || '',
          tags: item.category || item.tags || '',
          qrcode: item.qrcode || item.qrCodeUrl || IMG.retouch_2025112414394823
        }
        this.poster = this.detail.cover
        
        // 根据视频来源类型初始化播放方式（陕西非遗网 / B 站 / 抖音）
        this.setupVideo()
        
        // 加载体验和收藏状态
        await this.loadStatus()
        // 查询是否已经分享过，用于禁用分享按钮
        this.checkShareStatus()
      } catch (e) {
        console.warn('加载详情失败:', e)
      }
    },
    
    // 加载体验和收藏状态
    async loadStatus() {
      if (!this.id) return
      
      try {
        const [experienced, favorited] = await Promise.all([
          getExperienceStatus(this.id),
          getFavoriteStatus(this.id)
        ])
        this.isExperienced = experienced
        this.isFavorited = favorited
      } catch (err) {
        console.error('加载状态失败:', err)
      }
    },
    
    // 标记 / 取消已体验
    async handleExperience() {
      if (!this.id) {
        uni.showToast({ title: '非遗信息不完整', icon: 'none' })
        return
      }

      if (this.loading) {
        return
      }

      try {
        this.loading = true

        // 未体验 -> 标记为已体验
        if (!this.isExperienced) {
          const resp = await markAsExperienced(this.id)
          const experienced = resp && (resp.experienced === true || resp.isExperienced === true)
          this.isExperienced = experienced || true
          uni.showToast({ title: '标记成功', icon: 'success' })
          return
        }

        // 已体验 -> 取消体验标记
        const confirmed = await new Promise(resolve => {
          uni.showModal({
            title: '取消体验',
            content: '确定要取消“已体验”标记吗？',
            success: res => resolve(res.confirm === true)
          })
        })

        if (!confirmed) {
          return
        }

        const resp = await cancelExperience(this.id)
        const experienced = resp && (resp.experienced === true || resp.isExperienced === true)
        this.isExperienced = experienced === true
        uni.showToast({ title: '已取消体验', icon: 'success' })
      } catch (e) {
        console.error('[handleExperience] 体验状态更新失败', e)
        const msg = e && e.message ? e.message : '操作失败'
        uni.showToast({ title: msg, icon: 'none' })
      } finally {
        this.loading = false
      }
    },
    
    // 收藏/取消收藏
    async handleFavorite() {
      if (!this.id) {
        uni.showToast({ title: '非遗信息不完整', icon: 'none' })
        return
      }
      
      try {
        this.loading = true
        const newFavoriteStatus = !this.isFavorited
        await toggleFavorite(this.id, newFavoriteStatus)
        this.isFavorited = newFavoriteStatus
        uni.showToast({ 
          title: newFavoriteStatus ? '已收藏' : '已取消收藏', 
          icon: 'success' 
        })
      } catch (err) {
        console.error('收藏操作失败:', err)
        uni.showToast({ title: '操作失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },
    pickCover(item) {
      const def = this.detail.cover
      const url = item.imageUrl || item.coverImage || item.cover || item.image || def
      return this.getValidImageUrl(url)
    },
    // 与列表页保持一致的图片合法性判断
    getValidImageUrl(url) {
      if (!url || typeof url !== 'string') return this.poster
      const raw = url.trim()
      const pagePatterns = ['baidu.com/item', 'baike.baidu.com', 'view.php', '.html', '.shtml', '.php', 'smart-museum.cn']
      if (pagePatterns.some(p => raw.includes(p))) return this.poster
      if (raw.startsWith('http://')) return this.poster
      // 尝试校验扩展名（使用字符串方法解析 pathname，不使用 URL 构造函数）
      let pathname = raw
      // 使用字符串方法提取 pathname
      try {
        const match = raw.match(/^https?:\/\/[^\/]+(\/[^?#]*)/)
        if (match && match[1]) {
          pathname = match[1]
        } else {
          // 如果没有匹配到，尝试直接使用原始 URL
          const pathMatch = raw.split('?')[0].split('#')[0]
          const slashIndex = pathMatch.indexOf('/', pathMatch.indexOf('://') + 3)
          if (slashIndex > 0) {
            pathname = pathMatch.substring(slashIndex)
          }
        }
      } catch (e) {
        pathname = raw
      }
      const lower = pathname.toLowerCase()
      const exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp']
      return exts.some(ext => lower.endsWith(ext)) ? raw : this.poster
    },

    // 根据视频 URL 判断来源类型：陕西非遗网 / B 站 / 抖音 / 其他
    detectVideoSourceType(url) {
      if (!url || typeof url !== 'string') return ''
      const raw = url.trim()

      if (this.isBilibiliUrl(raw)) {
        return 'bilibili'
      }
      if (this.isDouyinUrl(raw)) {
        return 'douyin'
      }
      if (this.isYouTubeUrl(raw)) {
        return 'youtube'
      }
      if (this.isValidVideoUrl(raw)) {
        return 'shaanxi_feiyi'
      }
      return 'other'
    },

    // 初始化视频播放配置（前端只负责拼好 video / web-view 的地址）
    setupVideo() {
      const rawUrl = this.detail && this.detail.videoUrl
        ? String(this.detail.videoUrl).trim()
        : ''

      if (!rawUrl) {
        this.videoSourceType = ''
        this.useWebView = false
        this.fallbackUrl = ''
        return
      }

      const sourceType = this.detectVideoSourceType(rawUrl)
      this.videoSourceType = sourceType
      // 默认优先尝试通过 <video> 播放（包括 B站/抖音/非遗网站 HTML 等），失败时再通过 web-view 兜底
      this.useWebView = false
      // web-view 兜底时，直接打开原始分享链接或原地址
      this.fallbackUrl = rawUrl
    },

    // 判断是否为 B 站链接
    isBilibiliUrl(url) {
      if (!url || typeof url !== 'string') return false
      const raw = url.trim().toLowerCase()
      return raw.includes('bilibili.com') || raw.includes('b23.tv')
    },

    // 判断是否为抖音链接
    isDouyinUrl(url) {
      if (!url || typeof url !== 'string') return false
      const raw = url.trim().toLowerCase()
      return raw.includes('douyin.com') || raw.includes('iesdouyin.com')
    },

    // 检查是否是 YouTube URL
    isYouTubeUrl(url) {
      if (!url || typeof url !== 'string') return false
      const raw = url.trim().toLowerCase()
      return raw.includes('youtube.com') || raw.includes('youtu.be')
    },

    // 将 YouTube URL 解析为可嵌入的播放地址（用于 web-view / iframe）
    convertYouTubeUrl(youtubeUrl) {
      if (!youtubeUrl || typeof youtubeUrl !== 'string') return null

      try {
        const raw = youtubeUrl.trim()
        let videoId = null

        if (raw.includes('youtube.com')) {
          const vMatch = raw.match(/[?&]v=([^&]+)/)
          if (vMatch && vMatch[1]) {
            videoId = vMatch[1]
          }
        } else if (raw.includes('youtu.be')) {
          const match = raw.match(/youtu\.be\/([^?&#]+)/)
          if (match && match[1]) {
            videoId = match[1]
          }
        }

        if (!videoId) return null

        const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1`
        return embedUrl
      } catch (e) {
        console.error('[heritage] 解析 YouTube URL 失败:', e)
        return null
      }
    },

    // 检查是否是有效的视频 URL（直接的视频文件链接）
    isValidVideoUrl(url) {
      if (!url || typeof url !== 'string') return false
      const raw = url.trim()
      
      // 必须是以 https:// 开头的 URL
      if (!raw.startsWith('https://')) return false
      
      // 检查是否是直接的视频文件 URL（包含视频扩展名）
      // 使用字符串方法解析 pathname，不使用 URL 构造函数
      let pathname = raw
      try {
        // 使用正则表达式提取 pathname
        const match = raw.match(/^https?:\/\/[^\/]+(\/[^?#]*)/)
        if (match && match[1]) {
          pathname = match[1]
        } else {
          // 如果没有匹配到，尝试直接使用原始 URL 的路径部分
          const pathMatch = raw.split('?')[0].split('#')[0]
          const slashIndex = pathMatch.indexOf('/', pathMatch.indexOf('://') + 3)
          if (slashIndex > 0) {
            pathname = pathMatch.substring(slashIndex)
          } else {
            pathname = raw
          }
        }
      } catch (e) {
        pathname = raw
      }
      
      const lower = pathname.toLowerCase()
      const allowedExts = ['.mp4', '.m3u8', '.mov', '.m4v', '.webm', '.flv', '.avi']
      const hasExt = allowedExts.some(ext => lower.endsWith(ext))
      
      // 如果有视频扩展名，认为是有效的视频 URL
      if (hasExt) return true
      
      // 检查是否是视频流 URL（如 m3u8 播放列表）
      if (raw.includes('.m3u8')) {
        return true
      }
      
      // 检查 URL 中是否包含视频相关的关键词（更宽松的判断）
      const videoKeywords = ['video', 'stream', 'play', 'media', 'mp4', 'm3u8']
      if (videoKeywords.some(keyword => lower.includes(keyword))) {
        // 排除明显的非视频 URL
        const nonVideoPatterns = ['image', 'photo', 'picture', 'jpg', 'png', 'gif']
        if (!nonVideoPatterns.some(pattern => lower.includes(pattern))) {
          return true
        }
      }
      
      return false
    },

    onVideoError(e) {
      console.warn('[heritage-detail] 视频播放失败:', e)
      if (this.fallbackUrl) {
        uni.showToast({ title: '播放失败，切换到网页播放', icon: 'none' })
        this.useWebView = true
        return
      }

      if (this.detail && this.detail.videoUrl && this.isYouTubeUrl(this.detail.videoUrl)) {
        const embedUrl = this.convertYouTubeUrl(this.detail.videoUrl)
        if (embedUrl) {
          this.fallbackUrl = embedUrl
          this.useWebView = true
          uni.showToast({ title: '视频播放异常，已切换为网页播放', icon: 'none' })
          return
        }
      }

      uni.showToast({ title: '视频暂时无法播放', icon: 'none' })
    },
    
    goDock(url) {
      if (!url) return
      try {
        const pages = getCurrentPages()
        const cur = pages[pages.length - 1]
        if (cur && ('/' + cur.route) === url) return
      } catch (e) {}
      if (url === '/pages/index/index') {
        uni.reLaunch({ url })
      } else {
        uni.navigateTo({ url })
      }
    },

    // ===== 分享相关逻辑 =====
    async checkShareStatus() {
      try {
        if (!this.detail.id) return
        const res = await checkShared(this.detail.id, 'HERITAGE')
        if (res && (res.isShared === true || (res.data && res.data.isShared === true))) {
          this.shareState.hasShared = true
        }
      } catch (e) {
        console.error('[heritage-detail] 查询分享状态失败:', e)
      }
    },

    // 点击分享按钮（微信小程序会触发 onShareAppMessage）
    onShareClick() {
      // #ifdef MP-WEIXIN
      // 微信小程序中，点击 open-type="share" 的按钮会自动触发 onShareAppMessage
      // 这里可以做一些准备工作，比如记录分享行为
      console.log('[heritage-detail] 用户点击分享按钮，非遗ID:', this.id)
      // #endif
      
      // #ifndef MP-WEIXIN
      // 非微信小程序环境，提示用户
      uni.showToast({ title: '请在微信小程序中分享', icon: 'none' })
      // #endif
    },

    // 微信小程序分享配置
    onShareAppMessage(options) {
      console.log('[heritage-detail] onShareAppMessage 被调用', options)
      
      if (!this.id) {
        console.warn('[heritage-detail] 分享时非遗ID为空')
        return {
          title: '非遗详情',
          path: '/pages/heritage/index'
        }
      }

      // 构建分享路径，包含非遗ID
      const sharePath = `/pages/heritage/detail?id=${encodeURIComponent(this.id)}`
      
      // 分享标题：使用非遗名称（不包含"-陕游记"）
      const shareTitle = this.detail.name || '非遗详情'
      
      // 分享描述：使用历史渊源或内容介绍的前50个字符
      const shareDesc = (this.detail.history || this.detail.desc || '').substring(0, 50)
      
      console.log('[heritage-detail] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        desc: shareDesc,
        id: this.id
      })

      // 记录分享行为
      this.recordShareBehavior().catch(err => {
        console.error('[heritage-detail] 记录分享行为失败', err)
      })

      return {
        title: shareTitle,
        path: sharePath,
        imageUrl: this.detail.cover || this.poster // 分享卡片显示的图片
      }
    },

    async onSharePoster() {
      if (this.shareState.generating || this.shareState.hasShared) return

      // 仅在微信小程序环境下支持生成海报
      // #ifdef MP-WEIXIN
      this.shareState.generating = true
      uni.showLoading({ title: '生成中...', mask: true })
      try {
        const posterPath = await this.drawSharePoster()
        await this.savePosterToAlbum(posterPath)
        await this.recordShareBehavior()
        this.shareState.hasShared = true
      } catch (e) {
        console.error('[heritage-detail] 生成分享海报失败:', e)
      } finally {
        this.shareState.generating = false
        uni.hideLoading()
      }
      // #endif

      // #ifndef MP-WEIXIN
      uni.showToast({ title: '请在微信小程序中使用分享海报', icon: 'none' })
      // #endif
    },

    async drawSharePoster() {
      const ctx = uni.createCanvasContext('heritagePosterCanvas', this)
      const { detail } = this

      const W = 375
      const H = 640
      const pageBg = '#fffef7'
      const heroWrapBg = '#fff5dc'
      const titleBarColor = '#7A4E2D'
      const defaultCover = IMG.retouch_2025112414394823

      ctx.clearRect(0, 0, W, H)
      ctx.setFillStyle(pageBg)
      ctx.fillRect(0, 0, W, H)

      let coverPath = ''
      try {
        coverPath = await this.downloadImage(detail.cover || defaultCover)
      } catch (e) {
        console.warn('[heritage-detail] 封面下载失败，使用默认图:', e)
        coverPath = defaultCover
      }

      const paddingX = 16
      const heroY = 20
      const heroW = W - paddingX * 2
      const heroH = 190
      const heroInnerPadding = 14

      ctx.save()
      ctx.setShadow(0, 14, 32, 'rgba(0, 0, 0, 0.12)')
      this.fillRoundRect(ctx, paddingX, heroY, heroW, heroH, 24, heroWrapBg)
      ctx.restore()

      const imageX = paddingX + heroInnerPadding
      const imageY = heroY + heroInnerPadding
      const imageW = heroW - heroInnerPadding * 2
      const imageH = heroH - heroInnerPadding * 2
      this.addRoundRect(ctx, imageX, imageY, imageW, imageH, 18)
      ctx.drawImage(coverPath, imageX, imageY, imageW, imageH)
      ctx.restore()

      const nameBarY = heroY + heroH + 14
      const nameBarH = 60
      ctx.save()
      ctx.setShadow(0, 12, 26, 'rgba(0, 0, 0, 0.12)')
      this.fillRoundRect(ctx, paddingX, nameBarY, heroW, nameBarH, 20, titleBarColor)
      ctx.restore()
      ctx.setFillStyle('#ffffff')
      ctx.setFontSize(24)
      ctx.setTextAlign('center')
      ctx.setTextBaseline('middle')
      ctx.fillText(detail.name || '非遗项目', W / 2, nameBarY + nameBarH / 2)

      let sectionY = nameBarY + nameBarH + 14
      sectionY = this.drawSectionCard(ctx, {
        title: '历史渊源',
        content: detail.history || '暂无介绍',
        x: paddingX,
        y: sectionY,
        width: heroW,
        maxLines: 4
      }) + 14

      this.drawSectionCard(ctx, {
        title: '内容介绍',
        content: detail.desc || '暂无介绍',
        x: paddingX,
        y: sectionY,
        width: heroW,
        maxLines: 5
      })

      return new Promise((resolve, reject) => {
        ctx.draw(false, () => {
          uni.canvasToTempFilePath({
            canvasId: 'heritagePosterCanvas',
            width: W,
            height: H,
            destWidth: W * 2,
            destHeight: H * 2,
            fileType: 'png',
            quality: 1,
            success: (res) => resolve(res.tempFilePath),
            fail: (err) => {
              uni.showToast({ title: '导出图片失败', icon: 'none' })
              reject(err)
            }
          }, this)
        })
      })
    },

    downloadImage(url) {
      return new Promise((resolve, reject) => {
        if (!url) {
          return reject(new Error('图片地址为空'))
        }
        uni.getImageInfo({
          src: url,
          success: (res) => resolve(res.path),
          fail: (err) => reject(err)
        })
      })
    },

    savePosterToAlbum(filePath) {
      return new Promise((resolve, reject) => {
        uni.saveImageToPhotosAlbum({
          filePath,
          success: () => {
            uni.showToast({ title: '已保存到相册', icon: 'success' })
            resolve()
          },
          fail: (err) => {
            console.error('[heritage-detail] 保存海报失败:', err)
            if (err.errMsg && err.errMsg.includes('auth deny')) {
              uni.showModal({
                title: '需要授权',
                content: '请在设置中开启“保存到相册”后重试',
                confirmText: '去设置',
                success(res) {
                  if (res.confirm) {
                    uni.openSetting({})
                  }
                }
              })
            } else {
              uni.showToast({ title: '保存失败', icon: 'none' })
            }
            reject(err)
          }
        })
      })
    },

    async recordShareBehavior() {
      try {
        if (!this.detail.id) return
        await recordShare({
          targetId: this.detail.id,
          targetType: 'HERITAGE',
          shareChannel: 'WECHAT_POSTER',
          shareTitle: this.detail.name,
          shareDesc: this.detail.desc || this.detail.history || '',
          shareCover: this.detail.cover
        })
      } catch (e) {
        console.error('[heritage-detail] 分享埋点失败:', e)
      }
    },

    addRoundRect(ctx, x, y, w, h, r) {
      ctx.save()
      this.drawRoundRectPath(ctx, x, y, w, h, r)
      ctx.clip()
    },

    drawRoundRectPath(ctx, x, y, w, h, r) {
      const radius = Math.max(0, Math.min(r, w / 2, h / 2))
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + w - radius, y)
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius)
      ctx.lineTo(x + w, y + h - radius)
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h)
      ctx.lineTo(x + radius, y + h)
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
    },

    fillRoundRect(ctx, x, y, w, h, r, color) {
      ctx.save()
      this.drawRoundRectPath(ctx, x, y, w, h, r)
      ctx.setFillStyle(color)
      ctx.fill()
      ctx.restore()
    },

    drawSectionCard(ctx, options = {}) {
      const {
        title = '非遗项目',
        content = '暂无介绍',
        x = 0,
        y = 0,
        width = 0,
        maxLines = 4
      } = options
      const radius = 24
      const paddingX = 22
      const paddingY = 18
      const titleLines = 2
      const titleLineHeight = 26
      const bodyLineHeight = 24
      const bodyLines = Math.max(1, maxLines)
      const cardHeight = paddingY * 2 + titleLineHeight * titleLines + 8 + bodyLineHeight * bodyLines

      ctx.save()
      ctx.setShadow(0, 10, 24, 'rgba(0, 0, 0, 0.08)')
      this.fillRoundRect(ctx, x, y, width, cardHeight, radius, '#ffffff')
      ctx.restore()

      let cursorY = y + paddingY
      ctx.setFillStyle('#5a2c12')
      ctx.setFontSize(20)
      ctx.setTextAlign('left')
      ctx.setTextBaseline('top')
      this.drawMultilineText(
        ctx,
        title,
        x + paddingX,
        cursorY,
        width - paddingX * 2,
        titleLineHeight,
        titleLines
      )
      cursorY += titleLineHeight * titleLines + 8

      ctx.setFillStyle('#6b4a2e')
      ctx.setFontSize(16)
      const paragraph = content ? `　　${content}` : '　　暂无介绍'
      this.drawMultilineText(
        ctx,
        paragraph,
        x + paddingX,
        cursorY,
        width - paddingX * 2,
        bodyLineHeight,
        bodyLines
      )

      return y + cardHeight
    },

    drawMultilineText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
      if (!text) return
      const chars = String(text).split('')
      let line = ''
      let lineCount = 1
      for (let i = 0; i < chars.length; i += 1) {
        const testLine = line + chars[i]
        const measure = ctx.measureText(testLine)
        if (measure.width > maxWidth && i > 0) {
          ctx.fillText(line, x, y)
          line = chars[i]
          y += lineHeight
          lineCount += 1
          if (lineCount > maxLines) {
            ctx.fillText('...', x, y)
            return
          }
        } else {
          line = testLine
        }
      }
      if (line && lineCount <= maxLines) {
        ctx.fillText(line, x, y)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* 继承整体米白背景+柔和阴影与圆角，控制蓝/绿为低饱和度以不跳脱 */
$bg-page: #fffef7;
$text-brown: #5a2c12; /* 与其他页一致的文字主色 */
$blue-soft: #fff5dc;  /* 暖黄色，与项目主色调一致 */
$green-soft: #7A4E2D; /* 品牌棕色，统一视觉 */
$card-shadow: 0 10rpx 24rpx rgba(0,0,0,0.10);

.detail-page {
  min-height: 100vh;
  background: $bg-page;
  color: $text-brown;
  padding-bottom: 0;
}



/* 顶部媒体模块（蓝色背景容器） */
.media-wrap {
  margin: 16rpx 16rpx 10rpx;
  padding: 16rpx;
  background: $blue-soft;
  border-radius: 24rpx;
  box-shadow: $card-shadow;
  position: relative;
}
.media {
  width: 100%;
  height: 42vh; /* 下调视频高度，页面更紧凑 */
  border-radius: 16rpx;
  object-fit: cover;
  display: block;
  background: #0003;
}

.media-webview {
  border-radius: 16rpx;
  overflow: hidden;
}


/* 绿色名称条 */
.name-bar {
  margin: 12rpx 16rpx 16rpx;
  padding: 24rpx 22rpx;
  background: $green-soft;
  color: #fff;
  text-align: center; /* 名称文字居中 */
  border-radius: 20rpx;
  box-shadow: $card-shadow;
}
.heritage-name {
  font-size: 32rpx;
  font-weight: 700;
}

/* 内容卡片（延续白底圆角+柔和阴影） */
.section {
  margin: 12rpx 16rpx;
  background: #fff;
  border-radius: 24rpx;
  box-shadow: $card-shadow;
  overflow: hidden;
}
.section-title-row {
  padding: 20rpx 22rpx 8rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-title {
  font-size: 36rpx;
  font-weight: 600;
  color: $text-brown;
}

.section-share-icon {
  width: auto;
  height: auto;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  line-height: 1;
  /* 微信小程序 button 样式重置 */
  background-color: transparent;
  &::after {
    border: none;
  }
}

.section-share-icon-img {
  width: 48rpx;
  height: 48rpx;
}
.section-body {
  padding: 0 22rpx 22rpx;
}
.section-text {
  display: block; /* 设为块级，确保首行缩进生效 */
  font-size: 28rpx;
  line-height: 1.7;
  color: #6b4a2e;
  text-indent: 2em; /* 首行缩进 */
}

/* 底部操作按钮 */
.action-buttons {
  display: flex;
  gap: 20rpx;
  padding: 24rpx 16rpx;
  padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
  background: $bg-page;
}

.action-btn {
  flex: 1;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12rpx;
  border-radius: 20rpx;
  box-shadow: $card-shadow;
  font-size: 28rpx;
  font-weight: 600;
  transition: all 0.3s;
}

.action-btn.disabled {
  opacity: 0.6;
  pointer-events: none;
}

/* 已体验按钮 */
.experience-btn {
  background: #fff;
  color: $text-brown;
  border: 3rpx solid #cfa86a;
}

.experience-btn.active {
  background: #7A4E2D;
  color: #fff;
  border-color: #7A4E2D;
}

/* 收藏按钮 */
.favorite-btn {
  background: #fff;
  color: $text-brown;
  border: 3rpx solid #FFD666;
}

.favorite-btn.active {
  background: #FFD666;
  color: $text-brown;
  border-color: #FFC94D;
}

.btn-icon {
  font-size: 32rpx;
  line-height: 1;
}

.btn-text {
  font-size: 28rpx;
  font-weight: 600;
}

</style>
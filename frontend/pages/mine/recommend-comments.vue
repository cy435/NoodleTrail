<template>
  <page-meta page-style="overflow:auto;min-height:100vh" />
  <view class="records-page">
    <!-- 顶部统计卡片 -->
    <view class="header-card">
      <view class="header-title-row">
        <text class="header-title">推荐与评论记录</text>
        <text class="header-subtitle">查看你为陕味美食留下的足迹</text>
      </view>

      <view class="header-stats-row">
        <view class="stat-pill">
          <text class="stat-number">{{ stats.recommendCount }}</text>
          <text class="stat-label">推荐菜</text>
        </view>
        <view class="stat-pill">
          <text class="stat-number">{{ stats.commentCount }}</text>
          <text class="stat-label">评论</text>
        </view>
      </view>
    </view>

    <!-- 主 Tab：推荐 / 评论 -->
    <view class="main-tabs">
      <view
        class="main-tab"
        :class="{ 'main-tab--active': activeTab === 'recommend' }"
        @tap="switchTab('recommend')"
      >
        推荐菜
      </view>
      <view
        class="main-tab"
        :class="{ 'main-tab--active': activeTab === 'comment' }"
        @tap="switchTab('comment')"
      >
        评论
      </view>
    </view>

    <!-- 加载状态 -->
    <view v-if="loading" class="loading-block">
      <text>加载中...</text>
    </view>

    <!-- 推荐列表 -->
    <view v-else-if="activeTab === 'recommend'" class="content-section">
      <view v-if="recommendList.length === 0" class="empty-state">
        <view class="empty-icon">🍜</view>
        <text class="empty-text">还没有推荐过菜品</text>
        <text class="empty-hint">去美食门店页面推荐你喜欢的菜品吧～</text>
      </view>
      <view v-else class="records-list">
        <view
          v-for="item in recommendList"
          :key="item.id"
          class="record-card recommend-card"
          @tap="openPoiDetail(item)"
        >
          <view class="record-image-wrapper">
            <image
              v-if="getRecommendImage(item) && !item._imageError"
              class="record-image"
              :src="getRecommendImage(item)"
              mode="aspectFill"
              @error="handleRecommendImageError(item, $event)"
              :lazy-load="true"
            />
            <!-- 图片加载失败时或无图片时的占位图 -->
            <view v-if="!getRecommendImage(item) || item._imageError" class="image-placeholder">
              <text class="placeholder-icon">🍜</text>
              <text class="placeholder-text">{{ !getRecommendImage(item) ? '暂无图片' : '图片加载失败' }}</text>
            </view>
          </view>
          <view class="record-content">
            <view class="record-header">
              <view class="record-tag record-tag--recommend">
                <text>🍜 推荐菜</text>
              </view>
              <text class="record-date">{{ formatDate(item.createdAt || item.createTime || item.timestamp) }}</text>
            </view>
            <view class="record-main">
              <text class="record-title">{{ getDishName(item) }}</text>
              <text class="record-subtitle">📍 {{ getShopName(item) }}</text>
              <text v-if="item.remark || item.description" class="record-remark">{{ item.remark || item.description }}</text>
              <view v-if="item.price || item.avgPrice" class="record-price">
                <text class="price-label">价格：</text>
                <text class="price-value">¥{{ item.price || item.avgPrice }}</text>
              </view>
            </view>
            <view class="record-meta">
              <view class="meta-left">
                <text class="meta-city">📍 {{ getShopCity(item) }}</text>
              </view>
              <view class="meta-right">
                <view class="meta-actions">
                  <text class="meta-badge">已推荐</text>
                  <view 
                    class="delete-btn"
                    :class="{ 'deleting': deletingIds[item.id] }"
                    @tap.stop="handleDeleteRecommend(item)"
                  >
                    <text class="delete-icon">🗑️</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 评论列表 -->
    <view v-else class="content-section">
      <view v-if="commentList.length === 0" class="empty-state">
        <view class="empty-icon">💬</view>
        <text class="empty-text">还没有发表过评论</text>
        <text class="empty-hint">去美食门店页面分享你的用餐体验吧～</text>
      </view>
      <view v-else class="records-list">
        <view
          v-for="item in commentList"
          :key="item.id"
          class="record-card comment-card"
          @tap="openPoiDetail(item)"
        >
          <view class="record-content">
            <view class="record-header">
              <view class="record-tag record-tag--comment">
                <text>💬 评论</text>
              </view>
              <text class="record-date">{{ formatDate(item.createdAt || item.createTime || item.timestamp) }}</text>
            </view>
            <view class="record-main">
              <text class="record-title">📍 {{ getShopName(item) }}</text>
              <view v-if="item.score" class="comment-score">
                <text
                  v-for="(star, index) in getScoreStars(item.score)"
                  :key="index"
                  :class="['score-star', star === 'full' ? 'score-star--full' : 'score-star--empty']"
                >★</text>
                <text class="score-value">{{ item.score }}分</text>
              </view>
              <text v-if="item.content || item.comment" class="record-content-text">{{ item.content || item.comment }}</text>
              <view v-if="getCommentImages(item).length > 0" class="comment-images">
                <view
                  v-for="(img, index) in getCommentImages(item)"
                  :key="index"
                  class="comment-image-wrapper"
                >
                  <image
                    class="comment-image"
                    :src="img"
                    mode="aspectFill"
                    @error="handleCommentImageError(item, index, $event)"
                    @tap.stop="previewImage(img, getCommentImages(item))"
                    :lazy-load="true"
                  />
                  <!-- 图片加载失败时的占位图 -->
                  <view v-if="item._commentImageErrors && item._commentImageErrors[index]" class="image-placeholder image-placeholder--small">
                    <text class="placeholder-icon">📷</text>
                  </view>
                </view>
              </view>
            </view>
            <view class="record-meta">
              <view class="meta-left">
                <text class="meta-city">📍 {{ getShopCity(item) }}</text>
              </view>
              <view class="meta-right">
                <view class="meta-actions">
                  <text class="meta-badge">已评论</text>
                  <view 
                    class="delete-btn"
                    :class="{ 'deleting': deletingIds[item.id] }"
                    @tap.stop="handleDeleteComment(item)"
                  >
                    <text class="delete-icon">🗑️</text>
                  </view>
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
const { getMyRecommendations, getMyComments, deleteRecommendDish, deletePoiComment, getPoiDetail } = require('../../api/map.js')

export default {
  name: 'RecommendComments',
  data() {
    return {
      loading: false,
      activeTab: 'recommend', // recommend | comment
      recommendList: [],
      commentList: [],
      stats: {
        recommendCount: 0,
        commentCount: 0
      },
      // 门店信息缓存（key: poiId, value: { name, city, address }）
      poiInfoCache: {},
      deletingIds: {} // 正在删除的ID集合（key: id, value: true）
    }
  },
  onLoad() {
    this.loadData()
  },
  onShow() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      try {
        await Promise.all([
          this.loadRecommendations(),
          this.loadComments()
        ])
      } catch (err) {
        console.error('[RecommendComments] loadData error:', err)
        uni.showToast({ title: '加载失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    async loadRecommendations() {
      try {
        const list = await getMyRecommendations({ page: 1, size: 100 })
        this.recommendList = Array.isArray(list) ? list : []
        this.stats.recommendCount = this.recommendList.length
        // 批量加载门店信息
        await this.loadPoiInfosForList(this.recommendList)
      } catch (err) {
        console.error('[RecommendComments] loadRecommendations error:', err)
        this.recommendList = []
        this.stats.recommendCount = 0
      }
    },

    async loadComments() {
      try {
        const list = await getMyComments({ page: 1, size: 100 })
        this.commentList = Array.isArray(list) ? list : []
        this.stats.commentCount = this.commentList.length
        // 批量加载门店信息
        await this.loadPoiInfosForList(this.commentList)
      } catch (err) {
        console.error('[RecommendComments] loadComments error:', err)
        this.commentList = []
        this.stats.commentCount = 0
      }
    },

    switchTab(tab) {
      if (this.activeTab === tab) {
        return
      }
      this.activeTab = tab
    },

    openPoiDetail(item) {
      const poiId = item.poiId || item.shopId
      if (!poiId) {
        return
      }
      uni.navigateTo({
        url: `/pages/index/FoodPoiDetail?id=${poiId}`
      })
    },

    previewImage(current, urls) {
      // 过滤掉无效的图片URL
      const validUrls = (urls || [current]).filter(url => this.isValidImageUrl(url))
      if (validUrls.length === 0) {
        uni.showToast({ title: '图片加载失败', icon: 'none' })
        return
      }
      uni.previewImage({
        current: current,
        urls: validUrls
      })
    },
    
    // 处理推荐菜图片加载错误
    handleRecommendImageError(item, e) {
      console.warn('[RecommendComments] 推荐菜图片加载失败:', item.id, e)
      // 标记图片加载失败，显示占位图
      this.$set(item, '_imageError', true)
    },
    
    // 处理评论图片加载错误
    handleCommentImageError(item, index, e) {
      console.warn('[RecommendComments] 评论图片加载失败:', item.id, index, e)
      // 标记该索引的图片加载失败
      if (!item._commentImageErrors) {
        this.$set(item, '_commentImageErrors', {})
      }
      this.$set(item._commentImageErrors, index, true)
    },

    getScoreStars(score) {
      const stars = []
      const fullStars = Math.floor(score || 0)
      for (let i = 0; i < 5; i++) {
        stars.push(i < fullStars ? 'full' : 'empty')
      }
      return stars
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

    // 获取菜名（兼容多种字段）
    getDishName(item) {
      return item.dishName || item.name || item.dish || '推荐菜品'
    },

    // 获取门店名（兼容多种字段）
    getShopName(item) {
      const poiId = item.poiId || item.shopId
      if (poiId && this.poiInfoCache[poiId]) {
        return this.poiInfoCache[poiId].name || '美食门店'
      }
      return item.poiName || item.shopName || item.poi?.name || item.shop?.name || item.storeName || '美食门店'
    },

    // 获取门店地址（兼容多种字段）
    getShopAddress(item) {
      const poiId = item.poiId || item.shopId
      if (poiId && this.poiInfoCache[poiId]) {
        return this.poiInfoCache[poiId].address || ''
      }
      return item.poiAddress || item.address || item.poi?.address || item.shop?.address || item.storeAddress || ''
    },

    // 获取门店城市（兼容多种字段）
    getShopCity(item) {
      const poiId = item.poiId || item.shopId
      if (poiId && this.poiInfoCache[poiId]) {
        return this.poiInfoCache[poiId].city || '陕西'
      }
      return item.city || item.poiCity || item.poi?.city || item.shop?.city || '陕西'
    },

    // 获取推荐菜图片（兼容多种字段，过滤无效值）
    getRecommendImage(item) {
      const candidates = [
        item.image,
        item.dishImage,
        item.imageUrl,
        item.cover,
        item.thumbnail,
        item.poi?.cover
      ]
      
      for (const url of candidates) {
        if (this.isValidImageUrl(url)) {
          return url
        }
      }
      
      return ''
    },
    
    // 验证图片URL是否有效
    isValidImageUrl(url) {
      if (!url || typeof url !== 'string') {
        return false
      }
      
      const trimmed = url.trim()
      
      // 过滤空字符串
      if (trimmed === '') {
        return false
      }
      
      // 过滤常见的无效值字符串
      const invalidValues = ['null', 'undefined', 'none', 'N/A']
      const lowerTrimmed = trimmed.toLowerCase()
      if (invalidValues.includes(lowerTrimmed)) {
        return false
      }
      
      // 过滤临时文件路径（这些路径会过期，不应该显示）
      if (trimmed.startsWith('tmp/') || 
          trimmed.startsWith('http://tmp/') || 
          trimmed.startsWith('https://tmp/') ||
          trimmed.includes('/tmp/')) {
        console.warn('[RecommendComments] 过滤掉临时路径:', trimmed)
        return false
      }
      
      // 检查是否是有效的URL格式（优先使用服务器返回的 URL）
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return true
      }
      
      // 检查是否是本地路径（相对路径，如 /uploads/xxx.jpg）
      if (trimmed.startsWith('/')) {
        return true
      }
      
      // 检查是否是base64格式
      if (trimmed.startsWith('data:image/')) {
        return true
      }
      
      // 其他情况也允许（可能是相对路径或其他格式）
      return trimmed.length > 0
    },

    // 获取评论图片（兼容多种字段，过滤无效值）
    getCommentImages(item) {
      const result = []
      
      // 处理数组格式的图片
      if (Array.isArray(item.images)) {
        item.images.forEach(img => {
          if (this.isValidImageUrl(img)) {
            result.push(img)
          }
        })
      } else if (typeof item.images === 'string' && item.images.trim()) {
        // 处理逗号分隔的字符串格式（后端可能返回这种格式）
        const urlArray = item.images.split(',').map(url => url.trim()).filter(Boolean)
        urlArray.forEach(img => {
          if (this.isValidImageUrl(img) && !result.includes(img)) {
            result.push(img)
          }
        })
      }
      
      if (Array.isArray(item.imageUrls)) {
        item.imageUrls.forEach(img => {
          if (this.isValidImageUrl(img) && !result.includes(img)) {
            result.push(img)
          }
        })
      }
      
      if (Array.isArray(item.photos)) {
        item.photos.forEach(img => {
          if (this.isValidImageUrl(img) && !result.includes(img)) {
            result.push(img)
          }
        })
      }
      
      if (Array.isArray(item.pictures)) {
        item.pictures.forEach(img => {
          if (this.isValidImageUrl(img) && !result.includes(img)) {
            result.push(img)
          }
        })
      }
      
      // 处理单个图片字段
      if (this.isValidImageUrl(item.image) && !result.includes(item.image)) {
        result.push(item.image)
      }
      
      if (this.isValidImageUrl(item.imageUrl) && !result.includes(item.imageUrl)) {
        result.push(item.imageUrl)
      }
      
      if (this.isValidImageUrl(item.photo) && !result.includes(item.photo)) {
        result.push(item.photo)
      }
      
      // 尝试解析 JSON 字符串
      if (typeof item.imagesJson === 'string') {
        try {
          const parsed = JSON.parse(item.imagesJson)
          if (Array.isArray(parsed)) {
            parsed.forEach(img => {
              if (this.isValidImageUrl(img) && !result.includes(img)) {
                result.push(img)
              }
            })
          }
        } catch (e) {
          // 解析失败，忽略
        }
      }
      
      // 调试日志：如果结果为空，记录一下数据结构
      if (result.length === 0 && item.id) {
        console.log('[RecommendComments] 评论图片为空，item数据:', {
          id: item.id,
          images: item.images,
          imageUrls: item.imageUrls,
          photos: item.photos,
          pictures: item.pictures,
          image: item.image,
          imageUrl: item.imageUrl,
          photo: item.photo,
          imagesJson: item.imagesJson
        })
      }
      
      return result
    },

    // 批量加载门店信息
    async loadPoiInfosForList(list) {
      if (!Array.isArray(list) || list.length === 0) {
        return
      }
      
      // 收集需要获取的poiId和对应的type（去重）
      const poiInfoMap = new Map() // key: poiId, value: { type, item }
      list.forEach(item => {
        const poiId = item.poiId || item.shopId
        if (poiId && !this.poiInfoCache[poiId]) {
          // 尝试从数据中获取type，如果没有则默认为1（美食）
          let poiType = item.type || item.poiType
          // 如果type是字符串，转换为数字
          if (poiType === 'food' || poiType === 1 || poiType === '1') {
            poiType = 1
          } else if (poiType === 'scenic' || poiType === 2 || poiType === '2') {
            poiType = 2
          } else if (poiType === 'heritage' || poiType === 3 || poiType === '3') {
            poiType = 3
          } else {
            // 默认使用美食类型（1）
            poiType = 1
          }
          
          if (!poiInfoMap.has(poiId)) {
            poiInfoMap.set(poiId, { type: poiType, item })
          }
        }
      })

      // 批量获取门店信息（限制并发数）
      const poiInfoArray = Array.from(poiInfoMap.entries())
      const batchSize = 5 // 每次并发5个
      for (let i = 0; i < poiInfoArray.length; i += batchSize) {
        const batch = poiInfoArray.slice(i, i + batchSize)
        await Promise.all(
          batch.map(([poiId, info]) => this.loadPoiInfo(poiId, info.type))
        )
      }
    },

    // 加载单个门店信息
    async loadPoiInfo(poiId, type = 1) {
      if (!poiId || this.poiInfoCache[poiId]) {
        return
      }

      // 确保type是数字类型，默认为1（美食）
      let poiType = Number(type) || 1
      if (poiType < 1 || poiType > 3) {
        console.warn(`[RecommendComments] 无效的type值: ${type}，使用默认值1`)
        poiType = 1
      }

      try {
        const response = await getPoiDetail({ id: poiId, type: poiType })
        if (!response || response.success === false) {
          throw new Error('获取门店信息失败')
        }
        
        // 解析返回数据结构：可能是 { data: { poi: {...} } } 或 { poi: {...} } 或直接是 poi 对象
        const data = response.data || response
        const poi = data.poi || data
        
        if (poi) {
          this.$set(this.poiInfoCache, poiId, {
            name: poi.name || poi.poiName || '美食门店',
            city: poi.city || '陕西',
            address: poi.address || poi.poiAddress || ''
          })
          console.log(`[RecommendComments] 成功加载门店信息: ${poiId} -> ${poi.name || '美食门店'}`)
          // 强制更新视图，确保门店名字能正确显示
          this.$forceUpdate()
        } else {
          throw new Error('门店数据格式不正确')
        }
      } catch (err) {
        console.error(`[RecommendComments] loadPoiInfo error for poiId ${poiId}, type ${poiType}:`, err)
        // 失败时设置默认值
        this.$set(this.poiInfoCache, poiId, {
          name: '美食门店',
          city: '陕西',
          address: ''
        })
        // 即使失败也强制更新视图
        this.$forceUpdate()
      }
    },

    // 删除推荐菜
    async handleDeleteRecommend(item) {
      if (!item.id) {
        uni.showToast({ title: '删除失败：缺少ID', icon: 'none' })
        return
      }

      uni.showModal({
        title: '确认删除',
        content: `确定要删除推荐的"${this.getDishName(item)}"吗？`,
        success: async (res) => {
          if (res.confirm) {
            this.$set(this.deletingIds, item.id, true)
            try {
              const result = await deleteRecommendDish(item.id)
              if (result !== null) {
                uni.showToast({ title: '删除成功', icon: 'success' })
                // 从列表中移除
                const index = this.recommendList.findIndex(r => r.id === item.id)
                if (index !== -1) {
                  this.recommendList.splice(index, 1)
                  this.stats.recommendCount = this.recommendList.length
                }
              } else {
                uni.showToast({ title: '删除失败', icon: 'none' })
              }
            } catch (err) {
              console.error('[RecommendComments] deleteRecommend error:', err)
              uni.showToast({ title: '删除失败', icon: 'none' })
            } finally {
              this.$delete(this.deletingIds, item.id)
            }
          }
        }
      })
    },

    // 删除评论
    async handleDeleteComment(item) {
      if (!item.id) {
        uni.showToast({ title: '删除失败：缺少ID', icon: 'none' })
        return
      }

      uni.showModal({
        title: '确认删除',
        content: '确定要删除这条评论吗？',
        success: async (res) => {
          if (res.confirm) {
            this.$set(this.deletingIds, item.id, true)
            try {
              const result = await deletePoiComment(item.id)
              if (result !== null) {
                uni.showToast({ title: '删除成功', icon: 'success' })
                // 从列表中移除
                const index = this.commentList.findIndex(c => c.id === item.id)
                if (index !== -1) {
                  this.commentList.splice(index, 1)
                  this.stats.commentCount = this.commentList.length
                }
              } else {
                uni.showToast({ title: '删除失败', icon: 'none' })
              }
            } catch (err) {
              console.error('[RecommendComments] deleteComment error:', err)
              uni.showToast({ title: '删除失败', icon: 'none' })
            } finally {
              this.$delete(this.deletingIds, item.id)
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.records-page {
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

.stat-number {
  display: block;
  font-size: 30rpx;
  font-weight: 700;
  color: #ffffff;
}

.stat-label {
  display: block;
  margin-top: 4rpx;
  font-size: 22rpx;
  color: #fffbe7;
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

.loading-block {
  padding: 80rpx 20rpx;
  text-align: center;
  color: #8c5c2a;
}

.content-section {
  margin-top: 8rpx;
}

.empty-state {
  padding: 80rpx 20rpx;
  text-align: center;
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

.recommend-card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0;
  overflow: hidden;
  min-height: 200rpx;
}

.recommend-card::before {
  display: none;
}

.record-image-wrapper {
  width: 200rpx;
  flex-shrink: 0;
  overflow: hidden;
  background: #f5f5f5;
  border-radius: 12rpx 0 0 12rpx;
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}

.record-image {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: block;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.record-image-wrapper .image-placeholder {
  border-radius: 12rpx 0 0 12rpx;
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.record-content {
  flex: 1;
  padding: 16rpx 18rpx 14rpx;
  display: flex;
  flex-direction: column;
  position: relative;
}

.recommend-card .record-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6rpx;
  background: linear-gradient(180deg, #ffb74d 0%, #ff8a65 100%);
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

.record-tag--recommend {
  background: linear-gradient(90deg, #ffecc7 0%, #ffd98a 100%);
  color: #7b2f00;
}

.record-tag--comment {
  background: linear-gradient(90deg, #d3e5ff 0%, #b3d5ff 100%);
  color: #1a5490;
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

.record-remark {
  display: block;
  margin-top: 8rpx;
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
}

.record-price {
  margin-top: 8rpx;
  display: flex;
  align-items: center;
  gap: 4rpx;
}

.price-label {
  font-size: 22rpx;
  color: #8c5c2a;
}

.price-value {
  font-size: 24rpx;
  font-weight: 700;
  color: #ff9800;
}

.record-content-text {
  display: block;
  margin-top: 8rpx;
  font-size: 24rpx;
  color: #5a2c12;
  line-height: 1.6;
}

.comment-score {
  margin-top: 8rpx;
  display: flex;
  align-items: center;
  gap: 4rpx;
}

.score-star {
  font-size: 24rpx;
}

.score-star--full {
  color: #ff9800;
}

.score-star--empty {
  color: #e0e0e0;
}

.score-value {
  margin-left: 4rpx;
  font-size: 22rpx;
  color: #8c5c2a;
  font-weight: 600;
}

.comment-images {
  margin-top: 12rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}

.comment-image-wrapper {
  position: relative;
  width: 120rpx;
  height: 120rpx;
}

.comment-image {
  width: 100%;
  height: 100%;
  border-radius: 8rpx;
  background: #f5f5f5;
  object-fit: cover;
  border: 1rpx solid #e8d4b8;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 12rpx;
  border: 1rpx dashed #e8d4b8;
}

.image-placeholder--small {
  border-radius: 8rpx;
}

.placeholder-icon {
  font-size: 32rpx;
  margin-bottom: 4rpx;
}

.image-placeholder--small .placeholder-icon {
  font-size: 24rpx;
  margin-bottom: 0;
}

.placeholder-text {
  font-size: 20rpx;
  color: #b79a78;
}

.image-placeholder--small .placeholder-text {
  display: none;
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

.meta-right {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.meta-actions {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.meta-badge {
  font-size: 20rpx;
  padding: 2rpx 10rpx;
  border-radius: 8rpx;
  background: #ffecc7;
  color: #7b2f00;
  font-weight: 600;
}

.delete-btn {
  width: 48rpx;
  height: 48rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 87, 34, 0.1);
  border: 1rpx solid rgba(255, 87, 34, 0.3);
  transition: all 0.3s ease;
}

.delete-btn:active {
  background: rgba(255, 87, 34, 0.2);
  transform: scale(0.9);
}

.delete-btn.deleting {
  opacity: 0.5;
  pointer-events: none;
}

.delete-icon {
  font-size: 28rpx;
  line-height: 1;
}
</style>


<template>
  <page-meta page-style="overflow:auto;min-height:100vh" />
  <view class="checkin-records-page">
    <view class="page-header">
      <text class="page-title">✓ 美食打卡记录</text>
      <text class="page-subtitle">累计打卡 {{ totalCount }} 次</text>
    </view>

    <view v-if="loading" class="loading">
      <text>加载中...</text>
    </view>

    <view v-else-if="checkins.length === 0" class="empty">
      <text class="empty-text">暂无打卡记录</text>
      <text class="empty-hint">去发布你的第一个打卡吧~</text>
    </view>

    <scroll-view v-else class="content-scroll" scroll-y>
      <view v-for="(item, index) in checkins" :key="item.id || index" class="checkin-card">
        <view class="delete-checkin-btn" @tap.stop="onDeleteCheckin(index)">
          <text class="delete-checkin-text">删除</text>
        </view>
        <!-- 图片区域 -->
        <view v-if="item.images && item.images.length > 0" class="images-row">
          <image
            v-for="(img, imgIndex) in item.images.slice(0, 3)"
            :key="imgIndex"
            :src="getImageUrl(img)"
            class="checkin-image"
            mode="aspectFill"
            @tap="previewImages(item.images, imgIndex)"
          />
        </view>
        
        <!-- 文案内容 -->
        <view class="content-section">
          <text class="checkin-content">{{ item.content || item.caption || '' }}</text>
        </view>
        
        <!-- 位置和日期信息 -->
        <view class="meta-section">
          <view class="meta-bottom-row">
            <view v-if="item.locationName || item.location" class="location-info">
              <text class="location-icon">📍</text>
              <text class="location-text">{{ item.locationName || item.location || '未知位置' }}</text>
            </view>
            <view class="time-info">
              <text class="time-icon">🕐</text>
              <text class="time-text">{{ formatTime(item.createdAt || item.createTime || item.timestamp) }}</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
const { getMyCheckins, loadMyCheckins, deleteCheckin } = require('../../api/checkin.js')
const { IMG } = require('../../api/imageMap.js')


export default {
  name: 'CheckinRecords',
  data() {
    return {
      checkins: [],
      loading: false,
      totalCount: 0
    }
  },
  onLoad() {
    this.loadCheckins()
  },
  onShow() {
    this.loadCheckins()
  },
  methods: {
    async loadCheckins() {
      try {
        this.loading = true
        
        // 尝试使用 loadMyCheckins 函数
        let result = []
        try {
          result = await loadMyCheckins(1, 100)
        } catch (e) {
          // 如果失败，尝试直接调用 getMyCheckins
          const res = await getMyCheckins({ page: 1, size: 100 })
          if (Array.isArray(res)) {
            result = res
          } else if (res && res.data) {
            if (Array.isArray(res.data)) {
              result = res.data
            } else if (res.data.list && Array.isArray(res.data.list)) {
              result = res.data.list
            }
          }
        }

        // 如果服务端没有返回数据，尝试使用本地 noodle_posts_all 兜底
        if (!result || result.length === 0) {
          try {
            const local = uni.getStorageSync('noodle_posts_all')
            if (Array.isArray(local) && local.length > 0) {
              result = local.map(item => ({
                ...item,
                _source: 'local'
              }))
            }
          } catch (_) {}
        }
        
        // 处理图片字段（可能是 images, imageUrls, imageList 等）
        this.checkins = result.map(item => {
          let images = []
          const rawImages = item.images || item.imageUrls || item.imageList || item.imageUrl || item.imgs
          
          if (Array.isArray(rawImages)) {
            images = rawImages
          } else if (typeof rawImages === 'string' && rawImages.trim()) {
            let parsed = []
            try {
              const maybe = JSON.parse(rawImages)
              if (Array.isArray(maybe)) {
                parsed = maybe
              }
            } catch (e) {}
            if (parsed.length === 0) {
              parsed = rawImages
                .split(/[,;]/)
                .map(s => s.trim())
                .filter(Boolean)
            }
            images = parsed
          } else if (rawImages) {
            images = [rawImages]
          }
          
          return {
            ...item,
            images: images
          }
        })
        
        this.totalCount = this.checkins.length
      } catch (err) {
        console.error('加载打卡记录失败:', err)
        uni.showToast({ title: '加载失败', icon: 'none' })
        this.checkins = []
        this.totalCount = 0
      } finally {
        this.loading = false
      }
    },
    
    getImageUrl(url) {
      const fallback = IMG.retouch_2025112414392946
      if (!url) {
        return fallback
      }
      if (typeof url === 'object' && url.url) {
        url = url.url
      }
      if (typeof url !== 'string') {
        return fallback
      }
      // 如果是相对路径，可能需要添加基础URL
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return url
      }
      if (url.startsWith('/')) {
        return url
      }
      return url
    },
    
    previewImages(images, currentIndex) {
      if (!images || images.length === 0) return
      const urls = images.map(img => this.getImageUrl(img))
      uni.previewImage({
        current: currentIndex,
        urls: urls
      })
    },
    
    formatTime(timestamp) {
      if (!timestamp) return '未知时间'
      try {
        if (typeof timestamp === 'string') {
          const match = timestamp.match(/^(\d{4}-\d{2}-\d{2})/)
          if (match) {
            return match[1]
          }
        }
        const date = new Date(timestamp)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
      } catch (e) {
        return String(timestamp)
      }
    },

    onDeleteCheckin(index) {
      if (typeof index !== 'number') {
        console.warn('[onDeleteCheckin] 收到的 index 非数字:', index)
        uni.showToast({ title: '记录信息不完整', icon: 'none' })
        return
      }

      const item = this.checkins[index]
      if (!item) {
        console.warn('[onDeleteCheckin] 根据 index 找不到打卡记录:', index, this.checkins)
        uni.showToast({ title: '记录信息不完整', icon: 'none' })
        return
      }

      // 本地打卡记录（来源于 noodle_posts_all）的删除逻辑
      if (item._source === 'local') {
        uni.showModal({
          title: '删除打卡记录',
          content: '删除后将无法恢复，确认删除这条打卡吗？',
          success: (res) => {
            if (!res.confirm) {
              return
            }
            try {
              const storageKey = 'noodle_posts_all'
              let stored = []
              try {
                stored = uni.getStorageSync(storageKey) || []
              } catch (_) {
                stored = []
              }
              if (Array.isArray(stored)) {
                stored = stored.filter((p, idx) => idx !== index && p.id !== item.id)
              }
              this.checkins = this.checkins.filter((_, idx) => idx !== index)
              this.totalCount = this.checkins.length
              uni.setStorageSync(storageKey, stored)
              uni.showToast({ title: '已删除本地打卡', icon: 'success' })
            } catch (err) {
              console.error('删除本地打卡记录失败:', err)
              uni.showToast({ title: '删除失败', icon: 'none' })
            }
          }
        })
        return
      }

      const id = item.id || item.checkinId || item.checkInId || item.recordId
      if (!id) {
        console.warn('[onDeleteCheckin] 无法从打卡记录中找到ID字段:', item)
        uni.showToast({ title: '记录信息不完整', icon: 'none' })
        return
      }

      uni.showModal({
        title: '删除打卡记录',
        content: '删除后将无法恢复，确认删除这条打卡吗？',
        success: async (res) => {
          if (!res.confirm) {
            return
          }
          try {
            uni.showLoading({ title: '删除中...', mask: true })
            await deleteCheckin(id)

            // 更新当前页面列表
            this.checkins = this.checkins.filter(c => c.id !== id)
            this.totalCount = this.checkins.length

            // 同步更新全局美食打卡本地缓存（供面食城市页兜底使用）
            try {
              const storageKey = 'noodle_posts_all'
              let stored = []
              try {
                stored = uni.getStorageSync(storageKey) || []
              } catch (_) {
                stored = []
              }
              if (Array.isArray(stored) && stored.length > 0) {
                stored = stored.filter(p => (p.id !== id) && (p.checkinId !== id))
                uni.setStorageSync(storageKey, stored)
              }
            } catch (e) {
              console.warn('同步全局打卡本地缓存失败:', e)
            }

            uni.showToast({ title: '删除成功', icon: 'success' })
          } catch (err) {
            console.error('删除打卡记录失败:', err)
            uni.showToast({ title: '删除失败', icon: 'none' })
          } finally {
            uni.hideLoading()
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.checkin-records-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
  padding-bottom: 40rpx;
}

.page-header {
  padding: 32rpx 28rpx 24rpx;
  background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
  border-bottom-left-radius: 24rpx;
  border-bottom-right-radius: 24rpx;
  box-shadow: 0 4rpx 12rpx rgba(255, 152, 0, 0.3);
}

.page-title {
  display: block;
  font-size: 36rpx;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8rpx;
}

.page-subtitle {
  display: block;
  font-size: 24rpx;
  color: #fff9e6;
}

.loading, .empty {
  padding: 120rpx 28rpx;
  text-align: center;
}

.empty-text {
  display: block;
  font-size: 28rpx;
  color: #8c5c2a;
  margin-bottom: 12rpx;
}

.empty-hint {
  display: block;
  font-size: 24rpx;
  color: #999;
}

.content-scroll {
  height: calc(100vh - 200rpx);
  padding: 20rpx 30rpx 20rpx 10rpx;
}

.checkin-card {
  background: #fff5e6;
  border-radius: 20rpx;
  padding: 24rpx;
  margin: 0 20rpx 20rpx 0;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  border: 3rpx solid #e8d4b8;
  position: relative;
}

.images-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rpx;
  margin-bottom: 16rpx;
}

.checkin-image {
  width: 100%;
  height: 200rpx;
  border-radius: 12rpx;
  background: #f0e6d8;
}

.content-section {
  margin-bottom: 16rpx;
  padding-bottom: 16rpx;
  border-bottom: 2rpx dashed #cfa86a;
}

.checkin-content {
  font-size: 32rpx;
  color: #5a2c12;
  line-height: 1.6;
  display: block;
}

.meta-section {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.meta-bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16rpx;
}

.delete-checkin-btn {
  position: absolute;
  right: 10rpx;
  top: 10rpx;
  background: #7b2f00;
  border-radius: 999px;
  padding: 2rpx 10rpx;
}

.delete-checkin-text {
  font-size: 22rpx;
  color: #ffffff;
}

.location-info, .time-info {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.location-icon, .time-icon {
  font-size: 24rpx;
  flex-shrink: 0;
}

.location-text, .time-text {
  font-size: 24rpx;
  color: #8c5c2a;
  flex: 1;
}
</style>

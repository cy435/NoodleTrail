<template>
  <page-meta page-style="overflow:auto;min-height:100vh" />
  <view class="heritage-records-page">
    <view class="page-header">
      <text class="page-title">🎭 非遗体验记录</text>
      <view class="stats-row">
        <view class="stat-item">
          <text class="stat-value">{{ records.experiencedCount }}</text>
          <text class="stat-label">已体验</text>
        </view>
        <view class="stat-divider"></view>
        <view class="stat-item">
          <text class="stat-value">{{ records.favoriteCount }}</text>
          <text class="stat-label">已收藏</text>
        </view>
      </view>
    </view>

    <view class="tabs">
      <view 
        class="tab-item" 
        :class="{ active: activeTab === 'experienced' }"
        @tap="switchTab('experienced')"
      >
        <text class="tab-text">已体验 ({{ records.experiencedCount }})</text>
      </view>
      <view 
        class="tab-item" 
        :class="{ active: activeTab === 'favorite' }"
        @tap="switchTab('favorite')"
      >
        <text class="tab-text">已收藏 ({{ records.favoriteCount }})</text>
      </view>
    </view>

    <view v-if="loading" class="loading">
      <text>加载中...</text>
    </view>

    <view v-else-if="currentList.length === 0" class="empty">
      <text class="empty-text">{{ activeTab === 'experienced' ? '暂无体验记录' : '暂无收藏记录' }}</text>
      <text class="empty-hint">去探索更多非遗项目吧~</text>
    </view>

    <scroll-view v-else class="content-scroll" scroll-y>
        <view 
        v-for="item in currentList" 
        :key="item.id" 
        class="heritage-card"
        @tap="goToDetail(item)"
      >
        <image 
          class="heritage-image" 
          :src="getImageUrl(item)" 
          mode="aspectFill"
        />
        <view class="heritage-info">
          <text class="heritage-name">{{ item.name || item.heritageName || '非遗项目' }}</text>
          <text v-if="item.category" class="heritage-category">{{ item.category }}</text>
          <text v-if="item.contentIntroduction || item.description" class="heritage-desc">
            {{ (item.contentIntroduction || item.description || '').substring(0, 60) }}{{ (item.contentIntroduction || item.description || '').length > 60 ? '...' : '' }}
          </text>
        </view>
        <view
          v-if="activeTab === 'experienced'"
          class="card-badge experience-badge"
          @tap.stop="cancelExperienceRecord(item)"
        >
          <text class="badge-text">取消体验</text>
        </view>
        <view
          v-else
          class="card-badge experience-badge"
          @tap.stop="cancelFavoriteRecord(item)"
        >
          <text class="badge-text">取消收藏</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
const { getMyHeritageRecords, getHeritageById, cancelExperience, toggleFavorite } = require('../../api/heritage.js')
const { IMG } = require('../../api/imageMap.js')


export default {
  name: 'HeritageRecords',
  data() {
    return {
      records: {
        experiencedCount: 0,
        favoriteCount: 0,
        experiencedList: [],
        favoriteList: []
      },
      activeTab: 'experienced',
      loading: false
    }
  },
  computed: {
    currentList() {
      if (this.activeTab === 'experienced') {
        return this.records.experiencedList || []
      } else {
        return this.records.favoriteList || []
      }
    }
  },
  onLoad() {
    this.loadRecords()
  },
  onShow() {
    this.loadRecords()
  },
  methods: {
    async loadRecords() {
      try {
        this.loading = true
        const result = await getMyHeritageRecords()
        
        // 处理体验记录：如果缺少完整信息，根据 heritageId 获取详情
        let experiencedList = result.experiencedList || []
        if (experiencedList.length > 0) {
          experiencedList = await Promise.all(
            experiencedList.map(async (item) => {
              // 如果已经有完整的非遗信息（有 name 和 imageUrl），直接返回
              if (item.name || item.heritageName) {
                return item
              }
              
              // 否则根据 heritageId 获取完整信息
              const heritageId = item.heritageId || item.id
              if (heritageId) {
                try {
                  const detail = await getHeritageById(heritageId)
                  if (detail) {
                    // 合并体验记录的信息（如 title）和完整非遗信息
                    return {
                      ...detail,
                      id: detail.id || heritageId,
                      heritageId: heritageId,
                      // 保留体验记录中的 title（如果有）
                      experienceTitle: item.title || detail.name || detail.heritageName
                    }
                  }
                } catch (err) {
                  console.warn(`获取非遗详情失败 (id: ${heritageId}):`, err)
                }
              }
              
              // 如果获取失败，返回原始数据
              return item
            })
          )
        }
        
        this.records = {
          experiencedCount: experiencedList.length,
          favoriteCount: result.favoriteCount || 0,
          experiencedList: experiencedList,
          favoriteList: result.favoriteList || []
        }
      } catch (err) {
        console.error('加载非遗记录失败:', err)
        uni.showToast({ title: '加载失败', icon: 'none' })
        this.records = {
          experiencedCount: 0,
          favoriteCount: 0,
          experiencedList: [],
          favoriteList: []
        }
      } finally {
        this.loading = false
      }
    },
    
    switchTab(tab) {
      this.activeTab = tab
    },
    
    getImageUrl(item) {
      const defaultImg = IMG.retouch_2025112414394823

      const url = item.imageUrl || item.coverImage || item.cover || item.image || defaultImg
      // 简单的URL验证
      if (!url || typeof url !== 'string') return defaultImg
      if (url.startsWith('http://')) return defaultImg
      if (url.includes('baidu.com') || url.includes('baike')) return defaultImg
      return url
    },
    
    goToDetail(item) {
      const id = item.id || item.heritageId
      if (!id) {
        uni.showToast({ title: '非遗信息不完整', icon: 'none' })
        return
      }
      uni.navigateTo({
        url: `/pages/heritage/detail?id=${id}`
      })
    },

    async cancelExperienceRecord(item) {
      const heritageId = item.id || item.heritageId
      if (!heritageId) {
        uni.showToast({ title: '非遗信息不完整', icon: 'none' })
        return
      }

      const confirmed = await new Promise(resolve => {
        uni.showModal({
          title: '取消体验',
          content: '确定要取消该非遗的体验标记吗？',
          success: res => resolve(res.confirm === true)
        })
      })

      if (!confirmed) {
        return
      }

      try {
        uni.showLoading({ title: '处理中...', mask: true })
        await cancelExperience(heritageId)
        await this.loadRecords()
        uni.showToast({ title: '已取消体验', icon: 'success' })
      } catch (err) {
        console.error('取消体验失败:', err)
        uni.showToast({ title: '操作失败', icon: 'none' })
      } finally {
        uni.hideLoading()
      }
    },

    async cancelFavoriteRecord(item) {
      const heritageId = item.id || item.heritageId
      if (!heritageId) {
        uni.showToast({ title: '非遗信息不完整', icon: 'none' })
        return
      }

      const confirmed = await new Promise(resolve => {
        uni.showModal({
          title: '取消收藏',
          content: '确定要取消该非遗的收藏吗？',
          success: res => resolve(res.confirm === true)
        })
      })

      if (!confirmed) {
        return
      }

      try {
        uni.showLoading({ title: '处理中...', mask: true })
        await toggleFavorite(heritageId, false)
        await this.loadRecords()
        uni.showToast({ title: '已取消收藏', icon: 'success' })
      } catch (err) {
        console.error('取消收藏失败:', err)
        uni.showToast({ title: '操作失败', icon: 'none' })
      } finally {
        uni.hideLoading()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.heritage-records-page {
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
  margin-bottom: 16rpx;
}

.stats-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40rpx;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
}

.stat-value {
  font-size: 48rpx;
  font-weight: 700;
  color: #ffffff;
}

.stat-label {
  font-size: 24rpx;
  color: #fff9e6;
}

.stat-divider {
  width: 2rpx;
  height: 60rpx;
  background: rgba(255, 255, 255, 0.3);
}

.tabs {
  display: flex;
  padding: 20rpx 28rpx;
  gap: 16rpx;
  background: #fff5e6;
  border-bottom: 2rpx solid #e8d4b8;
}

.tab-item {
  flex: 1;
  padding: 16rpx;
  text-align: center;
  background: #ffffff;
  border-radius: 12rpx;
  border: 2rpx solid #e8d4b8;
  transition: all 0.3s;
}

.tab-item.active {
  background: #ffcc33;
  border-color: #ffcc33;
}

.tab-text {
  font-size: 28rpx;
  font-weight: 600;
  color: #5a2c12;
}

.tab-item.active .tab-text {
  color: #5a2c12;
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
  height: calc(100vh - 320rpx);
  padding: 20rpx 30rpx 20rpx 10rpx;
}

.heritage-card {
  background: #fff5e6;
  border-radius: 20rpx;
  padding: 20rpx;
  margin: 0 20rpx 16rpx 0;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  border: 3rpx solid #e8d4b8;
  display: flex;
  gap: 20rpx;
  position: relative;
}

.heritage-image {
  width: 160rpx;
  height: 160rpx;
  border-radius: 16rpx;
  flex-shrink: 0;
  background: #f0e6d8;
}

.heritage-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  min-width: 0;
}

.heritage-name {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  display: block;
}

.heritage-category {
  font-size: 22rpx;
  color: #ff6b6b;
  background: #ffe6a8;
  padding: 4rpx 12rpx;
  border-radius: 999px;
  display: inline-block;
  align-self: flex-start;
}

.heritage-desc {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
  display: block;
  margin-top: 8rpx;
}

.card-badge {
  position: absolute;
  top: 20rpx;
  right: 20rpx;
  padding: 6rpx 16rpx;
  border-radius: 999px;
  font-size: 22rpx;
  font-weight: 600;
}

.experience-badge {
  background: #7A4E2D;
  color: #ffffff;
}

.favorite-badge {
  background: #FFD666;
  color: #5a2c12;
}

.badge-text {
  font-size: 22rpx;
}

.card-actions {
  position: absolute;
  right: 20rpx;
  bottom: 20rpx;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}

.card-action-btn {
  padding: 6rpx 16rpx;
  border-radius: 999px;
  border: 2rpx solid #e08b7d;
  background: #fff0e8;
}

.card-action-text {
  font-size: 24rpx;
  color: #d9534f;
}
</style>

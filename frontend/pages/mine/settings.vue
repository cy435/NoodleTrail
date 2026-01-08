<template>
  <view class="settings-page">
    <view class="block">
      <view class="block-title">通知设置</view>
      <view class="row">
        <view class="row-text">
          <text class="row-title">打卡提醒</text>
          <text class="row-sub">用于提醒你记录新的美食打卡</text>
        </view>
        <switch
          :checked="notifyEnabled"
          color="#ff9800"
          @change="toggleNotify"
        />
      </view>
    </view>

    <view class="block">
      <view class="block-title">隐私与数据</view>
      <view class="row">
        <view class="row-text">
          <text class="row-title">允许使用个性化统计</text>
          <text class="row-sub">用于展示你的城市、打卡次数等统计信息</text>
        </view>
        <switch
          :checked="privacyAgree"
          color="#ff9800"
          @change="togglePrivacy"
        />
      </view>
      <view class="row clear-row" @tap="clearCache">
        <view class="row-text">
          <text class="row-title">清除本地缓存</text>
          <text class="row-sub">包括已缓存的打卡记录、配置等（可能会退出登录）</text>
        </view>
        <text class="row-arrow">></text>

      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      notifyEnabled: true,
      privacyAgree: true
    }
  },
  onLoad() {
    this.loadSettings()
  },
  methods: {
    loadSettings() {
      try {
        const stored = uni.getStorageSync('app_settings')
        if (stored && typeof stored === 'object') {
          this.notifyEnabled = typeof stored.notifyEnabled === 'boolean' ? stored.notifyEnabled : this.notifyEnabled
          this.privacyAgree = typeof stored.privacyAgree === 'boolean' ? stored.privacyAgree : this.privacyAgree
        }
      } catch (e) {
        console.error('加载设置失败', e)
      }
    },
    saveSettings() {
      try {
        uni.setStorageSync('app_settings', {
          notifyEnabled: this.notifyEnabled,
          privacyAgree: this.privacyAgree
        })
      } catch (e) {
        console.error('保存设置失败', e)
      }
    },
    toggleNotify(event) {
      this.notifyEnabled = !!event.detail.value
      this.saveSettings()
    },
    togglePrivacy(event) {
      this.privacyAgree = !!event.detail.value
      this.saveSettings()
    },
    clearCache() {
      uni.showModal({
        title: '提示',
        content: '确定要清除本地缓存吗？可能会一并清除登录状态。',
        success: (res) => {
          if (res.confirm) {
            try {
              uni.clearStorage()
              uni.showToast({
                title: '已清除缓存',
                icon: 'success'
              })
            } catch (e) {
              console.error('清除缓存失败', e)
              uni.showToast({
                title: '清除失败，请稍后再试',
                icon: 'none'
              })
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.settings-page {
  min-height: 100vh;
  padding: 24rpx 28rpx 40rpx;
  background: #fff8eb;
  color: #5a2c12;
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
}

.block {
  background: #ffffff;
  border-radius: 20rpx;
  padding: 20rpx 24rpx 8rpx;
  box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.06);
  margin-bottom: 24rpx;
}

.block-title {
  font-size: 30rpx;
  font-weight: 600;
  margin-bottom: 16rpx;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14rpx 0;
  border-top: 1rpx solid #f0e6d8;
}

.row:first-of-type {
  border-top-width: 0;
}

.row-text {
  flex: 1;
  padding-right: 16rpx;
}

.row-title {
  display: block;
  font-size: 26rpx;
  margin-bottom: 4rpx;
}

.row-sub {
  font-size: 22rpx;
  color: #8c5c2a;
}

.clear-row {
  margin-top: 8rpx;
}

.row-arrow {
  font-size: 32rpx;
  color: #cfa86a;
}
</style>

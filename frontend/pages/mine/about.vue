<template>
  <scroll-view class="page" scroll-y>
    <view class="container">
      <view class="block">
        <view class="title">关于「陕面通」</view>
        <view class="text">
          陕面通是一款围绕陕西面食与非遗文化打造的探索小程序，希望用一碗碗面、一次次打卡，记录你在三秦大地的味道足迹。
        </view>
      </view>

      <view class="block">
        <view class="title">使用说明</view>
        <view class="text">
          你可以在首页浏览陕西各地的特色面食，在「陕游记」「陕味集」「陕非遗」中创建清单、进行打卡与收藏，在「个人中心」查看自己的统计与勋章成就。
        </view>
      </view>

      <view class="block">
        <view class="title">协议与声明</view>
        <view class="text">
          登录、数据存储与隐私处理会遵循平台的隐私政策与用户协议。我们不会在未授权的情况下收集与你无关的信息，也不会将你的个人数据用于与本服务无关的用途。
        </view>
        <button class="btn" @tap="goAgreement">查看《用户登录指引协议》</button>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    goAgreement() {
      uni.navigateTo({
        url: '/pages/agreement/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #fff8eb;
}

.container {
  padding: 32rpx;
}

.block {
  margin-bottom: 32rpx;
  padding: 24rpx 24rpx 20rpx;
  background: #ffffff;
  border-radius: 20rpx;
  box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.06);
}

.title {
  font-size: 32rpx;
  font-weight: 600;
  margin-bottom: 12rpx;
  color: #5a2c12;
}

.text {
  color: #555555;
  line-height: 1.8;
  font-size: 26rpx;
}

.btn {
  margin-top: 20rpx;
  height: 80rpx;
  line-height: 80rpx;
  background: #ff9800;
  color: #ffffff;
  border-radius: 999rpx;
  font-size: 26rpx;
}
</style>

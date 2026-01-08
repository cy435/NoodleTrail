<template>
  <view class="feedback-page">
    <view class="header">
      <view class="title">用户建议</view>
      <view class="subtitle">欢迎把你在使用中的想法、问题与期待告诉我们。</view>
    </view>

    <view class="form">
      <view class="field">
        <text class="label">联系方式（可选）</text>
        <input
          class="input"
          v-model="contact"
          type="text"
          placeholder="邮箱、微信号或手机号，方便我们跟进反馈"
        />
      </view>

      <view class="field">
        <text class="label">建议或遇到的问题</text>
        <textarea
          class="textarea"
          v-model="content"
          placeholder="例如：哪一页不好用、想增加什么功能等"
          maxlength="500"
          show-confirm-bar="false"
        />
        <text class="counter">{{ content.length }}/500</text>
      </view>

      <button
        class="submit-btn"
        :disabled="!content.trim()"
        @tap="submitFeedback"
      >
        提交反馈
      </button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'FeedbackPage',
  data() {
    return {
      contact: '',
      content: ''
    }
  },
  methods: {
    submitFeedback() {
      const trimmed = (this.content || '').trim()
      if (!trimmed) {
        uni.showToast({
          title: '请先填写建议内容',
          icon: 'none'
        })
        return
      }

      try {
        const raw = uni.getStorageSync('feedback_list')
        const list = Array.isArray(raw) ? raw : []
        list.push({
          content: trimmed,
          contact: (this.contact || '').trim(),
          createdAt: Date.now()
        })
        uni.setStorageSync('feedback_list', list)
      } catch (e) {
        console.error('保存反馈失败', e)
      }

      this.content = ''
      this.contact = ''

      uni.showToast({
        title: '已提交，感谢你的建议',
        icon: 'success'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.feedback-page {
  min-height: 100vh;
  padding: 32rpx 28rpx;
  background: #fff8eb;
  color: #5a2c12;
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
}

.header {
  margin-bottom: 24rpx;
}

.title {
  font-size: 34rpx;
  font-weight: 700;
  margin-bottom: 8rpx;
}

.subtitle {
  font-size: 24rpx;
  color: #8c5c2a;
}

.form {
  background: #ffffff;
  border-radius: 20rpx;
  padding: 24rpx 24rpx 32rpx;
  box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.06);
}

.field {
  margin-bottom: 24rpx;
}

.label {
  font-size: 26rpx;
  margin-bottom: 10rpx;
  display: block;
}

.input {
  height: 72rpx;
  padding: 0 20rpx;
  border-radius: 999rpx;
  background: #fffaf1;
  border: 2rpx solid #e8d4b8;
  font-size: 26rpx;
}

.textarea {
  min-height: 180rpx;
  padding: 16rpx 20rpx;
  border-radius: 16rpx;
  background: #fffaf1;
  border: 2rpx solid #e8d4b8;
  font-size: 26rpx;
}

.counter {
  font-size: 22rpx;
  color: #a1793f;
  text-align: right;
  display: block;
  margin-top: 6rpx;
}

.submit-btn {
  margin-top: 8rpx;
  height: 84rpx;
  line-height: 84rpx;
  border-radius: 999rpx;
  background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
  color: #ffffff;
  font-size: 28rpx;
  font-weight: 600;
}

.submit-btn[disabled] {
  opacity: 0.6;
}
</style>

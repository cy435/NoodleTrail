
<template>
  <view class="page">
    <image class="bg" src="https://noodletrail-images-1383591777.cos.ap-beijing.myqcloud.com/images/beijingtu2.png" mode="aspectFill" />

    <view class="content">
      <view class="btn-group">
        <button class="btn btn-primary" :disabled="loading" hover-class="btn-primary--hover" @tap="onWxLogin">
          一键登录微信账号
        </button>
        <button class="btn btn-skip" hover-class="btn-skip--hover" @tap="onSkip">
          先逛逛
        </button>
      </view>

      <view class="agreement">
        <checkbox-group @change="onAgreeChange">
          <label class="agree-row">
            <checkbox class="agree-checkbox" value="agree" :checked="checked" />
            <text class="agree-text">我已阅读并同意</text>
            <text class="agree-link" @tap.stop="toAgreement">《用户登录协议》</text>
          </label>
        </checkbox-group>
      </view>
    </view>

    <!-- 授权弹框（底部弹出） -->
    <view v-if="showAuthSheet" class="sheet-mask" @tap="closeSheet">
      <view class="sheet" @tap.stop>
        <view class="sheet-title">授权并完善资料</view>

        <view class="profile-col">
          <button class="avatar-wrap center" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
            <image class="avatar" :src="displayAvatar" :key="displayAvatar" mode="aspectFill" @error="onAvatarError" />
            <view class="avatar-edit">更换</view>
          </button>

          <input class="name-input center" type="nickname" maxlength="20" v-model="draftName" placeholder="请输入昵称" />
        </view>

        <view class="sheet-actions">
          <button class="btn btn-cancel" @tap="closeSheet">取消</button>
          <button class="btn btn-primary" :loading="loading" @tap="confirmAndLogin">确认授权并登录</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// 接口：支持 login({ code, userInfo })
const { login, checkServerHealth } = require('../../api/user.js')
const { IMG } = require('../../api/imageMap.js')


export default {
  name: 'LoginIndex',
  data() {
    return {
      checked: false,
      loading: false,
      // 授权弹框数据
      showAuthSheet: false,
      draftName: '',
      draftAvatar: '',
      defaultAvatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO8x+fQAAAAASUVORK5CYII=', // 内置占位，避免404
      savedProfile: null
    }
  },
  computed: {
    displayAvatar() {
      return this.draftAvatar || (this.savedProfile && this.savedProfile.avatarUrl) || this.defaultAvatar
    }
  },
  onLoad() {
    try {
      const p = uni.getStorageSync('profile')
      if (p && (p.nickName || p.avatarUrl)) {
        this.savedProfile = p
      }
    } catch (_) {}
  },
  methods: {
    onAgreeChange(e) {
      this.checked = Array.isArray(e.detail.value) && e.detail.value.includes('agree')
    },

    onChooseAvatar(e) {
      if (e.detail.avatarUrl) {
        this.draftAvatar = e.detail.avatarUrl
      }
    },

    // 第一步：点击登录 -> 拉起授权弹框
    async onWxLogin() {
      if (!this.checked) {
        uni.showToast({ title: '请先勾选并同意协议', icon: 'none' })
        return
      }
      if (this.loading) return
      try {
        this.loading = true
        // 优先使用本地保存的资料
        const nick = this.savedProfile?.nickName || ''
        const avatar = this.savedProfile?.avatarUrl || ''

        this.draftName = nick
        this.draftAvatar = avatar
        this.showAuthSheet = true
      } catch (err) {
        console.error('prepare auth sheet error', err)
        uni.showToast({ title: '拉起授权失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    closeSheet() {
      this.showAuthSheet = false
    },

    // 第二步：确认并登录 -> 获取 code 并调服务端
    async confirmAndLogin() {
      if (this.loading) return
      if (!this.draftName || !this.draftName.trim()) {
        uni.showToast({ title: '请输入昵称', icon: 'none' })
        return
      }
      this.loading = true
      try {
        console.log('[login] 开始登录流程...')
        
        // 在确认登录时获取 code（微信 code 有时效性，5分钟内有效）
        let code = ''
        try {
          console.log('[login] 正在获取微信登录 code...')
          code = await new Promise((resolve, reject) => {
            uni.login({
              provider: 'weixin', // 明确指定微信登录
              success: (res) => {
                if (res.code) {
                  console.log('[login] 成功获取 code:', res.code.substring(0, 10) + '...')
                  resolve(res.code)
                } else {
                  reject(new Error('uni.login 返回的 code 为空'))
                }
              },
              fail: (err) => {
                console.error('[login] uni.login 失败:', err)
                reject(err)
              }
            })
          })
        } catch (codeError) {
          console.error('[login] 获取 code 失败:', codeError)
          throw new Error('获取微信登录 code 失败，请重试')
        }
        
        // 验证 code 是否存在
        if (!code || !code.trim()) {
          throw new Error('微信登录 code 缺失，请重试')
        }
        
        // 头像可以为空，但昵称必须有
        const avatarUrl = this.draftAvatar && this.draftAvatar !== this.defaultAvatar 
          ? this.draftAvatar 
          : ''
        
        // 确保数据格式正确，严格按照后端期望的格式
        const payload = {
          code: code.trim(), // 确保 code 是字符串且去除空格
          userInfo: {
            nickName: this.draftName.trim() || '',
            avatarUrl: avatarUrl || ''
          }
        }
        
        // 验证必要字段
        if (!payload.code || payload.code.length < 10) {
          throw new Error('微信登录 code 无效，请重试')
        }
        if (!payload.userInfo.nickName) {
          throw new Error('昵称不能为空')
        }
        
        console.log('[login] 发送登录请求')
        console.log('[login] 📋 准备发送的 payload:')
        console.log('[login]   - code 完整值:', payload.code)
        console.log('[login]   - code 长度:', payload.code.length)
        console.log('[login]   - code 前10位:', payload.code.substring(0, 10) + '...')
        console.log('[login]   - code 后10位:', '...' + payload.code.substring(payload.code.length - 10))
        console.log('[login]   - userInfo:', {
          nickName: payload.userInfo.nickName,
          avatarUrl: payload.userInfo.avatarUrl ? '已设置' : '空'
        })
        console.log('[login]   - 请求时间:', new Date().toISOString())
        
        // 保存原始 code 用于后续对比
        const originalCodeBeforeLogin = payload.code
        console.log('[login] 📌 保存原始 code 用于对比:', originalCodeBeforeLogin)
        
        // 记录请求开始时间
        const loginStartTime = Date.now()
        
        const resp = await login(payload)
        
        const loginElapsed = Date.now() - loginStartTime
        console.log(`[login] 登录请求完成，耗时: ${loginElapsed}ms`)
        console.log('[login] 登录响应', resp)
        
        // 检查响应格式
        if (!resp) {
          throw new Error('服务器返回空响应')
        }
        
        if (resp && resp.success && resp.data && resp.data.token) {
          try {
            uni.setStorageSync('isLoggedIn', true)
            uni.setStorageSync('token', resp.data.token)
            if (payload.userInfo) {
              uni.setStorageSync('profile', payload.userInfo)
            }
          } catch (_) {}
          this.showAuthSheet = false
          uni.showToast({ title: '登录成功', icon: 'success' })
          setTimeout(() => uni.reLaunch({ url: '/pages/index/index' }), 300)
        } else {
          throw new Error(resp?.message || resp?.msg || '登录失败，服务器返回异常')
        }
      } catch (err) {
        console.error('confirm login error', err)
        let errorMsg = '登录失败'
        
        // 检查是否是 HTTP 状态码错误
        if (err && err.statusCode) {
          errorMsg = err.message || `服务器错误 (${err.statusCode})`
          console.error(`[login] HTTP错误状态码: ${err.statusCode}`, err.responseData)
        } else if (err && err.message) {
          // 直接使用错误消息（已经包含了详细的诊断信息）
          errorMsg = err.message
        } else if (err && err.errMsg) {
          if (err.errMsg.includes('timeout')) {
            errorMsg = '请求超时，请检查服务器是否正在运行'
          } else {
            errorMsg = `网络错误: ${err.errMsg}`
          }
        }
        
        // 使用 showModal 显示详细错误信息
        uni.showModal({
          title: '登录失败',
          content: errorMsg,
          showCancel: false,
          confirmText: '知道了',
          success: () => {
            // 用户确认后，可以在这里添加重试逻辑或其他操作
          }
        })
      } finally {
        this.loading = false
      }
    },

    toAgreement() {
      uni.navigateTo({ url: '/pages/agreement/index' })
    },

    // 不登录进入首页
    onSkip() {
      try { uni.removeStorageSync('isLoggedIn') } catch (_) {}
      uni.reLaunch({ url: '/pages/index/index' })
    },

    onAvatarError(e) {
      // 图片加载失败时，如果头像为空或无效，使用默认头像
      // 不强制清空，允许用户继续使用（即使加载失败）
      console.warn('avatar load error', e)
      // 如果当前头像不是默认头像且加载失败，尝试使用默认头像
      if (this.draftAvatar && this.draftAvatar !== this.defaultAvatar) {
        // 保持当前值，不强制清空，让用户可以选择重新上传
        // 或者可以选择使用默认头像
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
.bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 4%;
  background: transparent;
}
.btn-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}
.btn {
  width: 100%;
  height: 92rpx;
  line-height: 92rpx;
  border-radius: 12rpx;
  font-size: 32rpx;
  letter-spacing: 1rpx;
}
.btn-primary {
  color: #7A4E2D;            /* 棕色文字 */
  background: #FFD666;       /* 明亮黄色 */
  box-shadow: 0 6rpx 16rpx rgba(255, 214, 102, 0.45);
  border: 1rpx solid rgba(122, 78, 45, 0.12);
}
.btn-primary[disabled] { opacity: 0.6; }
.btn-primary--hover {
  background: #FFC94D;
  opacity: 0.98;
  transform: translateY(2rpx);
}
/* 次级按钮：先逛逛 */
.btn-skip {
  color: #7A4E2D;
  background: rgba(255,255,255,0.55);
  border: 1rpx solid rgba(122,78,45,0.25);
}
.btn-skip--hover { background: rgba(255,255,255,0.7); }

.agreement {
  width: 100%;
  margin: 24rpx 0 30rpx;
  color: #7A4E2D; /* 棕色 */
  font-size: 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.agree-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.agree-text {
  margin: 0 8rpx 0 12rpx;
  flex: none;
  font-size: 22rpx;
}
.agree-checkbox {
  transform: scale(0.8);
  transform-origin: left center;
  margin-right: 8rpx;
}
.agree-link {
  color: #3aa0ff;
  margin-left: 0;
  font-size: 22rpx;
}


/* 授权弹框样式 */
.sheet-mask {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 10;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.sheet {
  width: 100%;
  background: #fff;
  border-top-left-radius: 24rpx;
  border-top-right-radius: 24rpx;
  padding: 36rpx 28rpx 40rpx;
  max-height: 78vh; /* 弹窗更高，向上延伸 */
  overflow: auto;
}
.sheet-title {
  font-size: 32rpx;
  font-weight: 600;
  margin-bottom: 20rpx;
  color: #333;
}
.profile-col {
  display: flex;
  flex-direction: column;
  align-items: center;  /* 居中头像与输入框 */
  gap: 40rpx;
  margin-bottom: 20rpx;
}
.avatar-wrap {
  position: relative;
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8rpx 24rpx rgba(0,0,0,0.08);
  /* 重置 button 样式 */
  padding: 0;
  border: none;
  background-color: transparent;
  line-height: normal;
}
.avatar-wrap::after {
  border: none;
}
.avatar-wrap.center { margin: 0 auto; }
.avatar {
  width: 100%;
  height: 100%;
}
.avatar-edit {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.4);
  color: #fff;
  text-align: center;
  font-size: 22rpx;
  padding: 6rpx 0;
}
.name-input {
  width: 88%;
  background: #f6f6f6;
  border-radius: 12rpx;
  padding: 20rpx 16rpx;
  font-size: 28rpx;
}
.name-input.center { margin: 0 auto; }
.sheet-actions {
  display: flex;
  gap: 20rpx;
  margin-top: 16rpx;
}
.btn-cancel {
  flex: 1;
  background: #f6f6f6;
  color: #333;
}
.btn-primary {
  flex: 1;
}
.btn-mini {
  align-self: center;
  height: 64rpx;
  line-height: 64rpx;
  padding: 0 24rpx;
  font-size: 26rpx;
  border-radius: 12rpx;
  color: #7A4E2D;
  background: #FFE8A3;
  border: 1rpx solid rgba(122,78,45,0.18);
}
</style>
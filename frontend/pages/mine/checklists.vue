<template>
  <page-meta page-style="overflow:auto;min-height:100vh" />
  <view class="checklists-page">
    <view class="page-header">
      <text class="page-title">📋 我的清单大全</text>
      <text class="page-subtitle">共 {{ totalCount }} 个清单</text>
    </view>

    <view v-if="loading" class="loading">
      <text>加载中...</text>
    </view>

    <view v-else-if="groupedChecklists.length === 0" class="empty">
      <text class="empty-text">暂无清单记录</text>
      <text class="empty-hint">去创建你的第一个清单吧~</text>
    </view>

    <scroll-view v-else class="content-scroll" scroll-y>
      <view v-for="(group, dateIndex) in groupedChecklists" :key="group.date" class="date-group">
        <view class="date-header">
          <text class="date-text">{{ formatDate(group.date) }}</text>
          <text class="date-count">{{ group.checklists.length }} 个清单</text>
        </view>
        
        <view v-for="(checklist, index) in group.checklists" :key="checklist.id" class="checklist-card">
          <view class="card-header">
            <text class="checklist-name">{{ checklist.name || '未命名清单' }}</text>
            <text class="checklist-order">第 {{ checklist.order || index + 1 }} 个</text>
          </view>
          
          <view v-if="checklist.items && checklist.items.length > 0" class="items-preview">
            <view 
              v-for="(item, itemIndex) in checklist.items.slice(0, 3)" 
              :key="item.id || itemIndex" 
              class="item-preview"
            >
              <text class="item-check" :class="{ checked: item.checked }">{{ item.checked ? '✓' : '○' }}</text>
              <text class="item-content" :class="{ 'item-checked': item.checked }">{{ item.content }}</text>
            </view>
            <text v-if="checklist.items.length > 3" class="more-items">还有 {{ checklist.items.length - 3 }} 项...</text>
          </view>
          
          <view v-else class="empty-items">
            <text class="empty-items-text">暂无清单项</text>
          </view>
          
          <view class="card-footer">
            <text class="items-count">{{ (checklist.items || []).length }} 项</text>
            <view class="footer-right">
              <text class="completed-count">
                已完成 {{ (checklist.items || []).filter(i => i.checked).length }} 项
              </text>
              <view class="delete-btn" @tap.stop="handleDelete(checklist)">
                <text class="delete-icon">🗑️</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
const { getAllMyChecklists, deleteChecklist } = require('../../api/checklist.js')

export default {
  name: 'MyChecklists',
  data() {
    return {
      checklists: [],
      loading: false,
      totalCount: 0
    }
  },
  computed: {
    // 按日期分组清单
    groupedChecklists() {
      const groups = {}
      this.checklists.forEach(checklist => {
        const date = checklist.date || '未知日期'
        if (!groups[date]) {
          groups[date] = {
            date: date,
            checklists: []
          }
        }
        groups[date].checklists.push(checklist)
      })
      
      // 转换为数组并按日期倒序排列
      return Object.values(groups).sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    }
  },
  onLoad() {
    this.loadChecklists()
  },
  onShow() {
    this.loadChecklists()
  },
  methods: {
    async loadChecklists() {
      try {
        this.loading = true
        const result = await getAllMyChecklists({ page: 1, size: 1000 })
        
        // 处理返回结果
        let lists = []
        if (Array.isArray(result)) {
          lists = result
        } else if (result && result.data) {
          if (Array.isArray(result.data)) {
            lists = result.data
          } else if (result.data.list && Array.isArray(result.data.list)) {
            lists = result.data.list
          }
        }
        
        this.checklists = lists
        this.totalCount = lists.length
      } catch (err) {
        console.error('加载清单列表失败:', err)
        uni.showToast({ title: '加载失败', icon: 'none' })
        this.checklists = []
        this.totalCount = 0
      } finally {
        this.loading = false
      }
    },
    
    formatDate(dateStr) {
      if (!dateStr) return '未知日期'
      try {
        const date = new Date(dateStr)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const weekdays = ['日', '一', '二', '三', '四', '五', '六']
        const weekday = weekdays[date.getDay()]
        return `${year}年${month}月${day}日 星期${weekday}`
      } catch (e) {
        return dateStr
      }
    },
    
    async handleDelete(checklist) {
      console.log('🗑️ 删除按钮被点击，清单信息:', checklist)
      
      const checklistName = checklist.name || '未命名清单'
      const checklistId = checklist.id
      
      if (!checklistId) {
        console.error('❌ 清单ID不存在:', checklist)
        uni.showToast({ title: '清单ID不存在', icon: 'none' })
        return
      }
      
      console.log('📋 准备删除清单:', { id: checklistId, name: checklistName })
      
      try {
        const modalRes = await uni.showModal({
          title: '确认删除',
          content: `确定要删除清单"${checklistName}"吗？删除后无法恢复。`,
          confirmText: '删除',
          confirmColor: '#ff4444',
          cancelText: '取消'
        })
        
        console.log('📝 用户确认对话框结果:', modalRes)
        
        // 处理 uni.showModal 可能返回数组或对象的情况
        // 数组格式: [null, {confirm: true, cancel: false}]
        // 对象格式: {confirm: true, cancel: false}
        let res = modalRes
        if (Array.isArray(modalRes) && modalRes.length > 1) {
          res = modalRes[1] // 取数组的第二个元素
          console.log('📝 检测到数组格式，提取结果:', res)
        }
        
        console.log('📝 最终确认结果:', { confirm: res.confirm, cancel: res.cancel })
        
        if (res && res.confirm) {
          console.log('✅ 用户确认删除，开始执行删除操作')
          uni.showLoading({ title: '删除中...' })
          
          // 先保存原始列表，用于失败时恢复
          const originalChecklists = [...this.checklists]
          console.log('💾 保存原始列表，共', originalChecklists.length, '个清单')
          
          try {
            // 乐观更新：先从列表中移除
            this.checklists = this.checklists.filter(item => item.id !== checklistId)
            this.totalCount = this.checklists.length
            console.log('🔄 乐观更新完成，当前列表数量:', this.checklists.length)
            
            // 调用删除接口
            console.log('📡 开始调用删除接口，清单ID:', checklistId)
            const deleteResult = await deleteChecklist(checklistId)
            console.log('✅ 删除接口调用成功，返回结果:', deleteResult)
            
            uni.hideLoading()
            uni.showToast({ title: '删除成功', icon: 'success', duration: 1500 })
            
            // 延迟刷新列表，确保后端数据已更新
            console.log('🔄 500ms后刷新列表...')
            setTimeout(async () => {
              console.log('🔄 开始刷新列表...')
              await this.loadChecklists()
              console.log('✅ 列表刷新完成')
            }, 500)
          } catch (deleteErr) {
            // 删除失败，恢复列表
            console.error('❌ 删除接口调用失败:', deleteErr)
            this.checklists = originalChecklists
            this.totalCount = originalChecklists.length
            console.log('↩️ 已恢复原始列表，数量:', originalChecklists.length)
            
            uni.hideLoading()
            console.error('删除清单失败详情:', {
              message: deleteErr.message,
              statusCode: deleteErr.statusCode,
              responseData: deleteErr.responseData,
              error: deleteErr
            })
            
            let errorMsg = '删除失败'
            if (deleteErr.message) {
              errorMsg = deleteErr.message
            } else if (deleteErr.responseData) {
              try {
                const errorData = typeof deleteErr.responseData === 'string' 
                  ? JSON.parse(deleteErr.responseData) 
                  : deleteErr.responseData
                errorMsg = errorData.message || errorData.msg || errorMsg
              } catch (e) {
                // 解析失败，使用默认错误信息
                console.error('解析错误信息失败:', e)
              }
            }
            
            uni.showToast({ 
              title: errorMsg, 
              icon: 'none',
              duration: 2000
            })
          }
        } else {
          console.log('❌ 用户取消删除')
        }
      } catch (err) {
        uni.hideLoading()
        console.error('❌ 删除操作异常:', err)
        uni.showToast({ title: '操作失败', icon: 'none' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.checklists-page {
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
  padding: 20rpx 40rpx 20rpx 10rpx;
}

.date-group {
  width: 100%;
  margin-bottom: 32rpx;
}

.date-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16rpx 20rpx;
  background: #ffe6a8;
  border-radius: 16rpx;
  margin-bottom: 16rpx;
  margin-right: 20rpx;
  box-shadow: 0 5rpx 8rpx rgba(0, 0, 0, 0.08);
}

.date-text {
  font-size: 28rpx;
  font-weight: 700;
  color: #5a2c12;
}

.date-count {
  font-size: 24rpx;
  color: #8c5c2a;
}

.checklist-card {
  background: #fff5e6;
  border-radius: 20rpx;
  padding: 24rpx;
  margin: 0 20rpx 16rpx 0;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  border: 3rpx solid #e8d4b8;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16rpx;
  padding-bottom: 12rpx;
  border-bottom: 2rpx dashed #cfa86a;
}

.checklist-name {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  flex: 1;
}

.checklist-order {
  font-size: 22rpx;
  color: #8c5c2a;
  background: #ffe6a8;
  padding: 4rpx 12rpx;
  border-radius: 999px;
}

.items-preview {
  margin-bottom: 16rpx;
}

.item-preview {
  display: flex;
  align-items: center;
  gap: 12rpx;
  padding: 8rpx 0;
}

.item-check {
  width: 32rpx;
  height: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2rpx solid #cfa86a;
  border-radius: 6rpx;
  font-size: 20rpx;
  color: #cfa86a;
  flex-shrink: 0;
}

.item-check.checked {
  background: #ffcc33;
  border-color: #ffcc33;
  color: #5a2c12;
}

.item-content {
  flex: 1;
  font-size: 26rpx;
  color: #5a2c12;
  line-height: 1.5;
}

.item-content.item-checked {
  text-decoration: line-through;
  opacity: 0.5;
  color: #999;
}

.more-items {
  display: block;
  font-size: 22rpx;
  color: #8c5c2a;
  padding-left: 44rpx;
  margin-top: 8rpx;
}

.empty-items {
  padding: 20rpx 0;
  text-align: center;
}

.empty-items-text {
  font-size: 24rpx;
  color: #999;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12rpx;
  border-top: 2rpx dashed #cfa86a;
  font-size: 22rpx;
  color: #8c5c2a;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.delete-btn {
  padding: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8rpx;
  background: #8c5c2a;
  transition: all 0.3s;
}

.delete-btn:active {
  background: #6b4620;
  transform: scale(0.95);
}

.delete-icon {
  font-size: 28rpx;
  line-height: 1;
}
</style>

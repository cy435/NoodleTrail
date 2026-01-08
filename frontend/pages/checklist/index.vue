<script>
const {
  listTemplates,
  myChecklists,
  importFromTemplate,
  createChecklist,
  updateChecklist,
  deleteChecklist,
  addItem,
  updateItem,
  deleteItem,
  exportChecklist,
  importItemsToChecklist,
  createChecklistShareCode,
  importChecklistFromShareCode
} = require('../../api/checklist.js')
const { IMG } = require('../../api/imageMap.js')
import iconZonghepingjia from '../../static/assets/zonghepingjia.png'


// 使用别名
const apiMyChecklists = myChecklists
const apiAddItem = addItem
const apiDeleteItem = deleteItem

export default {
  data() {
    return {
      IMG,
      iconZonghepingjia,
      // 推荐清单模板
      recommendLists: [

        {
          id: 1,
          name: '3天西安吃面路线',
          type: '面食寻味',
          items: [
            'Day1: biángbiáng面 → 碑林博物馆',
            'Day2: 油泼面 → 回民街小吃',
            'Day3: 岐山臊子面 → 城墙骑行'
          ]
        },
        {
          id: 2,
          name: '宝鸡面食一日游',
          type: '面食寻味',
          items: [
            '上午: 岐山臊子面（老字号）',
            '中午: 擀面皮配凉菜',
            '下午: 法门寺参观',
            '晚上: 扶风鹿糕馍'
          ]
        },
        {
          id: 3,
          name: '西安非遗一日打卡',
          type: '非遗体验',
          items: [
            '上午10:00: 皮影戏表演（提前预约）',
            '下午2:00: 剪纸体验课',
            '晚上7:00: 秦腔演出（易俗社）'
          ]
        },
        {
          id: 4,
          name: '春季槐花麦饭',
          type: '季节限定',
          items: [
            '寻找槐花盛开的农家',
            '体验槐花麦饭制作',
            '品尝农家野菜',
            '周边山林踏春'
          ]
        },
        {
          id: 5,
          name: '秋季柿子之旅',
          type: '季节限定',
          items: [
            '富平柿子园采摘',
            '柿饼制作体验',
            '品尝柿子相关美食',
            '购买柿饼伴手礼'
          ]
        },
        {
          id: 6,
          name: '非遗手工体验',
          type: '非遗体验',
          items: [
            '凤翔泥塑工作坊',
            '学习制作泥塑',
            '参观非遗展览馆',
            '购买泥塑作品'
          ]
        }
      ],
      // 我的清单列表（从后端获取）
      myChecklists: [],
      loading: false,
      // 日期弹窗
      showDateDialog: false,
      dateTemp: '',
      selectedDate: new Date().toISOString().split('T')[0],
      // 当前显示的清单索引（兼容旧字段，不再直接使用）
      currentListIndex: 0,
      // 底部图标
      bottomIcons: [
        { id: 'qingdan', label: '陕游记', img: IMG.retouch_2025112414391093 },
        { id: 'fengwei', label: '陕味集', img: IMG.retouch_2025112414392946 },
        { id: 'feiyi', label: '陕非遗', img: IMG.retouch_2025112414400271 },
        { id: 'profile', label: '个人中心', img: IMG.retouch_2025112414394823 }
      ],
      activeNavId: 'qingdan',
      // 弹窗控制

      showAddDialog: false,
      showTemplateDialog: false,
      showCreateListDialog: false,
      showRecommendDetail: false,
      selectedRecommend: null,
      newItemContent: '',
      newItemNote: '',
      newListName: '',
      // 重命名弹窗与上下文
      showRenameDialog: false,
      renameTemp: '',
      targetRenameList: null,
      // 添加项/日期上下文
      activeListForAdd: null,
      activeDateList: null,
      // 当前Swiper索引
      currentSwiperIndex: 0,
      // 导出 / 分享相关
      showExportDialog: false,
      exportDate: new Date().toISOString().split('T')[0],
      exportDateTemp: '',
      exportChecklists: [],
      exportSelectedChecklistId: '',
      // 常用事项标签
      quickPresetTags: ['门票预约', '美食打卡', '交通规划', '住宿确认'],
      quickCustomTags: [],
      showQuickTagDialog: false,
      newQuickTagLabel: '',
      // 常用事项快速添加到清单弹窗
      showQuickAddDialog: false,
      quickAddDate: new Date().toISOString().split('T')[0],
      quickAddDateTemp: '',
      quickAddChecklists: [],
      quickAddSelectedChecklistId: '',
      quickAddSelectedTags: [],
      // 分享行程相关
      showShareDialog: false,
      shareCode: '',
      shareCodeExpireAt: '',
      shareQRCodeUrl: '',
      // 分享清单选择相关
      showShareSelectDialog: false,
      shareSelectDate: new Date().toISOString().split('T')[0],
      shareSelectDateTemp: '',
      shareSelectChecklists: [],
      shareSelectedChecklistId: '',
      // 推荐清单导入到我的清单弹窗相关
      showRecommendImportDialog: false,
      recommendImportDate: new Date().toISOString().split('T')[0],
      recommendImportDateTemp: '',
      recommendImportChecklists: [],
      recommendImportSelectedChecklistId: ''
    }
  },
  computed: {
    // 当前选中日期的清单（最多3个）
    displayedLists() {
      return this.myChecklists.filter(l => l.date === this.selectedDate)
    },
    // Swiper显示的项目（包括创建页面）
    swiperItems() {
      const lists = this.displayedLists
      const items = [...lists]
      // 如果少于3个清单，添加创建页面
      if (lists.length < 3) {
        items.push({ isCreatePage: true, id: 'create-page' })
      }
      // 如果没有清单，只显示创建页面
      if (lists.length === 0) {
        return [{ isCreatePage: true, id: 'create-page' }]
      }
      return items
    },
    // 当前显示的清单
    currentList() {
      if (this.displayedLists.length === 0) return null
      return this.displayedLists[this.currentSwiperIndex] || this.displayedLists[0] || null
    }
  },
  onLoad(options) {
    console.log('[onLoad] 页面加载，参数:', options)
    // 检测是否有分享码参数，如果有则自动导入
    if (options && options.code) {
      console.log('[onLoad] 检测到分享码，开始导入:', options.code)
      console.log('[onLoad] 当前页面默认日期:', this.selectedDate)
      this.handleShareCodeImport(options.code)
      return // 导入完成后会刷新页面，这里先返回
    }
    
    // 页面加载时获取清单列表
    this.loadChecklists()
    // 加载推荐模板列表
    this.loadTemplates()
    // 加载本地常用事项标签
    this.loadQuickTags()
  },
  onShow() {
    // 页面显示时刷新清单列表
    this.loadChecklists()
  },
  methods: {
    // 测试方法 - 验证事件绑定是否正常
    testClick() {
      console.log('[testClick] 测试点击事件被触发')
      uni.showToast({ title: '点击事件正常', icon: 'success' })
    },
    // 加载清单列表
    async loadChecklists() {
      try {
        this.loading = true
        const lists = await apiMyChecklists({ date: this.selectedDate })
        if (Array.isArray(lists)) {
          this.myChecklists = lists
          // 确保当前索引有效
          if (this.currentSwiperIndex >= this.displayedLists.length) {
            this.currentSwiperIndex = Math.max(0, this.displayedLists.length - 1)
          }
        }
      } catch (err) {
        console.error('加载清单列表失败', err)
        uni.showToast({ title: '加载清单失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },
    
    // 加载推荐模板列表
    async loadTemplates() {
      try {
        const templates = await listTemplates()
        if (Array.isArray(templates) && templates.length > 0) {
          this.recommendLists = templates
        }
      } catch (err) {
        console.error('加载模板列表失败', err)
        // 模板加载失败不影响主功能，使用本地默认数据
      }
    },
    // Swiper切换
    onSwiperChange(e) {
      this.currentSwiperIndex = e.detail.current
    },
    // 查看推荐清单详情
    viewRecommendDetail(list) {
      this.selectedRecommend = list
      this.showRecommendDetail = true
    },
    
    // 关闭推荐清单详情
    closeRecommendDetail() {
      this.showRecommendDetail = false
      this.selectedRecommend = null
    },
    
    // 从详情页导入清单：先让用户选择日期和具体清单
    async importFromDetail() {
      if (!this.selectedRecommend) return

      // 初始导入日期使用当前页面选中的日期，没有则使用今天
      this.recommendImportDate = this.selectedDate || new Date().toISOString().split('T')[0]
      this.recommendImportDateTemp = this.recommendImportDate
      this.recommendImportSelectedChecklistId = ''

      // 加载该日期下的清单列表供选择
      await this.loadChecklistsForRecommendImport(this.recommendImportDate)

      this.showRecommendImportDialog = true
    },

    // 加载指定日期下可用于导入的清单列表
    async loadChecklistsForRecommendImport(date) {
      try {
        this.loading = true
        const lists = await apiMyChecklists({ date })
        this.recommendImportChecklists = Array.isArray(lists) ? lists : []
      } catch (err) {
        console.error('[loadChecklistsForRecommendImport] 加载清单列表失败', err)
        this.recommendImportChecklists = []
      } finally {
        this.loading = false
      }
    },

    // 导入弹窗里日期变更
    async onRecommendImportDateChange(e) {
      const newDate = e.detail.value
      if (!newDate) return

      this.recommendImportDate = newDate
      this.recommendImportDateTemp = newDate
      this.recommendImportSelectedChecklistId = ''

      await this.loadChecklistsForRecommendImport(newDate)
    },

    // 选择要导入到的清单
    selectRecommendImportChecklist(list) {
      if (!list || !list.id) return
      this.recommendImportSelectedChecklistId = list.id
    },

    // 确认将推荐清单内容导入到选中的清单中
    async confirmRecommendImport() {
      if (!this.selectedRecommend) {
        uni.showToast({ title: '未选择推荐清单', icon: 'none' })
        return
      }

      if (!this.recommendImportSelectedChecklistId) {
        uni.showToast({ title: '请选择清单', icon: 'none' })
        return
      }

      // 将推荐清单的 items 转成多行文本，每行一个条目，复用批量导入接口
      const rawItems = Array.isArray(this.selectedRecommend.items) ? this.selectedRecommend.items : []
      const lines = rawItems
        .map((item) => {
          if (!item) return ''
          if (typeof item === 'string') return item
          if (item.content && typeof item.content === 'string') return item.content
          if (item.name && typeof item.name === 'string') return item.name
          return ''
        })
        .filter(Boolean)

      if (lines.length === 0) {
        uni.showToast({ title: '该推荐清单暂无可导入内容', icon: 'none' })
        return
      }

      const text = lines.join('\n')

      try {
        this.loading = true
        const result = await importItemsToChecklist(this.recommendImportSelectedChecklistId, text)

        // 导入成功后，刷新当前日期对应的清单列表并切换到目标清单
        this.selectedDate = this.recommendImportDate
        await this.loadChecklists()

        // 找到刚才导入的目标清单索引，切换过去
        this.$nextTick(() => {
          const index = this.displayedLists.findIndex(l => l.id === this.recommendImportSelectedChecklistId)
          if (index >= 0) {
            this.currentSwiperIndex = index
          }
        })

        // 关闭弹窗和详情
        this.showRecommendImportDialog = false
        this.closeRecommendDetail()

        // 组合提示信息（兼容不同返回结构）
        let message = '导入成功'
        if (result) {
          const imported = result.importedCount || 0
          const duplicated = result.duplicateCount || 0
          const errors = Array.isArray(result.errors) ? result.errors.length : 0
          if (imported || duplicated || errors) {
            message = `导入 ${imported} 条` + (duplicated ? `，去重 ${duplicated} 条` : '') + (errors ? `，${errors} 条失败` : '')
          }
        }

        uni.showToast({ title: message, icon: 'success', duration: 3000 })
      } catch (err) {
        console.error('[confirmRecommendImport] 导入清单内容失败', err)
        uni.showToast({ title: err.message || '导入失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    // 关闭推荐清单导入弹窗
    closeRecommendImportDialog() {
      this.showRecommendImportDialog = false
      this.recommendImportSelectedChecklistId = ''
      this.recommendImportChecklists = []
    },
    
    // 切换完成状态
    async toggleCheck(item, list) {
      if (!list || !list.id || !item || !item.id) return
      
      const newChecked = !item.checked
      try {
        // 先更新本地状态（乐观更新）
        item.checked = newChecked
        
        // 调用接口更新
        await updateItem(list.id, item.id, { checked: newChecked })
        
        if (newChecked) {
          uni.showToast({ title: '已完成', icon: 'success' })
        }
      } catch (err) {
        // 失败时回滚
        item.checked = !newChecked
        console.error('更新完成状态失败', err)
        uni.showToast({ title: '更新失败', icon: 'none' })
      }
    },
    
    // 删除清单项
    deleteItem(item, list) {
      if (!list || !list.id || !item || !item.id) return
      
      uni.showModal({
        title: '提示',
        content: '确定删除这个清单项吗？',
        success: async (res) => {
          if (res.confirm) {
            try {
              this.loading = true
              await apiDeleteItem(list.id, item.id)
              
              // 删除成功，从本地列表中移除
              const index = list.items.findIndex(i => i.id === item.id)
              if (index > -1) {
                list.items.splice(index, 1)
              }
              uni.showToast({ title: '已删除', icon: 'success' })
            } catch (err) {
              console.error('删除清单项失败', err)
              uni.showToast({ title: '删除失败', icon: 'none' })
            } finally {
              this.loading = false
            }
          }
        }
      })
    },
    
    // 显示添加清单项弹窗
    showAddItem(list) {
      this.activeListForAdd = list || this.currentList || null
      if (!this.activeListForAdd) {
        uni.showToast({ title: '请先创建清单', icon: 'none' })
        return
      }
      this.newItemContent = ''
      this.newItemNote = ''
      this.showAddDialog = true
    },
    
    // 添加清单项
    async addItem() {
      if (!this.newItemContent.trim()) {
        uni.showToast({ title: '请输入内容', icon: 'none' })
        return
      }
      const target = this.activeListForAdd
      if (!target || !target.id) {
        uni.showToast({ title: '请先选择清单', icon: 'none' })
        return
      }
      
      try {
        this.loading = true
        const result = await apiAddItem(target.id, {
          content: this.newItemContent.trim(),
          note: this.newItemNote.trim()
        })
        
        if (result && result.id) {
          // 添加成功，更新本地列表
          if (!target.items) {
            target.items = []
          }
          target.items.push(result)
          this.showAddDialog = false
          this.activeListForAdd = null
          this.newItemContent = ''
          this.newItemNote = ''
          uni.showToast({ title: '添加成功', icon: 'success' })
        } else {
          throw new Error('添加失败：服务器返回数据格式异常')
        }
      } catch (err) {
        console.error('添加清单项失败', err)
        uni.showToast({ title: err.message || '添加失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    // 通过标签快速添加清单项
    async quickAddItemFromTag(tagLabel, list) {
      const content = (tagLabel || '').trim()
      if (!content) return

      const target = list || this.currentList
      if (!target || !target.id) {
        uni.showToast({ title: '请先创建清单', icon: 'none' })
        return
      }

      try {
        this.loading = true
        const result = await apiAddItem(target.id, {
          content,
          note: ''
        })

        if (result && result.id) {
          if (!target.items) {
            target.items = []
          }
          target.items.push(result)
          uni.showToast({ title: '已添加到清单', icon: 'success' })
        } else {
          throw new Error('添加失败：服务器返回数据格式异常')
        }
      } catch (err) {
        console.error('[quickAddItemFromTag] 添加常用事项失败', err)
        uni.showToast({ title: err.message || '添加失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    // 加载本地常用事项标签
    loadQuickTags() {
      try {
        const stored = uni.getStorageSync('checklist_quick_custom_tags')
        if (Array.isArray(stored)) {
          this.quickCustomTags = stored
        }
      } catch (err) {
        console.error('加载常用事项标签失败', err)
      }
    },

    // 打开常用事项管理弹窗
    openQuickTagDialog() {
      this.newQuickTagLabel = ''
      this.showQuickTagDialog = true
    },

    // 新增自定义常用事项
    addCustomQuickTag() {
      const label = (this.newQuickTagLabel || '').trim()
      if (!label) {
        uni.showToast({ title: '请输入常用事项', icon: 'none' })
        return
      }

      if (this.quickCustomTags.includes(label)) {
        uni.showToast({ title: '该事项已存在', icon: 'none' })
        return
      }

      if (this.quickCustomTags.length >= 20) {
        uni.showToast({ title: '常用事项最多保存 20 个', icon: 'none' })
        return
      }

      this.quickCustomTags.push(label)
      this.newQuickTagLabel = ''

      try {
        uni.setStorageSync('checklist_quick_custom_tags', this.quickCustomTags)
      } catch (err) {
        console.error('保存常用事项标签失败', err)
      }

      uni.showToast({ title: '已加入常用事项', icon: 'success' })
    },

    // 删除自定义常用事项
    removeCustomQuickTag(index) {
      if (index < 0 || index >= this.quickCustomTags.length) return
      this.quickCustomTags.splice(index, 1)
      try {
        uni.setStorageSync('checklist_quick_custom_tags', this.quickCustomTags)
      } catch (err) {
        console.error('保存常用事项标签失败', err)
      }
    },

    // 打开常用事项快速添加弹窗（左侧按钮）
    async openQuickAddDialog() {
      this.quickAddDate = this.selectedDate || new Date().toISOString().split('T')[0]
      this.quickAddDateTemp = this.quickAddDate
      this.quickAddSelectedChecklistId = ''
      this.quickAddSelectedTags = []
      await this.loadQuickAddChecklists(this.quickAddDate)
      this.showQuickAddDialog = true
    },

    // 加载指定日期下的清单列表（用于常用事项快速添加）
    async loadQuickAddChecklists(date) {
      try {
        this.loading = true
        const lists = await apiMyChecklists({ date })
        this.quickAddChecklists = Array.isArray(lists) ? lists : []
      } catch (err) {
        console.error('[loadQuickAddChecklists] 加载清单列表失败', err)
        this.quickAddChecklists = []
      } finally {
        this.loading = false
      }
    },

    // 常用事项快速添加弹窗中，日期变更
    async onQuickAddDateChange(e) {
      const newDate = e.detail.value
      if (!newDate) return
      this.quickAddDate = newDate
      this.quickAddDateTemp = newDate
      this.quickAddSelectedChecklistId = ''
      await this.loadQuickAddChecklists(newDate)
    },

    // 选择要添加到的清单
    selectQuickAddChecklist(list) {
      if (!list || !list.id) return
      this.quickAddSelectedChecklistId = list.id
    },

    // 选择常用事项标签（支持多选）
    selectQuickAddTag(tag) {
      const label = (tag || '').trim()
      if (!label) return

      if (!Array.isArray(this.quickAddSelectedTags)) {
        this.quickAddSelectedTags = []
      }

      const index = this.quickAddSelectedTags.indexOf(label)
      if (index >= 0) {
        this.quickAddSelectedTags.splice(index, 1)
      } else {
        this.quickAddSelectedTags.push(label)
      }
    },

    // 确认添加常用事项到目标清单（支持多选标签批量添加）
    async confirmQuickAdd() {
      const selectedTags = Array.isArray(this.quickAddSelectedTags)
        ? this.quickAddSelectedTags.filter(tag => (tag || '').trim())
        : []

      if (selectedTags.length === 0) {
        uni.showToast({ title: '请先选择常用事项', icon: 'none' })
        return
      }
      if (!this.quickAddSelectedChecklistId) {
        uni.showToast({ title: '请选择清单', icon: 'none' })
        return
      }

      try {
        this.loading = true
        let successCount = 0

        for (const rawTag of selectedTags) {
          const content = (rawTag || '').trim()
          if (!content) {
            continue
          }

          try {
            const result = await apiAddItem(this.quickAddSelectedChecklistId, {
              content,
              note: ''
            })
            if (result && result.id) {
              successCount += 1
            }
          } catch (innerErr) {
            console.error('[confirmQuickAdd] 添加单个常用事项失败', innerErr)
          }
        }

        if (successCount > 0) {
          this.selectedDate = this.quickAddDate
          await this.loadChecklists()

          this.$nextTick(() => {
            const index = this.displayedLists.findIndex(l => l.id === this.quickAddSelectedChecklistId)
            if (index >= 0) {
              this.currentSwiperIndex = index
            }
          })

          this.showQuickAddDialog = false
          this.quickAddSelectedTags = []
          uni.showToast({ title: `已添加 ${successCount} 条`, icon: 'success' })
        } else {
          uni.showToast({ title: '添加失败，请稍后重试', icon: 'none' })
        }
      } catch (err) {
        console.error('[confirmQuickAdd] 批量添加常用事项失败', err)
        uni.showToast({ title: err.message || '添加失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    // 关闭常用事项快速添加弹窗
    closeQuickAddDialog() {
      this.showQuickAddDialog = false
      this.quickAddSelectedTags = []
      this.quickAddSelectedChecklistId = ''
    },

    // 处理分享按钮点击事件
    handleShareClick(e) {
      this.openShareDialog()
    },
    
    // 打开共享行程弹窗（先显示选择清单弹窗）
    openShareDialog() {
      try {
        // 默认日期使用当前选中的日期，没有则使用今天
        this.shareSelectDate = this.selectedDate || new Date().toISOString().split('T')[0]
        this.shareSelectDateTemp = this.shareSelectDate
        this.shareSelectedChecklistId = ''
        this.shareCode = '' // 重置分享码
        
        // 立即显示弹窗
        this.showShareSelectDialog = true
        
        // 使用 $nextTick 确保 DOM 更新后再加载数据
        this.$nextTick(async () => {
          try {
            // 异步加载清单列表（不阻塞弹窗显示）
            await this.loadShareSelectChecklists(this.shareSelectDate)
            
            // 如果当前 swiper 上有清单且日期匹配，默认选中当前清单，否则选中该日期下第一个清单
            if (this.currentList && this.currentList.id && this.currentList.date === this.shareSelectDate) {
              this.shareSelectedChecklistId = this.currentList.id
              // 自动生成分享码
              if (this.onShareChecklistSelected && typeof this.onShareChecklistSelected === 'function') {
                await this.onShareChecklistSelected()
              }
            } else if (this.shareSelectChecklists.length > 0) {
              this.shareSelectedChecklistId = this.shareSelectChecklists[0].id
              // 自动生成分享码
              if (this.onShareChecklistSelected && typeof this.onShareChecklistSelected === 'function') {
                await this.onShareChecklistSelected()
              }
            }
          } catch (err) {
            console.error('[openShareDialog] 加载清单列表失败', err)
          }
        })
      } catch (err) {
        console.error('[openShareDialog] 方法执行出错', err)
        uni.showToast({ title: '打开分享弹窗失败', icon: 'none' })
      }
    },
    
    // 加载指定日期下的清单列表（用于分享选择）
    async loadShareSelectChecklists(date) {
      try {
        this.loading = true
        const lists = await apiMyChecklists({ date })
        this.shareSelectChecklists = Array.isArray(lists) ? lists : []
      } catch (err) {
        console.error('[loadShareSelectChecklists] 加载清单列表失败', err)
        this.shareSelectChecklists = []
      } finally {
        this.loading = false
      }
    },
    
    // 分享选择弹窗中，日期变更
    async onShareSelectDateChange(e) {
      const newDate = e.detail.value
      if (!newDate) return
      this.shareSelectDate = newDate
      this.shareSelectDateTemp = newDate
      this.shareSelectedChecklistId = ''
      this.shareCode = '' // 重置分享码
      try {
        await this.loadShareSelectChecklists(newDate)
        if (this.shareSelectChecklists.length > 0) {
          this.shareSelectedChecklistId = this.shareSelectChecklists[0].id
          // 自动生成分享码
          if (this.onShareChecklistSelected && typeof this.onShareChecklistSelected === 'function') {
            await this.onShareChecklistSelected()
          }
        }
      } catch (err) {
        console.error('[onShareSelectDateChange] 处理日期变更失败', err)
      }
    },
    
    // 选择要分享的清单
    async selectShareChecklist(list) {
      if (!list || !list.id) return
      this.shareSelectedChecklistId = list.id
      // 选择清单后自动生成分享码
      if (this.onShareChecklistSelected && typeof this.onShareChecklistSelected === 'function') {
        await this.onShareChecklistSelected()
      }
    },
    
    // 选择清单时自动生成分享码（用于微信分享）
    async onShareChecklistSelected() {
      if (!this.shareSelectedChecklistId) {
        console.warn('[onShareChecklistSelected] 没有选中的清单ID')
        return
      }
      
      // 自动生成分享码
      try {
        console.log('[onShareChecklistSelected] 开始生成分享码，清单ID:', this.shareSelectedChecklistId)
        const success = await this.prepareShareCodeForChecklist(this.shareSelectedChecklistId)
        if (success) {
          console.log('[onShareChecklistSelected] 分享码生成成功:', this.shareCode)
        } else {
          console.warn('[onShareChecklistSelected] 分享码生成失败')
        }
      } catch (err) {
        console.error('[onShareChecklistSelected] 生成分享码失败', err)
        uni.showToast({ title: '生成分享码失败，请稍后重试', icon: 'none', duration: 2000 })
      }
    },
    
    // 准备分享预览（在点击分享按钮时调用，关闭弹窗并切换到清单详情）
    prepareShareForPreview() {
      // 立即关闭选择弹窗
      this.showShareSelectDialog = false
      this.showShareDialog = false
      
      // 如果有选中的清单，切换到该清单的详情页面
      if (this.shareSelectedChecklistId) {
        const checklist = this.shareSelectChecklists.find(l => l.id === this.shareSelectedChecklistId) 
          || this.currentList
        if (checklist) {
          // 切换到清单所在的日期
          if (checklist.date) {
            this.selectedDate = checklist.date
          }
          // 立即加载清单并定位（同步执行，不等待）
          this.loadChecklists().then(() => {
            const index = this.displayedLists.findIndex(l => l.id === this.shareSelectedChecklistId)
            if (index >= 0) {
              this.currentSwiperIndex = index
            }
          }).catch(() => {
            // 静默失败
          })
        }
      }
    },
    
    // 关闭分享选择弹窗
    closeShareSelectDialog() {
      this.showShareSelectDialog = false
      this.shareSelectedChecklistId = ''
      this.shareSelectChecklists = []
    },
    
    // 为指定清单预生成分享码（用于微信分享）
    // 返回 true 表示成功，false 表示失败
    async prepareShareCodeForChecklist(checklistId) {
      if (!checklistId) return false
      
      // 如果已经有分享码且是同一个清单，就不重复生成
      if (this.shareCode && this.shareSelectedChecklistId === checklistId) {
        return true
      }
      
      try {
        const result = await createChecklistShareCode(checklistId)
        
        // 处理返回结果，兼容不同的数据结构
        if (result) {
          // 兼容 ApiResponse 格式 { success, data: { code, expireAt } }
          const data = result.data || result
          if (data.code || data.shareCode) {
            this.shareCode = data.code || data.shareCode
            this.shareCodeExpireAt = data.expireAt || data.expiredAt || ''
            this.shareQRCodeUrl = data.qrcodeUrl || data.qrCodeUrl || ''
            return true
          } else {
            console.error('[prepareShareCodeForChecklist] 服务器返回数据格式异常，未包含分享码', data)
            return false
          }
        } else {
          console.error('[prepareShareCodeForChecklist] 服务器未返回数据')
          return false
        }
      } catch (err) {
        console.error('[prepareShareCodeForChecklist] 预生成分享码失败', err)
        return false
      }
    },
    
    // 预先生成分享码（用于微信分享，兼容旧方法）
    async prepareShareCode() {
      const checklistId = this.shareSelectedChecklistId || (this.currentList && this.currentList.id)
      if (!checklistId) return
      return this.prepareShareCodeForChecklist(checklistId)
    },

    // 生成当前选中清单的行程分享码
    async generateShareCode() {
      const checklistId = this.shareSelectedChecklistId || (this.currentList && this.currentList.id)
      if (!checklistId) {
        uni.showToast({ title: '暂无可分享的清单', icon: 'none' })
        return
      }

      try {
        this.loading = true
        const result = await createChecklistShareCode(checklistId)

        // 处理返回结果，兼容不同的数据结构
        if (result) {
          // 兼容 ApiResponse 格式 { success, data: { code, expireAt } }
          const data = result.data || result
          if (data.code || data.shareCode) {
            this.shareCode = data.code || data.shareCode
            this.shareQRCodeUrl = data.qrcodeUrl || data.qrCodeUrl || ''
            this.shareCodeExpireAt = data.expireAt || data.expiredAt || ''
            uni.showToast({ title: '分享码已生成', icon: 'success' })
          } else {
            throw new Error('生成失败：服务器未返回分享码')
          }
        } else {
          throw new Error('生成失败：服务器未返回分享码')
        }
      } catch (err) {
        console.error('[generateShareCode] 生成行程分享码失败', err)
        uni.showToast({ title: err.message || '生成分享码失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    // 复制分享码到剪贴板
    copyShareCode() {
      if (!this.shareCode) {
        uni.showToast({ title: '请先生成分享码', icon: 'none' })
        return
      }

      uni.setClipboardData({
        data: this.shareCode,
        success: () => {
          uni.showToast({ title: '分享码已复制', icon: 'success' })
        }
      })
    },

    // 扫码导入好友行程
    scanShareCodeImport() {
      // #ifdef MP-WEIXIN
      uni.scanCode({
        success: async (res) => {
          const raw = res.result
          if (raw) {
            await this.handleShareCodeImport(raw)
          }
        },
        fail: (err) => {
          console.error('[scanShareCodeImport] 扫码失败', err)
          if (err.errMsg && !err.errMsg.includes('cancel')) {
            uni.showToast({ title: '扫码失败', icon: 'none' })
          }
        }
      })
      // #endif

      // #ifndef MP-WEIXIN
      uni.showToast({ title: '当前环境不支持扫码导入', icon: 'none' })
      // #endif
    },

    // 处理分享码导入行程（支持从 URL 参数或扫码）
    async handleShareCodeImport(rawCode) {
      const code = (rawCode || '').trim()
      if (!code) {
        uni.showToast({ title: '分享码无效', icon: 'none' })
        return
      }

      try {
        this.loading = true
        console.log('[handleShareCodeImport] 开始导入，分享码:', code, '当前页面日期:', this.selectedDate)
        
        // 导入时不传 date 参数，让后端使用分享码对应的清单的原始日期
        // 这样导入的清单会保持原始日期（1-05），而不是当前页面的日期（1-04）
        const result = await importChecklistFromShareCode(code, {})

        // 处理返回结果，兼容不同的数据结构
        const data = result.data || result
        
        console.log('[handleShareCodeImport] 导入结果:', data)
        
        // 检查是否是分享人自己（后端应该返回 isOwner 或类似字段）
        if (data && data.isOwner === true) {
          uni.showToast({ title: '这是您自己分享的清单，无需导入', icon: 'none', duration: 2000 })
          this.loading = false
          return
        }
        
        if (data && data.checklist) {
          const checklist = data.checklist
          
          console.log('[handleShareCodeImport] 导入的清单信息:', {
            id: checklist.id,
            name: checklist.name,
            date: checklist.date,
            itemsCount: checklist.items ? checklist.items.length : 0
          })
          
          // 重要：先切换到清单的原始日期，再清理和刷新
          // 这样可以确保导入的清单显示在正确的日期下
          if (checklist.date) {
            console.log('[handleShareCodeImport] 后端返回的清单日期:', checklist.date, '当前页面日期:', this.selectedDate)
            console.log('[handleShareCodeImport] 切换到清单的原始日期:', checklist.date)
            this.selectedDate = checklist.date
            // 立即刷新清单列表，使用新的日期
            await this.loadChecklists()
            
            // 验证导入的清单是否在正确的日期下
            const verifyChecklist = this.myChecklists.find(l => l.id === checklist.id)
            if (verifyChecklist) {
              console.log('[handleShareCodeImport] 验证清单日期 - 后端返回:', checklist.date, '实际保存:', verifyChecklist.date)
              if (verifyChecklist.date && verifyChecklist.date !== checklist.date) {
                console.error('[handleShareCodeImport] 警告：后端返回的日期与实际保存的日期不一致！')
                console.error('[handleShareCodeImport] 后端返回日期:', checklist.date, '实际保存日期:', verifyChecklist.date)
                console.error('[handleShareCodeImport] 尝试修正清单日期...')
                // 如果后端保存到了错误的日期，尝试修正为正确的日期
                try {
                  await updateChecklist(checklist.id, { date: checklist.date })
                  console.log('[handleShareCodeImport] 已修正清单日期为:', checklist.date)
                  // 刷新列表
                  await this.loadChecklists()
                  // 再次验证
                  const recheckChecklist = this.myChecklists.find(l => l.id === checklist.id)
                  if (recheckChecklist && recheckChecklist.date === checklist.date) {
                    console.log('[handleShareCodeImport] 日期修正成功！')
                    this.selectedDate = checklist.date
                  } else {
                    console.warn('[handleShareCodeImport] 日期修正失败，使用实际保存的日期')
                    this.selectedDate = verifyChecklist.date
                  }
                } catch (updateErr) {
                  console.error('[handleShareCodeImport] 修正清单日期失败', updateErr)
                  // 如果修正失败，使用实际保存的日期
                  this.selectedDate = verifyChecklist.date
                  await this.loadChecklists()
                }
              }
            }
          }
          
          // 清理清单名称中的日期后缀（如果存在）
          if (checklist.name) {
            // 移除名称中的日期格式：-YYYY-MM-DD 或 (X月X日) 等
            let cleanName = checklist.name
              .replace(/\s*-\s*\d{4}-\d{2}-\d{2}/g, '') // 移除 -2026-01-04
              .replace(/\s*\(\d{1,2}月\d{1,2}日\)/g, '') // 移除 (1月4日)
              .replace(/\s*\(\d{4}-\d{2}-\d{2}\)/g, '') // 移除 (2026-01-04)
              .trim()
            
            // 如果名称被修改了，更新清单名称
            if (cleanName !== checklist.name && cleanName) {
              try {
                await updateChecklist(checklist.id, { name: cleanName })
                console.log('[handleShareCodeImport] 已清理清单名称中的日期:', cleanName)
              } catch (updateErr) {
                console.error('[handleShareCodeImport] 更新清单名称失败', updateErr)
                // 更新失败不影响导入流程
              }
            }
          }
          
          // 清理清单项内容中的 [ ] 标记
          if (checklist.items && Array.isArray(checklist.items)) {
            for (const item of checklist.items) {
              if (item.content && typeof item.content === 'string') {
                // 移除内容开头的 [ ]、[√]、[x] 等标记
                let cleanContent = item.content
                  .replace(/^\[\s*\]\s*/, '') // 移除开头的 [ ]
                  .replace(/^\[√\]\s*/, '') // 移除开头的 [√]
                  .replace(/^\[x\]\s*/i, '') // 移除开头的 [x] 或 [X]
                  .replace(/^\[X\]\s*/, '') // 移除开头的 [X]
                  .trim()
                
                // 如果内容被修改了，更新清单项
                if (cleanContent !== item.content && cleanContent) {
                  try {
                    await updateItem(checklist.id, item.id, { content: cleanContent })
                    console.log('[handleShareCodeImport] 已清理清单项内容:', cleanContent)
                  } catch (updateErr) {
                    console.error('[handleShareCodeImport] 更新清单项内容失败', updateErr)
                    // 更新失败不影响导入流程
                  }
                }
              }
            }
          }
          
          // 再次刷新清单列表，确保显示最新的数据（包括清理后的名称和内容）
          await this.loadChecklists()

          let message = '导入成功'
          if (typeof data.importedCount === 'number') {
            if (data.importedCount > 0) {
              message = `已导入 ${data.importedCount} 条行程`
            } else {
              message = '导入完成'
            }
          }

          uni.showToast({ title: message, icon: 'success', duration: 3000 })

          // 定位到导入的清单
          this.$nextTick(async () => {
            // 再次刷新一次，确保数据是最新的
            await this.loadChecklists()
            
            // 查找导入的清单
            const updatedChecklist = this.myChecklists.find(l => l.id === checklist.id)
            if (updatedChecklist) {
              console.log('[handleShareCodeImport] 找到导入的清单:', {
                id: updatedChecklist.id,
                name: updatedChecklist.name,
                date: updatedChecklist.date,
                selectedDate: this.selectedDate
              })
              
              // 如果清单的日期和当前选择的日期不一致，说明后端可能保存到了错误的日期
              if (updatedChecklist.date && updatedChecklist.date !== this.selectedDate) {
                console.warn('[handleShareCodeImport] 清单日期与选择的日期不一致，切换到清单的实际日期')
                this.selectedDate = updatedChecklist.date
                await this.loadChecklists()
              }
              
              const newIndex = this.displayedLists.findIndex(l => l.id === updatedChecklist.id)
              if (newIndex >= 0) {
                this.currentSwiperIndex = newIndex
                console.log('[handleShareCodeImport] 已定位到导入的清单，索引:', newIndex, '日期:', this.selectedDate, '清单实际日期:', updatedChecklist.date)
              } else {
                console.warn('[handleShareCodeImport] 未找到导入的清单，可能日期不匹配')
                console.log('[handleShareCodeImport] 当前日期:', this.selectedDate, '清单日期:', updatedChecklist.date)
                // 如果找不到，尝试切换到清单的实际日期
                if (updatedChecklist.date && updatedChecklist.date !== this.selectedDate) {
                  console.log('[handleShareCodeImport] 尝试切换到清单的实际日期:', updatedChecklist.date)
                  this.selectedDate = updatedChecklist.date
                  await this.loadChecklists()
                  const retryIndex = this.displayedLists.findIndex(l => l.id === updatedChecklist.id)
                  if (retryIndex >= 0) {
                    this.currentSwiperIndex = retryIndex
                    console.log('[handleShareCodeImport] 切换日期后找到清单，索引:', retryIndex)
                  }
                }
              }
            } else {
              console.warn('[handleShareCodeImport] 未找到导入的清单，ID:', checklist.id)
              console.log('[handleShareCodeImport] 当前所有清单:', this.myChecklists.map(l => ({ id: l.id, name: l.name, date: l.date })))
            }
          })

          this.showShareDialog = false
        } else {
          throw new Error('导入失败：未获取到清单数据')
        }
      } catch (err) {
        console.error('[handleShareCodeImport] 通过分享码导入失败', err)
        // 检查错误信息，如果是分享人自己的清单，给出友好提示
        if (err.message && (err.message.includes('自己') || err.message.includes('owner') || err.message.includes('creator'))) {
          uni.showToast({ title: '这是您自己分享的清单，无需导入', icon: 'none', duration: 2000 })
        } else {
          uni.showToast({ title: err.message || '导入失败', icon: 'none' })
        }
      } finally {
        this.loading = false
      }
    },
    
    // 导出清单：先选择日期和清单，再弹出导出方式
    async exportList() {
      // 默认日期使用当前选中的日期，没有则使用今天
      this.exportDate = this.selectedDate || new Date().toISOString().split('T')[0]
      this.exportDateTemp = this.exportDate
      this.exportSelectedChecklistId = ''

      await this.loadExportChecklists(this.exportDate)

      // 如果当前 swiper 上有清单且日期匹配，默认选中当前清单，否则选中该日期下第一个清单
      if (this.currentList && this.currentList.id && this.currentList.date === this.exportDate) {
        this.exportSelectedChecklistId = this.currentList.id
      } else if (this.exportChecklists.length > 0) {
        this.exportSelectedChecklistId = this.exportChecklists[0].id
      }

      if (this.exportChecklists.length === 0) {
        uni.showToast({ title: '该日期没有清单', icon: 'none' })
      }

      this.showExportDialog = true
    },

    // 加载指定日期下的清单列表（用于导出）
    async loadExportChecklists(date) {
      try {
        this.loading = true
        const lists = await apiMyChecklists({ date })
        this.exportChecklists = Array.isArray(lists) ? lists : []
      } catch (err) {
        console.error('[loadExportChecklists] 加载清单列表失败', err)
        this.exportChecklists = []
      } finally {
        this.loading = false
      }
    },

    // 导出弹窗中，日期变更
    async onExportDateChange(e) {
      const newDate = e.detail.value
      if (!newDate) return
      this.exportDate = newDate
      this.exportDateTemp = newDate
      this.exportSelectedChecklistId = ''
      await this.loadExportChecklists(newDate)
      if (this.exportChecklists.length > 0) {
        this.exportSelectedChecklistId = this.exportChecklists[0].id
      }
    },

    // 选择要导出的清单
    selectExportChecklist(list) {
      if (!list || !list.id) return
      this.exportSelectedChecklistId = list.id
    },

    // 导出为文本：调用接口，失败或无数据时使用本地导出
    async exportListAsText() {
      if (!this.exportSelectedChecklistId) {
        uni.showToast({ title: '请选择清单', icon: 'none' })
        return
      }

      this.showExportDialog = false

      try {
        this.loading = true
        const result = await exportChecklist(this.exportSelectedChecklistId, { format: 'text' })

        if (result && result.text) {
          const rawText = result.text || ''
          const normalizedText = rawText
            .replace(/\[(x|X)\]/g, '[√]')
            .replace(/☑/g, '[√]')
            .replace(/☐/g, '[ ]')

          uni.setClipboardData({
            data: normalizedText,
            success: () => {
              uni.showToast({ title: '清单已复制到剪贴板', icon: 'success' })
            }
          })
        } else {
          // 接口未返回文本时，使用本地导出逻辑（基于当前选中的清单）
          const target = this.exportChecklists.find(l => l.id === this.exportSelectedChecklistId)
            || this.displayedLists.find(l => l.id === this.exportSelectedChecklistId)
          this.exportListLocal(target)
        }
      } catch (err) {
        console.error('导出清单文本失败', err)
        // 接口失败时，使用本地导出逻辑
        const target = this.exportChecklists.find(l => l.id === this.exportSelectedChecklistId)
          || this.displayedLists.find(l => l.id === this.exportSelectedChecklistId)
        this.exportListLocal(target)
      } finally {
        this.loading = false
      }
    },

    // 导出为图片：调用接口生成图片并保存到本地，相同接口失败时退化为文本复制
    async exportListAsImage() {
      if (!this.exportSelectedChecklistId) {
        uni.showToast({ title: '请选择清单', icon: 'none' })
        return
      }

      this.showExportDialog = false

      try {
        this.loading = true
        const result = await exportChecklist(this.exportSelectedChecklistId, { format: 'image' })

        if (result && (result.imageUrl || result.imageBase64)) {
          this.saveExportImage(result.imageUrl || result.imageBase64)
        } else if (result && result.text) {
          // 后端暂未提供图片，仅有文本时，退化为文本复制
          uni.setClipboardData({
            data: result.text,
            success: () => {
              uni.showToast({ title: '当前暂不支持图片导出，已复制文本', icon: 'none' })
            }
          })
        } else {
          uni.showToast({ title: '暂无可导出的图片', icon: 'none' })
        }
      } catch (err) {
        console.error('导出清单图片失败', err)
        // 图片导出失败时，退而求其次复制文本（基于当前选中的清单）
        const target = this.exportChecklists.find(l => l.id === this.exportSelectedChecklistId)
          || this.displayedLists.find(l => l.id === this.exportSelectedChecklistId)
        this.exportListLocal(target)
      } finally {
        this.loading = false
      }
    },
    
    // 本地导出（接口失败时的备用方案）
    exportListLocal(targetList) {
      const list = targetList || this.currentList
      if (!list) return
      
      let text = `【${list.name}】\n日期：${list.date}\n\n`
      ;(list.items || []).forEach((item, index) => {
        const status = item.checked ? '[√]' : '[ ]'
        text += `${index + 1}. ${status} ${item.content}\n`
        if (item.note) {
          text += `   备注：${item.note}\n`
        }
      })
      
      uni.setClipboardData({
        data: text,
        success: () => {
          uni.showToast({ title: '已复制到剪贴板', icon: 'success' })
        }
      })
    },
    
    // 保存导出图片
    saveExportImage(imageUrlOrBase64) {
      // #ifdef MP-WEIXIN
      if (typeof imageUrlOrBase64 !== 'string' || !imageUrlOrBase64) {
        uni.showToast({ title: '图片数据无效', icon: 'none' })
        return
      }

      if (imageUrlOrBase64.startsWith('data:image')) {
        // dataURL 形式的 Base64 图片
        const base64 = imageUrlOrBase64.split(',')[1]
        const filePath = `${wx.env.USER_DATA_PATH}/checklist_${Date.now()}.png`
        const fs = wx.getFileSystemManager()
        fs.writeFile({
          filePath: filePath,
          data: base64,
          encoding: 'base64',
          success: () => {
            uni.saveImageToPhotosAlbum({
              filePath: filePath,
              success: () => {
                uni.showToast({ title: '图片已保存', icon: 'success' })
              },
              fail: () => {
                uni.showToast({ title: '保存失败', icon: 'none' })
              }
            })
          }
        })
      } else if (!imageUrlOrBase64.startsWith('http')) {
        // 纯 Base64 字符串（后端像你现在这样只返回 imageBase64）
        const base64 = imageUrlOrBase64
        const filePath = `${wx.env.USER_DATA_PATH}/checklist_${Date.now()}.png`
        const fs = wx.getFileSystemManager()
        fs.writeFile({
          filePath: filePath,
          data: base64,
          encoding: 'base64',
          success: () => {
            uni.saveImageToPhotosAlbum({
              filePath: filePath,
              success: () => {
                uni.showToast({ title: '图片已保存', icon: 'success' })
              },
              fail: () => {
                uni.showToast({ title: '保存失败', icon: 'none' })
              }
            })
          }
        })
      } else {
        // URL 图片，需要先下载
        uni.downloadFile({
          url: imageUrlOrBase64,
          success: (res) => {
            if (res.statusCode === 200) {
              uni.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: () => {
                  uni.showToast({ title: '图片已保存', icon: 'success' })
                },
                fail: () => {
                  uni.showToast({ title: '保存失败', icon: 'none' })
                }
              })
            }
          }
        })
      }
      // #endif
      
      // #ifndef MP-WEIXIN
      uni.showToast({ title: '当前环境不支持保存图片', icon: 'none' })
      // #endif
    },
    
    // 显示清单模板选择
    showTemplates() {
      this.showTemplateDialog = true
    },

    // 打开日期选择（全局）
    openDateDialog() {
      this.dateTemp = this.selectedDate
      this.showDateDialog = true
    },

    // 日期变更
    onDateChange(e) {
      this.dateTemp = e.detail.value
    },

    // 确认日期（全局）
    async confirmDate() {
      if (this.dateTemp) {
        this.selectedDate = this.dateTemp
        // 切换日期后重新加载清单
        await this.loadChecklists()
        this.currentSwiperIndex = 0
        uni.showToast({ title: '已切换日期', icon: 'success' })
      }
      this.showDateDialog = false
    },
    
    // 重命名清单
    renameList(list) {
      this.targetRenameList = list
      this.renameTemp = (list && list.name) || ''
      this.showRenameDialog = true
    },
    
    // 删除清单（点击左下角删除按钮）
    deleteList(list) {
      if (!list || !list.id) return
      
      uni.showModal({
        title: '提示',
        content: `确定删除清单"${list.name}"吗？删除后无法恢复。`,
        success: async (res) => {
          if (res.confirm) {
            try {
              this.loading = true
              const deletedIndex = this.currentSwiperIndex
              await deleteChecklist(list.id)
              
              // 删除成功，刷新列表
              await this.loadChecklists()
              
              // 调整当前索引：如果删除的是最后一个，显示前一个；如果删除后没有清单了，显示创建页面
              if (this.displayedLists.length === 0) {
                // 没有清单了，显示创建页面（swiperItems 会自动包含创建页面）
                this.currentSwiperIndex = 0
              } else {
                // 还有清单，调整索引
                if (deletedIndex >= this.displayedLists.length) {
                  // 删除的是最后一个，显示前一个
                  this.currentSwiperIndex = Math.max(0, this.displayedLists.length - 1)
                } else {
                  // 删除的不是最后一个，保持当前索引（因为后面的会前移）
                  this.currentSwiperIndex = deletedIndex
                }
              }
              
              uni.showToast({ title: '已删除', icon: 'success' })
            } catch (err) {
              console.error('删除清单失败', err)
              uni.showToast({ title: '删除失败', icon: 'none' })
            } finally {
              this.loading = false
            }
          }
        }
      })
    },
    
    async confirmRename() {
      if (!this.targetRenameList || !this.targetRenameList.id) {
        this.showRenameDialog = false
        return
      }
      const name = (this.renameTemp || '').trim()
      if (!name) {
        uni.showToast({ title: '名称不能为空', icon: 'none' })
        return
      }
      
      try {
        this.loading = true
        await updateChecklist(this.targetRenameList.id, { name })
        
        // 更新成功
        this.targetRenameList.name = name
        this.showRenameDialog = false
        this.targetRenameList = null
        uni.showToast({ title: '已重命名', icon: 'success' })
      } catch (err) {
        console.error('重命名失败', err)
        uni.showToast({ title: '重命名失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    
    // 导入模板
    async importTemplate(template) {
      if (!template || !template.id) return
      
      // 先刷新列表，确保本地数据是最新的
      await this.loadChecklists()
      
      // 检查当前日期的清单数量
      const currentDateLists = this.displayedLists
      if (currentDateLists.length >= 3) {
        uni.showToast({ title: '每个日期最多3个清单', icon: 'none' })
        return
      }
      
      try {
        this.loading = true
        const result = await importFromTemplate(template.id, {
          date: this.selectedDate
        })
        
        if (result && result.id) {
          // 导入成功，刷新列表以获取最新数据
          await this.loadChecklists()
          this.showTemplateDialog = false
          uni.showToast({ title: '导入成功', icon: 'success' })
          
          // 切换到新导入的清单
          this.$nextTick(() => {
            const newIndex = this.displayedLists.findIndex(l => l.id === result.id)
            if (newIndex >= 0) {
              this.currentSwiperIndex = newIndex
            }
          })
        } else {
          throw new Error('导入失败')
        }
      } catch (err) {
        console.error('[importTemplate] 导入模板失败', err)
        uni.showToast({ title: err.message || '导入失败', icon: 'none' })
        // 导入失败后也刷新列表，避免重复导入冲突顺序
        try {
          await this.loadChecklists()
          console.log('[importTemplate] 导入失败后已刷新列表，确保数据同步')
        } catch (refreshErr) {
          console.error('[importTemplate] 刷新列表失败', refreshErr)
        }
      } finally {
        this.loading = false
      }
    },
    
    // 显示创建清单弹窗
    showCreateList() {
      this.newListName = ''
      this.showCreateListDialog = true
    },
    
    // 创建新清单
    async createNewList() {
      if (!this.newListName.trim()) {
        uni.showToast({ title: '请输入清单名称', icon: 'none' })
        return
      }
      
      // 先刷新列表，确保本地数据是最新的
      await this.loadChecklists()
      
      // 检查当前日期的清单数量（基于最新数据）
      const currentDateLists = this.displayedLists
      if (currentDateLists.length >= 3) {
        uni.showToast({ title: '每个日期最多3个清单', icon: 'none' })
        return
      }
      
      // 计算下一个 order（基于最新列表）
      const nextOrder = currentDateLists.length + 1
      
      // 检查是否已存在相同日期和顺序的清单（避免重复提交）
      const existingList = currentDateLists.find(
        list => list.date === this.selectedDate && list.order === nextOrder
      )
      if (existingList) {
        console.warn('[createNewList] 检测到已存在相同日期和顺序的清单:', existingList)
        uni.showToast({ title: '该日期和顺序的清单已存在，请刷新后重试', icon: 'none', duration: 2000 })
        // 刷新列表以同步最新状态
        await this.loadChecklists()
        return
      }
      
      try {
        this.loading = true
        const payload = {
          name: this.newListName.trim(),
          date: this.selectedDate,
          order: nextOrder,
          items: [] // 确保 items 是空数组，不能是 null
        }
        
        await createChecklist(payload)  // POST 请求
        await this.loadChecklists() // 刷新列表
        
        this.showCreateListDialog = false
        this.newListName = ''
        
        // 延迟切换，等待DOM更新
        this.$nextTick(() => {
          if (this.displayedLists.length > 0) {
            this.currentSwiperIndex = this.displayedLists.length - 1
          }
        })
        
        uni.showToast({ title: '创建成功', icon: 'success' })
      } catch (err) {
        console.error('创建清单失败', err)
        uni.showToast({ title: err.message || '创建失败', icon: 'none' })
        await this.loadChecklists() // 即使失败也刷新
      } finally {
        this.loading = false
      }
    },
    
    // 页面跳转
    goPage(id) {
      const routes = {
        tong: '/pages/index/index',
        fengwei: '/pages/flavor/index',
        qingdan: '/pages/checklist/index',
        profile: '/pages/mine/index',
        feiyi: '/pages/heritage/index'
      }
      const url = routes[id]
      if (!url) {
        uni.showToast({ title: '页面开发中', icon: 'none' })
        return
      }
      
      // 如果是当前页，不跳转
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      if (currentPage && ('/' + currentPage.route) === url) {
        return
      }
      
      // 如果点击陕面通图标，且当前不在首页，使用 navigateTo 跳转（保留返回按钮）
      if (url === '/pages/index/index') {
        const currentRoute = currentPage ? ('/' + currentPage.route) : ''
        if (currentRoute !== '/pages/index/index') {
          // 在其他页面点击陕面通图标，使用 navigateTo 跳转，保留返回按钮
          uni.navigateTo({ url })
        } else {
          // 在首页点击陕面通图标，不跳转（已在首页）
          return
        }
      } else {
        uni.navigateTo({ url })
      }
    }
  },
  
  // 微信分享功能
  onShareAppMessage(options) {
    // 确保所有弹窗都已关闭（在 prepareShareForPreview 中已经关闭，这里再次确保）
    this.showShareSelectDialog = false
    this.showShareDialog = false
    
    // 优先使用选中的清单ID
    const checklistId = this.shareSelectedChecklistId || (this.currentList && this.currentList.id)
    
    // 如果选中的清单且有分享码，使用分享码分享
    if (checklistId && this.shareCode) {
      // 找到清单名称
      const checklist = this.shareSelectChecklists.find(l => l.id === checklistId) 
        || this.currentList 
        || {}
      const title = checklist.name || '我的清单'
      const path = `/pages/checklist/index?code=${encodeURIComponent(this.shareCode)}`
      
      console.log('[onShareAppMessage] 使用分享码分享', { checklistId, shareCode: this.shareCode, path })
      
      return {
        title,
        path
      }
    }
    
    // 如果没有分享码但有清单，尝试同步获取（但分享是同步的，无法等待异步）
    // 如果用户从分享弹窗点击分享，分享码应该已经准备好了
    if (checklistId) {
      const checklist = this.shareSelectChecklists.find(l => l.id === checklistId) 
        || this.currentList 
        || {}
      const title = checklist.name || '我的清单'
      
      // 如果分享码还没准备好，提示用户
      if (!this.shareCode) {
        console.warn('[onShareAppMessage] 分享码未生成，尝试异步生成', checklistId)
        // 尝试异步生成分享码（不影响当前分享）
        this.prepareShareCodeForChecklist(checklistId).then((success) => {
          if (success) {
            console.log('[onShareAppMessage] 分享码生成成功，但当前分享已发出，建议用户重新分享')
          }
        }).catch(() => {
          // 静默失败，不影响分享流程
        })
        
        // 返回不带 code 的路径，好友点击后无法自动导入，但可以正常打开页面
        return {
          title,
          path: '/pages/checklist/index'
        }
      }
      
      // 有分享码，使用分享码分享
      const path = `/pages/checklist/index?code=${encodeURIComponent(this.shareCode)}`
      return {
        title,
        path
      }
    }
    
    // 默认分享
    return {
      title: '陕游记 - 我的清单',
      path: '/pages/checklist/index'
    }
  }
}
</script>

<template>
  <page-meta page-style="height:100vh;overflow:hidden" />
  <view class="checklist-page">
    
    <!-- 左侧推荐清单 -->
    <view class="left-section">
      <view class="recommend-title">推荐清单</view>
      <scroll-view class="recommend-scroll" scroll-y>
        <view 
          v-for="list in recommendLists" 
          :key="list.id" 
          class="recommend-card"
          @tap="viewRecommendDetail(list)"
        >
          <view class="recommend-type">{{ list.type }}</view>
          <view class="recommend-name">{{ list.name }}</view>
        </view>
      </scroll-view>
      
      <!-- 左下角功能按钮 -->
      <view class="left-bottom-actions">
        <view class="left-action-btn" @tap="exportList">
          <text class="left-action-text">导出清单</text>
        </view>
        <view class="left-action-btn" @tap="openQuickAddDialog">
          <text class="left-action-text">常用事项</text>
        </view>
        <view class="left-action-btn" @tap="handleShareClick">
          <text class="left-action-text">共享行程</text>
        </view>
      </view>
    </view>
    
    <!-- 右侧我的清单：按所选日期显示所有清单 -->
    <view class="right-section">
      <view class="my-list">
        <!-- 顶部：全局日期切换与统计 -->
        <view class="list-header">
          <view class="header-top-row">
            <view class="switch-btn" @tap="openDateDialog">
              <image
                class="switch-icon"
                src="/static/assets/日历.png"
                mode="widthFix"
              />
            </view>

          </view>
          <view class="list-info">
            <text class="list-name">{{ selectedDate }}</text>
            <text class="list-date">共 {{ displayedLists.length }} 个清单</text>
          </view>
        </view>

        <view class="list-content">
          <swiper 
            class="checklist-swiper" 
            :indicator-dots="false" 
            :autoplay="false" 
            :circular="false" 
            @change="onSwiperChange"
            :current="currentSwiperIndex"
          >
            <swiper-item v-for="item in swiperItems" :key="item.id">
              <!-- 创建新清单页面 -->
              <view v-if="item.isCreatePage" class="swiper-content create-page">
                <view class="create-page-content">
                  <image class="create-icon-img" :src="iconZonghepingjia" mode="aspectFit" />
                  <text class="create-title">创建新清单</text>
                  <text class="create-hint">在 {{ selectedDate }} 创建第 {{ displayedLists.length + 1 }} 个清单</text>
                  <view class="create-list-btn" @tap="showCreateList">
                    <text class="create-text">+ 立即创建</text>
                  </view>
                </view>
              </view>

              <!-- 已有清单页面 -->
              <view v-else class="swiper-content">
                <scroll-view class="swiper-scroll" scroll-y>
                  <view class="list-title-row">
                    <text class="list-name" @tap="renameList(item)">{{ item.name }}</text>
                  </view>

                  <!-- 常用事项标签：预设 + 我的常用事项 -->
                  <view v-if="false" class="quick-tags-section">
                    <view class="quick-tags-group">
                      <text class="quick-tags-label">高频事项</text>
                      <view class="quick-tags-row">
                        <view 
                          v-for="tag in quickPresetTags" 
                          :key="tag" 
                          class="quick-tag" 
                          @tap="quickAddItemFromTag(tag, item)"
                        >
                          <text class="quick-tag-text">{{ tag }}</text>
                        </view>
                      </view>
                    </view>
                    <view class="quick-tags-group">
                      <view class="quick-tags-header">
                        <text class="quick-tags-label">我的常用事项</text>
                        <text class="quick-tags-manage" @tap.stop="openQuickTagDialog">管理</text>
                      </view>
                      <view class="quick-tags-row">
                        <view 
                          v-for="(tag, idx) in quickCustomTags" 
                          :key="idx" 
                          class="quick-tag" 
                          @tap="quickAddItemFromTag(tag, item)"
                        >
                          <text class="quick-tag-text">{{ tag }}</text>
                        </view>
                        <view class="quick-tag quick-tag-add" @tap.stop="openQuickTagDialog">
                          <text class="quick-tag-text">+ 自定义</text>
                        </view>
                      </view>
                    </view>
                  </view>

                  <view v-if="item.items && item.items.length > 0">
                    <view 
                      v-for="listItem in item.items" 
                      :key="listItem.id" 
                      class="list-item"
                      @longpress="deleteItem(listItem, item)"
                    >
                      <view class="checkbox" :class="{ checked: listItem.checked }" @tap.stop="toggleCheck(listItem, item)">
                        <text v-if="listItem.checked" class="check-mark">✓</text>
                      </view>
                      <view class="item-content">
                        <text class="item-text" :class="{ 'item-checked': listItem.checked }">{{ listItem.content }}</text>
                        <text v-if="listItem.note" class="item-note">备注：{{ listItem.note }}</text>
                      </view>
                    </view>
                    <view class="tip-text">长按清单项可删除</view>
                  </view>
                  <view v-else class="empty-tip">
                    暂无条目
                  </view>
                </scroll-view>

                <!-- 删除整个清单按钮（左下角） -->
                <view class="delete-list-btn" @tap="deleteList(item)">
                  <text class="delete-list-icon">🗑️</text>
                </view>

                <!-- 添加按钮固定在底部中间 -->
                <view class="add-item-bottom">
                  <view class="add-item-btn" @tap="showAddItem(item)">
                    <text class="add-item-text">+ 添加清单项</text>
                  </view>
                </view>
              </view>
            </swiper-item>
          </swiper>
          
          <!-- 自定义指示点 -->
          <view class="custom-dots">
            <view class="custom-dot" :class="{ 'active': currentSwiperIndex === 0 }"></view>
            <view class="custom-dot" :class="{ 'active': currentSwiperIndex === 1 }"></view>
            <view class="custom-dot" :class="{ 'active': currentSwiperIndex === 2 }"></view>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 添加清单项弹窗 -->
    <view v-if="showAddDialog" class="dialog-mask" @tap="showAddDialog = false">
      <view class="dialog-content" @tap.stop>
        <view class="dialog-title">添加清单项</view>
        <input 
          class="dialog-input" 
          v-model="newItemContent" 
          placeholder="请输入内容"
          placeholder-style="color: #999"
        />
        <input 
          class="dialog-input" 
          v-model="newItemNote" 
          placeholder="备注（可选）"
          placeholder-style="color: #999"
        />
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="showAddDialog = false">取消</view>
          <view class="dialog-btn confirm" @tap="addItem">确定</view>
        </view>
      </view>
    </view>
    
    <!-- 模板选择弹窗 -->
    <view v-if="showTemplateDialog" class="dialog-mask" @tap="showTemplateDialog = false">
      <view class="template-content" @tap.stop>
        <view class="dialog-title">选择清单模板</view>
        <scroll-view class="template-list" scroll-y>
          <view 
            v-for="template in recommendLists" 
            :key="template.id"
            class="template-item"
            @tap="importTemplate(template)"
          >
            <view class="template-type">{{ template.type }}</view>
            <view class="template-name">{{ template.name }}</view>
            <view class="template-preview">
              <text v-for="(item, idx) in template.items.slice(0, 2)" :key="idx" class="preview-text">
                • {{ item }}
              </text>
              <text v-if="template.items.length > 2" class="preview-more">...</text>
            </view>
          </view>
        </scroll-view>
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="showTemplateDialog = false">关闭</view>
        </view>
      </view>
    </view>
    
    <!-- 创建清单弹窗 -->
    <view v-if="showCreateListDialog" class="dialog-mask" @tap="showCreateListDialog = false">
      <view class="dialog-content" @tap.stop>
        <view class="dialog-title">创建新清单</view>
        <input 
          class="dialog-input" 
          v-model="newListName" 
          placeholder="请输入清单名称"
          placeholder-style="color: #999"
          maxlength="20"
          :focus="showCreateListDialog"
        />
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="showCreateListDialog = false">取消</view>
          <view class="dialog-btn confirm" @tap="createNewList">确定</view>
        </view>
      </view>
    </view>
    
    <!-- 日期选择弹窗 -->
    <view v-if="showDateDialog" class="dialog-mask" @tap="showDateDialog = false">
      <view class="dialog-content" @tap.stop>
        <view class="dialog-title">选择清单日期</view>
        <picker mode="date" :value="dateTemp" start="2000-01-01" end="2100-12-31" @change="onDateChange">
          <view class="dialog-input" style="display:flex;align-items:center;justify-content:space-between;">
            <text>{{ dateTemp || '请选择日期' }}</text>
            <text style="color:#8c5c2a;font-size:24rpx">更改</text>
          </view>
        </picker>
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="showDateDialog = false">取消</view>
          <view class="dialog-btn confirm" @tap="confirmDate">确定</view>
        </view>
      </view>
    </view>

    <!-- 重命名清单弹窗 -->
    <view v-if="showRenameDialog" class="dialog-mask" @tap="showRenameDialog = false">
      <view class="dialog-content" @tap.stop>
        <view class="dialog-title">重命名清单</view>
        <input 
          class="dialog-input" 
          v-model="renameTemp" 
          placeholder="请输入新的清单名称"
          placeholder-style="color: #999"
          maxlength="20"
        />
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="showRenameDialog = false">取消</view>
          <view class="dialog-btn confirm" @tap="confirmRename">确定</view>
        </view>
      </view>
    </view>

    <!-- 常用事项管理弹窗 -->
    <view v-if="showQuickTagDialog" class="dialog-mask quick-tag-mask" @tap="showQuickTagDialog = false">
      <view class="dialog-content" @tap.stop>
        <view class="dialog-title">管理常用事项</view>
        <view class="quick-tag-dialog-body">
          <view class="dialog-input-row">
            <input 
              class="dialog-input" 
              v-model="newQuickTagLabel" 
              placeholder="输入常用事项，如 带身份证、拍照片" 
              placeholder-style="color: #999" 
            />
            <view class="dialog-mini-btn" @tap="addCustomQuickTag">添加</view>
          </view>
          <scroll-view class="quick-tag-list" scroll-y>
            <view 
              v-for="(tag, idx) in quickCustomTags" 
              :key="'manage-' + idx" 
              class="quick-tag-line"
            >
              <text class="quick-tag-line-text">{{ tag }}</text>
              <text class="quick-tag-remove" @tap="removeCustomQuickTag(idx)">删除</text>
            </view>
            <view v-if="quickCustomTags.length === 0" class="no-quick-tag-tip">
              还没有自定义常用事项，先在上方添加一个吧～
            </view>
          </scroll-view>
        </view>
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="showQuickTagDialog = false">关闭</view>
        </view>
      </view>
    </view>

    <!-- 推荐清单详情弹窗 -->
    <view v-if="showRecommendDetail && selectedRecommend" class="dialog-mask" @tap="closeRecommendDetail">
      <view class="recommend-detail-content" @tap.stop>
        <view class="detail-header">
          <view class="detail-type">{{ selectedRecommend.type }}</view>
          <text class="detail-close" @tap="closeRecommendDetail">×</text>
        </view>
        <view class="detail-title">{{ selectedRecommend.name }}</view>
        <scroll-view class="detail-list" scroll-y>
          <view class="detail-item" v-for="(item, idx) in selectedRecommend.items" :key="idx">
            <view class="detail-index">{{ idx + 1 }}</view>
            <text class="detail-text">{{ item }}</text>
          </view>
        </scroll-view>
        <view class="detail-actions">
          <view class="detail-btn cancel" @tap="closeRecommendDetail">关闭</view>
          <view class="detail-btn confirm" @tap="importFromDetail">导入到我的清单</view>
        </view>
      </view>
    </view>

    <!-- 推荐清单导入到我的清单弹窗（样式参考陕味集添加弹框） -->
    <view v-if="showRecommendImportDialog" class="dialog-mask" @tap="closeRecommendImportDialog">
      <view class="add-to-list-dialog" @tap.stop>
        <view class="dialog-title">导入到我的清单</view>

        <!-- 推荐清单信息 -->
        <view class="food-info">
          <text class="food-info-name">{{ (selectedRecommend && selectedRecommend.name) || '' }}</text>
        </view>

        <!-- 选择日期 -->
        <view class="dialog-section">
          <view class="section-label">选择日期</view>
          <picker mode="date" :value="recommendImportDateTemp || recommendImportDate" start="2000-01-01" end="2100-12-31" @change="onRecommendImportDateChange">
            <view class="date-picker-btn">
              <text>{{ recommendImportDate }}</text>
              <text class="picker-arrow">▼</text>
            </view>
          </picker>
        </view>

        <!-- 选择清单 -->
        <view class="dialog-section">
          <view class="section-label">选择清单</view>

          <view v-if="recommendImportChecklists.length > 0" class="checklist-list">
            <view
              v-for="list in recommendImportChecklists"
              :key="list.id"
              class="checklist-item"
              :class="{ active: recommendImportSelectedChecklistId === list.id }"
              @tap="selectRecommendImportChecklist(list)"
            >
              <text class="checklist-name">{{ list.name }}</text>
              <text v-if="recommendImportSelectedChecklistId === list.id" class="check-icon">✓</text>
            </view>
          </view>

          <view v-if="recommendImportChecklists.length === 0" class="no-checklist-tip">
            <text>该日期没有清单，请先创建清单</text>
          </view>
        </view>

        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="closeRecommendImportDialog">取消</view>
          <view class="dialog-btn confirm" @tap="confirmRecommendImport">确定导入</view>
        </view>
      </view>
    </view>

    <!-- 常用事项快速添加到清单弹窗 -->
    <view v-if="showQuickAddDialog" class="dialog-mask" @tap="closeQuickAddDialog">
      <view class="add-to-list-dialog" @tap.stop>
        <view class="dialog-title">常用事项快速添加到清单</view>

        <!-- 选择常用事项标签：预设 + 我的常用事项 -->
        <view class="dialog-section">
          <view class="section-label">选择常用事项</view>

          <view class="quick-tags-group">
            <text class="quick-tags-label">高频事项</text>
            <view class="quick-tags-row">
              <view
                v-for="tag in quickPresetTags"
                :key="tag"
                :class="['quick-tag', { 'quick-tag-selected': quickAddSelectedTags.includes(tag) }]"
                @tap="selectQuickAddTag(tag)"
              >
                <text class="quick-tag-text">{{ tag }}</text>
              </view>
            </view>
          </view>

          <view class="quick-tags-group">
            <view class="quick-tags-header">
              <text class="quick-tags-label">我的常用事项</text>
              <text class="quick-tags-manage" @tap.stop="openQuickTagDialog">管理</text>
            </view>
            <view class="quick-tags-row">
              <view
                v-for="(tag, idx) in quickCustomTags"
                :key="idx"
                :class="['quick-tag', { 'quick-tag-selected': quickAddSelectedTags.includes(tag) }]"
                @tap="selectQuickAddTag(tag)"
              >
                <text class="quick-tag-text">{{ tag }}</text>
              </view>
              <view class="quick-tag quick-tag-add" @tap.stop="openQuickTagDialog">
                <text class="quick-tag-text">+ 自定义</text>
              </view>
            </view>
            <view v-if="quickCustomTags.length === 0" class="no-quick-tag-tip">
              还没有自定义常用事项，先在上方添加一个吧～
            </view>
          </view>
        </view>

        <!-- 选择日期 -->
        <view class="dialog-section">
          <view class="section-label">选择日期</view>
          <picker mode="date" :value="quickAddDateTemp || quickAddDate" start="2000-01-01" end="2100-12-31" @change="onQuickAddDateChange">
            <view class="date-picker-btn">
              <text>{{ quickAddDate }}</text>
              <text class="picker-arrow">▼</text>
            </view>
          </picker>
        </view>

        <!-- 选择清单 -->
        <view class="dialog-section">
          <view class="section-label">选择清单</view>

          <view v-if="quickAddChecklists.length > 0" class="checklist-list">
            <view
              v-for="list in quickAddChecklists"
              :key="list.id"
              class="checklist-item"
              :class="{ active: quickAddSelectedChecklistId === list.id }"
              @tap="selectQuickAddChecklist(list)"
            >
              <text class="checklist-name">{{ list.name }}</text>
              <text v-if="quickAddSelectedChecklistId === list.id" class="check-icon">✓</text>
            </view>
          </view>

          <view v-if="quickAddChecklists.length === 0" class="no-checklist-tip">
            <text>该日期没有清单，请先创建清单</text>
          </view>
        </view>

        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="closeQuickAddDialog">取消</view>
          <view class="dialog-btn confirm" @tap="confirmQuickAdd">确定添加</view>
        </view>
      </view>
    </view>
    
    <!-- 分享清单选择弹窗 -->
    <view v-if="showShareSelectDialog" class="dialog-mask" @tap="closeShareSelectDialog">
      <view class="add-to-list-dialog" @tap.stop>
        <view class="dialog-title">选择要分享的清单</view>

        <!-- 选择日期 -->
        <view class="dialog-section">
          <view class="section-label">选择日期</view>
          <picker mode="date" :value="shareSelectDateTemp || shareSelectDate" start="2000-01-01" end="2100-12-31" @change="onShareSelectDateChange">
            <view class="date-picker-btn">
              <text>{{ shareSelectDate }}</text>
              <text class="picker-arrow">▼</text>
            </view>
          </picker>
        </view>

        <!-- 选择清单 -->
        <view class="dialog-section">
          <view class="section-label">选择清单</view>

          <view v-if="shareSelectChecklists.length > 0" class="checklist-list">
            <view
              v-for="list in shareSelectChecklists"
              :key="list.id"
              class="checklist-item"
              :class="{ active: shareSelectedChecklistId === list.id }"
              @tap="selectShareChecklist(list)"
            >
              <text class="checklist-name">{{ list.name }}</text>
              <text v-if="shareSelectedChecklistId === list.id" class="check-icon">✓</text>
            </view>
          </view>

          <view v-if="shareSelectChecklists.length === 0" class="no-checklist-tip">
            <text>没有可选择的清单，请先创建</text>
          </view>
        </view>

        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="closeShareSelectDialog">取消</view>
          <!-- #ifdef MP-WEIXIN -->
          <button 
            open-type="share" 
            class="dialog-btn confirm share-btn-in-dialog"
            :class="{ 'dialog-btn-disabled': shareSelectChecklists.length === 0 || !shareSelectedChecklistId || !shareCode }"
            :disabled="shareSelectChecklists.length === 0 || !shareSelectedChecklistId || !shareCode"
            @tap="prepareShareForPreview"
          >
            <text class="share-btn-text">{{ shareCode ? '分享给微信好友' : '正在生成分享码...' }}</text>
          </button>
          <!-- #endif -->
          <!-- #ifndef MP-WEIXIN -->
          <view 
            class="dialog-btn confirm" 
            :class="{ 'dialog-btn-disabled': shareSelectChecklists.length === 0 || !shareSelectedChecklistId }"
            @tap="confirmShareSelect"
          >
            分享给微信好友
          </view>
          <!-- #endif -->
        </view>
      </view>
    </view>

    <!-- 共享行程弹窗 -->
    <view v-if="showShareDialog" class="dialog-mask" @tap="showShareDialog = false">
      <view class="dialog-content" @tap.stop>
        <view class="dialog-title">共享行程</view>
        <view class="share-section">
          <!-- 显示选中的清单信息 -->
          <view v-if="shareSelectedChecklistId" class="share-selected-checklist">
            <view class="share-checklist-info">
              <text class="share-checklist-label">正在分享：</text>
              <text class="share-checklist-name">{{ (shareSelectChecklists.find(l => l.id === shareSelectedChecklistId) || {}).name || '我的清单' }}</text>
            </view>
          </view>
          
          <view class="share-block">
            <view class="share-block-desc" style="margin-bottom: 24rpx;">
              可以直接分享给微信好友，好友点击后会自动导入。
            </view>
            <!-- 分享码生成状态提示 -->
            <view v-if="!shareCode && shareSelectedChecklistId" class="share-code-status" style="margin-top: 12rpx; padding: 12rpx; background: #fff5dc; border-radius: 8rpx; color: #7A4E2D; font-size: 24rpx; margin-bottom: 24rpx;">
              <text>正在生成分享码，请稍候...</text>
            </view>
            <!-- 微信分享按钮 -->
            <!-- #ifdef MP-WEIXIN -->
            <button 
              open-type="share" 
              class="share-wechat-btn"
              :disabled="!shareSelectedChecklistId || !shareCode"
            >
              <text class="share-wechat-text">{{ shareCode ? '分享给微信好友' : '正在生成分享码...' }}</text>
            </button>
            <!-- #endif -->
            <!-- #ifndef MP-WEIXIN -->
            <view class="dialog-btn cancel" style="margin-top: 12rpx;">当前环境不支持微信分享</view>
            <!-- #endif -->
          </view>
        </view>
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="showShareDialog = false">关闭</view>
        </view>
      </view>
    </view>
    
    <!-- 导出清单方式选择弹窗 -->
    <view v-if="showExportDialog" class="dialog-mask" @tap="showExportDialog = false">
      <view class="dialog-content" @tap.stop>
        <view class="dialog-title">导出清单</view>

        <!-- 选择日期 -->
        <view class="dialog-section">
          <view class="section-label">选择日期</view>
          <picker mode="date" :value="exportDateTemp || exportDate" start="2000-01-01" end="2100-12-31" @change="onExportDateChange">
            <view class="date-picker-btn">
              <text>{{ exportDate }}</text>
              <text class="picker-arrow">▼</text>
            </view>
          </picker>
        </view>

        <!-- 选择清单 -->
        <view class="dialog-section">
          <view class="section-label">选择清单</view>
          <view v-if="exportChecklists.length > 0" class="checklist-list">
            <view
              v-for="list in exportChecklists"
              :key="list.id"
              class="checklist-item"
              :class="{ active: exportSelectedChecklistId === list.id }"
              @tap="selectExportChecklist(list)"
            >
              <text class="checklist-name">{{ list.name }}</text>
              <text v-if="exportSelectedChecklistId === list.id" class="check-icon">✓</text>
            </view>
          </view>
          <view v-else class="no-checklist-tip">
            <text>该日期没有清单</text>
          </view>
        </view>

        <view class="export-options">
          <view class="export-option-btn" @tap="exportListAsText">
            <text class="export-option-title">导出为文本</text>
            <text class="export-option-desc">复制到剪贴板，方便粘贴到聊天或笔记</text>
          </view>
          <view class="export-option-btn" @tap="exportListAsImage">
            <text class="export-option-title">导出为图片</text>
            <text class="export-option-desc">生成一张图片保存到本地</text>
          </view>
        </view>
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="showExportDialog = false">取消</view>
        </view>
      </view>
    </view>
    
    <!-- 固定底部图标 -->
    <view class="icons-fixed">
      <image class="chopsticks-fixed" :src="IMG.retouch_2025111915301620" mode="widthFix" />
      <view class="icons-top">
        <view class="icon-block" @tap="goPage('tong')">
          <view class="top-circle-wrap">
            <image class="icon-img" :src="IMG.retouch_2025112414375907" mode="widthFix" />
          </view>
          <text class="icon-label">陕面通</text>
        </view>
      </view>
      <view class="icons-bottom">
        <view v-for="icon in bottomIcons" :key="icon.id" class="icon-block" @tap="goPage(icon.id)">
          <image class="icon-img" :src="icon.img" mode="widthFix" />
          <text
            class="icon-label"
            :class="{ 'icon-label-active': activeNavId === icon.id }"
          >
            {{ icon.label }}
          </text>
        </view>
      </view>

    </view>

  </view>
</template>

<style scoped lang="scss">
.checklist-page {
  height: 100vh;
  min-height: 100vh;
  padding: 20rpx 20rpx 20rpx;
  padding-bottom: calc(260rpx + env(safe-area-inset-bottom));
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
  position: relative;
  display: flex;
  gap: 20rpx;
  overflow: hidden;
}



/* 左侧推荐清单区域 */
.left-section {
  width: 210rpx;
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  position: relative;
  max-height: calc(100vh - 40rpx - 280rpx);
}


.recommend-title {
  font-size: 28rpx;
  font-weight: 700;
  color: #5a2c12;
  text-align: center;
  padding: 12rpx;
  background: #ffe6a8;
  border-radius: 12rpx;
  flex-shrink: 0;
}

.recommend-scroll {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 16rpx;
}

.recommend-card {
  background: #fff5e6;
  border-radius: 16rpx;
  padding: 20rpx 16rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  border: 3rpx solid #e8d4b8;
  min-height: 135rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 0 4rpx 16rpx;
}



.recommend-type {
  font-size: 22rpx;
  color: #ff6b6b;
  font-weight: 700;
  margin-bottom: 8rpx;
}

.recommend-name {
  font-size: 26rpx;
  color: #5a2c12;
  font-weight: 600;
  line-height: 1.4;
}

/* 左下角功能按钮 */
.left-bottom-actions {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  margin-top: 20rpx;
  flex-shrink: 0;
  position: relative;
  z-index: 100;
  pointer-events: auto;
  width: 100%;
}

.left-action-btn {
  background: #ffe6a8;
  padding: 12rpx 16rpx;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  border: 2rpx solid #e3b34b;
  text-align: center;
  cursor: pointer;
  position: relative;
  z-index: 500;
  pointer-events: auto;
  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.left-action-text {
  font-size: 24rpx;
  color: #5a2c12;
  font-weight: 600;
  pointer-events: none;
  user-select: none;
}

/* 右侧我的清单区域 */
.right-section {
  flex: 1;
  margin-right: 0;
  background: #fff5e6;
  border-radius: 24rpx;
  padding: 24rpx;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.1);
  border: 4rpx solid #e8d4b8;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 90rpx - 280rpx);
  min-height: 600rpx;
}



.my-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20rpx;
  padding-bottom: 16rpx;
  border-bottom: 3rpx dashed #cfa86a;
}

.list-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.list-name {
  font-size: 32rpx;
  font-weight: 700;
  color: #5a2c12;
  display: block;
}

.list-date {
  font-size: 22rpx;
  color: #8c5c2a;
  display: block;
}

.header-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16rpx;
}

.switch-btn {
  width: 60rpx;
  height: 60rpx;
  background: #ffcc33;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.15);
  border: 2rpx solid #e3b34b;
  position: absolute;
  top: 24rpx;
  right: 24rpx;
  z-index: 5;
}

.switch-icon {
  width: 40rpx;
  height: 40rpx;
  display: block;
}


.list-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.checklist-swiper {
  width: 100%;
  height: 100%;
}

/* 自定义指示点 */
.custom-dots {
  position: absolute;
  bottom: 5rpx;
  right: 10rpx;
  display: flex;
  gap: 12rpx;
  z-index: 10;
}

.custom-dot {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background-color: #d8c8b3; /* 未激活-浅棕色 */
  transition: all 0.3s;
}

.custom-dot.active {
  background-color: #5a2c12; /* 激活-深棕色 */
}

.swiper-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 80rpx;
}

.swiper-scroll {
  flex: 1;
  height: 100%;
}

.list-title-row {
  padding: 16rpx 0;
  margin-bottom: 16rpx;
  border-bottom: 3rpx dashed #cfa86a;
}

.list-title-row .list-name {
  font-size: 32rpx;
  font-weight: 700;
  color: #5a2c12;
  display: block;
  margin-bottom: 8rpx;
}

.list-meta {
  display: flex;
  gap: 16rpx;
  margin-top: 8rpx;
}

.list-meta-text {
  font-size: 22rpx;
  color: #8c5c2a;
  display: block;
}

/* 常用事项标签区域 */
.quick-tags-section {
  margin-bottom: 12rpx;
}

.quick-tags-group {
  margin-bottom: 8rpx;
}

.quick-tags-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rpx;
}

.quick-tags-label {
  font-size: 24rpx;
  color: #8c5c2a;
  font-weight: 600;
}

.quick-tags-manage {
  font-size: 22rpx;
  color: #c67c2a;
}

.quick-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
}

.quick-tag {
  padding: 6rpx 14rpx;
  border-radius: 999px;
  background: #ffffff;
  border: 2rpx solid #e8d4b8;
}

.quick-tag-add {
  border-style: dashed;
}

.quick-tag-text {
  font-size: 24rpx;
  color: #5a2c12;
}

/* 常用事项在弹窗中的选中样式 */
.quick-tag-selected {
  background: #ffcc33;
  border-color: #e3b34b;
}

.quick-tag-selected .quick-tag-text {
  color: #5a2c12;
}

.add-item-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16rpx 24rpx;
  background: linear-gradient(to top, #fff5e6 80%, transparent);
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-item-btn {
  background: #ffcc33;
  padding: 16rpx 48rpx;
  border-radius: 999px;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.15);
  border: 2rpx solid #e3b34b;
}

.add-item-text {
  font-size: 28rpx;
  color: #5a2c12;
  font-weight: 600;
}

/* 删除整个清单按钮（左下角） */
.delete-list-btn {
  position: absolute;
  bottom: 5rpx;
  left: 5rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60rpx;
  height: 60rpx;
  padding: 0;
  background: #8B4513;
  border-radius: 50%;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.15);
  border: 2rpx solid #654321;
  z-index: 5;
}

.delete-list-icon {
  font-size: 32rpx;
  line-height: 1;
}

/* 创建清单页面样式 */
.create-page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.create-page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24rpx;
  padding: 60rpx 40rpx;
}

.create-icon {
  font-size: 80rpx;
  line-height: 1;
}

.create-icon-img {
  width: 120rpx;
  height: 120rpx;
  display: block;
}

.create-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #5a2c12;
}

.create-hint {
  font-size: 26rpx;
  color: #8c5c2a;
  text-align: center;
  line-height: 1.6;
}

.create-list-btn {
  margin-top: 20rpx;
  background: #ffcc33;
  padding: 20rpx 60rpx;
  border-radius: 999px;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.15);
  border: 2rpx solid #e3b34b;
}

.create-text {
  font-size: 30rpx;
  color: #5a2c12;
  font-weight: 600;
}

.list-item {
  display: flex;
  align-items: flex-start;
  gap: 16rpx;
  padding: 16rpx;
  margin-bottom: 12rpx;
  background: #ffffff;
  border-radius: 12rpx;
  border: 2rpx solid #e8d4b8;
  box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.05);
}



.checkbox {
  width: 40rpx;
  height: 40rpx;
  border: 3rpx solid #cfa86a;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #ffffff;
}

.checkbox.checked {
  background: #ffcc33;
  border-color: #ffcc33;
}

.check-mark {
  color: #5a2c12;
  font-size: 28rpx;
  font-weight: 700;
}

.item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.item-text {
  font-size: 28rpx;
  color: #5a2c12;
  line-height: 1.5;
}

.item-text.item-checked {
  text-decoration: line-through;
  opacity: 0.5;
  color: #999;
}

.item-note {
  font-size: 22rpx;
  color: #8c5c2a;
  line-height: 1.4;
}

.empty-tip {
  text-align: center;
  padding: 80rpx 20rpx;
  font-size: 26rpx;
  color: #999;
}

.tip-text {
  text-align: center;
  padding: 20rpx;
  font-size: 22rpx;
  color: #999;
  opacity: 0.8;
}

.empty-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
}

.empty-text {
  font-size: 32rpx;
  color: #5a2c12;
  font-weight: 700;
}

.empty-hint {
  font-size: 24rpx;
  color: #8c5c2a;
  text-align: center;
  line-height: 1.6;
}

.create-list-btn {
  margin-top: 32rpx;
  background: #ffcc33;
  padding: 16rpx 40rpx;
  border-radius: 999px;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.15);
  border: 2rpx solid #e3b34b;
}

.create-text {
  font-size: 28rpx;
  color: #5a2c12;
  font-weight: 600;
}

/* 弹窗样式 */
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
  z-index: 10000;
}

/* 常用事项管理弹窗的遮罩层，保证在其它弹窗之上 */
.quick-tag-mask {
  z-index: 10001;
}

.dialog-content {
  width: 600rpx;
  background: #fff5dc;
  border-radius: 24rpx;
  padding: 32rpx;
  box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.3);
}

.template-content {
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

.dialog-input {
  width: 100%;
  height: 80rpx;
  background: #ffffff;
  border-radius: 12rpx;
  padding: 0 20rpx;
  margin-bottom: 16rpx;
  border: 2rpx solid #cfa86a;
  font-size: 28rpx;
  box-sizing: border-box;
}

.dialog-textarea {
  width: 100%;
  min-height: 300rpx;
  background: #ffffff;
  border-radius: 12rpx;
  padding: 20rpx;
  margin-bottom: 16rpx;
  border: 2rpx solid #cfa86a;
  font-size: 28rpx;
  line-height: 1.6;
}

.dialog-actions {
  display: flex;
  gap: 16rpx;
  margin-top: 24rpx;
}

.quick-tag-dialog-body {
  max-height: 520rpx;
}

.dialog-input-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 12rpx;
}

.dialog-mini-btn {
  padding: 0 20rpx;
  height: 72rpx;
  background: #ffcc33;
  border-radius: 12rpx;
  border: 2rpx solid #e3b34b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26rpx;
  color: #5a2c12;
  font-weight: 600;
  flex-shrink: 0;
}

.quick-tag-list {
  max-height: 380rpx;
  margin-top: 8rpx;
}

.quick-tag-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rpx 4rpx;
  border-bottom: 1rpx dashed #e0d5c7;
}

.quick-tag-line-text {
  font-size: 26rpx;
  color: #5a2c12;
  flex: 1;
  margin-right: 12rpx;
}

.quick-tag-remove {
  font-size: 24rpx;
  color: #c67c2a;
}

.no-quick-tag-tip {
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #8c5c2a;
  text-align: center;
}

/* 共享行程弹窗 */
.share-section {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.share-block {
  padding: 16rpx 12rpx;
  border-radius: 16rpx;
  background: #fff5e6;
  border: 2rpx solid #e8d4b8;
}

.share-block-title {
  font-size: 28rpx;
  font-weight: 600;
  color: #5a2c12;
  margin-bottom: 6rpx;
}

.share-block-desc {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
}

.share-code-box {
  margin-top: 12rpx;
  padding: 12rpx 16rpx;
  border-radius: 12rpx;
  background: #ffffff;
  border: 2rpx dashed #cfa86a;
}

.share-code-text {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
}

.share-code-hint {
  margin-top: 6rpx;
  font-size: 22rpx;
  color: #8c5c2a;
}

.share-code-actions {
  margin-top: 12rpx;
}

/* 分享选中的清单信息 */
.share-selected-checklist {
  margin-bottom: 20rpx;
  padding: 16rpx 20rpx;
  background: #fff5e6;
  border-radius: 12rpx;
  border: 2rpx solid #e8d4b8;
}

.share-checklist-info {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.share-checklist-label {
  font-size: 24rpx;
  color: #8c5c2a;
}

.share-checklist-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #5a2c12;
}

/* 微信分享按钮样式 */
.share-wechat-btn {
  width: 100%;
  height: 72rpx;
  margin-top: 12rpx;
  background: #07c160;
  border-radius: 12rpx;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 12rpx rgba(7, 193, 96, 0.3);
}

.share-wechat-btn::after {
  border: none;
}

.share-wechat-btn[disabled] {
  background: #e0d5c7;
  opacity: 0.6;
}

.share-wechat-text {
  font-size: 28rpx;
  color: #ffffff;
  font-weight: 600;
}

.export-options {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.export-option-btn {
  background: #ffffff;
  border-radius: 16rpx;
  padding: 20rpx;
  border: 2rpx solid #cfa86a;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.export-option-title {
  font-size: 28rpx;
  font-weight: 600;
  color: #5a2c12;
}

.export-option-desc {
  font-size: 24rpx;
  color: #8c5c2a;
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

.dialog-btn-disabled {
  background: #e0d5c7 !important;
  color: #999 !important;
  border-color: #d0c5b7 !important;
  opacity: 0.6;
}

/* 弹窗中的分享按钮样式 */
.share-btn-in-dialog {
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  line-height: normal;
}

.share-btn-in-dialog::after {
  border: none;
}

.share-btn-text {
  font-size: 28rpx;
  font-weight: 600;
  color: #5a2c12;
}

/* 模板列表 */
.template-list {
  flex: 1;
  max-height: 600rpx;
}

.template-item {
  background: #fff5e6;
  border-radius: 16rpx;
  padding: 20rpx;
  margin-bottom: 16rpx;
  border: 3rpx solid #e8d4b8;
}

.template-type {
  font-size: 22rpx;
  color: #ff6b6b;
  font-weight: 700;
  margin-bottom: 8rpx;
}

.template-name {
  font-size: 28rpx;
  color: #5a2c12;
  font-weight: 600;
  margin-bottom: 12rpx;
}

.template-preview {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}

.preview-text {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.4;
}

.preview-more {
  font-size: 24rpx;
  color: #8c5c2a;
}

/* 推荐清单详情弹窗 */
.recommend-detail-content {
  width: 640rpx;
  max-height: 80vh;
  background: #fff5dc;
  border-radius: 24rpx;
  padding: 32rpx;
  box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16rpx;
}

.detail-type {
  font-size: 24rpx;
  color: #ff6b6b;
  font-weight: 700;
  background: #ffe6a8;
  padding: 6rpx 16rpx;
  border-radius: 999px;
}

.detail-close {
  font-size: 48rpx;
  line-height: 1;
  color: #5a2c12;
  font-weight: 400;
}

.detail-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #5a2c12;
  margin-bottom: 24rpx;
  text-align: center;
}

.detail-list {
  flex: 1;
  max-height: 500rpx;
  margin-bottom: 24rpx;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 16rpx;
  padding: 16rpx;
  margin-bottom: 12rpx;
  background: #ffffff;
  border-radius: 12rpx;
  border: 2rpx solid #e8d4b8;
}

.detail-index {
  width: 40rpx;
  height: 40rpx;
  background: #ffcc33;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  font-weight: 700;
  color: #5a2c12;
  flex-shrink: 0;
}

.detail-text {
  flex: 1;
  font-size: 28rpx;
  color: #5a2c12;
  line-height: 1.6;
  padding-top: 8rpx;
}

.detail-actions {
  display: flex;
  gap: 16rpx;
}

.detail-btn {
  flex: 1;
  height: 72rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12rpx;
  font-size: 28rpx;
  font-weight: 600;
}

.detail-btn.cancel {
  background: #e0d5c7;
  color: #5a2c12;
}

.detail-btn.confirm {
  background: #ffcc33;
  color: #5a2c12;
}

/* 添加到清单弹窗样式（复用陕味集） */
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

/* 筷子分割线 */
.chopsticks-fixed {
  position: absolute;
  left: 12rpx;
  right: 12rpx;
  top: 60rpx;
  width: calc(100% - 24rpx);
  height: auto;
  display: block;
  z-index: 19;
  border-radius: 0;
}

/* 底部图标布局 */
.icons-top {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -20rpx 0 20rpx;
  padding-top: 0;
  z-index: 3;
}


.icons-top .icon-block {
  transform: translateY(80rpx);
  will-change: transform;
}

.icons-top::before {
  content: none;
}

.icons-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 35rpx;
  padding: 0 10rpx;
  background: transparent;
  margin-top: -12rpx;
}

.icons-bottom .icon-block:nth-child(2) {
  margin-right: 40rpx;
}

.icons-bottom .icon-block:nth-child(3) {
  margin-left: 40rpx;
}


.icon-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
}

.icon-img {
  width: 58rpx;
  height: auto;
  display: block;
}

.icons-top .icon-img {
  width: 68rpx;
}

.icon-label {
  margin-top: 10rpx;
  font-size: 26rpx;
  color: #5a2c12;
  text-align: center;
}

.icon-label-active {
  font-weight: 600;
}


.top-circle-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
  padding: 18rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
  border: 0;
  position: relative;
  z-index: 5;
}

.icons-fixed {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 60rpx;
  padding: 60rpx 20rpx 16rpx;
  background: transparent;
  z-index: 300;
}


.icons-fixed::before {
  content: '';
  position: absolute;
  left: 12rpx;
  right: 12rpx;
  bottom: -5rpx;
  top: 158rpx;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 28rpx;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.08);
  z-index: -1;
}
</style>
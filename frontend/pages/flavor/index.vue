<script>
import { 
  searchFoods, 
  searchByName,
  searchByTag, 
  getAllTags, 
  getFoodsByFeatureTags,
  queryFoods,
  getFoodsByCity,
  addFoodToChecklist
} from '../../api/foods.js'
import { IMG } from '../../api/imageMap.js'


export default {
  data() {
    return {
      IMG,
      query: '',

      selectedCatId: '',
      // 左列分类（整合了基础分类和特色标签）
      categories: [],
      // 右侧美食卡片
      foods: [],
      // 热门推荐列表
      hotFoods: [],
      // 默认图片
      defaultImg: IMG.retouch_2025112414392946,
      bottomIcons: [
        { id: 'qingdan', label: '陕游记', img: IMG.retouch_2025112414391093 },
        { id: 'fengwei', label: '陕味集', img: IMG.retouch_2025112414392946 },
        { id: 'feiyi', label: '陕非遗', img: IMG.retouch_2025112414400271 },
        { id: 'profile', label: '个人中心', img: IMG.retouch_2025112414394823 }
      ],
      activeNavId: 'fengwei',
      loading: false,

      // 添加到清单相关
      showAddToListDialog: false,
      selectedFood: null,
      selectedDate: new Date().toISOString().split('T')[0],
      dateTemp: '',
      checklists: [], // 当前选中日期的清单列表
      selectedChecklistId: '',
      note: '' // 用户输入的备注
    }
  },
  onLoad() {
    this.initCategories()
    this.loadHotFoods()
  },
  methods: {
    // 初始化分类
    async initCategories() {
      // 整合基础分类和特色标签
      this.categories = [
        // 基础分类
        { id: 'noodle', name: '面食', type: 'category', tag: '面食' },
        { id: 'snack', name: '小吃', type: 'category', tag: '小吃' },
        // 特色标签
        { id: 'heritage', name: '非遗美食', type: 'feature', featureTag: '非遗美食' },
        { id: 'classic', name: '老字号', type: 'feature', featureTag: '老字号' },
        { id: 'trending', name: '网红打卡', type: 'feature', featureTag: '网红打卡' },
        { id: 'local', name: '本地人推荐', type: 'feature', featureTag: '本地人推荐' },
        // 热门推荐
        { id: 'hot', name: '热门推荐', type: 'hot' }
      ]
      
      // 默认选中第一个分类
      this.selectedCatId = this.categories[0].id
      
      // 加载第一个分类的数据
      await this.loadFoodsByCategory(this.categories[0])
      
      // 预加载热门推荐数据
      await this.loadHotFoods()
    },
    
    // 搜索功能（优化：多策略搜索）
    async onSearch() {
      const keyword = this.query.trim()
      if (!keyword) {
        uni.showToast({ title: '请输入搜索关键词', icon: 'none' })
        return
      }
      
      try {
        this.loading = true
        let results = []
        
        // 策略1: 优先使用 queryFoods 进行多条件查询（支持名称、标签、城市等）
        console.log('[搜索] 尝试多条件查询:', keyword)
        try {
          results = await queryFoods({ foodName: keyword })
          console.log('[搜索] 多条件查询结果数量:', results.length)
        } catch (err) {
          console.warn('[搜索] 多条件查询失败:', err)
        }
        
        // 策略2: 如果策略1没结果，尝试按名称搜索
        if (results.length === 0) {
          console.log('[搜索] 尝试按名称搜索:', keyword)
          try {
            results = await searchByName(keyword)
            console.log('[搜索] 按名称搜索结果数量:', results.length)
          } catch (err) {
            console.warn('[搜索] 按名称搜索失败:', err)
          }
        }
        
        // 策略3: 如果还没结果，尝试按标签搜索
        if (results.length === 0) {
          console.log('[搜索] 尝试按标签搜索:', keyword)
          try {
            results = await searchByTag(keyword)
            console.log('[搜索] 按标签搜索结果数量:', results.length)
          } catch (err) {
            console.warn('[搜索] 按标签搜索失败:', err)
          }
        }
        
        // 策略4: 如果还没结果，尝试按城市搜索
        if (results.length === 0) {
          console.log('[搜索] 尝试按城市搜索:', keyword)
          try {
            results = await getFoodsByCity(keyword)
            console.log('[搜索] 按城市搜索结果数量:', results.length)
          } catch (err) {
            console.warn('[搜索] 按城市搜索失败:', err)
          }
        }
        
        // 策略5: 最后尝试通用搜索（同时搜索名称和标签）
        if (results.length === 0) {
          console.log('[搜索] 尝试通用搜索:', keyword)
          try {
            results = await searchFoods(keyword, keyword)
            console.log('[搜索] 通用搜索结果数量:', results.length)
          } catch (err) {
            console.warn('[搜索] 通用搜索失败:', err)
          }
        }
        
        if (results.length === 0) {
          uni.showToast({ title: '未找到相关美食', icon: 'none' })
          return
        }
        
        // 映射后端字段到前端
        this.foods = results.map(item => ({
          id: item.id,
          name: item.foodName || item.name || '',
          img: item.imageUrl || item.image || item.img || item.coverImage || this.defaultImg,
          tag: item.tag || '',
          city: item.city || '',
          introduction: item.introduction || '',
          features: item.features || '',
          history: item.history || '',
          featureTags: item.featureTags || ''
        }))
        
        uni.showToast({ title: `找到 ${results.length} 个结果`, icon: 'success' })
      } catch (error) {
        console.error('[搜索] 搜索失败:', error)
        uni.showToast({ title: '搜索失败，请稍后重试', icon: 'none' })
      } finally {
        this.loading = false
      }
    },
    
    // 添加到清单
    async addToList(food) {
      if (!food || !food.id) {
        uni.showToast({ title: '美食信息不完整', icon: 'none' })
        return
      }
      
      this.selectedFood = food
      this.selectedDate = new Date().toISOString().split('T')[0]
      this.dateTemp = this.selectedDate
      this.selectedChecklistId = ''
      this.note = '' // 重置备注为空，让用户自己填写
      
      // 加载当前日期的清单
      await this.loadChecklistsByDate(this.selectedDate)
      
      this.showAddToListDialog = true
    },
    
    // 加载指定日期的清单列表
    async loadChecklistsByDate(date) {
      try {
        // 动态导入 checklist.js（避免编译时问题）
        const checklistApi = require('../../api/checklist.js')
        const response = await checklistApi.myChecklists({ date })
        // 处理 ApiResponse 格式
        let lists = []
        if (response && response.success !== false && response.data) {
          lists = Array.isArray(response.data) ? response.data : []
        } else if (Array.isArray(response)) {
          lists = response
        }
        
        this.checklists = lists
        // 如果只有一个清单，自动选中
        if (lists.length === 1) {
          this.selectedChecklistId = lists[0].id
        }
      } catch (err) {
        console.error('加载清单列表失败:', err)
        this.checklists = []
      }
    },
    
    // 日期变更（picker 组件自动触发）
    async onDateChange(e) {
      const newDate = e.detail.value
      if (newDate && newDate !== this.selectedDate) {
        this.dateTemp = newDate
        this.selectedDate = newDate
        // 重新加载该日期的清单
        await this.loadChecklistsByDate(this.selectedDate)
        this.selectedChecklistId = ''
        this.note = '' // 重置备注
      }
    },
    
    // 选择清单
    selectChecklist(checklist) {
      this.selectedChecklistId = checklist.id
    },
    
    // 确认添加到清单
    async confirmAddToList() {
      if (!this.selectedFood) {
        uni.showToast({ title: '美食信息缺失', icon: 'none' })
        return
      }
      
      // 如果没有选中清单，提示用户选择
      if (!this.selectedChecklistId) {
        uni.showToast({ title: '请选择清单', icon: 'none' })
        return
      }
      
      try {
        this.loading = true
        
        // 使用便捷接口添加美食到清单，备注使用用户输入的 note，而不是自动使用介绍
        const result = await addFoodToChecklist(this.selectedChecklistId, {
          name: this.selectedFood.name,
          introduction: this.note || '', // 使用用户输入的备注，而不是自动使用介绍
          features: '',
          id: this.selectedFood.id
        })
        
        if (result) {
          this.showAddToListDialog = false
          uni.showToast({ title: '已添加到清单', icon: 'success' })
        } else {
          throw new Error('添加失败')
        }
      } catch (err) {
        console.error('添加到清单失败:', err)
        uni.showToast({ title: err.message || '添加失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },
    
    // 关闭添加到清单弹窗
    closeAddToListDialog() {
      this.showAddToListDialog = false
      this.selectedFood = null
      this.selectedChecklistId = ''
      this.note = ''
      this.checklists = []
    },
    
    // 跳转到美食详情页
    goFoodDetail(food) {
      if (!food || !food.id) {
        uni.showToast({ title: '美食信息不完整', icon: 'none' })
        return
      }
      uni.navigateTo({
        url: `/pages/noodle/item?id=${food.id}&foodName=${encodeURIComponent(food.name)}`
      })
    },
    
    // 选择分类
    async selectCategory(cat) {
      this.selectedCatId = cat.id
      await this.loadFoodsByCategory(cat)
    },
    
    // 按分类加载美食
    async loadFoodsByCategory(cat) {
      try {
        this.loading = true
        
        // 如果是热门推荐，直接使用已加载的热门数据
        if (cat.type === 'hot') {
          this.foods = this.hotFoods.map(item => ({
            id: item.id,
            name: item.name,
            img: item.img,
            tag: '',
            city: '',
            introduction: item.intro || '',
            features: '',
            history: ''
          }))
          this.loading = false
          return
        }
        
        let foods = []
        
        // 判断是基础分类还是特色标签
        if (cat.type === 'feature') {
          // 特色标签筛选
          console.log('[特色标签筛选] 标签:', cat.featureTag)
          foods = await getFoodsByFeatureTags([cat.featureTag])
        } else {
          // 基础分类筛选
          console.log('[基础分类筛选] 标签:', cat.tag)
          foods = await searchByTag(cat.tag || cat.name)
        }
        
        console.log('[分类加载] 获取到美食数量:', foods.length)
        
        // 映射后端字段到前端
        this.foods = foods.map(item => ({
          id: item.id,
          name: item.foodName || item.name || '',
          img: item.imageUrl || item.image || item.img || item.coverImage || this.defaultImg,
          tag: item.tag || '',
          city: item.city || '',
          introduction: item.introduction || '',
          features: item.features || '',
          history: item.history || '',
          featureTags: item.featureTags || '' // 新增特色标签字段
        }))
        
        if (this.foods.length === 0) {
          console.log('该分类暂无数据，使用示例数据')
          this.loadMockData()
        }
      } catch (error) {
        console.error('加载分类数据失败:', error)
        // 失败时使用示例数据
        this.loadMockData()
      } finally {
        this.loading = false
      }
    },
    
    // 加载示例数据（测试用）
    loadMockData() {
      this.foods = [
        { id: 'biang', name: 'biángbiáng面', img: this.defaultImg },
        { id: 'qishan', name: '岐山臊子面', img: this.defaultImg },
        { id: 'youpo', name: '油泼面', img: this.defaultImg },
        { id: 'liangpi', name: '凉皮', img: this.defaultImg }
      ]
    },
    
    // 加载热门推荐美食
    async loadHotFoods() {
      try {
        console.log('[热门推荐] 开始加载...')
        
        // 获取所有美食数据（不传标签参数）
        const allFoods = await getFoodsByFeatureTags([])
        
        console.log('[热门推荐] 获取到美食数量:', allFoods.length)
        
        if (allFoods.length === 0) {
          console.warn('[热门推荐] 没有数据')
          return
        }
        
        // 选取前6个作为热门推荐（可以根据实际需求调整数量或排序逻辑）
        const hotCount = Math.min(6, allFoods.length)
        const selectedFoods = allFoods.slice(0, hotCount)
        
        // 映射后端字段到前端，只保留需要的字段：图片、名字、介绍
        this.hotFoods = selectedFoods.map(item => ({
          id: item.id,
          name: item.foodName || item.name || '',
          img: item.imageUrl || item.image || item.img || item.coverImage || this.defaultImg,
          intro: item.introduction || item.intro || item.description || item.features || ''
        }))
        
        console.log('[热门推荐] 热门美食数量:', this.hotFoods.length)
      } catch (error) {
        console.error('[热门推荐] 加载失败:', error)
      }
    },

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
        // 其他页面使用 navigateTo，保留返回按钮
        uni.navigateTo({ url })
      }
    }
  }
}
</script>

<template>
  <page-meta page-style="height:100vh;overflow:hidden" />
  <view class="flavor-page">

    <view class="brown-dashed"></view>

    <view class="image-holder">
      <image class="holder-img" :src="IMG.IMG_20251125_171347" mode="aspectFill" />

      <view class="top-search">
        <input class="search-input" v-model="query" placeholder="搜索陕味..." placeholder-style="color: #5a2c12; font-size: 26.5rpx;" confirm-type="search" @confirm="onSearch" />

        <view class="search-icon" @tap="onSearch">
          <image src="/static/assets/搜索.png" mode="widthFix" style="width: 52rpx; height: 52rpx; display: block;" />
        </view>
      </view>
    </view>


    <view class="grid-wrap">
      <view class="grid-left">
        <view class="left-header">分类</view>
        <scroll-view class="left-lines">
          <view
            v-for="(cat, index) in categories"
            :key="cat.id"
            class="left-cell"
            :class="{ active: selectedCatId === cat.id, 'last-item': index === categories.length - 1 }"
            @tap="selectCategory(cat)"
          >
            {{ cat.name }}
          </view>
        </scroll-view>
      </view>

      <scroll-view class="grid-right" scroll-y>
        <view v-if="loading" class="loading-tip">加载中...</view>
        <view v-else-if="foods.length === 0" class="empty-tip">暂无数据</view>
        <template v-else>
          <view v-for="food in foods" :key="food.id" class="food-row">
            <view class="food-card" @tap="goFoodDetail(food)">
              <text class="food-name">{{ food.name }}</text>
              <image class="food-img" :src="food.img" mode="aspectFill" />
            </view>
            <view class="add-circle" @tap.stop="addToList(food)">
              <image class="add-icon" src="/static/assets/加入清单.png" mode="widthFix" />
            </view>

          </view>
        </template>
      </scroll-view>
    </view>

    <!-- 添加到清单弹窗 -->
    <view v-if="showAddToListDialog" class="dialog-mask" @tap="closeAddToListDialog">
      <view class="add-to-list-dialog" @tap.stop>
        <view class="dialog-title">添加到清单</view>
        
        <!-- 美食信息 -->
        <view class="food-info">
          <text class="food-info-name">{{ (selectedFood && selectedFood.name) || '' }}</text>
        </view>
        
        <!-- 选择日期 -->
        <view class="dialog-section">
          <view class="section-label">选择日期</view>
          <picker mode="date" :value="dateTemp" start="2000-01-01" end="2100-12-31" @change="onDateChange">
            <view class="date-picker-btn">
              <text>{{ selectedDate }}</text>
              <text class="picker-arrow">▼</text>
            </view>
          </picker>
        </view>
        
        <!-- 选择清单 -->
        <view class="dialog-section">
          <view class="section-label">选择清单</view>
          
          <!-- 如果该日期有清单，显示清单列表 -->
          <view v-if="checklists.length > 0" class="checklist-list">
            <view 
              v-for="list in checklists" 
              :key="list.id"
              class="checklist-item"
              :class="{ active: selectedChecklistId === list.id }"
              @tap="selectChecklist(list)"
            >
              <text class="checklist-name">{{ list.name }}</text>
              <text v-if="selectedChecklistId === list.id" class="check-icon">✓</text>
            </view>
          </view>
          
          <!-- 如果没有清单，显示提示信息 -->
          <view v-if="checklists.length === 0" class="no-checklist-tip">
            <text>该日期没有清单，请先创建清单</text>
          </view>
        </view>
        
        <!-- 备注输入 -->
        <view class="dialog-section">
          <view class="section-label">备注（可选）</view>
          <textarea 
            class="note-input" 
            v-model="note" 
            placeholder="请输入备注"
            placeholder-style="color: #999"
            maxlength="200"
            :auto-height="true"
          />
        </view>
        
        <!-- 操作按钮 -->
        <view class="dialog-actions">
          <view class="dialog-btn cancel" @tap="closeAddToListDialog">取消</view>
          <view class="dialog-btn confirm" @tap="confirmAddToList">确定</view>
        </view>
      </view>
    </view>

    <!-- 固定底部图标：复用首页结构样式 -->
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
.flavor-page {
  height: 106.5vh;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 32rpx 28rpx 20rpx;
  padding-bottom: calc(280rpx + env(safe-area-inset-bottom));
  background: #fffef7;
  color: #5a2c12;
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 搜索框 + 图标 */
.top-search {
  position: absolute;
  left: 12rpx;        /* 更靠左一点 */
  bottom: 24rpx;      /* 贴近背景图下边缘 */
  width: 34%;         /* 再缩短一点宽度 */
  z-index: 2;         /* 在背景图之上，但低于全局浮层 */
}






.search-input {
  height: 60rpx;
  background: #ffe6a8;
  border-radius: 36rpx;
  padding: 0 72rpx 0 24rpx;
  box-shadow: 0 6rpx 12rpx rgba(0,0,0,0.08);
  font-size: 26.5rpx;
}


.search-icon {
  position: absolute;
  right: 8rpx;
  top: 50%;
  transform: translateY(-50%);
  width: 56rpx;
  height: 56rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 棕色虚线分隔 */
.brown-dashed {
  margin: 10rpx 0 12rpx;
  height: 0;
  border-top: 10rpx dashed #7b4a2b;
}

/* 上方图片位占位 */
.image-holder {
  height: auto;
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -28rpx;
  margin-right: -28rpx;
  margin-top: -59.2rpx; /* 再向上挪动一点，贴近导航栏 */
  position: relative;  /* 让内部的搜索框可以相对它定位到左下角 */
}



.holder-text { color: #c59a6a; }
.holder-img {
  width: 100%;
  height: 380rpx;
  display: block;
  border-radius: 12rpx;
  object-fit: cover;
  object-position: top;
}

/* 黑色线格子 */
.grid-wrap {
  display: flex;
  border: none; /* 去掉最外层虚线框 */
  border-radius: 16rpx;
  overflow: hidden;
  margin-left: -28rpx;
  margin-right: -28rpx;
  margin-top: 1rpx;
  margin-bottom: 40rpx;
  flex: 1;
  min-height: 0;
}



.grid-left {
  width: 220rpx;
  /* 去掉中间竖线 */
  display: flex;
  flex-direction: column;
  background: #fbf1dd; /* 比右侧稍深一点，区分但不突兀 */
}


.left-header {
  font-weight: 700;
  padding: 16rpx;
  border-bottom: 4rpx dashed rgba(90, 44, 18, 0.4); /* 内侧分隔线，稍浅一点 */
  flex: 0 0 auto;
}

.left-lines {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
}

.left-lines .left-cell {
  height: 65rpx;
  padding: 0 10rpx;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: none; /* 去掉每格的粗横线 */
  font-size: 28rpx;
  font-weight: 700;
  white-space: nowrap;
}

.left-lines .left-cell.active { 
  background: #f2ddbc; /* 比整栏底色稍深一点，突出选中项 */
}


.left-lines .left-cell.last-item {
  border-bottom: none;
}

.left-lines .left-cell:last-child { 
  border-bottom: none; 
}


.grid-right {
  flex: 1 1 auto;
  min-height: 0;
  background: #fffaf0; /* 右侧区域稍微浅一点 */
}

.food-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2rpx dashed rgba(90, 44, 18, 0.15); /* 似有似无、虚线的浅色分隔线 */
  padding: 10rpx 16rpx 12rpx 16rpx; /* 减小底部内边距，让虚线更靠上 */
}





.grid-right .food-row:last-child { border-bottom: 0; }

.food-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16rpx;              /* 名称和图片之间距离适中 */
}
.food-name {
  font-weight: 700;
  font-size: 30rpx;
  min-width: 140rpx;
  letter-spacing: 3rpx;
}
.food-img {
  margin-left: auto;       /* 把图片推到卡片右侧 */
  width: 252rpx;           /* 宽度略微收窄一点 */
  height: 160rpx;          /* 高度相应略微减小，保持整体比例 */
  background: #fff3d6;
  border: 4rpx solid #cfa86a;
  border-radius: 12rpx;
  object-fit: cover;
  display: block;
}

.add-circle {
  width: 70rpx;            /* 点击区域略大一点便于操作 */
  height: 70rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(4rpx);
}

.add-icon {
  width: 60rpx;            /* 图标本身大小，适配当前行高度 */
  height: auto;
  display: block;
}



/* 加载和空状态提示 */
.loading-tip,
.empty-tip {
  text-align: center;
  padding: 60rpx 20rpx;
  font-size: 28rpx;
  color: #999;
}


/* 筷子分割线（与首页一致风格） */
.chopsticks {
  width: 100%;
  height: auto;
  display: block;
  margin: 24rpx 0;
  border-radius: 0;
}
.chopsticks::after { content: none; }

/* 固定在底部图标上方的筷子图片 */
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

/* 复用首页底部图标布局样式（关键选择器与结构保持一致） */
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
.icons-bottom .icon-block:nth-child(2) { margin-right: 40rpx; }
.icons-bottom .icon-block:nth-child(3) { margin-left: 40rpx; }


.icon-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
}
.icon-img { width: 58rpx; height: auto; display: block; }
.icons-top .icon-img { width: 68rpx; }
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
  top: 168rpx;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 28rpx;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.08);
  z-index: -1;
}

/* 添加到清单弹窗样式 */
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
  z-index: 999;
}

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

.dialog-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #5a2c12;
  text-align: center;
  margin-bottom: 24rpx;
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

.create-list-section {
  display: flex;
  gap: 12rpx;
  align-items: center;
}

.create-list-input {
  flex: 1;
  height: 72rpx;
  background: #ffffff;
  border-radius: 12rpx;
  padding: 0 20rpx;
  border: 2rpx solid #cfa86a;
  font-size: 28rpx;
}

.create-list-btn {
  height: 72rpx;
  padding: 0 32rpx;
  background: #ffcc33;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2rpx solid #e3b34b;
  font-size: 28rpx;
  font-weight: 600;
  color: #5a2c12;
}

.create-new-btn {
  height: 72rpx;
  background: #fff5e6;
  border-radius: 12rpx;
  border: 2rpx dashed #cfa86a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  color: #8c5c2a;
  margin-top: 12rpx;
}

.dialog-actions {
  display: flex;
  gap: 16rpx;
  margin-top: 24rpx;
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

.no-checklist-tip {
  padding: 24rpx;
  text-align: center;
  background: #fff5e6;
  border-radius: 12rpx;
  border: 2rpx dashed #cfa86a;
  color: #8c5c2a;
  font-size: 26rpx;
}

.note-input {
  width: 100%;
  min-height: 120rpx;
  background: #ffffff;
  border-radius: 12rpx;
  padding: 16rpx 20rpx;
  border: 2rpx solid #cfa86a;
  font-size: 28rpx;
  color: #5a2c12;
  box-sizing: border-box;
}

</style>
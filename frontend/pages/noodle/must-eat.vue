<template>
  <view class="must-eat-page">
    <view class="banner">
      <image :src="heroBg" class="banner-bg" mode="aspectFill" />
      <view class="banner-overlay">
        <view class="banner-content">
          <view class="city-row">
            <view class="city-title-block">
              <text class="city-name">{{ cityInfo.name }}</text>
              <view class="city-underline"></view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view v-if="fetchError" class="error-tip">
      <text>{{ fetchError }}</text>
    </view>

    <view class="card-list">
      <view
        v-for="food in foods"
        :key="food.id"
        class="food-card-simple"
        @tap="openFoodDetail(food)"
      >
        <image :src="food.cover" class="food-img-simple" mode="aspectFill" />
        <view class="food-simple-info">
          <text class="food-name-simple">{{ food.name }}</text>
          <view v-if="food.cityBadge" class="city-badge-pill">{{ food.cityBadge }}</view>
        </view>
      </view>
    </view>


    <!-- 美食详情弹窗 -->
    <view
      v-if="showFoodDetailDialog && activeFood"
      class="detail-mask"
      @tap="closeFoodDetailDialog"
    >
      <view class="detail-content" @tap.stop>
        <view class="food-card">
          <image :src="activeFood.cover" class="food-img" mode="aspectFill" />
          <view class="food-body">
            <view class="food-header">
              <text class="food-name">{{ activeFood.name }}</text>
              <view v-if="activeFood.cityBadge" class="city-badge-pill">{{ activeFood.cityBadge }}</view>
            </view>
            <view
              v-if="activeFood.highlights && activeFood.highlights.length"
              class="highlight-tags"
            >
              <view v-for="tag in activeFood.highlights" :key="tag" class="highlight-tag">
                {{ tag }}
              </view>
            </view>
            <view class="food-meta">
              <view class="food-meta-left">
                <view class="rating">
                  <text class="rating-label">推荐指数</text>
                  <view class="stars">
                    <text
                      v-for="(dummy, idx) in 5"
                      :key="idx"
                      class="star"
                      :class="{ 'star--active': idx < activeFood.scoreStars }"
                    >★</text>
                  </view>
                </view>
                <view v-if="activeFood.heatLabel" class="heat-pill">{{ activeFood.heatLabel }}</view>
              </view>
              <!-- 分享按钮 -->
              <!-- #ifdef MP-WEIXIN -->
              <button
                class="card-share-icon"
                open-type="share"
                :class="{
                  'card-share-icon--disabled': activeFood._hasShared
                }"
                @tap.stop="onShareFoodClick(activeFood)"
              >
                <image
                  :src="IMG.shareIcon"
                  class="card-share-icon-img"
                  mode="aspectFit"
                />
              </button>
              <!-- #endif -->
              <!-- #ifndef MP-WEIXIN -->
              <view
                class="card-share-icon"
                :class="{
                  'card-share-icon--disabled': activeFood._hasShared
                }"
                @tap.stop="onShareFoodClick(activeFood)"
              >
                <image
                  :src="IMG.shareIcon"
                  class="card-share-icon-img"
                  mode="aspectFit"
                />
              </view>
              <!-- #endif -->
            </view>
            <view class="meta-grid">
              <view class="meta-item">
                <text class="meta-label">人均</text>
                <text class="meta-value">{{ activeFood.perCapita }}</text>
              </view>
              <view class="meta-item">
                <text class="meta-label">搭配</text>
                <text class="meta-value">{{ activeFood.pairing }}</text>
              </view>
            </view>
            <view v-if="activeFood.sceneTag" class="guide-row">
              <text class="guide-title">适配场景</text>
              <text class="guide-text">{{ activeFood.sceneTag }}</text>
            </view>
            <view v-if="activeFood.avoidPit" class="guide-row">
              <text class="guide-title">避坑提醒</text>
              <text class="guide-text">{{ activeFood.avoidPit }}</text>
            </view>
            <view v-if="activeFood.recommendShop" class="guide-row">
              <text class="guide-title">推荐店铺</text>
              <text class="guide-text">{{ activeFood.recommendShop }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view v-if="loading" class="loading">正在更新{{ cityInfo.name }}榜单...</view>

    <view v-else-if="foods.length === 0" class="empty">暂无上榜餐厅，稍后再来看看</view>

    <!-- #ifdef MP-WEIXIN -->
    <canvas
      canvas-id="mustEatPosterCanvas"
      class="poster-canvas"
      style="width: 375px; height: 700px; position: fixed; left: -9999px; top: -9999px;"
    ></canvas>
    <!-- #endif -->
  </view>
</template>

<script>
const { getMustEatList } = require('../../api/foods.js')
const { recordShare } = require('../../api/share.js')
const { IMG } = require('../../api/imageMap.js')


const CITY_TABS = [
  { id: 'xian', name: '西安', tagline: '长安城下的万面同煮' },
  { id: 'baoji', name: '宝鸡', tagline: '臊子酸辣，擀面皮筋爽' },
  { id: 'xianyang', name: '咸阳', tagline: '泾渭河畔的豪放拉面' },
  { id: 'weinan', name: '渭南', tagline: '黄河东岸的宽与细' },
  { id: 'yanan', name: '延安', tagline: '黄土地上的烈烈辣香' },
  { id: 'yulin', name: '榆林', tagline: '农牧交错的香辣与粗犷' },
  { id: 'hanzhong', name: '汉中', tagline: '巴山背篓里的米皮香' },
  { id: 'ankang', name: '安康', tagline: '秦巴山里蒸出的湿润口感' },
  { id: 'shangluo', name: '商洛', tagline: '秦岭南麓的山泉酸爽' },
  { id: 'tongchuan', name: '铜川', tagline: '耀州臊子浇满铜魂' }
]
const CITY_MAP = CITY_TABS.reduce((map, city) => {
  map[city.id] = city
  return map
}, {})
const HERO_BG = IMG.IMG_20251208_153709
const CITY_DESCRIPTION_LINE = '味在三秦 · 风味连城'
const CITY_BADGES = {
  xian: '西安味觉 ICON',
  baoji: '宝鸡非遗',
  xianyang: '泾渭风味代表',
  weinan: '潼关巷口招牌',
  yanan: '黄土地老味道',
  yulin: '榆塞硬核筋道',
  hanzhong: '汉中早餐 TOP1',
  ankang: '秦巴蒸味代表',
  shangluo: '秦岭山泉口粮',
  tongchuan: '耀州臊子鼻祖'
}
const CITY_PAIRINGS = {
  xian: '冰峰橘汽更绝',
  baoji: '配岐山辣子更香',
  xianyang: '配关中老醋',
  weinan: '搭配潼关辣子蒜泥',
  yanan: '来杯冰镇酸梅汤',
  yulin: '佐羊杂汤更劲',
  hanzhong: '热米皮 + 冷泡茶',
  ankang: '配擀面皮小菜',
  shangluo: '搭酸汤小菜',
  tongchuan: '来盅黄酒暖胃'
}
const CITY_COMPARE_TIPS = {
  xian: '西安肉夹馍腊汁厚重，潼关版本皮更酥脆',
  baoji: '宝鸡擀面皮更筋，渭南口感偏柔',
  xianyang: '扯面比油泼面更宽厚，适合重口',
  weinan: '潼关臊子面酸度高于宝鸡版本',
  yanan: '延安油泼面偏干拌，西安版本更油润',
  yulin: '饸饹面筋度高，榆林做法比西安更粗犷',
  hanzhong: '汉中热米皮比宝鸡更软糯',
  ankang: '安康蒸面湿润，汉中米皮偏爽弹',
  shangluo: '商洛酸汤面更清亮，西安酸辣面更厚',
  tongchuan: '耀州臊子面汤更红亮，宝鸡版偏酸'
}
const CITY_SCENE_TAGS = {
  xian: '夜市必点 · 也能打包带走',
  baoji: '老城巷子里的午餐之选',
  xianyang: '适合大胃口的中午主食',
  weinan: '潼关古城逛吃随手买',
  yanan: '延河边散步的夜宵',
  yulin: '陕北集市早点推荐',
  hanzhong: '清晨来一碗暖胃',
  ankang: '雨天蒸汽面最暖心',
  shangluo: '山城徒步后的补给',
  tongchuan: '老矿区人的下午茶'
}
const CITY_AVOID_PIT = {
  xian: '油泼面默认有蒜辣，怕辣记得提前备注',
  baoji: '擀面皮浇头多，别急着搅匀',
  xianyang: '扯面分粗细，记得点自己想要的宽度',
  weinan: '臊子面讲究酸香，怕酸可要半勺醋',
  yanan: '油泼要趁热拌，凉了会黏',
  yulin: '荞面饸饹容易坨，端上先拌开',
  hanzhong: '热米皮要尽快吃，久放会变硬',
  ankang: '蒸面量大，少食量可点半份',
  shangluo: '酸汤面偏清淡，可自选辣子',
  tongchuan: '臊子汤滚烫，先喝汤再吃面'
}
const CITY_HIGHLIGHTS = {
  xian: ['手工宽面', '辣度适中'],
  baoji: ['臊子酸香', '筋道薄皮'],
  xianyang: ['关中拉伸', '蒜香重'],
  weinan: ['潼关臊子', '酸中带辣'],
  yanan: ['陕北辣香', '粗犷筋道'],
  yulin: ['荞麦香', '羊油提味'],
  hanzhong: ['米皮温润', '米香足'],
  ankang: ['蒸汽润口', '山椒点醒'],
  shangluo: ['山泉清汤', '酸爽轻盈'],
  tongchuan: ['耀州臊子', '红亮汤头']
}
const FALLBACK_FOODS = {
  xian: [
    {
      name: '马文章胖子甑糕',
      cover: IMG.retouch_2025112414394823,
      score: 4.8,
      highlights: ['糯香软甜', '甑蒸老味'],
      perCapita: '¥48',
      pairing: CITY_PAIRINGS.xian,

      cityBadge: CITY_BADGES.xian,
      compareTip: '西安甑糕更糯，延安版本更甜',
      sceneTag: '早餐暖胃，也适合夜宵',
      avoidPit: '刚出甑非常烫，记得慢慢吃'
    },
    {
      name: '马家小馆腊牛肉',
      cover: IMG.retouch_2025112414391093,
      score: 4.9,
      highlights: ['慢火卤制', '肥瘦均衡'],
      perCapita: '¥62',
      pairing: CITY_PAIRINGS.xian,
      cityBadge: CITY_BADGES.xian,
      compareTip: '关中腊牛肉香料足，汉中版本更清爽',
      sceneTag: '适合做伴手礼或冷盘',
      avoidPit: '腊味偏咸，记得配饼或青菜'
    }
  ],
  baoji: [
    {
      name: '岐山臊子面博物馆店',
      cover: IMG.retouch_2025112414392946,
      score: 4.7,
      highlights: ['臊子酸香', '筋道薄面'],
      perCapita: '¥35',
      pairing: CITY_PAIRINGS.baoji,
   
      cityBadge: CITY_BADGES.baoji,
      compareTip: '宝鸡臊子更酸爽，渭南口感更柔',
      sceneTag: '午餐一碗刚刚好',
      avoidPit: '臊子汤滚烫，先喝汤再拌面'
    }
  ],
  default: [
    {
      name: '招牌面食',
      cover: IMG.retouch_2025112414392946,
      score: 4,
      highlights: ['现擀现煮', '口感筋道'],
      perCapita: '¥32',
      pairing: '热茶更配',

      cityBadge: '三秦热度',
      compareTip: '关中面偏厚，陕南面更细',
      sceneTag: '适合快餐或打包',
      avoidPit: '出锅就吃，久放易坨'
    }
  ]
}

export default {
  data() {
    return {
      IMG,
      cityId: 'xian',
      heroBg: HERO_BG,
      foods: [],
      loading: false,
      fetchError: '',
      cityDescriptionLine: CITY_DESCRIPTION_LINE,
      shareGeneratingId: null,
      // 当前要分享的美食（用于 onShareAppMessage）
      sharingFood: null,
      showFoodDetailDialog: false,
      activeFood: null,
      // 从分享链接进入时需要打开的美食ID
      pendingFoodId: null
    }

  },

  computed: {
    cityInfo() {
      return CITY_MAP[this.cityId] || { name: '陕西', tagline: '三秦大地面香长' }
    }
  },
  onLoad(query) {
    const routeCity = (query?.city || '').trim()
    if (routeCity && CITY_MAP[routeCity]) {
      this.cityId = routeCity
    }
    
    // 检查是否有分享的美食ID参数
    const foodId = (query?.foodId || query?.food || '').trim()
    if (foodId) {
      this.pendingFoodId = foodId
      console.log('[must-eat] 从分享链接进入，需要打开美食ID:', foodId)
    }
    
    uni.setNavigationBarTitle({ title: `${this.cityInfo.name}寻味榜` })


    uni.setNavigationBarColor({ frontColor: '#000000', backgroundColor: '#fff5dc' })
    this.fetchFoods()
  },
  methods: {
    computeActiveStars(score) {
      const num = Number(score)
      if (!Number.isFinite(num)) return 0
      return Math.max(0, Math.min(5, Math.floor(num)))
    },
    buildRequestCityName() {
      const currentCityName = this.cityInfo.name || ''
      if (!currentCityName) return '西安市'
      if (/市$/.test(currentCityName)) return currentCityName
      return `${currentCityName}市`
    },
    async fetchFoods() {
      this.loading = true
      this.fetchError = ''
      try {
        const requestCityName = this.buildRequestCityName()
        const res = await getMustEatList(requestCityName)
        const { success, data, message } = res || {}
        if (!success) {
          const errorMessage = message || '获取寻味榜失败'


          uni.showToast({ title: errorMessage, icon: 'none' })
          this.fetchError = errorMessage
          this.foods = this.getFallbackFoods()
          // 即使使用兜底数据，也尝试打开弹窗
          this.openPendingFoodDialog()
          return
        }

        const foodList = Array.isArray(data) ? data : []
        if (foodList.length === 0) {
          this.foods = this.getFallbackFoods()
          // 即使使用兜底数据，也尝试打开弹窗
          this.openPendingFoodDialog()
          return
        }

        this.foods = foodList.map((item, index) => this.normalizeFood(item, index))
        
        // 数据加载完成后，如果有待打开的美食ID，自动打开弹窗
        this.openPendingFoodDialog()
      } catch (err) {
        console.warn('[must-eat] fetch must-eat api fail:', err)
        this.fetchError = '网络繁忙，已为你展示榜单推荐'
        this.foods = this.getFallbackFoods()
        
        // 即使使用兜底数据，也尝试打开弹窗
        this.openPendingFoodDialog()
      } finally {
        this.loading = false
      }
    },
    
    // 打开待显示的美食详情弹窗（从分享链接进入时使用）
    openPendingFoodDialog() {
      if (!this.pendingFoodId) return
      
      // 等待一下，确保页面已渲染
      setTimeout(() => {
        // 在 foods 列表中查找对应的美食
        const targetFood = this.foods.find(food => {
          // 支持多种ID格式匹配
          return String(food.id) === String(this.pendingFoodId) ||
                 String(food.slug) === String(this.pendingFoodId) ||
                 (food.name && String(food.name) === String(this.pendingFoodId))
        })
        
        if (targetFood) {
          console.log('[must-eat] 找到分享的美食，自动打开弹窗:', targetFood.name, targetFood.id)
          this.openFoodDetail(targetFood)
          // 清空待打开的美食ID
          this.pendingFoodId = null
        } else {
          console.warn('[must-eat] 未找到分享的美食ID:', this.pendingFoodId, '当前美食列表:', this.foods.map(f => ({ id: f.id, name: f.name })))
          // 如果找不到，清空待打开的美食ID，避免下次误触发
          this.pendingFoodId = null
        }
      }, 300) // 延迟300ms，确保页面已渲染完成
    },
    normalizeFood(item, index) {
      // 只用后端返回的 score 字段作为推荐指数来源，保证分数和星星一一对应
      const scoreFromApi = item && Object.prototype.hasOwnProperty.call(item, 'score')
        ? item.score
        : undefined

      const base = {
        id: item.id || item.slug,
        name: item.foodName || item.name || '本地人挚爱',
        cover: item.imageUrl || item.coverImage || item.cover || item.img || IMG.retouch_2025112414392946,
        score: scoreFromApi,
        pricePerPerson: item.pricePerPerson,
        price: item.price,
        averagePrice: item.averagePrice,
        perCapita: item.perCapita || item.priceText,
        highlights: item.highlights || item.highlightTags,
        highlightTags: item.highlightTags,
        tags: item.tags || item.tasteTags,
        keywords: item.keywords,
        reviewCount: item.reviewCount,
        popularity: item.popularity,
        hotLevel: item.hotLevel,
        pairing: item.pairing || item.recommendDrink,
        heatLabel: item.heatLabel,
        cityBadge: item.cityBadge,
        compareTip: item.compareTip,
        sceneTag: item.sceneTag,
        avoidPit: item.avoidPit,
        recommendShop: item.recommendShop
      }

      const model = this.buildFoodModel(base, index)

      console.log(
        '[must-eat] 推荐指数调试:',
        model.name,
        'scoreFromApi=', scoreFromApi,
        'normalizedScore=', model.score,
        'scoreStars=', model.scoreStars
      )

      return model
    },
    buildFoodModel(base, index) {
      // 先把 score 归一化到 0~5，再用来计算星星数量
      const normalizedScore = this.normalizeScore(base.score)

      return {
        id: base.id || `${this.cityId}-${index}`,
        name: base.name || '本地人挚爱',
        cover: base.cover || IMG.retouch_2025112414392946,
        score: normalizedScore,
        scoreStars: this.computeActiveStars(normalizedScore),
        highlights: this.buildHighlights(base),
        perCapita: this.composePerCapita(base),
        pairing: this.composePairing(base),
        heatLabel: this.composeHeatLabel(base),
        cityBadge: this.composeCityBadge(base),
        compareTip: this.composeCompareTip(base),
        sceneTag: this.composeSceneTag(base),
        avoidPit: this.composeAvoidPit(base),
        recommendShop: this.composeRecommendShop(base)
      }
    },
    parseStringOrArrayToArray(raw) {
      if (!raw && raw !== 0) return []
      if (Array.isArray(raw)) {
        return raw
          .map((v) => String(v).trim())
          .filter(Boolean)
      }
      if (typeof raw === 'string') {
        const trimmed = raw.trim()
        if (!trimmed) return []
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
          try {
            const parsed = JSON.parse(trimmed)
            if (Array.isArray(parsed)) {
              return parsed
                .map((v) => String(v).trim())
                .filter(Boolean)
            }
          } catch (e) {
            // ignore and fallback to split
          }
        }
        return trimmed
          .split(/[,，、|\s]/)
          .map((tag) => tag.trim())
          .filter(Boolean)
      }
      return [String(raw).trim()].filter(Boolean)
    },
    stringifyArrayOrPlain(raw, joiner = '、') {
      if (raw == null) return ''
      if (Array.isArray(raw)) {
        return raw
          .map((v) => String(v).trim())
          .filter(Boolean)
          .join(joiner)
      }
      if (typeof raw === 'string') {
        const trimmed = raw.trim()
        if (!trimmed) return ''
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
          try {
            const parsed = JSON.parse(trimmed)
            if (Array.isArray(parsed)) {
              return parsed
                .map((v) => String(v).trim())
                .filter(Boolean)
                .join(joiner)
            }
          } catch (e) {
            // ignore and fall back
          }
        }
        return trimmed
      }
      return String(raw)
    },
    buildHighlights(base) {
      const fromHighlights = this.parseStringOrArrayToArray(base.highlights)
      if (fromHighlights.length) {
        return fromHighlights
      }

      const raw = base.highlightTags || base.tags || base.keywords
      const fromFallback = this.parseStringOrArrayToArray(raw)
      if (fromFallback.length) {
        return fromFallback
      }

      return CITY_HIGHLIGHTS[this.cityId] || ['手工现擀', '辣度适中']
    },
    composePerCapita(base) {
      if (base.perCapita) return base.perCapita
      const candidate = base.pricePerPerson ?? base.price ?? base.averagePrice
      if (candidate == null || candidate === '') {
        return '¥50'
      }
      if (typeof candidate === 'number') {
        return `¥${candidate}`
      }
      const text = String(candidate).replace(/\/人/g, '').trim()
      if (/¥/.test(text) || /元/.test(text)) return text
      return `¥${text}`
    },
    composePairing(base) {
      const text = this.stringifyArrayOrPlain(base.pairing)
      if (text) return text
      return CITY_PAIRINGS[this.cityId] || '冰峰橘汽更绝'
    },
    composeHeatLabel(base) {
      if (base.heatLabel) return base.heatLabel
      const reviewNum = Number(base.reviewCount)
      if (Number.isFinite(reviewNum) && reviewNum > 0) {
        return `今日被点 ${this.formatHeatCount(reviewNum)} 次`
      }
      const popNum = Number(base.popularity)
      if (Number.isFinite(popNum) && popNum > 0) {
        return `今日被点 ${this.formatHeatCount(popNum)} 次`
      }
      if (base.hotLevel) return `${base.hotLevel}热度`
      return ''
    },
    formatHeatCount(count) {
      if (count >= 10000) return `${(count / 10000).toFixed(1)}万+`
      if (count >= 1000) return `${(count / 1000).toFixed(1)}k+`
      return `${Math.max(1, Math.round(count))}+`
    },
    composeCityBadge(base) {
      const text = this.stringifyArrayOrPlain(base.cityBadge)
      if (text) return text
      return CITY_BADGES[this.cityId] || ''
    },
    composeCompareTip(base) {
      if (base.compareTip) return base.compareTip
      return CITY_COMPARE_TIPS[this.cityId] || ''
    },
    composeSceneTag(base) {
      const text = this.stringifyArrayOrPlain(base.sceneTag)
      if (text) return text
      return CITY_SCENE_TAGS[this.cityId] || ''
    },
    composeAvoidPit(base) {
      const text = this.stringifyArrayOrPlain(base.avoidPit)
      if (text) return text
      return CITY_AVOID_PIT[this.cityId] || ''
    },
    composeRecommendShop(base) {
      return this.stringifyArrayOrPlain(base.recommendShop, '；')
    },
    normalizeScore(rawScore) {
      const num = Number(rawScore)
      if (!Number.isFinite(num) || num <= 0) return 0

      let scaled = num

      if (num > 5 && num <= 10) {
        // 看起来是 0~10 分，压缩到 0~5
        scaled = num / 2
      } else if (num > 10) {
        // 认为是 0~100 分或更大区间，压缩到 0~5
        scaled = num / 20
      }

      return Math.min(5, Math.max(0, scaled))
    },
    getFallbackFoods() {
      const list = FALLBACK_FOODS[this.cityId] || FALLBACK_FOODS.default
      return list.map((item, idx) => this.buildFoodModel({ ...item }, idx))
    },

    openFoodDetail(food) {
      if (!food) return
      this.activeFood = food
      this.showFoodDetailDialog = true
    },

    closeFoodDetailDialog() {
      this.showFoodDetailDialog = false
      this.activeFood = null
    },

    // 点击分享按钮（微信小程序会触发 onShareAppMessage）
    onShareFoodClick(food) {
      if (!food || !food.id) {
        uni.showToast({ title: '菜品信息不完整', icon: 'none' })
        return
      }
      if (food._hasShared) {
        uni.showToast({ title: '该菜品已分享', icon: 'none' })
        return
      }

      // 保存当前要分享的美食信息（确保是用户点击的对应食物的详情弹窗中的食物）
      // 这个 food 就是弹窗中 activeFood 的引用，确保分享时使用正确的食物图片
      this.sharingFood = food

      // #ifdef MP-WEIXIN
      // 微信小程序中，点击 open-type="share" 的按钮会自动触发 onShareAppMessage
      console.log('[must-eat] 用户点击分享按钮，美食ID:', food.id, '美食名称:', food.name, '城市:', this.cityInfo.name, '食物图片:', food.cover)
      // #endif
      
      // #ifndef MP-WEIXIN
      // 非微信小程序环境，提示用户
      uni.showToast({ title: '请在微信小程序中分享', icon: 'none' })
      // #endif
    },

    // 微信小程序分享配置
    onShareAppMessage(options) {
      console.log('[must-eat] onShareAppMessage 被调用', options)
      
      // 优先使用 sharingFood（用户点击分享按钮时保存的食物）
      // 如果没有，则使用 activeFood（当前弹窗中显示的食物）
      // 确保使用的是用户点击分享按钮时弹窗中显示的那个食物的信息
      const food = this.sharingFood || this.activeFood
      
      if (!food || !food.id) {
        console.warn('[must-eat] 分享时美食信息为空，使用默认配置')
        return {
          title: `点击一键获取${this.cityInfo.name || '陕西'}的寻味榜单中的美食吧~`,
          path: `/pages/noodle/must-eat?city=${encodeURIComponent(this.cityId || 'xian')}`,
          imageUrl: this.heroBg || IMG.IMG_20251208_153709
        }
      }

      // 构建分享路径，包含城市ID和美食ID
      // 这样用户点击分享链接后，会自动跳转到必吃榜页面并打开对应美食的弹窗
      const sharePath = `/pages/noodle/must-eat?city=${encodeURIComponent(this.cityId || 'xian')}&foodId=${encodeURIComponent(food.id || '')}`
      
      // 分享标题：使用指定的文案格式
      const cityName = this.cityInfo.name || '陕西'
      const shareTitle = `点击一键获取${cityName}的寻味榜单中的美食吧~`
      
      // 使用弹窗中显示的食物图片（food.cover 就是弹窗中 activeFood.cover 的图片）
      const shareImageUrl = food.cover || this.heroBg || IMG.IMG_20251208_153709
      
      console.log('[must-eat] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        cityId: this.cityId,
        cityName: cityName,
        foodId: food.id,
        foodName: food.name,
        imageUrl: shareImageUrl,
        isSharingFood: !!this.sharingFood,
        isActiveFood: !!this.activeFood
      })

      // 记录分享行为
      this.recordFoodShareBehavior(food, 'WECHAT_MESSAGE').catch(err => {
        console.error('[must-eat] 记录分享行为失败', err)
      })

      // 标记为已分享
      if (this.$set) {
        this.$set(food, '_hasShared', true)
      } else {
        food._hasShared = true
      }

      // 分享完成后，清空 sharingFood，避免下次分享时误用
      this.sharingFood = null

      return {
        title: shareTitle,
        path: sharePath,
        imageUrl: shareImageUrl // 分享卡片显示的图片（详情弹窗中对应食物的图片）
      }
    },

    async drawFoodPoster(food) {
      const ctx = uni.createCanvasContext('mustEatPosterCanvas', this)
      const heroBgPath = this.heroBg || HERO_BG

      let coverPath = ''
      try {
        coverPath = await this.downloadImage(food.cover || heroBgPath)
      } catch (e) {
        console.warn('[must-eat] 食物图片下载失败，使用背景图兜底:', e)
        coverPath = heroBgPath
      }

      const W = 375
      const H = 700
      const heroHeight = 230
      const cardX = 18
      const cardY = heroHeight - 35
      const cardWidth = W - cardX * 2
      const cardPaddingX = 26
      const cardPaddingY = 28

      ctx.clearRect(0, 0, W, H)
      const bgGradient = ctx.createLinearGradient(0, 0, 0, H)
      bgGradient.addColorStop(0, '#fffaf1')
      bgGradient.addColorStop(1, '#fff5dc')
      ctx.setFillStyle(bgGradient)
      ctx.fillRect(0, 0, W, H)

      ctx.save()
      const heroRadius = 160
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(W, 0)
      ctx.lineTo(W, heroHeight - heroRadius)
      ctx.quadraticCurveTo(W, heroHeight, W - heroRadius, heroHeight)
      ctx.lineTo(heroRadius, heroHeight)
      ctx.quadraticCurveTo(0, heroHeight, 0, heroHeight - heroRadius)
      ctx.closePath()
      ctx.clip()
      ctx.drawImage(heroBgPath, -20, 0, W + 40, heroHeight + 160)
      ctx.restore()

      ctx.save()
      const heroOverlay = ctx.createLinearGradient(0, heroHeight - 140, 0, heroHeight + 40)
      heroOverlay.addColorStop(0, 'rgba(255,255,255,0)')
      heroOverlay.addColorStop(1, 'rgba(0,0,0,0.25)')
      ctx.setFillStyle(heroOverlay)
      ctx.fillRect(0, heroHeight - 140, W, 160)
      ctx.restore()

      ctx.setFillStyle('#ffffff')
      ctx.setFontSize(34)
      ctx.setTextAlign('left')
      ctx.setTextBaseline('top')
      ctx.fillText(this.cityInfo.name || '陕西', 24, 34)
      ctx.setFillStyle('#ffd7a0')
      ctx.setFontSize(16)
      ctx.fillText(this.cityDescriptionLine || CITY_DESCRIPTION_LINE, 24, 80)
      ctx.setFillStyle('#ffb347')
      ctx.fillRect(24, 118, 64, 4)

      const cardHeight = H - cardY - 24
      ctx.save()
      ctx.setShadow(0, 28, 40, 'rgba(170, 110, 42, 0.18)')
      this.fillRoundRect(ctx, cardX, cardY, cardWidth, cardHeight, 40, '#fff6e3')
      ctx.restore()
      ctx.save()
      this.drawRoundRectPath(ctx, cardX, cardY, cardWidth, cardHeight, 40)
      ctx.setStrokeStyle('rgba(255, 189, 118, 0.45)')
      ctx.stroke()
      ctx.restore()

      const contentX = cardX + cardPaddingX
      const contentWidth = cardWidth - cardPaddingX * 2
      let cursorY = cardY + cardPaddingY

      const coverHeight = 200
      this.addRoundRect(ctx, contentX, cursorY, contentWidth, coverHeight, 32)
      ctx.drawImage(coverPath, contentX, cursorY, contentWidth, coverHeight)
      ctx.restore()
      cursorY += coverHeight + 24

      ctx.setFillStyle('#5a2c12')
      ctx.setFontSize(26)
      ctx.setTextAlign('left')
      ctx.setTextBaseline('alphabetic')
      ctx.fillText(food.name || '本地人挚爱', contentX, cursorY)
      if (food.cityBadge) {
        ctx.setFontSize(14)
        const badgePadding = 12
        const badgeHeight = 30
        const badgeWidth = Math.min(ctx.measureText(food.cityBadge).width + badgePadding * 2, contentWidth)
        const badgeX = contentX + contentWidth - badgeWidth
        const badgeY = cursorY - 24
        this.fillRoundRect(ctx, badgeX, badgeY, badgeWidth, badgeHeight, badgeHeight / 2, 'rgba(255,193,120,0.3)')
        ctx.setFillStyle('#c15500')
        ctx.setTextAlign('center')
        ctx.setTextBaseline('middle')
        ctx.fillText(food.cityBadge, badgeX + badgeWidth / 2, badgeY + badgeHeight / 2)
        ctx.setTextAlign('left')
        ctx.setTextBaseline('alphabetic')
        ctx.setFillStyle('#5a2c12')
        ctx.setFontSize(26)
      }
      cursorY += 32

      cursorY = this.drawTagPills(ctx, food.highlights, contentX, cursorY, contentWidth) + 18

      const ratingBlockHeight = 56
      const ratingBlockWidth = 200
      this.fillRoundRect(ctx, contentX, cursorY, ratingBlockWidth, ratingBlockHeight, ratingBlockHeight / 2, 'rgba(255,255,255,0.75)')
      ctx.setFillStyle('rgba(90,44,18,0.75)')
      ctx.setFontSize(14)
      ctx.setTextAlign('left')
      ctx.setTextBaseline('top')
      ctx.fillText('推荐指数', contentX + 16, cursorY + 10)
      const starBaseline = cursorY + ratingBlockHeight - 14
      ctx.setFontSize(18)
      for (let i = 0; i < 5; i += 1) {
        ctx.setFillStyle(i < (food.scoreStars || 0) ? '#ffb23c' : '#dfd5c7')
        ctx.fillText('★', contentX + 16 + i * 20, starBaseline)
      }
      if (food.heatLabel) {
        ctx.setFontSize(14)
        const heatPadding = 14
        const heatHeight = 44
        const textWidth = ctx.measureText(food.heatLabel).width
        const heatWidth = Math.min(contentWidth / 2, textWidth + heatPadding * 2)
        const heatX = contentX + contentWidth - heatWidth
        const heatY = cursorY + 6
        this.fillRoundRect(ctx, heatX, heatY, heatWidth, heatHeight, heatHeight / 2, 'rgba(255,170,80,0.15)')
        ctx.setFillStyle('#b94800')
        ctx.setTextAlign('center')
        ctx.setTextBaseline('middle')
        ctx.fillText(food.heatLabel, heatX + heatWidth / 2, heatY + heatHeight / 2)
        ctx.setTextAlign('left')
        ctx.setTextBaseline('alphabetic')
      }
      cursorY += ratingBlockHeight + 20

      cursorY = this.drawMetaGrid(ctx, [
        { label: '人均', value: food.perCapita || '¥50' },
        { label: '搭配', value: food.pairing || CITY_PAIRINGS[this.cityId] || '' }
      ], contentX, cursorY, contentWidth) + 18

      const infoBlocks = [
        { title: '适配场景', value: food.sceneTag },
        { title: '避坑提醒', value: food.avoidPit },
        { title: '推荐店铺', value: food.recommendShop }
      ]
      infoBlocks.forEach(block => {
        if (block.value) {
          cursorY = this.drawGuideBlock(ctx, block.title, block.value, contentX, cursorY, contentWidth) + 14
        }
      })

      ctx.setFillStyle('rgba(90,44,18,0.45)')
      ctx.setFontSize(12)
      ctx.setTextAlign('center')
      ctx.setTextBaseline('alphabetic')
      ctx.fillText('嘹咋咧 · 分享三秦味道', W / 2, H - 24)

      return new Promise((resolve, reject) => {
        ctx.draw(false, () => {
          uni.canvasToTempFilePath({
            canvasId: 'mustEatPosterCanvas',
            width: W,
            height: H,
            destWidth: W * 2,
            destHeight: H * 2,
            fileType: 'png',
            quality: 1,
            success: (res) => resolve(res.tempFilePath),
            fail: (err) => {
              uni.showToast({ title: '导出图片失败', icon: 'none' })
              reject(err)
            }
          }, this)
        })
      })
    },

    downloadImage(url) {
      return new Promise((resolve, reject) => {
        if (!url) return reject(new Error('图片地址为空'))
        uni.getImageInfo({
          src: url,
          success: (res) => resolve(res.path),
          fail: (err) => reject(err)
        })
      })
    },

    savePosterToAlbum(filePath) {
      return new Promise((resolve, reject) => {
        uni.saveImageToPhotosAlbum({
          filePath,
          success: () => {
            uni.showToast({ title: '已保存到相册', icon: 'success' })
            resolve()
          },
          fail: (err) => {
            console.error('[must-eat] 保存海报失败:', err)
            if (err.errMsg && err.errMsg.includes('auth deny')) {
              uni.showModal({
                title: '需要授权',
                content: '请在设置中开启“保存到相册”后重试',
                confirmText: '去设置',
                success(res) {
                  if (res.confirm) {
                    uni.openSetting({})
                  }
                }
              })
            } else {
              uni.showToast({ title: '保存失败', icon: 'none' })
            }
            reject(err)
          }
        })
      })
    },

    async recordFoodShareBehavior(food, shareChannel = 'WECHAT_MESSAGE') {
      try {
        await recordShare({
          targetId: food.id,
          targetType: 'FOOD',
          shareChannel: shareChannel,
          shareTitle: food.name,
          shareDesc: food.sceneTag || food.avoidPit || '',
          shareCover: food.cover
        })
      } catch (e) {
        console.error('[must-eat] 分享埋点失败:', e)
      }
    },

    addRoundRect(ctx, x, y, w, h, r) {
      ctx.save()
      this.drawRoundRectPath(ctx, x, y, w, h, r)
      ctx.clip()
    },

    drawRoundRectPath(ctx, x, y, w, h, r) {
      const radius = Math.max(0, Math.min(r, w / 2, h / 2))
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + w - radius, y)
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius)
      ctx.lineTo(x + w, y + h - radius)
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h)
      ctx.lineTo(x + radius, y + h)
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
    },

    fillRoundRect(ctx, x, y, w, h, r, color) {
      ctx.save()
      this.drawRoundRectPath(ctx, x, y, w, h, r)
      ctx.setFillStyle(color)
      ctx.fill()
      ctx.restore()
    },

    drawTagPills(ctx, tags, startX, startY, maxWidth) {
      if (!tags) return startY
      const normalized = this.parseStringOrArrayToArray
        ? this.parseStringOrArrayToArray(tags)
        : (Array.isArray(tags) ? tags : String(tags || '').split(/[,，\s]/))
      const filtered = normalized
        .map(tag => String(tag).trim())
        .filter(Boolean)
      if (!filtered.length) return startY

      const fontSize = 12
      const horizontalPadding = 12
      const verticalPadding = 6
      const rowGap = 10
      const columnGap = 10
      const availableWidth = Math.max(40, maxWidth)
      const pillHeight = fontSize + verticalPadding * 2
      let cursorX = startX
      let cursorY = startY

      ctx.setFontSize(fontSize)
      ctx.setTextAlign('left')
      ctx.setTextBaseline('middle')

      filtered.forEach((text) => {
        const pillText = text
        const metrics = ctx.measureText(pillText)
        const desiredWidth = metrics.width + horizontalPadding * 2
        let pillWidth = Math.min(desiredWidth, availableWidth)
        if (cursorX + pillWidth > startX + availableWidth) {
          cursorX = startX
          cursorY += pillHeight + rowGap
        }
        this.fillRoundRect(ctx, cursorX, cursorY, pillWidth, pillHeight, pillHeight / 2, '#fff3d2')
        ctx.setFillStyle('#8a4b0f')
        ctx.fillText(pillText, cursorX + horizontalPadding, cursorY + pillHeight / 2)
        cursorX += pillWidth + columnGap
      })

      return cursorY + pillHeight
    },

    drawMetaGrid(ctx, items, x, y, width) {
      const safeItems = Array.isArray(items) ? items : []
      if (!safeItems.length) return y
      const boxGap = 12
      const boxWidth = (width - boxGap) / 2
      const boxHeight = 72
      safeItems.slice(0, 2).forEach((item, idx) => {
        const boxX = x + idx * (boxWidth + boxGap)
        this.fillRoundRect(ctx, boxX, y, boxWidth, boxHeight, 22, 'rgba(255,255,255,0.7)')
        ctx.setFillStyle('rgba(90,44,18,0.65)')
        ctx.setFontSize(14)
        ctx.setTextAlign('left')
        ctx.setTextBaseline('top')
        ctx.fillText(item.label || '', boxX + 14, y + 12)
        ctx.setFillStyle('#b84a00')
        ctx.setFontSize(20)
        ctx.setTextBaseline('alphabetic')
        ctx.fillText(item.value || '--', boxX + 14, y + boxHeight - 14)
      })
      return y + boxHeight
    },

    drawGuideBlock(ctx, title, content, x, y, width) {
      const text = this.stringifyArrayOrPlain ? this.stringifyArrayOrPlain(content, '、') : String(content || '')
      if (!text) return y
      const paddingX = 18
      const paddingY = 16
      const titleLineHeight = 20
      const bodyLineHeight = 22
      const maxLines = 3
      const blockHeight = paddingY * 2 + titleLineHeight + 6 + bodyLineHeight * maxLines
      this.fillRoundRect(ctx, x, y, width, blockHeight, 22, 'rgba(255,255,255,0.62)')

      ctx.setFillStyle('rgba(90,44,18,0.75)')
      ctx.setFontSize(14)
      ctx.setTextAlign('left')
      ctx.setTextBaseline('top')
      ctx.fillText(title, x + paddingX, y + paddingY)
      ctx.setFillStyle('#5a2c12')
      ctx.setFontSize(16)
      this.drawMultilineText(
        ctx,
        text,
        x + paddingX,
        y + paddingY + titleLineHeight + 6,
        width - paddingX * 2,
        bodyLineHeight,
        maxLines
      )
      return y + blockHeight
    },

    drawMultilineText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
      if (!text) return
      const chars = String(text).split('')
      let line = ''
      let lineCount = 1
      for (let i = 0; i < chars.length; i += 1) {
        const testLine = line + chars[i]
        const measure = ctx.measureText(testLine)
        if (measure.width > maxWidth && i > 0) {
          ctx.fillText(line, x, y)
          line = chars[i]
          y += lineHeight
          lineCount += 1
          if (lineCount > maxLines) {
            ctx.fillText('...', x, y)
            return
          }
        } else {
          line = testLine
        }
      }
      if (line && lineCount <= maxLines) {
        ctx.fillText(line, x, y)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.must-eat-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  padding: 0 24rpx 60rpx;
  box-sizing: border-box;
}
.banner {
  position: relative;
  width: calc(100% + 48rpx);
  margin: 0 -24rpx 24rpx;
  height: 420rpx;
  overflow: hidden;
  border-radius: 0 0 160rpx 160rpx;
  box-shadow: 0 28rpx 50rpx rgba(94, 46, 6, 0.32);
}
.banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 245, 220, 0.6) 1%, rgba(255, 245, 220, 0.25) 30%, rgba(255, 241, 212, 0) 40%);
  z-index: 1;
  pointer-events: none;
}




.banner-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: -48rpx;
  bottom: 0;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
  z-index: 0;
}


.banner-overlay {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(210deg, rgba(255, 255, 255, 0) 0%, rgba(255, 243, 220, 0.08) 55%, rgba(255, 236, 204, 0.28) 82%, rgba(255, 233, 198, 0.4) 100%);
  padding: 24rpx 32rpx 56rpx;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2;
}

.banner-content {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
  color: #fff7ea;
}
.city-row {
  margin-top: 0;
  padding-top: 8rpx;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20rpx;
}
.city-title-block {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}
.city-name {
  font-size: 52rpx;
  font-weight: 800;
  color: #fff;
}
.city-underline {
  align-self: flex-start;
  width: auto;
  min-width: 96%;
  max-width: 100%;
  height: 8rpx;
  padding-right: 8rpx;
  border-radius: 999px;
  background: linear-gradient(90deg, #ffb347, #ff7a18);
}
.error-tip {
  margin: 24rpx 0;
  padding: 20rpx 24rpx;
  border-radius: 20rpx;
  background: rgba(255, 148, 128, 0.15);
  color: #b84a00;
  font-size: 26rpx;
}
.card-list {
  display: flex;
  flex-direction: column;
  gap: 32rpx;
  margin-top: 40rpx;
}

.food-card-simple {
  background: #fff6e3;
  border-radius: 32rpx;
  overflow: hidden;
  box-shadow: 0 20rpx 30rpx rgba(170, 110, 42, 0.18);
  display: flex;
  flex-direction: column;
}

.food-img-simple {
  width: 100%;
  height: 340rpx;
  object-fit: cover;
  display: block;
}

.food-simple-info {
  padding: 16rpx 24rpx 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16rpx;
}

.food-name-simple {
  font-size: 32rpx;
  font-weight: 700;
  color: #5a2c12;
  flex: 1;
  min-width: 0;
}

.food-card {


  position: relative;
  background: linear-gradient(160deg, #fffdf8 0%, #fff6e3 65%, #ffe7c1 100%);
  border-radius: 40rpx;
  overflow: hidden;
  border: 1px solid rgba(255, 191, 120, 0.3);
  box-shadow: 0 30rpx 46rpx rgba(170, 110, 42, 0.22);
  transform-origin: center top;
}
.food-card::after {
  content: '';
  position: absolute;
  inset: 56rpx 36rpx auto auto;
  width: 160rpx;
  height: 160rpx;
  background: radial-gradient(circle at 30% 30%, rgba(255, 191, 120, 0.25), rgba(255, 191, 120, 0));
  pointer-events: none;
}
.food-img {
  width: 100%;
  height: 370rpx;
  object-fit: cover;
  display: block;
  border-bottom-left-radius: 52rpx;
  border-bottom-right-radius: 52rpx;
}
.card-share-icon {
  width: 96rpx;
  height: 96rpx;
  border-radius: 48rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  border: none;
  line-height: 1;
  background-color: transparent;
  /* 微信小程序 button 样式重置 */
  &::after {
    border: none;
  }
}
.card-share-icon--disabled {
  opacity: 0.5;
}
.card-share-icon-img {
  width: 56rpx;
  height: 56rpx;
}
.food-body {
  position: relative;
  z-index: 1;
  padding: 36rpx 36rpx 40rpx;
  display: flex;
  flex-direction: column;
  gap: 22rpx;
}
.food-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24rpx;
}
.city-badge-pill {
  padding: 8rpx 18rpx;
  border-radius: 999px;
  background: rgba(255, 193, 120, 0.22);
  color: #c15500;
  font-size: 24rpx;
  font-weight: 600;
}
.food-name {
  font-size: 36rpx;
  font-weight: 700;
}
.highlight-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12rpx;
}
.highlight-tag {
  padding: 6rpx 18rpx;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: #8a4b0f;
  font-size: 24rpx;
  box-shadow: inset 0 0 0 1px rgba(255, 181, 96, 0.4);
}
.food-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16rpx;
  flex-wrap: nowrap;
}
.food-meta-left {
  display: flex;
  align-items: center;
  gap: 12rpx;
  flex: 1;
  min-width: 0;
}
.heat-pill {
  padding: 10rpx 18rpx;
  border-radius: 999px;
  background: rgba(255, 170, 80, 0.12);
  color: #b94800;
  font-size: 24rpx;
}
.meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16rpx;
}
.meta-item {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 24rpx;
  padding: 18rpx 20rpx;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
  box-shadow: inset 0 0 0 1px rgba(255, 189, 118, 0.3);
}
.meta-label {
  font-size: 24rpx;
  color: rgba(90, 44, 18, 0.6);
}
.meta-value {
  font-size: 30rpx;
  font-weight: 700;
  color: #b84a00;
}
.guide-row {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
  background: rgba(255, 255, 255, 0.58);
  border-radius: 20rpx;
  padding: 18rpx 20rpx;
  box-shadow: inset 0 0 0 1px rgba(255, 181, 96, 0.25);
}
.guide-title {
  font-size: 24rpx;
  color: rgba(90, 44, 18, 0.75);
}
.guide-text {
  font-size: 26rpx;
  color: #5a2c12;
  line-height: 1.5;
}
.rating {
  display: flex;
  align-items: center;
  gap: 12rpx;
  padding: 12rpx 20rpx;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.58);
  box-shadow: inset 0 0 0 1px rgba(255, 171, 70, 0.25);
}
.rating-label {
  font-size: 24rpx;
  color: rgba(90, 44, 18, 0.7);
}
.stars {
  display: flex;
  gap: 4rpx;
}
.star {
  font-size: 30rpx;
  color: #dfd5c7;
}
.star--active {
  color: #ffb23c;
  text-shadow: 0 0 6rpx rgba(255, 178, 60, 0.6);
}
.loading,
.empty {
  margin: 48rpx auto;
  text-align: center;
  color: rgba(90, 44, 18, 0.65);
}

.detail-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.detail-content {
  width: 92%;
  max-height: 92vh;
  overflow-y: auto;
  border-radius: 40rpx;
}

.card-share-row {

  margin-top: 18rpx;
}

.card-share-btn {
  width: 100%;
  height: 72rpx;
  line-height: 72rpx;
  text-align: center;
  border-radius: 999rpx;
  background-color: #E64340;
  color: #ffffff;
  font-size: 26rpx;
  font-weight: 600;
}

.poster-canvas {
  width: 375px;
  height: 600px;
}
</style>

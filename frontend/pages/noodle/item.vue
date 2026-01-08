<template>
  <view class="food-page">
    <view class="hero">
      <image :src="noodleHero" class="hero-img" mode="aspectFill" />
    </view>

    <view class="food-body">
      <view class="food-title-row">
        <text class="food-title">{{ noodle.name }}</text>
        <!-- #ifdef MP-WEIXIN -->
        <button
          class="food-share-icon"
          open-type="share"
          :class="{ 'food-share-icon--disabled': hasShared }"
          @tap.stop="onShareClick"
        >
          <image
            :src="IMG.shareIcon3"
            class="food-share-icon-img"
            mode="aspectFit"
          />
        </button>
        <!-- #endif -->
        <!-- #ifndef MP-WEIXIN -->
        <view
          class="food-share-icon"
          @tap.stop="onShareClick"
        >
          <image
            :src="IMG.shareIcon3"
            class="food-share-icon-img"
            mode="aspectFit"
          />
        </view>
        <!-- #endif -->
      </view>
      <text class="food-intro">{{ noodle.intro }}</text>
      <view class="food-tags">
        <text v-for="t in noodle.tags" :key="t" class="tag">#{{ t }}</text>
      </view>
    </view>

    <!-- 详细信息区：历史与特色 -->
    <view class="extra-grid">
      <view class="info-card">
        <text class="card-title">历史渊源</text>
        <text class="card-text card-text--indent">{{ noodle.history || '暂无介绍' }}</text>
      </view>
      <view class="info-card">
        <text class="card-title">制作与特色</text>
        <text class="card-text">{{ noodle.features || '暂无介绍' }}</text>
      </view>
    </view>


    <!-- #ifdef MP-WEIXIN -->
    <canvas
      canvas-id="noodlePosterCanvas"
      class="poster-canvas"
      style="width: 375px; height: 1000px; position: fixed; left: -9999px; top: -9999px;"
    ></canvas>
    <!-- #endif -->

  </view>
</template>

<script>
const { queryFoods, getFoodById, getFoodDetail } = require('../../api/foods.js');
const { checkShared, recordShare } = require('../../api/share.js');
const { IMG } = require('../../api/imageMap.js');

export default {
  data() {
    return {
      IMG,
      slug: '',
      city: '',
      foodId: null,
      noodle: { name: '', intro: '', tags: [], history: '', features: '', heroImg: '' },
      hasShared: false
    }
  },

  computed: {
    cityName() {
      const map = {
        xian: '西安', tongchuan: '铜川', baoji: '宝鸡', xianyang: '咸阳',
        weinan: '渭南', yanan: '延安', yulin: '榆林', hanzhong: '汉中',
        ankang: '安康', shangluo: '商洛'
      }
      return map[this.city] || '陕西'
    },
    // 优先使用数据中的 heroImg，其次占位图
    noodleHero() {
      return this.noodle.heroImg || IMG.retouch_2025112414392946
    }
  },
  onLoad(query) {
    this.slug = (query.slug || '').trim()
    this.city = (query.city || '').trim()
    // 支持从路由参数携带 id 与 foodName，优先用于接口查询
    const routeIdRaw = query.id != null ? String(query.id).trim() : ''
    const routeId = routeIdRaw && !Number.isNaN(Number(routeIdRaw)) ? Number(routeIdRaw) : null
    this.foodId = routeId
    const routeFoodName = (query.foodName || '').trim()
    console.log('[item:onLoad] slug=', this.slug, ' city=', this.city, ' id=', routeId, ' foodName=', routeFoodName)

    const nameMap = {
      'biangbiang': 'biángbiáng面',
      'youpomian': '油泼面',
      'liangpi': '凉皮',
      'yaozhou-saozi': '耀州臊子面',
      'qishan-saozi': '岐山臊子面',
      'ganmianpi': '擀面皮',
      'chemaian': '扯面',
      'tongguan-saozi': '潼关臊子面',
      'hancheng-heleg': '韩城羊肉饸饹',
      'zicang-jianbing': '子长煎饼',
      'qiaomian-hele': '荞面饸饹',
      'yangza-fentang': '羊杂粉汤',
      'remipi': '汉中热米皮',
      'caidoufu-mian': '菜豆腐面',
      'zhengmian': '安康蒸面',
      'ziyang-haozi': '紫阳蒿子面',
      'luonan-suantang': '洛南酸汤面'
    }
    const introMap = {
      'biangbiang': '宽厚筋道，油泼蒜醋香扑面。',
      'youpomian': '辣子热油一泼，蒜香与醋香交织。',
      'liangpi': '柔韧清爽，酸辣开胃。',
      'yaozhou-saozi': '细面吸汤，酸辣臊子开胃。',
      'qishan-saozi': '酸辣咸香协调，臊子丰富。',
      'ganmianpi': '筋爽弹牙，辣香耐吃。',
      'chemaian': '长而宽，嚼劲十足。',
      'tongguan-saozi': '臊子多样，酸辣鲜香。',
      'hancheng-heleg': '饸饹筋道，羊汤浓香。',
      'zicang-jianbing': '薄脆香酥，配料丰富。',
      'qiaomian-hele': '荞香浓郁，口感独特。',
      'yangza-fentang': '暖胃滋补，汤鲜而不腻。',
      'remipi': '热食更筋韧，辣香扑鼻。',
      'caidoufu-mian': '豆香清爽，营养均衡。',
      'zhengmian': '蒸面偏湿，裹住辣油更香。',
      'ziyang-haozi': '蒿香清新，口感独特。',
      'luonan-suantang': '山泉酸爽，清冽开胃。'
    }
    const tagsMap = {
      'biangbiang': ['宽面','油泼'],
      'youpomian': ['辣子','蒜香'],
      'liangpi': ['清爽','酸辣'],
      'yaozhou-saozi': ['臊子','酸辣'],
      'qishan-saozi': ['臊子','酸辣'],
      'ganmianpi': ['筋爽','凉食'],
      'chemaian': ['拉面','筋道'],
      'tongguan-saozi': ['臊子','鲜香'],
      'hancheng-heleg': ['饸饹','羊汤'],
      'zicang-jianbing': ['煎饼','香酥'],
      'qiaomian-hele': ['荞面','饸饹'],
      'yangza-fentang': ['粉汤','羊杂'],
      'remipi': ['米皮','热食'],
      'caidoufu-mian': ['豆香','家常'],
      'zhengmian': ['蒸面','湿润'],
      'ziyang-haozi': ['蒿香','清新'],
      'luonan-suantang': ['酸汤','清冽']
    }

    const name = nameMap[this.slug] || '面食'
    const intro = introMap[this.slug] || '这是一道地方特色面食。'
    const tags = tagsMap[this.slug] || ['特色','本地']
    this.noodle = { name, intro, tags, history: '', features: '', heroImg: '' }

    // 特例覆盖：荞面饸饹（来自你提供的数据）
    if (this.slug === 'qiaomian-hele') {
      const provided = {
        name: '荞面饸饹',
        imageUrl: 'https://qiqjregvdczjxckgiqan.supabase.co/storage/v1/object/public/NoodlePicture/BuckwheatNoodles.png',
        history: '饸饹面的历史非常悠久，其制作工具“饸饹床子”在元代农书中已有明确记载。它的诞生与北方地区广泛种植荞麦、高粱等杂粮的物产背景直接相关。由于荞麦缺乏 gluten，不易擀切，智慧的古人便发明了这种“压”面的工具，使粗糙的杂粮得以制成顺滑的面条。这道美食承载着中国北方杂粮饮食文化的记忆，是古代食品加工机械与饮食智慧结合的典范。',
        introduction: '荞面饸饹是将和好的荞麦面团放入木制或铁制的“饸饹床子”中，通过杠杆原理，用物理压力将面团从底部的多孔模具中直接压入沸水锅中，煮熟后捞出。成品面条呈灰褐色，圆滑长爽，带有荞麦特有的清香。可做汤面，亦可凉拌，口感筋道滑溜，是典型的健康粗粮食品。',
        features: '工具压制：使用独特的“饸饹床子”制作，过程充满仪式感，面条形态均匀圆润。 杂粮健康：主料为荞麦，富含膳食纤维和多种营养素，是公认的健康绿色食品。 口感独特：面条因压制而格外筋道、滑溜，与手擀面口感迥异。 吃法多样：著名的有羊肉臊子饸饹、凉拌饸饹等，风味各异，荤素皆宜。',
        tag: '面食',
        city: '榆林市'
      }
      const tags2 = (provided.tag || '').split(/[,\s]+/).filter(Boolean)
      this.noodle = {
        name: provided.name,
        intro: provided.introduction,
        tags: tags2.length ? tags2 : tags,
        history: provided.history,
        features: provided.features,
        heroImg: provided.imageUrl
      }
    }

    // 设置导航标题为面食名
    uni.setNavigationBarTitle({ title: name })

    // 接入接口：按条件查询（优先 foodName，其次 tag），不再按城市查询
    const targetName = routeFoodName || (nameMap[this.slug] || '')
    const firstTag = (Array.isArray(tags) && tags[0]) || ''
    const toList = (res) => Array.isArray(res) ? res : ((res && res.data) || [])
    const fillFrom = (found) => {
      const t = found.tags || found.tag
      const tagsFromApi = Array.isArray(t) ? t : (typeof t === 'string' ? t.split(/[,\s]+/).filter(Boolean) : (t != null ? [t] : this.noodle.tags))
      this.noodle = {
        name: found.foodName || found.name || this.noodle.name,
        intro: found.introduction || found.intro || found.description || this.noodle.intro,
        tags: tagsFromApi,
        history: found.history || this.noodle.history,
        features: found.features || this.noodle.features,
        heroImg: found.imageUrl || found.image || found.img || found.coverImage || this.noodle.heroImg
      }
      if (this.noodle.name) uni.setNavigationBarTitle({ title: this.noodle.name })
    }

    const tryFetch = async () => {
      // 仅在存在明确条件时请求：优先 id，其次 foodName；否则不请求
      if (routeId != null) {
        try {
          console.log('[item:api] query by id=', routeId)
          const res0 = await queryFoods({ id: routeId })
          const list0 = toList(res0)
          if (Array.isArray(list0) && list0.length) {
            fillFrom(list0[0])
            console.log('[item:api] filled by id')
            return true
          } else {
            console.warn('[item:api] empty list for id=', routeId)
          }
        } catch (e) {
          console.error('[item:api] request failed for id=', routeId, e)
        }
      } else if (targetName) {
        try {
          console.log('[item:api] query by foodName=', targetName)
          const res1 = await queryFoods({ foodName: targetName })
          const list1 = toList(res1)
          if (Array.isArray(list1) && list1.length) {
            const found1 = list1.find(it =>
              String(it.foodName || '').trim() === targetName
              || String(it.slug || '').trim() === this.slug
            ) || list1[0]
            fillFrom(found1)
            console.log('[item:api] filled by foodName')
            return true
          } else {
            console.warn('[item:api] empty list for foodName=', targetName)
          }
        } catch (e) {
          console.error('[item:api] request failed for foodName=', targetName, e)
        }
      }
      // 没有 id/foodName，就保留本地静态数据
      return false
    }

    tryFetch().then(ok => {
      if (!ok) console.warn('[item:api] 条件查询未命中，保留本地数据')
    })

    this.checkSharedStatus()
  },
  methods: {
    async checkSharedStatus() {
      const targetId = this.foodId != null ? this.foodId : this.slug
      if (!targetId) return
      try {
        const res = await checkShared(targetId, 'FOOD')
        if (res && (res.isShared === true || (res.data && res.data.isShared === true))) {
          this.hasShared = true
        }
      } catch (e) {
        console.error('[noodle-item] 查询分享状态失败:', e)
      }
    },

    // ===== 分享相关功能 =====
    // 点击分享按钮（微信小程序会触发 onShareAppMessage）
    onShareClick() {
      // #ifdef MP-WEIXIN
      // 微信小程序中，点击 open-type="share" 的按钮会自动触发 onShareAppMessage
      // 不需要保存图片，直接使用小程序分享功能
      console.log('[noodle-item] 用户点击分享按钮，美食ID:', this.foodId, '美食名称:', this.noodle.name)
      // #endif
      
      // #ifndef MP-WEIXIN
      // 非微信小程序环境，提示用户
      uni.showToast({ title: '请在微信小程序中分享', icon: 'none' })
      // #endif
    },

    // 微信小程序分享配置
    onShareAppMessage(options) {
      console.log('[noodle-item] onShareAppMessage 被调用', options)
      
      if (!this.noodle || !this.noodle.name) {
        console.warn('[noodle-item] 分享时美食信息为空')
        return {
          title: '快来和我一起了解并品尝美食吧!',
          path: '/pages/noodle/item',
          imageUrl: IMG.retouch_2025112414392946
        }
      }

      // 构建分享路径，包含美食ID、slug和城市信息
      const params = []
      if (this.foodId != null) {
        params.push(`id=${encodeURIComponent(this.foodId)}`)
      }
      if (this.slug) {
        params.push(`slug=${encodeURIComponent(this.slug)}`)
      }
      if (this.city) {
        params.push(`city=${encodeURIComponent(this.city)}`)
      }
      if (this.noodle.name) {
        params.push(`foodName=${encodeURIComponent(this.noodle.name)}`)
      }
      const sharePath = `/pages/noodle/item?${params.join('&')}`
      
      // 分享标题：使用指定的文案格式
      const foodName = this.noodle.name || '美食'
      const shareTitle = `快来和我一起了解并品尝${foodName}吧!`
      
      // 分享图片：使用美食头图
      const shareImageUrl = this.noodleHero || IMG.retouch_2025112414392946
      
      console.log('[noodle-item] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        foodId: this.foodId,
        foodName: foodName,
        imageUrl: shareImageUrl
      })

      // 记录分享行为
      this.recordShareBehavior().catch(err => {
        console.error('[noodle-item] 记录分享行为失败', err)
      })

      return {
        title: shareTitle,
        path: sharePath,
        imageUrl: shareImageUrl
      }
    },

    async recordShareBehavior() {
      try {
        const targetId = this.foodId != null ? this.foodId : this.slug
        if (!targetId) return
        const foodName = this.noodle.name || '美食'
        const shareTitle = `快来和我一起了解并品尝${foodName}吧!`
        await recordShare({
          targetId,
          targetType: 'FOOD',
          shareChannel: 'WECHAT_MESSAGE',
          shareTitle: shareTitle,
          shareDesc: this.noodle.intro || '',
          shareCover: this.noodleHero
        })
      } catch (e) {
        console.error('[noodle-item] 分享埋点失败:', e)
      }
    },

    async onGeneratePoster() {
      if (this.generatingPoster || this.hasShared) return

      // #ifdef MP-WEIXIN
      this.generatingPoster = true
      uni.showLoading({ title: '生成中...', mask: true })
      try {
        // 1. 先请求相册授权
        await this.requestAlbumAuth()
        
        // 2. 生成图片
        const posterPath = await this.drawPoster()
        
        // 3. 保存到相册
        await this.savePosterToAlbum(posterPath)
        
        // 4. 自动弹出微信分享选择框
        await this.shareImageToWeChat(posterPath)
        
        // 5. 记录分享行为
        await this.recordShareBehavior()
        this.hasShared = true
      } catch (e) {
        console.error('[noodle-item] 生成分享海报失败:', e)
        // 如果分享失败，至少图片已保存到相册，用户可以手动分享
      } finally {
        this.generatingPoster = false
        uni.hideLoading()
      }
      // #endif

      // #ifndef MP-WEIXIN
      uni.showToast({ title: '请在微信小程序中使用分享海报', icon: 'none' })
      // #endif
    },

    // 请求相册授权
    requestAlbumAuth() {
      return new Promise((resolve, reject) => {
        uni.getSetting({
          success: (res) => {
            if (res.authSetting['scope.writePhotosAlbum'] === false) {
              // 用户之前拒绝了授权，需要引导用户开启
              uni.showModal({
                title: '需要授权',
                content: '需要授权保存图片到相册才能分享，请在设置中开启',
                confirmText: '去设置',
                success: (modalRes) => {
                  if (modalRes.confirm) {
                    uni.openSetting({
                      success: (settingRes) => {
                        if (settingRes.authSetting['scope.writePhotosAlbum']) {
                          resolve()
                        } else {
                          reject(new Error('用户未授权相册权限'))
                        }
                      },
                      fail: () => reject(new Error('打开设置失败'))
                    })
                  } else {
                    reject(new Error('用户取消授权'))
                  }
                }
              })
            } else {
              // 已授权或未设置，直接请求授权
              uni.authorize({
                scope: 'scope.writePhotosAlbum',
                success: () => resolve(),
                fail: () => {
                  // 授权失败，引导用户去设置
                  uni.showModal({
                    title: '需要授权',
                    content: '需要授权保存图片到相册才能分享，请在设置中开启',
                    confirmText: '去设置',
                    success: (modalRes) => {
                      if (modalRes.confirm) {
                        uni.openSetting({
                          success: (settingRes) => {
                            if (settingRes.authSetting['scope.writePhotosAlbum']) {
                              resolve()
                            } else {
                              reject(new Error('用户未授权相册权限'))
                            }
                          },
                          fail: () => reject(new Error('打开设置失败'))
                        })
                      } else {
                        reject(new Error('用户取消授权'))
                      }
                    }
                  })
                }
              })
            }
          },
          fail: () => reject(new Error('获取设置失败'))
        })
      })
    },

    // 分享图片到微信
    shareImageToWeChat(imagePath) {
      return new Promise((resolve, reject) => {
        // 检查基础库版本
        const systemInfo = uni.getSystemInfoSync()
        const SDKVersion = systemInfo.SDKVersion || '0.0.0'
        const versionParts = SDKVersion.split('.').map(Number)
        const minVersion = [2, 4, 0]
        
        // 比较版本号
        let canShare = false
        if (versionParts[0] > minVersion[0]) {
          canShare = true
        } else if (versionParts[0] === minVersion[0]) {
          if (versionParts[1] > minVersion[1]) {
            canShare = true
          } else if (versionParts[1] === minVersion[1]) {
            if (versionParts[2] >= minVersion[2]) {
              canShare = true
            }
          }
        }

        if (!canShare) {
          // 基础库版本过低，提示用户手动分享
          uni.showToast({
            title: '图片已保存到相册，请手动分享',
            icon: 'none',
            duration: 3000
          })
          resolve()
          return
        }

        // 使用微信原生 API 分享图片
        // #ifdef MP-WEIXIN
        if (typeof wx !== 'undefined' && wx.shareImageMessage) {
          wx.shareImageMessage({
            imagePath: imagePath,
            success: () => {
              console.log('[noodle-item] 分享图片成功')
              resolve()
            },
            fail: (err) => {
              console.error('[noodle-item] 分享图片失败:', err)
              // 分享失败不影响，图片已保存，用户可以手动分享
              uni.showToast({
                title: '图片已保存到相册，请手动分享',
                icon: 'none',
                duration: 3000
              })
              resolve() // 不 reject，因为图片已保存成功
            }
          })
        } else {
          // API 不可用，提示用户手动分享
          uni.showToast({
            title: '图片已保存到相册，请手动分享',
            icon: 'none',
            duration: 3000
          })
          resolve()
        }
        // #endif

        // #ifndef MP-WEIXIN
        resolve()
        // #endif
      })
    },

    async drawPoster() {
      const ctx = uni.createCanvasContext('noodlePosterCanvas', this)
      const { noodle } = this
      const W = 375
      // 增加高度以容纳完整页面内容
      const H = 1000
      const heroHeight = 220
      const cardX = 18
      const cardY = heroHeight + 20
      const cardW = W - cardX * 2
      const cardPaddingX = 28
      const cardPaddingY = 20
      const fallbackHero = IMG.retouch_2025112414392946

      ctx.clearRect(0, 0, W, H)

      // 背景渐变
      const bgGradient = ctx.createLinearGradient(0, 0, 0, H)
      bgGradient.addColorStop(0, '#fffaf1')
      bgGradient.addColorStop(1, '#fff5dc')
      ctx.setFillStyle(bgGradient)
      ctx.fillRect(0, 0, W, H)

      // 下载头部图片
      let heroPath = ''
      try {
        heroPath = await this.downloadImage(this.noodleHero)
      } catch (e) {
        console.warn('[noodle-item] 头图下载失败，使用默认示意图', e)
        try {
          heroPath = await this.downloadImage(fallbackHero)
        } catch (inner) {
          heroPath = fallbackHero
        }
      }

      // 绘制头部图片
      ctx.save()
      ctx.drawImage(heroPath, 0, 0, W, heroHeight)
      ctx.restore()

      // 头部遮罩
      ctx.save()
      const heroOverlay = ctx.createLinearGradient(0, heroHeight - 80, 0, heroHeight)
      heroOverlay.addColorStop(0, 'rgba(0,0,0,0)')
      heroOverlay.addColorStop(1, 'rgba(90,44,18,0.15)')
      ctx.setFillStyle(heroOverlay)
      ctx.fillRect(0, heroHeight - 80, W, 80)
      ctx.restore()

      // 主卡片（标题、介绍、标签）
      let cursorY = cardY + cardPaddingY
      ctx.save()
      ctx.setShadow(0, 12, 24, 'rgba(0,0,0,0.08)')
      this.fillRoundRect(ctx, cardX, cardY, cardW, 200, 24, '#fff5df')
      ctx.restore()

      // 标题
      ctx.setFillStyle('#5a2c12')
      ctx.setFontSize(28)
      ctx.setTextAlign('center')
      ctx.setTextBaseline('middle')
      ctx.fillText(noodle.name || '三秦好面', W / 2, cursorY)

      cursorY += 40
      // 介绍文字
      const introText = noodle.intro ? `　　${noodle.intro}` : '这是一道地方特色面食。'
      const introLineHeight = 22
      const introMaxLines = 5
      ctx.setTextAlign('left')
      ctx.setTextBaseline('top')
      ctx.setFontSize(16)
      ctx.setFillStyle('#5a2c12')
      this.drawMultilineText(
        ctx,
        introText,
        cardX + cardPaddingX,
        cursorY,
        cardW - cardPaddingX * 2,
        introLineHeight,
        introMaxLines
      )
      cursorY += introLineHeight * introMaxLines + 16

      // 标签
      const tagList = (Array.isArray(noodle.tags) ? noodle.tags : []).filter(Boolean)
      if (tagList.length) {
        cursorY = this.drawTagPills(ctx, tagList, cardX + cardPaddingX, cursorY, cardW - cardPaddingX * 2) + 16
      }

      // 更新主卡片高度
      const mainCardH = cursorY - cardY + cardPaddingY
      ctx.save()
      this.fillRoundRect(ctx, cardX, cardY, cardW, mainCardH, 24, '#fff5df')
      ctx.restore()

      // 详细信息区：历史渊源和制作与特色（两列布局）
      const infoCardY = cardY + mainCardH + 20
      const infoCardW = (cardW - 12) / 2
      const infoCardH = 280
      const infoCardPadding = 16
      const infoCardTitleSize = 20
      const infoCardTextSize = 14
      const infoCardLineHeight = 20

      // 历史渊源卡片
      if (noodle.history) {
        ctx.save()
        ctx.setShadow(0, 8, 16, 'rgba(0,0,0,0.08)')
        this.fillRoundRect(ctx, cardX, infoCardY, infoCardW, infoCardH, 20, '#fff5df')
        ctx.restore()

        let infoY = infoCardY + infoCardPadding
        ctx.setFillStyle('#5a2c12')
        ctx.setFontSize(infoCardTitleSize)
        ctx.setTextAlign('left')
        ctx.setTextBaseline('top')
        ctx.fillText('历史渊源', cardX + infoCardPadding, infoY)

        infoY += 28
        const historyText = `　　${noodle.history}`
        ctx.setFontSize(infoCardTextSize)
        ctx.setFillStyle('#5a2c12')
        this.drawMultilineText(
          ctx,
          historyText,
          cardX + infoCardPadding,
          infoY,
          infoCardW - infoCardPadding * 2,
          infoCardLineHeight,
          10
        )
      }

      // 制作与特色卡片
      if (noodle.features) {
        const featuresCardX = cardX + infoCardW + 12
        ctx.save()
        ctx.setShadow(0, 8, 16, 'rgba(0,0,0,0.08)')
        this.fillRoundRect(ctx, featuresCardX, infoCardY, infoCardW, infoCardH, 20, '#fff5df')
        ctx.restore()

        let infoY = infoCardY + infoCardPadding
        ctx.setFillStyle('#5a2c12')
        ctx.setFontSize(infoCardTitleSize)
        ctx.setTextAlign('left')
        ctx.setTextBaseline('top')
        ctx.fillText('制作与特色', featuresCardX + infoCardPadding, infoY)

        infoY += 28
        const featuresText = noodle.features
        ctx.setFontSize(infoCardTextSize)
        ctx.setFillStyle('#5a2c12')
        this.drawMultilineText(
          ctx,
          featuresText,
          featuresCardX + infoCardPadding,
          infoY,
          infoCardW - infoCardPadding * 2,
          infoCardLineHeight,
          10
        )
      }

      // 底部水印
      const footerY = infoCardY + infoCardH + 20
      ctx.setFillStyle('rgba(90,44,18,0.4)')
      ctx.setFontSize(12)
      ctx.setTextAlign('center')
      ctx.setTextBaseline('middle')
      ctx.fillText('嘹咋咧 · 分享三秦味道', W / 2, footerY)

      return new Promise((resolve, reject) => {
        ctx.draw(false, () => {
          uni.canvasToTempFilePath({
            canvasId: 'noodlePosterCanvas',
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
            // 不显示 toast，因为后面会直接分享
            console.log('[noodle-item] 图片已保存到相册')
            resolve()
          },
          fail: (err) => {
            console.error('[noodle-item] 保存海报失败:', err)
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

    async recordShareBehavior() {
      try {
        const targetId = this.foodId != null ? this.foodId : this.slug
        if (!targetId) return
        await recordShare({
          targetId,
          targetType: 'FOOD',
          shareChannel: 'WECHAT_POSTER',
          shareTitle: this.noodle.name,
          shareDesc: this.noodle.intro,
          shareCover: this.noodle.heroImg
        })
      } catch (e) {
        console.error('[noodle-item] 分享埋点失败:', e)
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
      if (!Array.isArray(tags) || tags.length === 0) return startY
      const normalizedTags = tags
        .map(tag => String(tag).trim())
        .filter(Boolean)
      if (!normalizedTags.length) return startY

      const fontSize = 12
      const horizontalPadding = 10
      const verticalPadding = 6
      const rowGap = 8
      const columnGap = 8
      const availableWidth = Math.max(20, maxWidth)
      const pillHeight = fontSize + verticalPadding * 2
      let cursorX = startX
      let cursorY = startY

      ctx.setFontSize(fontSize)
      ctx.setTextAlign('left')
      ctx.setTextBaseline('middle')

      normalizedTags.forEach((text) => {
        const pillText = `#${text}`
        const metrics = ctx.measureText(pillText)
        const desiredWidth = metrics.width + horizontalPadding * 2
        let pillWidth = Math.min(desiredWidth, availableWidth)
        if (cursorX + pillWidth > startX + availableWidth) {
          cursorX = startX
          cursorY += pillHeight + rowGap
        }
        this.fillRoundRect(ctx, cursorX, cursorY, pillWidth, pillHeight, pillHeight / 2, '#ffecc7')
        ctx.setFillStyle('#7b2f00')
        ctx.fillText(pillText, cursorX + horizontalPadding, cursorY + pillHeight / 2)
        cursorX += pillWidth + columnGap
      })

      return cursorY + pillHeight
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
.food-page {
  min-height: 100vh;
  background: linear-gradient(180deg,#fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  padding-bottom: 40rpx;
}

.hero {
  position: relative;
  width: 100%;
  height: 440rpx;      /* 全宽头图高度（按需） */
  overflow: hidden;   /* 裁掉下端 */
  margin: 0;          /* 顶部紧贴 */
}
.hero-img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.food-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.food-name {
  font-size: 40rpx;
  font-weight: 700;
}
.food-city {
  margin-top: 8rpx;
  font-size: 26rpx;
  color: #8c5c2a;
}

.food-body {
  margin: 16rpx 24rpx 0;
  background: #fff5df;
  border-radius: 24rpx;
  box-shadow: 0 12rpx 24rpx rgba(0,0,0,0.08);
  padding: 20rpx 24rpx 24rpx;
}
.food-intro {
  font-size: 28rpx;
  line-height: 1.6;
  display: block; /* 使 text-indent 生效于块级 */
  text-indent: 2em; /* 段首缩进 */
}
.food-tags {
  margin-top: 14rpx;
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx 12rpx;
}
.tag {
  font-size: 22rpx;
  color: #7b2f00;
  background: #ffecc7;
  padding: 6rpx 12rpx;
  border-radius: 999px;
}
.food-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12rpx;
}

.food-title {
  flex: 1;
  text-align: center;
  font-size: 48rpx;
  font-weight: 700;
}

.food-share-icon {
  width: auto;
  height: auto;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  line-height: 1;
  /* 微信小程序 button 样式重置 */
  background-color: transparent;
  &::after {
    border: none;
  }
}

.food-share-icon--disabled {
  opacity: 0.5;
}

.food-share-icon-img {
  width: 48rpx;
  height: 48rpx;
}
.extra-grid {
  margin: 16rpx 24rpx 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12rpx;
}
.info-card {
  background: #fff5df;
  border-radius: 20rpx;
  box-shadow: 0 8rpx 16rpx rgba(0,0,0,0.08);
  padding: 16rpx;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}
.card-title {
  font-size: 34rpx;
  font-weight: 700;
}
.card-text {
  font-size: 28rpx;
  line-height: 1.6;
  color: #5a2c12;
}
.card-text--indent {
  text-indent: 2em; /* 历史渊源段首缩进 */
}

.poster-btn-box {
  margin: 24rpx;
}

.poster-btn {
  width: 100%;
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  border-radius: 44rpx;
  background-color: #E64340;
  color: #ffffff;
  font-size: 30rpx;
  font-weight: 600;
}

.poster-canvas {
  width: 375px;
  height: 600px;
}

</style>
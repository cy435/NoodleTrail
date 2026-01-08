 <script>
import noodleBowl from '../../static/assets/noodle-bowl.svg'
import shot1 from '../../static/assets/noodle-cut-1.svg'
import shot2 from '../../static/assets/noodle-cut-2.svg'
import shot3 from '../../static/assets/noodle-cut-3.svg'
import noodleSplash from '../../static/assets/remove.photos-removed-background.png'
import { IMG } from '../../api/imageMap.js'

import { synthesizeTts } from '../../api/tts.js'
import { convertToShanxiDialect } from '../../api/shanxiDialectMap.js'


const shaanxiGeoJSON = require('../../data/shaanxi-map.json')
// 左上角图片路径
const cornerImage = IMG.retouch_2025111814274381
const echarts = require('./ec-canvas/echarts.js')





let dialectAudioCtx = null

export default {
  components: {},
  data() {
    return {
      IMG,
      cornerImage,
      noodleSplash,
      activeNavId: 'tong',

      cities: [

  {
    id: 'yanan',
    name: '延安',
    color: '#f8d37e',
    top: '8%',
    left: '52%',
    noodles: ['油泼面', '子长煎饼'],
    tagline: '黄土地上的烈烈辣香',},
  {
    id: 'yulin',
    name: '榆林',
    color: '#f2c568',
    top: '2%',
    left: '35%',
    noodles: ['荞面饸饹', '羊杂粉汤'],
    tagline: '榆塞粗犷的陕北筋道',},
  /* 面条方框装饰，放在白色模块内部四周 */


  {
    id: 'tongchuan',
    name: '铜川',
    color: '#f9b0c3',
    top: '28%',
    left: '53%',
    noodles: ['耀州臊子面'],
    tagline: '耀州臊子浇满铜魂',},
  {
    id: 'baoji',
    name: '宝鸡',
    color: '#8fd18c',
    top: '35%',
    left: '28%',
    noodles: ['岐山臊子面', '擀面皮'],
    tagline: '臊子酸辣，擀面皮筋爽'
  },
  {
    id: 'xianyang',
    name: '咸阳',
    color: '#8ec7f4',
    top: '38%',
    left: '42%',
    noodles: ['扯面', 'biángbiáng面'],
    tagline: '泾渭河畔的豪放拉面'
  },
  {
    id: 'weinan',
    name: '渭南',
    color: '#f7b66d',
    top: '38%',
    left: '63%',
    noodles: ['潼关臊子面', '韩城羊肉饸饹'],
    tagline: '黄河东岸的宽与细'
  },
  {
    id: 'xian',
    name: '西安',
    color: '#7ab7ff',
    top: '48%',
    left: '48%',
    noodles: ['biángbiáng面', '油泼面', '凉皮'],
    tagline: '长安城下万面同煮'
  },
  {
    id: 'shangluo',
    name: '商洛',
    color: '#6fc4d2',
    top: '54%',
    left: '66%',
    noodles: ['洛南酸汤面'],
    tagline: '秦岭南麓的山泉酸爽'
  },
  {
    id: 'hanzhong',
    name: '汉中',
    color: '#f59fb5',
    top: '64%',
    left: '28%',
    noodles: ['汉中热米皮', '菜豆腐面'],
    tagline: '巴山背篓里的米皮香'
  },
  {
    id: 'ankang',
    name: '安康',
    color: '#c7a4ff',
    top: '70%',
    left: '55%',
    noodles: ['安康蒸面', '紫阳蒿子面'],
    tagline: '秦巴山里蒸出的湿润口感'
  }
      ],
      noodleIcons: [
  { id: 'travel', label: '陕游记' },
  { id: 'taste', label: '陕味集' },
  { id: 'heritage', label: '陕非遗' },
  { id: 'tong', label: '陕面通' },
  { id: 'style', label: '个人中心' }
      ],
      bottomIcons: [
        { id: 'qingdan', label: '陕游记', img: IMG.retouch_2025112414391093 },
        { id: 'fengwei', label: '陕味集', img: IMG.retouch_2025112414392946 },
        { id: 'feiyi', label: '陕非遗', img: IMG.retouch_2025112414400271 },
        { id: 'profile', label: '个人中心', img: IMG.retouch_2025112414394823 }
      ],
      faceShots: [
  {
    id: 'shot1',
    img: shot1,
    answer: '安康蒸面',
    clue: '蒸面偏湿，截面有光泽',
    knowledge: '恭喜！这是安康蒸面，比凉皮粗一点，因为要裹住秦巴山区的辣油。',
    revealed: false
  },
  {
    id: 'shot2',
    img: shot2,
    answer: 'biángbiáng面',
    clue: '宽如皮带，油泼最香',
    knowledge:
      '中！这是西安的biángbiáng面，宽厚能兜住蒜泥与醋香，是秦腔一样的豪迈。',
    revealed: false
  },
  {
    id: 'shot3',
    img: shot3,
    answer: '岐山臊子面',
    clue: '细如筷子，靠臊子提味',
    knowledge: '妙！是岐山臊子面，细面吸饱酸辣臊子，随便搅都是彩虹。',
    revealed: false
  }
      ],
      showGuessModal: false,
      showDialectModal: false,
      showDialectCollectorModal: false,
      activeDialect: {
        title: '面语 · 方言卡',
        content: ['老板问"加面不？"', '答："再来一筷子！"'],
        tip: '安康腔调要拖长，显得豪爽'
      },
      dialects: [
        { id: 'xian', name: '西安', title: '西安 · 面语', content: ['“来碗biángbiáng，辣子要多！”', '“面要硬气点，筋道！”'], tip: '关中口音舒展，语速中等' },
        { id: 'tongchuan', name: '铜川', title: '铜川 · 面语', content: ['“臊子要冲辣，再来点醋！”', '“薄面，快点端！”'], tip: '语调略上扬，干脆利落' },
        { id: 'baoji', name: '宝鸡', title: '宝鸡 · 面语', content: ['“臊子面要酸辣咧！”', '“来个干拌更有味！”'], tip: '尾音略重，干脆有劲' },
        { id: 'xianyang', name: '咸阳', title: '咸阳 · 面语', content: ['“扯面要宽些，油泼要热些！”', '“蒜泥别少咧！”'], tip: '关中腔明显，语调平直' },
        { id: 'weinan', name: '渭南', title: '渭南 · 面语', content: ['“来碗潼关臊子！”', '“酸点，辣点，快点！”'], tip: '吐字清晰，节奏偏快' },
        { id: 'yanan', name: '延安', title: '延安 · 面语', content: ['“来碗油泼，面要干点！”', '“子长煎饼再来一张！”'], tip: '陕北腔浑厚，拉长尾音' },
        { id: 'yulin', name: '榆林', title: '榆林 · 面语', content: ['“来碗荞面饸饹！”', '“辣子多些，撒蒜苗！”'], tip: '陕北味浓，语速偏快' },
        { id: 'hanzhong', name: '汉中', title: '汉中 · 面语', content: ['“热米皮整一碗！”', '“菜豆腐面要清爽点！”'], tip: '陕南口音柔和，婉转' },
        { id: 'ankang', name: '安康', title: '安康 · 面语', content: ['“蒸面要润点！”', '“辣子再来一勺咧！”'], tip: '腔调拖长，热情爽利' },
        { id: 'shangluo', name: '商洛', title: '商洛 · 面语', content: ['“来碗酸汤面！”', '“轻油少辣，清爽些！”'], tip: '语气温和，尾音略上挑' }
      ],
      dialectList: [
        {
          id: 1,
          word: '嘹咋咧',
          meaning: '好极了、太棒了',
          region: '西安（关中地区通用）',
          example: '用来夸赞人、事、物，比如 “这碗油泼面嘹咋咧！”',
          audio: ''
        },
        {
          id: 2,
          word: '额',
          meaning: '我',
          region: '西安（关中全域通用）',
          example: '日常自称，比如 “额今天要去逛大雁塔”',
          audio: ''
        },
        {
          id: 3,
          word: '娃',
          meaning: '孩子、年轻人（也可用于亲昵称呼）',
          region: '渭南（关中多地通用）',
          example: '可指自家小孩 “额家娃考上大学了”，也可叫年轻小伙 “这娃真勤快”',
          audio: ''
        },
        {
          id: 4,
          word: '甭',
          meaning: '不用、别',
          region: '咸阳（关中地区通用）',
          example: '劝阻或拒绝，比如 “甭操心，额能搞定”',
          audio: ''
        },
        {
          id: 5,
          word: '谝闲传',
          meaning: '闲聊、唠嗑',
          region: '西安（关中全域通用）',
          example: '形容朋友间漫无目的地聊天，“晌午没事，咱坐门口谝闲传”',
          audio: ''
        },
        {
          id: 6,
          word: '瓷实',
          meaning: '结实、牢固，也指人实在',
          region: '宝鸡',
          example: '形容物品 “这板凳做的真瓷实”，形容人 “他这人很瓷实，值得交”',
          audio: ''
        },
        {
          id: 7,
          word: '咥饭',
          meaning: '吃饭（尤其指大口、尽兴地吃）',
          region: '西安（关中地区通用）',
          example: '邀约吃饭或描述用餐状态，“走，咥泡馍去！”“他咥了三大碗面”',
          audio: ''
        },
        {
          id: 8,
          word: '瓜娃子',
          meaning: '傻孩子（多为亲昵调侃，非恶意）',
          region: '汉中（陕南、关中部分地区通用）',
          example: '长辈对晚辈的打趣 “你个瓜娃子，咋把伞落店里了”',
          audio: ''
        },
        {
          id: 9,
          word: '怂',
          meaning: '家伙（可褒可贬，多为口语化称呼）',
          region: '榆林（陕北地区通用）',
          example: '贬义 “那怂办事不靠谱”，亲昵调侃 “你这怂还挺机灵”',
          audio: ''
        },
        {
          id: 10,
          word: '婆姨',
          meaning: '妻子、已婚妇女',
          region: '延安（陕北全域通用）',
          example: '陕北对已婚女性的称呼，“他婆姨是陕北秧歌能手”',
          audio: ''
        },
        {
          id: 11,
          word: '达',
          meaning: '爸爸（部分地区称呼叔父）',
          region: '安康（陕南部分区域）',
          example: '陕南部分地区对父亲的称呼 “俺达今天去赶集了”',
          audio: ''
        },
        {
          id: 12,
          word: '麻达',
          meaning: '麻烦、问题',
          region: '咸阳（关中多地通用）',
          example: '形容遇到困难 “这事儿出麻达了”，询问状况 “没麻达吧？”',
          audio: ''
        },
        {
          id: 13,
          word: '克里马擦',
          meaning: '赶紧、快点',
          region: '西安（关中地区通用）',
          example: '催促他人行动 “克里马擦，再迟就赶不上车了”',
          audio: ''
        },
        {
          id: 14,
          word: '绺娃子',
          meaning: '小偷',
          region: '渭南',
          example: '指代偷窃者 “出门看好包，谨防绺娃子”',
          audio: ''
        },
        {
          id: 15,
          word: '言传',
          meaning: '说话、吭声',
          region: '宝鸡',
          example: '询问对方意见 “你咋不言传？是不同意吗？”',
          audio: ''
        },
        {
          id: 16,
          word: '扎势',
          meaning: '摆架子、装样子',
          region: '西安（关中地区通用）',
          example: '调侃他人故作姿态 “甭扎势了，大家都知道你底细”',
          audio: ''
        },
        {
          id: 17,
          word: '拦羊',
          meaning: '放羊',
          region: '榆林（陕北地区通用）',
          example: '陕北农村常见表述 “他每天天不亮就去山上拦羊”',
          audio: ''
        },
        {
          id: 18,
          word: '搅团',
          meaning: '一种杂粮小吃（也可形容人 “难缠、难打交道”）',
          region: '商洛（陕南多地通用）',
          example: '食物 “晌午咥搅团就酸菜”，形容人 “这人跟搅团一样，黏糊得很”',
          audio: ''
        },
        {
          id: 19,
          word: '嫽',
          meaning: '好、漂亮',
          region: '延安（陕北部分地区通用）',
          example: '夸赞事物 “这花长得真嫽”，夸赞人 “这女娃长得嫽滴很”',
          audio: ''
        },
        {
          id: 20,
          word: '毕咧',
          meaning: '完了、没辙了',
          region: '西安（关中全域通用）',
          example: '形容事情搞砸 “毕咧，把重要文件弄丢了”',
          audio: ''
        }
      ],
      dialectTtsLoadingId: null,
      dialectPlayingId: null,
      customPlainText: '',
      customDialectText: '',
      customTtsLoading: false,
      customDialectAudio: ''
    }
  },
  mounted() {
    // H5 端可在此尝试初始化，但小程序端依赖 ec-canvas 的 onInit
  },
  onLoad(query) {
    if (query && query.feature === 'guess') {
      this.showGuessModal = true
    } else if (query && (query.feature === 'dialect' || query.feature === 'mianyu')) {
      this.showDialectModal = true
    }
  },
  onUnload() {
    if (dialectAudioCtx) {
      try {
        dialectAudioCtx.stop()
      } catch (e) {}
      try {
        dialectAudioCtx.destroy()
      } catch (e) {}
      dialectAudioCtx = null
    }
  },
  methods: {
    toggleGuessModal() {
      this.showGuessModal = !this.showGuessModal
    },
    openGuessModal() {
      this.showGuessModal = true
    },
    revealShot(id) {
      const shot = this.faceShots.find((item) => item.id === id)
      if (shot) {
        shot.revealed = true
      }
    },
    goDetail(city) {
      uni.navigateTo({
        url: `/pages/noodle/detail?city=${city.id}`
      })
    },
    goPage(id) {
      const routes = {
        tong: '/pages/index/index',
        qingdan: '/pages/checklist/index',
        fengwei: '/pages/flavor/index',
        profile: '/pages/mine/index',
        feiyi: '/pages/heritage/index'
      }
      const url = routes[id]
      if (!url) {
        uni.showToast({ title: '页面开发中', icon: 'none' })
        return
      }
      // 检查是否是当前页
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      if (currentPage && ('/' + currentPage.route) === url) {
        return
      }
      // 如果跳转到陕面通首页，使用 reLaunch 清空栈
      if (url === '/pages/index/index') {
        uni.reLaunch({ url })
      } else {
        // 其他页面使用 navigateTo，保留返回按钮
        uni.navigateTo({ url })
      }
    },
    goDialectCollectorFromIndex() {
      this.showDialectCollectorModal = true
    },
    goFoodMapFromIndex() {
      uni.navigateTo({
        url: '/pages/index/Map-Flavors'
      })
    },
    // ECharts 初始化：供 ec-canvas 调用
    initSxMapChart(canvas, width, height, dpr) {
      const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr })
      canvas.setChart && canvas.setChart(chart)

      // 注册陕西地图
      try {
        echarts.registerMap('shaanxi', shaanxiGeoJSON)
      } catch (e) {
        // 已注册时忽略
      }

      const option = {
        tooltip: { show: false },
        series: [{
          type: 'map',
          map: 'shaanxi',
          aspectScale: 1.15,
          layoutCenter: ['50%', '48%'],
          layoutSize: '72%',
          zoom: 1,
          selectedMode: 'single',
          roam: false,
          itemStyle: {
            areaColor: '#fff3d6',
            borderColor: '#cfa86a',
            borderWidth: 1
          },
          emphasis: {
            itemStyle: { areaColor: '#ffd98a' },
            label: { show: true, color: '#7b2f00', fontSize: 12 }
          },
          label: { show: true, color: '#8c5c2a', fontSize: 10 },
          // 为不同市设置暖色填充
          data: [
            { name: '西安市',   itemStyle: { areaColor: '#FFE9B0' } }, // 深奶黄
            { name: '铜川市',   itemStyle: { areaColor: '#FFE099' } }, // 玉米黄
            { name: '宝鸡市',   itemStyle: { areaColor: '#FFD689' } }, // 浅琥珀黄
            { name: '咸阳市',   itemStyle: { areaColor: '#FFCB73' } }, // 暖杏黄
            { name: '渭南市',   itemStyle: { areaColor: '#FFC05E' } }, // 蜂蜜橙
            { name: '延安市',   itemStyle: { areaColor: '#FFD59E' } }, // 浅杏橙
            { name: '榆林市',   itemStyle: { areaColor: '#FFD54F' } }, // 暖黄色
            { name: '汉中市',   itemStyle: { areaColor: '#FFC24D' } }, // 橙黄色
            { name: '安康市',   itemStyle: { areaColor: '#FFDE8F' } }, // 亮奶黄
            { name: '商洛市',   itemStyle: { areaColor: '#FFD3A6' } }  // 桃杏奶
          ]
        }]
      }
      chart.setOption(option)

      const nameToId = {
        '西安市': 'xian',
        '铜川市': 'tongchuan',
        '宝鸡市': 'baoji',
        '咸阳市': 'xianyang',
        '渭南市': 'weinan',
        '延安市': 'yanan',
        '榆林市': 'yulin',
        '汉中市': 'hanzhong',
        '安康市': 'ankang',
        '商洛市': 'shangluo'
      }

      chart.on('click', (params) => {
        const id = nameToId[params.name]
        if (id) {
          uni.navigateTo({
            url: `/pages/noodle/detail?city=${id}`
          })
        }
      })

      return chart
    },
    openDialect() {
      this.showDialectModal = true
    },
    closeDialect() {
      this.showDialectModal = false
    },
    playDialect(dialect) {
      const textToSpeak = dialect
        ? (dialect.example ? `${dialect.word}，${dialect.example}` : dialect.word)
        : ''
      if (!textToSpeak) {
        uni.showToast({
          title: '没有可播放的文本',
          icon: 'none'
        })
        return
      }

      if (this.dialectTtsLoadingId && this.dialectTtsLoadingId !== dialect.id) {
        uni.showToast({
          title: '正在合成其他方言，请稍后',
          icon: 'none'
        })
      }

      this.dialectTtsLoadingId = dialect.id || null

      uni.showLoading({
        title: '合成中...',
        mask: true
      })

      synthesizeTts(textToSpeak)
        .then((raw) => {
          const parsed = this.normalizeTtsResponse(raw)
          if (!parsed.base64Audio) {
            uni.showToast({
              title: '合成失败，请稍后重试',
              icon: 'none'
            })
            return
          }

          this.playBase64Audio(parsed.base64Audio)
          this.dialectPlayingId = dialect.id || null
        })
        .catch((err) => {
          console.error('方言合成请求失败:', err)
          uni.showToast({
            title: '网络错误，请稍后重试',
            icon: 'none'
          })
        })
        .finally(() => {
          this.dialectTtsLoadingId = null
          uni.hideLoading()
        })
    },
    handleCustomTts() {
      const text = (this.customPlainText || '').trim()
      if (!text) {
        uni.showToast({
          title: '请输入普通话内容',
          icon: 'none'
        })
        return
      }
      if (this.customTtsLoading) {
        return
      }

      const dialectText = convertToShanxiDialect(text)
      const ttsText = dialectText || text

      this.customTtsLoading = true

      synthesizeTts(ttsText)
        .then((raw) => {
          const parsed = this.normalizeTtsResponse(raw)
          if (!parsed.base64Audio) {
            uni.showToast({
              title: '合成失败，请稍后重试',
              icon: 'none'
            })
            return
          }

          this.customDialectText = parsed.dialectText || dialectText || ''
          this.customDialectAudio = parsed.base64Audio || ''
          this.playBase64Audio(parsed.base64Audio)
        })
        .catch((err) => {
          console.error('自定义方言合成请求失败:', err)
          uni.showToast({
            title: '网络错误，请稍后重试',
            icon: 'none'
          })
        })
        .finally(() => {
          this.customTtsLoading = false
        })
    },
    replayCustomDialect() {
      if (!this.customDialectAudio) {
        if (!this.customDialectText) {
          uni.showToast({
            title: '请先生成方言',
            icon: 'none'
          })
        }
        return
      }
      this.playBase64Audio(this.customDialectAudio)
    },
    normalizeTtsResponse(raw) {
      if (!raw) {
        return { base64Audio: '', dialectText: '' }
      }

      let data = null
      let success = false

      if (typeof raw.success !== 'undefined') {
        success = !!raw.success
        data = raw.data
      } else if (typeof raw.code !== 'undefined') {
        success = raw.code === 0 || raw.code === '0' || raw.code === null
        data = raw.data
      } else {
        data = raw.data || raw.audio || raw.base64 || raw
        success = !!data
      }

      if (!success || !data) {
        return { base64Audio: '', dialectText: '' }
      }

      if (typeof data === 'string') {
        return { base64Audio: data, dialectText: '' }
      }

      const base64Audio = data.audio || data.audioBase64 || data.base64 || data.data || ''
      const dialectText = data.dialectText || data.text || ''
      return { base64Audio, dialectText }
    },
    playBase64Audio(base64) {
      if (!base64) {
        return
      }

      // #ifdef MP-WEIXIN
      const fs = wx.getFileSystemManager()
      const filePath = `${wx.env.USER_DATA_PATH}/tts_${Date.now()}.mp3`

      fs.writeFile({
        filePath,
        data: base64,
        encoding: 'base64',
        success: () => {
          if (dialectAudioCtx) {
            try {
              dialectAudioCtx.stop()
            } catch (e) {}
            try {
              dialectAudioCtx.destroy()
            } catch (e) {}
          }
          dialectAudioCtx = uni.createInnerAudioContext()
          dialectAudioCtx.src = filePath
          dialectAudioCtx.autoplay = true
          dialectAudioCtx.onError((err) => {
            console.error('音频播放失败:', err)
            uni.showToast({
              title: '播放失败',
              icon: 'none'
            })
          })
        },
        fail: (err) => {
          console.error('写入音频文件失败:', err)
          uni.showToast({
            title: '播放失败',
            icon: 'none'
          })
        }
      })
      // #endif

      // #ifdef H5
      try {
        const audio = new Audio(`data:audio/mp3;base64,${base64}`)
        audio.play().catch((err) => {
          console.error('H5 播放失败:', err)
          uni.showToast({
            title: '播放失败',
            icon: 'none'
          })
        })
      } catch (err) {
        console.error('创建 H5 音频失败:', err)
        uni.showToast({
          title: '播放失败',
          icon: 'none'
        })
      }
      // #endif
    },
    closeDialectCollector() {
      this.showDialectCollectorModal = false
      this.customPlainText = ''
      this.customDialectText = ''
      this.customTtsLoading = false
      this.customDialectAudio = ''
    },
  }
}
</script>

<template>
  <page-meta page-style="height:100vh;overflow:hidden" />
  <view class="index-page">
    <image :src="cornerImage" class="corner-image" mode="widthFix" />
    <view class="floating-btn" @tap="toggleGuessModal">藏面</view>

    <view class="hero">
      <image :src="noodleBowl" class="hero-bowl" />


      <view class="map-panel">
        <image
          class="noodle-frame"
          :src="IMG.noodleFrame"
          mode="scaleToFill"
          v-show="!(showGuessModal || showDialectModal || showDialectCollectorModal || showFoodMapModal)"
        />


        <view class="white-bg"></view>
        <image
          class="noodle-splash"
          :src="noodleSplash"
          mode="widthFix"
          v-show="!(showGuessModal || showDialectModal || showDialectCollectorModal || showFoodMapModal)"
        />

        <!-- 标题已移至面图右侧显示 -->
        <view class="map">
          <ec-canvas
            class="sx-map-canvas"
            v-if="!(showGuessModal || showDialectModal || showDialectCollectorModal || showFoodMapModal)"
            canvas-id="sx-map"
            :ec="{ onInit: initSxMapChart }"
          ></ec-canvas>
        </view>
      </view>
    </view>

    <view class="feature-cards">
      <view class="feature-card" @tap="goDialectCollectorFromIndex">
        <text class="feature-name">方言收集器</text>
        <text class="feature-desc">收集陕西各地地道口音</text>
      </view>
      <view class="feature-card" @tap="goFoodMapFromIndex">
        <text class="feature-name">陕味趣游地图</text>
        <text class="feature-desc">一图看遍陕味足迹</text>
      </view>
    </view>




    <view v-if="showGuessModal" class="overlay">
      <view class="modal">
        <view class="modal-header">
          <text>猜粗细 · 面条截面</text>
          <text class="modal-close" @tap="toggleGuessModal">×</text>
        </view>
        <view class="shot-list">
          <view v-for="shot in faceShots" :key="shot.id" class="shot-card">
            <image :src="shot.img" class="shot-img" mode="aspectFit" />
            <text class="shot-clue">{{ shot.clue }}</text>
            <button
              class="shot-btn"
              size="mini"
              type="default"
              @tap="revealShot(shot.id)"
            >
              {{ shot.revealed ? '已揭晓' : '我来猜' }}
            </button>
            <text v-if="shot.revealed" class="shot-knowledge">
              {{ shot.knowledge }}
            </text>
          </view>
        </view>
      </view>
    </view>

    <view v-if="showDialectModal" class="overlay">
      <view class="modal dialect">
        <view class="modal-header">
          <text>{{ activeDialect.title }}</text>
          <text class="modal-close" @tap="closeDialect">×</text>
        </view>
        <view class="dialect-body">
          <view v-for="d in dialects" :key="d.id" class="dialect-card">
            <text class="dialect-title">{{ d.title }}</text>
            <text v-for="line in d.content" :key="line" class="dialect-line">· {{ line }}</text>
            <text class="dialect-tip">{{ d.tip }}</text>
          </view>
        </view>
      </view>
    </view>

    <view v-if="showDialectCollectorModal" class="overlay">
      <view class="modal dialect">
        <view class="modal-header">
          <text>陕西方言收集器</text>
          <text class="modal-close" @tap="closeDialectCollector">×</text>
        </view>

        <scroll-view class="dialect-list" scroll-y>
          <view
            v-for="dialect in dialectList"
            :key="dialect.id"
            class="dialect-item"
          >
            <view class="dialect-row dialect-row-main">
              <text class="dialect-label">方言：</text>
              <text class="dialect-content dialect-word">{{ dialect.word }}</text>
            </view>
            <view class="dialect-row dialect-row-main">
              <text class="dialect-label">普通话：</text>
              <text class="dialect-content dialect-meaning">{{ dialect.meaning }}</text>
            </view>

<view class="dialect-row dialect-row-main">
  <text class="dialect-label">地区：</text>
  <text class="dialect-content dialect-region-text">{{ dialect.region }}</text>
</view>

            <view class="dialect-row dialect-example-row">
              <text class="dialect-label">用法说明：</text>
              <text class="dialect-content dialect-example-text">{{ dialect.example }}</text>
            </view>
            <view class="play-icon" @tap.stop="playDialect(dialect)">
              <image
                class="play-icon-img"
                src="/static/assets/喇叭.png"
                mode="widthFix"
              />
            </view>
          </view>

        </scroll-view>



        <view class="dialect-custom">
          <view class="dialect-custom-title">想听啥方言？</view>
          <view class="dialect-custom-input-row">
            <input
              class="dialect-custom-input"
              v-model="customPlainText"
              type="text"
              placeholder="输入普通话，例如：我今天很开心"
              confirm-type="done"
              @confirm="handleCustomTts"
            />
            <button
              class="dialect-custom-btn"
              :loading="customTtsLoading"
              :disabled="customTtsLoading || !customPlainText.trim()"
              @tap="handleCustomTts"
            >
              {{ customTtsLoading ? '合成中' : '生成方言' }}
            </button>
          </view>
          <view v-if="customDialectText" class="dialect-custom-result">
            <view class="result-header">
              <view class="result-label">方言表达：</view>
              <view class="result-play-icon" @tap="replayCustomDialect">
                <image
                  class="play-icon-img"
                  src="/static/assets/喇叭.png"
                  mode="widthFix"
                />
              </view>
            </view>

            <view class="result-text">{{ customDialectText }}</view>
          </view>
        </view>

        <view class="dialect-footer">
          <text class="collected-count">已收录 {{ dialectList.length }} 个方言</text>
        </view>
      </view>
    </view>

    <!-- 图标固定在底部：上方居中一个，下方四个一行，同屏可见；任何弹窗打开时隐藏 -->
      <view
        class="icons-fixed"
        v-if="!(showGuessModal || showDialectModal || showDialectCollectorModal)"
      >
      <image
        class="section-divider"
        :src="IMG.retouch_2025111915301620"
        mode="widthFix"
        v-show="!(showGuessModal || showDialectModal || showDialectCollectorModal)"
      />

      <view class="icons-top">

        <view class="icon-block" @tap="goPage('tong')">
          <view class="top-circle-wrap">
            <image class="icon-img" :src="IMG.retouch_2025112414375907" mode="widthFix" />
          </view>
          <text
            class="icon-label"
            :class="{ 'icon-label-active': activeNavId === 'tong' }"
          >陕面通</text>
        </view>
      </view>


      <view class="icons-bottom">
        <view
          v-for="icon in bottomIcons"
          :key="icon.id"
          class="icon-block"
          @tap="goPage(icon.id)"
        >
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
.index-page {
  height: 100vh;
  min-height: 100vh;
  padding: 40rpx 32rpx 0rpx;
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
  color: #5a2c12;
  position: relative;
  overflow: hidden;
}

/* 左上角图片样式 */
.corner-image {
  position: absolute;
  top: -10rpx;
  left:3rpx;
  z-index: 2;
  width: 180rpx; /* 放大左上角的面图 */
  transform: translateY(7rpx) translateX(6rpx) scaleX(1.30);
  transform-origin: left top;
  pointer-events: none;
  border: none;
  outline: none;
  box-shadow: none;
  border-radius: 0;
  background: transparent;
}


/* 页面底部图标容器 */
.bottom-icons-container {
  position: fixed;
  bottom: 40rpx;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
}

/* 底部图标行样式 */
.bottom-icons-row {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 80rpx);
  max-width: 600rpx;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 60rpx;
  padding: 16rpx 24rpx;
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.15);
}

.bottom-icon-pill {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12rpx 8rpx;
  border-radius: 40rpx;
  transition: all 0.3s ease;
}

.bottom-icon-pill:active {
  background: rgba(255, 207, 93, 0.3);
  transform: scale(0.95);
}

.bottom-icon-pill .icon-dot {
  width: 16rpx;
  height: 16rpx;
  background: #ff7a18;
  border-radius: 50%;
  margin-bottom: 6rpx;
}

.bottom-icon-pill text {
  font-size: 22rpx;
  font-weight: 500;
  color: #5a2c12;
}

/* 中央上方图标样式 */
.top-center-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 120rpx;
}

.center-icon-pill {
  width: 170rpx;
  height: 150rpx;
  border-radius: 50%;
  background: #ff7a18;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  color: white;
  font-weight: bold;
  box-shadow: 0 8rpx 16rpx rgba(255, 122, 24, 0.4);
  position: relative;
  z-index: 2;
}

/* 面条连接线 */
.noodle-connector {
  position: absolute;
  top: 280rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 8rpx;
  height: 120rpx;
  background: linear-gradient(180deg, #ff7a18, #ffcf5d);
  border-radius: 4rpx;
  z-index: 1;
  box-shadow: 0 4rpx 8rpx rgba(255, 122, 24, 0.3);
}

/* 下方图标行样式 */
.bottom-icons-row {
  display: flex;
  justify-content: space-between;
  margin: 0 40rpx 60rpx;
  position: relative;
  z-index: 2;
}

.bottom-icon-pill {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background: #ffe569;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  box-shadow: 0 6rpx 12rpx rgba(255, 200, 0, 0.45);
}

.floating-btn {
  position: fixed;
  right: 40rpx;
  bottom: 160rpx;
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background: #ffcf5d;
  color: #7b2f00;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 10rpx 18rpx rgba(255, 160, 16, 0.35);
  z-index: 20;
}

.hero {
  position: relative;
  padding-top: 60rpx;
  margin-bottom: 60rpx;
}

.hero-bowl {
  width: 150rpx;
  height: 150rpx;
}

.map-panel {
  margin-top: 30rpx;           /* 再上移40rpx */
  padding: 22rpx 1rpx 100rpx 32rpx;   /* 上-10, 右-15, 下-40, 左保持 */
  border-radius: 32rpx;
  background: transparent;          /* 白底交由 .map-bg 控制 */
  overflow: visible;
  box-shadow: 0 20rpx 40rpx rgba(255, 190, 90, 0.2);
}

.map-title {
  font-size: 32rpx;
  font-weight: 600;
}

.map {
  position: relative;
  width: calc(100% - 50rpx);
  height: 750rpx;
  margin-top: 120rpx;
  background: transparent;
  border-radius: 24rpx;
  overflow: visible;
  z-index: 0; /* 地图容器放在页面底层，避免盖住弹窗 */
}
/* 渐变白底移至伪元素，便于单独控制尺寸与位置 */
.map::before {
  content: '';
  position: absolute;
  top: -190rpx; /* 下移约 60rpx */
  right: -38rpx;
  bottom: 0;
  left: -30rpx;
  border-radius: 24rpx;
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 220, 120, 0.4), transparent 60%),
    radial-gradient(circle at 70% 40%, rgba(255, 180, 150, 0.35), transparent 55%);
  z-index: 0;
  pointer-events: none;
}

.sx-map-canvas {
  position: absolute;
  top: -810rpx;
  right: -140rpx;
  bottom: -470rpx;
  left: -190rpx;
  z-index: 0; /* 完全放在普通内容之下，由弹窗盖住 */
  transform: none;
  transform-origin: center;
}

.map-city {
  position: absolute;
  width: 300rpx;
  padding: 25rpx;
  border-radius: 30% 70% 60% 40%;
  text-align: center;
  box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.1);
  transform: translate(-30%, -50%);
  transition: transform 0.2s;
}

.map-city:active {
  transform: translate(-50%, -50%) scale(0.96);
}

.city-name {
  font-weight: 700;
}

.city-tagline {
  display: block;
  font-size: 20rpx;
  margin-top: 6rpx;
}

.feature-cards {
  display: flex;
  gap: 40rpx;
  margin-top: -360rpx;   /* 整体再向上挪一点 */
  margin-bottom: 120rpx;
  position: relative;
  z-index: 40;
}

.feature-cards::before {
  content:"";
  position: absolute;
  top: 0rpx;
  right: 30rpx;
  bottom: -2rpx; /* 下端延长 20rpx */
  left: 30rpx;
  background: #ffffff;
  border-radius: 32rpx;
  box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.08);
  z-index: -1;
  pointer-events: none;
}

.feature-card {
  flex: 0 0 calc(50% - 92rpx); /* 在 20rpx 间距的两列布局上，每张卡再减 20rpx */
  padding: 32rpx;
  border-radius: 32rpx;
  background: #ffefc2;
  box-shadow: inset 0 0 0 6rpx rgba(255, 255, 255, 0.8), 0 12rpx 20rpx rgba(255, 174, 65, 0.2);
}

.feature-name {
  font-size: 36rpx;
  font-weight: 700;
}

.feature-desc {
  display: block;
  margin-top: 8rpx;
  font-size: 26rpx;
}

.section-divider {
  position: absolute;
  left: 40rpx;
  right: 40rpx;
  top: -10rpx;          /* 再往上挪一点，更贴近上方模块底边 */
  width: auto;
  display: block;
  z-index: 10;          /* 压在所有背景板之上 */
  pointer-events: none; /* 不影响底部图标点击 */
}




.divider {
  margin-top: 60rpx;
}

.chopsticks {
  height: 14rpx;
  background: linear-gradient(90deg, #6b3b1f, #a15a2f);
  border-radius: 14rpx;
  position: relative;
  margin-bottom: 24rpx;
}

.chopsticks::after {
  content: '';
  position: absolute;
  right: 60rpx;
  top: -10rpx;
  width: 12rpx;
  height: 34rpx;
  background: #d5c06f;
  border-radius: 4rpx;
  box-shadow: -18rpx 0 0 #d5c06f, -36rpx 0 0 #d5c06f;
}

.icon-row {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 10rpx;
}

.icon-row::before {
  content: '';
  position: absolute;
  top: -16rpx;
  left: 0;
  right: 0;
  height: 80rpx;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="80"><path d="M0 40 Q50 0 100 40 T200 40 T300 40 T400 40" stroke="%23ffcf5d" stroke-width="6" fill="none" stroke-linecap="round"/></svg>')
    center/contain no-repeat;
  z-index: -1;
}

.icon-pill {
  width: 110rpx;
  height: 110rpx;
  border-radius: 50%;
  background: #ffe569;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22rpx;
  z-index: 1;
  box-shadow: 0 6rpx 10rpx rgba(255, 200, 0, 0.45);
}

.icon-dot {
  width: 18rpx;
  height: 18rpx;
  background: #d54c10;
  border-radius: 50%;
  margin-bottom: 6rpx;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.modal {
  width: 90%;
  max-height: 84vh;
  background: #fffaf1; /* 米白色，而不是纯白 */
  border-radius: 32rpx;
  padding: 32rpx 32rpx 12rpx;
  box-shadow: 0 30rpx 60rpx rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
}



.modal.dialect {
  width: 88%; /* 略加宽，让文字有更大的展示宽度 */
}





.modal-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 32rpx;
  margin-bottom: 24rpx;
}

.modal-close {
  font-size: 48rpx;
  line-height: 1;
}

.shot-list {
  overflow-y: auto;
  gap: 24rpx;
  display: flex;
  flex-direction: column;
}

.shot-card {
  background: #fff5df;
  padding: 24rpx;
  border-radius: 24rpx;
  box-shadow: inset 0 0 0 4rpx rgba(255, 255, 255, 0.7);
  text-align: center;
}

.shot-img {
  width: 180rpx;
  height: 180rpx;
}

.shot-clue {
  display: block;
  margin: 12rpx 0;
  font-size: 26rpx;
}

.shot-btn {
  margin-bottom: 12rpx;
  border-radius: 999px;
  background: #ffc34a;
  color: #5a2c12;
}

.shot-knowledge {
  font-size: 24rpx;
  color: #a14b1f;
}

.modal.dialect .dialect-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  font-size: 28rpx;
  overflow-y: auto;
  padding-bottom: 12rpx;
}

.dialect-tip {
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #8c5c2a;
}

/* 面语卡片样式：每条面语独立卡片分隔显示 */
.dialect-card {
  background: #fff5df;
  border-radius: 24rpx;
  box-shadow: 0 12rpx 24rpx rgba(0,0,0,0.08);
  border: 3rpx solid #e8d4b8;
  padding: 16rpx 18rpx;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}
.dialect-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  margin-bottom: 4rpx;
}


.dialect-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  margin-bottom: 4rpx;
}
.dialect-line {
  display: block;
  font-size: 26rpx;
  color: #5a2c12;
  line-height: 1.6;
}

.dialect-line {
  display: block;
  font-size: 26rpx;
  color: #5a2c12;
  line-height: 1.6;
}
/* 面条方框装饰，放在白色模块内部四周 */
.noodle-frame {
  position: absolute;
  top: -125rpx;             /* 四边统一内缩 20rpx，总体长宽各缩小 40rpx */
  left: -60rpx;
  right: -42rpx;
  bottom: 250rpx;
  width: auto;
  height: auto;
  border-radius: 32rpx;   /* 与 map-panel 圆角一致 */
  z-index: 1;             /* 装饰层 */
  pointer-events: none;   /* 不干扰点击 */
}

/* 面条方框装饰，放在白色模块内部四周 */
.noodle-frame {
  position: absolute;
  top: -125rpx;             /* 四边统一内缩 20rpx，总体长宽各缩小 40rpx */
  left: -60rpx;
  right: -42rpx;
  bottom: 250rpx;
  width: auto;
  height: auto;
  border-radius: 32rpx;   /* 与 map-panel 圆角一致 */
  z-index: 1;             /* 装饰层 */
  pointer-events: none;   /* 不干扰点击 */
}


.dialect-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  margin-bottom: 4rpx;
}


.dialect-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  margin-bottom: 4rpx;
}
.dialect-line {
  display: block;
  font-size: 26rpx;
  color: #5a2c12;
  line-height: 1.6;
}
.dialect-line {
  display: block;
  font-size: 26rpx;
  color: #5a2c12;
  line-height: 1.6;
}
/* 面条方框装饰，放在白色模块内部四周 */
.noodle-frame {
  position: absolute;
  top: -125rpx;             /* 四边统一内缩 20rpx，总体长宽各缩小 40rpx */
  left: -60rpx;
  right: -42rpx;
  bottom: 250rpx;
  width: auto;
  height: auto;
  border-radius: 32rpx;   /* 与 map-panel 圆角一致 */
  z-index: 1;             /* 装饰层 */
  pointer-events: none;   /* 不干扰点击 */
}
/* 面条方框装饰，放在白色模块内部四周 */
.noodle-frame {
  position: absolute;
  top: -125rpx;             /* 四边统一内缩 20rpx，总体长宽各缩小 40rpx */
  left: -60rpx;
  right: -42rpx;
  bottom: 250rpx;
  width: auto;
  height: auto;
  border-radius: 32rpx;   /* 与 map-panel 圆角一致 */
  z-index: 1;             /* 装饰层 */
  pointer-events: none;   /* 不干扰点击 */
}

/* 纯白圆角背景层（非渐变、非面条方框）：仅控制白底自身大小与位置 */
.white-bg {
  position: absolute;
  top: -20rpx;
  right:44rpx;
  bottom: 330rpx;
  left: 10rpx;
  background: #fffef7;
  border-radius: 32rpx;
  z-index: 0;       /* 高于 noodle-frame(0)，低于内容(map,2) */
  pointer-events: none;
}

/* 确保模块内容在装饰之上 */
.map-panel { position: relative; }
.map { position: relative; z-index: 2; }
/* 右下角装饰 */
.noodle-splash {
  position: absolute;
  right: -20rpx;   /* 向左微调一丢丢，居中一些 */
  bottom: 275rpx;  /* 稍微往下挪一丢丢 */
  width: 150rpx;  /* 可按视觉再调 140~220rpx */
  z-index: 4;     /* 在方框之上，低于内容 */
  pointer-events: none;
}





.floating-btn,
.bottom-icons-container {
  display: none !important;
}

/* 新图标布局（图片 + 下方文字），不使用圆形底色，不被白色方框包裹 */
.icons-top {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -40rpx 0 20rpx;
  padding-top: 0;
  z-index: 3;
}

.icons-top .icon-block {
  transform: translateY(80rpx); /* 下移更多，让整体位置更低 */
  will-change: transform;
}
/* 延长上方“陕面通”米黄色背景，仅背景加长不改图标大小 */
.icons-top::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;            /* 不再绘制任何背景，避免遮挡上方模块 */
  background: transparent;
  border-radius: 0;
  z-index: -2;
}



.icons-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 35rpx;
  padding: 0 10rpx;
  /* 无背景，无边框，确保不被任何白色方框包住 */
  background: transparent;
  margin-top: -12rpx; /* 整体上移一点，不影响大小 */
}
/* 仅增大“陕味集”(第2个) 与 “陕非遗”(第3个) 的间距 */
.icons-bottom .icon-block:nth-child(2) { margin-right: 40rpx; }
.icons-bottom .icon-block:nth-child(3) { margin-left: 40rpx; }


.icon-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
}

.icon-img {
  width: 58rpx;    /* 再缩小 0.5 倍 */
  height: auto;
  display: block;
}
/* 仅放大顶部“陕面通”图标，不影响底部四个 */
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


/* 顶部“陕面通”图标白色圆形包裹层：让圆形白底看起来置于底栏内部 */
.top-circle-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
  padding: 18rpx;              /* 圆形白底厚度 */
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06); /* 轻阴影，避免突兀 */
  border: 0;
  position: relative;
  z-index: 5;                 /* 保证陕面通图标在底栏背景之上 */
}


/* 固定底部容器：确保图标始终贴底，并覆盖多余空白 */
.icons-fixed {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 60rpx; 
  padding: 10rpx 20rpx 16rpx; /* 适度内边距，避免贴边 */
  background: transparent;
  z-index: 300; /* 底部导航整体浮在页面内容之上 */
}

/* 统一底栏背景：白色圆角条，覆盖五个图标区域 */
.icons-fixed::before {
  content: '';
  position: absolute;
  left: 12rpx;
  right: 12rpx;
  bottom: -5rpx;
  top: 100rpx;  /* 下移背景上边界，避免压住卡片 */
  background: rgba(255, 255, 255, 0.95);
  border-radius: 28rpx;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.08);
  z-index: -1; /* 置于图标后面，仅作为背景 */
}

.dialect-list {
  flex: 1;
  padding: 0rpx 16rpx 25rpx 2rpx; /* 底部内边距再缩小一点，给最后一张卡片腾空间 */
  max-height: 735rpx; /* 提高可视高度，让更多内容一次性展示 */
}





.dialect-item {
  background: #fff5df; /* 方言卡片淡黄色底 */
  border-radius: 32rpx;
  padding: 16rpx 28rpx 12rpx 28rpx; /* 上下压缩一点，让卡片更紧凑 */
  margin: 0rpx 0 6rpx 0; /* 顶部不留空隙，卡片之间稍微缩小距离 */
  width: 100%; /* 使用 border-box，避免右侧边框被裁切 */
  box-sizing: border-box;
  border: 4rpx solid #ffffff; /* 四边等宽白色边框 */
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.05);
  position: relative;
}

.dialect-row {
  display: flex;
  align-items: flex-start; /* 默认多行内容顶部对齐 */
  gap: 0; /* 标签和内容之间不用多余间隔 */
  margin-bottom: 4rpx; /* 每行之间更紧凑 */
}


/* 方言、普通话两行：说明和内容保持同一行、字底部对齐 */
.dialect-row-main {
  align-items: baseline;
}


.dialect-item .dialect-row:last-child {
  margin-bottom: 0; /* 最后一行不再留额外空白 */
}

.dialect-label {
  flex-shrink: 0;
  font-size: 26rpx; /* 标签整体字号略放大 */
  color: #8c5c2a;
  font-weight: 600;
  margin-right: 4rpx; /* 只保留一个很小的视觉间距，相当于“：”后半个字距 */
}



.dialect-content {
  flex: 1;
  font-size: 26rpx;
  color: #5a2c12;
}

.dialect-region-text {
  display: inline-block;
  flex: 0 0 auto; /* 不再拉满整行，只包裹文字本身 */
  padding: 4rpx 16rpx;
  border-radius: 999px;
  border: 2rpx solid #ffcc33; /* 金黄色描边 */
  background: rgba(255, 204, 51, 0.06); /* 轻微底色，让标签更像徽标 */
  font-size: 26rpx;
  color: #8c5c2a;
}




.dialect-example-row {
  align-items: baseline; /* 让“用法说明”和后面的文字在同一行基线对齐 */
}

.dialect-example-row .dialect-label {
  margin-top: 0; /* 去掉额外上移，避免错位 */
}







.dialect-word {
  font-size: 32rpx;
  font-weight: 700;
  color: #5a2c12;
  margin-bottom: 8rpx;
}

.dialect-meaning {
  font-size: 26rpx;
  color: #ff6b6b;
  margin-bottom: 6rpx;
  font-weight: 600;
}

.dialect-region {
  display: inline-block;
  font-size: 24rpx; /* 地区徽标字号调大 */
  color: #fff;
  background: #ffcc33;
  padding: 4rpx 12rpx;
  border-radius: 999px;
  margin-bottom: 12rpx;
}


.dialect-example-text {
  font-size: 24rpx; /* 用法说明稍微缩小，避免太抢眼 */
  color: #8c5c2a;
  line-height: 1.6;
}





.example-label {
  font-weight: 600;
  color: #5a2c12;
}

.play-icon {
  position: absolute;
  right: 26rpx; /* 更靠右上角 */
  top: 20rpx;
}

.play-icon-img {
  width: 40rpx;
  height: 40rpx;
  display: block;
}




.dialect-footer {
  margin-top: auto;
  padding: 12rpx 0 0;
  text-align: center;
}



.collected-count {
  display: inline-block;
  padding: 8rpx 18rpx;
  border-radius: 999px;
  background: #fff5e6;
  border: 2rpx solid #e8d4b8;
  font-size: 24rpx;
  color: #8c5c2a;
}



.dialect-custom {
  padding: 16rpx 24rpx 10rpx;
  margin: 10rpx auto 0;
  width: 92%;
  border: 3rpx dashed #cfa86a; /* 只保留这一圈虚线方框 */
  background: #fff9ec;
  border-radius: 24rpx;
}





.dialect-custom-title {
  font-size: 26rpx;
  font-weight: 600;
  color: #5a2c12;
  margin-bottom: 12rpx;
}

.dialect-custom-input-row {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 12rpx;
}

.dialect-custom-input {
  flex: 1;
  height: 64rpx;
  padding: 0 16rpx;
  border-radius: 999px;
  background: #ffffff;
  border: 2rpx solid #e8d4b8;
  font-size: 24rpx;
  color: #5a2c12;
}

.dialect-custom-btn {
  min-width: 160rpx;
  height: 64rpx;
  line-height: 64rpx;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
  color: #5a2c12 !important; /* 始终使用棕色文字 */
  font-size: 24rpx;
  font-weight: 600;
  text-align: center;
  padding: 0 20rpx;
}

.dialect-custom-btn:active,
.dialect-custom-btn::after,
.dialect-custom-btn[disabled] {
  color: #5a2c12 !important; /* 点击、加载、禁用等所有状态都保持棕色 */
}

.dialect-custom-btn[disabled] {
  opacity: 0.6; /* 仅用透明度区分禁用态 */
}



.dialect-custom-result {
  margin-top: 4rpx;
  padding: 12rpx 16rpx;
  border-radius: 12rpx;
  background: #fff5e6;
  border: 2rpx solid #e8d4b8;
}

.result-label {
  font-size: 22rpx;
  color: #5a2c12;
}

.result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rpx;
}

.result-play-icon {
  font-size: 28rpx;
  color: #5a2c12;
  padding-left: 16rpx;
}

.result-text {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
}
</style>



<template>
  <page-meta page-style="overflow:auto;min-height:100vh" />
  <view class="mine-page">
    
    <!-- 顶部用户信息卡片 -->
    <view class="user-header" @tap="handleHeaderClick">
      <!-- 左侧头像 -->
      <view class="avatar-section">
        <image class="avatar" :src="userInfo.avatarUrl || defaultAvatar" mode="aspectFill" />
        <text class="user-intro">{{ userInfo.intro || '探索陕西美食文化' }}</text>
      </view>
      
      <!-- 右侧用户信息 -->
      <view class="info-section">
        <text class="username">{{ userInfo.nickName || '点击登录' }}</text>
        <text v-if="isLoggedIn" class="user-level">{{ userLevel }}</text>
        <text class="user-stats">{{ isLoggedIn ? `打卡 ${checkInCount} 次 | 清单 ${checklistCount} 个` : '登录后解锁更多功能' }}</text>
        
        <!-- 成就标签（在用户信息卡片内，可横向滚动） -->
        <scroll-view v-if="isLoggedIn && unlockedAchievementTags.length > 0" class="achievement-tags-scroll-inline" scroll-x enable-flex @tap.stop>
          <view class="achievement-tags">
            <view 
              v-for="tag in unlockedAchievementTags" 
              :key="tag.id" 
              class="tag-badge"
            >
              <text class="tag-text">{{ tag.name }}</text>
            </view>
          </view>
        </scroll-view>
      </view>
      
      <!-- 更多按钮（右下角） -->
      <view 
        v-if="isLoggedIn && allMedals.length > 4"
        class="more-medals-btn"
        @tap.stop="toggleMedalsExpanded"
      >
        <text class="more-icon">➕</text>
      </view>
    </view>
    
    <!-- 勋章和工具模块 -->
    <view class="medals-tools-section">
      <!-- 左侧勋章（固定显示4个位置） -->
      <view class="medals-grid">
        <view 
          v-for="(medal, index) in displayedMedals"
          :key="medal.id || `placeholder-${index}`" 
          class="medal-item"
          :class="{ 'locked': !medal.unlocked }"
          @tap="medal.unlocked ? showMedalDetail(medal) : null"
        >
          <view class="medal-icon">{{ medal.icon || '🔒' }}</view>
          <text class="medal-name">{{ medal.name || '未获得' }}</text>
        </view>
      </view>
      
      <!-- 右侧工具模块（橙色统一模块） -->
      <view class="tools-panel">
        <view class="tools-label">工具</view>
        <view class="tool-item" @tap="goGuessFeature">
          <image class="tool-icon-img" :src="iconJingcai" mode="aspectFit" />
          <text class="tool-name">猜粗细</text>
        </view>
        <view class="tool-item" @tap="goDialectFeature">
          <image class="tool-icon-img" :src="iconYuyanpeixun" mode="aspectFit" />
          <text class="tool-name">面语</text>
        </view>
      </view>
    </view>

    <!-- 展开的勋章列表弹窗 -->
    <view v-if="showMedalsExpanded" class="dialog-mask" @tap="toggleMedalsExpanded">
      <view class="medals-expanded-dialog" @tap.stop>
        <view class="dialog-header">
          <text class="dialog-title">🏆 我的勋章</text>
          <text class="dialog-close" @tap="toggleMedalsExpanded">×</text>
        </view>
        <scroll-view class="medals-expanded-list" scroll-y>
          <view class="medals-section">
            <text class="medals-section-title">已获得 ({{ unlockedMedals.length }})</text>
            <view class="medals-expanded-grid">
              <view 
                v-for="medal in unlockedMedals"
                :key="medal.id" 
                class="medal-expanded-item"
                @tap="showMedalDetail(medal)"
              >
                <view class="medal-expanded-icon">{{ medal.icon }}</view>
                <text class="medal-expanded-name">{{ medal.name }}</text>
                <text class="medal-expanded-desc">{{ medal.description }}</text>
                <text v-if="medal.unlockTime" class="medal-expanded-time">{{ medal.unlockTime }}</text>
              </view>
            </view>
          </view>
          <view class="medals-section">
            <text class="medals-section-title">未获得 ({{ lockedMedals.length }})</text>
            <view class="medals-expanded-grid">
              <view 
                v-for="medal in lockedMedals"
                :key="medal.id" 
                class="medal-expanded-item medal-expanded-item--locked"
                @tap="showMedalDetail(medal)"
              >
                <view class="medal-expanded-icon">{{ medal.icon }}</view>
                <text class="medal-expanded-name">{{ medal.name }}</text>
                <text class="medal-expanded-desc">{{ medal.description }}</text>
                <view v-if="medal.progress !== undefined" class="medal-expanded-progress">
                  <text class="progress-text">进度：{{ medal.progress }}/{{ medal.target }}</text>
                  <view class="progress-bar">
                    <view class="progress-fill" :style="{ width: (medal.progress / medal.target * 100) + '%' }"></view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
    
    <!-- 我的内容模块 -->
    <view class="my-content-section">
      <!-- 我的清单大全 -->
      <view class="content-card" @tap="goAllChecklists">
        <view class="card-header">
          <view class="card-title-with-icon">
            <image class="card-icon" :src="iconZonghepingjia" mode="aspectFit" />
            <text class="card-title">我的清单大全</text>
          </view>
          <text class="card-arrow">></text>
        </view>
        <view class="card-preview">
          <text class="preview-text">{{ checklistCount }} 个清单 | 最近：{{ latestChecklist }}</text>
        </view>
      </view>
      
      <!-- 我的打卡记录 -->
      <view class="content-card" @tap="goCheckInRecords">
        <view class="card-header">
          <view class="card-title-with-icon">
            <image class="card-icon" :src="iconDaka" mode="aspectFit" />
            <text class="card-title">美食打卡记录</text>
          </view>
          <text class="card-arrow">></text>
        </view>
        <view class="card-preview">
          <text class="preview-text">累计打卡 {{ checkInCount }} 次 | 连续 {{ continuousDays }} 天</text>
        </view>
      </view>
      
      <!-- 陕味足迹大全 -->
      <view class="content-card" @tap="goFoodFootprints">
        <view class="card-header">
          <view class="card-title-with-icon">
            <image class="card-icon" :src="iconZuji" mode="aspectFit" />
            <text class="card-title">陕味足迹大全</text>
          </view>
          <text class="card-arrow">></text>
        </view>
        <view class="card-preview">
          <text class="preview-text">{{ visitedCount }} 家美食店 | 游玩了 {{ scenicCount }} 处景点</text>
        </view>
      </view>
      
      <!-- 非遗体验记录 -->
      <view class="content-card" @tap="goHeritageRecords">
        <view class="card-header">
          <view class="card-title-with-icon">
            <image class="card-icon" :src="iconWode" mode="aspectFit" />
            <text class="card-title">非遗体验记录</text>
          </view>
          <text class="card-arrow">></text>
        </view>
        <view class="card-preview">
          <text class="preview-text">体验 {{ heritageCount }} 个项目 | 收藏 {{ heritageCollect }} 个</text>
        </view>
      </view>
      
      <!-- 推荐与评论记录 -->
      <view class="content-card" @tap="goRecommendComments">
        <view class="card-header">
          <view class="card-title-with-icon">
            <image class="card-icon" :src="iconTuijian" mode="aspectFit" />
            <text class="card-title">推荐与评论记录</text>
          </view>
          <text class="card-arrow">></text>
        </view>
        <view class="card-preview">
          <text class="preview-text">推荐 {{ recommendCount }} 道菜 | 评论 {{ commentCount }} 条</text>
        </view>
      </view>
    </view>
    
    <!-- 设置与信息模块 -->
    <view class="settings-section">
      <view class="setting-item" @tap="goAboutUs">
        <image class="setting-icon-img" :src="iconGuanyu" mode="aspectFit" />
        <text class="setting-title">关于我们</text>
        <text class="setting-arrow">></text>
      </view>
      
      <view class="setting-item" @tap="goFeedback">
        <image class="setting-icon-img" :src="iconYonghujianyi" mode="aspectFit" />
        <text class="setting-title">用户建议</text>
        <text class="setting-arrow">></text>
      </view>
      
      <view class="setting-item" @tap="goSettings">
        <image class="setting-icon-img" :src="iconShezhi" mode="aspectFit" />
        <text class="setting-title">设置中心</text>
        <text class="setting-arrow">></text>
      </view>
    </view>
    
    <!-- 退出登录 -->
    <view class="settings-section" v-if="isLoggedIn">
      <view class="setting-item logout-item" @tap="logout">
        <text class="setting-title">退出登录</text>
      </view>
    </view>
    
    <!-- 猜粗细 · 面条截面弹窗 -->
    <view v-if="showGuessModal" class="dialog-mask" @tap="toggleGuessModal">
      <view class="guess-dialog" @tap.stop>
        <view class="dialog-header">
          <text class="dialog-title">猜粗细 · 面条截面</text>
          <text class="dialog-close" @tap="toggleGuessModal">×</text>
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

    <!-- 面语 · 方言卡弹窗（恢复首页样式） -->
    <view v-if="showMianyuDialog" class="dialog-mask" @tap="closeMianyuDialog">
      <view class="dialect-dialog" @tap.stop>
        <view class="dialog-header">
          <text class="dialog-title">{{ activeDialect.title }}</text>
          <text class="dialog-close" @tap="closeMianyuDialog">×</text>
        </view>
        <view class="mianyu-body">
          <view v-for="d in dialects" :key="d.id" class="mianyu-card">
            <text class="mianyu-title">{{ d.title }}</text>
            <text v-for="line in d.content" :key="line" class="mianyu-line">· {{ line }}</text>
            <text class="mianyu-tip">{{ d.tip }}</text>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 方言收集器弹窗 -->
    <view v-if="showDialectDialog" class="dialog-mask" @tap="closeDialectDialog">
      <view class="dialect-dialog" @tap.stop>
        <view class="dialog-header">
          <text class="dialog-title">陕西方言收集器</text>
          <text class="dialog-close" @tap="closeDialectDialog">×</text>
        </view>
        
        <scroll-view class="dialect-list" scroll-y>
          <view 
            v-for="dialect in dialectList" 
            :key="dialect.id" 
            class="dialect-item"
          >
            <view class="dialect-word">{{ dialect.word }}</view>
            <view class="dialect-meaning">{{ dialect.meaning }}</view>
            <view class="dialect-region">{{ dialect.region }}</view>
            <view class="dialect-example">
              <text class="example-label">用法：</text>
              <text class="example-text">{{ dialect.example }}</text>
            </view>
            <view class="play-icon" @tap.stop="playDialect(dialect)">🔊</view>
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
            <view class="result-label">方言表达：</view>
            <view class="result-text">{{ customDialectText }}</view>
          </view>
        </view>
        
        <view class="dialect-footer">
          <text class="collected-count">已收录 {{ dialectList.length }} 个方言</text>
        </view>
      </view>
    </view>
    
    <!-- 勋章详情弹窗 -->
    <view v-if="showMedalDialog && selectedMedal" class="dialog-mask" @tap="closeMedalDialog">
      <view class="medal-dialog" @tap.stop>
        <view class="medal-detail-icon">{{ selectedMedal.icon }}</view>
        <view class="medal-detail-name">{{ selectedMedal.name }}</view>
        <view class="medal-detail-desc">{{ selectedMedal.description }}</view>
        <view class="medal-progress" v-if="!selectedMedal.unlocked">
          <text class="progress-text">进度：{{ selectedMedal.progress }}/{{ selectedMedal.target }}</text>
          <view class="progress-bar">
            <view class="progress-fill" :style="{ width: (selectedMedal.progress / selectedMedal.target * 100) + '%' }"></view>
          </view>
        </view>
        <view class="medal-unlock-time" v-else>
          <text>🎉 {{ selectedMedal.unlockTime }}</text>
        </view>
        <view class="dialog-btn" @tap="closeMedalDialog">关闭</view>
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

<script>
import shot1 from '../../static/assets/noodle-cut-1.svg'
import shot2 from '../../static/assets/noodle-cut-2.svg'
import shot3 from '../../static/assets/noodle-cut-3.svg'
import { IMG } from '../../api/imageMap.js'
import iconZonghepingjia from '../../static/assets/zonghepingjia.png'
import iconDaka from '../../static/assets/daka.png'
import iconZuji from '../../static/assets/zuji.png'
import iconWode from '../../static/assets/我的.png'
import iconTuijian from '../../static/assets/tuijian.png'
import iconGuanyu from '../../static/assets/关于.png'
import iconYonghujianyi from '../../static/assets/用户建议.png'
import iconShezhi from '../../static/assets/设置.png'
import iconJingcai from '../../static/assets/竞猜.png'
import iconYuyanpeixun from '../../static/assets/语言培训.png'
import { 
  getUserProfile, 
  updateUserProfile, 
  getAchievements, 
  getBadges 
} from '../../api/user.js'
import { synthesizeTts } from '../../api/tts.js'
import { convertToShanxiDialect } from '../../api/shanxiDialectMap.js'


// 全局方言音频上下文，避免重复创建
let dialectAudioCtx = null

export default {
  name: 'MineIndex',
  data() {
    return {
      IMG,
      isLoggedIn: false,

      userInfo: {},
      defaultAvatar: IMG.retouch_2025112414394823,
      
      // 图标资源
      iconZonghepingjia,
      iconDaka,
      iconZuji,
      iconWode,
      iconTuijian,
      iconGuanyu,
      iconYonghujianyi,
      iconShezhi,
      iconJingcai,
      iconYuyanpeixun,

      // 底部导航图标
      bottomIcons: [
        { id: 'qingdan', label: '陕游记', img: IMG.retouch_2025112414391093 },
        { id: 'fengwei', label: '陕味集', img: IMG.retouch_2025112414392946 },
        { id: 'feiyi', label: '陕非遗', img: IMG.retouch_2025112414400271 },
        { id: 'profile', label: '个人中心', img: IMG.retouch_2025112414394823 }
      ],
      activeNavId: 'profile',
      
      // 用户统计数据


      checkInCount: 0,
      checklistCount: 0,
      continuousDays: 0,
      visitedCount: 0,
      citiesCount: 0,
      scenicCount: 0,
      heritageCount: 0,
      heritageCollect: 0,
      recommendCount: 0,
      commentCount: 0,
      userLevel: 'Lv.1 初来乍到',
      latestChecklist: '我的美食清单',
      
      // 成就标签
      achievementTags: [],
      
      // 勋章系统
      medals: [],
      showMedalsExpanded: false,
      
      // 默认显示的勋章数量
      defaultMedalsDisplayCount: 4,
      
      // 后端返回的勋章数据（临时存储）
      backendMedals: [],
      
      // 后端返回的成就数据（临时存储）
      backendAchievements: [],
      
      // 猜粗细 · 面条截面数据
      showGuessModal: false,
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

      // 面语 · 方言卡弹窗数据
      showMianyuDialog: false,
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
      
      // 方言收集器数据
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
      
      // 方言语音合成功能状态
      dialectTtsLoadingId: null,
      dialectPlayingId: null,
      customPlainText: '',
      customDialectText: '',
      customTtsLoading: false,
      
      // 弹窗控制
      showDialectDialog: false,
      showMedalDialog: false,
      selectedMedal: null
    }
  },
  computed: {
    // 已获得的勋章（展示在前面）
    unlockedMedals() {
      return this.medals.filter(m => m.unlocked).sort((a, b) => {
        // 按解锁时间排序，最新的在前
        const timeA = a.unlockTime || ''
        const timeB = b.unlockTime || ''
        return timeB.localeCompare(timeA)
      })
    },
    // 未获得的勋章
    lockedMedals() {
      return this.medals.filter(m => !m.unlocked)
    },
    // 所有勋章（已获得的在前）
    allMedals() {
      const unlocked = this.unlockedMedals
      const locked = this.lockedMedals
      return [...unlocked, ...locked]
    },
    // 默认显示的勋章（固定显示4个位置，已获得的显示彩色，不足4个用灰色占位）
    displayedMedals() {
      if (this.showMedalsExpanded) {
        return this.allMedals
      }
      // 获取已获得的勋章（最多4个）
      const unlocked = this.unlockedMedals.slice(0, 4)
      // 如果已获得的少于4个，用灰色占位符填充
      const result = [...unlocked]
      while (result.length < 4) {
        result.push({
          id: `placeholder-${result.length}`,
          name: '未获得',
          icon: '🔒',
          unlocked: false,
          description: '继续努力解锁更多勋章'
        })
      }
      return result
    },
    // 已获得的成就标签
    unlockedAchievementTags() {
      return this.achievementTags.filter(tag => tag.unlocked)
    }
  },
  onLoad(query) {
    this.checkLoginStatus()
    this.loadUserData()

    if (query && (query.tool === 'dialect' || query.tool === 'dialectCollector')) {
      this.openDialectTool()
    } else if (query && (query.tool === 'foodmap' || query.tool === 'foodMap')) {
      this.openFoodMap()
    }
  },
  async onShow() {
    this.checkLoginStatus()
    // 先从缓存读取最新的足迹统计数据，确保与 food-footprints.vue 同步
    this.refreshFootprintsStatsFromCache()
    // loadUserData 中已经同步加载足迹统计数据，确保数据一致
    // 等待数据加载完成，确保显示的数据与统计页面一致
    await this.loadUserData()
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
    checkLoginStatus() {
      try {
        // 检查是否有 token（更可靠的登录状态判断）
        const token = uni.getStorageSync('token')
        const isLoggedIn = uni.getStorageSync('isLoggedIn') || false
        this.isLoggedIn = !!(token && isLoggedIn)
        
        if (this.isLoggedIn) {
          // 尝试从本地存储读取用户信息（作为初始值）
          try {
            const profile = uni.getStorageSync('profile')
            if (profile) {
              this.userInfo = profile
            }
          } catch (_) {}
        } else {
          // 未登录时清空用户信息
          this.userInfo = {}
          // 清空统计数据
          this.checkInCount = 0
          this.checklistCount = 0
          this.continuousDays = 0
          this.visitedCount = 0
          this.citiesCount = 0
          this.scenicCount = 0
          this.heritageCount = 0
          this.heritageCollect = 0
          this.achievementTags = []
          this.medals = []
        }
      } catch (e) {
        console.error('检查登录状态失败:', e)
        this.isLoggedIn = false
        this.userInfo = {}
      }
    },

    handleHeaderClick() {
      if (!this.isLoggedIn) {
        uni.navigateTo({
          url: '/pages/login/index'
        })
      }
    },
    
    async loadUserData() {
      // 如果未登录，不加载数据
      if (!this.isLoggedIn) {
        // 重置为默认值
        this.checkInCount = 0
        this.checklistCount = 0
        this.continuousDays = 0
        this.visitedCount = 0
        this.citiesCount = 0
        this.scenicCount = 0
        this.heritageCount = 0
        this.heritageCollect = 0
        this.achievementTags = []
        this.medals = []
        return
      }

      try {
        // 1. 获取用户信息
        try {
          const profileResp = await getUserProfile()
          if (profileResp && profileResp.success && profileResp.data) {
            const profile = profileResp.data
            // 更新用户信息
            this.userInfo = {
              nickName: profile.nickname || profile.nickName || '',
              avatarUrl: profile.avatarUrl || '',
              intro: '探索陕西美食文化',
              ...profile
            }
            // 保存到本地存储
            try {
              uni.setStorageSync('profile', this.userInfo)
            } catch (_) {}
          }
        } catch (err) {
          console.error('[mine/index] ❌ 获取用户信息失败:', err)
          console.error('[mine/index]   接口: GET /api/user/me')
          console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
          console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
          if (err.responseData) {
            console.error('[mine/index]   响应数据:', err.responseData)
          }
          // 如果接口失败，尝试从本地存储读取
          try {
            const profile = uni.getStorageSync('profile')
            if (profile) {
              this.userInfo = profile
            }
          } catch (_) {}
        }

        // 2. 获取用户成就（保存到临时变量，后续在 updateAchievements 中合并）
        try {
          const achievementsResp = await getAchievements()
          if (achievementsResp && achievementsResp.success && achievementsResp.data) {
            const achievements = achievementsResp.data
            // 保存后端成就数据，供 updateAchievements 使用
            this.backendAchievements = achievements.map((item, index) => ({
              id: index + 1,
              name: item.name,
              unlocked: item.achieved || false,
              code: item.code,
              description: item.description
            }))
            
            // 从成就数据推断打卡数（根据成就达成状态）
            // 后端成就：FIRST_CHECKIN(1次), FIVE_CHECKINS(5次), TEN_CHECKINS(10次)
            const firstCheckin = achievements.find(a => a.code === 'FIRST_CHECKIN')
            const fiveCheckins = achievements.find(a => a.code === 'FIVE_CHECKINS')
            const tenCheckins = achievements.find(a => a.code === 'TEN_CHECKINS')
            
            if (tenCheckins && tenCheckins.achieved) {
              this.checkInCount = Math.max(this.checkInCount, 10)
            } else if (fiveCheckins && fiveCheckins.achieved) {
              this.checkInCount = Math.max(this.checkInCount, 5)
            } else if (firstCheckin && firstCheckin.achieved) {
              this.checkInCount = Math.max(this.checkInCount, 1)
            }
            
            // 立即更新成就标签（优先显示，不等待其他数据加载完成）
            this.updateAchievements()
          } else {
            this.backendAchievements = []
            // 即使没有后端数据，也先更新一次（使用前端计算的成就）
            this.updateAchievements()
          }
        } catch (err) {
          console.error('[mine/index] ❌ 获取用户成就失败:', err)
          console.error('[mine/index]   接口: GET /api/user/achievements')
          console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
          console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
          if (err.responseData) {
            console.error('[mine/index]   响应数据:', err.responseData)
          }
          this.backendAchievements = []
          // 即使接口失败，也先更新一次（使用前端计算的成就）
          this.updateAchievements()
        }

        // 3. 获取用户徽章（保存到临时变量，后续在 updateMedals 中合并）
        try {
          const badgesResp = await getBadges()
          if (badgesResp && badgesResp.success && badgesResp.data) {
            const badges = badgesResp.data
            // 映射后端徽章数据到前端格式
            // 根据徽章 code 匹配对应的图标和名称
            const badgeMap = {
              'BADGE_CHECKIN_START': { name: '初心', icon: '🌟', description: '完成第一次非遗相关打卡' },
              'BADGE_CHECKIN_LOVER': { name: '探索者', icon: '🧭', description: '累计打卡 5 次' },
              'BADGE_CHECKIN_MASTER': { name: '守护者', icon: '🎭', description: '累计打卡 10 次' }
            }
            
            // 保存后端勋章数据，供 updateMedals 使用
            this.backendMedals = badges.map((item, index) => {
              const badgeInfo = badgeMap[item.code] || { 
                name: item.name, 
                icon: '🏆', 
                description: item.description 
              }
              return {
                id: index + 1,
                name: badgeInfo.name,
                icon: badgeInfo.icon,
                unlocked: item.achieved || false,
                description: item.description || badgeInfo.description,
                unlockTime: item.achieved ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
                code: item.code
              }
            })
          } else {
            this.backendMedals = []
          }
        } catch (err) {
          console.error('[mine/index] ❌ 获取用户徽章失败:', err)
          console.error('[mine/index]   接口: GET /api/user/badges')
          console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
          console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
          if (err.responseData) {
            console.error('[mine/index]   响应数据:', err.responseData)
          }
          this.backendMedals = []
        }

        // 4. 获取清单统计数据
        try {
          const { getAllMyChecklists } = require('../../api/checklist.js')
          const checklistsResp = await getAllMyChecklists({ page: 1, size: 1000 })
          let lists = []
          if (Array.isArray(checklistsResp)) {
            lists = checklistsResp
          } else if (checklistsResp && checklistsResp.data) {
            if (Array.isArray(checklistsResp.data)) {
              lists = checklistsResp.data
            } else if (checklistsResp.data.list && Array.isArray(checklistsResp.data.list)) {
              lists = checklistsResp.data.list
            }
          }
          this.checklistCount = lists.length
          if (lists.length > 0) {
            // 按日期排序，获取最新的清单
            const sorted = lists.sort((a, b) => {
              return new Date(b.date || 0) - new Date(a.date || 0)
            })
            this.latestChecklist = sorted[0].name || '我的美食清单'
          }
        } catch (err) {
          console.error('[mine/index] ❌ 获取清单统计失败:', err)
          console.error('[mine/index]   接口: GET /api/checklists/all')
          console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
          console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
          if (err.responseData) {
            console.error('[mine/index]   响应数据:', err.responseData)
          }
        }

        // 5. 获取非遗统计数据
        try {
          const { getMyHeritageRecords } = require('../../api/heritage.js')
          const heritageResp = await getMyHeritageRecords()
          this.heritageCount = heritageResp.experiencedCount || 0
          this.heritageCollect = heritageResp.favoriteCount || 0
        } catch (err) {
          console.error('[mine/index] ❌ 获取非遗统计失败:', err)
          console.error('[mine/index]   接口: GET /api/heritage/records')
          console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
          console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
          if (err.responseData) {
            console.error('[mine/index]   响应数据:', err.responseData)
          }
        }

        // 6. 获取推荐和评论统计数据
        try {
          const { getMyRecommendations, getMyComments } = require('../../api/map.js')
          const [recommendations, comments] = await Promise.all([
            getMyRecommendations({ page: 1, size: 100 }).catch(() => []),
            getMyComments({ page: 1, size: 100 }).catch(() => [])
          ])
          this.recommendCount = Array.isArray(recommendations) ? recommendations.length : 0
          this.commentCount = Array.isArray(comments) ? comments.length : 0
        } catch (err) {
          console.error('[mine/index] ❌ 获取推荐和评论统计失败:', err)
          console.error('[mine/index]   接口: GET /api/map/recommendations 或 GET /api/map/comments')
          console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
          console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
          if (err.responseData) {
            console.error('[mine/index]   响应数据:', err.responseData)
          }
          this.recommendCount = 0
          this.commentCount = 0
        }

        // 7. 获取打卡统计数据
        try {
          const { loadMyCheckins } = require('../../api/checkin.js')
          const checkinsResp = await loadMyCheckins(1, 1000)
          if (Array.isArray(checkinsResp)) {
            this.checkInCount = checkinsResp.length
            // 计算连续打卡天数（简化版：统计不同日期）
            const dates = new Set()
            checkinsResp.forEach(item => {
              const date = item.createdAt || item.createTime || item.timestamp
              if (date) {
                const d = new Date(date)
                const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
                dates.add(dateStr)
              }
            })
            this.continuousDays = dates.size
          }
        } catch (err) {
          console.error('[mine/index] ❌ 获取打卡统计失败:', err)
          console.error('[mine/index]   接口: GET /api/checkin/my')
          console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
          console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
          if (err.responseData) {
            console.error('[mine/index]   响应数据:', err.responseData)
          }
          // 如果接口失败，尝试从本地存储读取
          try {
            const raw = uni.getStorageSync('noodle_posts_all')
            const allPosts = Array.isArray(raw) ? raw : []
            if (this.checkInCount === 0) {
              this.checkInCount = allPosts.length
            }
          } catch (_) {}
        }

        // 7. 同步加载最新的足迹统计数据（确保数据一致，优先于缓存）
        try {
          await this.loadFootprintsStats()
        } catch (err) {
          console.error('[mine/index] ❌ 加载足迹统计数据失败:', err)
          console.error('[mine/index]   接口: GET /api/map/poi-experiences 或 GET /api/heritage/records')
          console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
          console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
          if (err.responseData) {
            console.error('[mine/index]   响应数据:', err.responseData)
          }
          // 如果加载失败，才尝试从本地存储加载缓存数据（作为兜底）
          try {
            const userData = uni.getStorageSync('userData')
            if (userData) {
              this.visitedCount = userData.visitedCount || 0
              this.citiesCount = userData.citiesCount || 0
              this.scenicCount = userData.scenicCount || 0
            }
          } catch (e) {
            console.warn('从本地存储加载足迹统计数据失败:', e)
          }
        }

        // 9. 根据打卡数计算用户等级
        if (this.checkInCount >= 20) {
          this.userLevel = 'Lv.5 美食大师'
        } else if (this.checkInCount >= 10) {
          this.userLevel = 'Lv.4 美食达人'
        } else if (this.checkInCount >= 5) {
          this.userLevel = 'Lv.3 美食探索者'
        } else if (this.checkInCount >= 1) {
          this.userLevel = 'Lv.2 美食新手'
        } else {
          this.userLevel = 'Lv.1 初来乍到'
        }

        // 10. 更新勋章（成就标签已在步骤2中优先更新）
        this.updateMedals()

      } catch (e) {
        console.error('[mine/index] ❌ 加载用户数据失败:', e)
        console.error('[mine/index]   错误消息:', e.message || e.errMsg || '未知错误')
        if (e.statusCode) {
          console.error('[mine/index]   状态码:', e.statusCode)
        }
        if (e.responseData) {
          console.error('[mine/index]   响应数据:', e.responseData)
        }
      }
    },

    // 加载足迹统计数据（城市和美食店数量）
    // 使用与 food-footprints.vue 完全相同的数据加载和统计逻辑
    async loadFootprintsStats() {
      try {
        const { getPoiExperiences } = require('../../api/map.js')
        const { getMyHeritageRecords } = require('../../api/heritage.js')

        // 城市配置（与 food-footprints.vue 保持一致）
        const CITY_CONFIG = [
          { id: 'xian', name: '西安' },
          { id: 'baoji', name: '宝鸡' },
          { id: 'xianyang', name: '咸阳' },
          { id: 'weinan', name: '渭南' },
          { id: 'yanan', name: '延安' },
          { id: 'yulin', name: '榆林' },
          { id: 'hanzhong', name: '汉中' },
          { id: 'ankang', name: '安康' },
          { id: 'shangluo', name: '商洛' },
          { id: 'tongchuan', name: '铜川' }
        ]

        // 提取城市名称的辅助函数（与 food-footprints.vue 保持一致）
        const extractCityNameFromPoi = (item) => {
          const explicitCity = (item.city || '').trim()
          if (explicitCity) {
            const cityName = explicitCity.replace(/市$/, '')
            return CITY_CONFIG.find(c => c.name === cityName) ? cityName : ''
          }

          const addressText = (item.address || item.fullAddress || item.full_address || '').trim()
          if (!addressText) {
            return ''
          }

          const knownCity = CITY_CONFIG.find(c => addressText.indexOf(c.name) !== -1)
          if (knownCity) {
            return knownCity.name
          }

          const cityIndex = addressText.indexOf('市')
          if (cityIndex > 0 && cityIndex <= 4) {
            const cityName = addressText.slice(0, cityIndex)
            return CITY_CONFIG.find(c => c.name === cityName) ? cityName : ''
          }

          return ''
        }

        const extractCityNameFromHeritage = (item) => {
          const explicitCity = (item.city || item.cityName || '').trim()
          if (explicitCity) {
            const cityName = explicitCity.replace(/市$/, '')
            return CITY_CONFIG.find(c => c.name === cityName) ? cityName : ''
          }

          const regionText = (item.region || item.area || item.address || '').trim()
          if (!regionText) {
            return ''
          }

          const knownCity = CITY_CONFIG.find(c => regionText.indexOf(c.name) !== -1)
          if (knownCity) {
            return knownCity.name
          }

          const cityIndex = regionText.indexOf('市')
          if (cityIndex > 0 && cityIndex <= 4) {
            const cityName = regionText.slice(0, cityIndex)
            return CITY_CONFIG.find(c => c.name === cityName) ? cityName : ''
          }

          return ''
        }

        // 并行加载所有数据（与 food-footprints.vue 保持一致）
        const [foodExperiences, scenicExperiences, heritageExperiences, heritageRecords] = await Promise.all([
          getPoiExperiences({ type: 1 }).catch((err) => {
            console.error('[mine/index] ❌ 获取美食体验数据失败:', err)
            console.error('[mine/index]   接口: GET /api/map/poi-experiences?type=1')
            console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
            console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
            if (err.responseData) {
              console.error('[mine/index]   响应数据:', err.responseData)
            }
            return []
          }),
          getPoiExperiences({ type: 2 }).catch((err) => {
            console.error('[mine/index] ❌ 获取景点体验数据失败:', err)
            console.error('[mine/index]   接口: GET /api/map/poi-experiences?type=2')
            console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
            console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
            if (err.responseData) {
              console.error('[mine/index]   响应数据:', err.responseData)
            }
            return []
          }),
          getPoiExperiences({ type: 3 }).catch((err) => {
            console.error('[mine/index] ❌ 获取非遗体验数据失败:', err)
            console.error('[mine/index]   接口: GET /api/map/poi-experiences?type=3')
            console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
            console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
            if (err.responseData) {
              console.error('[mine/index]   响应数据:', err.responseData)
            }
            return []
          }),
          getMyHeritageRecords().catch((err) => {
            console.error('[mine/index] ❌ 获取非遗记录失败:', err)
            console.error('[mine/index]   接口: GET /api/heritage/records')
            console.error('[mine/index]   状态码:', err.statusCode || 'N/A')
            console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误')
            if (err.responseData) {
              console.error('[mine/index]   响应数据:', err.responseData)
            }
            return { experiencedList: [], favoriteList: [] }
          })
        ])

        // 构建 visitedList（与 food-footprints.vue 的逻辑一致）
        const visitedList = []

        // 处理 POI 体验数据
        const processExperiences = (experiences, poiType) => {
          return (experiences || []).map((item, index) => {
            const safeItem = item || {}
            const poi = safeItem.poi || safeItem
            
            const poiId = poi.id || safeItem.poiId || safeItem.id
            let name = poi.name || safeItem.name || ''
            if (!name) {
              if (poiType === 'food') {
                name = '美食门店'
              } else if (poiType === 'scenic') {
                name = '景点'
              } else {
                name = '非遗体验中心'
              }
            }
            const cityName = extractCityNameFromPoi(poi) || extractCityNameFromPoi(safeItem)
            const displayCity = cityName || ''

            return {
              uid: 'poi-' + poiType + '-' + (poiId || index),
              type: poiType,
              typeLabel: poiType === 'food' ? '美食打卡' : poiType === 'scenic' ? '景点游玩' : '非遗体验',
              title: name,
              city: displayCity,
              poiId: poiId,
              poiType: poiType
            }
          })
        }

        // 处理三种类型的体验数据
        visitedList.push(
          ...processExperiences(foodExperiences, 'food'),
          ...processExperiences(scenicExperiences, 'scenic'),
          ...processExperiences(heritageExperiences, 'heritage')
        )

        // 处理非遗体验数据
        const heritageExperiencedList = heritageRecords.experiencedList || []
        heritageExperiencedList.forEach((item, index) => {
          const safeItem = item || {}
          const cityName = extractCityNameFromHeritage(safeItem)
          const displayCity = cityName || ''

          const title = safeItem.name || safeItem.heritageName || safeItem.title || '非遗项目'

          visitedList.push({
            uid: `heritage-${safeItem.id || safeItem.heritageId || index}`,
            id: safeItem.id || safeItem.heritageId || null,
            type: 'heritage',
            typeLabel: '非遗体验',
            title,
            city: displayCity
          })
        })

        // 如果后端没有数据，尝试从本地存储加载（与 food-footprints.vue 保持一致）
        if (visitedList.length === 0) {
          try {
            const experiencedKey = 'poi_footprints_experienced'
            const experiencedList = uni.getStorageSync(experiencedKey) || []
            
            if (Array.isArray(experiencedList) && experiencedList.length > 0) {
              experiencedList.forEach((item, index) => {
                const safeItem = item || {}
                const poiType = safeItem.type || safeItem.poiType || 'food'
                const cityName = extractCityNameFromPoi(safeItem)
                const displayCity = cityName || ''

                let typeLabel = '美食打卡'
                let type = 'food'
                if (poiType === 'scenic' || poiType === 2) {
                  typeLabel = '景点游玩'
                  type = 'scenic'
                } else if (poiType === 'heritage' || poiType === 3) {
                  typeLabel = '非遗体验'
                  type = 'heritage'
                }

                const title = safeItem.name || '地点'

                visitedList.push({
                  uid: `poi-${poiType}-${safeItem.id || index}`,
                  type,
                  typeLabel,
                  title,
                  city: displayCity,
                  poiId: safeItem.id,
                  poiType
                })
              })
            }
          } catch (e) {
            console.warn('从本地存储加载足迹数据失败:', e)
          }
        }

        // 去重（与 food-footprints.vue 的 mergeVisitedList 逻辑一致）
        const seenKeys = new Set()
        const deduplicatedList = []
        
        visitedList.forEach(item => {
          if (!item) return
          
          let uniqueKey = ''
          if (item.poiId) {
            uniqueKey = `${item.type}-poi-${item.poiId}`
          } else if (item.id) {
            uniqueKey = `${item.type}-id-${item.id}`
          } else {
            uniqueKey = item.uid || `${item.type}-${item.title || ''}`
          }
          
          if (!seenKeys.has(uniqueKey)) {
            seenKeys.add(uniqueKey)
            deduplicatedList.push(item)
          }
        })

        // 统计城市和美食店数量（与 food-footprints.vue 的 mergeCityStats 逻辑一致）
        const citySet = new Set()
        let foodCount = 0
        let scenicCount = 0
        let heritageCount = 0

        deduplicatedList.forEach(item => {
          if (item.city) {
            citySet.add(item.city)
          }
          
          if (item.type === 'food') {
            foodCount++
          } else if (item.type === 'scenic') {
            scenicCount++
          } else if (item.type === 'heritage') {
            heritageCount++
          }
        })

        // 更新统计数据（立即更新显示）
        // 使用后端返回的数据（后端数据是最权威的）
        this.citiesCount = citySet.size
        this.visitedCount = foodCount
        this.scenicCount = scenicCount

        // 更新本地缓存（与 food-footprints.vue 保持一致）
        try {
          uni.setStorageSync('userData', {
            visitedCount: this.visitedCount,
            citiesCount: this.citiesCount,
            scenicCount: this.scenicCount
          })
          console.log('[mine/index] 足迹统计数据已更新到缓存:', { citiesCount: this.citiesCount, visitedCount: this.visitedCount, scenicCount: this.scenicCount })
        } catch (e) {
          console.warn('保存足迹统计数据失败:', e)
        }
        
        // 更新成就和勋章（因为统计数据已更新）
        this.updateAchievements()
        this.updateMedals()
      } catch (err) {
        console.error('加载足迹统计数据失败:', err)
        // 出错时尝试从本地存储读取
        try {
          const userData = uni.getStorageSync('userData')
          if (userData) {
            this.visitedCount = userData.visitedCount || 0
            this.citiesCount = userData.citiesCount || 0
            this.scenicCount = userData.scenicCount || 0
          }
        } catch (e) {
          console.error('从本地存储读取足迹数据失败:', e)
        }
      }
    },

    // 从本地缓存刷新足迹统计数据（用于页面显示时同步数据）
    refreshFootprintsStatsFromCache() {
      try {
        const userData = uni.getStorageSync('userData')
        if (userData) {
          // 如果缓存中有更新的数据，使用缓存的数据
          if (userData.visitedCount !== undefined) {
            this.visitedCount = userData.visitedCount
          }
          if (userData.citiesCount !== undefined) {
            this.citiesCount = userData.citiesCount
          }
          if (userData.scenicCount !== undefined) {
            this.scenicCount = userData.scenicCount
          }
        }
        // 刷新成就和勋章
        this.updateAchievements()
        this.updateMedals()
      } catch (e) {
        console.warn('从缓存刷新足迹统计数据失败:', e)
      }
    },

    // 更新成就标签
    updateAchievements() {
      const achievements = []
      
      // 打卡相关成就
      if (this.checkInCount >= 1) {
        achievements.push({ id: 1, name: '打卡先锋', unlocked: true })
      }
      if (this.checkInCount >= 5) {
        achievements.push({ id: 2, name: '打卡达人', unlocked: true })
      }
      if (this.checkInCount >= 10) {
        achievements.push({ id: 3, name: '打卡大师', unlocked: true })
      }
      if (this.checkInCount >= 20) {
        achievements.push({ id: 4, name: '打卡王者', unlocked: true })
      }
      
      // 城市相关成就
      if (this.citiesCount >= 3) {
        achievements.push({ id: 5, name: '城市探索者', unlocked: true })
      }
      if (this.citiesCount >= 5) {
        achievements.push({ id: 6, name: '城市达人', unlocked: true })
      }
      if (this.citiesCount >= 8) {
        achievements.push({ id: 7, name: '城市大师', unlocked: true })
      }
      if (this.citiesCount >= 10) {
        achievements.push({ id: 8, name: '三秦通', unlocked: true })
      }
      
      // 清单相关成就
      if (this.checklistCount >= 5) {
        achievements.push({ id: 9, name: '清单达人', unlocked: true })
      }
      if (this.checklistCount >= 10) {
        achievements.push({ id: 10, name: '清单大师', unlocked: true })
      }
      if (this.checklistCount >= 20) {
        achievements.push({ id: 11, name: '清单王者', unlocked: true })
      }
      
      // 美食店相关成就
      if (this.visitedCount >= 10) {
        achievements.push({ id: 12, name: '美食探索者', unlocked: true })
      }
      if (this.visitedCount >= 20) {
        achievements.push({ id: 13, name: '美食达人', unlocked: true })
      }
      if (this.visitedCount >= 50) {
        achievements.push({ id: 14, name: '美食家', unlocked: true })
      }
      
      // 非遗相关成就
      if (this.heritageCount >= 5) {
        achievements.push({ id: 15, name: '非遗体验者', unlocked: true })
      }
      if (this.heritageCount >= 10) {
        achievements.push({ id: 16, name: '非遗传承人', unlocked: true })
      }
      if (this.heritageCount >= 20) {
        achievements.push({ id: 17, name: '非遗大师', unlocked: true })
      }
      
      // 连续打卡成就
      if (this.continuousDays >= 7) {
        achievements.push({ id: 18, name: '坚持一周', unlocked: true })
      }
      if (this.continuousDays >= 30) {
        achievements.push({ id: 19, name: '坚持一月', unlocked: true })
      }
      
      // 评论推荐成就
      if (this.commentCount >= 10) {
        achievements.push({ id: 20, name: '评论达人', unlocked: true })
      }
      if (this.recommendCount >= 10) {
        achievements.push({ id: 21, name: '推荐达人', unlocked: true })
      }
      
      // 合并后端返回的成就数据（如果有的话）
      if (Array.isArray(this.backendAchievements) && this.backendAchievements.length > 0) {
        const backendAchievementMap = {}
        this.backendAchievements.forEach(a => {
          if (a.code) {
            backendAchievementMap[a.code] = a
          }
        })
        
        // 如果后端有相同 code 的成就，使用后端的数据；否则添加前端计算的成就
        this.backendAchievements.forEach(backendAch => {
          if (!achievements.find(a => a.code === backendAch.code)) {
            achievements.push(backendAch)
          }
        })
      }
      
      this.achievementTags = achievements
    },

    // 更新勋章系统
    updateMedals() {
      const medals = []
      
      // 打卡相关勋章
      medals.push({
        id: 1,
        name: '初心',
        icon: '🌟',
        unlocked: this.checkInCount >= 1,
        description: '完成首次打卡',
        unlockTime: this.checkInCount >= 1 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.checkInCount,
        target: 1
      })
      
      medals.push({
        id: 2,
        name: '探索者',
        icon: '🧭',
        unlocked: this.checkInCount >= 5,
        description: '累计打卡 5 次',
        unlockTime: this.checkInCount >= 5 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.checkInCount,
        target: 5
      })
      
      medals.push({
        id: 3,
        name: '守护者',
        icon: '🎭',
        unlocked: this.checkInCount >= 10,
        description: '累计打卡 10 次',
        unlockTime: this.checkInCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.checkInCount,
        target: 10
      })
      
      medals.push({
        id: 4,
        name: '美食家',
        icon: '🍜',
        unlocked: this.visitedCount >= 20,
        description: '品尝20家陕西美食',
        unlockTime: this.visitedCount >= 20 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.visitedCount,
        target: 20
      })
      
      medals.push({
        id: 5,
        name: '城市漫游者',
        icon: '🗺️',
        unlocked: this.citiesCount >= 5,
        description: '打卡5座城市',
        unlockTime: this.citiesCount >= 5 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.citiesCount,
        target: 5
      })
      
      medals.push({
        id: 6,
        name: '三秦通',
        icon: '🏛️',
        unlocked: this.citiesCount >= 10,
        description: '打卡10座城市',
        unlockTime: this.citiesCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.citiesCount,
        target: 10
      })
      
      medals.push({
        id: 7,
        name: '清单达人',
        icon: '📋',
        unlocked: this.checklistCount >= 10,
        description: '创建10个清单',
        unlockTime: this.checklistCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.checklistCount,
        target: 10
      })
      
      medals.push({
        id: 8,
        name: '非遗传承人',
        icon: '🎭',
        unlocked: this.heritageCount >= 10,
        description: '体验10个非遗项目',
        unlockTime: this.heritageCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.heritageCount,
        target: 10
      })
      
      medals.push({
        id: 9,
        name: '坚持者',
        icon: '🔥',
        unlocked: this.continuousDays >= 7,
        description: '连续打卡7天',
        unlockTime: this.continuousDays >= 7 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.continuousDays,
        target: 7
      })
      
      medals.push({
        id: 10,
        name: '评论家',
        icon: '💬',
        unlocked: this.commentCount >= 10,
        description: '发表10条评论',
        unlockTime: this.commentCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.commentCount,
        target: 10
      })
      
      medals.push({
        id: 11,
        name: '推荐官',
        icon: '⭐',
        unlocked: this.recommendCount >= 10,
        description: '推荐10道美食',
        unlockTime: this.recommendCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.recommendCount,
        target: 10
      })
      
      medals.push({
        id: 12,
        name: '收藏家',
        icon: '❤️',
        unlocked: this.heritageCollect >= 10,
        description: '收藏10个非遗项目',
        unlockTime: this.heritageCollect >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.heritageCollect,
        target: 10
      })
      
      // 合并后端返回的勋章数据（如果有的话）
      // 如果后端有相同 code 的勋章，使用后端的数据（优先级更高）
      const backendMedalMap = {}
      if (Array.isArray(this.backendMedals) && this.backendMedals.length > 0) {
        this.backendMedals.forEach(m => {
          if (m.code) {
            backendMedalMap[m.code] = m
          }
        })
      }
      
      // 合并数据：如果后端有相同 code，使用后端数据；否则使用前端计算的数据
      const mergedMedals = medals.map(m => {
        // 查找是否有对应的后端勋章（通过 code 或其他标识）
        const backendMedal = backendMedalMap[m.code] || 
          (m.id && this.backendMedals.find(bm => bm.id === m.id))
        
        if (backendMedal) {
          // 使用后端数据，但保留前端的进度信息（如果后端没有）
          return {
            ...backendMedal,
            progress: backendMedal.progress !== undefined ? backendMedal.progress : m.progress,
            target: backendMedal.target !== undefined ? backendMedal.target : m.target
          }
        }
        return m
      })
      
      this.medals = mergedMedals
    },

    // 展开/收起勋章列表
    toggleMedalsExpanded() {
      this.showMedalsExpanded = !this.showMedalsExpanded
    },
    
    // 猜粗细弹窗：打开/关闭
    toggleGuessModal() {
      this.showGuessModal = !this.showGuessModal
    },

    // 猜粗细：揭晓答案
    revealShot(id) {
      const shot = this.faceShots.find((item) => item.id === id)
      if (shot) {
        shot.revealed = true
      }
    },

    // 面语弹窗：打开 / 关闭
    openMianyuDialog() {
      this.showMianyuDialog = true
    },
    closeMianyuDialog() {
      this.showMianyuDialog = false
    },

    // 打开方言收集器
    openDialectTool() {
      this.showDialectDialog = true
    },
    
    closeDialectDialog() {
      this.showDialectDialog = false
    },
    
    // 播放方言发音（点击小喇叭调用后端合成并播放）
    playDialect(dialect) {
      // 方言卡片：优先用「方言词 + 用法句」来合成语音，没有用法就只读词
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

    // 自定义输入普通话，生成方言音频和文字
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

      // 先在前端把普通话转换成陕西方言文本
      const dialectText = convertToShanxiDialect(text)
      // 用于 TTS 的文本：优先用方言文本，兜底用原始普通话保证能合成
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

          // 展示的方言文字：优先后端返回的 dialectText，其次用前端转换结果
          this.customDialectText = parsed.dialectText || dialectText || ''
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

    // 规范化后端返回的 TTS 结果，兼容不同结构
    normalizeTtsResponse(raw) {
      if (!raw) {
        return { base64Audio: '', dialectText: '' }
      }

      let data = null
      let success = false

      // 优先使用 success 字段（例如：{ success: true, data: 'base64' }）
      if (typeof raw.success !== 'undefined') {
        success = !!raw.success
        data = raw.data
      } else if (typeof raw.code !== 'undefined') {
        // 兼容 { code: 0, data: 'base64' } 或 code 为空但 success 已在别处表示
        success = raw.code === 0 || raw.code === '0' || raw.code === null
        data = raw.data
      } else {
        // 兜底：直接从常见字段或原值里取
        data = raw.data || raw.audio || raw.base64 || raw
        success = !!data
      }

      if (!success || !data) {
        return { base64Audio: '', dialectText: '' }
      }

      // data 直接就是 base64 字符串的情况
      if (typeof data === 'string') {
        return { base64Audio: data, dialectText: '' }
      }

      const base64Audio = data.audio || data.audioBase64 || data.base64 || data.data || ''
      const dialectText = data.dialectText || data.text || ''
      return { base64Audio, dialectText }
    },

    // 播放 Base64 MP3 音频，兼容微信小程序和 H5
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
    
    // 打开陕味趣游地图：跳转到陕味足迹页面（内含地图展示）
    openFoodMap() {
      this.goFoodFootprints()
    },


    // 个人中心工具：猜粗细，在当前页弹出弹窗
    goGuessFeature() {
      this.showGuessModal = true
    },

    // 个人中心工具：面语，在当前页弹出“面语 · 方言卡”弹窗
    goDialectFeature() {
      this.openMianyuDialog()
    },
    
    // 显示勋章详情
    showMedalDetail(medal) {
      this.selectedMedal = medal
      this.showMedalDialog = true
    },
    
    closeMedalDialog() {
      this.showMedalDialog = false
      this.selectedMedal = null
    },
    
    // 跳转到清单大全页面（显示所有清单）
    goAllChecklists() {
      uni.navigateTo({
        url: '/pages/mine/checklists'
      })
    },
    
    // 跳转到打卡记录（展示所有打卡）
    goCheckInRecords() {
      uni.navigateTo({
        url: '/pages/mine/checkin-records'
      })
    },
    
    // 跳转到陕味足迹（城市+店铺统计）
    goFoodFootprints() {
      uni.navigateTo({
        url: '/pages/mine/food-footprints'
      })
    },

    
    // 跳转到非遗体验记录
    goHeritageRecords() {
      uni.navigateTo({
        url: '/pages/mine/heritage-records'
      })
    },
    
    // 跳转到推荐与评论记录
    goRecommendComments() {
      uni.navigateTo({
        url: '/pages/mine/recommend-comments'
      })
    },
    
    // 跳转到关于我们
    goAboutUs() {
      uni.navigateTo({
        url: '/pages/mine/about'
      })
    },
    
    // 跳转到用户建议
    goFeedback() {
      uni.navigateTo({
        url: '/pages/mine/feedback'
      })
    },
    
    // 跳转到设置中心
    goSettings() {
      uni.navigateTo({
        url: '/pages/mine/settings'
      })
    },


    // 更新用户信息
    async updateUserInfo(updateData) {
      if (!this.isLoggedIn) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        return false
      }

      try {
        const resp = await updateUserProfile(updateData)
        if (resp && resp.success && resp.data) {
          // 更新本地用户信息
          const profile = resp.data
          this.userInfo = {
            ...this.userInfo,
            nickName: profile.nickname || profile.nickName || this.userInfo.nickName,
            avatarUrl: profile.avatarUrl || this.userInfo.avatarUrl,
            ...profile
          }
          // 保存到本地存储
          try {
            uni.setStorageSync('profile', this.userInfo)
          } catch (_) {}
          return true
        }
        return false
      } catch (err) {
        console.error('更新用户信息失败:', err)
        uni.showToast({ 
          title: err.message || '更新失败，请稍后重试', 
          icon: 'none' 
        })
        return false
      }
    },

    logout() {
      uni.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            // 清除本地存储的登录状态和用户信息
            uni.removeStorageSync('isLoggedIn')
            uni.removeStorageSync('token')
            uni.removeStorageSync('profile')

            // 重置页面数据，触发UI更新
            this.checkLoginStatus()
            
            uni.showToast({
              title: '已退出登录',
              icon: 'success'
            })
          }
        }
      })
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
  }
}
</script>

<style lang="scss" scoped>
.mine-page {
  min-height: 100vh;
  padding: 20rpx 28rpx 20rpx;
  padding-bottom: calc(280rpx + env(safe-area-inset-bottom));
  background: linear-gradient(180deg, #fffaf1 0%, #fff5dc 100%);
  color: #5a2c12;
  font-family: 'LXGW WenKai Screen', 'PingFang SC', system-ui;
}

/* 顶部用户信息卡片 */
.user-header {
  background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
  border-radius: 24rpx;
  padding: 32rpx;
  display: flex;
  gap: 24rpx;
  box-shadow: 0 8rpx 24rpx rgba(255, 152, 0, 0.3);
  margin-bottom: 20rpx;
  border: 4rpx solid #f57c00;
  position: relative;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
}

.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  border: 5rpx solid #ffe082;
  box-shadow: 0 4rpx 12rpx rgba(255, 224, 130, 0.5);
}

.user-intro {
  font-size: 22rpx;
  color: #fff9e6;
  text-align: center;
  max-width: 120rpx;
  line-height: 1.4;
  text-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.1);
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8rpx;
  min-width: 0; /* 允许flex子元素收缩，确保scroll-view可以正常工作 */
}

.username {
  font-size: 36rpx;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
}

.user-level {
  font-size: 24rpx;
  color: #fff9e6;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  padding: 4rpx 12rpx;
  border-radius: 999px;
  display: inline-block;
  margin-top: 4rpx;
}

.user-stats {
  font-size: 22rpx;
  color: #fff9e6;
  margin-top: 8rpx;
  opacity: 0.95;
}

/* 更多勋章按钮（右下角） */
.more-medals-btn {
  position: absolute;
  bottom: 16rpx;
  right: 16rpx;
  width: 56rpx;
  height: 56rpx;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2rpx solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4rpx);
}

.more-icon {
  font-size: 32rpx;
  color: #ffffff;
  line-height: 1;
  font-weight: 300;
}

/* 成就标签（在用户信息卡片内，可横向滚动） */
.achievement-tags-scroll-inline {
  margin-top: 12rpx;
  width: 100%;
  white-space: nowrap;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.achievement-tags {
  display: inline-flex;
  gap: 10rpx;
  padding-right: 20rpx;
  align-items: center;
}

.tag-badge {
  background: linear-gradient(135deg, #ff7043 0%, #ff5722 100%);
  color: #ffffff;
  padding: 6rpx 16rpx;
  border-radius: 999rpx;
  font-size: 22rpx;
  font-weight: 600;
  box-shadow: 0 3rpx 7rpx rgba(255, 87, 34, 0.3);
  border: 2rpx solid #f4511e;
}

.tag-badge.locked {
  background: linear-gradient(135deg, #bcaaa4 0%, #a1887f 100%);
  opacity: 0.6;
  border-color: #8d6e63;
}

.tag-text {
  color: #ffffff;
  text-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.2);
}

/* 勋章和工具模块 */
.medals-tools-section {
  display: flex;
  gap: 20rpx;
  margin-bottom: 20rpx;
}

/* 左侧勋章网格 */
.medals-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16rpx;
  flex: 1;
}

.medal-item {
  background: linear-gradient(135deg, #d4a574 0%, #c89666 100%);
  border-radius: 16rpx;
  padding: 24rpx 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
  box-shadow: 0 4rpx 12rpx rgba(200, 150, 102, 0.3);
  border: 3rpx solid #b8885a;
  position: relative;
  overflow: hidden;
}

.medal-item.locked {
  background: linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%);
  border-color: #9e9e9e;
  opacity: 0.7;
  filter: grayscale(1);
}

.medal-item--more {
  background: linear-gradient(135deg, #ffd54f 0%, #ffca28 100%);
  border-color: #f9a825;
  opacity: 1;
  filter: none;
}

.medal-item::before {
  content: '';
  position: absolute;
  top: -20rpx;
  left: -20rpx;
  right: -20rpx;
  bottom: -20rpx;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.medal-icon {
  font-size: 48rpx;
  line-height: 1;
}

.medal-name {
  font-size: 24rpx;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.2);
}

/* 右侧工具面板（暖黄色统一模块） */
.tools-panel {
  width: 240rpx;
  background: linear-gradient(135deg, #ffd54f 0%, #ffca28 100%);
  border-radius: 16rpx;
  padding: 20rpx;
  box-shadow: 0 4rpx 12rpx rgba(255, 202, 40, 0.35);
  border: 3rpx solid #f9a825;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}

.tools-label {
  font-size: 24rpx;
  color: #5a2c12;
  font-weight: 700;
  text-align: center;
  padding-bottom: 12rpx;
  border-bottom: 2rpx solid rgba(90, 44, 18, 0.2);
}

.tool-item {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12rpx;
  padding: 16rpx;
  display: flex;
  align-items: center;
  gap: 12rpx;
  border: 2rpx solid rgba(249, 168, 37, 0.5);
  box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.1);
}

.tool-emoji {
  font-size: 32rpx;
  line-height: 1;
}

.tool-icon-img {
  width: 32rpx;
  height: 32rpx;
  flex-shrink: 0;
}

.tool-name {
  flex: 1;
  font-size: 26rpx;
  color: #5a2c12;
  font-weight: 600;
}

/* 我的内容模块 */
.my-content-section {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  margin-bottom: 40rpx;
}

.content-card {
  background: #fff5e6;
  border-radius: 20rpx;
  padding: 24rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  border: 3rpx solid #e8d4b8;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12rpx;
}

.card-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
}

.card-title-with-icon {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.card-icon {
  width: 36rpx;
  height: 36rpx;
  flex-shrink: 0;
}

.card-arrow {
  font-size: 32rpx;
  color: #cfa86a;
}

.card-preview {
  padding: 12rpx 16rpx;
  background: #ffffff;
  border-radius: 12rpx;
  border: 2rpx solid #f0e6d8;
}

.preview-text {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
}

/* 设置与信息模块 */
.settings-section {
  background: #fff5e6;
  border-radius: 20rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  border: 3rpx solid #e8d4b8;
  margin-top: 32rpx;
  margin-bottom: 40rpx;
}

.setting-item {
  display: flex;
  align-items: center;
  padding: 28rpx 24rpx;
  border-bottom: 2rpx solid #f0e6d8;
  gap: 16rpx;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-icon {
  font-size: 36rpx;
  line-height: 1;
}

.setting-icon-img {
  width: 36rpx;
  height: 36rpx;
  flex-shrink: 0;
}

.setting-title {
  flex: 1;
  font-size: 28rpx;
  color: #5a2c12;
  font-weight: 600;
}

.setting-arrow {
  font-size: 32rpx;
  color: #cfa86a;
}

.logout-item {
  justify-content: center;
}

.logout-item .setting-title {
  color: #ff5a5a;
  flex: none; /* 取消 flex: 1 */
}

/* 方言收集器弹窗 */
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

.dialect-dialog {
  width: 680rpx; /* 还原为 680rpx 宽度 */
  max-height: 85vh; /* 比之前 86vh 略微降低一点点高度 */
  background: #fffaf1; /* 与“猜粗细”弹窗相同的淡米色背景 */
  border-radius: 24rpx;
  display: flex;
  flex-direction: column;
  box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.3);
  overflow: hidden;
}




/* 猜粗细弹窗容器，复用与方言弹窗类似的风格 */
.guess-dialog {
  width: 680rpx;
  max-height: 86vh; /* 略微加长一点点 */
  background: #fffaf1;
  border-radius: 24rpx;
  display: flex;
  flex-direction: column;
  box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.3);
  padding-bottom: 24rpx;
}



.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 32rpx 14rpx;
  border-bottom: 3rpx dashed #cfa86a;
}


.dialog-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #5a2c12;
}

.dialog-close {
  font-size: 48rpx;
  line-height: 1;
  color: #5a2c12;
}

.dialect-list {
  flex: 1;
  padding: 10rpx 22rpx 30rpx 0rpx;
  max-height: 600rpx;
}

/* 面语 · 方言卡弹窗主体 */
.mianyu-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 12rpx;
  font-size: 28rpx;
  overflow-y: auto;
  padding: 12rpx 24rpx 16rpx; /* 顶部增加 12rpx 间距，让第一张卡片不紧贴虚线 */
}


.mianyu-card {
  background: #fff5df; /* 和“猜粗细”卡片一致的暖黄色 */
  border-radius: 24rpx;
  box-shadow: 0 12rpx 24rpx rgba(0,0,0,0.08);
  border: 3rpx solid #e8d4b8;
  padding: 16rpx 18rpx;
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}




.mianyu-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #5a2c12;
  margin-bottom: 4rpx;
}

.mianyu-line {
  display: block;
  font-size: 26rpx;
  color: #5a2c12;
  line-height: 1.6;
}

.mianyu-tip {
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #8c5c2a;
}

/* 猜粗细卡片列表样式 */
.shot-list {
  flex: 1;
  padding: 0 32rpx 24rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
  overflow-y: auto;
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
  color: #5a2c12;
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


.dialect-item {
  background: #ffffff;
  border-radius: 16rpx;
  padding: 20rpx;
  margin: 0 auto 10rpx;
  width: 90%;
  border: 3rpx solid #e8d4b8;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.05);
  position: relative;
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
  font-size: 20rpx;
  color: #fff;
  background: #ffcc33;
  padding: 4rpx 12rpx;
  border-radius: 999px;
  margin-bottom: 12rpx;
}

.dialect-example {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.6;
  padding: 12rpx;
  background: #fff5e6;
  border-radius: 8rpx;
}

.example-label {
  font-weight: 600;
  color: #5a2c12;
}

.play-icon {
  position: absolute;
  right: 20rpx;
  top: 20rpx;
  font-size: 32rpx;
}

.dialect-footer {
  padding: 24rpx 32rpx;
  text-align: center;
  border-top: 3rpx dashed #cfa86a;
}

.collected-count {
  font-size: 24rpx;
  color: #8c5c2a;
}

.dialect-custom {
  padding: 18rpx 32rpx 12rpx;
  border-top: 3rpx dashed #cfa86a;
  background: #fff9ec;
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
  color: #ffffff;
  font-size: 24rpx;
  font-weight: 600;
  text-align: center;
  padding: 0 20rpx;
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
  margin-bottom: 4rpx;
}

.result-text {
  font-size: 24rpx;
  color: #8c5c2a;
  line-height: 1.5;
}

/* 勋章详情弹窗 */
.medal-dialog {
  width: 600rpx;
  background: #fff5dc;
  border-radius: 24rpx;
  padding: 48rpx 32rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20rpx;
  box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.3);
}

.medal-detail-icon {
  font-size: 80rpx;
  line-height: 1;
}

.medal-detail-name {
  font-size: 36rpx;
  font-weight: 700;
  color: #5a2c12;
}

.medal-detail-desc {
  font-size: 26rpx;
  color: #8c5c2a;
  text-align: center;
  line-height: 1.6;
  padding: 0 20rpx;
}

.medal-progress {
  width: 100%;
  margin-top: 16rpx;
}

.progress-text {
  font-size: 24rpx;
  color: #5a2c12;
  display: block;
  text-align: center;
  margin-bottom: 12rpx;
}

.progress-bar {
  width: 100%;
  height: 16rpx;
  background: #e8d4b8;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffcc33, #ff9933);
  border-radius: 999px;
  transition: width 0.3s ease;
}

.medal-unlock-time {
  font-size: 24rpx;
  color: #ff6b6b;
  font-weight: 600;
}

.dialog-btn {
  margin-top: 16rpx;
  width: 100%;
  height: 72rpx;
  background: #ffcc33;
  color: #5a2c12;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  font-weight: 600;
}

/* 展开的勋章列表弹窗 */
.medals-expanded-dialog {
  width: 680rpx;
  max-height: 85vh;
  background: #fffaf1;
  border-radius: 24rpx;
  display: flex;
  flex-direction: column;
  box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.medals-expanded-list {
  flex: 1;
  padding: 0 20rpx 24rpx;
  max-height: calc(85vh - 120rpx);
  box-sizing: border-box;
}

.medals-section {
  margin-bottom: 32rpx;
  width: 100%;
  box-sizing: border-box;
}

.medals-section-title {
  display: block;
  font-size: 28rpx;
  font-weight: 700;
  color: #5a2c12;
  margin-bottom: 16rpx;
  padding-bottom: 8rpx;
  border-bottom: 2rpx solid #e8d4b8;
}

.medals-expanded-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12rpx;
  width: 100%;
  box-sizing: border-box;
}

.medal-expanded-item {
  background: linear-gradient(135deg, #fff5e6 0%, #fffef7 100%);
  border-radius: 16rpx;
  padding: 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
  box-shadow: 0 4rpx 12rpx rgba(200, 150, 102, 0.2);
  border: 3rpx solid #e8d4b8;
  transition: all 0.3s ease;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
}

.medal-expanded-item:active {
  transform: scale(0.95);
}

.medal-expanded-item--locked {
  opacity: 0.6;
  filter: grayscale(0.5);
}

.medal-expanded-icon {
  font-size: 56rpx;
  line-height: 1;
}

.medal-expanded-name {
  font-size: 26rpx;
  color: #5a2c12;
  font-weight: 700;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
}

.medal-expanded-desc {
  font-size: 22rpx;
  color: #8c5c2a;
  text-align: center;
  line-height: 1.4;
  width: 100%;
  word-wrap: break-word;
  word-break: break-all;
  box-sizing: border-box;
}

.medal-expanded-time {
  font-size: 20rpx;
  color: #ff6b6b;
  font-weight: 600;
  margin-top: 4rpx;
}

.medal-expanded-progress {
  width: 100%;
  margin-top: 8rpx;
  box-sizing: border-box;
}

.medal-expanded-progress .progress-text {
  font-size: 20rpx;
  color: #5a2c12;
  display: block;
  text-align: center;
  margin-bottom: 8rpx;
  width: 100%;
  word-wrap: break-word;
  box-sizing: border-box;
}

.medal-expanded-progress .progress-bar {
  width: 100%;
  height: 12rpx;
  background: #e8d4b8;
  border-radius: 999rpx;
  overflow: hidden;
}

.medal-expanded-progress .progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffcc33, #ff9933);
  border-radius: 999rpx;
  transition: width 0.3s ease;
}

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

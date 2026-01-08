// 统一管理项目中的图片 URL（COS + 本地混用都可以）
// 如有需要，可以调整 COS_BASE 或单个路径

const COS_BASE = 'https://noodletrail-images-1383591777.cos.ap-beijing.myqcloud.com/images';

export const IMG = {
  // —— 城市/地点相关 ——
  ankang: `${COS_BASE}/ankang.jpg`,
  baoji: `${COS_BASE}/baoji.jpg`,
  bichi: `${COS_BASE}/bichi.png`,
  hanzhong: `${COS_BASE}/hanzhong.jpg`,
  shangluo: `${COS_BASE}/shangluo.jpg`,
  tongchuan: `${COS_BASE}/tongchuan.jpg`,
  weinan: `${COS_BASE}/weinan.jpg`,
  xian: `${COS_BASE}/xian.jpg`,
  xianyang: `${COS_BASE}/xianyang.jpg`,
  yanan: `${COS_BASE}/yanan.jpg`,
  yulin: `${COS_BASE}/yulin.jpg`,

  // —— 通用/海报类图片 ——
  img1764123838326: `${COS_BASE}/1764123838326.png`,
  IMG_20251125_171347: `${COS_BASE}/IMG_20251125_171347.jpg`,
  IMG_20251208_153709: `${COS_BASE}/IMG_20251208_153709.jpg`,
  noodleFrame: `${COS_BASE}/noodle-frame.png`,


  // —— retouch 系列图 ——
  retouch_2025111814274381: `${COS_BASE}/retouch_2025111814274381.png`,
  retouch_2025111915301620: `${COS_BASE}/retouch_2025111915301620.png`,
  retouch_2025112414375907: `${COS_BASE}/retouch_2025112414375907.png`,
  retouch_2025112414391093: `${COS_BASE}/retouch_2025112414391093.png`,
  retouch_2025112414392946: `${COS_BASE}/retouch_2025112414392946.png`,
  retouch_2025112414394823: `${COS_BASE}/retouch_2025112414394823.png`,
  retouch_2025112414400271: `${COS_BASE}/retouch_2025112414400271.png`,


  // —— 本地 static/assets 资源（不走 COS） ——
  shareIcon: '/static/assets/分享.png',
  shareIcon2: '/static/assets/分享 (2).png', // 非遗详情页分享图标
  shareIcon3: '/static/assets/分享 (3).png', // 面食详情页分享图标
  addToListIcon: '/static/assets/加入清单.png',
  hotRecommendIcon: '/static/assets/热门推荐.png',
  searchIcon: '/static/assets/搜索.png',

  beijingImage: `${COS_BASE}/beijingtu2.png`,

  noodleBowl: '/static/assets/noodle-bowl.svg',
  noodleCut1: '/static/assets/noodle-cut-1.svg',
  noodleCut2: '/static/assets/noodle-cut-2.svg',
  noodleCut3: '/static/assets/noodle-cut-3.svg',
};


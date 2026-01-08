// 从全局 wx.__echarts__ 读取在首页加载的 ECharts 实例
module.exports = (typeof wx !== 'undefined' && wx.__echarts__) || {};


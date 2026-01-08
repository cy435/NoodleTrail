const { request } = require('./request');

// 获取微信分享签名（目前预留，必要时在 H5 场景使用）
async function getWechatSign(url) {
  return request('/api/share/wechat/sign', { url }, 'POST');
}

// 查询是否分享过
async function checkShared(targetId, targetType) {
  if (!targetId || !targetType) {
    return { isShared: false };
  }
  return request('/api/share/check', { targetId, targetType }, 'GET');
}

// 记录分享行为
async function recordShare(payload) {
  if (!payload || !payload.targetId || !payload.targetType) {
    throw new Error('缺少分享埋点必要参数');
  }
  return request('/api/share/record', payload, 'POST');
}

module.exports = {
  getWechatSign,
  checkShared,
  recordShare
};

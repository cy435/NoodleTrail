// 用户相关接口
const { request } = require('./request');

/**
 * 测试服务器连接（健康检查）
 * @returns {Promise<boolean>} 返回 true 表示服务器可访问
 */
async function checkServerHealth() {
  try {
    // 尝试一个简单的 GET 请求测试连接
    // 如果服务器有健康检查接口最好，没有的话可以尝试根路径
    await request('/health', {}, 'GET', {}, 0);
    return true;
  } catch (err) {
    // 如果服务器有响应（即使404），说明服务器是通的
    // 如果完全超时或连接失败，说明服务器不可用
    if (err.errMsg && err.errMsg.includes('timeout')) {
      return false;
    }
    // 其他错误（如404）说明服务器是通的，只是接口不存在
    return true;
  }
}

/**
 * 微信授权登录（获取 token + 注册/更新用户）
 * POST /api/user/login
 * @param {{code: string, userInfo?: {nickName?: string, avatarUrl?: string, gender?: number, city?: string, province?: string, country?: string}}} payload
 * @returns {Promise<{success: boolean, message: string, data?: {token: string, userId?: string}}>}
 * 
 * ⚠️ 关键：必须 return request()，否则 resp 永远是 undefined
 */
function login(payload) {
  // 数据验证和日志
  console.log('[login] 登录请求参数验证:');
  
  // 验证 code
  if (!payload || !payload.code) {
    const error = new Error('code 参数缺失');
    console.error('[login] ✗ code 缺失');
    throw error;
  }
  
  if (typeof payload.code !== 'string' || payload.code.trim().length === 0) {
    const error = new Error('code 参数无效，必须是非空字符串');
    console.error('[login] ✗ code 无效:', payload.code);
    throw error;
  }
  
  console.log('  - code: ✓ 存在 (长度: ' + payload.code.length + ')');
  console.log('  - code 前10位:', payload.code.substring(0, 10) + '...');
  
  // 验证 userInfo
  if (!payload.userInfo) {
    console.warn('[login] ⚠️ userInfo 缺失，将使用空对象');
    payload.userInfo = {};
  }
  
  console.log('  - userInfo: ✓ 存在');
  if (payload.userInfo) {
    console.log('    - nickName:', payload.userInfo.nickName || '空');
    console.log('    - avatarUrl:', payload.userInfo.avatarUrl ? '已设置' : '空');
  }
  
  // 保存原始 code 用于对比
  const originalCode = payload.code;
  const trimmedCode = payload.code.trim();
  
  // 验证 trim 后的 code 是否与原始 code 一致（除了首尾空格）
  if (originalCode !== trimmedCode && originalCode.trim() !== trimmedCode) {
    console.warn('[login] ⚠️ code 在 trim 后发生变化，原始:', originalCode, 'trim后:', trimmedCode);
  }
  
  // 确保 payload 格式正确
  const requestPayload = {
    code: trimmedCode, // 确保 code 是去除空格的字符串
    userInfo: {
      nickName: payload.userInfo.nickName || '',
      avatarUrl: payload.userInfo.avatarUrl || ''
    }
  };
  
  console.log('[login] 最终请求 payload:');
  console.log('[login]   - code 完整值:', requestPayload.code);
  console.log('[login]   - code 长度:', requestPayload.code.length);
  console.log('[login]   - code 前10位:', requestPayload.code.substring(0, 10) + '...');
  console.log('[login]   - code 后10位:', '...' + requestPayload.code.substring(requestPayload.code.length - 10));
  console.log('[login]   - userInfo:', requestPayload.userInfo);
  
  // 记录原始 code 和最终 code 的对比
  console.log('[login] 📊 code 对比:');
  console.log('[login]   - 原始 code:', originalCode);
  console.log('[login]   - 最终 code:', requestPayload.code);
  console.log('[login]   - 是否一致:', originalCode.trim() === requestPayload.code);
  
  // ⚠️ 关键：必须 return request()，否则 resp 永远是 undefined
  return request('/api/user/login', requestPayload, 'POST');
}

/**
 * 统一登录流程（UniApp Vue2）
 * - 调用 uni.login 拿 code
 * - 调 /api/user/login 换 token
 * - token 持久化到 Storage
 * @returns {Promise<{token: string, userId?: string, nickname?: string, avatarUrl?: string}>}
 */
async function doWxLoginAndSave() {
  const code = await new Promise((resolve, reject) => {
    uni.login({
      success: (res) => resolve(res.code),
      fail: reject
    });
  });
  const resp = await login({ code });
  if (resp && resp.success && resp.data && resp.data.token) {
    try { uni.setStorageSync('token', resp.data.token); } catch (_) {}
    return resp.data;
  }
  throw new Error(resp?.message || '登录失败');
}

/**
 * 获取当前用户信息
 * GET /api/user/me
 * @returns {Promise<{success: boolean, data?: {id: number, openid: string, nickname: string, avatarUrl: string, gender: number, city: string, country: string, province: string}}>}
 */
function getUserProfile() {
  return request('/api/user/me', {}, 'GET');
}

/**
 * 更新用户信息
 * PUT /api/user/me
 * @param {{nickname?: string, avatarUrl?: string, gender?: number, city?: string, province?: string, country?: string}} dto
 * @returns {Promise<{success: boolean, data?: UserProfileDTO}>}
 */
function updateUserProfile(dto) {
  return request('/api/user/me', dto, 'PUT');
}

/**
 * 获取用户成就列表
 * GET /api/user/achievements
 * @returns {Promise<{success: boolean, data?: Array<{code: string, name: string, description: string, achieved: boolean}>}>}
 */
function getAchievements() {
  return request('/api/user/achievements', {}, 'GET');
}

/**
 * 获取用户徽章列表
 * GET /api/user/badges
 * @returns {Promise<{success: boolean, data?: Array<{code: string, name: string, description: string, achieved: boolean}>}>}
 */
function getBadges() {
  return request('/api/user/badges', {}, 'GET');
}

module.exports = {
  login,
  doWxLoginAndSave,
  checkServerHealth,
  getUserProfile,
  updateUserProfile,
  getAchievements,
  getBadges
};
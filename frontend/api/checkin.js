// 打卡相关接口
const { request } = require('./request');
const { BASE_URL } = require('./config');

/**
 * 解析定位：经纬度 → 地址 + 周边 POI 列表
 * GET /api/checkin/get-location
 * @param {{longitude: number, latitude: number}} params
 * @returns {Promise<{formattedAddress: string, poiList: Array}>}
 */
function getLocation(params) {
  return request('/api/checkin/get-location', params, 'GET');
}

/**
 * 提交打卡（图片 + 文案 + 定位）
 * POST /api/checkin/add
 * - 若有多张图片：逐张以字段名 images 上传；返回最后一次响应
 * - 若无图片：以 JSON 直接 POST（后端若仅接受 multipart，可据需调整）
 * - 鉴权：使用 Authorization: Bearer {token}
 * @param {{
 *   locationName: string,
 *   longitude: number|string,
 *   latitude: number|string,
 *   content?: string,
 *   imagePaths?: string[],  // 本地临时路径（wx.chooseMedia/chooseImage 返回）
 *   city?: string           // 城市名称（例如“西安”），用于后端按城市筛选
 * }} payload
 * @returns {Promise<any>}
 */
async function addCheckin(payload) {
  const { locationName, longitude, latitude, content, imagePaths, city } = payload || {};

  // 后端数据库要求 longitude/latitude 非空：
  // 当前端未拿到坐标时，用 0 作为“未知坐标”的占位值，
  // 既满足非空约束，又能在前端通过 0 判定为“无坐标不展示”。
  const safeLongitude = (longitude === undefined || longitude === null || longitude === '')
    ? 0
    : Number.isFinite(Number(longitude)) ? Number(longitude) : 0;
  const safeLatitude = (latitude === undefined || latitude === null || latitude === '')
    ? 0
    : Number.isFinite(Number(latitude)) ? Number(latitude) : 0;

  const baseForm = { locationName, longitude: safeLongitude, latitude: safeLatitude };
  if (content) baseForm.content = content;
  if (city) baseForm.city = city;

  // 无图片：直接 JSON 提交，由 request.js 注入 Authorization
  if (!imagePaths || imagePaths.length === 0) {
    return request('/api/checkin/add', baseForm, 'POST');
  }

  // 有图片：通过 multipart 逐张上传多张，字段名均为 images；需要手动带上 Authorization 头
  const url = `${BASE_URL}/api/checkin/add`;
  let token = '';
  try { token = uni.getStorageSync('token') || ''; } catch (_) { token = ''; }
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  // 公共基础字段，后续每张图片在此基础上按需附加 checkinId
  const formBase = {
    ...baseForm
  };

  // createdCheckinId 用于承接后端第一次创建打卡记录返回的主键，
  // 后续追加图片时通过该字段让后端归属到同一条记录
  let lastResponse = null;
  let createdCheckinId = null;

  for (let index = 0; index < imagePaths.length; index += 1) {
    const currentFilePath = imagePaths[index];
    if (!currentFilePath) {
      continue;
    }

    const payloadWithId = createdCheckinId
      ? { ...formBase, checkinId: createdCheckinId }
      : { ...formBase };

    const formData = {
      ...payloadWithId,
      data: JSON.stringify(payloadWithId)
    };

    // 逐张调用 uni.uploadFile，一旦其中一次上传失败，立即抛出错误
    // 成功时用最后一次上传的响应作为返回值
    // 注意：小程序端不支持 uni.uploadFile 的 files 多文件参数，这里改为循环单文件避免报错
    // eslint-disable-next-line no-await-in-loop
    lastResponse = await new Promise((resolve, reject) => {
      uni.uploadFile({
        url,
        name: 'images',
        filePath: currentFilePath,
        formData,
        header: headers,
        success(res) {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            let errorMsg = `上传失败，状态码: ${res.statusCode}`;
            try {
              const errorData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
              if (errorData && (errorData.message || errorData.msg || errorData.error)) {
                errorMsg = errorData.message || errorData.msg || errorData.error;
              }
            } catch (_) {}
            reject(new Error(errorMsg));
            return;
          }
          try {
            const data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;

            // 第一次上传成功后，从响应中提取 checkinId/id，后续图片上传时带上
            if (!createdCheckinId && data) {
              const record = data.data || data;
              if (record) {
                createdCheckinId = record.checkinId
                  || record.id
                  || record.recordId
                  || record.checkInId
                  || createdCheckinId;
              }
            }

            resolve(data);
          } catch (_) {
            resolve(res.data);
          }
        },
        fail: reject
      });
    });
  }

  return lastResponse;
}

/**
 * 查询“我的”打卡列表（使用 token）
 * GET /api/checkin/me
 * @param {{page?: number, size?: number}} params
 * @returns {Promise<Array|{list:Array,page:number,size:number,total?:number}>}
 */
function getMyCheckins({ page = 1, size = 10 } = {}) {
  return request(`/api/checkin/me`, { page, size }, 'GET');
}

/**
 * 获取所有用户的美食打卡列表（全局时间线）
 * GET /api/checkin/all
 * @param {{page?: number, size?: number}} params
 * @returns {Promise<Array|{list:Array,page:number,size:number,total?:number}>}
 */
function getAllCheckins({ page = 1, size = 20, city } = {}) {
  const params = { page, size };
  if (city) params.city = city;
  return request('/api/checkin/all', params, 'GET');
}

/**
 * 定位并拉取候选地点（地址 + POI 列表）
 * @returns {Promise<{latitude:number, longitude:number, formattedAddress?: string, poiList?: Array}>}
 */
async function fetchLocationCandidates() {
  const { latitude, longitude } = await new Promise((resolve, reject) => {
    uni.getLocation({
      type: 'gcj02',
      success: (res) => resolve({ latitude: res.latitude, longitude: res.longitude }),
      fail: reject
    });
  });
  const info = await getLocation({ latitude, longitude });
  return { ...info, latitude, longitude };
}

/**
 * 提交打卡的快捷流程（选择图片可选）
 * @param {{ locationName: string, longitude: number|string, latitude: number|string, content?: string, maxImageCount?: number, city?: string }} params
 * @returns {Promise<any>}
 */
async function submitCheckinFlow({ locationName, longitude, latitude, content = '', maxImageCount = 9, city }) {
  // 需要先完成登录以获取 token
  let token = '';
  try { token = uni.getStorageSync('token') || ''; } catch (_) { token = ''; }
  if (!token) throw new Error('用户未登录，请先授权');

  let imagePaths = [];
  try {
    const res = await uni.chooseImage({ count: maxImageCount });
    imagePaths = res.tempFilePaths || [];
  } catch (_) {
    imagePaths = [];
  }

  return addCheckin({ locationName, longitude, latitude, content, imagePaths, city });
}

/**
 * 加载“我的打卡列表”
 * @param {number} [page=1]
 * @param {number} [size=10]
 * @returns {Promise<Array>}
 */
async function loadMyCheckins(page = 1, size = 10) {
  let token = '';
  try { token = uni.getStorageSync('token') || ''; } catch (_) { token = ''; }
  if (!token) throw new Error('用户未登录，请先授权');

  const res = await getMyCheckins({ page, size });
  if (Array.isArray(res)) return res;
  if (res && res.data && Array.isArray(res.data.list)) return res.data.list;
  if (res && Array.isArray(res.data)) return res.data;
  return [];
}

/**
 * 删除打卡记录
 * 方法：DELETE /api/checkin/{id}
 * @param {string|number} id - 打卡记录ID
 * @returns {Promise<Object>} 返回 data 或完整响应
 */
async function deleteCheckin(id) {
  if (!id) {
    throw new Error('打卡记录ID不能为空');
  }

  const response = await request(`/api/checkin/${id}`, {}, 'DELETE');
  if (response && response.success !== false) {
    return response.data || response;
  }
  return response;
}

module.exports = {
  getLocation,
  addCheckin,
  getMyCheckins,
  getAllCheckins,
  fetchLocationCandidates,
  submitCheckinFlow,
  loadMyCheckins,
  deleteCheckin
};
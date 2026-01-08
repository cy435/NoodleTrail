const { request } = require('./request');
const { BASE_URL } = require('./config');

/**
 * 返回所有非遗信息（支持分页）
 * @param {Object} params - 分页参数
 * @param {number} params.page - 页码（默认1）
 * @param {number} params.size - 每页数量（默认10）
 * @returns {Promise<Array>} 返回 HeritageDTO 数组
 */
async function getAllHeritages(params = {}) {
  const { page = 1, size = 10 } = params;
  const response = await request('/api/heritages', { page, size }, 'GET');
  // 处理 ApiResponse 格式：{ success: true, data: [...] }
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  // 兼容直接返回数组的情况
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 按分类查询非遗
 * @param {string} type - 分类类型
 * @returns {Promise<Array>} 返回 HeritageDTO 数组
 */
async function getHeritagesByType(type) {
  const response = await request('/api/heritages/type', { heritageType: type }, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 按关键词模糊搜索非遗
 * @param {string} keyword - 搜索关键词
 * @returns {Promise<Array>} 返回 HeritageDTO 数组
 */
async function searchHeritages(keyword) {
  const response = await request('/api/heritages/search', { keyword }, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 根据ID获取非遗详情
 * @param {string|number} id - 非遗ID
 * @returns {Promise<Object>} 返回 HeritageDTO 对象
 */
async function getHeritageById(id) {
  const response = await request('/api/heritages/detail', { id }, 'GET');
  if (response && response.success !== false && response.data) {
    return response.data;
  }
  // 兼容直接返回对象的情况
  if (response && (response.id || response.name)) {
    return response;
  }
  return null;
}

/**
 * 标记非遗为已体验
 * 方法：POST /api/heritages/{id}/experience
 * 请求体：无（后端基于当前登录用户和 heritageId 处理）
 * @param {string|number} id - 非遗ID
 * @returns {Promise<Object>} 返回 data 对象或完整响应
 */
async function markAsExperienced(id) {
  if (!id) {
    throw new Error('非遗ID不能为空');
  }

  const response = await request(`/api/heritages/${id}/experience`, {}, 'POST');
  if (response && response.success !== false) {
    return response.data || response;
  }
  return response;
}

/**
 * 取消非遗体验标记
 * 方法：DELETE /api/heritages/{id}/experience
 * 请求体：无
 * @param {string|number} id - 非遗ID
 * @returns {Promise<Object>} 返回 data 对象或完整响应
 */
async function cancelExperience(id) {
  if (!id) {
    throw new Error('非遗ID不能为空');
  }

  const response = await request(`/api/heritages/${id}/experience`, {}, 'DELETE');
  if (response && response.success !== false) {
    return response.data || response;
  }
  return response;
}

/**
 * 收藏/取消收藏非遗
 * @param {string|number} id - 非遗ID
 * @param {boolean} favorite - true为收藏，false为取消收藏
 * @returns {Promise<Object>} 返回操作结果
 */
async function toggleFavorite(id, favorite = true) {
  const response = await request(`/api/heritages/${id}/favorite`, { favorite }, 'POST');
  if (response && response.success !== false) {
    return response.data || response;
  }
  return response;
}

/**
 * 获取收藏状态
 * @param {string|number} id - 非遗ID
 * @returns {Promise<boolean>} 返回是否已收藏
 */
async function getFavoriteStatus(id) {
  const response = await request(`/api/heritages/${id}/favorite`, {}, 'GET');
  if (response && response.success !== false && response.data) {
    return response.data.favorite === true || response.data.isFavorite === true;
  }
  return false;
}

/**
 * 获取体验状态
 * @param {string|number} id - 非遗ID
 * @returns {Promise<boolean>} 返回是否已体验
 */
async function getExperienceStatus(id) {
  const response = await request(`/api/heritages/${id}/experience`, {}, 'GET');
  if (response && response.success !== false && response.data) {
    return response.data.experienced === true || response.data.isExperienced === true;
  }
  return false;
}

/**
 * 获取我的收藏列表
 * @returns {Promise<Array>} 返回收藏的非遗列表
 */
async function getMyFavorites() {
  const response = await request('/api/heritages/favorites', {}, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 获取我的体验列表
 * @returns {Promise<Array>} 返回体验过的非遗列表
 */
async function getMyExperiences() {
  const response = await request('/api/heritages/experiences', {}, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 获取我的非遗记录（体验和收藏的统计）
 * @returns {Promise<Object>} 返回统计信息 { experiencedCount, favoriteCount, experiencedList, favoriteList }
 */
async function getMyHeritageRecords() {
  try {
    const [experiencedList, favoriteList] = await Promise.all([
      getMyExperiences(),
      getMyFavorites()
    ]);
    return {
      experiencedCount: experiencedList.length,
      favoriteCount: favoriteList.length,
      experiencedList: experiencedList,
      favoriteList: favoriteList
    };
  } catch (err) {
    console.error('获取非遗记录失败:', err);
    return {
      experiencedCount: 0,
      favoriteCount: 0,
      experiencedList: [],
      favoriteList: []
    };
  }
}

/**
 * 构建非遗视频的代理播放地址
 * @param {string} originalUrl - 后端返回的原始 YouTube / GoogleVideo 播放链接
 * @returns {string} 可直接用于 <video> src 的完整 URL
 */
function buildVideoProxyUrl(originalUrl) {
  if (!originalUrl || typeof originalUrl !== 'string') {
    return '';
  }

  const trimmed = originalUrl.trim();
  if (!trimmed) {
    return '';
  }

  const base = (BASE_URL || '').replace(/\/+$/, '');
  if (!base) {
    return '';
  }

  const encoded = encodeURIComponent(trimmed);
  return `${base}/api/videoProxy?url=${encoded}`;
}

module.exports = {
  getAllHeritages,
  getHeritagesByType,
  searchHeritages,
  getHeritageById,
  markAsExperienced,
  cancelExperience,
  toggleFavorite,
  getFavoriteStatus,
  getExperienceStatus,
  getMyFavorites,
  getMyExperiences,
  getMyHeritageRecords,
  buildVideoProxyUrl
};


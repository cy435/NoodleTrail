const { request } = require('./request');

/**
 * 按关键字搜索菜品（名称/标签）
 * @param {string} name - 菜名关键字（可选）
 * @param {string} tag - 标签关键字（可选）
 * @returns {Promise<Array>} 返回 FoodDTO 数组
 */
async function searchFoods(name, tag) {
  const params = {};
  if (name) params.name = name;
  if (tag) params.tag = tag;
  const response = await request('/api/foods/search', params, 'GET');
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
 * 精准按菜名搜索
 * @param {string} name - 菜名关键字（必填）
 * @returns {Promise<Array>} 返回 FoodDTO 数组
 */
async function searchByName(name) {
  const response = await request('/api/foods/search/by-name', { name }, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 按标签筛选菜品
 * @param {string} tag - 标签值（必填）
 * @returns {Promise<Array>} 返回 FoodDTO 数组
 */
async function searchByTag(tag) {
  const response = await request('/api/foods/search/by-tag', { tag }, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 高级多条件查询（id + 名称 + 标签）
 * @param {Object} params - 查询参数
 * @param {number} params.id - 菜品id（可选）
 * @param {string} params.foodName - 菜名关键字（可选）
 * @param {string} params.tag - 标签关键字（可选）
 * @returns {Promise<Array>} 返回 FoodDTO 数组
 */
async function queryFoods(params) {
  const response = await request('/api/foods/query', params, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 获取所有分类标签
 * @returns {Promise<{tags: Array<string>, featureTags: Array<string>}>}
 */
async function getAllTags() {
  const response = await request('/api/foods/tags', {}, 'GET');
  if (response && response.success !== false && response.data) {
    return response.data;
  }
  // 兼容直接返回数据的情况
  if (response && response.tags) {
    return response;
  }
  return { tags: [], featureTags: [] };
}

/**
 * 按ID获取美食详情
 * @param {number} id - 美食ID
 * @returns {Promise<any>}
 */
function getFoodById(id) {
  // 直接使用 queryFoods，它会调用 /api/foods/query?id=xxx
  return queryFoods({ id });
}

/**
 * 获取美食详情（专门用于详情页）
 * @param {Object} params - 查询参数
 * @param {number} params.id - 美食ID（可选）
 * @param {string} params.slug - 美食slug（可选）
 * @param {string} params.foodName - 美食名称（可选）
 * @returns {Promise<Object>} 返回美食详情对象
 */
async function getFoodDetail(params) {
  const response = await request('/api/foods/detail', params, 'GET');
  if (response && response.success !== false && response.data) {
    return response.data;
  }
  // 兼容直接返回对象的情况
  if (response && (response.id || response.foodName || response.name)) {
    return response;
  }
  // 如果没有专门的详情接口，回退到 queryFoods
  if (params && (params.id || params.slug || params.foodName)) {
    const list = await queryFoods(params);
    return list && list.length > 0 ? list[0] : null;
  }
  return null;
}

/**
 * 按城市获取美食列表
 * @param {string} city - 城市名称
 * @returns {Promise<Array>} 返回 FoodDTO 数组
 */
async function getFoodsByCity(city) {
  const response = await request('/api/foods/city', { city }, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 按城市和标签获取美食列表
 * @param {string} city - 城市名称
 * @param {string} tag - 标签
 * @returns {Promise<Array>} 返回 FoodDTO 数组
 */
async function getFoodsByCityAndTag(city, tag) {
  const response = await request('/api/foods/city-tag', { city, tag }, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 按特色标签筛选美食（支持多选）
 * @param {Array<string>} tags - 特色标签数组，如 ['非遗美食', '网红打卡']。不传或空数组时返回全部美食
 * @returns {Promise<Array>} 返回 FoodDTO 数组
 */
async function getFoodsByFeatureTags(tags) {
  // request 函数的 buildQueryString 已支持数组参数
  // tags=['非遗美食', '网红打卡'] 会自动转换为 tags=非遗美食&tags=网红打卡
  const params = (tags && tags.length > 0) ? { tags } : {};
  const response = await request('/api/foods/feature-tags', params, 'GET');
  if (response && response.success !== false && response.data) {
    return Array.isArray(response.data) ? response.data : [];
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
}

/**
 * 获取某城市必吃榜
 * @param {string} cityName - 城市名称，例如 "西安市"
 * @returns {Promise<{success: boolean, data: Array, message?: string}>}
 */
async function getMustEatList(cityName) {
  const params = {};
  if (cityName) {
    params.city = cityName;
  }
  const response = await request('/api/must-eat', params, 'GET');
  if (response && typeof response.success !== 'undefined') {
    return response;
  }
  // 兼容后端直接返回数组的情况
  if (Array.isArray(response)) {
    return {
      success: true,
      data: response,
      message: ''
    };
  }
  return {
    success: false,
    data: [],
    message: '获取必吃榜失败'
  };
}

/**
 * 将美食添加到清单
 * @param {string|number} checklistId - 清单ID
 * @param {Object} food - 美食对象
 * @param {string} food.name - 美食名称（必填）
 * @param {string} food.introduction - 美食介绍（可选，作为备注）
 * @param {string} food.id - 美食ID（可选）
 * @returns {Promise<Object>} 返回创建的清单项
 */
async function addFoodToChecklist(checklistId, food) {
  if (!checklistId) {
    throw new Error('清单ID不能为空');
  }
  if (!food || !food.name) {
    throw new Error('美食名称不能为空');
  }
  
  // 直接调用 request，避免循环依赖
  const item = {
    content: food.name.trim(),
    note: food.introduction || food.features || ''
  };
  
  // 调用清单接口添加项
  const result = await request(`/api/checklists/${checklistId}/items`, item, 'POST');
  
  // 处理 ApiResponse 格式
  if (result && result.success !== false && result.data) {
    return result.data;
  }
  if (result && result.id) {
    return result;
  }
  return result;
}

module.exports = {
  searchFoods,
  searchByName,
  searchByTag,
  queryFoods,
  getAllTags,
  getFoodById,
  getFoodDetail,
  getFoodsByCity,
  getFoodsByCityAndTag,
  getFoodsByFeatureTags,
  getMustEatList,
  addFoodToChecklist
};

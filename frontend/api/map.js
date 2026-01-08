const { request } = require('./request')
const { BASE_URL } = require('./config')

/**
 * 调用后端地图服务，获取 POI 列表
 * 对应 API_MAP.md 中的 GET /api/map/pois
 * @param {Object} params
 * @param {number} params.type 1=美食, 2=景点, 3=非遗相关
 * @param {string} [params.keyword]
 * @param {string} [params.city]
 * @param {number} [params.userLng]
 * @param {number} [params.userLat]
 * @param {number} [params.page]
 * @param {number} [params.radius]
 * @returns {Promise<Array>} Poi 列表
 */
async function getPois(params = {}) {
  const response = await request('/api/map/pois', params, 'GET')

  if (response && response.success !== false && response.data) {
    // data 可能是数组，也可能是分页对象
    if (Array.isArray(response.data)) {
      return response.data
    }
    if (Array.isArray(response.data.list)) {
      return response.data.list
    }
    return []
  }

  // 兼容后端直接返回数组的情况
  if (Array.isArray(response)) {
    return response
  }

  return []
}

/**
 * 获取驾车路线规划数据（后端调用腾讯 WebService）
 * 对应 GET /api/map/navigation
 * @param {{ startLon:number, startLat:number, endLon:number, endLat:number }} params
 * @returns {Promise<object|null>} 路线数据（腾讯方向 API 返回的整体对象）
 */
async function getNavigationUrl(params) {
  const response = await request('/api/map/navigation', params, 'GET')

  if (!response || response.success === false || !response.data) {
    return null
  }

  let route
  try {
    // 后端 data 是字符串形式的 JSON
    route = typeof response.data === 'string'
      ? JSON.parse(response.data)
      : response.data
  } catch (e) {
    console.error('[map] parse navigation json error:', e, response.data)
    return null
  }

  // 按腾讯方向 API 约定：status === 0 表示成功
  if (
    route.status !== 0 ||
    !route.result ||
    !Array.isArray(route.result.routes) ||
    route.result.routes.length === 0
  ) {
    console.warn('[map] tencent direction api error:', route)
    return null
  }

  return route
}


/**
 * 获取热门地标列表
 * 对应 API_MAP.md 中的 GET /api/map/hotspots
 * 使用方式：
 *   getHotspots({ city: '石家庄市' }) 或 getHotspots('石家庄市')
 * @param {Object|string} [params] 对象（包含 city 字段）或城市名字符串
 * @returns {Promise<Array>} 热门地标列表
 */
async function getHotspots(params = {}) {
  // 兼容两种调用方式：getHotspots({ city: '西安市' }) / getHotspots('西安市')
  const data = typeof params === 'string' ? { city: params } : params || {}

  const response = await request('/api/map/hotspots', data, 'GET')

  if (response && response.success !== false && Array.isArray(response.data)) {
    return response.data
  }

  if (Array.isArray(response)) {
    return response
  }

  return []
}


/**
 * 获取单个 POI 详情
 * 对应 API_MAP.md 中的 GET /api/map/poi-detail
 * @param {{ id: string|number, type: number, userLng?: number, userLat?: number }} params
 * @returns {Promise<Object|null>} 详情对象（通常包含 poi / intro / tips 等字段）
 */
async function getPoiDetail(params = {}) {
  const response = await request('/api/map/poi-detail', params, 'GET')

  if (response && response.success !== false && response.data) {
    return response.data
  }

  return null
}

/**
 * 用户推荐菜品（“我要推荐”）
 * 对应 API_MAP.md 中的 POST /api/map/poi/recommend-dish
 * @param {{
 *   poiId: string|number,
 *   dishName: string,
 *   price?: number,
 *   image?: string,
 *   remark?: string
 * }} body
 * @returns {Promise<Object|null>} 返回后端原始响应或 data 字段
 */
async function submitPoiRecommendedDish(body = {}) {
  const response = await request('/api/map/poi/recommend-dish', body, 'POST')

  if (!response || response.success === false) {
    return null
  }

  return response.data || response
}

/**
 * 用户提交评论（“写评论”）
 * 对应 API_MAP.md 中的 POST /api/map/poi/comment
 * @param {{
 *   poiId: string|number,
 *   score?: number,
 *   content: string,
 *   images?: string[]
 * }} body
 * @returns {Promise<Object|null>} 返回后端原始响应或 data 字段
 */
async function submitPoiComment(body = {}) {
  const response = await request('/api/map/poi/comment', body, 'POST')

  if (!response || response.success === false) {
    return null
  }

  return response.data || response
}

/**
 * 便捷别名：与接口文档中的命名保持一致
 */
async function postPoiComment(body = {}) {
  return submitPoiComment(body)
}

async function postRecommendDish(body = {}) {
  return submitPoiRecommendedDish(body)
}

/**
 * 删除用户评论
 * 对应 DELETE /api/map/poi/comment/{id}
 * @param {string|number} id
 * @returns {Promise<Object|null>} 返回后端原始响应或 data 字段
 */
async function deletePoiComment(id) {
  if (id === undefined || id === null || id === '') {
    throw new Error('comment id is required')
  }
  const response = await request(`/api/map/poi/comment/${encodeURIComponent(id)}`, {}, 'DELETE')

  if (!response || response.success === false) {
    return null
  }

  return response.data || response
}

/**
 * 删除推荐菜
 * 对应 DELETE /api/map/poi/recommend-dish/{id}
 * @param {string|number} id
 * @returns {Promise<Object|null>} 返回后端原始响应或 data 字段
 */
async function deleteRecommendDish(id) {
  if (id === undefined || id === null || id === '') {
    throw new Error('recommend dish id is required')
  }
  const response = await request(`/api/map/poi/recommend-dish/${encodeURIComponent(id)}`, {}, 'DELETE')

  if (!response || response.success === false) {
    return null
  }

  return response.data || response
}

/**
 * 更新 POI 收藏状态
 * 对应 POST /api/map/poi/favorite
 * @param {{ poiId: string|number, type: number, favorite: boolean }} body
 * @returns {Promise<boolean|null>} 最终收藏状态 true=已收藏
 */
async function updatePoiFavorite(body = {}) {
  const response = await request('/api/map/poi/favorite', body, 'POST')

  if (!response || response.success === false) {
    return null
  }

  return response.data !== undefined ? response.data : response
}

/**
 * 更新 POI 体验状态
 * 对应 POST /api/map/poi/experience
 * @param {{ poiId: string|number, type: number, experienced: boolean }} body
 * @returns {Promise<boolean|null>} 最终体验状态 true=已体验
 */
async function updatePoiExperience(body = {}) {
  const response = await request('/api/map/poi/experience', body, 'POST')

  if (!response || response.success === false) {
    return null
  }

  return response.data !== undefined ? response.data : response
}

/**
 * 获取用户体验的 POI 列表
 * 对应 GET /api/map/poi/experiences 或 POST /api/map/poi/experience (查询模式)
 * @param {{ type?: number }} params type: 1=美食, 2=景点, 3=非遗
 * @returns {Promise<Array>} 体验的 POI 列表
 */
async function getPoiExperiences(params = {}) {
  // 尝试 GET 请求
  let response
  try {
    response = await request('/api/map/poi/experiences', params, 'GET')
    if (response && response.success !== false) {
      if (Array.isArray(response.data)) {
        return response.data
      }
      if (Array.isArray(response)) {
        return response
      }
      if (response.data && Array.isArray(response.data.list)) {
        return response.data.list
      }
    }
  } catch (e) {
    // 如果 GET 失败，记录错误信息
    const errorMsg = e.message || String(e)
    if (e.statusCode === 502 || errorMsg.includes('502') || errorMsg.includes('Bad Gateway')) {
      console.error('[map] GET /api/map/poi/experiences 返回 502 Bad Gateway - 后端服务器网关错误')
      console.error('[map] 可能原因：后端服务器崩溃、未正常运行或无法连接到上游服务')
    } else {
      console.warn('[map] GET /api/map/poi/experiences failed:', e)
    }
    // 不尝试 POST，因为 POST /api/map/poi/experience 是更新状态的接口，不是查询接口
  }

  return []
}

/**
 * 评论点赞 / 踩
 * 对应 POST /api/map/poi/comment/react
 * @param {{ commentId: string|number, reaction: number }} body
 * @returns {Promise<{reaction:number,likeCount:number,dislikeCount:number}|null>}
 */
async function reactPoiComment(body = {}) {
  const response = await request('/api/map/poi/comment/react', body, 'POST')

  if (!response || response.success === false) {
    return null
  }

  // 对于该接口，data 本身就是 { reaction, likeCount, dislikeCount }
  return response.data !== undefined ? response.data : response
}

/**
 * 获取我的评论列表
 * 对应 GET /api/map/poi/my-comments
 * @param {{ page?: number, size?: number }} params
 * @returns {Promise<Array>} 评论列表
 */
async function getMyComments(params = {}) {
  const response = await request('/api/map/poi/my-comments', params, 'GET')

  if (response && response.success !== false) {
    if (Array.isArray(response.data)) {
      return response.data
    }
    if (Array.isArray(response.data?.list)) {
      return response.data.list
    }
    if (Array.isArray(response)) {
      return response
    }
  }

  return []
}

/**
 * 获取我的推荐列表
 * 对应 GET /api/map/poi/my-recommendations
 * @param {{ page?: number, size?: number }} params
 * @returns {Promise<Array>} 推荐列表
 */
async function getMyRecommendations(params = {}) {
  const response = await request('/api/map/poi/my-recommendations', params, 'GET')

  if (response && response.success !== false) {
    if (Array.isArray(response.data)) {
      return response.data
    }
    if (Array.isArray(response.data?.list)) {
      return response.data.list
    }
    if (Array.isArray(response)) {
      return response
    }
  }

  return []
}

/**
 * 获取我的收藏POI列表
 * 对应 GET /api/map/poi/favorites
 * @param {{ type?: number, userLng?: number, userLat?: number, page?: number, size?: number }} params
 *   - type: 1=美食, 2=景点, 3=非遗（必传，否则后端无法查询）
 *   - userLng: 用户当前经度（可选，用于计算距离）
 *   - userLat: 用户当前纬度（可选，用于计算距离）
 *   - page/size: 分页参数（可选，后端可能不支持分页）
 * @returns {Promise<Array>} 收藏的POI列表
 */
async function getMyFavoritePois(params = {}) {
  // 必须传 type 参数，否则后端无法查询
  if (!params.type || (params.type !== 1 && params.type !== 2 && params.type !== 3)) {
    console.warn('[map] getMyFavoritePois 警告: 必须传入 type 参数 (1=美食, 2=景点, 3=非遗)')
    console.warn('[map] 当前 params:', params)
  }
  
  // 构建请求参数，确保 type 存在
  const requestParams = {
    type: params.type,
    ...(params.userLng !== undefined && params.userLng !== null ? { userLng: params.userLng } : {}),
    ...(params.userLat !== undefined && params.userLat !== null ? { userLat: params.userLat } : {}),
    // page 和 size 可选，但不要依赖分页功能
    ...(params.page !== undefined ? { page: params.page } : {}),
    ...(params.size !== undefined ? { size: params.size } : {})
  }
  
  try {
    const response = await request('/api/map/poi/favorites', requestParams, 'GET')
    
    // 检查是否是未登录错误
    if (response && response.success === false) {
      const errorCode = response.code || response.errorCode
      if (errorCode === 'UNAUTHORIZED' || response.statusCode === 401) {
        console.warn('[map] getMyFavoritePois 用户未登录，需要先登录')
        // 返回空数组，让调用方处理登录逻辑
        return []
      }
      
      const errorMsg = response.message || response.error || '未知错误'
      console.warn('[map] getMyFavoritePois 返回失败:', errorMsg)
      return []
    }
    
    // 检查响应是否成功
    if (response && response.success !== false) {
      if (Array.isArray(response.data)) {
        console.log(`[map] getMyFavoritePois 成功获取数据，type=${params.type}, 数量:`, response.data.length)
        return response.data
      }
      if (Array.isArray(response.data?.list)) {
        console.log(`[map] getMyFavoritePois 成功获取数据，type=${params.type}, 数量:`, response.data.list.length)
        return response.data.list
      }
      if (Array.isArray(response)) {
        console.log(`[map] getMyFavoritePois 成功获取数据，type=${params.type}, 数量:`, response.length)
        return response
      }
    }
    
    console.warn('[map] getMyFavoritePois 返回的数据格式不正确:', response)
    return []
  } catch (err) {
    const errorMsg = err.message || String(err)
    
    // 检查是否是 502 错误
    if (err.statusCode === 502 || errorMsg.includes('502') || errorMsg.includes('Bad Gateway')) {
      console.error('[map] getMyFavoritePois 返回 502 Bad Gateway - 后端服务器网关错误')
      console.error('[map] 可能原因：后端服务器崩溃、未正常运行或无法连接到上游服务')
    } else if (err.statusCode === 401 || errorMsg.includes('401') || errorMsg.includes('UNAUTHORIZED')) {
      console.warn('[map] getMyFavoritePois 用户未登录，需要先登录')
    } else {
      console.error('[map] getMyFavoritePois 请求异常:', errorMsg)
    }
    
    return []
  }
}

/**
 * 上传图片到服务器
 * 对应 POST /api/map/upload-image
 * @param {string} filePath 本地临时文件路径（uni.chooseImage 返回的 tempFilePaths）
 * @returns {Promise<string>} 返回服务器上的图片 URL
 */
async function uploadImage(filePath) {
  if (!filePath || typeof filePath !== 'string') {
    throw new Error('无效的文件路径')
  }

  // 获取 token
  let token = ''
  try {
    token = uni.getStorageSync('token') || ''
  } catch (_) {
    token = ''
  }

  if (!token) {
    throw new Error('用户未登录，请先授权')
  }

  const url = `${BASE_URL}/api/map/upload-image`
  const headers = {
    Authorization: `Bearer ${token}`
  }

  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url,
      name: 'image',
      filePath,
      header: headers,
      success(res) {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          let errorMsg = `上传失败，状态码: ${res.statusCode}`
          try {
            const errorData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
            if (errorData && (errorData.message || errorData.msg || errorData.error)) {
              errorMsg = errorData.message || errorData.msg || errorData.error
            }
          } catch (e) {
            // 解析失败，使用默认错误信息
          }
          reject(new Error(errorMsg))
          return
        }

        try {
          const responseData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
          
          // 检查响应格式
          if (responseData && responseData.success !== false) {
            const imageUrl = responseData.data?.url || responseData.url
            if (imageUrl) {
              console.log('[map] uploadImage 成功，返回 URL:', imageUrl)
              resolve(imageUrl)
            } else {
              reject(new Error('服务器返回的数据格式不正确：缺少 url 字段'))
            }
          } else {
            const errorMsg = responseData?.message || responseData?.error || '上传失败'
            reject(new Error(errorMsg))
          }
        } catch (e) {
          console.error('[map] uploadImage 解析响应失败:', e, res.data)
          reject(new Error('解析服务器响应失败'))
        }
      },
      fail(err) {
        console.error('[map] uploadImage 上传失败:', err)
        reject(new Error(err.errMsg || '上传失败'))
      }
    })
  })
}

module.exports = {
  getPois,
  getNavigationUrl,
  getHotspots,
  getPoiDetail,
  submitPoiRecommendedDish,
  submitPoiComment,
  postPoiComment,
  postRecommendDish,
  deletePoiComment,
  deleteRecommendDish,
  updatePoiFavorite,
  updatePoiExperience,
  getPoiExperiences,
  reactPoiComment,
  getMyComments,
  getMyRecommendations,
  getMyFavoritePois,
  uploadImage
}




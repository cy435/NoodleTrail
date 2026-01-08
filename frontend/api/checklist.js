const { request } = require('./request')

const BASE_URL = '/api/checklists'

/**
 * 获取清单模板列表
 * @returns {Promise<Array>} 返回模板列表
 */
function listTemplates() {
  return request(`${BASE_URL}/templates`, {}, 'GET')
}

/**
 * 获取单个清单模板详情
 * @param {string|number} id 模板ID
 * @returns {Promise<Object>} 返回模板详情
 */
function getTemplate(id) {
  return request(`${BASE_URL}/templates/${id}`, {}, 'GET')
}

/**
 * 获取我的清单列表
 * @param {Object} params 查询参数
 * @param {string} params.date 日期筛选（可选，格式：YYYY-MM-DD）
 * @returns {Promise<Array>} 返回清单列表（按日期筛选，每个日期最多3个）
 */
function myChecklists(params = {}) {
  return request(BASE_URL, params, 'GET').then(response => {
    // 处理 ApiResponse 格式：{ success: true, data: [...] }
    if (response && response.success !== false && response.data) {
      return Array.isArray(response.data) ? response.data : [];
    }
    // 兼容直接返回数组的情况
    if (Array.isArray(response)) {
      return response;
    }
    return [];
  })
}

/**
 * 获取用户的所有清单（不按日期筛选，返回所有日期的清单）
 * @param {Object} params 查询参数
 * @param {number} params.page 页码（可选，默认1）
 * @param {number} params.size 每页数量（可选，默认100）
 * @returns {Promise<Array>} 返回所有清单列表（按日期分组）
 */
function getAllMyChecklists(params = {}) {
  return request(`${BASE_URL}/all`, params, 'GET')
}

/**
 * 从模板导入清单
 * @param {string|number} templateId 模板ID
 * @param {Object} options 导入选项
 * @param {string} options.date 清单日期（格式：YYYY-MM-DD）
 * @returns {Promise<Object>} 返回创建的清单
 */
function importFromTemplate(templateId, options = {}) {
  // 确保 items 字段始终是数组（后端可能会自动填充，但前端也要保证）
  const payload = {
    templateId,
    date: options.date,
    items: options.items || [] // 如果提供了 items，使用提供的，否则使用空数组
  }
  return request(`${BASE_URL}/import-from-template`, payload, 'POST')
}

/**
 * 创建一个新清单
 * @param {Object} dto 清单数据
 * @param {string} dto.name 清单名称（标题，用户自定义）
 * @param {string} dto.date 清单日期（格式：YYYY-MM-DD）
 * @param {number} dto.order 清单顺序（可选，1-3，表示该日期的第几个清单）
 * @param {Array} dto.items 清单项数组（可选，默认为空数组）
 * @returns {Promise<Object>} 返回创建的清单
 */
function createChecklist(dto) {
  // 确保 items 字段始终是数组，不能是 null 或 undefined
  const payload = {
    ...dto,
    // 确保 items 字段始终存在且是数组
    items: Array.isArray(dto.items) ? dto.items : (dto.items === null || dto.items === undefined ? [] : [])
  }
  
  // 额外验证：确保 payload.items 不是 null
  if (payload.items === null || payload.items === undefined) {
    payload.items = []
  }
  
  console.log('[createChecklist] 发送的 payload:', {
    ...payload,
    items: payload.items, // 确保 items 是数组
    itemsType: Array.isArray(payload.items) ? 'array' : typeof payload.items,
    itemsLength: Array.isArray(payload.items) ? payload.items.length : 'N/A'
  })
  
  return request(BASE_URL, payload, 'POST')
}

/**
 * 获取清单详情
 * @param {string|number} id 清单ID
 * @returns {Promise<Object>} 返回清单详情
 */
function getChecklist(id) {
  return request(`${BASE_URL}/${id}`, {}, 'GET')
}

/**
 * 更新清单（如重命名标题）
 * @param {string|number} id 清单ID
 * @param {Object} dto 更新数据
 * @param {string} dto.name 清单名称（可选）
 * @param {string} dto.date 清单日期（可选）
 * @param {number} dto.order 清单顺序（可选，1-3）
 * @returns {Promise<Object>} 返回更新后的清单
 */
function updateChecklist(id, dto) {
  return request(`${BASE_URL}/${id}`, dto, 'PUT')
}

/**
 * 删除清单
 * @param {string|number} id 清单ID
 * @returns {Promise<void>}
 */
function deleteChecklist(id) {
  return request(`${BASE_URL}/${id}`, {}, 'DELETE')
}

/**
 * 在清单中添加一个项目
 * @param {string|number} id 清单ID
 * @param {Object} item 清单项数据
 * @param {string} item.content 清单项内容
 * @param {string} item.note 备注（可选）
 * @returns {Promise<Object>} 返回创建的清单项
 */
function addItem(id, item) {
  return request(`${BASE_URL}/${id}/items`, item, 'POST').then((response) => {
    // 统一拿到真正的数据载体：可能是 ApiResponse 包了一层，也可能是直接返回对象/数组
    const payload =
      response && response.success !== false && response.data ? response.data : response

    // 情况1：直接返回单个清单项 { id, content, checked, note }
    if (payload && payload.id && typeof payload.content === 'string') {
      return payload
    }

    // 情况2：返回整个清单对象 { id, name, date, items: [...] }
    if (payload && Array.isArray(payload.items)) {
      const items = payload.items
      const lastItem = items[items.length - 1]
      if (lastItem && lastItem.id && typeof lastItem.content === 'string') {
        return lastItem
      }
    }

    // 情况3：极端兼容，服务端直接把新建项放在 data.items[0] 之类结构里
    if (payload && payload.items && typeof payload.items === 'object') {
      const maybeArray = payload.items
      if (Array.isArray(maybeArray) && maybeArray.length > 0) {
        const candidate = maybeArray[maybeArray.length - 1]
        if (candidate && candidate.id && typeof candidate.content === 'string') {
          return candidate
        }
      }
    }

    // 都匹配不上时，原样返回，交由调用方做兜底处理（会提示“数据格式异常”）
    return payload
  })
}

/**
 * 更新清单中的项目（如标记完成状态）
 * @param {string|number} id 清单ID
 * @param {string|number} itemId 清单项ID
 * @param {Object} item 更新数据
 * @param {string} item.content 内容（可选）
 * @param {string} item.note 备注（可选）
 * @param {boolean} item.checked 完成状态（可选）
 * @returns {Promise<Object>} 返回更新后的清单项
 */
function updateItem(id, itemId, item) {
  return request(`${BASE_URL}/${id}/items/${itemId}`, item, 'PUT')
}

/**
 * 删除清单中的项目
 * @param {string|number} id 清单ID
 * @param {string|number} itemId 清单项ID
 * @returns {Promise<void>}
 */
function deleteItem(id, itemId) {
  return request(`${BASE_URL}/${id}/items/${itemId}`, {}, 'DELETE')
}

/**
 * 导出清单
 * @param {string|number} id 清单ID
 * @param {Object} options 导出选项
 * @param {string} options.format 导出格式：'text'（文字）| 'image'（图片）| 'both'（两者，默认）
 * @returns {Promise<Object>} 返回导出数据
 * @returns {string} text 文字内容（format为'text'或'both'时返回）
 * @returns {string} imageUrl 图片URL（format为'image'或'both'时返回）
 * @returns {string} imageBase64 图片Base64（可选，用于直接保存）
 */
function exportChecklist(id, options = {}) {
  return request(`${BASE_URL}/${id}/export`, {
    format: options.format || 'both'
  }, 'POST').then((response) => {
    // 兼容 ApiResponse 格式 { success, data } 和直接返回导出结果两种情况
    if (response && response.success !== false && response.data) {
      return response.data
    }
    return response
  })
}

/**
 * 从文字导入清单（粘贴文字或扫码后的文字内容）
 * @param {string} text 导入的文字内容
 * @param {Object} options 导入选项
 * @param {string} options.date 清单日期（格式：YYYY-MM-DD，可选，默认当前日期）
 * @param {string} options.name 清单名称（可选，如果文字中未包含则使用此名称）
 * @returns {Promise<Object>} 返回导入结果
 * @returns {Object} checklist 创建的清单
 * @returns {number} importedCount 成功导入的条目数量
 * @returns {number} duplicateCount 去重后的重复条目数量
 * @returns {Array} errors 格式错误信息（如果有）
 */
function importChecklistFromText(text, options = {}) {
  // 确保 items 字段始终是数组（后端可能会自动填充，但前端也要保证）
  const payload = {
    text: text,
    date: options.date,
    name: options.name,
    items: options.items || [] // 如果提供了 items，使用提供的，否则使用空数组
  }
  return request(`${BASE_URL}/import-from-text`, payload, 'POST')
}

/**
 * 批量导入清单项到现有清单
 * @param {string|number} id 清单ID
 * @param {string} text 导入的文字内容（每行一个条目）
 * @returns {Promise<Object>} 返回导入结果
 * @returns {number} importedCount 成功导入的条目数量
 * @returns {number} duplicateCount 去重后的重复条目数量
 * @returns {Array} errors 格式错误信息（如果有）
 */
function importItemsToChecklist(id, text) {
  return request(`${BASE_URL}/${id}/import-items`, {
    text: text
  }, 'POST')
}

/**
 * 生成某个清单的行程分享码
 * @param {string|number} id 清单ID
 * @returns {Promise<Object>} 返回分享码信息
 * @returns {string} code 分享码
 * @returns {string} [expireAt] 过期时间（可选）
 */
function createChecklistShareCode(id) {
  return request(`${BASE_URL}/${id}/share`, {}, 'POST')
}

/**
 * 通过分享码导入清单
 * @param {string} code 分享码或分享链接中的编码
 * @param {Object} options 导入选项
 * @param {string} options.date 清单日期（格式：YYYY-MM-DD）
 * @returns {Promise<Object>} 返回导入结果，结构参考 importChecklistFromText
 */
function importChecklistFromShareCode(code, options = {}) {
  const payload = {
    code
  }
  // 如果提供了 date，则使用提供的日期；否则让后端使用分享码对应的清单的原始日期
  // 注意：这里明确不传 date 参数，让后端使用分享码对应的清单的原始日期
  if (options.date) {
    payload.date = options.date
  }
  console.log('[importChecklistFromShareCode] 发送导入请求，分享码:', code, 'payload:', payload, '是否包含date:', !!payload.date)
  return request(`${BASE_URL}/import-from-share`, payload, 'POST')
}

module.exports = {
  listTemplates,
  getTemplate,
  myChecklists,
  getAllMyChecklists,
  importFromTemplate,
  createChecklist,
  getChecklist,
  updateChecklist,
  deleteChecklist,
  addItem,
  updateItem,
  deleteItem,
  exportChecklist,
  importChecklistFromText,
  importItemsToChecklist,
  createChecklistShareCode,
  importChecklistFromShareCode
}
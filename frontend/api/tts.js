const { request } = require('./request')

/**
 * 文本转语音（陕西方言 TTS）
 * POST /api/tts/synthesize
 * 请求体: { text: '中文文本' }
 * 响应示例:
 * {
 *   success: true,
 *   data: 'BASE64_MP3_STRING',
 *   message: null,
 *   code: null
 * }
 */
function synthesizeTts(text) {
  if (!text || typeof text !== 'string' || !text.trim()) {
    return Promise.reject(new Error('TTS 文本不能为空'))
  }
  return request('/api/tts/synthesize', { text: text.trim() }, 'POST')
}

module.exports = {
  synthesizeTts
}

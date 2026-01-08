const { BASE_URL } = require('./config');

/**
 * 极简请求封装
 * - path 可为完整 URL 或相对路径（相对路径会用 BASE_URL 拼接）
 * - 不处理登录/Token、不进行日期格式化
 * - 成功直接返回 res.data，失败抛错
 * @param {string} path
 * @param {Object} data
 * @param {string} method
 * @param {Object} headers
 * @returns {Promise<any>}
 */
/**
 * 手动构建 query string（兼容小程序环境，支持数组参数）
 * @param {Object} params 
 * @returns {string}
 */
function buildQueryString(params) {
  const pairs = [];
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key];
      if (value !== undefined && value !== null) {
        // 支持数组参数，例如 tags=['非遗美食', '网红打卡'] -> tags=非遗美食&tags=网红打卡
        if (Array.isArray(value)) {
          value.forEach(item => {
            if (item !== undefined && item !== null) {
              pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(item));
            }
          });
        } else {
          pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
      }
    }
  }
  return pairs.join('&');
}

function request(path, data = {}, method = 'GET', headers = {}, retryCount = 0) {
  return new Promise((resolve, reject) => {
    try {
      const isFull = /^https?:\/\//.test(path);
      let url = isFull ? path : `${BASE_URL}${path.startsWith('/') ? path : '/' + path}`;
      
      // 对于 GET 请求，将参数拼接到 URL 上
      if (method === 'GET' && data && Object.keys(data).length > 0) {
        const queryString = buildQueryString(data);
        if (queryString) {
          url += (url.includes('?') ? '&' : '?') + queryString;
        }
      }
      
      // 记录请求开始时间
      const startTime = Date.now();
      const requestId = Math.random().toString(36).substr(2, 9);
      
      // 详细日志：记录请求信息
      console.log(`[request] [${requestId}] ->`, method, url);
      console.log(`[request] [${requestId}] 原始请求数据:`, JSON.stringify(data, null, 2));
      // 如果包含 code，特别记录
      if (data && data.code) {
        console.log(`[request] [${requestId}] 📋 原始 code 值: ${data.code}`);
        console.log(`[request] [${requestId}] 📋 原始 code 类型: ${typeof data.code}`);
        console.log(`[request] [${requestId}] 📋 原始 code 长度: ${data.code.length}`);
      }
      console.log(`[request] [${requestId}] 开始时间:`, new Date().toISOString());
      if (retryCount > 0) {
        console.log(`[request] [${requestId}] 重试次数: ${retryCount}`);
      }

      // 从本地读取 token，自动注入 Authorization 头
      let token = '';
      try { token = uni.getStorageSync('token') || ''; } catch (_) { token = ''; }
      const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

      // 增加超时时间，给后端更多处理时间
      // 登录接口可能需要调用微信API或数据库查询，需要更长时间
      const timeout = 120000; // 120秒（2分钟）

      // 设置请求超时定时器，用于诊断
      const timeoutTimer = setTimeout(() => {
        const elapsed = Date.now() - startTime;
        console.warn(`[request] [${requestId}] ⚠️ 请求已等待 ${elapsed}ms，可能后端处理较慢`);
      }, 10000); // 10秒后提示

      // 确保 POST 请求的数据正确序列化
      let requestData = method === 'GET' ? {} : data;
      
      // 对于 POST 请求，确保数据是对象格式（uni.request 会自动序列化）
      if (method === 'POST' && requestData) {
        // 验证数据格式
        if (typeof requestData !== 'object') {
          console.error(`[request] [${requestId}] ✗ POST 请求数据必须是对象`);
          reject(new Error('请求数据格式错误'));
          return;
        }
        
        // 特别检查 code 参数
        if (requestData.code !== undefined) {
          if (typeof requestData.code !== 'string' || !requestData.code.trim()) {
            console.error(`[request] [${requestId}] ✗ code 参数无效:`, requestData.code);
            reject(new Error('code 参数无效'));
            return;
          }
          // 详细记录 code 信息，用于追踪
          console.log(`[request] [${requestId}] ✓ code 参数验证通过`);
          console.log(`[request] [${requestId}]   - code 类型: ${typeof requestData.code}`);
          console.log(`[request] [${requestId}]   - code 长度: ${requestData.code.length}`);
          console.log(`[request] [${requestId}]   - code 前10位: ${requestData.code.substring(0, 10)}...`);
          console.log(`[request] [${requestId}]   - code 后10位: ...${requestData.code.substring(requestData.code.length - 10)}`);
          console.log(`[request] [${requestId}]   - code 完整值: ${requestData.code}`);
        }
      }
      
      // 在发送请求前，再次确认 code 值（如果存在）
      if (requestData.code !== undefined) {
        console.log(`[request] [${requestId}] 📤 发送请求前的 code 值: ${requestData.code}`);
        console.log(`[request] [${requestId}] 📤 发送请求前的完整 data:`, JSON.stringify(requestData, null, 2));
        console.log(`[request] [${requestId}] 📤 请求 URL: ${url}`);
        console.log(`[request] [${requestId}] 📤 请求方法: ${method}`);
        console.log(`[request] [${requestId}] 📤 Content-Type: application/json`);
      }
      
      uni.request({
        url,
        method,
        data: requestData,
        header: {
          'Content-Type': 'application/json',
          ...authHeader,
          ...headers
        },
        timeout: timeout,
        success(res) {
          // 在收到响应后，检查请求是否被正确发送
          if (requestData.code !== undefined) {
            console.log(`[request] [${requestId}] 📥 收到响应，检查请求中的 code 是否一致`);
            // 注意：这里无法直接获取实际发送的 code，但可以通过日志对比
          }
          clearTimeout(timeoutTimer);
          const elapsed = Date.now() - startTime;
          console.log(`[request] [${requestId}] <- 响应`, res.statusCode, `耗时: ${elapsed}ms`);
          console.log(`[request] [${requestId}] 响应数据:`, JSON.stringify(res.data, null, 2));
          
          // 检查 HTTP 状态码
          // 2xx 表示成功
          if (res.statusCode >= 200 && res.statusCode < 300) {
            // 直接返回服务端数据（可能是对象或字符串）
            resolve(res.data);
          } else {
            // 非 2xx 状态码，视为错误
            let errorMsg = `服务器返回错误状态码: ${res.statusCode}`;
            
            // 根据状态码提供具体错误信息
            if (res.statusCode === 502) {
              errorMsg = `502 Bad Gateway - 后端服务器网关错误\n\n可能原因：\n1. 后端服务器崩溃或未正常运行\n2. 后端无法连接到上游服务（数据库、微信API等）\n3. 后端服务器配置错误\n4. 后端处理超时被网关终止\n\n建议：\n1. 检查后端服务器日志\n2. 确认后端服务是否正常运行\n3. 检查后端依赖的服务（数据库、微信API）是否可用`;
            } else if (res.statusCode === 500) {
              // 尝试从响应中提取更详细的错误信息
              let detailedError = '';
              if (res.data) {
                try {
                  const errorData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
                  if (errorData.message || errorData.msg || errorData.error) {
                    detailedError = `\n\n服务器错误详情: ${errorData.message || errorData.msg || errorData.error}`;
                  }
                  if (errorData.stack) {
                    detailedError += `\n\n错误堆栈: ${errorData.stack.substring(0, 200)}...`;
                  }
                } catch (e) {
                  if (typeof res.data === 'string') {
                    detailedError = `\n\n服务器响应: ${res.data.substring(0, 200)}`;
                  }
                }
              }
              errorMsg = `500 Internal Server Error - 服务器内部错误${detailedError}\n\n可能原因：\n1. 后端代码异常（空指针、数组越界等）\n2. 数据库连接失败\n3. 调用微信API失败（code无效或过期）\n4. 数据格式不匹配\n\n建议：\n1. 检查后端服务器控制台日志\n2. 确认后端服务是否正常运行\n3. 检查发送的数据格式是否正确\n4. 确认 code 是否有效（微信 code 5分钟内有效）`;
            } else if (res.statusCode === 404) {
              errorMsg = `404 Not Found - 接口不存在\n\n请检查接口路径是否正确: ${path}`;
            } else if (res.statusCode === 401) {
              errorMsg = `401 Unauthorized - 未授权\n\n请检查 token 是否有效`;
            } else if (res.statusCode === 403) {
              errorMsg = `403 Forbidden - 禁止访问\n\n没有权限访问此接口`;
            }
            
            // 如果响应数据中有错误信息，也包含进去
            if (res.data) {
              try {
                const errorData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
                if (errorData.message || errorData.msg || errorData.error) {
                  errorMsg += `\n\n服务器错误信息: ${errorData.message || errorData.msg || errorData.error}`;
                }
              } catch (e) {
                // 解析失败，直接使用原始数据
                if (typeof res.data === 'string' && res.data.trim()) {
                  errorMsg += `\n\n服务器响应: ${res.data}`;
                }
              }
            }
            
            const error = new Error(errorMsg);
            error.statusCode = res.statusCode;
            error.responseData = res.data;
            reject(error);
          }
        },
        fail(err) {
          clearTimeout(timeoutTimer);
          const elapsed = Date.now() - startTime;
          console.error(`[request] [${requestId}] x 失败 耗时: ${elapsed}ms`, err);
          
          // 如果是超时或网络错误，且重试次数未达到上限，则重试
          const isRetryable = (err.errMsg && (
            err.errMsg.includes('timeout') || 
            err.errMsg.includes('fail') ||
            err.errMsg.includes('network')
          ));
          
          if (isRetryable && retryCount < 2) {
            // 延迟1秒后重试
            console.log(`[request] 准备重试 (${retryCount + 1}/2)...`);
            setTimeout(() => {
              request(path, data, method, headers, retryCount + 1)
                .then(resolve)
                .catch(reject);
            }, 1000);
            return;
          }
          
          // 如果是超时错误，提供更友好的提示
          if (err.errMsg && err.errMsg.includes('timeout')) {
            const errorMsg = `请求超时 (耗时 ${elapsed}ms)\n\n服务器地址: ${BASE_URL}\n\n可能原因：\n1. 后端处理时间过长（调用微信API或数据库查询超时）\n2. 服务器未响应\n3. 网络连接问题\n\n排查步骤：\n1. 检查后端服务器日志，查看是否收到请求\n2. 检查后端是否在调用微信API时卡住\n3. 检查数据库查询是否超时\n4. 在浏览器中测试：${BASE_URL}/api/user/login\n5. 检查防火墙/网络设置`;
            reject(new Error(errorMsg));
          } else if (err.errMsg && err.errMsg.includes('fail')) {
            const errorMsg = `网络请求失败 (耗时 ${elapsed}ms)\n\n服务器地址: ${BASE_URL}\n\n可能原因：\n1. 服务器未启动\n2. 服务器地址错误\n3. 网络连接问题\n4. CORS跨域问题\n\n解决方案：\n1. 确认服务器已启动（运行 npm run server:dev）\n2. 在浏览器中测试：${BASE_URL}\n3. 检查 api/config.js 中的 BASE_URL 配置\n4. 检查服务器CORS配置`;
            reject(new Error(errorMsg));
          } else {
            reject(err);
          }
        }
      });
    } catch (err) {
      console.error('[request] exception', err);
      reject(err);
    }
  });
}

module.exports = {
  request
};
/**
 * 基础配置
 * - 本机调试（微信开发者工具/模拟器）：使用 localhost 或 127.0.0.1
 * - 真机调试：改为你电脑的局域网 IP，如 http://192.168.1.161:8080 http://192.168.119.125:8080
 * 
 * 注意：在微信开发者工具中，localhost 通常比局域网IP更可靠
 */

// 根据打包环境切换接口地址：开发用内网，正式用域名
//const IS_DEV = process.env.NODE_ENV !== 'production';

// 本地 / 内网调试地址（只在开发阶段使用，按你实际情况改）
// 如果你希望开发也访问云服务器，可将 DEV_BASE_URL 配成同 PROD_BASE_URL
//const DEV_BASE_URL = 'http://62.234.12.214:8887';
//http://172.20.10.3:8887
// 线上正式地址：云服务器 IP（后续有域名可替换为 https://api.smallpeppers.cn）
//const BASE_URL = 'http://172.20.10.3:8887';
//const PROD_BASE_URL = 'https://api.smallpeppers.cn';
const BASE_URL = 'https://api.smallpeppers.cn';

//const BASE_URL = IS_DEV ? DEV_BASE_URL : PROD_BASE_URL;


module.exports = {
  BASE_URL
};
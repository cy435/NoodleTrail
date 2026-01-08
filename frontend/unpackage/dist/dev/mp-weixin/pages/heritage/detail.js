(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/heritage/detail"],{

/***/ 108:
/*!****************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Fheritage%2Fdetail"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/heritage/detail.vue */ 109));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 109:
/*!*********************************************************!*\
  !*** C:/myprojects2/frontend/pages/heritage/detail.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=a0d09b10&scoped=true& */ 110);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 112);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_a0d09b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=a0d09b10&lang=scss&scoped=true& */ 115);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a0d09b10",
  null,
  false,
  _detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/heritage/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 110:
/*!****************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/heritage/detail.vue?vue&type=template&id=a0d09b10&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=a0d09b10&scoped=true& */ 111);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_a0d09b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 111:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/heritage/detail.vue?vue&type=template&id=a0d09b10&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 112:
/*!**********************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/heritage/detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 113);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 113:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/heritage/detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 41));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
var _heritage = __webpack_require__(/*! ../../api/heritage.js */ 114);
var _share = __webpack_require__(/*! ../../api/share.js */ 87);
var _imageMap = __webpack_require__(/*! ../../api/imageMap.js */ 47);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'HeritageDetail',
  data: function data() {
    return {
      IMG: _imageMap.IMG,
      id: '',
      detail: {
        id: '',
        name: '',
        desc: '',
        cover: _imageMap.IMG.retouch_2025112414394823,
        history: '',
        videoUrl: '',
        tags: '',
        qrcode: _imageMap.IMG.retouch_2025112414394823
      },
      poster: _imageMap.IMG.retouch_2025112414394823,
      isExperienced: false,
      // 是否已体验
      isFavorited: false,
      // 是否已收藏
      videoSourceType: '',
      // shaanxi_feiyi / bilibili / douyin / other
      useWebView: false,
      // 是否使用 web-view 兜底
      fallbackUrl: '',
      // web-view 打开的 H5 地址或原视频链接
      loading: false,
      // 分享海报状态
      shareState: {
        hasShared: false,
        generating: false
      }
    };
  },
  computed: {
    media: function media() {
      var video = this.detail.videoUrl;
      var cover = this.detail.cover || this.poster;

      // 已切换为 web-view 兜底播放原页面/H5
      if (this.useWebView && this.fallbackUrl) {
        return {
          type: 'webview',
          src: this.fallbackUrl
        };
      }
      if (video && typeof video === 'string') {
        var sourceType = this.videoSourceType || this.detectVideoSourceType(video);

        // B 站 / 抖音：统一走后端 /api/videoProxy 代理播放
        if (sourceType === 'bilibili' || sourceType === 'douyin') {
          var proxied = (0, _heritage.buildVideoProxyUrl)(video);
          if (proxied) {
            return {
              type: 'video',
              src: proxied
            };
          }
          // 代理地址生成失败时，直接用 H5 页兜底
          return {
            type: 'webview',
            src: this.fallbackUrl || video
          };
        }

        // 陕西非遗网：如果是可直连的 HTTPS 视频，直接用原始地址；否则也可以走代理
        if (sourceType === 'shaanxi_feiyi') {
          if (this.isValidVideoUrl(video)) {
            return {
              type: 'video',
              src: video
            };
          }
          var _proxied = (0, _heritage.buildVideoProxyUrl)(video);
          if (_proxied) {
            return {
              type: 'video',
              src: _proxied
            };
          }
        }

        // 其他来源（例如非遗网站的详情 .html 页面）：同样优先走后端代理
        if (sourceType === 'other') {
          var _proxied2 = (0, _heritage.buildVideoProxyUrl)(video);
          if (_proxied2) {
            return {
              type: 'video',
              src: _proxied2
            };
          }
          // 代理地址构建失败时走 H5 兜底
          return {
            type: 'webview',
            src: this.fallbackUrl || video
          };
        }

        // 保留 YouTube 的兼容逻辑（如果仍有历史数据）
        if (sourceType === 'youtube') {
          var _proxied3 = (0, _heritage.buildVideoProxyUrl)(video);
          if (_proxied3) {
            return {
              type: 'video',
              src: _proxied3
            };
          }
          var embedUrl = this.convertYouTubeUrl(video);
          if (embedUrl) {
            return {
              type: 'webview',
              src: embedUrl
            };
          }
        }

        // 兜底：仍然尝试按直链视频处理一次
        if (this.isValidVideoUrl(video)) {
          return {
            type: 'video',
            src: video
          };
        }
      }
      return {
        type: 'image',
        src: cover
      };
    }
  },
  onLoad: function onLoad(query) {
    console.log('[heritage-detail] onLoad 参数:', query);
    // 支持从分享链接进入，参数可能是 id 或 heritageId
    this.id = (query === null || query === void 0 ? void 0 : query.id) || (query === null || query === void 0 ? void 0 : query.heritageId) || '';
    if (!this.id) {
      // 必须从“陕非遗”列表卡片进入，未携带 id 时强制返回列表页
      uni.showToast({
        title: '请从列表卡片进入详情',
        icon: 'none',
        duration: 1500
      });
      setTimeout(function () {
        uni.reLaunch({
          url: '/pages/heritage/index'
        });
      }, 300);
      return;
    }
    this.bootstrap();
  },
  methods: {
    bootstrap: function bootstrap() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var found, d1, list, item;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                found = null; // 1) 优先按 id 直接查询
                if (!_this.id) {
                  _context.next = 12;
                  break;
                }
                _context.prev = 3;
                _context.next = 6;
                return (0, _heritage.getHeritageById)(_this.id);
              case 6:
                d1 = _context.sent;
                if (d1 && (d1.id || d1.name)) {
                  found = d1;
                }
                _context.next = 12;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
              case 12:
                if (found) {
                  _context.next = 17;
                  break;
                }
                _context.next = 15;
                return (0, _heritage.getAllHeritages)({
                  page: 1,
                  size: 1000
                });
              case 15:
                list = _context.sent;
                found = list.find(function (h) {
                  return String(h.id) === String(_this.id);
                }) || null;
              case 17:
                // 最终映射（后端返回 HeritageDTO，字段为 name, contentIntroduction, historicalOrigin, imageUrl, videoUrl, category）
                item = found || {};
                _this.detail = {
                  id: item.id || _this.id,
                  name: item.name || item.heritageName || item.title || '非遗项目',
                  desc: item.contentIntroduction || item.description || item.desc || '',
                  cover: _this.pickCover(item),
                  history: item.historicalOrigin || '',
                  videoUrl: item.videoUrl || item.video || item.videoURL || item.mediaUrl || '',
                  tags: item.category || item.tags || '',
                  qrcode: item.qrcode || item.qrCodeUrl || _imageMap.IMG.retouch_2025112414394823
                };
                _this.poster = _this.detail.cover;

                // 根据视频来源类型初始化播放方式（陕西非遗网 / B 站 / 抖音）
                _this.setupVideo();

                // 加载体验和收藏状态
                _context.next = 23;
                return _this.loadStatus();
              case 23:
                // 查询是否已经分享过，用于禁用分享按钮
                _this.checkShareStatus();
                _context.next = 29;
                break;
              case 26:
                _context.prev = 26;
                _context.t1 = _context["catch"](0);
                console.warn('加载详情失败:', _context.t1);
              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 26], [3, 10]]);
      }))();
    },
    // 加载体验和收藏状态
    loadStatus: function loadStatus() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _yield$Promise$all, _yield$Promise$all2, experienced, favorited;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.id) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return Promise.all([(0, _heritage.getExperienceStatus)(_this2.id), (0, _heritage.getFavoriteStatus)(_this2.id)]);
              case 5:
                _yield$Promise$all = _context2.sent;
                _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 2);
                experienced = _yield$Promise$all2[0];
                favorited = _yield$Promise$all2[1];
                _this2.isExperienced = experienced;
                _this2.isFavorited = favorited;
                _context2.next = 16;
                break;
              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](2);
                console.error('加载状态失败:', _context2.t0);
              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 13]]);
      }))();
    },
    // 标记 / 取消已体验
    handleExperience: function handleExperience() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _resp, _experienced, confirmed, resp, experienced, msg;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.id) {
                  _context3.next = 3;
                  break;
                }
                uni.showToast({
                  title: '非遗信息不完整',
                  icon: 'none'
                });
                return _context3.abrupt("return");
              case 3:
                if (!_this3.loading) {
                  _context3.next = 5;
                  break;
                }
                return _context3.abrupt("return");
              case 5:
                _context3.prev = 5;
                _this3.loading = true;

                // 未体验 -> 标记为已体验
                if (_this3.isExperienced) {
                  _context3.next = 15;
                  break;
                }
                _context3.next = 10;
                return (0, _heritage.markAsExperienced)(_this3.id);
              case 10:
                _resp = _context3.sent;
                _experienced = _resp && (_resp.experienced === true || _resp.isExperienced === true);
                _this3.isExperienced = _experienced || true;
                uni.showToast({
                  title: '标记成功',
                  icon: 'success'
                });
                return _context3.abrupt("return");
              case 15:
                _context3.next = 17;
                return new Promise(function (resolve) {
                  uni.showModal({
                    title: '取消体验',
                    content: '确定要取消“已体验”标记吗？',
                    success: function success(res) {
                      return resolve(res.confirm === true);
                    }
                  });
                });
              case 17:
                confirmed = _context3.sent;
                if (confirmed) {
                  _context3.next = 20;
                  break;
                }
                return _context3.abrupt("return");
              case 20:
                _context3.next = 22;
                return (0, _heritage.cancelExperience)(_this3.id);
              case 22:
                resp = _context3.sent;
                experienced = resp && (resp.experienced === true || resp.isExperienced === true);
                _this3.isExperienced = experienced === true;
                uni.showToast({
                  title: '已取消体验',
                  icon: 'success'
                });
                _context3.next = 33;
                break;
              case 28:
                _context3.prev = 28;
                _context3.t0 = _context3["catch"](5);
                console.error('[handleExperience] 体验状态更新失败', _context3.t0);
                msg = _context3.t0 && _context3.t0.message ? _context3.t0.message : '操作失败';
                uni.showToast({
                  title: msg,
                  icon: 'none'
                });
              case 33:
                _context3.prev = 33;
                _this3.loading = false;
                return _context3.finish(33);
              case 36:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 28, 33, 36]]);
      }))();
    },
    // 收藏/取消收藏
    handleFavorite: function handleFavorite() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var newFavoriteStatus;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (_this4.id) {
                  _context4.next = 3;
                  break;
                }
                uni.showToast({
                  title: '非遗信息不完整',
                  icon: 'none'
                });
                return _context4.abrupt("return");
              case 3:
                _context4.prev = 3;
                _this4.loading = true;
                newFavoriteStatus = !_this4.isFavorited;
                _context4.next = 8;
                return (0, _heritage.toggleFavorite)(_this4.id, newFavoriteStatus);
              case 8:
                _this4.isFavorited = newFavoriteStatus;
                uni.showToast({
                  title: newFavoriteStatus ? '已收藏' : '已取消收藏',
                  icon: 'success'
                });
                _context4.next = 16;
                break;
              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](3);
                console.error('收藏操作失败:', _context4.t0);
                uni.showToast({
                  title: '操作失败',
                  icon: 'none'
                });
              case 16:
                _context4.prev = 16;
                _this4.loading = false;
                return _context4.finish(16);
              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[3, 12, 16, 19]]);
      }))();
    },
    pickCover: function pickCover(item) {
      var def = this.detail.cover;
      var url = item.imageUrl || item.coverImage || item.cover || item.image || def;
      return this.getValidImageUrl(url);
    },
    // 与列表页保持一致的图片合法性判断
    getValidImageUrl: function getValidImageUrl(url) {
      if (!url || typeof url !== 'string') return this.poster;
      var raw = url.trim();
      var pagePatterns = ['baidu.com/item', 'baike.baidu.com', 'view.php', '.html', '.shtml', '.php', 'smart-museum.cn'];
      if (pagePatterns.some(function (p) {
        return raw.includes(p);
      })) return this.poster;
      if (raw.startsWith('http://')) return this.poster;
      // 尝试校验扩展名（使用字符串方法解析 pathname，不使用 URL 构造函数）
      var pathname = raw;
      // 使用字符串方法提取 pathname
      try {
        var match = raw.match(/^https?:\/\/[^\/]+(\/[^?#]*)/);
        if (match && match[1]) {
          pathname = match[1];
        } else {
          // 如果没有匹配到，尝试直接使用原始 URL
          var pathMatch = raw.split('?')[0].split('#')[0];
          var slashIndex = pathMatch.indexOf('/', pathMatch.indexOf('://') + 3);
          if (slashIndex > 0) {
            pathname = pathMatch.substring(slashIndex);
          }
        }
      } catch (e) {
        pathname = raw;
      }
      var lower = pathname.toLowerCase();
      var exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp'];
      return exts.some(function (ext) {
        return lower.endsWith(ext);
      }) ? raw : this.poster;
    },
    // 根据视频 URL 判断来源类型：陕西非遗网 / B 站 / 抖音 / 其他
    detectVideoSourceType: function detectVideoSourceType(url) {
      if (!url || typeof url !== 'string') return '';
      var raw = url.trim();
      if (this.isBilibiliUrl(raw)) {
        return 'bilibili';
      }
      if (this.isDouyinUrl(raw)) {
        return 'douyin';
      }
      if (this.isYouTubeUrl(raw)) {
        return 'youtube';
      }
      if (this.isValidVideoUrl(raw)) {
        return 'shaanxi_feiyi';
      }
      return 'other';
    },
    // 初始化视频播放配置（前端只负责拼好 video / web-view 的地址）
    setupVideo: function setupVideo() {
      var rawUrl = this.detail && this.detail.videoUrl ? String(this.detail.videoUrl).trim() : '';
      if (!rawUrl) {
        this.videoSourceType = '';
        this.useWebView = false;
        this.fallbackUrl = '';
        return;
      }
      var sourceType = this.detectVideoSourceType(rawUrl);
      this.videoSourceType = sourceType;
      // 默认优先尝试通过 <video> 播放（包括 B站/抖音/非遗网站 HTML 等），失败时再通过 web-view 兜底
      this.useWebView = false;
      // web-view 兜底时，直接打开原始分享链接或原地址
      this.fallbackUrl = rawUrl;
    },
    // 判断是否为 B 站链接
    isBilibiliUrl: function isBilibiliUrl(url) {
      if (!url || typeof url !== 'string') return false;
      var raw = url.trim().toLowerCase();
      return raw.includes('bilibili.com') || raw.includes('b23.tv');
    },
    // 判断是否为抖音链接
    isDouyinUrl: function isDouyinUrl(url) {
      if (!url || typeof url !== 'string') return false;
      var raw = url.trim().toLowerCase();
      return raw.includes('douyin.com') || raw.includes('iesdouyin.com');
    },
    // 检查是否是 YouTube URL
    isYouTubeUrl: function isYouTubeUrl(url) {
      if (!url || typeof url !== 'string') return false;
      var raw = url.trim().toLowerCase();
      return raw.includes('youtube.com') || raw.includes('youtu.be');
    },
    // 将 YouTube URL 解析为可嵌入的播放地址（用于 web-view / iframe）
    convertYouTubeUrl: function convertYouTubeUrl(youtubeUrl) {
      if (!youtubeUrl || typeof youtubeUrl !== 'string') return null;
      try {
        var raw = youtubeUrl.trim();
        var videoId = null;
        if (raw.includes('youtube.com')) {
          var vMatch = raw.match(/[?&]v=([^&]+)/);
          if (vMatch && vMatch[1]) {
            videoId = vMatch[1];
          }
        } else if (raw.includes('youtu.be')) {
          var match = raw.match(/youtu\.be\/([^?&#]+)/);
          if (match && match[1]) {
            videoId = match[1];
          }
        }
        if (!videoId) return null;
        var embedUrl = "https://www.youtube.com/embed/".concat(videoId, "?rel=0&playsinline=1");
        return embedUrl;
      } catch (e) {
        console.error('[heritage] 解析 YouTube URL 失败:', e);
        return null;
      }
    },
    // 检查是否是有效的视频 URL（直接的视频文件链接）
    isValidVideoUrl: function isValidVideoUrl(url) {
      if (!url || typeof url !== 'string') return false;
      var raw = url.trim();

      // 必须是以 https:// 开头的 URL
      if (!raw.startsWith('https://')) return false;

      // 检查是否是直接的视频文件 URL（包含视频扩展名）
      // 使用字符串方法解析 pathname，不使用 URL 构造函数
      var pathname = raw;
      try {
        // 使用正则表达式提取 pathname
        var match = raw.match(/^https?:\/\/[^\/]+(\/[^?#]*)/);
        if (match && match[1]) {
          pathname = match[1];
        } else {
          // 如果没有匹配到，尝试直接使用原始 URL 的路径部分
          var pathMatch = raw.split('?')[0].split('#')[0];
          var slashIndex = pathMatch.indexOf('/', pathMatch.indexOf('://') + 3);
          if (slashIndex > 0) {
            pathname = pathMatch.substring(slashIndex);
          } else {
            pathname = raw;
          }
        }
      } catch (e) {
        pathname = raw;
      }
      var lower = pathname.toLowerCase();
      var allowedExts = ['.mp4', '.m3u8', '.mov', '.m4v', '.webm', '.flv', '.avi'];
      var hasExt = allowedExts.some(function (ext) {
        return lower.endsWith(ext);
      });

      // 如果有视频扩展名，认为是有效的视频 URL
      if (hasExt) return true;

      // 检查是否是视频流 URL（如 m3u8 播放列表）
      if (raw.includes('.m3u8')) {
        return true;
      }

      // 检查 URL 中是否包含视频相关的关键词（更宽松的判断）
      var videoKeywords = ['video', 'stream', 'play', 'media', 'mp4', 'm3u8'];
      if (videoKeywords.some(function (keyword) {
        return lower.includes(keyword);
      })) {
        // 排除明显的非视频 URL
        var nonVideoPatterns = ['image', 'photo', 'picture', 'jpg', 'png', 'gif'];
        if (!nonVideoPatterns.some(function (pattern) {
          return lower.includes(pattern);
        })) {
          return true;
        }
      }
      return false;
    },
    onVideoError: function onVideoError(e) {
      console.warn('[heritage-detail] 视频播放失败:', e);
      if (this.fallbackUrl) {
        uni.showToast({
          title: '播放失败，切换到网页播放',
          icon: 'none'
        });
        this.useWebView = true;
        return;
      }
      if (this.detail && this.detail.videoUrl && this.isYouTubeUrl(this.detail.videoUrl)) {
        var embedUrl = this.convertYouTubeUrl(this.detail.videoUrl);
        if (embedUrl) {
          this.fallbackUrl = embedUrl;
          this.useWebView = true;
          uni.showToast({
            title: '视频播放异常，已切换为网页播放',
            icon: 'none'
          });
          return;
        }
      }
      uni.showToast({
        title: '视频暂时无法播放',
        icon: 'none'
      });
    },
    goDock: function goDock(url) {
      if (!url) return;
      try {
        var pages = getCurrentPages();
        var cur = pages[pages.length - 1];
        if (cur && '/' + cur.route === url) return;
      } catch (e) {}
      if (url === '/pages/index/index') {
        uni.reLaunch({
          url: url
        });
      } else {
        uni.navigateTo({
          url: url
        });
      }
    },
    // ===== 分享相关逻辑 =====
    checkShareStatus: function checkShareStatus() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var res;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                if (_this5.detail.id) {
                  _context5.next = 3;
                  break;
                }
                return _context5.abrupt("return");
              case 3:
                _context5.next = 5;
                return (0, _share.checkShared)(_this5.detail.id, 'HERITAGE');
              case 5:
                res = _context5.sent;
                if (res && (res.isShared === true || res.data && res.data.isShared === true)) {
                  _this5.shareState.hasShared = true;
                }
                _context5.next = 12;
                break;
              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                console.error('[heritage-detail] 查询分享状态失败:', _context5.t0);
              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    },
    // 点击分享按钮（微信小程序会触发 onShareAppMessage）
    onShareClick: function onShareClick() {
      // 微信小程序中，点击 open-type="share" 的按钮会自动触发 onShareAppMessage
      // 这里可以做一些准备工作，比如记录分享行为
      console.log('[heritage-detail] 用户点击分享按钮，非遗ID:', this.id);
    },
    // 微信小程序分享配置
    onShareAppMessage: function onShareAppMessage(options) {
      console.log('[heritage-detail] onShareAppMessage 被调用', options);
      if (!this.id) {
        console.warn('[heritage-detail] 分享时非遗ID为空');
        return {
          title: '非遗详情',
          path: '/pages/heritage/index'
        };
      }

      // 构建分享路径，包含非遗ID
      var sharePath = "/pages/heritage/detail?id=".concat(encodeURIComponent(this.id));

      // 分享标题：使用非遗名称（不包含"-陕游记"）
      var shareTitle = this.detail.name || '非遗详情';

      // 分享描述：使用历史渊源或内容介绍的前50个字符
      var shareDesc = (this.detail.history || this.detail.desc || '').substring(0, 50);
      console.log('[heritage-detail] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        desc: shareDesc,
        id: this.id
      });

      // 记录分享行为
      this.recordShareBehavior().catch(function (err) {
        console.error('[heritage-detail] 记录分享行为失败', err);
      });
      return {
        title: shareTitle,
        path: sharePath,
        imageUrl: this.detail.cover || this.poster // 分享卡片显示的图片
      };
    },
    onSharePoster: function onSharePoster() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var posterPath;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(_this6.shareState.generating || _this6.shareState.hasShared)) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return");
              case 2:
                // 仅在微信小程序环境下支持生成海报

                _this6.shareState.generating = true;
                uni.showLoading({
                  title: '生成中...',
                  mask: true
                });
                _context6.prev = 4;
                _context6.next = 7;
                return _this6.drawSharePoster();
              case 7:
                posterPath = _context6.sent;
                _context6.next = 10;
                return _this6.savePosterToAlbum(posterPath);
              case 10:
                _context6.next = 12;
                return _this6.recordShareBehavior();
              case 12:
                _this6.shareState.hasShared = true;
                _context6.next = 18;
                break;
              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6["catch"](4);
                console.error('[heritage-detail] 生成分享海报失败:', _context6.t0);
              case 18:
                _context6.prev = 18;
                _this6.shareState.generating = false;
                uni.hideLoading();
                return _context6.finish(18);
              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[4, 15, 18, 22]]);
      }))();
    },
    drawSharePoster: function drawSharePoster() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var ctx, detail, W, H, pageBg, heroWrapBg, titleBarColor, defaultCover, coverPath, paddingX, heroY, heroW, heroH, heroInnerPadding, imageX, imageY, imageW, imageH, nameBarY, nameBarH, sectionY;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                ctx = uni.createCanvasContext('heritagePosterCanvas', _this7);
                detail = _this7.detail;
                W = 375;
                H = 640;
                pageBg = '#fffef7';
                heroWrapBg = '#fff5dc';
                titleBarColor = '#7A4E2D';
                defaultCover = _imageMap.IMG.retouch_2025112414394823;
                ctx.clearRect(0, 0, W, H);
                ctx.setFillStyle(pageBg);
                ctx.fillRect(0, 0, W, H);
                coverPath = '';
                _context7.prev = 12;
                _context7.next = 15;
                return _this7.downloadImage(detail.cover || defaultCover);
              case 15:
                coverPath = _context7.sent;
                _context7.next = 22;
                break;
              case 18:
                _context7.prev = 18;
                _context7.t0 = _context7["catch"](12);
                console.warn('[heritage-detail] 封面下载失败，使用默认图:', _context7.t0);
                coverPath = defaultCover;
              case 22:
                paddingX = 16;
                heroY = 20;
                heroW = W - paddingX * 2;
                heroH = 190;
                heroInnerPadding = 14;
                ctx.save();
                ctx.setShadow(0, 14, 32, 'rgba(0, 0, 0, 0.12)');
                _this7.fillRoundRect(ctx, paddingX, heroY, heroW, heroH, 24, heroWrapBg);
                ctx.restore();
                imageX = paddingX + heroInnerPadding;
                imageY = heroY + heroInnerPadding;
                imageW = heroW - heroInnerPadding * 2;
                imageH = heroH - heroInnerPadding * 2;
                _this7.addRoundRect(ctx, imageX, imageY, imageW, imageH, 18);
                ctx.drawImage(coverPath, imageX, imageY, imageW, imageH);
                ctx.restore();
                nameBarY = heroY + heroH + 14;
                nameBarH = 60;
                ctx.save();
                ctx.setShadow(0, 12, 26, 'rgba(0, 0, 0, 0.12)');
                _this7.fillRoundRect(ctx, paddingX, nameBarY, heroW, nameBarH, 20, titleBarColor);
                ctx.restore();
                ctx.setFillStyle('#ffffff');
                ctx.setFontSize(24);
                ctx.setTextAlign('center');
                ctx.setTextBaseline('middle');
                ctx.fillText(detail.name || '非遗项目', W / 2, nameBarY + nameBarH / 2);
                sectionY = nameBarY + nameBarH + 14;
                sectionY = _this7.drawSectionCard(ctx, {
                  title: '历史渊源',
                  content: detail.history || '暂无介绍',
                  x: paddingX,
                  y: sectionY,
                  width: heroW,
                  maxLines: 4
                }) + 14;
                _this7.drawSectionCard(ctx, {
                  title: '内容介绍',
                  content: detail.desc || '暂无介绍',
                  x: paddingX,
                  y: sectionY,
                  width: heroW,
                  maxLines: 5
                });
                return _context7.abrupt("return", new Promise(function (resolve, reject) {
                  ctx.draw(false, function () {
                    uni.canvasToTempFilePath({
                      canvasId: 'heritagePosterCanvas',
                      width: W,
                      height: H,
                      destWidth: W * 2,
                      destHeight: H * 2,
                      fileType: 'png',
                      quality: 1,
                      success: function success(res) {
                        return resolve(res.tempFilePath);
                      },
                      fail: function fail(err) {
                        uni.showToast({
                          title: '导出图片失败',
                          icon: 'none'
                        });
                        reject(err);
                      }
                    }, _this7);
                  });
                }));
              case 53:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[12, 18]]);
      }))();
    },
    downloadImage: function downloadImage(url) {
      return new Promise(function (resolve, reject) {
        if (!url) {
          return reject(new Error('图片地址为空'));
        }
        uni.getImageInfo({
          src: url,
          success: function success(res) {
            return resolve(res.path);
          },
          fail: function fail(err) {
            return reject(err);
          }
        });
      });
    },
    savePosterToAlbum: function savePosterToAlbum(filePath) {
      return new Promise(function (resolve, reject) {
        uni.saveImageToPhotosAlbum({
          filePath: filePath,
          success: function success() {
            uni.showToast({
              title: '已保存到相册',
              icon: 'success'
            });
            resolve();
          },
          fail: function fail(err) {
            console.error('[heritage-detail] 保存海报失败:', err);
            if (err.errMsg && err.errMsg.includes('auth deny')) {
              uni.showModal({
                title: '需要授权',
                content: '请在设置中开启“保存到相册”后重试',
                confirmText: '去设置',
                success: function success(res) {
                  if (res.confirm) {
                    uni.openSetting({});
                  }
                }
              });
            } else {
              uni.showToast({
                title: '保存失败',
                icon: 'none'
              });
            }
            reject(err);
          }
        });
      });
    },
    recordShareBehavior: function recordShareBehavior() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                if (_this8.detail.id) {
                  _context8.next = 3;
                  break;
                }
                return _context8.abrupt("return");
              case 3:
                _context8.next = 5;
                return (0, _share.recordShare)({
                  targetId: _this8.detail.id,
                  targetType: 'HERITAGE',
                  shareChannel: 'WECHAT_POSTER',
                  shareTitle: _this8.detail.name,
                  shareDesc: _this8.detail.desc || _this8.detail.history || '',
                  shareCover: _this8.detail.cover
                });
              case 5:
                _context8.next = 10;
                break;
              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                console.error('[heritage-detail] 分享埋点失败:', _context8.t0);
              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 7]]);
      }))();
    },
    addRoundRect: function addRoundRect(ctx, x, y, w, h, r) {
      ctx.save();
      this.drawRoundRectPath(ctx, x, y, w, h, r);
      ctx.clip();
    },
    drawRoundRectPath: function drawRoundRectPath(ctx, x, y, w, h, r) {
      var radius = Math.max(0, Math.min(r, w / 2, h / 2));
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + w - radius, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
      ctx.lineTo(x + w, y + h - radius);
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
      ctx.lineTo(x + radius, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    },
    fillRoundRect: function fillRoundRect(ctx, x, y, w, h, r, color) {
      ctx.save();
      this.drawRoundRectPath(ctx, x, y, w, h, r);
      ctx.setFillStyle(color);
      ctx.fill();
      ctx.restore();
    },
    drawSectionCard: function drawSectionCard(ctx) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$title = options.title,
        title = _options$title === void 0 ? '非遗项目' : _options$title,
        _options$content = options.content,
        content = _options$content === void 0 ? '暂无介绍' : _options$content,
        _options$x = options.x,
        x = _options$x === void 0 ? 0 : _options$x,
        _options$y = options.y,
        y = _options$y === void 0 ? 0 : _options$y,
        _options$width = options.width,
        width = _options$width === void 0 ? 0 : _options$width,
        _options$maxLines = options.maxLines,
        maxLines = _options$maxLines === void 0 ? 4 : _options$maxLines;
      var radius = 24;
      var paddingX = 22;
      var paddingY = 18;
      var titleLines = 2;
      var titleLineHeight = 26;
      var bodyLineHeight = 24;
      var bodyLines = Math.max(1, maxLines);
      var cardHeight = paddingY * 2 + titleLineHeight * titleLines + 8 + bodyLineHeight * bodyLines;
      ctx.save();
      ctx.setShadow(0, 10, 24, 'rgba(0, 0, 0, 0.08)');
      this.fillRoundRect(ctx, x, y, width, cardHeight, radius, '#ffffff');
      ctx.restore();
      var cursorY = y + paddingY;
      ctx.setFillStyle('#5a2c12');
      ctx.setFontSize(20);
      ctx.setTextAlign('left');
      ctx.setTextBaseline('top');
      this.drawMultilineText(ctx, title, x + paddingX, cursorY, width - paddingX * 2, titleLineHeight, titleLines);
      cursorY += titleLineHeight * titleLines + 8;
      ctx.setFillStyle('#6b4a2e');
      ctx.setFontSize(16);
      var paragraph = content ? "\u3000\u3000".concat(content) : '　　暂无介绍';
      this.drawMultilineText(ctx, paragraph, x + paddingX, cursorY, width - paddingX * 2, bodyLineHeight, bodyLines);
      return y + cardHeight;
    },
    drawMultilineText: function drawMultilineText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
      if (!text) return;
      var chars = String(text).split('');
      var line = '';
      var lineCount = 1;
      for (var i = 0; i < chars.length; i += 1) {
        var testLine = line + chars[i];
        var measure = ctx.measureText(testLine);
        if (measure.width > maxWidth && i > 0) {
          ctx.fillText(line, x, y);
          line = chars[i];
          y += lineHeight;
          lineCount += 1;
          if (lineCount > maxLines) {
            ctx.fillText('...', x, y);
            return;
          }
        } else {
          line = testLine;
        }
      }
      if (line && lineCount <= maxLines) {
        ctx.fillText(line, x, y);
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 115:
/*!*******************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/heritage/detail.vue?vue&type=style&index=0&id=a0d09b10&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_a0d09b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&id=a0d09b10&lang=scss&scoped=true& */ 116);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_a0d09b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_a0d09b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_a0d09b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_a0d09b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_a0d09b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 116:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/heritage/detail.vue?vue&type=style&index=0&id=a0d09b10&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[108,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/heritage/detail.js.map
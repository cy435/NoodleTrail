(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ 50:
/*!************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 51));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 51:
/*!*****************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/index.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57280228&scoped=true& */ 52);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 54);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_57280228_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=57280228&scoped=true&lang=scss& */ 69);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57280228",
  null,
  false,
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/*!************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/index.vue?vue&type=template&id=57280228&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=57280228&scoped=true& */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 53:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/index.vue?vue&type=template&id=57280228&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.showDialectCollectorModal
    ? _vm.customTtsLoading || !_vm.customPlainText.trim()
    : null
  var g1 = _vm.showDialectCollectorModal ? _vm.dialectList.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 54:
/*!******************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 55);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _noodleBowl = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/noodle-bowl.svg */ 56));
var _noodleCut = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/noodle-cut-1.svg */ 57));
var _noodleCut2 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/noodle-cut-2.svg */ 58));
var _noodleCut3 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/noodle-cut-3.svg */ 59));
var _removePhotosRemovedBackground = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/remove.photos-removed-background.png */ 60));
var _imageMap = __webpack_require__(/*! ../../api/imageMap.js */ 47);
var _tts = __webpack_require__(/*! ../../api/tts.js */ 61);
var _shanxiDialectMap = __webpack_require__(/*! ../../api/shanxiDialectMap.js */ 62);
var shaanxiGeoJSON = __webpack_require__(/*! ../../data/shaanxi-map.json */ 63);
// 左上角图片路径
var cornerImage = _imageMap.IMG.retouch_2025111814274381;
var echarts = __webpack_require__(/*! ./ec-canvas/echarts.js */ 64);
var dialectAudioCtx = null;
var _default = {
  components: {},
  data: function data() {
    return {
      IMG: _imageMap.IMG,
      cornerImage: cornerImage,
      noodleSplash: _removePhotosRemovedBackground.default,
      activeNavId: 'tong',
      cities: [{
        id: 'yanan',
        name: '延安',
        color: '#f8d37e',
        top: '8%',
        left: '52%',
        noodles: ['油泼面', '子长煎饼'],
        tagline: '黄土地上的烈烈辣香'
      }, {
        id: 'yulin',
        name: '榆林',
        color: '#f2c568',
        top: '2%',
        left: '35%',
        noodles: ['荞面饸饹', '羊杂粉汤'],
        tagline: '榆塞粗犷的陕北筋道'
      }, /* 面条方框装饰，放在白色模块内部四周 */

      {
        id: 'tongchuan',
        name: '铜川',
        color: '#f9b0c3',
        top: '28%',
        left: '53%',
        noodles: ['耀州臊子面'],
        tagline: '耀州臊子浇满铜魂'
      }, {
        id: 'baoji',
        name: '宝鸡',
        color: '#8fd18c',
        top: '35%',
        left: '28%',
        noodles: ['岐山臊子面', '擀面皮'],
        tagline: '臊子酸辣，擀面皮筋爽'
      }, {
        id: 'xianyang',
        name: '咸阳',
        color: '#8ec7f4',
        top: '38%',
        left: '42%',
        noodles: ['扯面', 'biángbiáng面'],
        tagline: '泾渭河畔的豪放拉面'
      }, {
        id: 'weinan',
        name: '渭南',
        color: '#f7b66d',
        top: '38%',
        left: '63%',
        noodles: ['潼关臊子面', '韩城羊肉饸饹'],
        tagline: '黄河东岸的宽与细'
      }, {
        id: 'xian',
        name: '西安',
        color: '#7ab7ff',
        top: '48%',
        left: '48%',
        noodles: ['biángbiáng面', '油泼面', '凉皮'],
        tagline: '长安城下万面同煮'
      }, {
        id: 'shangluo',
        name: '商洛',
        color: '#6fc4d2',
        top: '54%',
        left: '66%',
        noodles: ['洛南酸汤面'],
        tagline: '秦岭南麓的山泉酸爽'
      }, {
        id: 'hanzhong',
        name: '汉中',
        color: '#f59fb5',
        top: '64%',
        left: '28%',
        noodles: ['汉中热米皮', '菜豆腐面'],
        tagline: '巴山背篓里的米皮香'
      }, {
        id: 'ankang',
        name: '安康',
        color: '#c7a4ff',
        top: '70%',
        left: '55%',
        noodles: ['安康蒸面', '紫阳蒿子面'],
        tagline: '秦巴山里蒸出的湿润口感'
      }],
      noodleIcons: [{
        id: 'travel',
        label: '陕游记'
      }, {
        id: 'taste',
        label: '陕味集'
      }, {
        id: 'heritage',
        label: '陕非遗'
      }, {
        id: 'tong',
        label: '陕面通'
      }, {
        id: 'style',
        label: '个人中心'
      }],
      bottomIcons: [{
        id: 'qingdan',
        label: '陕游记',
        img: _imageMap.IMG.retouch_2025112414391093
      }, {
        id: 'fengwei',
        label: '陕味集',
        img: _imageMap.IMG.retouch_2025112414392946
      }, {
        id: 'feiyi',
        label: '陕非遗',
        img: _imageMap.IMG.retouch_2025112414400271
      }, {
        id: 'profile',
        label: '个人中心',
        img: _imageMap.IMG.retouch_2025112414394823
      }],
      faceShots: [{
        id: 'shot1',
        img: _noodleCut.default,
        answer: '安康蒸面',
        clue: '蒸面偏湿，截面有光泽',
        knowledge: '恭喜！这是安康蒸面，比凉皮粗一点，因为要裹住秦巴山区的辣油。',
        revealed: false
      }, {
        id: 'shot2',
        img: _noodleCut2.default,
        answer: 'biángbiáng面',
        clue: '宽如皮带，油泼最香',
        knowledge: '中！这是西安的biángbiáng面，宽厚能兜住蒜泥与醋香，是秦腔一样的豪迈。',
        revealed: false
      }, {
        id: 'shot3',
        img: _noodleCut3.default,
        answer: '岐山臊子面',
        clue: '细如筷子，靠臊子提味',
        knowledge: '妙！是岐山臊子面，细面吸饱酸辣臊子，随便搅都是彩虹。',
        revealed: false
      }],
      showGuessModal: false,
      showDialectModal: false,
      showDialectCollectorModal: false,
      activeDialect: {
        title: '面语 · 方言卡',
        content: ['老板问"加面不？"', '答："再来一筷子！"'],
        tip: '安康腔调要拖长，显得豪爽'
      },
      dialects: [{
        id: 'xian',
        name: '西安',
        title: '西安 · 面语',
        content: ['“来碗biángbiáng，辣子要多！”', '“面要硬气点，筋道！”'],
        tip: '关中口音舒展，语速中等'
      }, {
        id: 'tongchuan',
        name: '铜川',
        title: '铜川 · 面语',
        content: ['“臊子要冲辣，再来点醋！”', '“薄面，快点端！”'],
        tip: '语调略上扬，干脆利落'
      }, {
        id: 'baoji',
        name: '宝鸡',
        title: '宝鸡 · 面语',
        content: ['“臊子面要酸辣咧！”', '“来个干拌更有味！”'],
        tip: '尾音略重，干脆有劲'
      }, {
        id: 'xianyang',
        name: '咸阳',
        title: '咸阳 · 面语',
        content: ['“扯面要宽些，油泼要热些！”', '“蒜泥别少咧！”'],
        tip: '关中腔明显，语调平直'
      }, {
        id: 'weinan',
        name: '渭南',
        title: '渭南 · 面语',
        content: ['“来碗潼关臊子！”', '“酸点，辣点，快点！”'],
        tip: '吐字清晰，节奏偏快'
      }, {
        id: 'yanan',
        name: '延安',
        title: '延安 · 面语',
        content: ['“来碗油泼，面要干点！”', '“子长煎饼再来一张！”'],
        tip: '陕北腔浑厚，拉长尾音'
      }, {
        id: 'yulin',
        name: '榆林',
        title: '榆林 · 面语',
        content: ['“来碗荞面饸饹！”', '“辣子多些，撒蒜苗！”'],
        tip: '陕北味浓，语速偏快'
      }, {
        id: 'hanzhong',
        name: '汉中',
        title: '汉中 · 面语',
        content: ['“热米皮整一碗！”', '“菜豆腐面要清爽点！”'],
        tip: '陕南口音柔和，婉转'
      }, {
        id: 'ankang',
        name: '安康',
        title: '安康 · 面语',
        content: ['“蒸面要润点！”', '“辣子再来一勺咧！”'],
        tip: '腔调拖长，热情爽利'
      }, {
        id: 'shangluo',
        name: '商洛',
        title: '商洛 · 面语',
        content: ['“来碗酸汤面！”', '“轻油少辣，清爽些！”'],
        tip: '语气温和，尾音略上挑'
      }],
      dialectList: [{
        id: 1,
        word: '嘹咋咧',
        meaning: '好极了、太棒了',
        region: '西安（关中地区通用）',
        example: '用来夸赞人、事、物，比如 “这碗油泼面嘹咋咧！”',
        audio: ''
      }, {
        id: 2,
        word: '额',
        meaning: '我',
        region: '西安（关中全域通用）',
        example: '日常自称，比如 “额今天要去逛大雁塔”',
        audio: ''
      }, {
        id: 3,
        word: '娃',
        meaning: '孩子、年轻人（也可用于亲昵称呼）',
        region: '渭南（关中多地通用）',
        example: '可指自家小孩 “额家娃考上大学了”，也可叫年轻小伙 “这娃真勤快”',
        audio: ''
      }, {
        id: 4,
        word: '甭',
        meaning: '不用、别',
        region: '咸阳（关中地区通用）',
        example: '劝阻或拒绝，比如 “甭操心，额能搞定”',
        audio: ''
      }, {
        id: 5,
        word: '谝闲传',
        meaning: '闲聊、唠嗑',
        region: '西安（关中全域通用）',
        example: '形容朋友间漫无目的地聊天，“晌午没事，咱坐门口谝闲传”',
        audio: ''
      }, {
        id: 6,
        word: '瓷实',
        meaning: '结实、牢固，也指人实在',
        region: '宝鸡',
        example: '形容物品 “这板凳做的真瓷实”，形容人 “他这人很瓷实，值得交”',
        audio: ''
      }, {
        id: 7,
        word: '咥饭',
        meaning: '吃饭（尤其指大口、尽兴地吃）',
        region: '西安（关中地区通用）',
        example: '邀约吃饭或描述用餐状态，“走，咥泡馍去！”“他咥了三大碗面”',
        audio: ''
      }, {
        id: 8,
        word: '瓜娃子',
        meaning: '傻孩子（多为亲昵调侃，非恶意）',
        region: '汉中（陕南、关中部分地区通用）',
        example: '长辈对晚辈的打趣 “你个瓜娃子，咋把伞落店里了”',
        audio: ''
      }, {
        id: 9,
        word: '怂',
        meaning: '家伙（可褒可贬，多为口语化称呼）',
        region: '榆林（陕北地区通用）',
        example: '贬义 “那怂办事不靠谱”，亲昵调侃 “你这怂还挺机灵”',
        audio: ''
      }, {
        id: 10,
        word: '婆姨',
        meaning: '妻子、已婚妇女',
        region: '延安（陕北全域通用）',
        example: '陕北对已婚女性的称呼，“他婆姨是陕北秧歌能手”',
        audio: ''
      }, {
        id: 11,
        word: '达',
        meaning: '爸爸（部分地区称呼叔父）',
        region: '安康（陕南部分区域）',
        example: '陕南部分地区对父亲的称呼 “俺达今天去赶集了”',
        audio: ''
      }, {
        id: 12,
        word: '麻达',
        meaning: '麻烦、问题',
        region: '咸阳（关中多地通用）',
        example: '形容遇到困难 “这事儿出麻达了”，询问状况 “没麻达吧？”',
        audio: ''
      }, {
        id: 13,
        word: '克里马擦',
        meaning: '赶紧、快点',
        region: '西安（关中地区通用）',
        example: '催促他人行动 “克里马擦，再迟就赶不上车了”',
        audio: ''
      }, {
        id: 14,
        word: '绺娃子',
        meaning: '小偷',
        region: '渭南',
        example: '指代偷窃者 “出门看好包，谨防绺娃子”',
        audio: ''
      }, {
        id: 15,
        word: '言传',
        meaning: '说话、吭声',
        region: '宝鸡',
        example: '询问对方意见 “你咋不言传？是不同意吗？”',
        audio: ''
      }, {
        id: 16,
        word: '扎势',
        meaning: '摆架子、装样子',
        region: '西安（关中地区通用）',
        example: '调侃他人故作姿态 “甭扎势了，大家都知道你底细”',
        audio: ''
      }, {
        id: 17,
        word: '拦羊',
        meaning: '放羊',
        region: '榆林（陕北地区通用）',
        example: '陕北农村常见表述 “他每天天不亮就去山上拦羊”',
        audio: ''
      }, {
        id: 18,
        word: '搅团',
        meaning: '一种杂粮小吃（也可形容人 “难缠、难打交道”）',
        region: '商洛（陕南多地通用）',
        example: '食物 “晌午咥搅团就酸菜”，形容人 “这人跟搅团一样，黏糊得很”',
        audio: ''
      }, {
        id: 19,
        word: '嫽',
        meaning: '好、漂亮',
        region: '延安（陕北部分地区通用）',
        example: '夸赞事物 “这花长得真嫽”，夸赞人 “这女娃长得嫽滴很”',
        audio: ''
      }, {
        id: 20,
        word: '毕咧',
        meaning: '完了、没辙了',
        region: '西安（关中全域通用）',
        example: '形容事情搞砸 “毕咧，把重要文件弄丢了”',
        audio: ''
      }],
      dialectTtsLoadingId: null,
      dialectPlayingId: null,
      customPlainText: '',
      customDialectText: '',
      customTtsLoading: false,
      customDialectAudio: ''
    };
  },
  mounted: function mounted() {
    // H5 端可在此尝试初始化，但小程序端依赖 ec-canvas 的 onInit
  },
  onLoad: function onLoad(query) {
    if (query && query.feature === 'guess') {
      this.showGuessModal = true;
    } else if (query && (query.feature === 'dialect' || query.feature === 'mianyu')) {
      this.showDialectModal = true;
    }
  },
  onUnload: function onUnload() {
    if (dialectAudioCtx) {
      try {
        dialectAudioCtx.stop();
      } catch (e) {}
      try {
        dialectAudioCtx.destroy();
      } catch (e) {}
      dialectAudioCtx = null;
    }
  },
  methods: {
    toggleGuessModal: function toggleGuessModal() {
      this.showGuessModal = !this.showGuessModal;
    },
    openGuessModal: function openGuessModal() {
      this.showGuessModal = true;
    },
    revealShot: function revealShot(id) {
      var shot = this.faceShots.find(function (item) {
        return item.id === id;
      });
      if (shot) {
        shot.revealed = true;
      }
    },
    goDetail: function goDetail(city) {
      uni.navigateTo({
        url: "/pages/noodle/detail?city=".concat(city.id)
      });
    },
    goPage: function goPage(id) {
      var routes = {
        tong: '/pages/index/index',
        qingdan: '/pages/checklist/index',
        fengwei: '/pages/flavor/index',
        profile: '/pages/mine/index',
        feiyi: '/pages/heritage/index'
      };
      var url = routes[id];
      if (!url) {
        uni.showToast({
          title: '页面开发中',
          icon: 'none'
        });
        return;
      }
      // 检查是否是当前页
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      if (currentPage && '/' + currentPage.route === url) {
        return;
      }
      // 如果跳转到陕面通首页，使用 reLaunch 清空栈
      if (url === '/pages/index/index') {
        uni.reLaunch({
          url: url
        });
      } else {
        // 其他页面使用 navigateTo，保留返回按钮
        uni.navigateTo({
          url: url
        });
      }
    },
    goDialectCollectorFromIndex: function goDialectCollectorFromIndex() {
      this.showDialectCollectorModal = true;
    },
    goFoodMapFromIndex: function goFoodMapFromIndex() {
      uni.navigateTo({
        url: '/pages/index/Map-Flavors'
      });
    },
    // ECharts 初始化：供 ec-canvas 调用
    initSxMapChart: function initSxMapChart(canvas, width, height, dpr) {
      var chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      canvas.setChart && canvas.setChart(chart);

      // 注册陕西地图
      try {
        echarts.registerMap('shaanxi', shaanxiGeoJSON);
      } catch (e) {
        // 已注册时忽略
      }
      var option = {
        tooltip: {
          show: false
        },
        series: [{
          type: 'map',
          map: 'shaanxi',
          aspectScale: 1.15,
          layoutCenter: ['50%', '48%'],
          layoutSize: '72%',
          zoom: 1,
          selectedMode: 'single',
          roam: false,
          itemStyle: {
            areaColor: '#fff3d6',
            borderColor: '#cfa86a',
            borderWidth: 1
          },
          emphasis: {
            itemStyle: {
              areaColor: '#ffd98a'
            },
            label: {
              show: true,
              color: '#7b2f00',
              fontSize: 12
            }
          },
          label: {
            show: true,
            color: '#8c5c2a',
            fontSize: 10
          },
          // 为不同市设置暖色填充
          data: [{
            name: '西安市',
            itemStyle: {
              areaColor: '#FFE9B0'
            }
          },
          // 深奶黄
          {
            name: '铜川市',
            itemStyle: {
              areaColor: '#FFE099'
            }
          },
          // 玉米黄
          {
            name: '宝鸡市',
            itemStyle: {
              areaColor: '#FFD689'
            }
          },
          // 浅琥珀黄
          {
            name: '咸阳市',
            itemStyle: {
              areaColor: '#FFCB73'
            }
          },
          // 暖杏黄
          {
            name: '渭南市',
            itemStyle: {
              areaColor: '#FFC05E'
            }
          },
          // 蜂蜜橙
          {
            name: '延安市',
            itemStyle: {
              areaColor: '#FFD59E'
            }
          },
          // 浅杏橙
          {
            name: '榆林市',
            itemStyle: {
              areaColor: '#FFD54F'
            }
          },
          // 暖黄色
          {
            name: '汉中市',
            itemStyle: {
              areaColor: '#FFC24D'
            }
          },
          // 橙黄色
          {
            name: '安康市',
            itemStyle: {
              areaColor: '#FFDE8F'
            }
          },
          // 亮奶黄
          {
            name: '商洛市',
            itemStyle: {
              areaColor: '#FFD3A6'
            }
          } // 桃杏奶
          ]
        }]
      };

      chart.setOption(option);
      var nameToId = {
        '西安市': 'xian',
        '铜川市': 'tongchuan',
        '宝鸡市': 'baoji',
        '咸阳市': 'xianyang',
        '渭南市': 'weinan',
        '延安市': 'yanan',
        '榆林市': 'yulin',
        '汉中市': 'hanzhong',
        '安康市': 'ankang',
        '商洛市': 'shangluo'
      };
      chart.on('click', function (params) {
        var id = nameToId[params.name];
        if (id) {
          uni.navigateTo({
            url: "/pages/noodle/detail?city=".concat(id)
          });
        }
      });
      return chart;
    },
    openDialect: function openDialect() {
      this.showDialectModal = true;
    },
    closeDialect: function closeDialect() {
      this.showDialectModal = false;
    },
    playDialect: function playDialect(dialect) {
      var _this = this;
      var textToSpeak = dialect ? dialect.example ? "".concat(dialect.word, "\uFF0C").concat(dialect.example) : dialect.word : '';
      if (!textToSpeak) {
        uni.showToast({
          title: '没有可播放的文本',
          icon: 'none'
        });
        return;
      }
      if (this.dialectTtsLoadingId && this.dialectTtsLoadingId !== dialect.id) {
        uni.showToast({
          title: '正在合成其他方言，请稍后',
          icon: 'none'
        });
      }
      this.dialectTtsLoadingId = dialect.id || null;
      uni.showLoading({
        title: '合成中...',
        mask: true
      });
      (0, _tts.synthesizeTts)(textToSpeak).then(function (raw) {
        var parsed = _this.normalizeTtsResponse(raw);
        if (!parsed.base64Audio) {
          uni.showToast({
            title: '合成失败，请稍后重试',
            icon: 'none'
          });
          return;
        }
        _this.playBase64Audio(parsed.base64Audio);
        _this.dialectPlayingId = dialect.id || null;
      }).catch(function (err) {
        console.error('方言合成请求失败:', err);
        uni.showToast({
          title: '网络错误，请稍后重试',
          icon: 'none'
        });
      }).finally(function () {
        _this.dialectTtsLoadingId = null;
        uni.hideLoading();
      });
    },
    handleCustomTts: function handleCustomTts() {
      var _this2 = this;
      var text = (this.customPlainText || '').trim();
      if (!text) {
        uni.showToast({
          title: '请输入普通话内容',
          icon: 'none'
        });
        return;
      }
      if (this.customTtsLoading) {
        return;
      }
      var dialectText = (0, _shanxiDialectMap.convertToShanxiDialect)(text);
      var ttsText = dialectText || text;
      this.customTtsLoading = true;
      (0, _tts.synthesizeTts)(ttsText).then(function (raw) {
        var parsed = _this2.normalizeTtsResponse(raw);
        if (!parsed.base64Audio) {
          uni.showToast({
            title: '合成失败，请稍后重试',
            icon: 'none'
          });
          return;
        }
        _this2.customDialectText = parsed.dialectText || dialectText || '';
        _this2.customDialectAudio = parsed.base64Audio || '';
        _this2.playBase64Audio(parsed.base64Audio);
      }).catch(function (err) {
        console.error('自定义方言合成请求失败:', err);
        uni.showToast({
          title: '网络错误，请稍后重试',
          icon: 'none'
        });
      }).finally(function () {
        _this2.customTtsLoading = false;
      });
    },
    replayCustomDialect: function replayCustomDialect() {
      if (!this.customDialectAudio) {
        if (!this.customDialectText) {
          uni.showToast({
            title: '请先生成方言',
            icon: 'none'
          });
        }
        return;
      }
      this.playBase64Audio(this.customDialectAudio);
    },
    normalizeTtsResponse: function normalizeTtsResponse(raw) {
      if (!raw) {
        return {
          base64Audio: '',
          dialectText: ''
        };
      }
      var data = null;
      var success = false;
      if (typeof raw.success !== 'undefined') {
        success = !!raw.success;
        data = raw.data;
      } else if (typeof raw.code !== 'undefined') {
        success = raw.code === 0 || raw.code === '0' || raw.code === null;
        data = raw.data;
      } else {
        data = raw.data || raw.audio || raw.base64 || raw;
        success = !!data;
      }
      if (!success || !data) {
        return {
          base64Audio: '',
          dialectText: ''
        };
      }
      if (typeof data === 'string') {
        return {
          base64Audio: data,
          dialectText: ''
        };
      }
      var base64Audio = data.audio || data.audioBase64 || data.base64 || data.data || '';
      var dialectText = data.dialectText || data.text || '';
      return {
        base64Audio: base64Audio,
        dialectText: dialectText
      };
    },
    playBase64Audio: function playBase64Audio(base64) {
      if (!base64) {
        return;
      }
      var fs = wx.getFileSystemManager();
      var filePath = "".concat(wx.env.USER_DATA_PATH, "/tts_").concat(Date.now(), ".mp3");
      fs.writeFile({
        filePath: filePath,
        data: base64,
        encoding: 'base64',
        success: function success() {
          if (dialectAudioCtx) {
            try {
              dialectAudioCtx.stop();
            } catch (e) {}
            try {
              dialectAudioCtx.destroy();
            } catch (e) {}
          }
          dialectAudioCtx = uni.createInnerAudioContext();
          dialectAudioCtx.src = filePath;
          dialectAudioCtx.autoplay = true;
          dialectAudioCtx.onError(function (err) {
            console.error('音频播放失败:', err);
            uni.showToast({
              title: '播放失败',
              icon: 'none'
            });
          });
        },
        fail: function fail(err) {
          console.error('写入音频文件失败:', err);
          uni.showToast({
            title: '播放失败',
            icon: 'none'
          });
        }
      });
    },
    closeDialectCollector: function closeDialectCollector() {
      this.showDialectCollectorModal = false;
      this.customPlainText = '';
      this.customDialectText = '';
      this.customTtsLoading = false;
      this.customDialectAudio = '';
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 69:
/*!***************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/index.vue?vue&type=style&index=0&id=57280228&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=57280228&scoped=true&lang=scss& */ 70);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 70:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/index.vue?vue&type=style&index=0&id=57280228&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[50,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
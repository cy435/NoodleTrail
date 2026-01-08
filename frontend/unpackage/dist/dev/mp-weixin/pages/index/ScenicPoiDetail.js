(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/ScenicPoiDetail"],{

/***/ 92:
/*!**********************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Findex%2FScenicPoiDetail"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _ScenicPoiDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/index/ScenicPoiDetail.vue */ 93));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_ScenicPoiDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 93:
/*!***************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/ScenicPoiDetail.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScenicPoiDetail.vue?vue&type=template&id=4cbe6322&scoped=true& */ 94);
/* harmony import */ var _ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScenicPoiDetail.vue?vue&type=script&lang=js& */ 96);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ScenicPoiDetail_vue_vue_type_style_index_0_id_4cbe6322_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScenicPoiDetail.vue?vue&type=style&index=0&id=4cbe6322&lang=scss&scoped=true& */ 98);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cbe6322",
  null,
  false,
  _ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/ScenicPoiDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/*!**********************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/ScenicPoiDetail.vue?vue&type=template&id=4cbe6322&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ScenicPoiDetail.vue?vue&type=template&id=4cbe6322&scoped=true& */ 95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_template_id_4cbe6322_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 95:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/ScenicPoiDetail.vue?vue&type=template&id=4cbe6322&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.normalizedTags && _vm.normalizedTags.length
  var g1 = _vm.showAddToListDialog ? _vm.checklists.length : null
  var g2 = _vm.showAddToListDialog ? _vm.checklists.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 96:
/*!****************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/ScenicPoiDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ScenicPoiDetail.vue?vue&type=script&lang=js& */ 97);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/ScenicPoiDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 41));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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

var _require = __webpack_require__(/*! ../../api/map.js */ 77),
  getPoiDetail = _require.getPoiDetail,
  updatePoiFavorite = _require.updatePoiFavorite,
  updatePoiExperience = _require.updatePoiExperience;

// 腾讯位置服务路线规划插件配置：使用你在腾讯位置服务后台申请的「微信小程序」key
var AMAP_ROUTE_PLAN_KEY = 'PL2BZ-2QP6Q-OG45Q-BUYY4-QMEPK-4NB55';
var AMAP_ROUTE_PLAN_REFERER = '秦食匠艺';

// 当前页面对应的 POI 类型：2=景点
var POI_TYPE = 2;
var _default = {
  name: 'ScenicPoiDetail',
  data: function data() {
    return {
      scenic: {
        id: '',
        name: '',
        cover: '',
        images: [],
        category: '',
        address: '',
        distance: '',
        // 单位：米
        latitude: null,
        longitude: null,
        score: '',
        intro: '',
        phone: ''
      },
      userLat: null,
      userLng: null,
      tags: [],
      tips: {
        reserveAhead: '',
        notice: '',
        route: '',
        ticketPrice: ''
      },
      isFavorited: false,
      isExperienced: false,
      navigationUrl: '',
      // 加入清单弹窗相关状态
      showAddToListDialog: false,
      checklistDate: new Date().toISOString().split('T')[0],
      checklistDateTemp: '',
      checklists: [],
      selectedChecklistId: '',
      addToListNote: ''
    };
  },
  computed: {
    heroImages: function heroImages() {
      var list = Array.isArray(this.scenic.images) ? this.scenic.images.filter(Boolean) : [];
      if (list.length > 0) {
        return list;
      }
      if (this.scenic.cover) {
        return [this.scenic.cover];
      }
      return ['/static/assets/热门推荐.png'];
    },
    distanceText: function distanceText() {
      if (!this.scenic.distance) {
        return '';
      }
      return this.formatDistance(this.scenic.distance);
    },
    displayScore: function displayScore() {
      if (!this.scenic || !this.scenic.score) {
        return '';
      }
      var num = Number(this.scenic.score);
      if (Number.isNaN(num) || num <= 0) {
        return '';
      }
      return num.toFixed(1).replace(/\.0$/, '');
    },
    walkInfoText: function walkInfoText() {
      var distance = this.scenic && this.scenic.distance;
      if (!distance) {
        return '';
      }
      var meters = Number(distance);
      if (Number.isNaN(meters) || meters <= 0) {
        return '';
      }
      var km = meters / 1000;
      var minutes = Math.max(5, Math.round(meters / 80)); // 简单按 80m/分钟估算
      var kmText = km >= 1 ? "".concat(km.toFixed(1).replace(/\.0$/, ''), "\u516C\u91CC") : "".concat(Math.round(meters), "\u7C73");
      return "\u8DDD\u79BB\u6B65\u884C\u7EA6".concat(kmText, " ").concat(minutes, "\u5206\u949F");
    },
    hasTips: function hasTips() {
      return !!(this.tips.reserveAhead || this.tips.notice || this.tips.route || this.tips.ticketPrice);
    },
    normalizedTags: function normalizedTags() {
      if (!this.tags || !Array.isArray(this.tags) || this.tags.length === 0) {
        return [];
      }
      return this.tags.map(function (tag) {
        // 将"人文景观"替换为"自然景观"
        if (tag === '人文景观') {
          return '自然景观';
        }
        // 将"文物古迹"替换为"人文古迹"
        if (tag === '文物古迹') {
          return '人文古迹';
        }
        return tag;
      });
    }
  },
  onLoad: function onLoad(options) {
    var opt = options || {};
    this.scenic.id = opt.id || '';
    this.scenic.name = opt.name || '';
    this.scenic.cover = opt.cover || '';
    this.scenic.category = opt.category || '';
    this.scenic.address = opt.address || '';
    this.scenic.distance = opt.distance || '';
    this.scenic.latitude = opt.latitude ? Number(opt.latitude) : null;
    this.scenic.longitude = opt.longitude ? Number(opt.longitude) : null;
    this.scenic.score = opt.score || '';
    this.scenic.intro = opt.intro ? decodeURIComponent(opt.intro) : '';
    this.scenic.phone = opt.phone || '';
    if (opt.images) {
      try {
        var parsed = JSON.parse(decodeURIComponent(opt.images));
        if (Array.isArray(parsed)) {
          this.scenic.images = parsed;
        }
      } catch (e) {
        // 忽略解析失败
      }
    }
    if (opt.tags) {
      try {
        var _parsed = JSON.parse(decodeURIComponent(opt.tags));
        if (Array.isArray(_parsed)) {
          this.tags = _parsed;
        }
      } catch (e) {
        this.tags = String(opt.tags).split(',').map(function (s) {
          return s.trim();
        }).filter(Boolean);
      }
    }

    // 小贴士字段（可选）：tipsReserve / tipsNotice / tipsRoute / tipsPrice
    if (opt.tipsReserve) {
      this.tips.reserveAhead = decodeURIComponent(opt.tipsReserve);
    }
    if (opt.tipsNotice) {
      this.tips.notice = decodeURIComponent(opt.tipsNotice);
    }
    if (opt.tipsRoute) {
      this.tips.route = decodeURIComponent(opt.tipsRoute);
    }
    if (opt.tipsPrice) {
      this.tips.ticketPrice = decodeURIComponent(opt.tipsPrice);
    }
    if (this.scenic.name) {
      uni.setNavigationBarTitle({
        title: this.scenic.name
      });
    }
    this.initUserLocation();
    this.loadLocalState();
  },
  methods: {
    initUserLocation: function initUserLocation() {
      var _this = this;
      uni.getLocation({
        type: 'gcj02',
        success: function success(res) {
          _this.userLat = res.latitude;
          _this.userLng = res.longitude;
          if (_this.fetchPoiDetail) {
            _this.fetchPoiDetail();
          }
        },
        fail: function fail() {
          if (_this.fetchPoiDetail) {
            _this.fetchPoiDetail();
          }
        }
      });
    },
    fetchPoiDetail: function fetchPoiDetail() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res, data, poi, t;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this2.scenic || !_this2.scenic.id || !getPoiDetail)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _context.prev = 2;
                _context.next = 5;
                return getPoiDetail({
                  id: _this2.scenic.id,
                  type: 2,
                  userLng: _this2.userLng,
                  userLat: _this2.userLat
                });
              case 5:
                res = _context.sent;
                if (!(!res || res.success === false)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return");
              case 8:
                data = res.data || res;
                if (data) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return");
              case 11:
                poi = data.poi || data;
                if (poi.id != null) _this2.scenic.id = poi.id;
                if (poi.name) _this2.scenic.name = poi.name;
                if (poi.imageUrl || poi.cover || poi.image || poi.thumbnail) {
                  _this2.scenic.cover = poi.imageUrl || poi.cover || poi.image || poi.thumbnail;
                }
                if (Array.isArray(poi.images)) {
                  _this2.scenic.images = poi.images;
                }
                if (poi.categoryName || poi.category) {
                  _this2.scenic.category = poi.categoryName || poi.category;
                }
                if (poi.address) _this2.scenic.address = poi.address;
                if (poi.distance != null) _this2.scenic.distance = poi.distance;
                if (poi.latitude != null) _this2.scenic.latitude = poi.latitude;
                if (poi.longitude != null) _this2.scenic.longitude = poi.longitude;
                if (poi.score != null || poi.rating != null) {
                  _this2.scenic.score = poi.score != null ? poi.score : poi.rating;
                }
                if (poi.tel || poi.phone) {
                  _this2.scenic.phone = poi.tel || poi.phone;
                }
                if (Array.isArray(poi.tags)) {
                  _this2.tags = poi.tags;
                }
                if (data.intro) {
                  _this2.scenic.intro = data.intro;
                } else if (poi.intro) {
                  _this2.scenic.intro = poi.intro;
                }
                if (data.tips) {
                  t = data.tips;
                  if (t.reserveAhead) _this2.tips.reserveAhead = t.reserveAhead;
                  if (t.notice) _this2.tips.notice = t.notice;
                  if (t.route) _this2.tips.route = t.route;
                  if (t.ticketPrice) _this2.tips.ticketPrice = t.ticketPrice;
                }
                if (_this2.scenic.name) {
                  uni.setNavigationBarTitle({
                    title: _this2.scenic.name
                  });
                }
                _context.next = 32;
                break;
              case 29:
                _context.prev = 29;
                _context.t0 = _context["catch"](2);
                console.warn('[ScenicPoiDetail] fetchPoiDetail fail:', _context.t0);
              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 29]]);
      }))();
    },
    formatDistance: function formatDistance(distance) {
      if (distance === undefined || distance === null || distance === '') {
        return '';
      }
      var num = Number(distance);
      if (Number.isNaN(num)) {
        return String(distance);
      }
      if (num >= 1000) {
        var km = (num / 1000).toFixed(1);
        return "".concat(km.replace(/\.0$/, ''), "km");
      }
      return "".concat(Math.round(num), "m");
    },
    navigateToScenic: function navigateToScenic() {
      var _this3 = this;
      if (!this.scenic.latitude || !this.scenic.longitude) {
        uni.showToast({
          title: '暂无位置信息',
          icon: 'none'
        });
        return;
      }
      var name = this.scenic.name || '景点';
      var address = this.scenic.address || '';

      // 优先使用腾讯位置服务路线规划插件
      if (typeof wx !== 'undefined' && wx.navigateTo && AMAP_ROUTE_PLAN_KEY) {
        try {
          var endPoint = JSON.stringify({
            name: name,
            latitude: Number(this.scenic.latitude),
            longitude: Number(this.scenic.longitude)
          });
          var enableAI = true;
          var navigation = 1;
          var layerStyle = 1;
          var referer = AMAP_ROUTE_PLAN_REFERER || '';
          wx.navigateTo({
            url: "plugin://routePlan/index?key=".concat(AMAP_ROUTE_PLAN_KEY, "&referer=").concat(referer, "&endPoint=").concat(endPoint, "&enableAI=").concat(enableAI, "&navigation=").concat(navigation, "&layerStyle=").concat(layerStyle),
            success: function success() {
              // 插件调用成功
            },
            fail: function fail(err) {
              // 插件调用失败（如域名未授权等），回退到微信原生地图
              console.warn('[ScenicPoiDetail] 路线规划插件失败，使用微信原生地图:', err);
              uni.openLocation({
                latitude: Number(_this3.scenic.latitude),
                longitude: Number(_this3.scenic.longitude),
                name: name,
                address: address,
                scale: 18
              });
            }
          });
          return;
        } catch (e) {
          // 插件失败时回退
          console.warn('[ScenicPoiDetail] 路线规划插件异常，使用微信原生地图:', e);
        }
      }

      // 回退：打开微信原生地图
      uni.openLocation({
        latitude: Number(this.scenic.latitude),
        longitude: Number(this.scenic.longitude),
        name: name,
        address: address,
        scale: 18
      });
    },
    callPhone: function callPhone() {
      var raw = this.scenic && this.scenic.phone;
      if (!raw) {
        uni.showToast({
          title: '暂无电话信息',
          icon: 'none'
        });
        return;
      }
      var phone = String(raw).trim();
      if (!phone) {
        uni.showToast({
          title: '暂无电话信息',
          icon: 'none'
        });
        return;
      }
      var content = "\u62E8\u6253 ".concat(phone);
      uni.showModal({
        title: '联系电话',
        content: content,
        confirmText: '复制号码',
        cancelText: '返回',
        confirmColor: '#336699',
        success: function success(res) {
          if (res.confirm) {
            uni.setClipboardData({
              data: phone,
              success: function success() {
                uni.showToast({
                  title: '号码已复制',
                  icon: 'none'
                });
              }
            });
          }
        }
      });
    },
    toggleFavorite: function toggleFavorite() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var current, target, res, finalState;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!_this4.scenic || !_this4.scenic.id)) {
                  _context2.next = 3;
                  break;
                }
                uni.showToast({
                  title: '景点信息未就绪',
                  icon: 'none'
                });
                return _context2.abrupt("return");
              case 3:
                current = !!_this4.isFavorited;
                target = !current;
                _context2.prev = 5;
                _context2.next = 8;
                return updatePoiFavorite({
                  poiId: _this4.scenic.id,
                  type: POI_TYPE,
                  favorite: target
                });
              case 8:
                res = _context2.sent;
                if (!(res == null)) {
                  _context2.next = 11;
                  break;
                }
                throw new Error('接口返回异常');
              case 11:
                finalState = !!res;
                _this4.isFavorited = finalState;
                _this4.saveLocalState();
                uni.showToast({
                  title: _this4.isFavorited ? '已收藏' : '已取消收藏',
                  icon: 'none'
                });
                _context2.next = 21;
                break;
              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](5);
                console.warn('[ScenicPoiDetail] toggleFavorite fail:', _context2.t0);
                uni.showToast({
                  title: '操作失败，请稍后重试',
                  icon: 'none'
                });
              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 17]]);
      }))();
    },
    toggleExperienced: function toggleExperienced() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var current, target, res, finalState;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!_this5.scenic || !_this5.scenic.id)) {
                  _context3.next = 3;
                  break;
                }
                uni.showToast({
                  title: '景点信息未就绪',
                  icon: 'none'
                });
                return _context3.abrupt("return");
              case 3:
                current = !!_this5.isExperienced;
                target = !current;
                _context3.prev = 5;
                _context3.next = 8;
                return updatePoiExperience({
                  poiId: _this5.scenic.id,
                  type: POI_TYPE,
                  experienced: target
                });
              case 8:
                res = _context3.sent;
                if (!(res == null)) {
                  _context3.next = 11;
                  break;
                }
                throw new Error('接口返回异常');
              case 11:
                finalState = !!res;
                _this5.isExperienced = finalState;
                _this5.saveLocalState();
                uni.showToast({
                  title: _this5.isExperienced ? '已体验' : '已取消体验标记',
                  icon: 'none'
                });
                _context3.next = 21;
                break;
              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](5);
                console.warn('[ScenicPoiDetail] toggleExperienced fail:', _context3.t0);
                uni.showToast({
                  title: '操作失败，请稍后重试',
                  icon: 'none'
                });
              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 17]]);
      }))();
    },
    shareScenic: function shareScenic() {
      // 微信小程序中，点击分享按钮会自动触发 onShareAppMessage

      console.log('[ScenicPoiDetail] 用户点击分享按钮，景点ID:', this.scenic.id, '景点名称:', this.scenic.name);
    },
    // 微信小程序分享配置
    onShareAppMessage: function onShareAppMessage(options) {
      console.log('[ScenicPoiDetail] onShareAppMessage 被调用', options);
      if (!this.scenic || !this.scenic.id) {
        console.warn('[ScenicPoiDetail] 分享时景点信息为空');
        return {
          title: '想跟你一起去看这个景点的风景~',
          path: '/pages/index/ScenicPoiDetail'
        };
      }

      // 构建分享路径
      var sharePath = "/pages/index/ScenicPoiDetail?id=".concat(encodeURIComponent(this.scenic.id));

      // 分享标题：使用指定的文案格式
      var scenicName = this.scenic.name || '景点';
      var shareTitle = "\u60F3\u8DDF\u4F60\u4E00\u8D77\u53BB\u770B\u8FD9\u4E2A".concat(scenicName, "\u7684\u98CE\u666F~");

      // 分享图片：只有当有真实图片时才设置，避免显示占位符
      var defaultPlaceholder = '/static/assets/热门推荐.png';
      var shareImageUrl = undefined;

      // 优先使用第一张图片
      if (this.heroImages && this.heroImages.length > 0) {
        var firstImg = this.heroImages[0];
        if (firstImg && firstImg !== defaultPlaceholder && firstImg.trim() !== '') {
          shareImageUrl = firstImg;
        }
      }

      // 如果没有有效图片，尝试使用 cover
      if (!shareImageUrl && this.scenic.cover) {
        var coverImg = this.scenic.cover;
        if (coverImg && coverImg !== defaultPlaceholder && coverImg.trim() !== '') {
          shareImageUrl = coverImg;
        }
      }
      console.log('[ScenicPoiDetail] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        scenicId: this.scenic.id,
        scenicName: scenicName,
        imageUrl: shareImageUrl || '未设置（无图片）'
      });

      // 记录分享行为
      this.recordShareBehavior(shareTitle, sharePath).catch(function (err) {
        console.error('[ScenicPoiDetail] 记录分享行为失败', err);
      });

      // 构建返回对象，如果没有有效图片则不设置 imageUrl
      var shareResult = {
        title: shareTitle,
        path: sharePath
      };
      if (shareImageUrl) {
        shareResult.imageUrl = shareImageUrl;
      }
      return shareResult;
    },
    recordShareBehavior: function recordShareBehavior(title, path) {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var _require2, recordShare;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                if (_this6.scenic.id) {
                  _context4.next = 3;
                  break;
                }
                return _context4.abrupt("return");
              case 3:
                _require2 = __webpack_require__(/*! ../../api/share.js */ 87), recordShare = _require2.recordShare;
                _context4.next = 6;
                return recordShare({
                  targetId: _this6.scenic.id,
                  targetType: 'SCENIC_POI',
                  shareChannel: 'WECHAT_SHARE',
                  shareTitle: title,
                  shareDesc: _this6.scenic.address || '',
                  shareCover: _this6.heroImages && _this6.heroImages.length > 0 ? _this6.heroImages[0] : _this6.scenic.cover,
                  extra: {
                    path: path
                  }
                });
              case 6:
                _context4.next = 11;
                break;
              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                // 忽略埋点失败
                console.warn('[ScenicPoiDetail] 记录分享行为失败:', _context4.t0);
              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    loadLocalState: function loadLocalState() {
      try {
        if (!this.scenic.id) return;
        var key = "scenic_poi_state_".concat(this.scenic.id);
        var value = uni.getStorageSync(key);
        if (value && (0, _typeof2.default)(value) === 'object') {
          this.isFavorited = !!value.isFavorited;
          this.isExperienced = !!value.isExperienced;
        }
      } catch (e) {}
    },
    saveLocalState: function saveLocalState() {
      try {
        if (!this.scenic.id) return;
        var key = "scenic_poi_state_".concat(this.scenic.id);
        var value = {
          isFavorited: this.isFavorited,
          isExperienced: this.isExperienced
        };
        uni.setStorageSync(key, value);

        // 保存到统一的足迹存储
        if (this.isFavorited) {
          this.saveToFootprints('favorite', {
            id: this.scenic.id,
            name: this.scenic.name || '',
            category: this.scenic.category || '景点',
            city: this.extractCityFromScenic(),
            cover: this.scenic.cover || '',
            address: this.scenic.address || '',
            type: 'scenic',
            timestamp: Date.now()
          });
        } else {
          this.removeFromFootprints('favorite', this.scenic.id);
        }
        if (this.isExperienced) {
          this.saveToFootprints('experienced', {
            id: this.scenic.id,
            name: this.scenic.name || '',
            category: this.scenic.category || '景点',
            city: this.extractCityFromScenic(),
            cover: this.scenic.cover || '',
            address: this.scenic.address || '',
            type: 'scenic',
            timestamp: Date.now()
          });
        } else {
          this.removeFromFootprints('experienced', this.scenic.id);
        }
      } catch (e) {
        console.warn('[ScenicPoiDetail] saveLocalState error:', e);
      }
    },
    extractCityFromScenic: function extractCityFromScenic() {
      var address = this.scenic.address || '';
      var cityMatch = address.match(/(西安|宝鸡|咸阳|渭南|延安|榆林|汉中|安康|商洛|铜川)/);
      return cityMatch ? cityMatch[1] : '';
    },
    saveToFootprints: function saveToFootprints(category, data) {
      try {
        var key = "footprints_".concat(category, "_scenic");
        var list = uni.getStorageSync(key) || [];
        var index = list.findIndex(function (item) {
          return item.id === data.id;
        });
        if (index >= 0) {
          list[index] = data;
        } else {
          list.push(data);
        }
        uni.setStorageSync(key, list);

        // 同时保存到统一的足迹存储，用于足迹页面统计
        var unifiedKey = "poi_footprints_".concat(category);
        var unifiedList = uni.getStorageSync(unifiedKey) || [];
        var unifiedIndex = unifiedList.findIndex(function (item) {
          return item.id === data.id && item.type === 'scenic';
        });
        var unifiedItem = _objectSpread(_objectSpread({}, data), {}, {
          type: 'scenic',
          poiType: 'scenic'
        });
        if (unifiedIndex >= 0) {
          unifiedList[unifiedIndex] = unifiedItem;
        } else {
          unifiedList.push(unifiedItem);
        }
        uni.setStorageSync(unifiedKey, unifiedList);
      } catch (e) {
        console.warn('[ScenicPoiDetail] saveToFootprints error:', e);
      }
    },
    removeFromFootprints: function removeFromFootprints(category, id) {
      try {
        var key = "footprints_".concat(category, "_scenic");
        var list = uni.getStorageSync(key) || [];
        var filtered = list.filter(function (item) {
          return item.id !== id;
        });
        uni.setStorageSync(key, filtered);

        // 同时从统一足迹存储中移除
        var unifiedKey = "poi_footprints_".concat(category);
        var unifiedList = uni.getStorageSync(unifiedKey) || [];
        var unifiedFiltered = unifiedList.filter(function (item) {
          return !(item.id === id && item.type === 'scenic');
        });
        uni.setStorageSync(unifiedKey, unifiedFiltered);
      } catch (e) {
        console.warn('[ScenicPoiDetail] removeFromFootprints error:', e);
      }
    },
    // 打开“添加到清单”弹窗
    openAddToListDialog: function openAddToListDialog() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(!_this7.scenic || !_this7.scenic.id)) {
                  _context5.next = 3;
                  break;
                }
                uni.showToast({
                  title: '景点信息未就绪',
                  icon: 'none'
                });
                return _context5.abrupt("return");
              case 3:
                _this7.checklistDate = new Date().toISOString().split('T')[0];
                _this7.checklistDateTemp = _this7.checklistDate;
                _this7.selectedChecklistId = '';
                _this7.addToListNote = '';
                _context5.next = 9;
                return _this7.loadChecklistsByDate(_this7.checklistDate);
              case 9:
                _this7.showAddToListDialog = true;
              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    // 关闭“添加到清单”弹窗
    closeAddToListDialog: function closeAddToListDialog() {
      this.showAddToListDialog = false;
      this.checklists = [];
      this.selectedChecklistId = '';
      this.addToListNote = '';
    },
    // 加载指定日期的清单列表
    loadChecklistsByDate: function loadChecklistsByDate(date) {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var checklistApi, response, lists;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                checklistApi = __webpack_require__(/*! ../../api/checklist.js */ 89);
                _context6.next = 4;
                return checklistApi.myChecklists({
                  date: date
                });
              case 4:
                response = _context6.sent;
                lists = [];
                if (response && response.success !== false && response.data) {
                  lists = Array.isArray(response.data) ? response.data : [];
                } else if (Array.isArray(response)) {
                  lists = response;
                }
                _this8.checklists = lists;
                if (lists.length === 1) {
                  _this8.selectedChecklistId = lists[0].id;
                }
                _context6.next = 15;
                break;
              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);
                console.error('[ScenicPoiDetail] 加载清单列表失败:', _context6.t0);
                _this8.checklists = [];
              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 11]]);
      }))();
    },
    // 弹窗内日期切换
    onChecklistDateChange: function onChecklistDateChange(e) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var newDate;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                newDate = e.detail && e.detail.value;
                if (!(!newDate || newDate === _this9.checklistDate)) {
                  _context7.next = 3;
                  break;
                }
                return _context7.abrupt("return");
              case 3:
                _this9.checklistDate = newDate;
                _this9.checklistDateTemp = newDate;
                _this9.selectedChecklistId = '';
                _this9.addToListNote = '';
                _context7.next = 9;
                return _this9.loadChecklistsByDate(newDate);
              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    // 选择清单
    selectChecklist: function selectChecklist(list) {
      if (!list || !list.id) return;
      this.selectedChecklistId = list.id;
    },
    // 确认添加到清单
    confirmAddToList: function confirmAddToList() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var checklistApi, result;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(!_this10.scenic || !_this10.scenic.id)) {
                  _context8.next = 3;
                  break;
                }
                uni.showToast({
                  title: '景点信息缺失',
                  icon: 'none'
                });
                return _context8.abrupt("return");
              case 3:
                if (_this10.selectedChecklistId) {
                  _context8.next = 6;
                  break;
                }
                uni.showToast({
                  title: '请选择清单',
                  icon: 'none'
                });
                return _context8.abrupt("return");
              case 6:
                _context8.prev = 6;
                checklistApi = __webpack_require__(/*! ../../api/checklist.js */ 89);
                uni.showLoading({
                  title: '正在加入清单...',
                  mask: true
                });
                _context8.next = 11;
                return checklistApi.addItem(_this10.selectedChecklistId, {
                  content: _this10.scenic.name || '景点',
                  note: _this10.addToListNote || (_this10.scenic.address ? "\u5730\u5740\uFF1A".concat(_this10.scenic.address) : '')
                });
              case 11:
                result = _context8.sent;
                uni.hideLoading();
                if (result && result.id) {
                  _this10.showAddToListDialog = false;
                  uni.showToast({
                    title: '已添加到清单',
                    icon: 'success'
                  });
                } else {
                  uni.showToast({
                    title: '添加失败，请稍后再试',
                    icon: 'none'
                  });
                }
                _context8.next = 21;
                break;
              case 16:
                _context8.prev = 16;
                _context8.t0 = _context8["catch"](6);
                uni.hideLoading();
                console.error('[ScenicPoiDetail] 添加到清单失败:', _context8.t0);
                uni.showToast({
                  title: _context8.t0.message || '添加失败',
                  icon: 'none'
                });
              case 21:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[6, 16]]);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 98:
/*!*************************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/ScenicPoiDetail.vue?vue&type=style&index=0&id=4cbe6322&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_style_index_0_id_4cbe6322_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ScenicPoiDetail.vue?vue&type=style&index=0&id=4cbe6322&lang=scss&scoped=true& */ 99);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_style_index_0_id_4cbe6322_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_style_index_0_id_4cbe6322_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_style_index_0_id_4cbe6322_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_style_index_0_id_4cbe6322_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ScenicPoiDetail_vue_vue_type_style_index_0_id_4cbe6322_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 99:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/ScenicPoiDetail.vue?vue&type=style&index=0&id=4cbe6322&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[92,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/ScenicPoiDetail.js.map
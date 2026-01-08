(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/HeritagePoiDetail"],{

/***/ 100:
/*!************************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Findex%2FHeritagePoiDetail"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _HeritagePoiDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/index/HeritagePoiDetail.vue */ 101));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_HeritagePoiDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 101:
/*!*****************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/HeritagePoiDetail.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeritagePoiDetail.vue?vue&type=template&id=561a29f6&scoped=true& */ 102);
/* harmony import */ var _HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeritagePoiDetail.vue?vue&type=script&lang=js& */ 104);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HeritagePoiDetail_vue_vue_type_style_index_0_id_561a29f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeritagePoiDetail.vue?vue&type=style&index=0&id=561a29f6&lang=scss&scoped=true& */ 106);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "561a29f6",
  null,
  false,
  _HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/HeritagePoiDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 102:
/*!************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/HeritagePoiDetail.vue?vue&type=template&id=561a29f6&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./HeritagePoiDetail.vue?vue&type=template&id=561a29f6&scoped=true& */ 103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_template_id_561a29f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 103:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/HeritagePoiDetail.vue?vue&type=template&id=561a29f6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.poi.category || (_vm.facilityTags && _vm.facilityTags.length)
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

/***/ 104:
/*!******************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/HeritagePoiDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./HeritagePoiDetail.vue?vue&type=script&lang=js& */ 105);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 105:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/HeritagePoiDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

// 当前页面对应的 POI 类型：3=非遗
var POI_TYPE = 3;
var _default = {
  name: 'HeritagePoiDetail',
  data: function data() {
    return {
      poi: {
        id: '',
        name: '',
        cover: '',
        avgPrice: '',
        category: '',
        address: '',
        fullAddress: '',
        distance: '',
        latitude: null,
        longitude: null,
        score: '',
        phone: '',
        businessStatus: '',
        openStatus: ''
      },
      userLat: null,
      userLng: null,
      tags: [],
      facilityTags: [],
      businessTimeText: '',
      comments: [],
      heritageDetail: {
        category: '',
        historicalOrigin: '',
        contentIntroduction: '',
        siteName: '',
        basicIntro: '',
        videoUrl: ''
      },
      introText: '',
      tipsText: '',
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
    heroImage: function heroImage() {
      return this.poi.cover || '/static/assets/热门推荐.png';
    },
    displayScore: function displayScore() {
      if (!this.poi || !this.poi.score) {
        return '';
      }
      var num = Number(this.poi.score);
      if (Number.isNaN(num) || num <= 0) {
        return '';
      }
      return num.toFixed(1).replace(/\.0$/, '');
    },
    displayAvgPrice: function displayAvgPrice() {
      if (!this.poi || this.poi.avgPrice === undefined || this.poi.avgPrice === null || this.poi.avgPrice === '') {
        return '';
      }
      var num = Number(this.poi.avgPrice);
      if (Number.isNaN(num) || num <= 0) {
        return '';
      }
      return "\xA5".concat(Math.round(num), "/\u4EBA");
    },
    distanceText: function distanceText() {
      if (!this.poi || !this.poi.distance) {
        return '';
      }
      return this.formatDistance(this.poi.distance);
    },
    isOpen: function isOpen() {
      var status = null;
      if (this.poi) {
        if (this.poi.businessStatus !== undefined && this.poi.businessStatus !== null) {
          status = this.poi.businessStatus;
        } else if (this.poi.openStatus !== undefined && this.poi.openStatus !== null) {
          status = this.poi.openStatus;
        }
      }
      if (status === '' || status === undefined || status === null) {
        return true;
      }
      if (typeof status === 'number') {
        return status === 1;
      }
      var text = String(status).toLowerCase();
      if (text === '1' || text === 'open' || text === '营业中') {
        return true;
      }
      return false;
    },
    hasBusinessStatus: function hasBusinessStatus() {
      if (!this.poi) {
        return false;
      }
      if (this.poi.businessStatus !== undefined && this.poi.businessStatus !== null && this.poi.businessStatus !== '') {
        return true;
      }
      if (this.poi.openStatus !== undefined && this.poi.openStatus !== null && this.poi.openStatus !== '') {
        return true;
      }
      return false;
    },
    hasBusinessInfo: function hasBusinessInfo() {
      var hasStatus = this.hasBusinessStatus;
      var hasTime = !!this.businessTimeText;
      var hasFacilities = Array.isArray(this.facilityTags) && this.facilityTags.length > 0;
      return hasStatus || hasTime || hasFacilities;
    }
  },
  onLoad: function onLoad(options) {
    var opt = options || {};
    this.poi.id = opt.id || '';
    this.poi.name = opt.name || '';
    this.poi.cover = opt.cover || '';
    this.poi.avgPrice = opt.avgPrice || '';
    this.poi.category = opt.category || '非遗体验';
    this.poi.address = opt.address || '';
    this.poi.distance = opt.distance || '';
    this.poi.latitude = opt.latitude ? Number(opt.latitude) : null;
    this.poi.longitude = opt.longitude ? Number(opt.longitude) : null;
    this.poi.score = opt.score || '';
    this.poi.phone = opt.phone || '';
    this.poi.businessStatus = opt.businessStatus || '';
    this.poi.openStatus = opt.openStatus || '';
    if (opt.tags) {
      try {
        var parsed = JSON.parse(decodeURIComponent(opt.tags));
        if (Array.isArray(parsed)) {
          this.tags = parsed;
        }
      } catch (e) {
        this.tags = String(opt.tags).split(',').map(function (s) {
          return s.trim();
        }).filter(Boolean);
      }
    }

    // 设施标签（可选），支持 JSON 字符串或逗号分隔
    if (opt.facilityTags) {
      try {
        var _parsed = JSON.parse(decodeURIComponent(opt.facilityTags));
        if (Array.isArray(_parsed)) {
          this.facilityTags = _parsed;
        }
      } catch (e) {
        this.facilityTags = String(opt.facilityTags).split(',').map(function (s) {
          return s.trim();
        }).filter(Boolean);
      }
    }
    if (opt.businessTime) {
      this.businessTimeText = decodeURIComponent(opt.businessTime);
    }
    if (this.poi.name) {
      uni.setNavigationBarTitle({
        title: this.poi.name
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
        var res, data, detail, poi, heritage, pick, idFromAll, siteName, coverFromAll, avgFromAll, siteType, typeTextMap, key, categoryFromAll, addressFromAll, distanceFromAll, latFromAll, lngFromAll, scoreFromAll, phoneFromAll, businessStatusFromAll, openStatusFromAll, tagsSource, rawTags, list, businessTimeFromAll;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this2.poi || !_this2.poi.id || !getPoiDetail)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _context.prev = 2;
                _context.next = 5;
                return getPoiDetail({
                  id: _this2.poi.id,
                  type: 3,
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
                // 兼容接口返回数组或对象两种形式
                detail = data;
                poi = data.poi || data;
                if (Array.isArray(poi)) {
                  poi = poi[0] || null;
                }
                if (poi) {
                  _context.next = 16;
                  break;
                }
                return _context.abrupt("return");
              case 16:
                if (Array.isArray(detail)) {
                  detail = {};
                }

                // 非遗表字段：detail.heritage（可能是对象或数组）
                heritage = null;
                if (detail && (0, _typeof2.default)(detail) === 'object' && detail.heritage) {
                  heritage = detail.heritage;
                  if (Array.isArray(heritage)) {
                    heritage = heritage[0] || null;
                  }
                }
                pick = function pick(primary) {
                  if (primary !== undefined && primary !== null && primary !== '') {
                    return primary;
                  }
                  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i += 1) {
                    var v = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
                    if (v !== undefined && v !== null && v !== '') {
                      return v;
                    }
                  }
                  return undefined;
                }; // 兼容新的“非遗地点”字段：site_name / full_address / site_type
                idFromAll = pick(poi.id, heritage && heritage.id);
                if (idFromAll != null) _this2.poi.id = idFromAll;
                siteName = pick(poi.name || poi.site_name, heritage && (heritage.name || heritage.site_name));
                if (siteName) _this2.poi.name = siteName;
                coverFromAll = pick(poi.imageUrl || poi.cover || poi.image || poi.thumbnail, heritage && (heritage.imageUrl || heritage.cover || heritage.image || heritage.thumbnail));
                if (coverFromAll) {
                  _this2.poi.cover = coverFromAll;
                }
                avgFromAll = pick(poi.avgPrice, poi.averagePrice, poi.price, heritage && heritage.avgPrice, heritage && heritage.averagePrice, heritage && heritage.price);
                if (avgFromAll != null) {
                  _this2.poi.avgPrice = avgFromAll;
                }

                // site_type：ORIGIN / BASE / MUSEUM 等，映射成中文标签；没有时兼容旧的 category/type
                siteType = pick(poi.site_type, heritage && heritage.site_type);
                if (siteType) {
                  typeTextMap = {
                    ORIGIN: '发源地',
                    BASE: '体验基地',
                    MUSEUM: '展馆'
                  };
                  key = String(siteType).toUpperCase();
                  _this2.poi.category = typeTextMap[key] || _this2.poi.category || '非遗体验地';
                } else {
                  categoryFromAll = pick(poi.categoryName || poi.category || poi.type, heritage && (heritage.categoryName || heritage.category || heritage.type));
                  if (categoryFromAll) {
                    _this2.poi.category = categoryFromAll;
                  }
                }
                addressFromAll = pick(poi.address || poi.fullAddress || poi.full_address, heritage && (heritage.address || heritage.fullAddress || heritage.full_address));
                if (addressFromAll) {
                  _this2.poi.address = addressFromAll;
                }

                // 单独保存fullAddress用于显示
                if (poi.fullAddress || poi.full_address) {
                  _this2.poi.fullAddress = poi.fullAddress || poi.full_address;
                }

                // 体验基地 & 非遗项目详情字段
                if (heritage) {
                  if (heritage.category) {
                    _this2.heritageDetail.category = heritage.category;
                  }
                  if (heritage.historicalOrigin) {
                    _this2.heritageDetail.historicalOrigin = heritage.historicalOrigin;
                  }
                  if (heritage.contentIntroduction) {
                    _this2.heritageDetail.contentIntroduction = heritage.contentIntroduction;
                  }
                  if (heritage.videoUrl) {
                    _this2.heritageDetail.videoUrl = heritage.videoUrl;
                  }
                }
                if (poi.siteName || poi.site_name) {
                  _this2.heritageDetail.siteName = poi.siteName || poi.site_name;
                }
                if (poi.basicIntro) {
                  _this2.heritageDetail.basicIntro = poi.basicIntro;
                }
                if (typeof detail.intro === 'string') {
                  _this2.introText = detail.intro;
                }
                if (typeof detail.tips === 'string') {
                  _this2.tipsText = detail.tips;
                }
                distanceFromAll = pick(poi.distance, heritage && heritage.distance);
                if (distanceFromAll != null) {
                  _this2.poi.distance = distanceFromAll;
                }
                latFromAll = pick(poi.latitude, heritage && heritage.latitude);
                if (latFromAll != null) {
                  _this2.poi.latitude = latFromAll;
                }
                lngFromAll = pick(poi.longitude, heritage && heritage.longitude);
                if (lngFromAll != null) {
                  _this2.poi.longitude = lngFromAll;
                }
                scoreFromAll = pick(poi.score, poi.rating, heritage && heritage.score, heritage && heritage.rating);
                if (scoreFromAll != null) {
                  _this2.poi.score = scoreFromAll;
                }
                phoneFromAll = pick(poi.tel || poi.phone, heritage && (heritage.tel || heritage.phone));
                if (phoneFromAll) {
                  _this2.poi.phone = phoneFromAll;
                }
                businessStatusFromAll = pick(poi.businessStatus, heritage && heritage.businessStatus);
                if (businessStatusFromAll !== undefined) {
                  _this2.poi.businessStatus = businessStatusFromAll;
                }
                openStatusFromAll = pick(poi.openStatus, heritage && heritage.openStatus);
                if (openStatusFromAll !== undefined) {
                  _this2.poi.openStatus = openStatusFromAll;
                }

                // 标签：兼容数组或字符串形式，支持 heritage.tags / heritage.tag
                tagsSource = null;
                if (Array.isArray(poi.tags)) {
                  tagsSource = poi.tags;
                } else if (heritage && Array.isArray(heritage.tags)) {
                  tagsSource = heritage.tags;
                }
                if (tagsSource) {
                  _this2.tags = tagsSource;
                } else {
                  rawTags = pick(poi.tags || poi.tag, heritage && (heritage.tags || heritage.tag));
                  if (rawTags) {
                    list = String(rawTags).split(/[，,、\/:;]/).map(function (s) {
                      return s.trim();
                    }).filter(Boolean);
                    if (list.length) {
                      _this2.tags = list;
                    }
                  }
                }
                if (Array.isArray(detail.facilityTags)) {
                  _this2.facilityTags = detail.facilityTags;
                } else if (Array.isArray(poi.facilityTags)) {
                  _this2.facilityTags = poi.facilityTags;
                } else if (heritage && Array.isArray(heritage.facilityTags)) {
                  _this2.facilityTags = heritage.facilityTags;
                }
                businessTimeFromAll = pick(detail.businessTime, poi.businessTime, poi.openingHours, heritage && (heritage.businessTime || heritage.openingHours));
                if (businessTimeFromAll) {
                  _this2.businessTimeText = businessTimeFromAll;
                }
                if (Array.isArray(detail.comments) && detail.comments.length) {
                  _this2.comments = detail.comments;
                }
                if (_this2.poi.name) {
                  uni.setNavigationBarTitle({
                    title: _this2.poi.name
                  });
                }
                _context.next = 65;
                break;
              case 62:
                _context.prev = 62;
                _context.t0 = _context["catch"](2);
                console.warn('[HeritagePoiDetail] fetchPoiDetail fail:', _context.t0);
              case 65:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 62]]);
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
    navigateToPoi: function navigateToPoi() {
      var _this3 = this;
      if (!this.poi.latitude || !this.poi.longitude) {
        uni.showToast({
          title: '暂无位置信息',
          icon: 'none'
        });
        return;
      }
      var name = this.poi.name || '目的地';
      var address = this.poi.address || '';

      // 优先使用腾讯位置服务路线规划插件
      if (typeof wx !== 'undefined' && wx.navigateTo && AMAP_ROUTE_PLAN_KEY) {
        try {
          var endPoint = JSON.stringify({
            name: name,
            latitude: Number(this.poi.latitude),
            longitude: Number(this.poi.longitude)
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
              console.warn('[HeritagePoiDetail] 路线规划插件失败，使用微信原生地图:', err);
              uni.openLocation({
                latitude: Number(_this3.poi.latitude),
                longitude: Number(_this3.poi.longitude),
                name: name,
                address: address,
                scale: 18
              });
            }
          });
          return;
        } catch (e) {
          // 插件失败时回退
          console.warn('[HeritagePoiDetail] 路线规划插件异常，使用微信原生地图:', e);
        }
      }

      // 回退：打开微信原生地图
      uni.openLocation({
        latitude: Number(this.poi.latitude),
        longitude: Number(this.poi.longitude),
        name: name,
        address: address,
        scale: 18
      });
    },
    openHeritageVideo: function openHeritageVideo() {
      var url = this.heritageDetail && this.heritageDetail.videoUrl;
      if (!url) {
        uni.showToast({
          title: '暂无视频链接',
          icon: 'none'
        });
        return;
      }
      try {
        uni.setClipboardData({
          data: String(url),
          success: function success() {
            uni.showToast({
              title: '视频链接已复制，可在浏览器打开',
              icon: 'none'
            });
          }
        });
      } catch (e) {
        uni.showToast({
          title: '复制失败，请稍后再试',
          icon: 'none'
        });
      }
    },
    callPhone: function callPhone() {
      var raw = this.poi && this.poi.phone;
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
    previewCommentImages: function previewCommentImages(item, index) {
      if (!item || !Array.isArray(item.images) || !item.images.length) {
        return;
      }
      uni.previewImage({
        current: item.images[index] || item.images[0],
        urls: item.images
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
                if (!(!_this4.poi || !_this4.poi.id)) {
                  _context2.next = 3;
                  break;
                }
                uni.showToast({
                  title: '地点信息未就绪',
                  icon: 'none'
                });
                return _context2.abrupt("return");
              case 3:
                current = !!_this4.isFavorited;
                target = !current;
                _context2.prev = 5;
                _context2.next = 8;
                return updatePoiFavorite({
                  poiId: _this4.poi.id,
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
                console.warn('[HeritagePoiDetail] toggleFavorite fail:', _context2.t0);
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
                if (!(!_this5.poi || !_this5.poi.id)) {
                  _context3.next = 3;
                  break;
                }
                uni.showToast({
                  title: '地点信息未就绪',
                  icon: 'none'
                });
                return _context3.abrupt("return");
              case 3:
                current = !!_this5.isExperienced;
                target = !current;
                _context3.prev = 5;
                _context3.next = 8;
                return updatePoiExperience({
                  poiId: _this5.poi.id,
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
                console.warn('[HeritagePoiDetail] toggleExperienced fail:', _context3.t0);
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
    sharePoi: function sharePoi() {
      // 微信小程序中，点击分享按钮会自动触发 onShareAppMessage

      console.log('[HeritagePoiDetail] 用户点击分享按钮，非遗ID:', this.poi.id, '非遗名称:', this.poi.name);
    },
    // 微信小程序分享配置
    onShareAppMessage: function onShareAppMessage(options) {
      console.log('[HeritagePoiDetail] onShareAppMessage 被调用', options);
      if (!this.poi || !this.poi.id) {
        console.warn('[HeritagePoiDetail] 分享时非遗信息为空');
        return {
          title: '这个非遗好有体验的意义，让我们一起去吧~',
          path: '/pages/index/HeritagePoiDetail'
        };
      }

      // 构建分享路径
      var sharePath = "/pages/index/HeritagePoiDetail?id=".concat(encodeURIComponent(this.poi.id));

      // 分享标题：使用指定的文案格式
      var heritageName = this.poi.name || '非遗体验中心';
      var shareTitle = "\u8FD9\u4E2A".concat(heritageName, "\u597D\u6709\u4F53\u9A8C\u7684\u610F\u4E49\uFF0C\u8BA9\u6211\u4EEC\u4E00\u8D77\u53BB\u5427~");

      // 分享图片：只有当有真实图片时才设置，避免显示占位符
      var heroImg = this.heroImage || this.poi.cover || '';
      var defaultPlaceholder = '/static/assets/热门推荐.png';
      // 只有当图片存在且不是默认占位图时才设置 imageUrl
      var shareImageUrl = heroImg && heroImg !== defaultPlaceholder && heroImg.trim() !== '' ? heroImg : undefined;
      console.log('[HeritagePoiDetail] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        poiId: this.poi.id,
        heritageName: heritageName,
        imageUrl: shareImageUrl || '未设置（无图片）'
      });

      // 记录分享行为
      this.recordShareBehavior(shareTitle, sharePath).catch(function (err) {
        console.error('[HeritagePoiDetail] 记录分享行为失败', err);
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
                if (_this6.poi.id) {
                  _context4.next = 3;
                  break;
                }
                return _context4.abrupt("return");
              case 3:
                _require2 = __webpack_require__(/*! ../../api/share.js */ 87), recordShare = _require2.recordShare;
                _context4.next = 6;
                return recordShare({
                  targetId: _this6.poi.id,
                  targetType: 'HERITAGE_POI',
                  shareChannel: 'WECHAT_SHARE',
                  shareTitle: title,
                  shareDesc: _this6.poi.address || _this6.poi.fullAddress || '',
                  shareCover: _this6.heroImage || _this6.poi.cover,
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
                console.warn('[HeritagePoiDetail] 记录分享行为失败:', _context4.t0);
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
        if (!this.poi.id) return;
        var key = "heritage_poi_state_".concat(this.poi.id);
        var value = uni.getStorageSync(key);
        if (value && (0, _typeof2.default)(value) === 'object') {
          this.isFavorited = !!value.isFavorited;
          this.isExperienced = !!value.isExperienced;
        }
      } catch (e) {}
    },
    saveLocalState: function saveLocalState() {
      try {
        if (!this.poi.id) return;
        var key = "heritage_poi_state_".concat(this.poi.id);
        var value = {
          isFavorited: this.isFavorited,
          isExperienced: this.isExperienced
        };
        uni.setStorageSync(key, value);

        // 保存到统一的足迹存储
        if (this.isFavorited) {
          this.saveToFootprints('favorite', {
            id: this.poi.id,
            name: this.poi.name || '',
            category: this.poi.category || '非遗体验',
            city: this.extractCityFromPoi(),
            cover: this.poi.cover || '',
            address: this.poi.address || this.poi.fullAddress || '',
            type: 'heritage',
            timestamp: Date.now()
          });
        } else {
          this.removeFromFootprints('favorite', this.poi.id);
        }
        if (this.isExperienced) {
          this.saveToFootprints('experienced', {
            id: this.poi.id,
            name: this.poi.name || '',
            category: this.poi.category || '非遗体验',
            city: this.extractCityFromPoi(),
            cover: this.poi.cover || '',
            address: this.poi.address || this.poi.fullAddress || '',
            type: 'heritage',
            timestamp: Date.now()
          });
        } else {
          this.removeFromFootprints('experienced', this.poi.id);
        }
      } catch (e) {
        console.warn('[HeritagePoiDetail] saveLocalState error:', e);
      }
    },
    extractCityFromPoi: function extractCityFromPoi() {
      var city = this.poi.city || '';
      if (city) return city.replace(/市$/, '');
      var address = this.poi.address || this.poi.fullAddress || '';
      var cityMatch = address.match(/(西安|宝鸡|咸阳|渭南|延安|榆林|汉中|安康|商洛|铜川)/);
      return cityMatch ? cityMatch[1] : '';
    },
    saveToFootprints: function saveToFootprints(category, data) {
      try {
        var key = "footprints_".concat(category, "_heritage");
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
          return item.id === data.id && item.type === 'heritage';
        });
        var unifiedItem = _objectSpread(_objectSpread({}, data), {}, {
          type: 'heritage',
          poiType: 'heritage'
        });
        if (unifiedIndex >= 0) {
          unifiedList[unifiedIndex] = unifiedItem;
        } else {
          unifiedList.push(unifiedItem);
        }
        uni.setStorageSync(unifiedKey, unifiedList);
      } catch (e) {
        console.warn('[HeritagePoiDetail] saveToFootprints error:', e);
      }
    },
    removeFromFootprints: function removeFromFootprints(category, id) {
      try {
        var key = "footprints_".concat(category, "_heritage");
        var list = uni.getStorageSync(key) || [];
        var filtered = list.filter(function (item) {
          return item.id !== id;
        });
        uni.setStorageSync(key, filtered);

        // 同时从统一足迹存储中移除
        var unifiedKey = "poi_footprints_".concat(category);
        var unifiedList = uni.getStorageSync(unifiedKey) || [];
        var unifiedFiltered = unifiedList.filter(function (item) {
          return !(item.id === id && item.type === 'heritage');
        });
        uni.setStorageSync(unifiedKey, unifiedFiltered);
      } catch (e) {
        console.warn('[HeritagePoiDetail] removeFromFootprints error:', e);
      }
    },
    mockCommentsIfEmpty: function mockCommentsIfEmpty() {
      if (!this.comments || this.comments.length === 0) {
        var today = new Date();
        var dateText = "".concat(today.getFullYear(), "-").concat(String(today.getMonth() + 1).padStart(2, '0'), "-").concat(String(today.getDate()).padStart(2, '0'));
        this.comments = [{
          id: 'c1',
          userName: '亲子游客',
          score: 4.8,
          date: dateText,
          content: '老师很耐心，体验项目丰富，小朋友玩得很开心，强烈推荐来打卡～',
          images: []
        }, {
          id: 'c2',
          userName: '手作爱好者',
          score: 4.6,
          date: dateText,
          content: '环境干净舒适，非遗老师讲得很细致，成品也很有纪念意义。',
          images: []
        }];
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 106:
/*!***************************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/HeritagePoiDetail.vue?vue&type=style&index=0&id=561a29f6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_style_index_0_id_561a29f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./HeritagePoiDetail.vue?vue&type=style&index=0&id=561a29f6&lang=scss&scoped=true& */ 107);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_style_index_0_id_561a29f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_style_index_0_id_561a29f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_style_index_0_id_561a29f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_style_index_0_id_561a29f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_HeritagePoiDetail_vue_vue_type_style_index_0_id_561a29f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 107:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/HeritagePoiDetail.vue?vue&type=style&index=0&id=561a29f6&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[100,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/HeritagePoiDetail.js.map
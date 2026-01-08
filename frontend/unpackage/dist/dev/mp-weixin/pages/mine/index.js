(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/index"],{

/***/ 167:
/*!***********************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Fmine%2Findex"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/index.vue */ 168));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 168:
/*!****************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/index.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4bd6864f&scoped=true& */ 169);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 171);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_4bd6864f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4bd6864f&lang=scss&scoped=true& */ 182);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4bd6864f",
  null,
  false,
  _index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/mine/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 169:
/*!***********************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/index.vue?vue&type=template&id=4bd6864f&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=4bd6864f&scoped=true& */ 170);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_4bd6864f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 170:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/index.vue?vue&type=template&id=4bd6864f&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.isLoggedIn && _vm.unlockedAchievementTags.length > 0
  var g1 = _vm.isLoggedIn && _vm.allMedals.length > 4
  var g2 = _vm.showMedalsExpanded ? _vm.unlockedMedals.length : null
  var g3 = _vm.showMedalsExpanded ? _vm.lockedMedals.length : null
  var g4 = _vm.showDialectDialog
    ? _vm.customTtsLoading || !_vm.customPlainText.trim()
    : null
  var g5 = _vm.showDialectDialog ? _vm.dialectList.length : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event, medal) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        medal = _temp2.medal
      var _temp, _temp2
      medal.unlocked ? _vm.showMedalDetail(medal) : null
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 171:
/*!*****************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 172);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 172:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _noodleCut = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/noodle-cut-1.svg */ 57));
var _noodleCut2 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/noodle-cut-2.svg */ 58));
var _noodleCut3 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/noodle-cut-3.svg */ 59));
var _imageMap = __webpack_require__(/*! ../../api/imageMap.js */ 47);
var _zonghepingjia = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/zonghepingjia.png */ 164));
var _daka = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/daka.png */ 173));
var _zuji = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/zuji.png */ 174));
var _我的 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/我的.png */ 175));
var _tuijian = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/tuijian.png */ 176));
var _关于 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/关于.png */ 177));
var _用户建议 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/用户建议.png */ 178));
var _设置 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/设置.png */ 179));
var _竞猜 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/竞猜.png */ 180));
var _语言培训 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/语言培训.png */ 181));
var _user = __webpack_require__(/*! ../../api/user.js */ 44);
var _tts = __webpack_require__(/*! ../../api/tts.js */ 61);
var _shanxiDialectMap = __webpack_require__(/*! ../../api/shanxiDialectMap.js */ 62);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// 全局方言音频上下文，避免重复创建
var dialectAudioCtx = null;
var _default = {
  name: 'MineIndex',
  data: function data() {
    return {
      IMG: _imageMap.IMG,
      isLoggedIn: false,
      userInfo: {},
      defaultAvatar: _imageMap.IMG.retouch_2025112414394823,
      // 图标资源
      iconZonghepingjia: _zonghepingjia.default,
      iconDaka: _daka.default,
      iconZuji: _zuji.default,
      iconWode: _我的.default,
      iconTuijian: _tuijian.default,
      iconGuanyu: _关于.default,
      iconYonghujianyi: _用户建议.default,
      iconShezhi: _设置.default,
      iconJingcai: _竞猜.default,
      iconYuyanpeixun: _语言培训.default,
      // 底部导航图标
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
      activeNavId: 'profile',
      // 用户统计数据

      checkInCount: 0,
      checklistCount: 0,
      continuousDays: 0,
      visitedCount: 0,
      citiesCount: 0,
      scenicCount: 0,
      heritageCount: 0,
      heritageCollect: 0,
      recommendCount: 0,
      commentCount: 0,
      userLevel: 'Lv.1 初来乍到',
      latestChecklist: '我的美食清单',
      // 成就标签
      achievementTags: [],
      // 勋章系统
      medals: [],
      showMedalsExpanded: false,
      // 默认显示的勋章数量
      defaultMedalsDisplayCount: 4,
      // 后端返回的勋章数据（临时存储）
      backendMedals: [],
      // 后端返回的成就数据（临时存储）
      backendAchievements: [],
      // 猜粗细 · 面条截面数据
      showGuessModal: false,
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
      // 面语 · 方言卡弹窗数据
      showMianyuDialog: false,
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
      // 方言收集器数据
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
      // 方言语音合成功能状态
      dialectTtsLoadingId: null,
      dialectPlayingId: null,
      customPlainText: '',
      customDialectText: '',
      customTtsLoading: false,
      // 弹窗控制
      showDialectDialog: false,
      showMedalDialog: false,
      selectedMedal: null
    };
  },
  computed: {
    // 已获得的勋章（展示在前面）
    unlockedMedals: function unlockedMedals() {
      return this.medals.filter(function (m) {
        return m.unlocked;
      }).sort(function (a, b) {
        // 按解锁时间排序，最新的在前
        var timeA = a.unlockTime || '';
        var timeB = b.unlockTime || '';
        return timeB.localeCompare(timeA);
      });
    },
    // 未获得的勋章
    lockedMedals: function lockedMedals() {
      return this.medals.filter(function (m) {
        return !m.unlocked;
      });
    },
    // 所有勋章（已获得的在前）
    allMedals: function allMedals() {
      var unlocked = this.unlockedMedals;
      var locked = this.lockedMedals;
      return [].concat((0, _toConsumableArray2.default)(unlocked), (0, _toConsumableArray2.default)(locked));
    },
    // 默认显示的勋章（固定显示4个位置，已获得的显示彩色，不足4个用灰色占位）
    displayedMedals: function displayedMedals() {
      if (this.showMedalsExpanded) {
        return this.allMedals;
      }
      // 获取已获得的勋章（最多4个）
      var unlocked = this.unlockedMedals.slice(0, 4);
      // 如果已获得的少于4个，用灰色占位符填充
      var result = (0, _toConsumableArray2.default)(unlocked);
      while (result.length < 4) {
        result.push({
          id: "placeholder-".concat(result.length),
          name: '未获得',
          icon: '🔒',
          unlocked: false,
          description: '继续努力解锁更多勋章'
        });
      }
      return result;
    },
    // 已获得的成就标签
    unlockedAchievementTags: function unlockedAchievementTags() {
      return this.achievementTags.filter(function (tag) {
        return tag.unlocked;
      });
    }
  },
  onLoad: function onLoad(query) {
    this.checkLoginStatus();
    this.loadUserData();
    if (query && (query.tool === 'dialect' || query.tool === 'dialectCollector')) {
      this.openDialectTool();
    } else if (query && (query.tool === 'foodmap' || query.tool === 'foodMap')) {
      this.openFoodMap();
    }
  },
  onShow: function onShow() {
    var _this = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.checkLoginStatus();
              // 先从缓存读取最新的足迹统计数据，确保与 food-footprints.vue 同步
              _this.refreshFootprintsStatsFromCache();
              // loadUserData 中已经同步加载足迹统计数据，确保数据一致
              // 等待数据加载完成，确保显示的数据与统计页面一致
              _context.next = 4;
              return _this.loadUserData();
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
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
    checkLoginStatus: function checkLoginStatus() {
      try {
        // 检查是否有 token（更可靠的登录状态判断）
        var token = uni.getStorageSync('token');
        var isLoggedIn = uni.getStorageSync('isLoggedIn') || false;
        this.isLoggedIn = !!(token && isLoggedIn);
        if (this.isLoggedIn) {
          // 尝试从本地存储读取用户信息（作为初始值）
          try {
            var profile = uni.getStorageSync('profile');
            if (profile) {
              this.userInfo = profile;
            }
          } catch (_) {}
        } else {
          // 未登录时清空用户信息
          this.userInfo = {};
          // 清空统计数据
          this.checkInCount = 0;
          this.checklistCount = 0;
          this.continuousDays = 0;
          this.visitedCount = 0;
          this.citiesCount = 0;
          this.scenicCount = 0;
          this.heritageCount = 0;
          this.heritageCollect = 0;
          this.achievementTags = [];
          this.medals = [];
        }
      } catch (e) {
        console.error('检查登录状态失败:', e);
        this.isLoggedIn = false;
        this.userInfo = {};
      }
    },
    handleHeaderClick: function handleHeaderClick() {
      if (!this.isLoggedIn) {
        uni.navigateTo({
          url: '/pages/login/index'
        });
      }
    },
    loadUserData: function loadUserData() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var profileResp, profile, _profile, achievementsResp, achievements, firstCheckin, fiveCheckins, tenCheckins, badgesResp, badges, badgeMap, _require, getAllMyChecklists, checklistsResp, lists, sorted, _require2, getMyHeritageRecords, heritageResp, _require3, getMyRecommendations, getMyComments, _yield$Promise$all, _yield$Promise$all2, recommendations, comments, _require4, loadMyCheckins, checkinsResp, dates, raw, allPosts, userData;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.isLoggedIn) {
                  _context2.next = 12;
                  break;
                }
                // 重置为默认值
                _this2.checkInCount = 0;
                _this2.checklistCount = 0;
                _this2.continuousDays = 0;
                _this2.visitedCount = 0;
                _this2.citiesCount = 0;
                _this2.scenicCount = 0;
                _this2.heritageCount = 0;
                _this2.heritageCollect = 0;
                _this2.achievementTags = [];
                _this2.medals = [];
                return _context2.abrupt("return");
              case 12:
                _context2.prev = 12;
                _context2.prev = 13;
                _context2.next = 16;
                return (0, _user.getUserProfile)();
              case 16:
                profileResp = _context2.sent;
                if (profileResp && profileResp.success && profileResp.data) {
                  profile = profileResp.data; // 更新用户信息
                  _this2.userInfo = _objectSpread({
                    nickName: profile.nickname || profile.nickName || '',
                    avatarUrl: profile.avatarUrl || '',
                    intro: '探索陕西美食文化'
                  }, profile);
                  // 保存到本地存储
                  try {
                    uni.setStorageSync('profile', _this2.userInfo);
                  } catch (_) {}
                }
                _context2.next = 28;
                break;
              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](13);
                console.error('[mine/index] ❌ 获取用户信息失败:', _context2.t0);
                console.error('[mine/index]   接口: GET /api/user/me');
                console.error('[mine/index]   状态码:', _context2.t0.statusCode || 'N/A');
                console.error('[mine/index]   错误消息:', _context2.t0.message || _context2.t0.errMsg || '未知错误');
                if (_context2.t0.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t0.responseData);
                }
                // 如果接口失败，尝试从本地存储读取
                try {
                  _profile = uni.getStorageSync('profile');
                  if (_profile) {
                    _this2.userInfo = _profile;
                  }
                } catch (_) {}
              case 28:
                _context2.prev = 28;
                _context2.next = 31;
                return (0, _user.getAchievements)();
              case 31:
                achievementsResp = _context2.sent;
                if (achievementsResp && achievementsResp.success && achievementsResp.data) {
                  achievements = achievementsResp.data; // 保存后端成就数据，供 updateAchievements 使用
                  _this2.backendAchievements = achievements.map(function (item, index) {
                    return {
                      id: index + 1,
                      name: item.name,
                      unlocked: item.achieved || false,
                      code: item.code,
                      description: item.description
                    };
                  });

                  // 从成就数据推断打卡数（根据成就达成状态）
                  // 后端成就：FIRST_CHECKIN(1次), FIVE_CHECKINS(5次), TEN_CHECKINS(10次)
                  firstCheckin = achievements.find(function (a) {
                    return a.code === 'FIRST_CHECKIN';
                  });
                  fiveCheckins = achievements.find(function (a) {
                    return a.code === 'FIVE_CHECKINS';
                  });
                  tenCheckins = achievements.find(function (a) {
                    return a.code === 'TEN_CHECKINS';
                  });
                  if (tenCheckins && tenCheckins.achieved) {
                    _this2.checkInCount = Math.max(_this2.checkInCount, 10);
                  } else if (fiveCheckins && fiveCheckins.achieved) {
                    _this2.checkInCount = Math.max(_this2.checkInCount, 5);
                  } else if (firstCheckin && firstCheckin.achieved) {
                    _this2.checkInCount = Math.max(_this2.checkInCount, 1);
                  }

                  // 立即更新成就标签（优先显示，不等待其他数据加载完成）
                  _this2.updateAchievements();
                } else {
                  _this2.backendAchievements = [];
                  // 即使没有后端数据，也先更新一次（使用前端计算的成就）
                  _this2.updateAchievements();
                }
                _context2.next = 44;
                break;
              case 35:
                _context2.prev = 35;
                _context2.t1 = _context2["catch"](28);
                console.error('[mine/index] ❌ 获取用户成就失败:', _context2.t1);
                console.error('[mine/index]   接口: GET /api/user/achievements');
                console.error('[mine/index]   状态码:', _context2.t1.statusCode || 'N/A');
                console.error('[mine/index]   错误消息:', _context2.t1.message || _context2.t1.errMsg || '未知错误');
                if (_context2.t1.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t1.responseData);
                }
                _this2.backendAchievements = [];
                // 即使接口失败，也先更新一次（使用前端计算的成就）
                _this2.updateAchievements();
              case 44:
                _context2.prev = 44;
                _context2.next = 47;
                return (0, _user.getBadges)();
              case 47:
                badgesResp = _context2.sent;
                if (badgesResp && badgesResp.success && badgesResp.data) {
                  badges = badgesResp.data; // 映射后端徽章数据到前端格式
                  // 根据徽章 code 匹配对应的图标和名称
                  badgeMap = {
                    'BADGE_CHECKIN_START': {
                      name: '初心',
                      icon: '🌟',
                      description: '完成第一次非遗相关打卡'
                    },
                    'BADGE_CHECKIN_LOVER': {
                      name: '探索者',
                      icon: '🧭',
                      description: '累计打卡 5 次'
                    },
                    'BADGE_CHECKIN_MASTER': {
                      name: '守护者',
                      icon: '🎭',
                      description: '累计打卡 10 次'
                    }
                  }; // 保存后端勋章数据，供 updateMedals 使用
                  _this2.backendMedals = badges.map(function (item, index) {
                    var badgeInfo = badgeMap[item.code] || {
                      name: item.name,
                      icon: '🏆',
                      description: item.description
                    };
                    return {
                      id: index + 1,
                      name: badgeInfo.name,
                      icon: badgeInfo.icon,
                      unlocked: item.achieved || false,
                      description: item.description || badgeInfo.description,
                      unlockTime: item.achieved ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
                      code: item.code
                    };
                  });
                } else {
                  _this2.backendMedals = [];
                }
                _context2.next = 59;
                break;
              case 51:
                _context2.prev = 51;
                _context2.t2 = _context2["catch"](44);
                console.error('[mine/index] ❌ 获取用户徽章失败:', _context2.t2);
                console.error('[mine/index]   接口: GET /api/user/badges');
                console.error('[mine/index]   状态码:', _context2.t2.statusCode || 'N/A');
                console.error('[mine/index]   错误消息:', _context2.t2.message || _context2.t2.errMsg || '未知错误');
                if (_context2.t2.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t2.responseData);
                }
                _this2.backendMedals = [];
              case 59:
                _context2.prev = 59;
                _require = __webpack_require__(/*! ../../api/checklist.js */ 89), getAllMyChecklists = _require.getAllMyChecklists;
                _context2.next = 63;
                return getAllMyChecklists({
                  page: 1,
                  size: 1000
                });
              case 63:
                checklistsResp = _context2.sent;
                lists = [];
                if (Array.isArray(checklistsResp)) {
                  lists = checklistsResp;
                } else if (checklistsResp && checklistsResp.data) {
                  if (Array.isArray(checklistsResp.data)) {
                    lists = checklistsResp.data;
                  } else if (checklistsResp.data.list && Array.isArray(checklistsResp.data.list)) {
                    lists = checklistsResp.data.list;
                  }
                }
                _this2.checklistCount = lists.length;
                if (lists.length > 0) {
                  // 按日期排序，获取最新的清单
                  sorted = lists.sort(function (a, b) {
                    return new Date(b.date || 0) - new Date(a.date || 0);
                  });
                  _this2.latestChecklist = sorted[0].name || '我的美食清单';
                }
                _context2.next = 77;
                break;
              case 70:
                _context2.prev = 70;
                _context2.t3 = _context2["catch"](59);
                console.error('[mine/index] ❌ 获取清单统计失败:', _context2.t3);
                console.error('[mine/index]   接口: GET /api/checklists/all');
                console.error('[mine/index]   状态码:', _context2.t3.statusCode || 'N/A');
                console.error('[mine/index]   错误消息:', _context2.t3.message || _context2.t3.errMsg || '未知错误');
                if (_context2.t3.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t3.responseData);
                }
              case 77:
                _context2.prev = 77;
                _require2 = __webpack_require__(/*! ../../api/heritage.js */ 114), getMyHeritageRecords = _require2.getMyHeritageRecords;
                _context2.next = 81;
                return getMyHeritageRecords();
              case 81:
                heritageResp = _context2.sent;
                _this2.heritageCount = heritageResp.experiencedCount || 0;
                _this2.heritageCollect = heritageResp.favoriteCount || 0;
                _context2.next = 93;
                break;
              case 86:
                _context2.prev = 86;
                _context2.t4 = _context2["catch"](77);
                console.error('[mine/index] ❌ 获取非遗统计失败:', _context2.t4);
                console.error('[mine/index]   接口: GET /api/heritage/records');
                console.error('[mine/index]   状态码:', _context2.t4.statusCode || 'N/A');
                console.error('[mine/index]   错误消息:', _context2.t4.message || _context2.t4.errMsg || '未知错误');
                if (_context2.t4.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t4.responseData);
                }
              case 93:
                _context2.prev = 93;
                _require3 = __webpack_require__(/*! ../../api/map.js */ 77), getMyRecommendations = _require3.getMyRecommendations, getMyComments = _require3.getMyComments;
                _context2.next = 97;
                return Promise.all([getMyRecommendations({
                  page: 1,
                  size: 100
                }).catch(function () {
                  return [];
                }), getMyComments({
                  page: 1,
                  size: 100
                }).catch(function () {
                  return [];
                })]);
              case 97:
                _yield$Promise$all = _context2.sent;
                _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 2);
                recommendations = _yield$Promise$all2[0];
                comments = _yield$Promise$all2[1];
                _this2.recommendCount = Array.isArray(recommendations) ? recommendations.length : 0;
                _this2.commentCount = Array.isArray(comments) ? comments.length : 0;
                _context2.next = 114;
                break;
              case 105:
                _context2.prev = 105;
                _context2.t5 = _context2["catch"](93);
                console.error('[mine/index] ❌ 获取推荐和评论统计失败:', _context2.t5);
                console.error('[mine/index]   接口: GET /api/map/recommendations 或 GET /api/map/comments');
                console.error('[mine/index]   状态码:', _context2.t5.statusCode || 'N/A');
                console.error('[mine/index]   错误消息:', _context2.t5.message || _context2.t5.errMsg || '未知错误');
                if (_context2.t5.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t5.responseData);
                }
                _this2.recommendCount = 0;
                _this2.commentCount = 0;
              case 114:
                _context2.prev = 114;
                _require4 = __webpack_require__(/*! ../../api/checkin.js */ 78), loadMyCheckins = _require4.loadMyCheckins;
                _context2.next = 118;
                return loadMyCheckins(1, 1000);
              case 118:
                checkinsResp = _context2.sent;
                if (Array.isArray(checkinsResp)) {
                  _this2.checkInCount = checkinsResp.length;
                  // 计算连续打卡天数（简化版：统计不同日期）
                  dates = new Set();
                  checkinsResp.forEach(function (item) {
                    var date = item.createdAt || item.createTime || item.timestamp;
                    if (date) {
                      var d = new Date(date);
                      var dateStr = "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'), "-").concat(String(d.getDate()).padStart(2, '0'));
                      dates.add(dateStr);
                    }
                  });
                  _this2.continuousDays = dates.size;
                }
                _context2.next = 130;
                break;
              case 122:
                _context2.prev = 122;
                _context2.t6 = _context2["catch"](114);
                console.error('[mine/index] ❌ 获取打卡统计失败:', _context2.t6);
                console.error('[mine/index]   接口: GET /api/checkin/my');
                console.error('[mine/index]   状态码:', _context2.t6.statusCode || 'N/A');
                console.error('[mine/index]   错误消息:', _context2.t6.message || _context2.t6.errMsg || '未知错误');
                if (_context2.t6.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t6.responseData);
                }
                // 如果接口失败，尝试从本地存储读取
                try {
                  raw = uni.getStorageSync('noodle_posts_all');
                  allPosts = Array.isArray(raw) ? raw : [];
                  if (_this2.checkInCount === 0) {
                    _this2.checkInCount = allPosts.length;
                  }
                } catch (_) {}
              case 130:
                _context2.prev = 130;
                _context2.next = 133;
                return _this2.loadFootprintsStats();
              case 133:
                _context2.next = 143;
                break;
              case 135:
                _context2.prev = 135;
                _context2.t7 = _context2["catch"](130);
                console.error('[mine/index] ❌ 加载足迹统计数据失败:', _context2.t7);
                console.error('[mine/index]   接口: GET /api/map/poi-experiences 或 GET /api/heritage/records');
                console.error('[mine/index]   状态码:', _context2.t7.statusCode || 'N/A');
                console.error('[mine/index]   错误消息:', _context2.t7.message || _context2.t7.errMsg || '未知错误');
                if (_context2.t7.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t7.responseData);
                }
                // 如果加载失败，才尝试从本地存储加载缓存数据（作为兜底）
                try {
                  userData = uni.getStorageSync('userData');
                  if (userData) {
                    _this2.visitedCount = userData.visitedCount || 0;
                    _this2.citiesCount = userData.citiesCount || 0;
                    _this2.scenicCount = userData.scenicCount || 0;
                  }
                } catch (e) {
                  console.warn('从本地存储加载足迹统计数据失败:', e);
                }
              case 143:
                // 9. 根据打卡数计算用户等级
                if (_this2.checkInCount >= 20) {
                  _this2.userLevel = 'Lv.5 美食大师';
                } else if (_this2.checkInCount >= 10) {
                  _this2.userLevel = 'Lv.4 美食达人';
                } else if (_this2.checkInCount >= 5) {
                  _this2.userLevel = 'Lv.3 美食探索者';
                } else if (_this2.checkInCount >= 1) {
                  _this2.userLevel = 'Lv.2 美食新手';
                } else {
                  _this2.userLevel = 'Lv.1 初来乍到';
                }

                // 10. 更新勋章（成就标签已在步骤2中优先更新）
                _this2.updateMedals();
                _context2.next = 153;
                break;
              case 147:
                _context2.prev = 147;
                _context2.t8 = _context2["catch"](12);
                console.error('[mine/index] ❌ 加载用户数据失败:', _context2.t8);
                console.error('[mine/index]   错误消息:', _context2.t8.message || _context2.t8.errMsg || '未知错误');
                if (_context2.t8.statusCode) {
                  console.error('[mine/index]   状态码:', _context2.t8.statusCode);
                }
                if (_context2.t8.responseData) {
                  console.error('[mine/index]   响应数据:', _context2.t8.responseData);
                }
              case 153:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[12, 147], [13, 20], [28, 35], [44, 51], [59, 70], [77, 86], [93, 105], [114, 122], [130, 135]]);
      }))();
    },
    // 加载足迹统计数据（城市和美食店数量）
    // 使用与 food-footprints.vue 完全相同的数据加载和统计逻辑
    loadFootprintsStats: function loadFootprintsStats() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _require5, getPoiExperiences, _require6, getMyHeritageRecords, CITY_CONFIG, extractCityNameFromPoi, extractCityNameFromHeritage, _yield$Promise$all3, _yield$Promise$all4, foodExperiences, scenicExperiences, heritageExperiences, heritageRecords, visitedList, processExperiences, heritageExperiencedList, experiencedKey, experiencedList, seenKeys, deduplicatedList, citySet, foodCount, scenicCount, heritageCount, userData;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _require5 = __webpack_require__(/*! ../../api/map.js */ 77), getPoiExperiences = _require5.getPoiExperiences;
                _require6 = __webpack_require__(/*! ../../api/heritage.js */ 114), getMyHeritageRecords = _require6.getMyHeritageRecords; // 城市配置（与 food-footprints.vue 保持一致）
                CITY_CONFIG = [{
                  id: 'xian',
                  name: '西安'
                }, {
                  id: 'baoji',
                  name: '宝鸡'
                }, {
                  id: 'xianyang',
                  name: '咸阳'
                }, {
                  id: 'weinan',
                  name: '渭南'
                }, {
                  id: 'yanan',
                  name: '延安'
                }, {
                  id: 'yulin',
                  name: '榆林'
                }, {
                  id: 'hanzhong',
                  name: '汉中'
                }, {
                  id: 'ankang',
                  name: '安康'
                }, {
                  id: 'shangluo',
                  name: '商洛'
                }, {
                  id: 'tongchuan',
                  name: '铜川'
                }]; // 提取城市名称的辅助函数（与 food-footprints.vue 保持一致）
                extractCityNameFromPoi = function extractCityNameFromPoi(item) {
                  var explicitCity = (item.city || '').trim();
                  if (explicitCity) {
                    var cityName = explicitCity.replace(/市$/, '');
                    return CITY_CONFIG.find(function (c) {
                      return c.name === cityName;
                    }) ? cityName : '';
                  }
                  var addressText = (item.address || item.fullAddress || item.full_address || '').trim();
                  if (!addressText) {
                    return '';
                  }
                  var knownCity = CITY_CONFIG.find(function (c) {
                    return addressText.indexOf(c.name) !== -1;
                  });
                  if (knownCity) {
                    return knownCity.name;
                  }
                  var cityIndex = addressText.indexOf('市');
                  if (cityIndex > 0 && cityIndex <= 4) {
                    var _cityName = addressText.slice(0, cityIndex);
                    return CITY_CONFIG.find(function (c) {
                      return c.name === _cityName;
                    }) ? _cityName : '';
                  }
                  return '';
                };
                extractCityNameFromHeritage = function extractCityNameFromHeritage(item) {
                  var explicitCity = (item.city || item.cityName || '').trim();
                  if (explicitCity) {
                    var cityName = explicitCity.replace(/市$/, '');
                    return CITY_CONFIG.find(function (c) {
                      return c.name === cityName;
                    }) ? cityName : '';
                  }
                  var regionText = (item.region || item.area || item.address || '').trim();
                  if (!regionText) {
                    return '';
                  }
                  var knownCity = CITY_CONFIG.find(function (c) {
                    return regionText.indexOf(c.name) !== -1;
                  });
                  if (knownCity) {
                    return knownCity.name;
                  }
                  var cityIndex = regionText.indexOf('市');
                  if (cityIndex > 0 && cityIndex <= 4) {
                    var _cityName2 = regionText.slice(0, cityIndex);
                    return CITY_CONFIG.find(function (c) {
                      return c.name === _cityName2;
                    }) ? _cityName2 : '';
                  }
                  return '';
                }; // 并行加载所有数据（与 food-footprints.vue 保持一致）
                _context3.next = 8;
                return Promise.all([getPoiExperiences({
                  type: 1
                }).catch(function (err) {
                  console.error('[mine/index] ❌ 获取美食体验数据失败:', err);
                  console.error('[mine/index]   接口: GET /api/map/poi-experiences?type=1');
                  console.error('[mine/index]   状态码:', err.statusCode || 'N/A');
                  console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误');
                  if (err.responseData) {
                    console.error('[mine/index]   响应数据:', err.responseData);
                  }
                  return [];
                }), getPoiExperiences({
                  type: 2
                }).catch(function (err) {
                  console.error('[mine/index] ❌ 获取景点体验数据失败:', err);
                  console.error('[mine/index]   接口: GET /api/map/poi-experiences?type=2');
                  console.error('[mine/index]   状态码:', err.statusCode || 'N/A');
                  console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误');
                  if (err.responseData) {
                    console.error('[mine/index]   响应数据:', err.responseData);
                  }
                  return [];
                }), getPoiExperiences({
                  type: 3
                }).catch(function (err) {
                  console.error('[mine/index] ❌ 获取非遗体验数据失败:', err);
                  console.error('[mine/index]   接口: GET /api/map/poi-experiences?type=3');
                  console.error('[mine/index]   状态码:', err.statusCode || 'N/A');
                  console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误');
                  if (err.responseData) {
                    console.error('[mine/index]   响应数据:', err.responseData);
                  }
                  return [];
                }), getMyHeritageRecords().catch(function (err) {
                  console.error('[mine/index] ❌ 获取非遗记录失败:', err);
                  console.error('[mine/index]   接口: GET /api/heritage/records');
                  console.error('[mine/index]   状态码:', err.statusCode || 'N/A');
                  console.error('[mine/index]   错误消息:', err.message || err.errMsg || '未知错误');
                  if (err.responseData) {
                    console.error('[mine/index]   响应数据:', err.responseData);
                  }
                  return {
                    experiencedList: [],
                    favoriteList: []
                  };
                })]);
              case 8:
                _yield$Promise$all3 = _context3.sent;
                _yield$Promise$all4 = (0, _slicedToArray2.default)(_yield$Promise$all3, 4);
                foodExperiences = _yield$Promise$all4[0];
                scenicExperiences = _yield$Promise$all4[1];
                heritageExperiences = _yield$Promise$all4[2];
                heritageRecords = _yield$Promise$all4[3];
                // 构建 visitedList（与 food-footprints.vue 的逻辑一致）
                visitedList = []; // 处理 POI 体验数据
                processExperiences = function processExperiences(experiences, poiType) {
                  return (experiences || []).map(function (item, index) {
                    var safeItem = item || {};
                    var poi = safeItem.poi || safeItem;
                    var poiId = poi.id || safeItem.poiId || safeItem.id;
                    var name = poi.name || safeItem.name || '';
                    if (!name) {
                      if (poiType === 'food') {
                        name = '美食门店';
                      } else if (poiType === 'scenic') {
                        name = '景点';
                      } else {
                        name = '非遗体验中心';
                      }
                    }
                    var cityName = extractCityNameFromPoi(poi) || extractCityNameFromPoi(safeItem);
                    var displayCity = cityName || '';
                    return {
                      uid: 'poi-' + poiType + '-' + (poiId || index),
                      type: poiType,
                      typeLabel: poiType === 'food' ? '美食打卡' : poiType === 'scenic' ? '景点游玩' : '非遗体验',
                      title: name,
                      city: displayCity,
                      poiId: poiId,
                      poiType: poiType
                    };
                  });
                }; // 处理三种类型的体验数据
                visitedList.push.apply(visitedList, (0, _toConsumableArray2.default)(processExperiences(foodExperiences, 'food')).concat((0, _toConsumableArray2.default)(processExperiences(scenicExperiences, 'scenic')), (0, _toConsumableArray2.default)(processExperiences(heritageExperiences, 'heritage'))));

                // 处理非遗体验数据
                heritageExperiencedList = heritageRecords.experiencedList || [];
                heritageExperiencedList.forEach(function (item, index) {
                  var safeItem = item || {};
                  var cityName = extractCityNameFromHeritage(safeItem);
                  var displayCity = cityName || '';
                  var title = safeItem.name || safeItem.heritageName || safeItem.title || '非遗项目';
                  visitedList.push({
                    uid: "heritage-".concat(safeItem.id || safeItem.heritageId || index),
                    id: safeItem.id || safeItem.heritageId || null,
                    type: 'heritage',
                    typeLabel: '非遗体验',
                    title: title,
                    city: displayCity
                  });
                });

                // 如果后端没有数据，尝试从本地存储加载（与 food-footprints.vue 保持一致）
                if (visitedList.length === 0) {
                  try {
                    experiencedKey = 'poi_footprints_experienced';
                    experiencedList = uni.getStorageSync(experiencedKey) || [];
                    if (Array.isArray(experiencedList) && experiencedList.length > 0) {
                      experiencedList.forEach(function (item, index) {
                        var safeItem = item || {};
                        var poiType = safeItem.type || safeItem.poiType || 'food';
                        var cityName = extractCityNameFromPoi(safeItem);
                        var displayCity = cityName || '';
                        var typeLabel = '美食打卡';
                        var type = 'food';
                        if (poiType === 'scenic' || poiType === 2) {
                          typeLabel = '景点游玩';
                          type = 'scenic';
                        } else if (poiType === 'heritage' || poiType === 3) {
                          typeLabel = '非遗体验';
                          type = 'heritage';
                        }
                        var title = safeItem.name || '地点';
                        visitedList.push({
                          uid: "poi-".concat(poiType, "-").concat(safeItem.id || index),
                          type: type,
                          typeLabel: typeLabel,
                          title: title,
                          city: displayCity,
                          poiId: safeItem.id,
                          poiType: poiType
                        });
                      });
                    }
                  } catch (e) {
                    console.warn('从本地存储加载足迹数据失败:', e);
                  }
                }

                // 去重（与 food-footprints.vue 的 mergeVisitedList 逻辑一致）
                seenKeys = new Set();
                deduplicatedList = [];
                visitedList.forEach(function (item) {
                  if (!item) return;
                  var uniqueKey = '';
                  if (item.poiId) {
                    uniqueKey = "".concat(item.type, "-poi-").concat(item.poiId);
                  } else if (item.id) {
                    uniqueKey = "".concat(item.type, "-id-").concat(item.id);
                  } else {
                    uniqueKey = item.uid || "".concat(item.type, "-").concat(item.title || '');
                  }
                  if (!seenKeys.has(uniqueKey)) {
                    seenKeys.add(uniqueKey);
                    deduplicatedList.push(item);
                  }
                });

                // 统计城市和美食店数量（与 food-footprints.vue 的 mergeCityStats 逻辑一致）
                citySet = new Set();
                foodCount = 0;
                scenicCount = 0;
                heritageCount = 0;
                deduplicatedList.forEach(function (item) {
                  if (item.city) {
                    citySet.add(item.city);
                  }
                  if (item.type === 'food') {
                    foodCount++;
                  } else if (item.type === 'scenic') {
                    scenicCount++;
                  } else if (item.type === 'heritage') {
                    heritageCount++;
                  }
                });

                // 更新统计数据（立即更新显示）
                // 使用后端返回的数据（后端数据是最权威的）
                _this3.citiesCount = citySet.size;
                _this3.visitedCount = foodCount;
                _this3.scenicCount = scenicCount;

                // 更新本地缓存（与 food-footprints.vue 保持一致）
                try {
                  uni.setStorageSync('userData', {
                    visitedCount: _this3.visitedCount,
                    citiesCount: _this3.citiesCount,
                    scenicCount: _this3.scenicCount
                  });
                  console.log('[mine/index] 足迹统计数据已更新到缓存:', {
                    citiesCount: _this3.citiesCount,
                    visitedCount: _this3.visitedCount,
                    scenicCount: _this3.scenicCount
                  });
                } catch (e) {
                  console.warn('保存足迹统计数据失败:', e);
                }

                // 更新成就和勋章（因为统计数据已更新）
                _this3.updateAchievements();
                _this3.updateMedals();
                _context3.next = 40;
                break;
              case 36:
                _context3.prev = 36;
                _context3.t0 = _context3["catch"](0);
                console.error('加载足迹统计数据失败:', _context3.t0);
                // 出错时尝试从本地存储读取
                try {
                  userData = uni.getStorageSync('userData');
                  if (userData) {
                    _this3.visitedCount = userData.visitedCount || 0;
                    _this3.citiesCount = userData.citiesCount || 0;
                    _this3.scenicCount = userData.scenicCount || 0;
                  }
                } catch (e) {
                  console.error('从本地存储读取足迹数据失败:', e);
                }
              case 40:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 36]]);
      }))();
    },
    // 从本地缓存刷新足迹统计数据（用于页面显示时同步数据）
    refreshFootprintsStatsFromCache: function refreshFootprintsStatsFromCache() {
      try {
        var userData = uni.getStorageSync('userData');
        if (userData) {
          // 如果缓存中有更新的数据，使用缓存的数据
          if (userData.visitedCount !== undefined) {
            this.visitedCount = userData.visitedCount;
          }
          if (userData.citiesCount !== undefined) {
            this.citiesCount = userData.citiesCount;
          }
          if (userData.scenicCount !== undefined) {
            this.scenicCount = userData.scenicCount;
          }
        }
        // 刷新成就和勋章
        this.updateAchievements();
        this.updateMedals();
      } catch (e) {
        console.warn('从缓存刷新足迹统计数据失败:', e);
      }
    },
    // 更新成就标签
    updateAchievements: function updateAchievements() {
      var achievements = [];

      // 打卡相关成就
      if (this.checkInCount >= 1) {
        achievements.push({
          id: 1,
          name: '打卡先锋',
          unlocked: true
        });
      }
      if (this.checkInCount >= 5) {
        achievements.push({
          id: 2,
          name: '打卡达人',
          unlocked: true
        });
      }
      if (this.checkInCount >= 10) {
        achievements.push({
          id: 3,
          name: '打卡大师',
          unlocked: true
        });
      }
      if (this.checkInCount >= 20) {
        achievements.push({
          id: 4,
          name: '打卡王者',
          unlocked: true
        });
      }

      // 城市相关成就
      if (this.citiesCount >= 3) {
        achievements.push({
          id: 5,
          name: '城市探索者',
          unlocked: true
        });
      }
      if (this.citiesCount >= 5) {
        achievements.push({
          id: 6,
          name: '城市达人',
          unlocked: true
        });
      }
      if (this.citiesCount >= 8) {
        achievements.push({
          id: 7,
          name: '城市大师',
          unlocked: true
        });
      }
      if (this.citiesCount >= 10) {
        achievements.push({
          id: 8,
          name: '三秦通',
          unlocked: true
        });
      }

      // 清单相关成就
      if (this.checklistCount >= 5) {
        achievements.push({
          id: 9,
          name: '清单达人',
          unlocked: true
        });
      }
      if (this.checklistCount >= 10) {
        achievements.push({
          id: 10,
          name: '清单大师',
          unlocked: true
        });
      }
      if (this.checklistCount >= 20) {
        achievements.push({
          id: 11,
          name: '清单王者',
          unlocked: true
        });
      }

      // 美食店相关成就
      if (this.visitedCount >= 10) {
        achievements.push({
          id: 12,
          name: '美食探索者',
          unlocked: true
        });
      }
      if (this.visitedCount >= 20) {
        achievements.push({
          id: 13,
          name: '美食达人',
          unlocked: true
        });
      }
      if (this.visitedCount >= 50) {
        achievements.push({
          id: 14,
          name: '美食家',
          unlocked: true
        });
      }

      // 非遗相关成就
      if (this.heritageCount >= 5) {
        achievements.push({
          id: 15,
          name: '非遗体验者',
          unlocked: true
        });
      }
      if (this.heritageCount >= 10) {
        achievements.push({
          id: 16,
          name: '非遗传承人',
          unlocked: true
        });
      }
      if (this.heritageCount >= 20) {
        achievements.push({
          id: 17,
          name: '非遗大师',
          unlocked: true
        });
      }

      // 连续打卡成就
      if (this.continuousDays >= 7) {
        achievements.push({
          id: 18,
          name: '坚持一周',
          unlocked: true
        });
      }
      if (this.continuousDays >= 30) {
        achievements.push({
          id: 19,
          name: '坚持一月',
          unlocked: true
        });
      }

      // 评论推荐成就
      if (this.commentCount >= 10) {
        achievements.push({
          id: 20,
          name: '评论达人',
          unlocked: true
        });
      }
      if (this.recommendCount >= 10) {
        achievements.push({
          id: 21,
          name: '推荐达人',
          unlocked: true
        });
      }

      // 合并后端返回的成就数据（如果有的话）
      if (Array.isArray(this.backendAchievements) && this.backendAchievements.length > 0) {
        var backendAchievementMap = {};
        this.backendAchievements.forEach(function (a) {
          if (a.code) {
            backendAchievementMap[a.code] = a;
          }
        });

        // 如果后端有相同 code 的成就，使用后端的数据；否则添加前端计算的成就
        this.backendAchievements.forEach(function (backendAch) {
          if (!achievements.find(function (a) {
            return a.code === backendAch.code;
          })) {
            achievements.push(backendAch);
          }
        });
      }
      this.achievementTags = achievements;
    },
    // 更新勋章系统
    updateMedals: function updateMedals() {
      var _this4 = this;
      var medals = [];

      // 打卡相关勋章
      medals.push({
        id: 1,
        name: '初心',
        icon: '🌟',
        unlocked: this.checkInCount >= 1,
        description: '完成首次打卡',
        unlockTime: this.checkInCount >= 1 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.checkInCount,
        target: 1
      });
      medals.push({
        id: 2,
        name: '探索者',
        icon: '🧭',
        unlocked: this.checkInCount >= 5,
        description: '累计打卡 5 次',
        unlockTime: this.checkInCount >= 5 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.checkInCount,
        target: 5
      });
      medals.push({
        id: 3,
        name: '守护者',
        icon: '🎭',
        unlocked: this.checkInCount >= 10,
        description: '累计打卡 10 次',
        unlockTime: this.checkInCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.checkInCount,
        target: 10
      });
      medals.push({
        id: 4,
        name: '美食家',
        icon: '🍜',
        unlocked: this.visitedCount >= 20,
        description: '品尝20家陕西美食',
        unlockTime: this.visitedCount >= 20 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.visitedCount,
        target: 20
      });
      medals.push({
        id: 5,
        name: '城市漫游者',
        icon: '🗺️',
        unlocked: this.citiesCount >= 5,
        description: '打卡5座城市',
        unlockTime: this.citiesCount >= 5 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.citiesCount,
        target: 5
      });
      medals.push({
        id: 6,
        name: '三秦通',
        icon: '🏛️',
        unlocked: this.citiesCount >= 10,
        description: '打卡10座城市',
        unlockTime: this.citiesCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.citiesCount,
        target: 10
      });
      medals.push({
        id: 7,
        name: '清单达人',
        icon: '📋',
        unlocked: this.checklistCount >= 10,
        description: '创建10个清单',
        unlockTime: this.checklistCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.checklistCount,
        target: 10
      });
      medals.push({
        id: 8,
        name: '非遗传承人',
        icon: '🎭',
        unlocked: this.heritageCount >= 10,
        description: '体验10个非遗项目',
        unlockTime: this.heritageCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.heritageCount,
        target: 10
      });
      medals.push({
        id: 9,
        name: '坚持者',
        icon: '🔥',
        unlocked: this.continuousDays >= 7,
        description: '连续打卡7天',
        unlockTime: this.continuousDays >= 7 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.continuousDays,
        target: 7
      });
      medals.push({
        id: 10,
        name: '评论家',
        icon: '💬',
        unlocked: this.commentCount >= 10,
        description: '发表10条评论',
        unlockTime: this.commentCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.commentCount,
        target: 10
      });
      medals.push({
        id: 11,
        name: '推荐官',
        icon: '⭐',
        unlocked: this.recommendCount >= 10,
        description: '推荐10道美食',
        unlockTime: this.recommendCount >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.recommendCount,
        target: 10
      });
      medals.push({
        id: 12,
        name: '收藏家',
        icon: '❤️',
        unlocked: this.heritageCollect >= 10,
        description: '收藏10个非遗项目',
        unlockTime: this.heritageCollect >= 10 ? new Date().toISOString().split('T')[0] + ' 解锁' : '',
        progress: this.heritageCollect,
        target: 10
      });

      // 合并后端返回的勋章数据（如果有的话）
      // 如果后端有相同 code 的勋章，使用后端的数据（优先级更高）
      var backendMedalMap = {};
      if (Array.isArray(this.backendMedals) && this.backendMedals.length > 0) {
        this.backendMedals.forEach(function (m) {
          if (m.code) {
            backendMedalMap[m.code] = m;
          }
        });
      }

      // 合并数据：如果后端有相同 code，使用后端数据；否则使用前端计算的数据
      var mergedMedals = medals.map(function (m) {
        // 查找是否有对应的后端勋章（通过 code 或其他标识）
        var backendMedal = backendMedalMap[m.code] || m.id && _this4.backendMedals.find(function (bm) {
          return bm.id === m.id;
        });
        if (backendMedal) {
          // 使用后端数据，但保留前端的进度信息（如果后端没有）
          return _objectSpread(_objectSpread({}, backendMedal), {}, {
            progress: backendMedal.progress !== undefined ? backendMedal.progress : m.progress,
            target: backendMedal.target !== undefined ? backendMedal.target : m.target
          });
        }
        return m;
      });
      this.medals = mergedMedals;
    },
    // 展开/收起勋章列表
    toggleMedalsExpanded: function toggleMedalsExpanded() {
      this.showMedalsExpanded = !this.showMedalsExpanded;
    },
    // 猜粗细弹窗：打开/关闭
    toggleGuessModal: function toggleGuessModal() {
      this.showGuessModal = !this.showGuessModal;
    },
    // 猜粗细：揭晓答案
    revealShot: function revealShot(id) {
      var shot = this.faceShots.find(function (item) {
        return item.id === id;
      });
      if (shot) {
        shot.revealed = true;
      }
    },
    // 面语弹窗：打开 / 关闭
    openMianyuDialog: function openMianyuDialog() {
      this.showMianyuDialog = true;
    },
    closeMianyuDialog: function closeMianyuDialog() {
      this.showMianyuDialog = false;
    },
    // 打开方言收集器
    openDialectTool: function openDialectTool() {
      this.showDialectDialog = true;
    },
    closeDialectDialog: function closeDialectDialog() {
      this.showDialectDialog = false;
    },
    // 播放方言发音（点击小喇叭调用后端合成并播放）
    playDialect: function playDialect(dialect) {
      var _this5 = this;
      // 方言卡片：优先用「方言词 + 用法句」来合成语音，没有用法就只读词
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
        var parsed = _this5.normalizeTtsResponse(raw);
        if (!parsed.base64Audio) {
          uni.showToast({
            title: '合成失败，请稍后重试',
            icon: 'none'
          });
          return;
        }
        _this5.playBase64Audio(parsed.base64Audio);
        _this5.dialectPlayingId = dialect.id || null;
      }).catch(function (err) {
        console.error('方言合成请求失败:', err);
        uni.showToast({
          title: '网络错误，请稍后重试',
          icon: 'none'
        });
      }).finally(function () {
        _this5.dialectTtsLoadingId = null;
        uni.hideLoading();
      });
    },
    // 自定义输入普通话，生成方言音频和文字
    handleCustomTts: function handleCustomTts() {
      var _this6 = this;
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

      // 先在前端把普通话转换成陕西方言文本
      var dialectText = (0, _shanxiDialectMap.convertToShanxiDialect)(text);
      // 用于 TTS 的文本：优先用方言文本，兜底用原始普通话保证能合成
      var ttsText = dialectText || text;
      this.customTtsLoading = true;
      (0, _tts.synthesizeTts)(ttsText).then(function (raw) {
        var parsed = _this6.normalizeTtsResponse(raw);
        if (!parsed.base64Audio) {
          uni.showToast({
            title: '合成失败，请稍后重试',
            icon: 'none'
          });
          return;
        }

        // 展示的方言文字：优先后端返回的 dialectText，其次用前端转换结果
        _this6.customDialectText = parsed.dialectText || dialectText || '';
        _this6.playBase64Audio(parsed.base64Audio);
      }).catch(function (err) {
        console.error('自定义方言合成请求失败:', err);
        uni.showToast({
          title: '网络错误，请稍后重试',
          icon: 'none'
        });
      }).finally(function () {
        _this6.customTtsLoading = false;
      });
    },
    // 规范化后端返回的 TTS 结果，兼容不同结构
    normalizeTtsResponse: function normalizeTtsResponse(raw) {
      if (!raw) {
        return {
          base64Audio: '',
          dialectText: ''
        };
      }
      var data = null;
      var success = false;

      // 优先使用 success 字段（例如：{ success: true, data: 'base64' }）
      if (typeof raw.success !== 'undefined') {
        success = !!raw.success;
        data = raw.data;
      } else if (typeof raw.code !== 'undefined') {
        // 兼容 { code: 0, data: 'base64' } 或 code 为空但 success 已在别处表示
        success = raw.code === 0 || raw.code === '0' || raw.code === null;
        data = raw.data;
      } else {
        // 兜底：直接从常见字段或原值里取
        data = raw.data || raw.audio || raw.base64 || raw;
        success = !!data;
      }
      if (!success || !data) {
        return {
          base64Audio: '',
          dialectText: ''
        };
      }

      // data 直接就是 base64 字符串的情况
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
    // 播放 Base64 MP3 音频，兼容微信小程序和 H5
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
    // 打开陕味趣游地图：跳转到陕味足迹页面（内含地图展示）
    openFoodMap: function openFoodMap() {
      this.goFoodFootprints();
    },
    // 个人中心工具：猜粗细，在当前页弹出弹窗
    goGuessFeature: function goGuessFeature() {
      this.showGuessModal = true;
    },
    // 个人中心工具：面语，在当前页弹出“面语 · 方言卡”弹窗
    goDialectFeature: function goDialectFeature() {
      this.openMianyuDialog();
    },
    // 显示勋章详情
    showMedalDetail: function showMedalDetail(medal) {
      this.selectedMedal = medal;
      this.showMedalDialog = true;
    },
    closeMedalDialog: function closeMedalDialog() {
      this.showMedalDialog = false;
      this.selectedMedal = null;
    },
    // 跳转到清单大全页面（显示所有清单）
    goAllChecklists: function goAllChecklists() {
      uni.navigateTo({
        url: '/pages/mine/checklists'
      });
    },
    // 跳转到打卡记录（展示所有打卡）
    goCheckInRecords: function goCheckInRecords() {
      uni.navigateTo({
        url: '/pages/mine/checkin-records'
      });
    },
    // 跳转到陕味足迹（城市+店铺统计）
    goFoodFootprints: function goFoodFootprints() {
      uni.navigateTo({
        url: '/pages/mine/food-footprints'
      });
    },
    // 跳转到非遗体验记录
    goHeritageRecords: function goHeritageRecords() {
      uni.navigateTo({
        url: '/pages/mine/heritage-records'
      });
    },
    // 跳转到推荐与评论记录
    goRecommendComments: function goRecommendComments() {
      uni.navigateTo({
        url: '/pages/mine/recommend-comments'
      });
    },
    // 跳转到关于我们
    goAboutUs: function goAboutUs() {
      uni.navigateTo({
        url: '/pages/mine/about'
      });
    },
    // 跳转到用户建议
    goFeedback: function goFeedback() {
      uni.navigateTo({
        url: '/pages/mine/feedback'
      });
    },
    // 跳转到设置中心
    goSettings: function goSettings() {
      uni.navigateTo({
        url: '/pages/mine/settings'
      });
    },
    // 更新用户信息
    updateUserInfo: function updateUserInfo(updateData) {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var resp, profile;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (_this7.isLoggedIn) {
                  _context4.next = 3;
                  break;
                }
                uni.showToast({
                  title: '请先登录',
                  icon: 'none'
                });
                return _context4.abrupt("return", false);
              case 3:
                _context4.prev = 3;
                _context4.next = 6;
                return (0, _user.updateUserProfile)(updateData);
              case 6:
                resp = _context4.sent;
                if (!(resp && resp.success && resp.data)) {
                  _context4.next = 12;
                  break;
                }
                // 更新本地用户信息
                profile = resp.data;
                _this7.userInfo = _objectSpread(_objectSpread({}, _this7.userInfo), {}, {
                  nickName: profile.nickname || profile.nickName || _this7.userInfo.nickName,
                  avatarUrl: profile.avatarUrl || _this7.userInfo.avatarUrl
                }, profile);
                // 保存到本地存储
                try {
                  uni.setStorageSync('profile', _this7.userInfo);
                } catch (_) {}
                return _context4.abrupt("return", true);
              case 12:
                return _context4.abrupt("return", false);
              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](3);
                console.error('更新用户信息失败:', _context4.t0);
                uni.showToast({
                  title: _context4.t0.message || '更新失败，请稍后重试',
                  icon: 'none'
                });
                return _context4.abrupt("return", false);
              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[3, 15]]);
      }))();
    },
    logout: function logout() {
      var _this8 = this;
      uni.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: function success(res) {
          if (res.confirm) {
            // 清除本地存储的登录状态和用户信息
            uni.removeStorageSync('isLoggedIn');
            uni.removeStorageSync('token');
            uni.removeStorageSync('profile');

            // 重置页面数据，触发UI更新
            _this8.checkLoginStatus();
            uni.showToast({
              title: '已退出登录',
              icon: 'success'
            });
          }
        }
      });
    },
    goPage: function goPage(id) {
      var routes = {
        tong: '/pages/index/index',
        fengwei: '/pages/flavor/index',
        qingdan: '/pages/checklist/index',
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
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      if (currentPage && '/' + currentPage.route === url) {
        return;
      }
      // 如果点击陕面通图标，且当前不在首页，使用 navigateTo 跳转（保留返回按钮）
      if (url === '/pages/index/index') {
        var currentRoute = currentPage ? '/' + currentPage.route : '';
        if (currentRoute !== '/pages/index/index') {
          // 在其他页面点击陕面通图标，使用 navigateTo 跳转，保留返回按钮
          uni.navigateTo({
            url: url
          });
        } else {
          // 在首页点击陕面通图标，不跳转（已在首页）
          return;
        }
      } else {
        uni.navigateTo({
          url: url
        });
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 182:
/*!**************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/index.vue?vue&type=style&index=0&id=4bd6864f&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_4bd6864f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=4bd6864f&lang=scss&scoped=true& */ 183);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_4bd6864f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_4bd6864f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_4bd6864f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_4bd6864f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_4bd6864f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 183:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/index.vue?vue&type=style&index=0&id=4bd6864f&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[167,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/index.js.map
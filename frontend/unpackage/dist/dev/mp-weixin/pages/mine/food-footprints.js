(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/food-footprints"],{

/***/ 208:
/*!*********************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Fmine%2Ffood-footprints"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _foodFootprints = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/food-footprints.vue */ 209));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_foodFootprints.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 209:
/*!**************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/food-footprints.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-footprints.vue?vue&type=template&id=94279e40&scoped=true& */ 210);
/* harmony import */ var _food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-footprints.vue?vue&type=script&lang=js& */ 212);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _food_footprints_vue_vue_type_style_index_0_id_94279e40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-footprints.vue?vue&type=style&index=0&id=94279e40&lang=scss&scoped=true& */ 215);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "94279e40",
  null,
  false,
  _food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/mine/food-footprints.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 210:
/*!*********************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/food-footprints.vue?vue&type=template&id=94279e40&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./food-footprints.vue?vue&type=template&id=94279e40&scoped=true& */ 211);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_template_id_94279e40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 211:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/food-footprints.vue?vue&type=template&id=94279e40&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 =
    !_vm.loading && !_vm.errorMessage && _vm.activeMainTab === "visited"
      ? _vm.cityStats.length
      : null
  var g1 =
    !_vm.loading && !_vm.errorMessage && _vm.activeMainTab === "visited"
      ? _vm.displayVisitedList.length
      : null
  var g2 =
    !_vm.loading && !_vm.errorMessage && !(_vm.activeMainTab === "visited")
      ? _vm.favoriteFoodList.length
      : null
  var g3 =
    !_vm.loading && !_vm.errorMessage && !(_vm.activeMainTab === "visited")
      ? _vm.favoriteScenicList.length
      : null
  var g4 =
    !_vm.loading && !_vm.errorMessage && !(_vm.activeMainTab === "visited")
      ? _vm.favoriteHeritageList.length
      : null
  var g5 =
    !_vm.loading && !_vm.errorMessage && !(_vm.activeMainTab === "visited")
      ? _vm.displayFavoriteList.length
      : null
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

/***/ 212:
/*!***************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/food-footprints.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./food-footprints.vue?vue&type=script&lang=js& */ 213);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 213:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/food-footprints.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
var _zuji = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/zuji.png */ 174));
var _收藏 = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/收藏.png */ 214));
var _methods;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _require = __webpack_require__(/*! ../../api/heritage.js */ 114),
  getMyHeritageRecords = _require.getMyHeritageRecords;
var _require2 = __webpack_require__(/*! ../../api/map.js */ 77),
  getPoiExperiences = _require2.getPoiExperiences,
  getMyFavoritePois = _require2.getMyFavoritePois;
var _require3 = __webpack_require__(/*! ../../api/imageMap.js */ 47),
  IMG = _require3.IMG;
// 与首页 / 城市详情保持一致的城市配置
var CITY_CONFIG = [{
  id: 'xian',
  name: '西安',
  tagline: '长安城下万面同煮'
}, {
  id: 'baoji',
  name: '宝鸡',
  tagline: '臊子酸辣，擀面皮筋爽'
}, {
  id: 'xianyang',
  name: '咸阳',
  tagline: '泾渭河畔的豪放拉面'
}, {
  id: 'weinan',
  name: '渭南',
  tagline: '黄河东岸的宽与细'
}, {
  id: 'yanan',
  name: '延安',
  tagline: '黄土地上的烈烈辣香'
}, {
  id: 'yulin',
  name: '榆林',
  tagline: '榆塞粗犷的陕北筋道'
}, {
  id: 'hanzhong',
  name: '汉中',
  tagline: '巴山背篓里的米皮香'
}, {
  id: 'ankang',
  name: '安康',
  tagline: '秦巴山里蒸出的湿润口感'
}, {
  id: 'shangluo',
  name: '商洛',
  tagline: '秦岭南麓的山泉酸爽'
}, {
  id: 'tongchuan',
  name: '铜川',
  tagline: '耀州臊子浇满铜魂'
}];
var CITY_NAME_TO_ID = CITY_CONFIG.reduce(function (map, city) {
  map[city.name] = city.id;
  map[city.name + '市'] = city.id;
  return map;
}, {});
var _default = {
  name: 'FoodFootprintsSummary',
  data: function data() {
    return {
      IMG: IMG,
      iconZuji: _zuji.default,
      iconShoucang: _收藏.default,
      loading: false,
      errorMessage: '',
      privacyAgree: true,
      activeMainTab: 'visited',
      // visited | favorite
      activeCategoryTab: 'food',
      // food | scenic | heritage

      stats: {
        citiesCount: 0,
        visitedFoodCount: 0,
        scenicExperiencedCount: 0,
        heritageExperiencedCount: 0,
        favoriteFoodCount: 0,
        favoriteScenicCount: 0,
        favoriteHeritageCount: 0
      },
      cityStats: [],
      visitedList: [],
      favoriteFoodList: [],
      favoriteScenicList: [],
      favoriteHeritageList: [],
      activeFavoriteTab: 'food',
      // 内部临时数据
      _cityFoodCountMap: {},
      _cityScenicCountMap: {},
      _cityHeritageCountMap: {}
    };
  },
  computed: {
    displayVisitedList: function displayVisitedList() {
      if (this.activeCategoryTab === 'food') {
        return this.visitedList.filter(function (item) {
          return item.type === 'food';
        });
      }
      if (this.activeCategoryTab === 'scenic') {
        return this.visitedList.filter(function (item) {
          return item.type === 'scenic';
        });
      }
      if (this.activeCategoryTab === 'heritage') {
        return this.visitedList.filter(function (item) {
          return item.type === 'heritage';
        });
      }
      return this.visitedList;
    },
    displayFavoriteList: function displayFavoriteList() {
      if (this.activeFavoriteTab === 'food') {
        return this.favoriteFoodList;
      }
      if (this.activeFavoriteTab === 'scenic') {
        return this.favoriteScenicList;
      }
      return this.favoriteHeritageList;
    }
  },
  onLoad: function onLoad() {
    this.bootstrap();
  },
  onShow: function onShow() {
    this.bootstrap();
  },
  methods: (_methods = {
    bootstrap: function bootstrap() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _this.errorMessage = '';
                _this.cityStats = [];
                _this.visitedList = [];
                _this.favoriteHeritageList = [];
                _this._cityFoodCountMap = {};
                _this._cityScenicCountMap = {};
                _this._cityHeritageCountMap = {};
                _this.loadPrivacySetting();
                _context.prev = 9;
                _context.next = 12;
                return Promise.all([_this.loadHeritageFootprints(), _this.loadPoiFootprints()]);
              case 12:
                // 先执行去重，再统计城市数据
                _this.mergeVisitedList();
                _this.mergeCityStats();
                _context.next = 16;
                return _this.loadFavoriteFootprints();
              case 16:
                _this.updateUserDataCache();
                _context.next = 23;
                break;
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](9);
                console.error('[FoodFootprints] bootstrap error:', _context.t0);
                _this.errorMessage = '加载足迹数据失败，请稍后重试';
              case 23:
                _context.prev = 23;
                _this.loading = false;
                return _context.finish(23);
              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[9, 19, 23, 26]]);
      }))();
    },
    loadPrivacySetting: function loadPrivacySetting() {
      var agree = true;
      try {
        var stored = uni.getStorageSync('app_settings');
        if (stored && (0, _typeof2.default)(stored) === 'object' && typeof stored.privacyAgree === 'boolean') {
          agree = stored.privacyAgree;
        }
      } catch (e) {
        console.warn('[FoodFootprints] loadPrivacySetting error:', e);
      }
      this.privacyAgree = agree;
    },
    loadHeritageFootprints: function loadHeritageFootprints() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var result, favoriteList, mappedFavorites;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return getMyHeritageRecords();
              case 3:
                result = _context2.sent;
                favoriteList = result && Array.isArray(result.favoriteList) && result.favoriteList || []; // 统计数据会在 mergeVisitedList 中统一计算
                _this2.stats.heritageFavoriteCount = favoriteList.length;

                // 注意：这里不处理 experiencedList，因为"我的非遗"中的体验记录
                // 不应该显示在"足迹"页面的"非遗体验"分类中
                // "足迹"页面的"非遗体验"只显示从"陕味趣游地图"点击体验的POI记录
                // experiencedList 的数据应该只在"我的非遗"页面显示

                // 将收藏的非遗项目按类型拆分为「美食打卡 / 景点游玩 / 非遗体验」三类收藏
                mappedFavorites = favoriteList.map(function (raw, index) {
                  var safeItem = raw || {};
                  var title = safeItem.name || safeItem.heritageName || safeItem.title || '非遗项目';
                  var category = safeItem.category || safeItem.heritageType || '';
                  var cityHint = _this2.extractCityNameFromHeritage(safeItem);
                  var dateValue = safeItem.favoriteAt || safeItem.createdAt || safeItem.createTime || safeItem.timestamp || '';
                  var favoriteType = _this2.resolveFavoriteType(category);

                  // 获取封面图片
                  var cover = safeItem.cover || safeItem.imageUrl || safeItem.image || safeItem.thumbnail || '';
                  if (!cover && Array.isArray(safeItem.images) && safeItem.images.length > 0) {
                    cover = safeItem.images[0];
                  }
                  if (!cover) {
                    cover = '/static/assets/热门推荐.png';
                  }
                  var desc = safeItem.contentIntroduction || safeItem.description || safeItem.desc || '';
                  var subtitle = desc ? _this2.truncateText(desc, 40) : category || '';
                  return {
                    id: safeItem.id || safeItem.heritageId || index,
                    name: title,
                    category: category,
                    cityHint: cityHint,
                    favoriteDate: _this2.formatDate(dateValue),
                    favoriteType: favoriteType,
                    poiType: favoriteType,
                    // 用于卡片样式
                    cover: cover,
                    subtitle: subtitle,
                    address: safeItem.address || safeItem.region || safeItem.area || ''
                  };
                }); // 确保 mappedFavorites 是数组
                if (Array.isArray(mappedFavorites) && mappedFavorites.length > 0) {
                  _this2.splitFavoriteLists(mappedFavorites);
                } else {
                  console.log('[FoodFootprints] loadHeritageFootprints: mappedFavorites 为空或不是数组');
                }

                // 不再将"我的非遗"中的体验记录添加到 visitedList
                // 足迹页面的"非遗体验"只显示从"陕味趣游地图"点击体验的POI记录
                _context2.next = 13;
                break;
              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.error('[FoodFootprints] loadHeritageFootprints error:', _context2.t0);
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    },
    loadPoiFootprints: function loadPoiFootprints() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var foodExperiences, scenicExperiences, heritageExperiences, hasBackendError, results, cityPoiCountMap, poiVisitedRecords, self, processExperiences;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                // 先从后端接口获取体验列表
                foodExperiences = [];
                scenicExperiences = [];
                heritageExperiences = [];
                hasBackendError = false;
                _context3.prev = 5;
                _context3.next = 8;
                return Promise.all([getPoiExperiences({
                  type: 1
                }).catch(function (e) {
                  console.warn('[FoodFootprints] 获取美食体验数据失败:', e);
                  return [];
                }), getPoiExperiences({
                  type: 2
                }).catch(function (e) {
                  console.warn('[FoodFootprints] 获取景点体验数据失败:', e);
                  return [];
                }), getPoiExperiences({
                  type: 3
                }).catch(function (e) {
                  console.warn('[FoodFootprints] 获取非遗体验数据失败:', e);
                  return [];
                })]);
              case 8:
                results = _context3.sent;
                foodExperiences = results[0] || [];
                scenicExperiences = results[1] || [];
                heritageExperiences = results[2] || [];
                console.log('[FoodFootprints] 从后端获取体验数据 - 美食:', foodExperiences.length, '景点:', scenicExperiences.length, '非遗:', heritageExperiences.length);
                _context3.next = 19;
                break;
              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](5);
                console.error('[FoodFootprints] getPoiExperiences 整体失败:', _context3.t0);
                hasBackendError = true;
              case 19:
                cityPoiCountMap = {};
                poiVisitedRecords = []; // 处理美食体验
                self = _this3;
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
                    var cityName = self.extractCityNameFromPoi(poi) || self.extractCityNameFromPoi(safeItem);
                    var displayCity = cityName || '';
                    if (displayCity) {
                      if (!cityPoiCountMap[displayCity]) {
                        cityPoiCountMap[displayCity] = {
                          food: 0,
                          scenic: 0,
                          heritage: 0
                        };
                      }
                      cityPoiCountMap[displayCity][poiType] += 1;
                    }
                    var typeLabel = '美食打卡';
                    if (poiType === 'scenic') {
                      typeLabel = '景点游玩';
                    } else if (poiType === 'heritage') {
                      typeLabel = '非遗体验';
                    }
                    var category = poi.category || poi.categoryName || safeItem.category || '';
                    var address = poi.address || poi.fullAddress || poi.full_address || safeItem.address || '';
                    var subtitle = category || address || '';
                    var dateValue = safeItem.experiencedAt || safeItem.createdAt || safeItem.timestamp || Date.now();
                    var cover = poi.cover || poi.imageUrl || poi.image || poi.thumbnail || safeItem.cover || '';
                    if (!cover && Array.isArray(poi.images) && poi.images.length > 0) {
                      cover = poi.images[0];
                    }
                    if (!cover) {
                      cover = '/static/assets/热门推荐.png';
                    }
                    return {
                      uid: 'poi-' + poiType + '-' + (poiId || index),
                      type: poiType,
                      typeLabel: typeLabel,
                      title: name,
                      subtitle: subtitle ? self.truncateText(subtitle, 40) : '',
                      city: displayCity,
                      date: self.formatDate(dateValue),
                      poiId: poiId,
                      poiType: poiType,
                      cover: cover
                    };
                  });
                }; // 处理三种类型的体验数据
                poiVisitedRecords.push.apply(poiVisitedRecords, (0, _toConsumableArray2.default)(processExperiences(foodExperiences, 'food')).concat((0, _toConsumableArray2.default)(processExperiences(scenicExperiences, 'scenic')), (0, _toConsumableArray2.default)(processExperiences(heritageExperiences, 'heritage'))));
                console.log('[FoodFootprints] 处理后端体验数据，共', poiVisitedRecords.length, '条记录');

                // 更新城市统计
                Object.keys(cityPoiCountMap).forEach(function (cityName) {
                  var counts = cityPoiCountMap[cityName];
                  if (!_this3._cityFoodCountMap[cityName]) {
                    _this3._cityFoodCountMap[cityName] = 0;
                  }
                  if (!_this3._cityScenicCountMap[cityName]) {
                    _this3._cityScenicCountMap[cityName] = 0;
                  }
                  if (!_this3._cityHeritageCountMap[cityName]) {
                    _this3._cityHeritageCountMap[cityName] = 0;
                  }
                  _this3._cityFoodCountMap[cityName] += counts.food;
                  _this3._cityScenicCountMap[cityName] += counts.scenic;
                  _this3._cityHeritageCountMap[cityName] += counts.heritage;
                });

                // 统计数据会在 mergeVisitedList 中统一计算

                // 合并到 visitedList
                _this3.visitedList = [].concat((0, _toConsumableArray2.default)(_this3.visitedList), poiVisitedRecords);

                // 如果后端没有数据，尝试从本地存储加载（作为兜底）
                if (poiVisitedRecords.length === 0) {
                  console.log('[FoodFootprints] 后端没有返回体验数据，尝试从本地存储加载');
                  _this3.loadPoiFootprintsFromLocal();
                } else {
                  console.log('[FoodFootprints] ✅ 成功从后端加载体验数据，共', poiVisitedRecords.length, '条');
                }
                _context3.next = 36;
                break;
              case 30:
                _context3.prev = 30;
                _context3.t1 = _context3["catch"](0);
                console.error('[FoodFootprints] loadPoiFootprints error:', _context3.t1);
                console.error('[FoodFootprints] 错误详情:', _context3.t1.stack || _context3.t1);
                // 出错时从本地存储加载
                console.log('[FoodFootprints] 发生错误，尝试从本地存储加载数据');
                _this3.loadPoiFootprintsFromLocal();
              case 36:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 30], [5, 15]]);
      }))();
    },
    loadPoiFootprintsFromLocal: function loadPoiFootprintsFromLocal() {
      var _this4 = this;
      try {
        // 从本地存储加载 POI 体验足迹（experienced）作为兜底
        var experiencedKey = 'poi_footprints_experienced';
        var experiencedList = uni.getStorageSync(experiencedKey) || [];
        if (!Array.isArray(experiencedList) || experiencedList.length === 0) {
          return;
        }
        var _cityPoiCountMap = {};
        var poiVisitedRecords = [];
        experiencedList.forEach(function (item, index) {
          var safeItem = item || {};
          var poiType = safeItem.type || safeItem.poiType || 'food';
          var cityName = _this4.extractCityNameFromPoi(safeItem);
          var displayCity = cityName || '';
          if (displayCity) {
            if (!_cityPoiCountMap[displayCity]) {
              _cityPoiCountMap[displayCity] = {
                food: 0,
                scenic: 0,
                heritage: 0
              };
            }
            if (poiType === 'food') {
              _cityPoiCountMap[displayCity].food += 1;
            } else if (poiType === 'scenic') {
              _cityPoiCountMap[displayCity].scenic += 1;
            } else if (poiType === 'heritage') {
              _cityPoiCountMap[displayCity].heritage += 1;
            }
          }
          var typeLabel = '美食打卡';
          var type = 'food';
          if (poiType === 'scenic') {
            typeLabel = '景点游玩';
            type = 'scenic';
          } else if (poiType === 'heritage') {
            typeLabel = '非遗体验';
            type = 'heritage';
          }
          var title = safeItem.name || '地点';
          var subtitle = safeItem.category || safeItem.address || '';
          var dateValue = safeItem.timestamp || Date.now();
          poiVisitedRecords.push({
            uid: "poi-".concat(poiType, "-").concat(safeItem.id || index),
            type: type,
            typeLabel: typeLabel,
            title: title,
            subtitle: subtitle ? _this4.truncateText(subtitle, 40) : '',
            city: displayCity,
            date: _this4.formatDate(dateValue),
            poiId: safeItem.id,
            poiType: poiType,
            cover: safeItem.cover || '/static/assets/热门推荐.png'
          });
        });

        // 更新城市统计
        Object.keys(_cityPoiCountMap).forEach(function (cityName) {
          var counts = _cityPoiCountMap[cityName];
          if (!_this4._cityFoodCountMap[cityName]) {
            _this4._cityFoodCountMap[cityName] = 0;
          }
          if (!_this4._cityScenicCountMap[cityName]) {
            _this4._cityScenicCountMap[cityName] = 0;
          }
          if (!_this4._cityHeritageCountMap[cityName]) {
            _this4._cityHeritageCountMap[cityName] = 0;
          }
          _this4._cityFoodCountMap[cityName] += counts.food;
          _this4._cityScenicCountMap[cityName] += counts.scenic;
          _this4._cityHeritageCountMap[cityName] += counts.heritage;
        });

        // 统计数据会在 mergeVisitedList 中统一计算

        // 合并到 visitedList
        this.visitedList = [].concat((0, _toConsumableArray2.default)(this.visitedList), poiVisitedRecords);
      } catch (err) {
        console.error('[FoodFootprints] loadPoiFootprintsFromLocal error:', err);
      }
    },
    loadFavoriteFootprints: function loadFavoriteFootprints() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var userLng, userLat, location, _yield$Promise$all, _yield$Promise$all2, foodFavoritesRaw, scenicFavoritesRaw, heritageFavoritesRaw, foodFavorites, scenicFavorites, heritageFavorites;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                // 重置列表，避免重复数据
                _this5.favoriteFoodList = [];
                _this5.favoriteScenicList = [];
                _this5.favoriteHeritageList = [];

                // 获取用户定位（可选，用于计算距离）
                userLng = null;
                userLat = null;
                _context4.prev = 6;
                _context4.next = 9;
                return new Promise(function (resolve, reject) {
                  uni.getLocation({
                    type: 'gcj02',
                    success: resolve,
                    fail: reject
                  });
                });
              case 9:
                location = _context4.sent;
                userLng = location.longitude;
                userLat = location.latitude;
                console.log('[FoodFootprints] 获取到用户定位:', {
                  userLng: userLng,
                  userLat: userLat
                });
                _context4.next = 18;
                break;
              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](6);
                console.log('[FoodFootprints] 无法获取用户定位，将不使用距离计算:', _context4.t0);
              case 18:
                _context4.next = 20;
                return Promise.all([_this5.loadFavoritePoisFromBackend({
                  type: 1,
                  userLng: userLng,
                  userLat: userLat
                }), _this5.loadFavoritePoisFromBackend({
                  type: 2,
                  userLng: userLng,
                  userLat: userLat
                }), _this5.loadFavoritePoisFromBackend({
                  type: 3,
                  userLng: userLng,
                  userLat: userLat
                })]);
              case 20:
                _yield$Promise$all = _context4.sent;
                _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 3);
                foodFavoritesRaw = _yield$Promise$all2[0];
                scenicFavoritesRaw = _yield$Promise$all2[1];
                heritageFavoritesRaw = _yield$Promise$all2[2];
                console.log('[FoodFootprints] 从后端获取收藏数据 - 美食:', foodFavoritesRaw.length, '景点:', scenicFavoritesRaw.length, '非遗:', heritageFavoritesRaw.length);

                // 处理美食收藏数据
                foodFavorites = _this5.processFavoriteList(foodFavoritesRaw, 'food'); // 处理景点收藏数据
                scenicFavorites = _this5.processFavoriteList(scenicFavoritesRaw, 'scenic'); // 处理非遗收藏数据
                heritageFavorites = _this5.processFavoriteList(heritageFavoritesRaw, 'heritage');
                console.log('[FoodFootprints] 后端数据处理完成 - 美食:', foodFavorites.length, '景点:', scenicFavorites.length, '非遗:', heritageFavorites.length);

                // 直接使用后端数据
                _this5.favoriteFoodList = foodFavorites;
                _this5.favoriteScenicList = scenicFavorites;
                _this5.favoriteHeritageList = heritageFavorites;

                // 更新收藏统计
                _this5.stats.favoriteFoodCount = _this5.favoriteFoodList.length;
                _this5.stats.favoriteScenicCount = _this5.favoriteScenicList.length;
                _this5.stats.favoriteHeritageCount = _this5.favoriteHeritageList.length;
                console.log('[FoodFootprints] ✅ 收藏数据加载完成 - 美食:', _this5.stats.favoriteFoodCount, '景点:', _this5.stats.favoriteScenicCount, '非遗:', _this5.stats.favoriteHeritageCount);
                _context4.next = 49;
                break;
              case 39:
                _context4.prev = 39;
                _context4.t1 = _context4["catch"](0);
                console.error('[FoodFootprints] loadFavoriteFootprints error:', _context4.t1);
                console.error('[FoodFootprints] 错误详情:', _context4.t1.stack || _context4.t1);
                // 出错时重置列表
                _this5.favoriteFoodList = [];
                _this5.favoriteScenicList = [];
                _this5.favoriteHeritageList = [];
                _this5.stats.favoriteFoodCount = 0;
                _this5.stats.favoriteScenicCount = 0;
                _this5.stats.favoriteHeritageCount = 0;
              case 49:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 39], [6, 15]]);
      }))();
    },
    // 处理收藏列表数据
    processFavoriteList: function processFavoriteList(rawList, expectedType) {
      var _this6 = this;
      if (!Array.isArray(rawList) || rawList.length === 0) {
        return [];
      }
      var result = [];
      var seenIds = new Set();
      rawList.forEach(function (item, index) {
        var safeItem = item || {};
        var poi = safeItem.poi || safeItem;

        // 获取 POI ID
        var poiId = poi.id || safeItem.poiId || safeItem.id;
        if (!poiId) {
          console.warn("[FoodFootprints] \u8DF3\u8FC7\u65E0\u6548\u9879\uFF08\u65E0ID\uFF09:", safeItem);
          return;
        }

        // 去重
        if (seenIds.has(String(poiId))) {
          console.log("[FoodFootprints] \u8DF3\u8FC7\u91CD\u590D\u9879\uFF08ID: ".concat(poiId, "\uFF09"));
          return;
        }
        seenIds.add(String(poiId));
        var cityHint = _this6.extractCityNameFromPoi(poi) || _this6.extractCityNameFromPoi(safeItem);
        var cover = poi.cover || poi.imageUrl || poi.image || poi.thumbnail || safeItem.cover || safeItem.imageUrl || '';
        if (!cover && Array.isArray(poi.images) && poi.images.length > 0) {
          cover = poi.images[0];
        }
        if (!cover && Array.isArray(safeItem.images) && safeItem.images.length > 0) {
          cover = safeItem.images[0];
        }
        if (!cover) {
          cover = '/static/assets/热门推荐.png';
        }
        var favoriteItem = {
          id: String(poiId),
          name: poi.name || safeItem.name || '地点',
          category: poi.category || poi.categoryName || safeItem.category || safeItem.categoryName || '',
          cityHint: cityHint || '陕西',
          favoriteDate: _this6.formatDate(safeItem.favoriteAt || safeItem.createdAt || safeItem.timestamp || safeItem.favoriteDate),
          poiType: expectedType,
          address: poi.address || poi.fullAddress || poi.full_address || safeItem.address || '',
          cover: cover,
          subtitle: poi.category || poi.address || safeItem.category || safeItem.address || '',
          // 如果有距离信息，也保存下来
          distance: poi.distance !== undefined ? poi.distance : safeItem.distance !== undefined ? safeItem.distance : null
        };
        result.push(favoriteItem);
      });
      return result;
    },
    // 从后端获取收藏的POI列表
    loadFavoritePoisFromBackend: function loadFavoritePoisFromBackend() {
      var _arguments = arguments;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var params, favorites;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
                _context5.prev = 1;
                if (!(!params.type || params.type !== 1 && params.type !== 2 && params.type !== 3)) {
                  _context5.next = 5;
                  break;
                }
                console.warn('[FoodFootprints] loadFavoritePoisFromBackend 警告: 必须传入 type 参数 (1=美食, 2=景点, 3=非遗)');
                return _context5.abrupt("return", []);
              case 5:
                _context5.next = 7;
                return getMyFavoritePois(params);
              case 7:
                favorites = _context5.sent;
                console.log("[FoodFootprints] \u540E\u7AEF\u63A5\u53E3\u8FD4\u56DE\u6570\u636E (type=".concat(params.type, "):"), favorites);
                if (!Array.isArray(favorites)) {
                  _context5.next = 17;
                  break;
                }
                if (!(favorites.length > 0)) {
                  _context5.next = 15;
                  break;
                }
                console.log("[FoodFootprints] \u2705 \u4ECE\u540E\u7AEF\u83B7\u53D6\u5230\u6536\u85CFPOI\u6570\u91CF (type=".concat(params.type, "):"), favorites.length);
                return _context5.abrupt("return", favorites);
              case 15:
                console.log("[FoodFootprints] \u2139\uFE0F \u540E\u7AEF\u8FD4\u56DE\u7A7A\u6570\u7EC4 (type=".concat(params.type, ")\uFF0C\u7528\u6237\u53EF\u80FD\u6CA1\u6709\u6536\u85CF\u6B64\u7C7BPOI"));
                return _context5.abrupt("return", []);
              case 17:
                console.warn('[FoodFootprints] ⚠️ 后端返回的数据格式不正确，不是数组:', (0, _typeof2.default)(favorites), favorites);
                return _context5.abrupt("return", []);
              case 21:
                _context5.prev = 21;
                _context5.t0 = _context5["catch"](1);
                console.error('[FoodFootprints] ❌ loadFavoritePoisFromBackend error:', _context5.t0);
                // 检查是否是未登录错误
                if (_context5.t0.statusCode === 401 || _context5.t0.message && _context5.t0.message.includes('UNAUTHORIZED')) {
                  console.warn('[FoodFootprints] 用户未登录，需要先登录');
                  // 可以在这里触发登录逻辑
                  // uni.navigateTo({ url: '/pages/login/index' })
                }
                return _context5.abrupt("return", []);
              case 26:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 21]]);
      }))();
    },
    extractCityNameFromPoi: function extractCityNameFromPoi(item) {
      var explicitCity = (item.city || '').trim();
      if (explicitCity) {
        return this.normalizeCityName(explicitCity);
      }
      var addressText = (item.address || '').trim();
      if (!addressText) {
        return '';
      }
      var knownName = CITY_CONFIG.map(function (c) {
        return c.name;
      }).find(function (name) {
        return addressText.indexOf(name) !== -1;
      });
      if (knownName) {
        return knownName;
      }
      var cityIndex = addressText.indexOf('市');
      if (cityIndex > 0 && cityIndex <= 4) {
        return addressText.slice(0, cityIndex);
      }
      return '';
    },
    splitFavoriteLists: function splitFavoriteLists(favorites) {
      try {
        // 确保输入是数组
        if (!Array.isArray(favorites)) {
          console.warn('[FoodFootprints] splitFavoriteLists: favorites 不是数组', (0, _typeof2.default)(favorites));
          return;
        }
        var foodList = [];
        var scenicList = [];
        var heritageList = [];
        var seenIds = {
          food: new Set(),
          scenic: new Set(),
          heritage: new Set()
        };
        favorites.forEach(function (item) {
          if (!item || !item.id) {
            return;
          }
          var type = item.favoriteType || 'heritage';
          var itemId = String(item.id); // 确保 ID 是字符串

          // 去重：如果该ID已经存在于对应类型的列表中，跳过
          if (type === 'food') {
            if (!seenIds.food.has(itemId)) {
              seenIds.food.add(itemId);
              foodList.push(item);
            }
          } else if (type === 'scenic') {
            if (!seenIds.scenic.has(itemId)) {
              seenIds.scenic.add(itemId);
              scenicList.push(item);
            }
          } else {
            if (!seenIds.heritage.has(itemId)) {
              seenIds.heritage.add(itemId);
              heritageList.push(item);
            }
          }
        });

        // 合并到现有列表时也要去重
        var mergeAndDeduplicate = function mergeAndDeduplicate(existingList, newList) {
          if (!Array.isArray(existingList)) {
            existingList = [];
          }
          if (!Array.isArray(newList)) {
            newList = [];
          }
          var idSet = new Set();
          var result = [];

          // 先添加现有列表中的项
          existingList.forEach(function (item) {
            if (item && item.id) {
              var itemId = String(item.id);
              if (!idSet.has(itemId)) {
                idSet.add(itemId);
                result.push(item);
              }
            }
          });

          // 再添加新列表中的项（跳过已存在的）
          newList.forEach(function (item) {
            if (item && item.id) {
              var itemId = String(item.id);
              if (!idSet.has(itemId)) {
                idSet.add(itemId);
                result.push(item);
              }
            }
          });
          return result;
        };

        // 确保列表已初始化
        if (!Array.isArray(this.favoriteFoodList)) {
          this.favoriteFoodList = [];
        }
        if (!Array.isArray(this.favoriteScenicList)) {
          this.favoriteScenicList = [];
        }
        if (!Array.isArray(this.favoriteHeritageList)) {
          this.favoriteHeritageList = [];
        }
        this.favoriteFoodList = mergeAndDeduplicate(this.favoriteFoodList, foodList);
        this.favoriteScenicList = mergeAndDeduplicate(this.favoriteScenicList, scenicList);
        this.favoriteHeritageList = mergeAndDeduplicate(this.favoriteHeritageList, heritageList);

        // 统计总收藏数，后续如需可在顶部其它位置展示
        this.stats.heritageFavoriteCount = favorites.length;
        console.log('[FoodFootprints] splitFavoriteLists 完成 - 美食:', foodList.length, '景点:', scenicList.length, '非遗:', heritageList.length);
      } catch (err) {
        console.error('[FoodFootprints] splitFavoriteLists error:', err);
        console.error('[FoodFootprints] splitFavoriteLists favorites:', favorites);
      }
    },
    mergeCityStats: function mergeCityStats() {
      var _this7 = this;
      // 从 visitedList 中重新统计所有数据，确保数据一致性
      var cityFoodCountMap = {};
      var cityScenicCountMap = {};
      var cityHeritageCountMap = {};
      var allCityNames = new Set();
      this.visitedList.forEach(function (item) {
        if (!item.city) return;
        allCityNames.add(item.city);
        if (item.type === 'food') {
          if (!cityFoodCountMap[item.city]) {
            cityFoodCountMap[item.city] = 0;
          }
          cityFoodCountMap[item.city] += 1;
        } else if (item.type === 'scenic') {
          if (!cityScenicCountMap[item.city]) {
            cityScenicCountMap[item.city] = 0;
          }
          cityScenicCountMap[item.city] += 1;
        } else if (item.type === 'heritage') {
          if (!cityHeritageCountMap[item.city]) {
            cityHeritageCountMap[item.city] = 0;
          }
          cityHeritageCountMap[item.city] += 1;
        }
      });
      var statsList = [];
      allCityNames.forEach(function (cityName) {
        var foodCount = cityFoodCountMap[cityName] || 0;
        var scenicCount = cityScenicCountMap[cityName] || 0;
        var heritageCount = cityHeritageCountMap[cityName] || 0;
        var config = _this7.findCityConfigByName(cityName);
        statsList.push({
          cityId: config ? config.id : '',
          cityName: cityName,
          tagline: config ? config.tagline : '',
          foodCount: foodCount,
          scenicCount: scenicCount,
          heritageCount: heritageCount,
          totalCount: foodCount + scenicCount + heritageCount
        });
      });
      statsList.sort(function (a, b) {
        if (b.totalCount !== a.totalCount) {
          return b.totalCount - a.totalCount;
        }
        return a.cityName.localeCompare(b.cityName);
      });
      this.cityStats = statsList;
      this.stats.citiesCount = statsList.length;
    },
    mergeVisitedList: function mergeVisitedList() {
      if (!Array.isArray(this.visitedList)) {
        this.visitedList = [];
        return;
      }

      // 去重：使用唯一标识符去重
      var seenKeys = new Set();
      var deduplicatedList = [];
      this.visitedList.forEach(function (item) {
        if (!item) return;

        // 生成唯一标识符：优先使用 poiId，其次使用 id，最后使用 uid
        var uniqueKey = '';
        if (item.poiId) {
          // 有 poiId 的记录（来自 POI 详情页），优先使用 poiId
          uniqueKey = "".concat(item.type, "-poi-").concat(item.poiId);
        } else if (item.id) {
          // 有 id 的记录（来自非遗记录）
          uniqueKey = "".concat(item.type, "-id-").concat(item.id);
        } else {
          // 使用 uid 作为唯一标识
          uniqueKey = item.uid || "".concat(item.type, "-").concat(item.title || '');
        }

        // 如果已经存在，跳过（保留第一个出现的记录）
        if (!seenKeys.has(uniqueKey)) {
          seenKeys.add(uniqueKey);
          deduplicatedList.push(item);
        } else {
          // 如果遇到重复，记录日志以便调试
          console.log('[FoodFootprints] 发现重复记录，已跳过:', uniqueKey, item.title);
        }
      });

      // 排序：按日期降序
      var sorted = deduplicatedList.sort(function (a, b) {
        var timeA = a.date || '';
        var timeB = b.date || '';
        return timeA < timeB ? 1 : timeA > timeB ? -1 : 0;
      });
      this.visitedList = sorted;

      // 从最终的 visitedList 中统计顶部数据，确保数据一致性
      this.stats.visitedFoodCount = this.visitedList.filter(function (item) {
        return item.type === 'food';
      }).length;
      this.stats.scenicExperiencedCount = this.visitedList.filter(function (item) {
        return item.type === 'scenic';
      }).length;
      this.stats.heritageExperiencedCount = this.visitedList.filter(function (item) {
        return item.type === 'heritage';
      }).length;
    },
    updateUserDataCache: function updateUserDataCache() {
      if (!this.privacyAgree) {
        return;
      }
      try {
        uni.setStorageSync('userData', {
          visitedCount: this.stats.visitedFoodCount,
          citiesCount: this.stats.citiesCount
        });
      } catch (e) {
        console.warn('[FoodFootprints] updateUserDataCache failed:', e);
      }
    },
    extractCityNameFromCheckin: function extractCityNameFromCheckin(item) {
      var explicitCity = (item.city || '').trim();
      if (explicitCity) {
        return this.normalizeCityName(explicitCity);
      }
      var locationText = (item.locationName || item.location || '').trim();
      if (!locationText) {
        return '';
      }
      var knownName = CITY_CONFIG.map(function (c) {
        return c.name;
      }).find(function (name) {
        return locationText.indexOf(name) !== -1;
      });
      if (knownName) {
        return knownName;
      }
      var cityIndex = locationText.indexOf('市');
      if (cityIndex > 0 && cityIndex <= 4) {
        return locationText.slice(0, cityIndex);
      }
      return '';
    },
    extractCityNameFromHeritage: function extractCityNameFromHeritage(item) {
      var explicitCity = (item.city || item.cityName || '').trim();
      if (explicitCity) {
        return this.normalizeCityName(explicitCity);
      }
      var regionText = (item.region || item.area || item.address || '').trim();
      if (!regionText) {
        return '';
      }
      var knownName = CITY_CONFIG.map(function (c) {
        return c.name;
      }).find(function (name) {
        return regionText.indexOf(name) !== -1;
      });
      if (knownName) {
        return knownName;
      }
      var cityIndex = regionText.indexOf('市');
      if (cityIndex > 0 && cityIndex <= 4) {
        return regionText.slice(0, cityIndex);
      }
      return '';
    },
    normalizeCityName: function normalizeCityName(name) {
      if (!name) {
        return '';
      }
      var trimmed = String(name).trim();
      if (!trimmed) {
        return '';
      }
      if (CITY_NAME_TO_ID[trimmed]) {
        var config = this.findCityConfigById(CITY_NAME_TO_ID[trimmed]);
        return config ? config.name : trimmed.replace(/市$/, '');
      }
      return trimmed.replace(/市$/, '');
    },
    resolveFavoriteType: function resolveFavoriteType(categoryText) {
      var text = String(categoryText || '').trim();
      if (!text) {
        return 'heritage';
      }
      if (text.includes('饮食') || text.includes('美食') || text.includes('食品')) {
        return 'food';
      }
      if (text.includes('民俗') || text.includes('节庆') || text.includes('习俗')) {
        return 'scenic';
      }
      return 'heritage';
    },
    findCityConfigByName: function findCityConfigByName(name) {
      if (!name) {
        return '';
      }
      var trimmed = String(name).trim();
      if (!trimmed) {
        return '';
      }
      if (CITY_NAME_TO_ID[trimmed]) {
        var config = this.findCityConfigById(CITY_NAME_TO_ID[trimmed]);
        return config ? config.name : trimmed.replace(/市$/, '');
      }
      return trimmed.replace(/市$/, '');
    }
  }, (0, _defineProperty2.default)(_methods, "findCityConfigByName", function findCityConfigByName(name) {
    var clean = this.normalizeCityName(name);
    return CITY_CONFIG.find(function (c) {
      return c.name === clean;
    }) || null;
  }), (0, _defineProperty2.default)(_methods, "findCityConfigById", function findCityConfigById(id) {
    return CITY_CONFIG.find(function (c) {
      return c.id === id;
    }) || null;
  }), (0, _defineProperty2.default)(_methods, "truncateText", function truncateText(text, maxLength) {
    var str = String(text || '');
    if (str.length <= maxLength) {
      return str;
    }
    return "".concat(str.slice(0, maxLength), "...");
  }), (0, _defineProperty2.default)(_methods, "formatDate", function formatDate(value) {
    if (!value) {
      return '';
    }
    try {
      if (typeof value === 'string') {
        var match = value.match(/^(\d{4}-\d{2}-\d{2})/);
        if (match) {
          return match[1];
        }
      }
      var date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return String(value);
      }
      var year = date.getFullYear();
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var day = String(date.getDate()).padStart(2, '0');
      return "".concat(year, "-").concat(month, "-").concat(day);
    } catch (e) {
      return String(value);
    }
  }), (0, _defineProperty2.default)(_methods, "switchMainTab", function switchMainTab(tab) {
    if (this.activeMainTab === tab) {
      return;
    }
    this.activeMainTab = tab;
  }), (0, _defineProperty2.default)(_methods, "switchCategoryTab", function switchCategoryTab(tab) {
    if (this.activeCategoryTab === tab) {
      return;
    }
    this.activeCategoryTab = tab;
  }), (0, _defineProperty2.default)(_methods, "switchFavoriteTab", function switchFavoriteTab(tab) {
    if (this.activeFavoriteTab === tab) {
      return;
    }
    this.activeFavoriteTab = tab;
  }), (0, _defineProperty2.default)(_methods, "goToMapFlavors", function goToMapFlavors() {
    uni.navigateTo({
      url: '/pages/index/Map-Flavors'
    });
  }), (0, _defineProperty2.default)(_methods, "goToCheckinRecords", function goToCheckinRecords() {
    uni.navigateTo({
      url: '/pages/mine/checkin-records'
    });
  }), (0, _defineProperty2.default)(_methods, "goToHeritageRecords", function goToHeritageRecords() {
    uni.navigateTo({
      url: '/pages/mine/heritage-records'
    });
  }), (0, _defineProperty2.default)(_methods, "openPoiDetail", function openPoiDetail(item) {
    if (!item || !item.poiId) {
      return;
    }
    var poiType = item.poiType || item.type || 'food';
    var url = '';
    if (poiType === 'food') {
      url = "/pages/index/FoodPoiDetail?id=".concat(item.poiId);
    } else if (poiType === 'scenic') {
      url = "/pages/index/ScenicPoiDetail?id=".concat(item.poiId);
    } else if (poiType === 'heritage') {
      url = "/pages/index/HeritagePoiDetail?id=".concat(item.poiId);
    }
    if (url) {
      uni.navigateTo({
        url: url
      });
    }
  }), (0, _defineProperty2.default)(_methods, "openPoiDetailFromFavorite", function openPoiDetailFromFavorite(item) {
    if (!item || !item.id) {
      return;
    }
    var poiType = item.poiType || 'food';
    var url = '';
    if (poiType === 'food') {
      url = "/pages/index/FoodPoiDetail?id=".concat(item.id);
    } else if (poiType === 'scenic') {
      url = "/pages/index/ScenicPoiDetail?id=".concat(item.id);
    } else if (poiType === 'heritage') {
      url = "/pages/index/HeritagePoiDetail?id=".concat(item.id);
    }
    if (url) {
      uni.navigateTo({
        url: url
      });
    }
  }), (0, _defineProperty2.default)(_methods, "openHeritageDetail", function openHeritageDetail(item) {
    var name = item && (item.name || item.title);
    if (!name) {
      uni.showToast({
        title: '地点信息不完整',
        icon: 'none'
      });
      return;
    }
    var encoded = encodeURIComponent(name);
    var favoriteType = item && item.favoriteType;
    var category = favoriteType && ['food', 'scenic', 'heritage'].includes(favoriteType) ? favoriteType : 'heritage';
    uni.navigateTo({
      url: "/pages/index/Map-Flavors?keyword=".concat(encoded, "&category=").concat(category)
    });
  }), _methods)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 215:
/*!************************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/food-footprints.vue?vue&type=style&index=0&id=94279e40&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_style_index_0_id_94279e40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./food-footprints.vue?vue&type=style&index=0&id=94279e40&lang=scss&scoped=true& */ 216);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_style_index_0_id_94279e40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_style_index_0_id_94279e40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_style_index_0_id_94279e40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_style_index_0_id_94279e40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_food_footprints_vue_vue_type_style_index_0_id_94279e40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/food-footprints.vue?vue&type=style&index=0&id=94279e40&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[208,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/food-footprints.js.map
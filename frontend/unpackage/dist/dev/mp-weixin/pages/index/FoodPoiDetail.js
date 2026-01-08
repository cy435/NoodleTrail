(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/FoodPoiDetail"],{

/***/ 81:
/*!********************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Findex%2FFoodPoiDetail"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _FoodPoiDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/index/FoodPoiDetail.vue */ 82));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_FoodPoiDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 82:
/*!*************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/FoodPoiDetail.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoodPoiDetail.vue?vue&type=template&id=5005ca12&scoped=true& */ 83);
/* harmony import */ var _FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoodPoiDetail.vue?vue&type=script&lang=js& */ 85);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _FoodPoiDetail_vue_vue_type_style_index_0_id_5005ca12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FoodPoiDetail.vue?vue&type=style&index=0&id=5005ca12&lang=scss&scoped=true& */ 90);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5005ca12",
  null,
  false,
  _FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/FoodPoiDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/*!********************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/FoodPoiDetail.vue?vue&type=template&id=5005ca12&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./FoodPoiDetail.vue?vue&type=template&id=5005ca12&scoped=true& */ 84);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_template_id_5005ca12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 84:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/FoodPoiDetail.vue?vue&type=template&id=5005ca12&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.ratingStars && _vm.ratingStars.length
  var g1 = _vm.normalizedTags && _vm.normalizedTags.length
  var g2 = _vm.recommendedDishes && _vm.recommendedDishes.length
  var l0 = g2
    ? _vm.__map(_vm.recommendedDishes, function (dish, __i0__) {
        var $orig = _vm.__get_orig(dish)
        var m0 = _vm.getDishImage(dish)
        var m1 = m0 ? _vm.getDishImage(dish) : null
        var m2 = _vm.canDeleteDish(dish)
        return {
          $orig: $orig,
          m0: m0,
          m1: m1,
          m2: m2,
        }
      })
    : null
  var g3 = _vm.comments && _vm.comments.length
  var l2 = g3
    ? _vm.__map(_vm.comments, function (item, __i1__) {
        var $orig = _vm.__get_orig(item)
        var g4 =
          !(item.avatarUrl || item.avatar) && item.userName
            ? item.userName.charAt(0)
            : null
        var l1 = item.score ? _vm.getCommentStars(item.score) : null
        var g5 = item.images && item.images.length
        return {
          $orig: $orig,
          g4: g4,
          l1: l1,
          g5: g5,
        }
      })
    : null
  var l3 = _vm.showCommentDialog
    ? _vm.__map(5, function (star, index) {
        var $orig = _vm.__get_orig(star)
        var m3 =
          Number(_vm.commentForm.score) > index &&
          Number(_vm.commentForm.score) > 0
        return {
          $orig: $orig,
          m3: m3,
        }
      })
    : null
  var m4 = _vm.showCommentDialog ? Number(_vm.commentForm.score) : null
  var g6 = _vm.showCommentDialog
    ? !_vm.commentForm.images ||
      _vm.commentForm.images.length < _vm.maxCommentImages
    : null
  var g7 = _vm.showAddToListDialog ? _vm.checklists.length : null
  var g8 = _vm.showAddToListDialog ? _vm.checklists.length : null
  var g9 = _vm.nearbyShops && _vm.nearbyShops.length
  var l4 = g9
    ? _vm.__map(_vm.nearbyShops, function (item, __i3__) {
        var $orig = _vm.__get_orig(item)
        var m5 = item.distance ? _vm.formatDistance(item.distance) : null
        return {
          $orig: $orig,
          m5: m5,
        }
      })
    : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        l0: l0,
        g3: g3,
        l2: l2,
        l3: l3,
        m4: m4,
        g6: g6,
        g7: g7,
        g8: g8,
        g9: g9,
        l4: l4,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 85:
/*!**************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/FoodPoiDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./FoodPoiDetail.vue?vue&type=script&lang=js& */ 86);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 86:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/FoodPoiDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  getPois = _require.getPois,
  submitPoiRecommendedDish = _require.submitPoiRecommendedDish,
  submitPoiComment = _require.submitPoiComment,
  deletePoiComment = _require.deletePoiComment,
  deleteRecommendDish = _require.deleteRecommendDish,
  updatePoiFavorite = _require.updatePoiFavorite,
  updatePoiExperience = _require.updatePoiExperience,
  reactPoiComment = _require.reactPoiComment,
  uploadImage = _require.uploadImage;
var _require2 = __webpack_require__(/*! ../../api/share.js */ 87),
  checkShared = _require2.checkShared,
  recordShare = _require2.recordShare;
var _require3 = __webpack_require__(/*! ../../api/foods.js */ 88),
  addFoodToChecklist = _require3.addFoodToChecklist;

// 腾讯位置服务路线规划插件配置：使用你在腾讯位置服务后台申请的「微信小程序」key
var AMAP_ROUTE_PLAN_KEY = 'PL2BZ-2QP6Q-OG45Q-BUYY4-QMEPK-4NB55';
var AMAP_ROUTE_PLAN_REFERER = '秦食匠艺';

// 当前页面对应的 POI 类型：1=美食
var POI_TYPE = 1;
var _default = {
  name: 'FoodPoiDetail',
  data: function data() {
    return {
      shop: {
        id: '',
        name: '',
        cover: '',
        // 评分相关：用于展示顶部的“评分 X.X 分”以及星级
        score: '',
        avgPrice: '',
        category: '',
        address: '',
        distance: '',
        // 单位：米
        latitude: null,
        longitude: null,
        phone: '',
        city: '',
        type: '',
        typeCode: '',
        alias: '',
        naviPoiId: '',
        entranceLatitude: null,
        entranceLongitude: null,
        openStatus: null,
        openingHours: ''
      },
      userLat: null,
      userLng: null,
      tags: [],
      businessTimeText: '',
      introText: '',
      tipsText: '',
      recommendedDishes: [],
      comments: [],
      nearbyShops: [],
      showMoreInfo: false,
      isFavorited: false,
      isExperienced: false,
      hasShared: false,
      navigationUrl: '',
      showRecentlyViewed: false,
      // 推荐菜 / 评论弹窗相关状态
      showDishDialog: false,
      dishForm: {
        name: '',
        price: '',
        image: ''
      },
      showCommentDialog: false,
      commentForm: {
        score: 0,
        content: '',
        images: []
      },
      submittingDish: false,
      submittingComment: false,
      // 评论图片相关配置
      maxCommentImages: 6,
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
      return this.shop.cover || '/static/assets/热门推荐.png';
    },
    displayScore: function displayScore() {
      if (!this.shop || this.shop.score === undefined || this.shop.score === null || this.shop.score === '') {
        return '0.0';
      }
      var num = Number(this.shop.score);
      if (Number.isNaN(num) || num < 0) {
        return '0.0';
      }
      return num.toFixed(1).replace(/\.0$/, '');
    },
    ratingValue: function ratingValue() {
      if (!this.shop || this.shop.score === undefined || this.shop.score === null || this.shop.score === '') {
        return 0;
      }
      var num = Number(this.shop.score);
      if (Number.isNaN(num) || num < 0) {
        return 0;
      }
      return num;
    },
    ratingStars: function ratingStars() {
      var value = this.ratingValue;
      if (!value) {
        return [];
      }
      var stars = [];
      var fullCount = Math.floor(value);
      var hasHalf = value - fullCount >= 0.5 && fullCount < 5;
      for (var i = 0; i < fullCount && stars.length < 5; i += 1) {
        stars.push('full');
      }
      if (hasHalf && stars.length < 5) {
        stars.push('half');
      }
      while (stars.length < 5) {
        stars.push('empty');
      }
      return stars;
    },
    ratingDesc: function ratingDesc() {
      var v = this.ratingValue;
      if (!v) {
        return '';
      }
      if (v >= 4) return '口碑不错';
      if (v >= 3) return '评价尚可';
      return '评价较少';
    },
    displayAvgPrice: function displayAvgPrice() {
      if (!this.shop || this.shop.avgPrice === undefined || this.shop.avgPrice === null || this.shop.avgPrice === '') {
        return '人均待定';
      }
      var num = Number(this.shop.avgPrice);
      if (Number.isNaN(num) || num <= 0) {
        return '人均待定';
      }
      return "\u4EBA\u5747\xA5".concat(Math.round(num));
    },
    driveInfoText: function driveInfoText() {
      var distance = this.shop && this.shop.distance;
      if (!distance) {
        return '';
      }
      var meters = Number(distance);
      if (Number.isNaN(meters) || meters <= 0) {
        return '';
      }
      var km = meters / 1000;
      var minutes = Math.max(3, Math.round(km / 20 * 60)); // 假设均速 20km/h
      var kmText = km >= 1 ? "".concat(km.toFixed(1).replace(/\.0$/, ''), "\u516C\u91CC") : "".concat(Math.round(meters), "\u7C73");
      return "\u9A7E\u8F66\u7EA6".concat(kmText, " ").concat(minutes, "\u5206\u949F");
    },
    walkTimeText: function walkTimeText() {
      var distance = this.shop && this.shop.distance;
      var meters = Number(distance);
      if (!distance || Number.isNaN(meters) || meters <= 0) {
        return '距离较近';
      }
      var minutes = Math.ceil(meters / 50);
      if (!minutes || minutes <= 0) {
        return '距离较近';
      }
      return "\u6B65\u884C".concat(minutes, "\u5206\u949F\u53EF\u8FBE");
    },
    normalizedTags: function normalizedTags() {
      var list = [];
      if (Array.isArray(this.tags)) {
        list.push.apply(list, (0, _toConsumableArray2.default)(this.tags));
      }
      if (!list.length && this.shop && this.shop.category) {
        list.push.apply(list, (0, _toConsumableArray2.default)(String(this.shop.category).split(/[;，、\/]/).map(function (s) {
          return s.trim();
        }).filter(Boolean)));
      }
      var generic = ['餐饮服务', '风景名胜', '购物服务', '生活服务', '公司企业', '政府机构及社会团体', '旅游服务', '休闲娱乐', '体育休闲服务'];
      var seen = new Set();
      var result = [];
      list.forEach(function (tag) {
        if (!tag) return;
        var cleaned = String(tag).replace(/#/g, '').trim();
        if (!cleaned) return;
        if (generic.indexOf(cleaned) !== -1) return;
        var key = cleaned.toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);
        result.push(cleaned);
      });
      return result.slice(0, 4);
    },
    smallTypeLabel: function smallTypeLabel() {
      var rawType = this.shop && this.shop.type ? String(this.shop.type).trim() : '';
      var fallback = this.shop && this.shop.category ? String(this.shop.category).trim() : '餐饮服务';
      if (!rawType) {
        return fallback || '餐饮服务';
      }
      var parts = rawType.split(/[;；]/).map(function (s) {
        return s.trim();
      }).filter(Boolean);
      if (!parts.length) {
        return fallback || rawType || '餐饮服务';
      }
      return parts[parts.length - 1];
    },
    navButtonText: function navButtonText() {
      if (this.shop && this.shop.entranceLatitude && this.shop.entranceLongitude) {
        return '精准导航';
      }
      return '导航';
    },
    defaultDishImage: function defaultDishImage() {
      return '/static/assets/热门推荐.png';
    }
  },
  onLoad: function onLoad(options) {
    var opt = options || {};
    this.shop.id = opt.id || '';
    this.shop.name = opt.name || '';
    this.shop.cover = opt.cover || '';
    this.shop.avgPrice = opt.avgPrice || '';
    this.shop.category = opt.category || '';
    this.shop.address = opt.address || '';
    this.shop.distance = opt.distance || '';
    this.shop.latitude = opt.latitude ? Number(opt.latitude) : null;
    this.shop.longitude = opt.longitude ? Number(opt.longitude) : null;

    // 兼容 score / rating 两种字段来源，优先使用显式传入的 score
    if (opt.score !== undefined && opt.score !== null && opt.score !== '') {
      this.shop.score = Number(opt.score);
    } else if (opt.rating !== undefined && opt.rating !== null && opt.rating !== '') {
      this.shop.score = Number(opt.rating);
    } else {
      this.shop.score = '';
    }
    this.shop.phone = opt.phone || '';

    // 列表页会传过来的用户位置（用于 /api/map/poi-detail 计算距离）
    if (opt.userLat) {
      this.userLat = Number(opt.userLat);
    }
    if (opt.userLng) {
      this.userLng = Number(opt.userLng);
    }
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
    if (opt.businessTime) {
      this.businessTimeText = decodeURIComponent(opt.businessTime);
    }
    if (this.shop.name) {
      uni.setNavigationBarTitle({
        title: this.shop.name
      });
    }
    this.updateRecentlyViewedFlag();
    this.initUserLocation();
    this.loadLocalState();
    this.checkShareStatus();
  },
  methods: {
    initUserLocation: function initUserLocation() {
      var _this = this;
      uni.getLocation({
        type: 'gcj02',
        success: function success(res) {
          _this.userLat = res.latitude;
          _this.userLng = res.longitude;
          // 定位成功后拉取一次后端详情（带上用户坐标）
          if (_this.fetchPoiDetail) {
            _this.fetchPoiDetail();
          }
        },
        fail: function fail() {
          // 即便无法获取定位，也尝试拉一次详情（不带坐标）
          if (_this.fetchPoiDetail) {
            _this.fetchPoiDetail();
          }
        }
      });
    },
    fetchPoiDetail: function fetchPoiDetail() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res, data, poi, entrLng, entrLat, el, parts, lng, lat, _lng, _lat, avg, scoreCandidates, mergedScore, pickScore, i, candidate, tagList;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_this2.shop || !_this2.shop.id || !getPoiDetail)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _context.prev = 2;
                _context.next = 5;
                return getPoiDetail({
                  id: _this2.shop.id,
                  type: 1,
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
                poi = data.poi || data; // 合并后端返回的字段到现有 shop 结构，保持已有样式不变
                if (poi.id != null) _this2.shop.id = poi.id;
                if (poi.name) _this2.shop.name = poi.name;
                if (poi.imageUrl || poi.cover || poi.image || poi.thumbnail) {
                  _this2.shop.cover = poi.imageUrl || poi.cover || poi.image || poi.thumbnail;
                }

                // 别名、类型编码、导航相关隐性字段
                if (poi.alias) _this2.shop.alias = poi.alias;
                if (poi.typecode) _this2.shop.typeCode = poi.typecode;
                if (poi.navi_poiid || poi.naviPoiId) {
                  _this2.shop.naviPoiId = poi.navi_poiid || poi.naviPoiId;
                }
                if (poi.entr_location) {
                  entrLng = null;
                  entrLat = null;
                  el = poi.entr_location;
                  if (typeof el === 'string') {
                    parts = el.split(',');
                    if (parts.length >= 2) {
                      lng = Number(parts[0]);
                      lat = Number(parts[1]);
                      if (!Number.isNaN(lng) && !Number.isNaN(lat)) {
                        entrLng = lng;
                        entrLat = lat;
                      }
                    }
                  } else if (el && (0, _typeof2.default)(el) === 'object') {
                    _lng = el.longitude != null ? Number(el.longitude) : NaN;
                    _lat = el.latitude != null ? Number(el.latitude) : NaN;
                    if (!Number.isNaN(_lng) && !Number.isNaN(_lat)) {
                      entrLng = _lng;
                      entrLat = _lat;
                    }
                  }
                  if (entrLng != null && entrLat != null) {
                    _this2.shop.entranceLongitude = entrLng;
                    _this2.shop.entranceLatitude = entrLat;
                  }
                }
                if (poi.avgPrice != null || poi.averagePrice != null || poi.price != null) {
                  avg = poi.avgPrice != null ? poi.avgPrice : poi.averagePrice != null ? poi.averagePrice : poi.price;
                  _this2.shop.avgPrice = avg;
                }
                if (poi.categoryName || poi.category || poi.type) {
                  _this2.shop.category = poi.categoryName || poi.category || poi.type;
                }
                if (poi.address) _this2.shop.address = poi.address;
                if (poi.distance != null) _this2.shop.distance = poi.distance;
                if (poi.latitude != null) _this2.shop.latitude = poi.latitude;
                if (poi.longitude != null) _this2.shop.longitude = poi.longitude;
                // 评分字段：对齐列表页的兜底逻辑，优先使用 rating，再兼容多种字段
                scoreCandidates = [];
                if (poi) {
                  scoreCandidates.push(poi.rating, poi.score, poi.commentScore, poi.comment_score);
                }
                scoreCandidates.push(data && data.rating, data && data.score, data && data.commentScore, data && data.comment_score);
                mergedScore = null;
                pickScore = function pickScore(raw) {
                  if (raw === undefined || raw === null || raw === '') return null;
                  var num = Number(raw);
                  if (Number.isNaN(num) || num <= 0) return null;
                  return num;
                };
                i = 0;
              case 31:
                if (!(i < scoreCandidates.length)) {
                  _context.next = 39;
                  break;
                }
                candidate = pickScore(scoreCandidates[i]);
                if (!(candidate != null)) {
                  _context.next = 36;
                  break;
                }
                mergedScore = candidate;
                return _context.abrupt("break", 39);
              case 36:
                i += 1;
                _context.next = 31;
                break;
              case 39:
                // 动态兜底：如果上面的常用字段都没有命中，则在 poi/data 上自动查找字段名包含 score/rating 的数值字段
                if (mergedScore == null && poi && (0, _typeof2.default)(poi) === 'object') {
                  Object.keys(poi).some(function (key) {
                    if (!/score|rating/i.test(key)) return false;
                    var candidate = pickScore(poi[key]);
                    if (candidate == null) return false;
                    mergedScore = candidate;
                    return true;
                  });
                }
                if (mergedScore == null && data && (0, _typeof2.default)(data) === 'object') {
                  Object.keys(data).some(function (key) {
                    if (!/score|rating/i.test(key)) return false;
                    var candidate = pickScore(data[key]);
                    if (candidate == null) return false;
                    mergedScore = candidate;
                    return true;
                  });
                }
                if (mergedScore != null) {
                  _this2.shop.score = mergedScore;
                }

                // 电话字段：兼容 tel / phone

                if (poi.tel || poi.phone) {
                  _this2.shop.phone = poi.tel || poi.phone;
                }

                // 城市 & 原始类型 & 营业状态等字段
                if (poi.city) _this2.shop.city = poi.city;
                if (poi.type) _this2.shop.type = poi.type;
                if (poi.openStatus !== undefined && poi.openStatus !== null) {
                  _this2.shop.openStatus = poi.openStatus;
                }
                if (poi.openingHours) {
                  _this2.shop.openingHours = poi.openingHours;
                }

                // 标签：优先使用高德 tag 字段，其次使用后端 tags 数组
                if (poi.tag) {
                  tagList = String(poi.tag).split(/[，,]/).map(function (s) {
                    return s.trim();
                  }).filter(Boolean);
                  if (tagList.length) {
                    _this2.tags = tagList;
                  }
                } else if (Array.isArray(poi.tags)) {
                  _this2.tags = poi.tags;
                }

                // 店铺介绍 / 小贴士
                if (typeof data.intro === 'string') {
                  _this2.introText = data.intro;
                }
                if (typeof data.tips === 'string') {
                  _this2.tipsText = data.tips;
                }

                // 营业时间：detail.businessTime / poi.businessTime / poi.openingHours
                if (data.businessTime) {
                  _this2.businessTimeText = data.businessTime;
                } else if (poi.businessTime || poi.openingHours) {
                  _this2.businessTimeText = poi.businessTime || poi.openingHours;
                }

                // 收藏 / 体验状态：优先使用后端返回的字段
                if (Object.prototype.hasOwnProperty.call(data, 'favorite')) {
                  _this2.isFavorited = !!data.favorite;
                }
                if (Object.prototype.hasOwnProperty.call(data, 'experienced')) {
                  _this2.isExperienced = !!data.experienced;
                }

                // 附近推荐：基于当前门店经纬度拉取周边同类型门店
                _this2.loadNearbyShops();

                // 后端如返回推荐菜 / 评论，可直接替换掉本地 mock

                if (Array.isArray(data.recommendedDishes) && data.recommendedDishes.length) {
                  _this2.recommendedDishes = _this2.aggregateRecommendedDishes(data.recommendedDishes);
                }
                if (Array.isArray(data.comments) && data.comments.length) {
                  _this2.comments = _this2.normalizeCommentList(data.comments);
                }
                if (_this2.shop.name) {
                  uni.setNavigationBarTitle({
                    title: _this2.shop.name
                  });
                }
                _context.next = 62;
                break;
              case 59:
                _context.prev = 59;
                _context.t0 = _context["catch"](2);
                console.warn('[FoodPoiDetail] fetchPoiDetail fail:', _context.t0);
              case 62:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 59]]);
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
    openMap: function openMap() {
      var targetLat = this.shop.entranceLatitude || this.shop.latitude;
      var targetLng = this.shop.entranceLongitude || this.shop.longitude;
      if (!targetLat || !targetLng) {
        uni.showToast({
          title: '暂无位置信息',
          icon: 'none'
        });
        return;
      }
      var name = this.shop.name || '美食门店';
      var address = this.shop.address || '';

      // 优先使用腾讯位置服务路线规划插件（仅在微信小程序内有效）
      if (typeof wx !== 'undefined' && wx.navigateTo && AMAP_ROUTE_PLAN_KEY) {
        try {
          var endPoint = JSON.stringify({
            name: name,
            latitude: Number(targetLat),
            longitude: Number(targetLng)
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
              console.warn('[FoodPoiDetail] 路线规划插件失败，使用微信原生地图:', err);
              uni.openLocation({
                latitude: Number(targetLat),
                longitude: Number(targetLng),
                name: name,
                address: address,
                scale: 18
              });
            }
          });
          return;
        } catch (e) {
          // 如果插件跳转失败，则回退到微信原生地图
          console.warn('[FoodPoiDetail] 路线规划插件异常，使用微信原生地图:', e);
        }
      }

      // 回退：直接打开微信原生地图
      uni.openLocation({
        latitude: Number(targetLat),
        longitude: Number(targetLng),
        name: name,
        address: address,
        scale: 18
      });
    },
    callPhone: function callPhone() {
      var raw = this.shop && this.shop.phone;
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
    // 获取推荐菜图片
    getDishImage: function getDishImage(dish) {
      if (!dish) return '';
      var candidates = [dish.image, dish.imageUrl, dish.cover, dish.thumbnail, dish.dishImage];
      for (var _i = 0, _candidates = candidates; _i < _candidates.length; _i++) {
        var url = _candidates[_i];
        if (url && typeof url === 'string' && url.trim()) {
          var trimmed = url.trim();
          // 过滤掉临时路径和无效值
          if (trimmed.startsWith('tmp/') || trimmed.startsWith('http://tmp/') || trimmed.startsWith('https://tmp/') || trimmed === 'null' || trimmed === 'undefined') {
            continue;
          }
          // 返回有效的URL
          if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/') || trimmed.startsWith('data:image/')) {
            return trimmed;
          }
        }
      }
      return '';
    },
    // 处理推荐菜图片加载错误
    handleDishImageError: function handleDishImageError(dish, e) {
      console.warn('[FoodPoiDetail] 推荐菜图片加载失败:', dish.id, e);
      this.$set(dish, '_imageError', true);
    },
    // 写评论弹窗内：选择/预览/删除图片（选择后立即上传）
    chooseCommentImages: function chooseCommentImages() {
      var _this3 = this;
      var max = this.maxCommentImages || 6;
      var current = Array.isArray(this.commentForm.images) ? this.commentForm.images : [];
      var remain = max - current.length;
      if (remain <= 0) {
        uni.showToast({
          title: "\u6700\u591A\u9009\u62E9".concat(max, "\u5F20\u56FE\u7247"),
          icon: 'none'
        });
        return;
      }
      uni.chooseImage({
        count: remain,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function () {
          var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {
            var tempPaths, uploadedUrls, i, imageUrl, newImages;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    tempPaths = res.tempFilePaths || [];
                    if (!(tempPaths.length === 0)) {
                      _context2.next = 3;
                      break;
                    }
                    return _context2.abrupt("return");
                  case 3:
                    // 显示上传进度提示
                    uni.showLoading({
                      title: '上传图片中...',
                      mask: true
                    });
                    _context2.prev = 4;
                    // 逐个上传图片，获取服务器 URL
                    uploadedUrls = [];
                    i = 0;
                  case 7:
                    if (!(i < tempPaths.length)) {
                      _context2.next = 23;
                      break;
                    }
                    _context2.prev = 8;
                    _context2.next = 11;
                    return uploadImage(tempPaths[i]);
                  case 11:
                    imageUrl = _context2.sent;
                    uploadedUrls.push(imageUrl);
                    console.log("[FoodPoiDetail] \u56FE\u7247 ".concat(i + 1, "/").concat(tempPaths.length, " \u4E0A\u4F20\u6210\u529F:"), imageUrl);
                    _context2.next = 20;
                    break;
                  case 16:
                    _context2.prev = 16;
                    _context2.t0 = _context2["catch"](8);
                    console.error("[FoodPoiDetail] \u56FE\u7247 ".concat(i + 1, " \u4E0A\u4F20\u5931\u8D25:"), _context2.t0);
                    uni.showToast({
                      title: "\u7B2C".concat(i + 1, "\u5F20\u56FE\u7247\u4E0A\u4F20\u5931\u8D25: ").concat(_context2.t0.message || '未知错误'),
                      icon: 'none',
                      duration: 3000
                    });
                    // 上传失败的图片跳过，不添加到列表
                  case 20:
                    i++;
                    _context2.next = 7;
                    break;
                  case 23:
                    // 将上传成功的 URL 添加到图片列表
                    if (uploadedUrls.length > 0) {
                      newImages = current.concat(uploadedUrls).slice(0, max);
                      _this3.commentForm.images = newImages;
                      console.log('[FoodPoiDetail] 图片上传完成，当前图片列表:', newImages);
                    } else {
                      uni.showToast({
                        title: '所有图片上传失败',
                        icon: 'none'
                      });
                    }
                    _context2.next = 30;
                    break;
                  case 26:
                    _context2.prev = 26;
                    _context2.t1 = _context2["catch"](4);
                    console.error('[FoodPoiDetail] chooseCommentImages upload error:', _context2.t1);
                    uni.showToast({
                      title: '上传图片失败',
                      icon: 'none'
                    });
                  case 30:
                    _context2.prev = 30;
                    uni.hideLoading();
                    return _context2.finish(30);
                  case 33:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[4, 26, 30, 33], [8, 16]]);
          }));
          function success(_x) {
            return _success.apply(this, arguments);
          }
          return success;
        }(),
        fail: function fail(err) {
          console.error('[FoodPoiDetail] chooseCommentImages error:', err);
          if (err.errMsg && !err.errMsg.includes('cancel')) {
            uni.showToast({
              title: '选择图片失败',
              icon: 'none'
            });
          }
        }
      });
    },
    removeCommentImage: function removeCommentImage(index) {
      if (!Array.isArray(this.commentForm.images)) return;
      if (index < 0 || index >= this.commentForm.images.length) return;
      this.commentForm.images.splice(index, 1);
    },
    previewCommentFormImage: function previewCommentFormImage(index) {
      if (!Array.isArray(this.commentForm.images) || !this.commentForm.images.length) return;
      uni.previewImage({
        current: this.commentForm.images[index],
        urls: this.commentForm.images
      });
    },
    // 推荐菜弹窗：选择/预览/删除图片（选择后立即上传）
    chooseDishImage: function chooseDishImage() {
      var _this4 = this;
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function () {
          var _success2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {
            var paths, tempPath, imageUrl;
            return _regenerator.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    paths = res.tempFilePaths || [];
                    if (!(paths.length === 0)) {
                      _context3.next = 3;
                      break;
                    }
                    return _context3.abrupt("return");
                  case 3:
                    tempPath = paths[0]; // 显示上传进度提示
                    uni.showLoading({
                      title: '上传图片中...',
                      mask: true
                    });
                    _context3.prev = 5;
                    _context3.next = 8;
                    return uploadImage(tempPath);
                  case 8:
                    imageUrl = _context3.sent;
                    _this4.dishForm.image = imageUrl;
                    console.log('[FoodPoiDetail] 推荐菜图片上传成功:', imageUrl);
                    _context3.next = 17;
                    break;
                  case 13:
                    _context3.prev = 13;
                    _context3.t0 = _context3["catch"](5);
                    console.error('[FoodPoiDetail] 推荐菜图片上传失败:', _context3.t0);
                    uni.showToast({
                      title: "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25: ".concat(_context3.t0.message || '未知错误'),
                      icon: 'none',
                      duration: 3000
                    });
                  case 17:
                    _context3.prev = 17;
                    uni.hideLoading();
                    return _context3.finish(17);
                  case 20:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[5, 13, 17, 20]]);
          }));
          function success(_x2) {
            return _success2.apply(this, arguments);
          }
          return success;
        }(),
        fail: function fail(err) {
          console.error('[FoodPoiDetail] chooseDishImage error:', err);
          if (err.errMsg && !err.errMsg.includes('cancel')) {
            uni.showToast({
              title: '选择图片失败',
              icon: 'none'
            });
          }
        }
      });
    },
    removeDishImage: function removeDishImage() {
      if (this.dishForm) {
        this.dishForm.image = '';
      }
    },
    previewDishImage: function previewDishImage() {
      if (!this.dishForm || !this.dishForm.image) return;
      var url = this.dishForm.image;
      uni.previewImage({
        current: url,
        urls: [url]
      });
    },
    onAddDish: function onAddDish() {
      this.openDishDialog();
    },
    onAddComment: function onAddComment() {
      this.openCommentDialog();
    },
    openDishDialog: function openDishDialog() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({
          title: '店铺信息未就绪',
          icon: 'none'
        });
        return;
      }
      this.dishForm = {
        name: '',
        price: '',
        image: ''
      };
      this.showDishDialog = true;
    },
    closeDishDialog: function closeDishDialog() {
      this.showDishDialog = false;
    },
    submitDishRecommendation: function submitDishRecommendation() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var name, image, priceNum, num, payload, res, combinedList;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!_this5.shop || !_this5.shop.id)) {
                  _context4.next = 3;
                  break;
                }
                uni.showToast({
                  title: '店铺信息未就绪',
                  icon: 'none'
                });
                return _context4.abrupt("return");
              case 3:
                name = (_this5.dishForm.name || '').trim();
                image = _this5.dishForm && _this5.dishForm.image ? String(_this5.dishForm.image).trim() : ''; // 如果图片是临时路径，需要先上传
                if (!(image && (image.startsWith('tmp/') || image.startsWith('http://tmp/') || image.startsWith('https://tmp/')))) {
                  _context4.next = 21;
                  break;
                }
                uni.showLoading({
                  title: '上传图片中...',
                  mask: true
                });
                _context4.prev = 7;
                _context4.next = 10;
                return uploadImage(image);
              case 10:
                image = _context4.sent;
                _this5.dishForm.image = image;
                _context4.next = 20;
                break;
              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](7);
                uni.hideLoading();
                console.error('[FoodPoiDetail] 推荐菜图片上传失败:', _context4.t0);
                uni.showToast({
                  title: '图片上传失败，请重试',
                  icon: 'none'
                });
                return _context4.abrupt("return");
              case 20:
                uni.hideLoading();
              case 21:
                if (!(!name && !image)) {
                  _context4.next = 24;
                  break;
                }
                uni.showToast({
                  title: '请填写菜名或选择图片',
                  icon: 'none'
                });
                return _context4.abrupt("return");
              case 24:
                if (!_this5.submittingDish) {
                  _context4.next = 26;
                  break;
                }
                return _context4.abrupt("return");
              case 26:
                _this5.submittingDish = true;
                _context4.prev = 27;
                if (_this5.dishForm.price !== '' && _this5.dishForm.price !== null && _this5.dishForm.price !== undefined) {
                  num = Number(_this5.dishForm.price);
                  if (!Number.isNaN(num) && num > 0) {
                    priceNum = num;
                  }
                }
                payload = {
                  poiId: _this5.shop.id
                };
                if (name) {
                  payload.dishName = name;
                }
                if (image) {
                  // 确保只传 URL，过滤掉临时路径
                  if (image.startsWith('http://') || image.startsWith('https://')) {
                    payload.image = image;
                  } else {
                    console.warn('[FoodPoiDetail] 过滤掉无效的图片路径:', image);
                  }
                }
                if (priceNum !== undefined) {
                  payload.price = priceNum;
                }
                _context4.next = 35;
                return submitPoiRecommendedDish(payload);
              case 35:
                res = _context4.sent;
                uni.showToast({
                  title: '推荐已提交，感谢分享',
                  icon: 'none'
                });
                _this5.showDishDialog = false;
                combinedList = [];
                if (res && Array.isArray(res.recommendedDishes)) {
                  combinedList = res.recommendedDishes;
                } else {
                  combinedList = (_this5.recommendedDishes || []).concat([{
                    id: "local-".concat(Date.now()),
                    name: name || '推荐菜',
                    price: priceNum,
                    image: image,
                    imageUrl: image,
                    recommendCount: 1,
                    _localCreatedByMe: true,
                    canDelete: true,
                    isLocal: true
                  }]);
                }
                _this5.recommendedDishes = _this5.aggregateRecommendedDishes(combinedList);
                _context4.next = 47;
                break;
              case 43:
                _context4.prev = 43;
                _context4.t1 = _context4["catch"](27);
                console.warn('[FoodPoiDetail] submitPoiRecommendedDish fail:', _context4.t1);
                uni.showToast({
                  title: '提交失败，请稍后再试',
                  icon: 'none'
                });
              case 47:
                _context4.prev = 47;
                _this5.submittingDish = false;
                return _context4.finish(47);
              case 50:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[7, 14], [27, 43, 47, 50]]);
      }))();
    },
    openCommentDialog: function openCommentDialog() {
      if (!this.shop || !this.shop.id) {
        uni.showToast({
          title: '店铺信息未就绪',
          icon: 'none'
        });
        return;
      }
      this.commentForm = {
        score: 0,
        content: '',
        images: []
      };
      this.showCommentDialog = true;
    },
    closeCommentDialog: function closeCommentDialog() {
      this.showCommentDialog = false;
    },
    setCommentScore: function setCommentScore(index) {
      var idx = Number(index);
      if (Number.isNaN(idx)) {
        this.commentForm.score = 0;
        return;
      }
      var rating = Math.min(5, Math.max(1, Math.round(idx + 1)));
      this.commentForm.score = rating;
    },
    submitComment: function submitComment() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var content, num, payload, images, res;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(!_this6.shop || !_this6.shop.id)) {
                  _context5.next = 3;
                  break;
                }
                uni.showToast({
                  title: '店铺信息未就绪',
                  icon: 'none'
                });
                return _context5.abrupt("return");
              case 3:
                content = (_this6.commentForm.content || '').trim();
                if (content) {
                  _context5.next = 7;
                  break;
                }
                uni.showToast({
                  title: '请填写评论内容',
                  icon: 'none'
                });
                return _context5.abrupt("return");
              case 7:
                num = Number(_this6.commentForm.score);
                if (!(Number.isNaN(num) || num < 1 || num > 5)) {
                  _context5.next = 11;
                  break;
                }
                uni.showToast({
                  title: '请先选择评分',
                  icon: 'none'
                });
                return _context5.abrupt("return");
              case 11:
                if (!_this6.submittingComment) {
                  _context5.next = 13;
                  break;
                }
                return _context5.abrupt("return");
              case 13:
                _this6.submittingComment = true;
                _context5.prev = 14;
                payload = {
                  poiId: _this6.shop.id,
                  content: content,
                  score: num
                }; // 只传 URL 数组，过滤掉临时路径（以防万一）
                images = Array.isArray(_this6.commentForm.images) ? _this6.commentForm.images.filter(function (url) {
                  // 过滤掉临时路径和无效值
                  if (!url || typeof url !== 'string') return false;
                  var trimmed = url.trim();
                  // 过滤掉 tmp/ 开头的临时路径
                  if (trimmed.startsWith('tmp/') || trimmed.startsWith('http://tmp/') || trimmed.startsWith('https://tmp/')) {
                    console.warn('[FoodPoiDetail] 过滤掉临时路径:', trimmed);
                    return false;
                  }
                  // 只保留 http/https 开头的 URL
                  return trimmed.startsWith('http://') || trimmed.startsWith('https://');
                }) : [];
                if (images.length) {
                  payload.images = images;
                }
                _context5.next = 20;
                return submitPoiComment(payload);
              case 20:
                res = _context5.sent;
                uni.showToast({
                  title: '评论已提交，感谢反馈',
                  icon: 'none'
                });
                _this6.showCommentDialog = false;
                if (res && Array.isArray(res.comments)) {
                  _this6.comments = _this6.normalizeCommentList(res.comments);
                } else {
                  _this6.comments = _this6.normalizeCommentList([{
                    id: "local-".concat(Date.now()),
                    userName: '',
                    score: payload.score,
                    date: new Date().toISOString(),
                    content: content,
                    images: images,
                    likeCount: 0,
                    dislikeCount: 0,
                    isLocal: true
                  }].concat((0, _toConsumableArray2.default)(_this6.comments)));
                }
                _context5.next = 30;
                break;
              case 26:
                _context5.prev = 26;
                _context5.t0 = _context5["catch"](14);
                console.warn('[FoodPoiDetail] submitPoiComment fail:', _context5.t0);
                uni.showToast({
                  title: '提交失败，请稍后再试',
                  icon: 'none'
                });
              case 30:
                _context5.prev = 30;
                _this6.submittingComment = false;
                return _context5.finish(30);
              case 33:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[14, 26, 30, 33]]);
      }))();
    },
    getCommentStars: function getCommentStars(rawScore) {
      if (rawScore === undefined || rawScore === null || rawScore === '') return [];
      var value = Number(rawScore);
      if (Number.isNaN(value) || value <= 0) return [];
      var stars = [];
      var fullCount = Math.floor(value);
      var hasHalf = value - fullCount >= 0.5 && fullCount < 5;
      for (var i = 0; i < fullCount && stars.length < 5; i += 1) {
        stars.push('full');
      }
      if (hasHalf && stars.length < 5) {
        stars.push('half');
      }
      while (stars.length < 5) {
        stars.push('empty');
      }
      return stars;
    },
    ensureCommentInteractionState: function ensureCommentInteractionState(item) {
      if (!item) return;
      if (item._liked == null) item._liked = false;
      if (item._disliked == null) item._disliked = false;
      if (typeof item.likeCount !== 'number') {
        var raw = item.likeCount != null ? item.likeCount : 0;
        var num = Number(raw);
        item.likeCount = Number.isNaN(num) ? 0 : num;
      }
      var rawDislike = item.dislikeCount;
      if (rawDislike == null && item.unlikeCount != null) {
        rawDislike = item.unlikeCount;
      }
      if (typeof rawDislike !== 'number') {
        var _num = rawDislike != null ? Number(rawDislike) : 0;
        item.dislikeCount = Number.isNaN(_num) ? 0 : _num;
      } else {
        item.dislikeCount = rawDislike;
      }
      item.unlikeCount = item.dislikeCount;
    },
    onLikeComment: function onLikeComment(item) {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var currentLiked, reaction, res, payload, likeCount, dislikeCount, r;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(!item || !item.id)) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return");
              case 2:
                if (!item._reacting) {
                  _context6.next = 4;
                  break;
                }
                return _context6.abrupt("return");
              case 4:
                _this7.ensureCommentInteractionState(item);
                currentLiked = item._liked === true;
                reaction = currentLiked ? 0 : 1;
                item._reacting = true;
                _context6.prev = 8;
                _context6.next = 11;
                return reactPoiComment({
                  commentId: item.id,
                  reaction: reaction
                });
              case 11:
                res = _context6.sent;
                if (res) {
                  _context6.next = 14;
                  break;
                }
                return _context6.abrupt("return");
              case 14:
                payload = res;
                likeCount = Number(payload.likeCount);
                dislikeCount = Number(payload.dislikeCount);
                if (!Number.isNaN(likeCount)) {
                  item.likeCount = likeCount;
                }
                if (!Number.isNaN(dislikeCount)) {
                  item.dislikeCount = dislikeCount;
                  item.unlikeCount = dislikeCount;
                }
                r = Number(payload.reaction);
                item._liked = r === 1;
                item._disliked = r === -1;
                _context6.next = 28;
                break;
              case 24:
                _context6.prev = 24;
                _context6.t0 = _context6["catch"](8);
                console.warn('[FoodPoiDetail] react like fail:', _context6.t0);
                uni.showToast({
                  title: '操作失败，请稍后再试',
                  icon: 'none'
                });
              case 28:
                _context6.prev = 28;
                item._reacting = false;
                return _context6.finish(28);
              case 31:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[8, 24, 28, 31]]);
      }))();
    },
    onDislikeComment: function onDislikeComment(item) {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var currentDisliked, reaction, res, payload, likeCount, dislikeCount, r;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(!item || !item.id)) {
                  _context7.next = 2;
                  break;
                }
                return _context7.abrupt("return");
              case 2:
                if (!item._reacting) {
                  _context7.next = 4;
                  break;
                }
                return _context7.abrupt("return");
              case 4:
                _this8.ensureCommentInteractionState(item);
                currentDisliked = item._disliked === true;
                reaction = currentDisliked ? 0 : -1;
                item._reacting = true;
                _context7.prev = 8;
                _context7.next = 11;
                return reactPoiComment({
                  commentId: item.id,
                  reaction: reaction
                });
              case 11:
                res = _context7.sent;
                if (res) {
                  _context7.next = 14;
                  break;
                }
                return _context7.abrupt("return");
              case 14:
                payload = res;
                likeCount = Number(payload.likeCount);
                dislikeCount = Number(payload.dislikeCount);
                if (!Number.isNaN(likeCount)) {
                  item.likeCount = likeCount;
                }
                if (!Number.isNaN(dislikeCount)) {
                  item.dislikeCount = dislikeCount;
                  item.unlikeCount = dislikeCount;
                }
                r = Number(payload.reaction);
                item._liked = r === 1;
                item._disliked = r === -1;
                _context7.next = 28;
                break;
              case 24:
                _context7.prev = 24;
                _context7.t0 = _context7["catch"](8);
                console.warn('[FoodPoiDetail] react dislike fail:', _context7.t0);
                uni.showToast({
                  title: '操作失败，请稍后再试',
                  icon: 'none'
                });
              case 28:
                _context7.prev = 28;
                item._reacting = false;
                return _context7.finish(28);
              case 31:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[8, 24, 28, 31]]);
      }))();
    },
    onDeleteComment: function onDeleteComment(item) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var rawId, idStr, isLocal, numericId, res;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (item) {
                  _context8.next = 2;
                  break;
                }
                return _context8.abrupt("return");
              case 2:
                rawId = item.id;
                idStr = rawId != null ? String(rawId) : ''; // 本地临时评论（local- 开头或标记为 isLocal）只做前端删除，不调用后端
                isLocal = idStr.startsWith('local-') || item.isLocal === true;
                numericId = /^[0-9]+$/.test(idStr) ? idStr : '';
                if (!(isLocal || !numericId)) {
                  _context8.next = 10;
                  break;
                }
                _this9.comments = (_this9.comments || []).filter(function (c) {
                  return c !== item && c.id !== rawId;
                });
                uni.showToast({
                  title: '已删除本地评论',
                  icon: 'none'
                });
                return _context8.abrupt("return");
              case 10:
                _context8.prev = 10;
                _context8.next = 13;
                return deletePoiComment(numericId);
              case 13:
                res = _context8.sent;
                if (!(res === null)) {
                  _context8.next = 17;
                  break;
                }
                uni.showToast({
                  title: '删除失败，请稍后再试',
                  icon: 'none'
                });
                return _context8.abrupt("return");
              case 17:
                _this9.comments = (_this9.comments || []).filter(function (c) {
                  return c.id !== rawId;
                });
                uni.showToast({
                  title: '评论已删除',
                  icon: 'none'
                });
                _context8.next = 25;
                break;
              case 21:
                _context8.prev = 21;
                _context8.t0 = _context8["catch"](10);
                console.warn('[FoodPoiDetail] deletePoiComment fail:', _context8.t0);
                uni.showToast({
                  title: '删除失败，请稍后再试',
                  icon: 'none'
                });
              case 25:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[10, 21]]);
      }))();
    },
    onDeleteDish: function onDeleteDish(dish) {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var rawId, idStr, isLocal, numericId, res;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (dish) {
                  _context9.next = 2;
                  break;
                }
                return _context9.abrupt("return");
              case 2:
                rawId = dish.id;
                idStr = rawId != null ? String(rawId) : ''; // 本地临时推荐（local- 开头或标记为 isLocal/_localCreatedByMe）只做前端删除
                isLocal = idStr.startsWith('local-') || dish.isLocal === true || dish._localCreatedByMe === true;
                numericId = /^[0-9]+$/.test(idStr) ? idStr : '';
                if (!(isLocal || !numericId)) {
                  _context9.next = 10;
                  break;
                }
                _this10.recommendedDishes = (_this10.recommendedDishes || []).filter(function (d) {
                  return d !== dish && d.id !== rawId;
                });
                uni.showToast({
                  title: '已删除本地推荐',
                  icon: 'none'
                });
                return _context9.abrupt("return");
              case 10:
                _context9.prev = 10;
                _context9.next = 13;
                return deleteRecommendDish(numericId);
              case 13:
                res = _context9.sent;
                if (!(res === null)) {
                  _context9.next = 17;
                  break;
                }
                uni.showToast({
                  title: '删除失败，请稍后再试',
                  icon: 'none'
                });
                return _context9.abrupt("return");
              case 17:
                _this10.recommendedDishes = (_this10.recommendedDishes || []).filter(function (d) {
                  return d.id !== rawId;
                });
                uni.showToast({
                  title: '推荐菜已删除',
                  icon: 'none'
                });
                _context9.next = 25;
                break;
              case 21:
                _context9.prev = 21;
                _context9.t0 = _context9["catch"](10);
                console.warn('[FoodPoiDetail] deleteRecommendDish fail:', _context9.t0);
                uni.showToast({
                  title: '删除失败，请稍后再试',
                  icon: 'none'
                });
              case 25:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[10, 21]]);
      }))();
    },
    canDeleteDish: function canDeleteDish(dish) {
      if (!dish) return false;
      if (dish.canDelete === true) return true;
      if (dish.isOwner === true || dish.mine === true) return true;
      if (dish._localCreatedByMe === true) return true;
      return false;
    },
    openNearbyShop: function openNearbyShop(item) {
      if (!item || !item.id) {
        return;
      }
      var query = [];
      var push = function push(key, value) {
        if (value === undefined || value === null || value === '') return;
        query.push("".concat(key, "=").concat(encodeURIComponent(String(value))));
      };
      push('id', item.id);
      push('name', item.name);
      push('cover', item.cover);
      push('distance', item.distance);
      push('latitude', item.latitude);
      push('longitude', item.longitude);
      push('userLat', this.userLat);
      push('userLng', this.userLng);
      var queryStr = query.join('&');
      uni.navigateTo({
        url: "/pages/index/FoodPoiDetail?".concat(queryStr)
      });
    },
    toggleFavorite: function toggleFavorite() {
      var _this11 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var current, target, res, finalState;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(!_this11.shop || !_this11.shop.id)) {
                  _context10.next = 3;
                  break;
                }
                uni.showToast({
                  title: '店铺信息未就绪',
                  icon: 'none'
                });
                return _context10.abrupt("return");
              case 3:
                current = !!_this11.isFavorited;
                target = !current;
                _context10.prev = 5;
                _context10.next = 8;
                return updatePoiFavorite({
                  poiId: _this11.shop.id,
                  type: POI_TYPE,
                  favorite: target
                });
              case 8:
                res = _context10.sent;
                if (!(res == null)) {
                  _context10.next = 11;
                  break;
                }
                throw new Error('接口返回异常');
              case 11:
                finalState = !!res;
                _this11.isFavorited = finalState;
                _this11.saveLocalState();
                uni.showToast({
                  title: _this11.isFavorited ? '已收藏' : '已取消收藏',
                  icon: 'none'
                });
                _context10.next = 21;
                break;
              case 17:
                _context10.prev = 17;
                _context10.t0 = _context10["catch"](5);
                console.warn('[FoodPoiDetail] toggleFavorite fail:', _context10.t0);
                uni.showToast({
                  title: '操作失败，请稍后重试',
                  icon: 'none'
                });
              case 21:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[5, 17]]);
      }))();
    },
    toggleExperienced: function toggleExperienced() {
      var _this12 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var current, target, res, finalState;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!(!_this12.shop || !_this12.shop.id)) {
                  _context11.next = 3;
                  break;
                }
                uni.showToast({
                  title: '店铺信息未就绪',
                  icon: 'none'
                });
                return _context11.abrupt("return");
              case 3:
                current = !!_this12.isExperienced;
                target = !current;
                _context11.prev = 5;
                _context11.next = 8;
                return updatePoiExperience({
                  poiId: _this12.shop.id,
                  type: POI_TYPE,
                  experienced: target
                });
              case 8:
                res = _context11.sent;
                if (!(res == null)) {
                  _context11.next = 11;
                  break;
                }
                throw new Error('接口返回异常');
              case 11:
                finalState = !!res;
                _this12.isExperienced = finalState;
                _this12.saveLocalState();
                uni.showToast({
                  title: _this12.isExperienced ? '已体验' : '已取消体验标记',
                  icon: 'none'
                });
                _context11.next = 21;
                break;
              case 17:
                _context11.prev = 17;
                _context11.t0 = _context11["catch"](5);
                console.warn('[FoodPoiDetail] toggleExperienced fail:', _context11.t0);
                uni.showToast({
                  title: '操作失败，请稍后重试',
                  icon: 'none'
                });
              case 21:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[5, 17]]);
      }))();
    },
    shareShop: function shareShop() {
      // 微信小程序中，点击分享按钮会自动触发 onShareAppMessage
      // 这里只需要提示用户，或者可以不做任何处理

      console.log('[FoodPoiDetail] 用户点击分享按钮，店铺ID:', this.shop.id, '店铺名称:', this.shop.name);
    },
    // 微信小程序分享配置
    onShareAppMessage: function onShareAppMessage(options) {
      console.log('[FoodPoiDetail] onShareAppMessage 被调用', options);
      if (!this.shop || !this.shop.id) {
        console.warn('[FoodPoiDetail] 分享时店铺信息为空');
        return {
          title: '邀请你和我一起品尝美食~',
          path: '/pages/index/FoodPoiDetail'
        };
      }

      // 构建分享路径
      var sharePath = "/pages/index/FoodPoiDetail?id=".concat(encodeURIComponent(this.shop.id));

      // 分享标题：使用指定的文案格式
      var shopName = this.shop.name || '店铺';
      var shareTitle = "\u9080\u8BF7\u4F60\u548C\u6211\u4E00\u8D77\u54C1\u5C1D\u8BE5".concat(shopName, "\u7684\u7F8E\u98DF~");

      // 分享图片：只有当有真实图片时才设置，避免显示占位符
      var heroImg = this.heroImage || this.shop.cover || '';
      var defaultPlaceholder = '/static/assets/热门推荐.png';
      // 只有当图片存在且不是默认占位图时才设置 imageUrl
      var shareImageUrl = heroImg && heroImg !== defaultPlaceholder && heroImg.trim() !== '' ? heroImg : undefined;
      console.log('[FoodPoiDetail] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        shopId: this.shop.id,
        shopName: shopName,
        imageUrl: shareImageUrl || '未设置（无图片）'
      });

      // 记录分享行为
      this.recordShareBehavior(shareTitle, sharePath).catch(function (err) {
        console.error('[FoodPoiDetail] 记录分享行为失败', err);
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
    toggleMoreInfo: function toggleMoreInfo() {
      this.showMoreInfo = !this.showMoreInfo;
    },
    moreInfoText: function moreInfoText() {
      var parts = [];
      if (this.businessTimeText) {
        parts.push("\u8425\u4E1A\u65F6\u95F4\uFF1A".concat(this.businessTimeText));
      }
      if (this.introText) {
        parts.push(this.introText);
      }
      if (this.tipsText) {
        parts.push(this.tipsText);
      }
      if (parts.length) {
        return parts.join('\n');
      }
      if (this.shop.phone) {
        return "\u8BE5\u5E97\u94FA\u6682\u672A\u8865\u5145\u66F4\u591A\u4FE1\u606F\uFF0C\u53EF\u81F4\u7535".concat(this.shop.phone, "\u54A8\u8BE2");
      }
      return '该店铺暂未补充更多信息，建议到店前电话咨询';
    },
    checkShareStatus: function checkShareStatus() {
      var _this13 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var res;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                if (_this13.shop.id) {
                  _context12.next = 3;
                  break;
                }
                return _context12.abrupt("return");
              case 3:
                _context12.next = 5;
                return checkShared(_this13.shop.id, 'FOOD_POI');
              case 5:
                res = _context12.sent;
                if (res && (res.isShared === true || res.data && res.data.isShared === true)) {
                  _this13.hasShared = true;
                }
                _context12.next = 11;
                break;
              case 9:
                _context12.prev = 9;
                _context12.t0 = _context12["catch"](0);
              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 9]]);
      }))();
    },
    recordShareBehavior: function recordShareBehavior(title, path) {
      var _this14 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                if (_this14.shop.id) {
                  _context13.next = 3;
                  break;
                }
                return _context13.abrupt("return");
              case 3:
                _context13.next = 5;
                return recordShare({
                  targetId: _this14.shop.id,
                  targetType: 'FOOD_POI',
                  shareChannel: 'WECHAT_SHARE',
                  shareTitle: title,
                  shareDesc: _this14.shop.address || '',
                  shareCover: _this14.heroImage || _this14.shop.cover,
                  extra: {
                    path: path
                  }
                });
              case 5:
                // 标记为已分享
                _this14.hasShared = true;
                _context13.next = 11;
                break;
              case 8:
                _context13.prev = 8;
                _context13.t0 = _context13["catch"](0);
                // 忽略埋点失败
                console.warn('[FoodPoiDetail] 记录分享行为失败:', _context13.t0);
              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[0, 8]]);
      }))();
    },
    loadNearbyShops: function loadNearbyShops() {
      var _this15 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
        var params, raw, list, mapped, filtered;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!(!_this15.shop || !_this15.shop.latitude || !_this15.shop.longitude)) {
                  _context14.next = 2;
                  break;
                }
                return _context14.abrupt("return");
              case 2:
                _context14.prev = 2;
                params = {
                  type: 1,
                  userLng: _this15.shop.longitude,
                  userLat: _this15.shop.latitude,
                  page: 1,
                  radius: 1000
                };
                _context14.next = 6;
                return getPois(params);
              case 6:
                raw = _context14.sent;
                list = Array.isArray(raw) ? raw : [];
                mapped = list.map(function (item, index) {
                  return {
                    id: item.id != null && item.id !== '' ? item.id : "".concat(index),
                    name: item.name || '',
                    distance: item.distance || '',
                    latitude: item.latitude,
                    longitude: item.longitude,
                    cover: item.imageUrl || item.cover || item.image || item.thumbnail || _this15.shop.cover || '/static/assets/热门推荐.png'
                  };
                });
                filtered = mapped.filter(function (item) {
                  return item.id !== _this15.shop.id;
                });
                _this15.nearbyShops = filtered.slice(0, 3);
                _context14.next = 16;
                break;
              case 13:
                _context14.prev = 13;
                _context14.t0 = _context14["catch"](2);
                console.warn('[FoodPoiDetail] loadNearbyShops fail:', _context14.t0);
              case 16:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[2, 13]]);
      }))();
    },
    navigateToShop: function navigateToShop() {
      this.openMap();
    },
    updateRecentlyViewedFlag: function updateRecentlyViewedFlag() {
      try {
        if (!this.shop || !this.shop.id) return;
        var key = "food_poi_last_visit_".concat(this.shop.id);
        var now = Date.now();
        var last = uni.getStorageSync(key);
        if (typeof last === 'number' && last > 0 && now - last <= 2 * 60 * 1000) {
          this.showRecentlyViewed = true;
        } else {
          this.showRecentlyViewed = false;
        }
        uni.setStorageSync(key, now);
      } catch (e) {
        // 忽略本地存储失败
      }
    },
    loadLocalState: function loadLocalState() {
      try {
        if (!this.shop.id) return;
        var key = "food_poi_state_".concat(this.shop.id);
        var value = uni.getStorageSync(key);
        if (value && (0, _typeof2.default)(value) === 'object') {
          this.isFavorited = !!value.isFavorited;
          this.isExperienced = !!value.isExperienced;
        }
      } catch (e) {}
    },
    saveLocalState: function saveLocalState() {
      try {
        if (!this.shop.id) return;
        var key = "food_poi_state_".concat(this.shop.id);
        var value = {
          isFavorited: this.isFavorited,
          isExperienced: this.isExperienced
        };
        uni.setStorageSync(key, value);

        // 保存到统一的足迹存储
        if (this.isFavorited) {
          this.saveToFootprints('favorite', {
            id: this.shop.id,
            name: this.shop.name || '',
            category: this.smallTypeLabel || '美食',
            city: this.extractCityFromShop(),
            cover: this.shop.cover || '',
            address: this.shop.address || '',
            type: 'food',
            timestamp: Date.now()
          });
        } else {
          this.removeFromFootprints('favorite', this.shop.id);
        }
        if (this.isExperienced) {
          this.saveToFootprints('experienced', {
            id: this.shop.id,
            name: this.shop.name || '',
            category: this.smallTypeLabel || '美食',
            city: this.extractCityFromShop(),
            cover: this.shop.cover || '',
            address: this.shop.address || '',
            type: 'food',
            timestamp: Date.now()
          });
        } else {
          this.removeFromFootprints('experienced', this.shop.id);
        }
      } catch (e) {
        console.warn('[FoodPoiDetail] saveLocalState error:', e);
      }
    },
    extractCityFromShop: function extractCityFromShop() {
      var city = this.shop.city || '';
      if (city) return city.replace(/市$/, '');
      var address = this.shop.address || '';
      var cityMatch = address.match(/(西安|宝鸡|咸阳|渭南|延安|榆林|汉中|安康|商洛|铜川)/);
      return cityMatch ? cityMatch[1] : '';
    },
    saveToFootprints: function saveToFootprints(category, data) {
      try {
        var key = "footprints_".concat(category, "_food");
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
          return item.id === data.id && item.type === 'food';
        });
        var unifiedItem = _objectSpread(_objectSpread({}, data), {}, {
          type: 'food',
          poiType: 'food'
        });
        if (unifiedIndex >= 0) {
          unifiedList[unifiedIndex] = unifiedItem;
        } else {
          unifiedList.push(unifiedItem);
        }
        uni.setStorageSync(unifiedKey, unifiedList);
      } catch (e) {
        console.warn('[FoodPoiDetail] saveToFootprints error:', e);
      }
    },
    removeFromFootprints: function removeFromFootprints(category, id) {
      try {
        var key = "footprints_".concat(category, "_food");
        var list = uni.getStorageSync(key) || [];
        var filtered = list.filter(function (item) {
          return item.id !== id;
        });
        uni.setStorageSync(key, filtered);

        // 同时从统一足迹存储中移除
        var unifiedKey = "poi_footprints_".concat(category);
        var unifiedList = uni.getStorageSync(unifiedKey) || [];
        var unifiedFiltered = unifiedList.filter(function (item) {
          return !(item.id === id && item.type === 'food');
        });
        uni.setStorageSync(unifiedKey, unifiedFiltered);
      } catch (e) {
        console.warn('[FoodPoiDetail] removeFromFootprints error:', e);
      }
    },
    // 打开“添加到清单”弹窗
    openAddToListDialog: function openAddToListDialog() {
      var _this16 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(!_this16.shop || !_this16.shop.id)) {
                  _context15.next = 3;
                  break;
                }
                uni.showToast({
                  title: '店铺信息未就绪',
                  icon: 'none'
                });
                return _context15.abrupt("return");
              case 3:
                _this16.checklistDate = new Date().toISOString().split('T')[0];
                _this16.checklistDateTemp = _this16.checklistDate;
                _this16.selectedChecklistId = '';
                _this16.addToListNote = '';
                _context15.next = 9;
                return _this16.loadChecklistsByDate(_this16.checklistDate);
              case 9:
                _this16.showAddToListDialog = true;
              case 10:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }))();
    },
    // 关闭“添加到清单”弹窗
    closeAddToListDialog: function closeAddToListDialog() {
      this.showAddToListDialog = false;
      this.checklists = [];
      this.selectedChecklistId = '';
      this.addToListNote = '';
    },
    // 加载指定日期的清单列表（用于添加到清单）
    loadChecklistsByDate: function loadChecklistsByDate(date) {
      var _this17 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var checklistApi, response, lists;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                checklistApi = __webpack_require__(/*! ../../api/checklist.js */ 89);
                _context16.next = 4;
                return checklistApi.myChecklists({
                  date: date
                });
              case 4:
                response = _context16.sent;
                lists = [];
                if (response && response.success !== false && response.data) {
                  lists = Array.isArray(response.data) ? response.data : [];
                } else if (Array.isArray(response)) {
                  lists = response;
                }
                _this17.checklists = lists;
                if (lists.length === 1) {
                  _this17.selectedChecklistId = lists[0].id;
                }
                _context16.next = 15;
                break;
              case 11:
                _context16.prev = 11;
                _context16.t0 = _context16["catch"](0);
                console.error('[FoodPoiDetail] 加载清单列表失败:', _context16.t0);
                _this17.checklists = [];
              case 15:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[0, 11]]);
      }))();
    },
    // 弹窗内日期切换
    onChecklistDateChange: function onChecklistDateChange(e) {
      var _this18 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17() {
        var newDate;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                newDate = e.detail && e.detail.value;
                if (!(!newDate || newDate === _this18.checklistDate)) {
                  _context17.next = 3;
                  break;
                }
                return _context17.abrupt("return");
              case 3:
                _this18.checklistDate = newDate;
                _this18.checklistDateTemp = newDate;
                _this18.selectedChecklistId = '';
                _this18.addToListNote = '';
                _context17.next = 9;
                return _this18.loadChecklistsByDate(newDate);
              case 9:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }))();
    },
    // 选择清单
    selectChecklist: function selectChecklist(list) {
      if (!list || !list.id) return;
      this.selectedChecklistId = list.id;
    },
    // 确认添加当前店铺到选中清单
    confirmAddToList: function confirmAddToList() {
      var _this19 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18() {
        var result;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!(!_this19.shop || !_this19.shop.id)) {
                  _context18.next = 3;
                  break;
                }
                uni.showToast({
                  title: '店铺信息缺失',
                  icon: 'none'
                });
                return _context18.abrupt("return");
              case 3:
                if (_this19.selectedChecklistId) {
                  _context18.next = 6;
                  break;
                }
                uni.showToast({
                  title: '请选择清单',
                  icon: 'none'
                });
                return _context18.abrupt("return");
              case 6:
                _context18.prev = 6;
                uni.showLoading({
                  title: '正在加入清单...',
                  mask: true
                });
                _context18.next = 10;
                return addFoodToChecklist(_this19.selectedChecklistId, {
                  id: _this19.shop.id,
                  name: _this19.shop.name || '',
                  introduction: _this19.addToListNote || ''
                });
              case 10:
                result = _context18.sent;
                uni.hideLoading();
                if (!result) {
                  _context18.next = 17;
                  break;
                }
                _this19.showAddToListDialog = false;
                uni.showToast({
                  title: '已添加到清单',
                  icon: 'success'
                });
                _context18.next = 18;
                break;
              case 17:
                throw new Error('添加失败');
              case 18:
                _context18.next = 25;
                break;
              case 20:
                _context18.prev = 20;
                _context18.t0 = _context18["catch"](6);
                uni.hideLoading();
                console.error('[FoodPoiDetail] 添加到清单失败:', _context18.t0);
                uni.showToast({
                  title: _context18.t0.message || '添加失败',
                  icon: 'none'
                });
              case 25:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, null, [[6, 20]]);
      }))();
    },
    formatCommentTime: function formatCommentTime(raw) {
      if (!raw) return '';
      var text = String(raw).trim();
      // 处理形如 2025-12-26T10:23:30 或带 Z 的格式
      text = text.replace('T', ' ');
      text = text.replace(/\.000Z?$/, '').replace(/Z$/, '');
      return text;
    },
    normalizeCommentList: function normalizeCommentList(list) {
      var _this20 = this;
      if (!Array.isArray(list)) return [];
      return list.map(function (item) {
        if (!item) return item;
        var normalized = _objectSpread({}, item);

        // 昵称：兼容多种字段
        normalized.userName = normalized.userName || normalized.nickname || normalized.nickName || normalized.userNick || '';

        // 头像：兼容多种字段
        normalized.avatarUrl = normalized.avatarUrl || normalized.avatar || normalized.userAvatar || normalized.headImg || normalized.headImgUrl || normalized.headimgurl || '';

        // 时间：优先使用 time/date/timestamp，统一成不带 T 的字符串
        var rawTime = normalized.time || normalized.date || normalized.createTime || normalized.createdAt || normalized.created_at || '';
        var displayTime = _this20.formatCommentTime(rawTime);
        normalized.time = displayTime;
        normalized.date = displayTime;

        // 图片：统一到 images 数组
        if (!Array.isArray(normalized.images)) {
          if (Array.isArray(normalized.imageUrls)) {
            normalized.images = normalized.imageUrls;
          } else if (typeof normalized.imagesJson === 'string') {
            try {
              var parsed = JSON.parse(normalized.imagesJson);
              normalized.images = Array.isArray(parsed) ? parsed : [];
            } catch (e) {
              normalized.images = [];
            }
          } else if (typeof normalized.image === 'string' && normalized.image) {
            normalized.images = [normalized.image];
          } else {
            normalized.images = [];
          }
        }

        // 点赞/点踩计数和本地交互状态
        _this20.ensureCommentInteractionState(normalized);
        return normalized;
      });
    },
    normalizeDishName: function normalizeDishName(raw) {
      if (!raw) return '';
      var name = String(raw).toLowerCase();

      // 去掉括号及其中说明
      name = name.replace(/[（(][^）)]*[）)]/g, '');

      // 去掉常见修饰词前缀：招牌/特色/人气/必点/推荐/热门/经典 等
      name = name.replace(/^(招牌|特色|人气|必点|推荐|热门|经典)+/g, '');

      // 去掉空格和常见分隔符号
      name = name.replace(/[\s·•，,。、\.！!？\?\-—_~]/g, '');
      return name.trim();
    },
    aggregateRecommendedDishes: function aggregateRecommendedDishes(list) {
      var _this21 = this;
      if (!Array.isArray(list) || !list.length) return [];
      var map = {};
      var order = [];
      list.forEach(function (item, index) {
        if (!item) return;
        var rawName = (item.name || item.dishName || '').trim();
        if (!rawName) return;
        var key = _this21.normalizeDishName(rawName);
        if (!key) return;

        // 统计次数：优先使用后端给的次数字段，没有就按 1 次算
        var count = 0;
        var countFields = ['recommendCount', 'recommendedCount', 'count', 'times'];
        for (var i = 0; i < countFields.length; i += 1) {
          var v = item[countFields[i]];
          if (v !== undefined && v !== null && v !== '') {
            var n = Number(v);
            if (!Number.isNaN(n) && n > 0) {
              count = n;
              break;
            }
          }
        }
        if (count <= 0) count = 1;

        // 价格尽量取一个合理值
        var priceCandidates = [item.price, item.avgPrice, item.averagePrice];
        var price = null;
        for (var _i2 = 0; _i2 < priceCandidates.length; _i2 += 1) {
          var _v = priceCandidates[_i2];
          if (_v !== undefined && _v !== null && _v !== '') {
            var _n = Number(_v);
            if (!Number.isNaN(_n) && _n > 0) {
              price = _n;
              break;
            }
          }
        }
        var imageUrl = item.imageUrl || item.image || item.cover || item.thumbnail || '';
        var canDelete = item.canDelete === true || item.isOwner === true || item.mine === true || item._localCreatedByMe === true;
        if (!map[key]) {
          map[key] = {
            id: item.id != null ? item.id : key || String(index),
            name: rawName,
            recommendCount: count,
            price: price != null ? price : undefined,
            image: imageUrl,
            imageUrl: imageUrl,
            canDelete: canDelete
          };
          order.push(key);
        } else {
          var target = map[key];
          target.recommendCount += count;
          if (rawName.length < target.name.length) {
            target.name = rawName;
          }
          if (target.price == null && price != null) {
            target.price = price;
          }
          // 如果当前没有图片或图片无效，使用新的图片
          if ((!target.image || !target.imageUrl || target.image.startsWith('tmp/')) && imageUrl) {
            target.image = imageUrl;
            target.imageUrl = imageUrl;
          }
          if (!target.canDelete && canDelete) {
            target.canDelete = true;
          }
        }
      });
      var result = order.map(function (key) {
        return map[key];
      });
      result.sort(function (a, b) {
        var ca = typeof a.recommendCount === 'number' ? a.recommendCount : 0;
        var cb = typeof b.recommendCount === 'number' ? b.recommendCount : 0;
        if (ca === cb) return 0;
        return cb - ca;
      });
      return result;
    },
    mockRecommendAndCommentsIfEmpty: function mockRecommendAndCommentsIfEmpty() {
      if (!this.recommendedDishes || this.recommendedDishes.length === 0) {
        this.recommendedDishes = [{
          id: 'demo-1',
          name: '招牌菜品',
          price: 42,
          image: this.defaultDishImage,
          recommendCount: 12
        }, {
          id: 'demo-2',
          name: '人气必点',
          price: 28,
          image: this.defaultDishImage,
          recommendCount: 8
        }];
      }
      if (!this.comments || this.comments.length === 0) {
        var today = new Date();
        var dateText = "".concat(today.getFullYear(), "-").concat(String(today.getMonth() + 1).padStart(2, '0'), "-").concat(String(today.getDate()).padStart(2, '0'));
        this.comments = this.normalizeCommentList([{
          id: 'c1',
          userName: '热心食客A',
          score: 4.2,
          date: dateText,
          content: '口味不错，出餐很快，环境也干净整洁，下次还会再来～',
          images: [],
          likeCount: 5,
          dislikeCount: 0
        }, {
          id: 'c2',
          userName: '本地吃货',
          score: 4.5,
          date: dateText,
          content: '份量足，性价比高，适合和朋友一起来聚餐。',
          images: [],
          likeCount: 3,
          dislikeCount: 1
        }]);
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 90:
/*!***********************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/FoodPoiDetail.vue?vue&type=style&index=0&id=5005ca12&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_style_index_0_id_5005ca12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./FoodPoiDetail.vue?vue&type=style&index=0&id=5005ca12&lang=scss&scoped=true& */ 91);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_style_index_0_id_5005ca12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_style_index_0_id_5005ca12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_style_index_0_id_5005ca12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_style_index_0_id_5005ca12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_FoodPoiDetail_vue_vue_type_style_index_0_id_5005ca12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 91:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/FoodPoiDetail.vue?vue&type=style&index=0&id=5005ca12&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[81,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/FoodPoiDetail.js.map
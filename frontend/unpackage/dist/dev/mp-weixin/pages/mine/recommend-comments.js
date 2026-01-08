(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/recommend-comments"],{

/***/ 217:
/*!************************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Fmine%2Frecommend-comments"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _recommendComments = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/recommend-comments.vue */ 218));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_recommendComments.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 218:
/*!*****************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/recommend-comments.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recommend-comments.vue?vue&type=template&id=eeb11790&scoped=true& */ 219);
/* harmony import */ var _recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommend-comments.vue?vue&type=script&lang=js& */ 221);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _recommend_comments_vue_vue_type_style_index_0_id_eeb11790_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommend-comments.vue?vue&type=style&index=0&id=eeb11790&lang=scss&scoped=true& */ 223);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eeb11790",
  null,
  false,
  _recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/mine/recommend-comments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 219:
/*!************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/recommend-comments.vue?vue&type=template&id=eeb11790&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./recommend-comments.vue?vue&type=template&id=eeb11790&scoped=true& */ 220);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_template_id_eeb11790_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 220:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/recommend-comments.vue?vue&type=template&id=eeb11790&scoped=true& ***!
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
  var g0 =
    !_vm.loading && _vm.activeTab === "recommend"
      ? _vm.recommendList.length
      : null
  var l0 =
    !_vm.loading && _vm.activeTab === "recommend" && !(g0 === 0)
      ? _vm.__map(_vm.recommendList, function (item, __i0__) {
          var $orig = _vm.__get_orig(item)
          var m0 = _vm.getRecommendImage(item) && !item._imageError
          var m1 = m0 ? _vm.getRecommendImage(item) : null
          var m2 = !_vm.getRecommendImage(item) || item._imageError
          var m3 = m2 ? _vm.getRecommendImage(item) : null
          var m4 = _vm.formatDate(
            item.createdAt || item.createTime || item.timestamp
          )
          var m5 = _vm.getDishName(item)
          var m6 = _vm.getShopName(item)
          var m7 = _vm.getShopCity(item)
          return {
            $orig: $orig,
            m0: m0,
            m1: m1,
            m2: m2,
            m3: m3,
            m4: m4,
            m5: m5,
            m6: m6,
            m7: m7,
          }
        })
      : null
  var g1 =
    !_vm.loading && !(_vm.activeTab === "recommend")
      ? _vm.commentList.length
      : null
  var l3 =
    !_vm.loading && !(_vm.activeTab === "recommend") && !(g1 === 0)
      ? _vm.__map(_vm.commentList, function (item, __i1__) {
          var $orig = _vm.__get_orig(item)
          var m8 = _vm.formatDate(
            item.createdAt || item.createTime || item.timestamp
          )
          var m9 = _vm.getShopName(item)
          var l1 = item.score ? _vm.getScoreStars(item.score) : null
          var g2 = _vm.getCommentImages(item).length
          var l2 = g2 > 0 ? _vm.getCommentImages(item) : null
          var m10 = _vm.getShopCity(item)
          return {
            $orig: $orig,
            m8: m8,
            m9: m9,
            l1: l1,
            g2: g2,
            l2: l2,
            m10: m10,
          }
        })
      : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event, item, index) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        item = _temp2.item,
        index = _temp2.index
      var _temp, _temp2
      return _vm.handleCommentImageError(item, index, $event)
    }
    _vm.e1 = function ($event, img, item) {
      var _temp3 = arguments[arguments.length - 1].currentTarget.dataset,
        _temp4 = _temp3.eventParams || _temp3["event-params"],
        img = _temp4.img,
        item = _temp4.item
      var _temp3, _temp4
      $event.stopPropagation()
      _vm.previewImage(img, _vm.getCommentImages(item))
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        g1: g1,
        l3: l3,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 221:
/*!******************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/recommend-comments.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./recommend-comments.vue?vue&type=script&lang=js& */ 222);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 222:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/recommend-comments.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  getMyRecommendations = _require.getMyRecommendations,
  getMyComments = _require.getMyComments,
  deleteRecommendDish = _require.deleteRecommendDish,
  deletePoiComment = _require.deletePoiComment,
  getPoiDetail = _require.getPoiDetail;
var _default = {
  name: 'RecommendComments',
  data: function data() {
    return {
      loading: false,
      activeTab: 'recommend',
      // recommend | comment
      recommendList: [],
      commentList: [],
      stats: {
        recommendCount: 0,
        commentCount: 0
      },
      // 门店信息缓存（key: poiId, value: { name, city, address }）
      poiInfoCache: {},
      deletingIds: {} // 正在删除的ID集合（key: id, value: true）
    };
  },
  onLoad: function onLoad() {
    this.loadData();
  },
  onShow: function onShow() {
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return Promise.all([_this.loadRecommendations(), _this.loadComments()]);
              case 4:
                _context.next = 10;
                break;
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                console.error('[RecommendComments] loadData error:', _context.t0);
                uni.showToast({
                  title: '加载失败',
                  icon: 'none'
                });
              case 10:
                _context.prev = 10;
                _this.loading = false;
                return _context.finish(10);
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6, 10, 13]]);
      }))();
    },
    loadRecommendations: function loadRecommendations() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var list;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return getMyRecommendations({
                  page: 1,
                  size: 100
                });
              case 3:
                list = _context2.sent;
                _this2.recommendList = Array.isArray(list) ? list : [];
                _this2.stats.recommendCount = _this2.recommendList.length;
                // 批量加载门店信息
                _context2.next = 8;
                return _this2.loadPoiInfosForList(_this2.recommendList);
              case 8:
                _context2.next = 15;
                break;
              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.error('[RecommendComments] loadRecommendations error:', _context2.t0);
                _this2.recommendList = [];
                _this2.stats.recommendCount = 0;
              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }))();
    },
    loadComments: function loadComments() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var list;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return getMyComments({
                  page: 1,
                  size: 100
                });
              case 3:
                list = _context3.sent;
                _this3.commentList = Array.isArray(list) ? list : [];
                _this3.stats.commentCount = _this3.commentList.length;
                // 批量加载门店信息
                _context3.next = 8;
                return _this3.loadPoiInfosForList(_this3.commentList);
              case 8:
                _context3.next = 15;
                break;
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                console.error('[RecommendComments] loadComments error:', _context3.t0);
                _this3.commentList = [];
                _this3.stats.commentCount = 0;
              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    switchTab: function switchTab(tab) {
      if (this.activeTab === tab) {
        return;
      }
      this.activeTab = tab;
    },
    openPoiDetail: function openPoiDetail(item) {
      var poiId = item.poiId || item.shopId;
      if (!poiId) {
        return;
      }
      uni.navigateTo({
        url: "/pages/index/FoodPoiDetail?id=".concat(poiId)
      });
    },
    previewImage: function previewImage(current, urls) {
      var _this4 = this;
      // 过滤掉无效的图片URL
      var validUrls = (urls || [current]).filter(function (url) {
        return _this4.isValidImageUrl(url);
      });
      if (validUrls.length === 0) {
        uni.showToast({
          title: '图片加载失败',
          icon: 'none'
        });
        return;
      }
      uni.previewImage({
        current: current,
        urls: validUrls
      });
    },
    // 处理推荐菜图片加载错误
    handleRecommendImageError: function handleRecommendImageError(item, e) {
      console.warn('[RecommendComments] 推荐菜图片加载失败:', item.id, e);
      // 标记图片加载失败，显示占位图
      this.$set(item, '_imageError', true);
    },
    // 处理评论图片加载错误
    handleCommentImageError: function handleCommentImageError(item, index, e) {
      console.warn('[RecommendComments] 评论图片加载失败:', item.id, index, e);
      // 标记该索引的图片加载失败
      if (!item._commentImageErrors) {
        this.$set(item, '_commentImageErrors', {});
      }
      this.$set(item._commentImageErrors, index, true);
    },
    getScoreStars: function getScoreStars(score) {
      var stars = [];
      var fullStars = Math.floor(score || 0);
      for (var i = 0; i < 5; i++) {
        stars.push(i < fullStars ? 'full' : 'empty');
      }
      return stars;
    },
    formatDate: function formatDate(value) {
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
    },
    // 获取菜名（兼容多种字段）
    getDishName: function getDishName(item) {
      return item.dishName || item.name || item.dish || '推荐菜品';
    },
    // 获取门店名（兼容多种字段）
    getShopName: function getShopName(item) {
      var _item$poi, _item$shop;
      var poiId = item.poiId || item.shopId;
      if (poiId && this.poiInfoCache[poiId]) {
        return this.poiInfoCache[poiId].name || '美食门店';
      }
      return item.poiName || item.shopName || ((_item$poi = item.poi) === null || _item$poi === void 0 ? void 0 : _item$poi.name) || ((_item$shop = item.shop) === null || _item$shop === void 0 ? void 0 : _item$shop.name) || item.storeName || '美食门店';
    },
    // 获取门店地址（兼容多种字段）
    getShopAddress: function getShopAddress(item) {
      var _item$poi2, _item$shop2;
      var poiId = item.poiId || item.shopId;
      if (poiId && this.poiInfoCache[poiId]) {
        return this.poiInfoCache[poiId].address || '';
      }
      return item.poiAddress || item.address || ((_item$poi2 = item.poi) === null || _item$poi2 === void 0 ? void 0 : _item$poi2.address) || ((_item$shop2 = item.shop) === null || _item$shop2 === void 0 ? void 0 : _item$shop2.address) || item.storeAddress || '';
    },
    // 获取门店城市（兼容多种字段）
    getShopCity: function getShopCity(item) {
      var _item$poi3, _item$shop3;
      var poiId = item.poiId || item.shopId;
      if (poiId && this.poiInfoCache[poiId]) {
        return this.poiInfoCache[poiId].city || '陕西';
      }
      return item.city || item.poiCity || ((_item$poi3 = item.poi) === null || _item$poi3 === void 0 ? void 0 : _item$poi3.city) || ((_item$shop3 = item.shop) === null || _item$shop3 === void 0 ? void 0 : _item$shop3.city) || '陕西';
    },
    // 获取推荐菜图片（兼容多种字段，过滤无效值）
    getRecommendImage: function getRecommendImage(item) {
      var _item$poi4;
      var candidates = [item.image, item.dishImage, item.imageUrl, item.cover, item.thumbnail, (_item$poi4 = item.poi) === null || _item$poi4 === void 0 ? void 0 : _item$poi4.cover];
      for (var _i = 0, _candidates = candidates; _i < _candidates.length; _i++) {
        var url = _candidates[_i];
        if (this.isValidImageUrl(url)) {
          return url;
        }
      }
      return '';
    },
    // 验证图片URL是否有效
    isValidImageUrl: function isValidImageUrl(url) {
      if (!url || typeof url !== 'string') {
        return false;
      }
      var trimmed = url.trim();

      // 过滤空字符串
      if (trimmed === '') {
        return false;
      }

      // 过滤常见的无效值字符串
      var invalidValues = ['null', 'undefined', 'none', 'N/A'];
      var lowerTrimmed = trimmed.toLowerCase();
      if (invalidValues.includes(lowerTrimmed)) {
        return false;
      }

      // 过滤临时文件路径（这些路径会过期，不应该显示）
      if (trimmed.startsWith('tmp/') || trimmed.startsWith('http://tmp/') || trimmed.startsWith('https://tmp/') || trimmed.includes('/tmp/')) {
        console.warn('[RecommendComments] 过滤掉临时路径:', trimmed);
        return false;
      }

      // 检查是否是有效的URL格式（优先使用服务器返回的 URL）
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return true;
      }

      // 检查是否是本地路径（相对路径，如 /uploads/xxx.jpg）
      if (trimmed.startsWith('/')) {
        return true;
      }

      // 检查是否是base64格式
      if (trimmed.startsWith('data:image/')) {
        return true;
      }

      // 其他情况也允许（可能是相对路径或其他格式）
      return trimmed.length > 0;
    },
    // 获取评论图片（兼容多种字段，过滤无效值）
    getCommentImages: function getCommentImages(item) {
      var _this5 = this;
      var result = [];

      // 处理数组格式的图片
      if (Array.isArray(item.images)) {
        item.images.forEach(function (img) {
          if (_this5.isValidImageUrl(img)) {
            result.push(img);
          }
        });
      } else if (typeof item.images === 'string' && item.images.trim()) {
        // 处理逗号分隔的字符串格式（后端可能返回这种格式）
        var urlArray = item.images.split(',').map(function (url) {
          return url.trim();
        }).filter(Boolean);
        urlArray.forEach(function (img) {
          if (_this5.isValidImageUrl(img) && !result.includes(img)) {
            result.push(img);
          }
        });
      }
      if (Array.isArray(item.imageUrls)) {
        item.imageUrls.forEach(function (img) {
          if (_this5.isValidImageUrl(img) && !result.includes(img)) {
            result.push(img);
          }
        });
      }
      if (Array.isArray(item.photos)) {
        item.photos.forEach(function (img) {
          if (_this5.isValidImageUrl(img) && !result.includes(img)) {
            result.push(img);
          }
        });
      }
      if (Array.isArray(item.pictures)) {
        item.pictures.forEach(function (img) {
          if (_this5.isValidImageUrl(img) && !result.includes(img)) {
            result.push(img);
          }
        });
      }

      // 处理单个图片字段
      if (this.isValidImageUrl(item.image) && !result.includes(item.image)) {
        result.push(item.image);
      }
      if (this.isValidImageUrl(item.imageUrl) && !result.includes(item.imageUrl)) {
        result.push(item.imageUrl);
      }
      if (this.isValidImageUrl(item.photo) && !result.includes(item.photo)) {
        result.push(item.photo);
      }

      // 尝试解析 JSON 字符串
      if (typeof item.imagesJson === 'string') {
        try {
          var parsed = JSON.parse(item.imagesJson);
          if (Array.isArray(parsed)) {
            parsed.forEach(function (img) {
              if (_this5.isValidImageUrl(img) && !result.includes(img)) {
                result.push(img);
              }
            });
          }
        } catch (e) {
          // 解析失败，忽略
        }
      }

      // 调试日志：如果结果为空，记录一下数据结构
      if (result.length === 0 && item.id) {
        console.log('[RecommendComments] 评论图片为空，item数据:', {
          id: item.id,
          images: item.images,
          imageUrls: item.imageUrls,
          photos: item.photos,
          pictures: item.pictures,
          image: item.image,
          imageUrl: item.imageUrl,
          photo: item.photo,
          imagesJson: item.imagesJson
        });
      }
      return result;
    },
    // 批量加载门店信息
    loadPoiInfosForList: function loadPoiInfosForList(list) {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var poiInfoMap, poiInfoArray, batchSize, i, batch;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!Array.isArray(list) || list.length === 0)) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return");
              case 2:
                // 收集需要获取的poiId和对应的type（去重）
                poiInfoMap = new Map(); // key: poiId, value: { type, item }
                list.forEach(function (item) {
                  var poiId = item.poiId || item.shopId;
                  if (poiId && !_this6.poiInfoCache[poiId]) {
                    // 尝试从数据中获取type，如果没有则默认为1（美食）
                    var poiType = item.type || item.poiType;
                    // 如果type是字符串，转换为数字
                    if (poiType === 'food' || poiType === 1 || poiType === '1') {
                      poiType = 1;
                    } else if (poiType === 'scenic' || poiType === 2 || poiType === '2') {
                      poiType = 2;
                    } else if (poiType === 'heritage' || poiType === 3 || poiType === '3') {
                      poiType = 3;
                    } else {
                      // 默认使用美食类型（1）
                      poiType = 1;
                    }
                    if (!poiInfoMap.has(poiId)) {
                      poiInfoMap.set(poiId, {
                        type: poiType,
                        item: item
                      });
                    }
                  }
                });

                // 批量获取门店信息（限制并发数）
                poiInfoArray = Array.from(poiInfoMap.entries());
                batchSize = 5; // 每次并发5个
                i = 0;
              case 7:
                if (!(i < poiInfoArray.length)) {
                  _context4.next = 14;
                  break;
                }
                batch = poiInfoArray.slice(i, i + batchSize);
                _context4.next = 11;
                return Promise.all(batch.map(function (_ref) {
                  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                    poiId = _ref2[0],
                    info = _ref2[1];
                  return _this6.loadPoiInfo(poiId, info.type);
                }));
              case 11:
                i += batchSize;
                _context4.next = 7;
                break;
              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    // 加载单个门店信息
    loadPoiInfo: function loadPoiInfo(poiId) {
      var _arguments = arguments,
        _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var type, poiType, response, data, poi;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                type = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 1;
                if (!(!poiId || _this7.poiInfoCache[poiId])) {
                  _context5.next = 3;
                  break;
                }
                return _context5.abrupt("return");
              case 3:
                // 确保type是数字类型，默认为1（美食）
                poiType = Number(type) || 1;
                if (poiType < 1 || poiType > 3) {
                  console.warn("[RecommendComments] \u65E0\u6548\u7684type\u503C: ".concat(type, "\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C1"));
                  poiType = 1;
                }
                _context5.prev = 5;
                _context5.next = 8;
                return getPoiDetail({
                  id: poiId,
                  type: poiType
                });
              case 8:
                response = _context5.sent;
                if (!(!response || response.success === false)) {
                  _context5.next = 11;
                  break;
                }
                throw new Error('获取门店信息失败');
              case 11:
                // 解析返回数据结构：可能是 { data: { poi: {...} } } 或 { poi: {...} } 或直接是 poi 对象
                data = response.data || response;
                poi = data.poi || data;
                if (!poi) {
                  _context5.next = 19;
                  break;
                }
                _this7.$set(_this7.poiInfoCache, poiId, {
                  name: poi.name || poi.poiName || '美食门店',
                  city: poi.city || '陕西',
                  address: poi.address || poi.poiAddress || ''
                });
                console.log("[RecommendComments] \u6210\u529F\u52A0\u8F7D\u95E8\u5E97\u4FE1\u606F: ".concat(poiId, " -> ").concat(poi.name || '美食门店'));
                // 强制更新视图，确保门店名字能正确显示
                _this7.$forceUpdate();
                _context5.next = 20;
                break;
              case 19:
                throw new Error('门店数据格式不正确');
              case 20:
                _context5.next = 27;
                break;
              case 22:
                _context5.prev = 22;
                _context5.t0 = _context5["catch"](5);
                console.error("[RecommendComments] loadPoiInfo error for poiId ".concat(poiId, ", type ").concat(poiType, ":"), _context5.t0);
                // 失败时设置默认值
                _this7.$set(_this7.poiInfoCache, poiId, {
                  name: '美食门店',
                  city: '陕西',
                  address: ''
                });
                // 即使失败也强制更新视图
                _this7.$forceUpdate();
              case 27:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[5, 22]]);
      }))();
    },
    // 删除推荐菜
    handleDeleteRecommend: function handleDeleteRecommend(item) {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (item.id) {
                  _context7.next = 3;
                  break;
                }
                uni.showToast({
                  title: '删除失败：缺少ID',
                  icon: 'none'
                });
                return _context7.abrupt("return");
              case 3:
                uni.showModal({
                  title: '确认删除',
                  content: "\u786E\u5B9A\u8981\u5220\u9664\u63A8\u8350\u7684\"".concat(_this8.getDishName(item), "\"\u5417\uFF1F"),
                  success: function () {
                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(res) {
                      var result, index;
                      return _regenerator.default.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              if (!res.confirm) {
                                _context6.next = 16;
                                break;
                              }
                              _this8.$set(_this8.deletingIds, item.id, true);
                              _context6.prev = 2;
                              _context6.next = 5;
                              return deleteRecommendDish(item.id);
                            case 5:
                              result = _context6.sent;
                              if (result !== null) {
                                uni.showToast({
                                  title: '删除成功',
                                  icon: 'success'
                                });
                                // 从列表中移除
                                index = _this8.recommendList.findIndex(function (r) {
                                  return r.id === item.id;
                                });
                                if (index !== -1) {
                                  _this8.recommendList.splice(index, 1);
                                  _this8.stats.recommendCount = _this8.recommendList.length;
                                }
                              } else {
                                uni.showToast({
                                  title: '删除失败',
                                  icon: 'none'
                                });
                              }
                              _context6.next = 13;
                              break;
                            case 9:
                              _context6.prev = 9;
                              _context6.t0 = _context6["catch"](2);
                              console.error('[RecommendComments] deleteRecommend error:', _context6.t0);
                              uni.showToast({
                                title: '删除失败',
                                icon: 'none'
                              });
                            case 13:
                              _context6.prev = 13;
                              _this8.$delete(_this8.deletingIds, item.id);
                              return _context6.finish(13);
                            case 16:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6, null, [[2, 9, 13, 16]]);
                    }));
                    function success(_x) {
                      return _success.apply(this, arguments);
                    }
                    return success;
                  }()
                });
              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    // 删除评论
    handleDeleteComment: function handleDeleteComment(item) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (item.id) {
                  _context9.next = 3;
                  break;
                }
                uni.showToast({
                  title: '删除失败：缺少ID',
                  icon: 'none'
                });
                return _context9.abrupt("return");
              case 3:
                uni.showModal({
                  title: '确认删除',
                  content: '确定要删除这条评论吗？',
                  success: function () {
                    var _success2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(res) {
                      var result, index;
                      return _regenerator.default.wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              if (!res.confirm) {
                                _context8.next = 16;
                                break;
                              }
                              _this9.$set(_this9.deletingIds, item.id, true);
                              _context8.prev = 2;
                              _context8.next = 5;
                              return deletePoiComment(item.id);
                            case 5:
                              result = _context8.sent;
                              if (result !== null) {
                                uni.showToast({
                                  title: '删除成功',
                                  icon: 'success'
                                });
                                // 从列表中移除
                                index = _this9.commentList.findIndex(function (c) {
                                  return c.id === item.id;
                                });
                                if (index !== -1) {
                                  _this9.commentList.splice(index, 1);
                                  _this9.stats.commentCount = _this9.commentList.length;
                                }
                              } else {
                                uni.showToast({
                                  title: '删除失败',
                                  icon: 'none'
                                });
                              }
                              _context8.next = 13;
                              break;
                            case 9:
                              _context8.prev = 9;
                              _context8.t0 = _context8["catch"](2);
                              console.error('[RecommendComments] deleteComment error:', _context8.t0);
                              uni.showToast({
                                title: '删除失败',
                                icon: 'none'
                              });
                            case 13:
                              _context8.prev = 13;
                              _this9.$delete(_this9.deletingIds, item.id);
                              return _context8.finish(13);
                            case 16:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _callee8, null, [[2, 9, 13, 16]]);
                    }));
                    function success(_x2) {
                      return _success2.apply(this, arguments);
                    }
                    return success;
                  }()
                });
              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 223:
/*!***************************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/mine/recommend-comments.vue?vue&type=style&index=0&id=eeb11790&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_style_index_0_id_eeb11790_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./recommend-comments.vue?vue&type=style&index=0&id=eeb11790&lang=scss&scoped=true& */ 224);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_style_index_0_id_eeb11790_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_style_index_0_id_eeb11790_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_style_index_0_id_eeb11790_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_style_index_0_id_eeb11790_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_recommend_comments_vue_vue_type_style_index_0_id_eeb11790_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 224:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/mine/recommend-comments.vue?vue&type=style&index=0&id=eeb11790&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[217,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/recommend-comments.js.map
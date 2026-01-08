(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/noodle/item"],{

/***/ 134:
/*!************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Fnoodle%2Fitem"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _item = _interopRequireDefault(__webpack_require__(/*! ./pages/noodle/item.vue */ 135));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_item.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 135:
/*!*****************************************************!*\
  !*** C:/myprojects2/frontend/pages/noodle/item.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=29acb72c&scoped=true& */ 136);
/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js& */ 138);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _item_vue_vue_type_style_index_0_id_29acb72c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.vue?vue&type=style&index=0&id=29acb72c&scoped=true&lang=scss& */ 140);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29acb72c",
  null,
  false,
  _item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/noodle/item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 136:
/*!************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/noodle/item.vue?vue&type=template&id=29acb72c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./item.vue?vue&type=template&id=29acb72c&scoped=true& */ 137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_template_id_29acb72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 137:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/noodle/item.vue?vue&type=template&id=29acb72c&scoped=true& ***!
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 138:
/*!******************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/noodle/item.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./item.vue?vue&type=script&lang=js& */ 139);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 139:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/noodle/item.vue?vue&type=script&lang=js& ***!
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
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 41));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
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

var _require = __webpack_require__(/*! ../../api/foods.js */ 88),
  queryFoods = _require.queryFoods,
  getFoodById = _require.getFoodById,
  getFoodDetail = _require.getFoodDetail;
var _require2 = __webpack_require__(/*! ../../api/share.js */ 87),
  checkShared = _require2.checkShared,
  recordShare = _require2.recordShare;
var _require3 = __webpack_require__(/*! ../../api/imageMap.js */ 47),
  IMG = _require3.IMG;
var _default = {
  data: function data() {
    return {
      IMG: IMG,
      slug: '',
      city: '',
      foodId: null,
      noodle: {
        name: '',
        intro: '',
        tags: [],
        history: '',
        features: '',
        heroImg: ''
      },
      hasShared: false
    };
  },
  computed: {
    cityName: function cityName() {
      var map = {
        xian: '西安',
        tongchuan: '铜川',
        baoji: '宝鸡',
        xianyang: '咸阳',
        weinan: '渭南',
        yanan: '延安',
        yulin: '榆林',
        hanzhong: '汉中',
        ankang: '安康',
        shangluo: '商洛'
      };
      return map[this.city] || '陕西';
    },
    // 优先使用数据中的 heroImg，其次占位图
    noodleHero: function noodleHero() {
      return this.noodle.heroImg || IMG.retouch_2025112414392946;
    }
  },
  onLoad: function onLoad(query) {
    var _this = this;
    this.slug = (query.slug || '').trim();
    this.city = (query.city || '').trim();
    // 支持从路由参数携带 id 与 foodName，优先用于接口查询
    var routeIdRaw = query.id != null ? String(query.id).trim() : '';
    var routeId = routeIdRaw && !Number.isNaN(Number(routeIdRaw)) ? Number(routeIdRaw) : null;
    this.foodId = routeId;
    var routeFoodName = (query.foodName || '').trim();
    console.log('[item:onLoad] slug=', this.slug, ' city=', this.city, ' id=', routeId, ' foodName=', routeFoodName);
    var nameMap = {
      'biangbiang': 'biángbiáng面',
      'youpomian': '油泼面',
      'liangpi': '凉皮',
      'yaozhou-saozi': '耀州臊子面',
      'qishan-saozi': '岐山臊子面',
      'ganmianpi': '擀面皮',
      'chemaian': '扯面',
      'tongguan-saozi': '潼关臊子面',
      'hancheng-heleg': '韩城羊肉饸饹',
      'zicang-jianbing': '子长煎饼',
      'qiaomian-hele': '荞面饸饹',
      'yangza-fentang': '羊杂粉汤',
      'remipi': '汉中热米皮',
      'caidoufu-mian': '菜豆腐面',
      'zhengmian': '安康蒸面',
      'ziyang-haozi': '紫阳蒿子面',
      'luonan-suantang': '洛南酸汤面'
    };
    var introMap = {
      'biangbiang': '宽厚筋道，油泼蒜醋香扑面。',
      'youpomian': '辣子热油一泼，蒜香与醋香交织。',
      'liangpi': '柔韧清爽，酸辣开胃。',
      'yaozhou-saozi': '细面吸汤，酸辣臊子开胃。',
      'qishan-saozi': '酸辣咸香协调，臊子丰富。',
      'ganmianpi': '筋爽弹牙，辣香耐吃。',
      'chemaian': '长而宽，嚼劲十足。',
      'tongguan-saozi': '臊子多样，酸辣鲜香。',
      'hancheng-heleg': '饸饹筋道，羊汤浓香。',
      'zicang-jianbing': '薄脆香酥，配料丰富。',
      'qiaomian-hele': '荞香浓郁，口感独特。',
      'yangza-fentang': '暖胃滋补，汤鲜而不腻。',
      'remipi': '热食更筋韧，辣香扑鼻。',
      'caidoufu-mian': '豆香清爽，营养均衡。',
      'zhengmian': '蒸面偏湿，裹住辣油更香。',
      'ziyang-haozi': '蒿香清新，口感独特。',
      'luonan-suantang': '山泉酸爽，清冽开胃。'
    };
    var tagsMap = {
      'biangbiang': ['宽面', '油泼'],
      'youpomian': ['辣子', '蒜香'],
      'liangpi': ['清爽', '酸辣'],
      'yaozhou-saozi': ['臊子', '酸辣'],
      'qishan-saozi': ['臊子', '酸辣'],
      'ganmianpi': ['筋爽', '凉食'],
      'chemaian': ['拉面', '筋道'],
      'tongguan-saozi': ['臊子', '鲜香'],
      'hancheng-heleg': ['饸饹', '羊汤'],
      'zicang-jianbing': ['煎饼', '香酥'],
      'qiaomian-hele': ['荞面', '饸饹'],
      'yangza-fentang': ['粉汤', '羊杂'],
      'remipi': ['米皮', '热食'],
      'caidoufu-mian': ['豆香', '家常'],
      'zhengmian': ['蒸面', '湿润'],
      'ziyang-haozi': ['蒿香', '清新'],
      'luonan-suantang': ['酸汤', '清冽']
    };
    var name = nameMap[this.slug] || '面食';
    var intro = introMap[this.slug] || '这是一道地方特色面食。';
    var tags = tagsMap[this.slug] || ['特色', '本地'];
    this.noodle = {
      name: name,
      intro: intro,
      tags: tags,
      history: '',
      features: '',
      heroImg: ''
    };

    // 特例覆盖：荞面饸饹（来自你提供的数据）
    if (this.slug === 'qiaomian-hele') {
      var provided = {
        name: '荞面饸饹',
        imageUrl: 'https://qiqjregvdczjxckgiqan.supabase.co/storage/v1/object/public/NoodlePicture/BuckwheatNoodles.png',
        history: '饸饹面的历史非常悠久，其制作工具“饸饹床子”在元代农书中已有明确记载。它的诞生与北方地区广泛种植荞麦、高粱等杂粮的物产背景直接相关。由于荞麦缺乏 gluten，不易擀切，智慧的古人便发明了这种“压”面的工具，使粗糙的杂粮得以制成顺滑的面条。这道美食承载着中国北方杂粮饮食文化的记忆，是古代食品加工机械与饮食智慧结合的典范。',
        introduction: '荞面饸饹是将和好的荞麦面团放入木制或铁制的“饸饹床子”中，通过杠杆原理，用物理压力将面团从底部的多孔模具中直接压入沸水锅中，煮熟后捞出。成品面条呈灰褐色，圆滑长爽，带有荞麦特有的清香。可做汤面，亦可凉拌，口感筋道滑溜，是典型的健康粗粮食品。',
        features: '工具压制：使用独特的“饸饹床子”制作，过程充满仪式感，面条形态均匀圆润。 杂粮健康：主料为荞麦，富含膳食纤维和多种营养素，是公认的健康绿色食品。 口感独特：面条因压制而格外筋道、滑溜，与手擀面口感迥异。 吃法多样：著名的有羊肉臊子饸饹、凉拌饸饹等，风味各异，荤素皆宜。',
        tag: '面食',
        city: '榆林市'
      };
      var tags2 = (provided.tag || '').split(/[,\s]+/).filter(Boolean);
      this.noodle = {
        name: provided.name,
        intro: provided.introduction,
        tags: tags2.length ? tags2 : tags,
        history: provided.history,
        features: provided.features,
        heroImg: provided.imageUrl
      };
    }

    // 设置导航标题为面食名
    uni.setNavigationBarTitle({
      title: name
    });

    // 接入接口：按条件查询（优先 foodName，其次 tag），不再按城市查询
    var targetName = routeFoodName || nameMap[this.slug] || '';
    var firstTag = Array.isArray(tags) && tags[0] || '';
    var toList = function toList(res) {
      return Array.isArray(res) ? res : res && res.data || [];
    };
    var fillFrom = function fillFrom(found) {
      var t = found.tags || found.tag;
      var tagsFromApi = Array.isArray(t) ? t : typeof t === 'string' ? t.split(/[,\s]+/).filter(Boolean) : t != null ? [t] : _this.noodle.tags;
      _this.noodle = {
        name: found.foodName || found.name || _this.noodle.name,
        intro: found.introduction || found.intro || found.description || _this.noodle.intro,
        tags: tagsFromApi,
        history: found.history || _this.noodle.history,
        features: found.features || _this.noodle.features,
        heroImg: found.imageUrl || found.image || found.img || found.coverImage || _this.noodle.heroImg
      };
      if (_this.noodle.name) uni.setNavigationBarTitle({
        title: _this.noodle.name
      });
    };
    var tryFetch = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res0, list0, res1, list1, found1;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(routeId != null)) {
                  _context.next = 21;
                  break;
                }
                _context.prev = 1;
                console.log('[item:api] query by id=', routeId);
                _context.next = 5;
                return queryFoods({
                  id: routeId
                });
              case 5:
                res0 = _context.sent;
                list0 = toList(res0);
                if (!(Array.isArray(list0) && list0.length)) {
                  _context.next = 13;
                  break;
                }
                fillFrom(list0[0]);
                console.log('[item:api] filled by id');
                return _context.abrupt("return", true);
              case 13:
                console.warn('[item:api] empty list for id=', routeId);
              case 14:
                _context.next = 19;
                break;
              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                console.error('[item:api] request failed for id=', routeId, _context.t0);
              case 19:
                _context.next = 41;
                break;
              case 21:
                if (!targetName) {
                  _context.next = 41;
                  break;
                }
                _context.prev = 22;
                console.log('[item:api] query by foodName=', targetName);
                _context.next = 26;
                return queryFoods({
                  foodName: targetName
                });
              case 26:
                res1 = _context.sent;
                list1 = toList(res1);
                if (!(Array.isArray(list1) && list1.length)) {
                  _context.next = 35;
                  break;
                }
                found1 = list1.find(function (it) {
                  return String(it.foodName || '').trim() === targetName || String(it.slug || '').trim() === _this.slug;
                }) || list1[0];
                fillFrom(found1);
                console.log('[item:api] filled by foodName');
                return _context.abrupt("return", true);
              case 35:
                console.warn('[item:api] empty list for foodName=', targetName);
              case 36:
                _context.next = 41;
                break;
              case 38:
                _context.prev = 38;
                _context.t1 = _context["catch"](22);
                console.error('[item:api] request failed for foodName=', targetName, _context.t1);
              case 41:
                return _context.abrupt("return", false);
              case 42:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16], [22, 38]]);
      }));
      return function tryFetch() {
        return _ref.apply(this, arguments);
      };
    }();
    tryFetch().then(function (ok) {
      if (!ok) console.warn('[item:api] 条件查询未命中，保留本地数据');
    });
    this.checkSharedStatus();
  },
  methods: (_methods = {
    checkSharedStatus: function checkSharedStatus() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var targetId, res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                targetId = _this2.foodId != null ? _this2.foodId : _this2.slug;
                if (targetId) {
                  _context2.next = 3;
                  break;
                }
                return _context2.abrupt("return");
              case 3:
                _context2.prev = 3;
                _context2.next = 6;
                return checkShared(targetId, 'FOOD');
              case 6:
                res = _context2.sent;
                if (res && (res.isShared === true || res.data && res.data.isShared === true)) {
                  _this2.hasShared = true;
                }
                _context2.next = 13;
                break;
              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](3);
                console.error('[noodle-item] 查询分享状态失败:', _context2.t0);
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 10]]);
      }))();
    },
    // ===== 分享相关功能 =====
    // 点击分享按钮（微信小程序会触发 onShareAppMessage）
    onShareClick: function onShareClick() {
      // 微信小程序中，点击 open-type="share" 的按钮会自动触发 onShareAppMessage
      // 不需要保存图片，直接使用小程序分享功能
      console.log('[noodle-item] 用户点击分享按钮，美食ID:', this.foodId, '美食名称:', this.noodle.name);
    },
    // 微信小程序分享配置
    onShareAppMessage: function onShareAppMessage(options) {
      console.log('[noodle-item] onShareAppMessage 被调用', options);
      if (!this.noodle || !this.noodle.name) {
        console.warn('[noodle-item] 分享时美食信息为空');
        return {
          title: '快来和我一起了解并品尝美食吧!',
          path: '/pages/noodle/item',
          imageUrl: IMG.retouch_2025112414392946
        };
      }

      // 构建分享路径，包含美食ID、slug和城市信息
      var params = [];
      if (this.foodId != null) {
        params.push("id=".concat(encodeURIComponent(this.foodId)));
      }
      if (this.slug) {
        params.push("slug=".concat(encodeURIComponent(this.slug)));
      }
      if (this.city) {
        params.push("city=".concat(encodeURIComponent(this.city)));
      }
      if (this.noodle.name) {
        params.push("foodName=".concat(encodeURIComponent(this.noodle.name)));
      }
      var sharePath = "/pages/noodle/item?".concat(params.join('&'));

      // 分享标题：使用指定的文案格式
      var foodName = this.noodle.name || '美食';
      var shareTitle = "\u5FEB\u6765\u548C\u6211\u4E00\u8D77\u4E86\u89E3\u5E76\u54C1\u5C1D".concat(foodName, "\u5427!");

      // 分享图片：使用美食头图
      var shareImageUrl = this.noodleHero || IMG.retouch_2025112414392946;
      console.log('[noodle-item] 分享信息:', {
        title: shareTitle,
        path: sharePath,
        foodId: this.foodId,
        foodName: foodName,
        imageUrl: shareImageUrl
      });

      // 记录分享行为
      this.recordShareBehavior().catch(function (err) {
        console.error('[noodle-item] 记录分享行为失败', err);
      });
      return {
        title: shareTitle,
        path: sharePath,
        imageUrl: shareImageUrl
      };
    },
    recordShareBehavior: function recordShareBehavior() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var targetId, foodName, shareTitle;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                targetId = _this3.foodId != null ? _this3.foodId : _this3.slug;
                if (targetId) {
                  _context3.next = 4;
                  break;
                }
                return _context3.abrupt("return");
              case 4:
                foodName = _this3.noodle.name || '美食';
                shareTitle = "\u5FEB\u6765\u548C\u6211\u4E00\u8D77\u4E86\u89E3\u5E76\u54C1\u5C1D".concat(foodName, "\u5427!");
                _context3.next = 8;
                return recordShare({
                  targetId: targetId,
                  targetType: 'FOOD',
                  shareChannel: 'WECHAT_MESSAGE',
                  shareTitle: shareTitle,
                  shareDesc: _this3.noodle.intro || '',
                  shareCover: _this3.noodleHero
                });
              case 8:
                _context3.next = 13;
                break;
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                console.error('[noodle-item] 分享埋点失败:', _context3.t0);
              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    onGeneratePoster: function onGeneratePoster() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var posterPath;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this4.generatingPoster || _this4.hasShared)) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return");
              case 2:
                _this4.generatingPoster = true;
                uni.showLoading({
                  title: '生成中...',
                  mask: true
                });
                _context4.prev = 4;
                _context4.next = 7;
                return _this4.requestAlbumAuth();
              case 7:
                _context4.next = 9;
                return _this4.drawPoster();
              case 9:
                posterPath = _context4.sent;
                _context4.next = 12;
                return _this4.savePosterToAlbum(posterPath);
              case 12:
                _context4.next = 14;
                return _this4.shareImageToWeChat(posterPath);
              case 14:
                _context4.next = 16;
                return _this4.recordShareBehavior();
              case 16:
                _this4.hasShared = true;
                _context4.next = 22;
                break;
              case 19:
                _context4.prev = 19;
                _context4.t0 = _context4["catch"](4);
                console.error('[noodle-item] 生成分享海报失败:', _context4.t0);
                // 如果分享失败，至少图片已保存到相册，用户可以手动分享
              case 22:
                _context4.prev = 22;
                _this4.generatingPoster = false;
                uni.hideLoading();
                return _context4.finish(22);
              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 19, 22, 26]]);
      }))();
    },
    // 请求相册授权
    requestAlbumAuth: function requestAlbumAuth() {
      return new Promise(function (resolve, reject) {
        uni.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.writePhotosAlbum'] === false) {
              // 用户之前拒绝了授权，需要引导用户开启
              uni.showModal({
                title: '需要授权',
                content: '需要授权保存图片到相册才能分享，请在设置中开启',
                confirmText: '去设置',
                success: function success(modalRes) {
                  if (modalRes.confirm) {
                    uni.openSetting({
                      success: function success(settingRes) {
                        if (settingRes.authSetting['scope.writePhotosAlbum']) {
                          resolve();
                        } else {
                          reject(new Error('用户未授权相册权限'));
                        }
                      },
                      fail: function fail() {
                        return reject(new Error('打开设置失败'));
                      }
                    });
                  } else {
                    reject(new Error('用户取消授权'));
                  }
                }
              });
            } else {
              // 已授权或未设置，直接请求授权
              uni.authorize({
                scope: 'scope.writePhotosAlbum',
                success: function success() {
                  return resolve();
                },
                fail: function fail() {
                  // 授权失败，引导用户去设置
                  uni.showModal({
                    title: '需要授权',
                    content: '需要授权保存图片到相册才能分享，请在设置中开启',
                    confirmText: '去设置',
                    success: function success(modalRes) {
                      if (modalRes.confirm) {
                        uni.openSetting({
                          success: function success(settingRes) {
                            if (settingRes.authSetting['scope.writePhotosAlbum']) {
                              resolve();
                            } else {
                              reject(new Error('用户未授权相册权限'));
                            }
                          },
                          fail: function fail() {
                            return reject(new Error('打开设置失败'));
                          }
                        });
                      } else {
                        reject(new Error('用户取消授权'));
                      }
                    }
                  });
                }
              });
            }
          },
          fail: function fail() {
            return reject(new Error('获取设置失败'));
          }
        });
      });
    },
    // 分享图片到微信
    shareImageToWeChat: function shareImageToWeChat(imagePath) {
      return new Promise(function (resolve, reject) {
        // 检查基础库版本
        var systemInfo = uni.getSystemInfoSync();
        var SDKVersion = systemInfo.SDKVersion || '0.0.0';
        var versionParts = SDKVersion.split('.').map(Number);
        var minVersion = [2, 4, 0];

        // 比较版本号
        var canShare = false;
        if (versionParts[0] > minVersion[0]) {
          canShare = true;
        } else if (versionParts[0] === minVersion[0]) {
          if (versionParts[1] > minVersion[1]) {
            canShare = true;
          } else if (versionParts[1] === minVersion[1]) {
            if (versionParts[2] >= minVersion[2]) {
              canShare = true;
            }
          }
        }
        if (!canShare) {
          // 基础库版本过低，提示用户手动分享
          uni.showToast({
            title: '图片已保存到相册，请手动分享',
            icon: 'none',
            duration: 3000
          });
          resolve();
          return;
        }

        // 使用微信原生 API 分享图片

        if (typeof wx !== 'undefined' && wx.shareImageMessage) {
          wx.shareImageMessage({
            imagePath: imagePath,
            success: function success() {
              console.log('[noodle-item] 分享图片成功');
              resolve();
            },
            fail: function fail(err) {
              console.error('[noodle-item] 分享图片失败:', err);
              // 分享失败不影响，图片已保存，用户可以手动分享
              uni.showToast({
                title: '图片已保存到相册，请手动分享',
                icon: 'none',
                duration: 3000
              });
              resolve(); // 不 reject，因为图片已保存成功
            }
          });
        } else {
          // API 不可用，提示用户手动分享
          uni.showToast({
            title: '图片已保存到相册，请手动分享',
            icon: 'none',
            duration: 3000
          });
          resolve();
        }
      });
    },
    drawPoster: function drawPoster() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var ctx, noodle, W, H, heroHeight, cardX, cardY, cardW, cardPaddingX, cardPaddingY, fallbackHero, bgGradient, heroPath, heroOverlay, cursorY, introText, introLineHeight, introMaxLines, tagList, mainCardH, infoCardY, infoCardW, infoCardH, infoCardPadding, infoCardTitleSize, infoCardTextSize, infoCardLineHeight, infoY, historyText, featuresCardX, _infoY, featuresText, footerY;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ctx = uni.createCanvasContext('noodlePosterCanvas', _this5);
                noodle = _this5.noodle;
                W = 375; // 增加高度以容纳完整页面内容
                H = 1000;
                heroHeight = 220;
                cardX = 18;
                cardY = heroHeight + 20;
                cardW = W - cardX * 2;
                cardPaddingX = 28;
                cardPaddingY = 20;
                fallbackHero = IMG.retouch_2025112414392946;
                ctx.clearRect(0, 0, W, H);

                // 背景渐变
                bgGradient = ctx.createLinearGradient(0, 0, 0, H);
                bgGradient.addColorStop(0, '#fffaf1');
                bgGradient.addColorStop(1, '#fff5dc');
                ctx.setFillStyle(bgGradient);
                ctx.fillRect(0, 0, W, H);

                // 下载头部图片
                heroPath = '';
                _context5.prev = 18;
                _context5.next = 21;
                return _this5.downloadImage(_this5.noodleHero);
              case 21:
                heroPath = _context5.sent;
                _context5.next = 36;
                break;
              case 24:
                _context5.prev = 24;
                _context5.t0 = _context5["catch"](18);
                console.warn('[noodle-item] 头图下载失败，使用默认示意图', _context5.t0);
                _context5.prev = 27;
                _context5.next = 30;
                return _this5.downloadImage(fallbackHero);
              case 30:
                heroPath = _context5.sent;
                _context5.next = 36;
                break;
              case 33:
                _context5.prev = 33;
                _context5.t1 = _context5["catch"](27);
                heroPath = fallbackHero;
              case 36:
                // 绘制头部图片
                ctx.save();
                ctx.drawImage(heroPath, 0, 0, W, heroHeight);
                ctx.restore();

                // 头部遮罩
                ctx.save();
                heroOverlay = ctx.createLinearGradient(0, heroHeight - 80, 0, heroHeight);
                heroOverlay.addColorStop(0, 'rgba(0,0,0,0)');
                heroOverlay.addColorStop(1, 'rgba(90,44,18,0.15)');
                ctx.setFillStyle(heroOverlay);
                ctx.fillRect(0, heroHeight - 80, W, 80);
                ctx.restore();

                // 主卡片（标题、介绍、标签）
                cursorY = cardY + cardPaddingY;
                ctx.save();
                ctx.setShadow(0, 12, 24, 'rgba(0,0,0,0.08)');
                _this5.fillRoundRect(ctx, cardX, cardY, cardW, 200, 24, '#fff5df');
                ctx.restore();

                // 标题
                ctx.setFillStyle('#5a2c12');
                ctx.setFontSize(28);
                ctx.setTextAlign('center');
                ctx.setTextBaseline('middle');
                ctx.fillText(noodle.name || '三秦好面', W / 2, cursorY);
                cursorY += 40;
                // 介绍文字
                introText = noodle.intro ? "\u3000\u3000".concat(noodle.intro) : '这是一道地方特色面食。';
                introLineHeight = 22;
                introMaxLines = 5;
                ctx.setTextAlign('left');
                ctx.setTextBaseline('top');
                ctx.setFontSize(16);
                ctx.setFillStyle('#5a2c12');
                _this5.drawMultilineText(ctx, introText, cardX + cardPaddingX, cursorY, cardW - cardPaddingX * 2, introLineHeight, introMaxLines);
                cursorY += introLineHeight * introMaxLines + 16;

                // 标签
                tagList = (Array.isArray(noodle.tags) ? noodle.tags : []).filter(Boolean);
                if (tagList.length) {
                  cursorY = _this5.drawTagPills(ctx, tagList, cardX + cardPaddingX, cursorY, cardW - cardPaddingX * 2) + 16;
                }

                // 更新主卡片高度
                mainCardH = cursorY - cardY + cardPaddingY;
                ctx.save();
                _this5.fillRoundRect(ctx, cardX, cardY, cardW, mainCardH, 24, '#fff5df');
                ctx.restore();

                // 详细信息区：历史渊源和制作与特色（两列布局）
                infoCardY = cardY + mainCardH + 20;
                infoCardW = (cardW - 12) / 2;
                infoCardH = 280;
                infoCardPadding = 16;
                infoCardTitleSize = 20;
                infoCardTextSize = 14;
                infoCardLineHeight = 20; // 历史渊源卡片
                if (noodle.history) {
                  ctx.save();
                  ctx.setShadow(0, 8, 16, 'rgba(0,0,0,0.08)');
                  _this5.fillRoundRect(ctx, cardX, infoCardY, infoCardW, infoCardH, 20, '#fff5df');
                  ctx.restore();
                  infoY = infoCardY + infoCardPadding;
                  ctx.setFillStyle('#5a2c12');
                  ctx.setFontSize(infoCardTitleSize);
                  ctx.setTextAlign('left');
                  ctx.setTextBaseline('top');
                  ctx.fillText('历史渊源', cardX + infoCardPadding, infoY);
                  infoY += 28;
                  historyText = "\u3000\u3000".concat(noodle.history);
                  ctx.setFontSize(infoCardTextSize);
                  ctx.setFillStyle('#5a2c12');
                  _this5.drawMultilineText(ctx, historyText, cardX + infoCardPadding, infoY, infoCardW - infoCardPadding * 2, infoCardLineHeight, 10);
                }

                // 制作与特色卡片
                if (noodle.features) {
                  featuresCardX = cardX + infoCardW + 12;
                  ctx.save();
                  ctx.setShadow(0, 8, 16, 'rgba(0,0,0,0.08)');
                  _this5.fillRoundRect(ctx, featuresCardX, infoCardY, infoCardW, infoCardH, 20, '#fff5df');
                  ctx.restore();
                  _infoY = infoCardY + infoCardPadding;
                  ctx.setFillStyle('#5a2c12');
                  ctx.setFontSize(infoCardTitleSize);
                  ctx.setTextAlign('left');
                  ctx.setTextBaseline('top');
                  ctx.fillText('制作与特色', featuresCardX + infoCardPadding, _infoY);
                  _infoY += 28;
                  featuresText = noodle.features;
                  ctx.setFontSize(infoCardTextSize);
                  ctx.setFillStyle('#5a2c12');
                  _this5.drawMultilineText(ctx, featuresText, featuresCardX + infoCardPadding, _infoY, infoCardW - infoCardPadding * 2, infoCardLineHeight, 10);
                }

                // 底部水印
                footerY = infoCardY + infoCardH + 20;
                ctx.setFillStyle('rgba(90,44,18,0.4)');
                ctx.setFontSize(12);
                ctx.setTextAlign('center');
                ctx.setTextBaseline('middle');
                ctx.fillText('嘹咋咧 · 分享三秦味道', W / 2, footerY);
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  ctx.draw(false, function () {
                    uni.canvasToTempFilePath({
                      canvasId: 'noodlePosterCanvas',
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
                    }, _this5);
                  });
                }));
              case 88:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[18, 24], [27, 33]]);
      }))();
    },
    downloadImage: function downloadImage(url) {
      return new Promise(function (resolve, reject) {
        if (!url) return reject(new Error('图片地址为空'));
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
            // 不显示 toast，因为后面会直接分享
            console.log('[noodle-item] 图片已保存到相册');
            resolve();
          },
          fail: function fail(err) {
            console.error('[noodle-item] 保存海报失败:', err);
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
    }
  }, (0, _defineProperty2.default)(_methods, "recordShareBehavior", function recordShareBehavior() {
    var _this6 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var targetId;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              targetId = _this6.foodId != null ? _this6.foodId : _this6.slug;
              if (targetId) {
                _context6.next = 4;
                break;
              }
              return _context6.abrupt("return");
            case 4:
              _context6.next = 6;
              return recordShare({
                targetId: targetId,
                targetType: 'FOOD',
                shareChannel: 'WECHAT_POSTER',
                shareTitle: _this6.noodle.name,
                shareDesc: _this6.noodle.intro,
                shareCover: _this6.noodle.heroImg
              });
            case 6:
              _context6.next = 11;
              break;
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              console.error('[noodle-item] 分享埋点失败:', _context6.t0);
            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 8]]);
    }))();
  }), (0, _defineProperty2.default)(_methods, "addRoundRect", function addRoundRect(ctx, x, y, w, h, r) {
    ctx.save();
    this.drawRoundRectPath(ctx, x, y, w, h, r);
    ctx.clip();
  }), (0, _defineProperty2.default)(_methods, "drawRoundRectPath", function drawRoundRectPath(ctx, x, y, w, h, r) {
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
  }), (0, _defineProperty2.default)(_methods, "fillRoundRect", function fillRoundRect(ctx, x, y, w, h, r, color) {
    ctx.save();
    this.drawRoundRectPath(ctx, x, y, w, h, r);
    ctx.setFillStyle(color);
    ctx.fill();
    ctx.restore();
  }), (0, _defineProperty2.default)(_methods, "drawTagPills", function drawTagPills(ctx, tags, startX, startY, maxWidth) {
    var _this7 = this;
    if (!Array.isArray(tags) || tags.length === 0) return startY;
    var normalizedTags = tags.map(function (tag) {
      return String(tag).trim();
    }).filter(Boolean);
    if (!normalizedTags.length) return startY;
    var fontSize = 12;
    var horizontalPadding = 10;
    var verticalPadding = 6;
    var rowGap = 8;
    var columnGap = 8;
    var availableWidth = Math.max(20, maxWidth);
    var pillHeight = fontSize + verticalPadding * 2;
    var cursorX = startX;
    var cursorY = startY;
    ctx.setFontSize(fontSize);
    ctx.setTextAlign('left');
    ctx.setTextBaseline('middle');
    normalizedTags.forEach(function (text) {
      var pillText = "#".concat(text);
      var metrics = ctx.measureText(pillText);
      var desiredWidth = metrics.width + horizontalPadding * 2;
      var pillWidth = Math.min(desiredWidth, availableWidth);
      if (cursorX + pillWidth > startX + availableWidth) {
        cursorX = startX;
        cursorY += pillHeight + rowGap;
      }
      _this7.fillRoundRect(ctx, cursorX, cursorY, pillWidth, pillHeight, pillHeight / 2, '#ffecc7');
      ctx.setFillStyle('#7b2f00');
      ctx.fillText(pillText, cursorX + horizontalPadding, cursorY + pillHeight / 2);
      cursorX += pillWidth + columnGap;
    });
    return cursorY + pillHeight;
  }), (0, _defineProperty2.default)(_methods, "drawMultilineText", function drawMultilineText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
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
  }), _methods)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 140:
/*!***************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/noodle/item.vue?vue&type=style&index=0&id=29acb72c&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_style_index_0_id_29acb72c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./item.vue?vue&type=style&index=0&id=29acb72c&scoped=true&lang=scss& */ 141);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_style_index_0_id_29acb72c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_style_index_0_id_29acb72c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_style_index_0_id_29acb72c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_style_index_0_id_29acb72c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_item_vue_vue_type_style_index_0_id_29acb72c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 141:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/noodle/item.vue?vue&type=style&index=0&id=29acb72c&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[134,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/noodle/item.js.map
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/Map-Flavors"],{

/***/ 71:
/*!******************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Findex%2FMap-Flavors"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _MapFlavors = _interopRequireDefault(__webpack_require__(/*! ./pages/index/Map-Flavors.vue */ 72));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_MapFlavors.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 72:
/*!***********************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/Map-Flavors.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map-Flavors.vue?vue&type=template&id=2b8df97e&scoped=true& */ 73);
/* harmony import */ var _Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map-Flavors.vue?vue&type=script&lang=js& */ 75);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Map_Flavors_vue_vue_type_style_index_0_id_2b8df97e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map-Flavors.vue?vue&type=style&index=0&id=2b8df97e&lang=scss&scoped=true& */ 79);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b8df97e",
  null,
  false,
  _Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/Map-Flavors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/*!******************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/Map-Flavors.vue?vue&type=template&id=2b8df97e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Map-Flavors.vue?vue&type=template&id=2b8df97e&scoped=true& */ 74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_template_id_2b8df97e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 74:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/Map-Flavors.vue?vue&type=template&id=2b8df97e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.searchPanelVisible && _vm.displayPoiList.length
  var l0 = g0
    ? _vm.__map(_vm.displayPoiList, function (item, __i0__) {
        var $orig = _vm.__get_orig(item)
        var m0 =
          _vm.getPoiCategoryText(item) ||
          (_vm.activeCategory === "food"
            ? "美食"
            : _vm.activeCategory === "scenic"
            ? "景点"
            : "非遗体验地")
        return {
          $orig: $orig,
          m0: m0,
        }
      })
    : null
  var l1 =
    _vm.activeCategory !== "heritage"
      ? _vm.__map(_vm.quickFilterTags, function (tag, __i3__) {
          var $orig = _vm.__get_orig(tag)
          var m1 = _vm.isQuickFilterActive(tag.id)
          return {
            $orig: $orig,
            m1: m1,
          }
        })
      : null
  var l2 =
    _vm.activeCategory !== "heritage" &&
    _vm.activeFilterPopup &&
    !(_vm.activeFilterPopup === "nearby") &&
    _vm.activeFilterPopup === "category" &&
    _vm.activeCategory === "food"
      ? _vm.__map(_vm.foodCategoryOptions, function (option, __i12__) {
          var $orig = _vm.__get_orig(option)
          var m2 = _vm.isFoodCategoryActive(option)
          return {
            $orig: $orig,
            m2: m2,
          }
        })
      : null
  var l3 =
    _vm.activeCategory !== "heritage" &&
    _vm.activeFilterPopup &&
    !(_vm.activeFilterPopup === "nearby") &&
    _vm.activeFilterPopup === "category" &&
    !(_vm.activeCategory === "food") &&
    _vm.activeCategory === "scenic"
      ? _vm.__map(_vm.scenicCategoryPopupOptions, function (option, __i13__) {
          var $orig = _vm.__get_orig(option)
          var m3 = _vm.isScenicCategoryActive(option)
          return {
            $orig: $orig,
            m3: m3,
          }
        })
      : null
  var l4 =
    _vm.activeCategory !== "heritage" &&
    _vm.activeFilterPopup &&
    !(_vm.activeFilterPopup === "nearby") &&
    _vm.activeFilterPopup === "category" &&
    !(_vm.activeCategory === "food") &&
    !(_vm.activeCategory === "scenic")
      ? _vm.__map(_vm.foodCategoryOptions, function (option, __i14__) {
          var $orig = _vm.__get_orig(option)
          var m4 = _vm.isFoodCategoryActive(option)
          return {
            $orig: $orig,
            m4: m4,
          }
        })
      : null
  var l7 = _vm.__map(_vm.displayPoiList, function (item, __i16__) {
    var $orig = _vm.__get_orig(item)
    var m5 = _vm.activeCategory === "food" ? _vm.getFoodCover(item) : null
    var m6 = _vm.activeCategory === "food" ? _vm.getPoiScore(item) : null
    var m7 = _vm.activeCategory === "food" && m6 ? _vm.getPoiScore(item) : null
    var m8 = _vm.activeCategory === "food" ? _vm.getPoiAvgPriceText(item) : null
    var m9 =
      _vm.activeCategory === "food" && m8 ? _vm.getPoiAvgPriceText(item) : null
    var m10 =
      _vm.activeCategory === "food" ? _vm.getFoodTravelTimeText(item) : null
    var l5 = _vm.activeCategory === "food" ? _vm.getFoodTypeTags(item) : null
    var m11 =
      _vm.activeCategory === "food" && item.distance
        ? _vm.formatDistance(item.distance)
        : null
    var m12 =
      !(_vm.activeCategory === "food") && _vm.activeCategory === "heritage"
        ? _vm.getFoodCover(item)
        : null
    var m13 =
      !(_vm.activeCategory === "food") && _vm.activeCategory === "heritage"
        ? _vm.getPoiScore(item)
        : null
    var m14 =
      !(_vm.activeCategory === "food") &&
      _vm.activeCategory === "heritage" &&
      m13
        ? _vm.getPoiScore(item)
        : null
    var m15 =
      !(_vm.activeCategory === "food") && _vm.activeCategory === "heritage"
        ? _vm.getPoiAvgPriceText(item)
        : null
    var m16 =
      !(_vm.activeCategory === "food") &&
      _vm.activeCategory === "heritage" &&
      m15
        ? _vm.getPoiAvgPriceText(item)
        : null
    var m17 =
      !(_vm.activeCategory === "food") && _vm.activeCategory === "heritage"
        ? _vm.getHeritageAreaText(item)
        : null
    var m18 =
      !(_vm.activeCategory === "food") &&
      _vm.activeCategory === "heritage" &&
      m17
        ? _vm.getHeritageAreaText(item)
        : null
    var m19 =
      !(_vm.activeCategory === "food") && _vm.activeCategory === "heritage"
        ? _vm.getFoodTravelTimeText(item)
        : null
    var m20 =
      !(_vm.activeCategory === "food") && _vm.activeCategory === "heritage"
        ? _vm.getPoiCategoryText(item)
        : null
    var m21 =
      !(_vm.activeCategory === "food") &&
      _vm.activeCategory === "heritage" &&
      m20
        ? _vm.getPoiCategoryText(item)
        : null
    var m22 =
      !(_vm.activeCategory === "food") && _vm.activeCategory === "heritage"
        ? _vm.getHeritageIntro(item)
        : null
    var m23 =
      !(_vm.activeCategory === "food") &&
      _vm.activeCategory === "heritage" &&
      m22
        ? _vm.getHeritageIntro(item)
        : null
    var m24 =
      !(_vm.activeCategory === "food") &&
      _vm.activeCategory === "heritage" &&
      item.distance
        ? _vm.formatDistance(item.distance)
        : null
    var m25 =
      !(_vm.activeCategory === "food") && !(_vm.activeCategory === "heritage")
        ? _vm.getFoodCover(item)
        : null
    var m26 =
      !(_vm.activeCategory === "food") && !(_vm.activeCategory === "heritage")
        ? _vm.getPoiScore(item)
        : null
    var m27 =
      !(_vm.activeCategory === "food") &&
      !(_vm.activeCategory === "heritage") &&
      m26
        ? _vm.getPoiScore(item)
        : null
    var m28 =
      !(_vm.activeCategory === "food") && !(_vm.activeCategory === "heritage")
        ? _vm.getFoodTravelTimeText(item)
        : null
    var l6 =
      !(_vm.activeCategory === "food") && !(_vm.activeCategory === "heritage")
        ? _vm.getPoiTags(item)
        : null
    var m29 =
      !(_vm.activeCategory === "food") &&
      !(_vm.activeCategory === "heritage") &&
      item.distance
        ? _vm.formatDistance(item.distance)
        : null
    return {
      $orig: $orig,
      m5: m5,
      m6: m6,
      m7: m7,
      m8: m8,
      m9: m9,
      m10: m10,
      l5: l5,
      m11: m11,
      m12: m12,
      m13: m13,
      m14: m14,
      m15: m15,
      m16: m16,
      m17: m17,
      m18: m18,
      m19: m19,
      m20: m20,
      m21: m21,
      m22: m22,
      m23: m23,
      m24: m24,
      m25: m25,
      m26: m26,
      m27: m27,
      m28: m28,
      l6: l6,
      m29: m29,
    }
  })
  var g1 = !_vm.loadingPois && _vm.displayPoiList.length > 0 && _vm.hasMore
  var g2 = !_vm.loadingPois && _vm.displayPoiList.length === 0
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        l1: l1,
        l2: l2,
        l3: l3,
        l4: l4,
        l7: l7,
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

/***/ 75:
/*!************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/Map-Flavors.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Map-Flavors.vue?vue&type=script&lang=js& */ 76);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/Map-Flavors.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
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

var _require = __webpack_require__(/*! ../../api/map.js */ 77),
  getPois = _require.getPois,
  getNavigationUrl = _require.getNavigationUrl,
  getHotspots = _require.getHotspots;
var _require2 = __webpack_require__(/*! ../../api/checkin.js */ 78),
  fetchLocationCandidates = _require2.fetchLocationCandidates;

// 高德美食 type 映射：去重 + 相近类型归一，用于美食标签
var FOOD_TYPE_IGNORE_LIST = ['餐饮服务'];
var FOOD_TYPE_SYNONYM_MAP = {
  快餐厅: '快餐',
  快餐店: '快餐',
  小吃快餐店: '小吃快餐',
  小吃店: '小吃快餐',
  茶艺馆: '茶饮',
  茶馆: '茶饮',
  糕饼店: '糕点',
  面包房: '糕点',
  中餐厅: '中餐',
  火锅店: '火锅',
  烧烤: '烧烤',
  烧烤店: '烧烤',
  咖啡厅: '咖啡',
  咖啡馆: '咖啡'
};
var FOOD_TYPE_PRETTY_TEXT_MAP = {
  快餐: '快餐简餐',
  小吃快餐: '小吃快餐',
  茶饮: '茶馆下午茶',
  糕点: '糕点烘焙',
  中餐: '家常中餐',
  火锅: '火锅聚餐',
  烧烤: '烧烤烤串',
  咖啡: '咖啡甜点'
};
var _default = {
  name: 'ShanweiMap',
  data: function data() {
    return {
      searchKeyword: '',
      // 标签筛选使用的关键词（例如“魏家凉皮”），不展示在搜索框中
      tagKeyword: '',
      // 搜索结果弹窗是否可见
      searchPanelVisible: false,
      activeCategory: 'food',
      categoryTabs: [{
        id: 'food',
        label: '美食'
      }, {
        id: 'scenic',
        label: '景点'
      }, {
        id: 'heritage',
        label: '非遗体验地'
      }],
      // 顶部主筛选标签：附近 / 分类 / 排序
      filterTags: [{
        id: 'nearby',
        label: '附近',
        active: true,
        hasArrow: true
      }, {
        id: 'category',
        label: '分类',
        active: false,
        hasArrow: true
      }, {
        id: 'sort',
        label: '排序',
        active: false,
        hasArrow: true
      }],
      // 第二行快捷标签（已移除“营业中”快捷筛选）
      quickFilterTags: [{
        id: 'noodle',
        label: '面馆'
      }, {
        id: 'shaanxi',
        label: '陕西菜'
      }, {
        id: 'nearby500',
        label: '附近500m'
      }, {
        id: 'weijia',
        label: '魏家凉皮'
      }],
      activeFilterPopup: '',
      // 附近筛选
      nearbyDistanceOptions: [{
        value: 500,
        label: '附近500m'
      }, {
        value: 1000,
        label: '1km内'
      }, {
        value: 3000,
        label: '3km内'
      }, {
        value: 5000,
        label: '5km内'
      }],
      // 默认 5km 内的门店
      selectedRadius: 5000,
      nearbyLandmarkGroups: [{
        id: 'scenic',
        label: '热门景区',
        items: [{
          id: 'scenic_dayanta',
          label: '大雁塔',
          keyword: '大雁塔'
        }, {
          id: 'scenic_xiaoyanta',
          label: '小雁塔',
          keyword: '小雁塔'
        }, {
          id: 'scenic_wall',
          label: '西安城墙',
          keyword: '城墙'
        }, {
          id: 'scenic_huaqingchi',
          label: '华清池',
          keyword: '华清池'
        }]
      }, {
        id: 'food_street',
        label: '美食街',
        items: [{
          id: 'street_huimin',
          label: '回民街',
          keyword: '回民街'
        }, {
          id: 'street_yongxingfang',
          label: '永兴坊',
          keyword: '永兴坊'
        }, {
          id: 'street_defu',
          label: '德福巷',
          keyword: '德福巷'
        }]
      }, {
        id: 'business',
        label: '热门商圈',
        items: [{
          id: 'biz_xiaozhai',
          label: '小寨商圈',
          keyword: '小寨'
        }, {
          id: 'biz_gaoxin',
          label: '高新商圈',
          keyword: '高新'
        }, {
          id: 'biz_datang',
          label: '大唐不夜城',
          keyword: '大唐不夜城'
        }]
      }],
      activeLandmarkGroupId: 'scenic',
      // 景点附近筛选（直线距离 / 商圈 / 地标）
      scenicNearbyMenus: [{
        id: 'distance',
        label: '直线距离'
      }, {
        id: 'business',
        label: '全城商区'
      }, {
        id: 'landmark',
        label: '地标'
      }],
      activeScenicNearbyMenuId: 'distance',
      scenicDistanceOptions: [{
        value: 1000,
        label: '1km'
      }, {
        value: 3000,
        label: '3km'
      }, {
        value: 5000,
        label: '5km'
      }, {
        value: 10000,
        label: '10km'
      }, {
        value: 30000,
        label: '30km'
      }],
      // 分类筛选
      foodCategoryOptions: [{
        id: 'all',
        label: '全部',
        keywords: []
      }, {
        id: 'chinese',
        label: '中餐',
        keywords: ['中餐']
      }, {
        id: 'snack_fast',
        label: '小吃快餐',
        keywords: ['小吃', '快餐']
      }, {
        id: 'noodle',
        label: '面馆',
        keywords: ['面', '面馆']
      }, {
        id: 'halal',
        label: '清真菜',
        keywords: ['清真']
      }, {
        id: 'northwest',
        label: '西北菜',
        keywords: ['西北']
      }, {
        id: 'bbq',
        label: '烤肉',
        keywords: ['烤肉', '烧烤']
      }, {
        id: 'shaanxi',
        label: '陕西菜',
        keywords: ['陕西']
      }, {
        id: 'burger',
        label: '汉堡包',
        keywords: ['汉堡']
      }, {
        id: 'milk_tea',
        label: '奶茶/茶饮',
        keywords: ['奶茶', '茶饮']
      }, {
        id: 'dessert',
        label: '糕点/烘焙',
        keywords: ['糕点', '烘焙', '甜品']
      }, {
        id: 'paomo',
        label: '泡馍',
        keywords: ['泡馍', '羊肉泡馍']
      }, {
        id: 'roujiamo',
        label: '肉夹馍',
        keywords: ['肉夹馍']
      }, {
        id: 'breakfast_must',
        label: '早餐必吃',
        keywords: ['早餐', '早点']
      }, {
        id: 'heritage_food',
        label: '非遗美食',
        keywords: ['非遗']
      }, {
        id: 'night_snack',
        label: '夜市小吃',
        keywords: ['夜市', '夜宵']
      }, {
        id: 'buffet',
        label: '自助餐',
        keywords: ['自助']
      }, {
        id: 'liangpi',
        label: '凉皮',
        keywords: ['凉皮']
      }, {
        id: 'skewer',
        label: '烤串',
        keywords: ['烤串', '串']
      }],
      selectedFoodCategoryId: 'all',
      // 景点分类
      scenicCategoryOptions: [
      // 通用"全部"选项
      {
        id: 'all',
        label: '全部分类',
        keywords: []
      },
      // A 级景区等级（使用 scenicLevel 传参）
      {
        id: '5a',
        label: '5A景区',
        keywords: ['5a', '5A级', '5a景区'],
        scenicLevel: '5A'
      }, {
        id: '4a',
        label: '4A景区',
        keywords: ['4a', '4A级', '4a景区'],
        scenicLevel: '4A'
      },
      // 旧的人文/免费等分类，主要给快捷标签使用（仍保留本地关键字过滤）
      {
        id: 'culture',
        label: '人文景观',
        keywords: ['人文', '文化', '古镇', '古街']
      }, {
        id: 'relic',
        label: '人文古迹',
        keywords: ['人文古迹', '文物古迹', '古迹', '遗址', '博物馆', '碑林']
      }, {
        id: 'park',
        label: '公园',
        keywords: ['公园', '湿地', '植物园', '动物园']
      }, {
        id: 'free',
        label: '免费景点',
        keywords: ['免费']
      }, {
        id: '3a',
        label: '3A景区',
        keywords: ['3a', '3A级', '3a景区']
      }, {
        id: '2a',
        label: '2A景区',
        keywords: ['2a', '2A级', '2a景区']
      },
      // 新的 scenicTags 分类标签（与后端 scenicTags 一致）
      {
        id: 'nature',
        label: '自然景观',
        keywords: ['自然景观'],
        scenicTags: ['自然景观']
      }, {
        id: 'water',
        label: '水上项目',
        keywords: ['水上项目'],
        scenicTags: ['水上项目']
      }, {
        id: 'exhibition',
        label: '展览馆',
        keywords: ['展览馆', '展馆'],
        scenicTags: ['展览馆']
      }, {
        id: 'zoo',
        label: '动物园',
        keywords: ['动物园'],
        scenicTags: ['动物园']
      }, {
        id: 'botanical',
        label: '植物园',
        keywords: ['植物园'],
        scenicTags: ['植物园']
      }, {
        id: 'ski',
        label: '滑雪景区',
        keywords: ['滑雪景区', '滑雪'],
        scenicTags: ['滑雪景区']
      }, {
        id: 'leisure',
        label: '休闲园区',
        keywords: ['休闲园区'],
        scenicTags: ['休闲园区']
      }, {
        id: 'landmark_building',
        label: '地标建筑',
        keywords: ['地标建筑'],
        scenicTags: ['地标建筑']
      }, {
        id: 'theme_park',
        label: '主题乐园',
        keywords: ['主题乐园'],
        scenicTags: ['主题乐园']
      }, {
        id: 'hot_spring',
        label: '温泉景区',
        keywords: ['温泉景区', '温泉'],
        scenicTags: ['温泉景区']
      }, {
        id: 'culture_block',
        label: '人文街区',
        keywords: ['人文街区'],
        scenicTags: ['人文街区']
      }, {
        id: 'memorial_place',
        label: '纪念地',
        keywords: ['纪念地'],
        scenicTags: ['纪念地']
      }],
      selectedScenicCategoryId: 'all',
      // 当前选中的景点等级（5A/4A）与分类标签（自然景观等），用于传给后端
      scenicLevelFilter: '',
      scenicTagsFilter: '',
      // 当前多选的 scenicTags 对应的选项 id 集合（如 ['nature','park']）
      selectedScenicTagIds: [],
      // 排序筛选

      sortOptions: [{
        id: 'recommend',
        label: '推荐排序'
      }, {
        id: 'rating',
        label: '好评优先'
      }, {
        id: 'price_low',
        label: '低价优先'
      }],
      activeSortId: 'recommend',
      activeQuickFilterId: '',
      selectedNearbyLandmarkId: '',
      onlyShowOpen: false,
      // 城市 & 定位信息
      cityName: '',
      userLng: null,
      userLat: null,
      // 当前搜索中心（“我” 或 某个热门地标）
      centerType: 'user',
      centerLng: null,
      centerLat: null,
      // 分类多选（用于传给后端的 foodCategory）
      selectedCategories: [],
      // 热门地标原始列表
      hotspots: [],
      latitude: 34.34127,
      // 默认西安坐标

      longitude: 108.93984,
      scale: 15,
      hasLocation: false,
      locating: false,
      locationText: '定位中...',
      markers: [],
      poiList: [],
      loadingPois: false,
      navigationUrl: '',
      // 地图是否放大显示（照顾老年用户查看）
      isMapExpanded: false,
      // 分页参数
      page: 1,
      hasMore: true,
      // 是否显示“返回顶部”按钮
      showBackToTop: false
    };
  },
  computed: {
    displayPoiList: function displayPoiList() {
      var _this = this;
      // 基于后端返回的原始顺序（默认已经按距离排好），
      // 再按文档示例：先分类过滤，再按照排序类型进行评分/价格排序
      var list = Array.isArray(this.poiList) ? this.poiList.slice() : [];
      if (this.activeCategory === 'food') {
        // 美食分类：如果后端已经通过 foodCategory 参数筛选了，前端就不再做筛选
        // 只有当后端没有筛选时（selectedCategories为空），才在前端做本地筛选
        var hasBackendFilter = Array.isArray(this.selectedCategories) && this.selectedCategories.length > 0;
        if (!hasBackendFilter && this.selectedFoodCategoryId && this.selectedFoodCategoryId !== 'all') {
          var categoryOption = this.foodCategoryOptions.find(function (item) {
            return item.id === _this.selectedFoodCategoryId;
          });
          var categoryLabel = categoryOption && categoryOption.label || '全部';
          list = this.filterFoodPoisByCategoryDoc(list, categoryLabel);
        }

        // 营业中筛选（如果后端返回 businessStatus/openStatus 等字段）
        if (this.onlyShowOpen && this.hasOpenStatusField(list)) {
          list = list.filter(function (poi) {
            return _this.isPoiOpen(poi);
          });
        }
      } else if (this.activeCategory === 'scenic') {
        // 景点分类：
        // - 若已通过 scenicLevel/scenicTags（传给后端）筛选，则不再做关键字二次过滤
        // - 否则保留原有的关键字匹配逻辑，兼容旧的本地分类
        if (!this.scenicLevelFilter && !this.scenicTagsFilter) {
          if (this.selectedScenicCategoryId && this.selectedScenicCategoryId !== 'all') {
            var category = this.scenicCategoryOptions.find(function (item) {
              return item.id === _this.selectedScenicCategoryId;
            });
            if (category && Array.isArray(category.keywords) && category.keywords.length > 0) {
              list = list.filter(function (poi) {
                return _this.matchPoiByKeywords(poi, category.keywords);
              });
            }
          }
        }
      }

      // 排序：推荐排序保持后端原始顺序；好评优先 / 低价优先按文档示例排序
      list = this.sortPoisByDoc(list);
      return list;
    },
    currentLandmarkItems: function currentLandmarkItems() {
      var groups = Array.isArray(this.nearbyLandmarkGroups) ? this.nearbyLandmarkGroups : [];
      if (!groups.length) {
        return [];
      }
      var activeId = this.activeLandmarkGroupId || groups[0] && groups[0].id;
      var group = groups.find(function (item) {
        return item.id === activeId;
      }) || groups[0];
      return Array.isArray(group.items) ? group.items : [];
    },
    scenicBusinessAreas: function scenicBusinessAreas() {
      var groups = Array.isArray(this.nearbyLandmarkGroups) ? this.nearbyLandmarkGroups : [];
      var bizGroup = groups.find(function (item) {
        return item.id === 'business';
      });
      return bizGroup && Array.isArray(bizGroup.items) ? bizGroup.items : [];
    },
    scenicLandmarks: function scenicLandmarks() {
      var groups = Array.isArray(this.nearbyLandmarkGroups) ? this.nearbyLandmarkGroups : [];
      var scenicGroup = groups.find(function (item) {
        return item.id === 'scenic';
      });
      return scenicGroup && Array.isArray(scenicGroup.items) ? scenicGroup.items : [];
    },
    scenicCategoryPopupOptions: function scenicCategoryPopupOptions() {
      var options = Array.isArray(this.scenicCategoryOptions) ? this.scenicCategoryOptions : [];
      // 景点分类下拉弹窗中展示的标签（与后端 scenicLevel/scenicTags 一一对应）
      var allowIds = ['all', '5a', '4a', 'nature', 'relic', 'water', 'exhibition', 'zoo', 'botanical', 'ski', 'leisure', 'park', 'landmark_building', 'theme_park', 'hot_spring', 'culture_block', 'memorial_place'];
      return options.filter(function (item) {
        return allowIds.indexOf(item.id) !== -1;
      });
    },
    sortOptionsForPopup: function sortOptionsForPopup() {
      var options = Array.isArray(this.sortOptions) ? this.sortOptions : [];
      if (this.activeCategory === 'scenic') {
        // 景点排序：仅保留 推荐排序 / 好评优先
        return options.filter(function (item) {
          return item.id === 'recommend' || item.id === 'rating';
        });
      }
      return options;
    }
  },
  onLoad: function onLoad(options) {
    if (options && (0, _typeof2.default)(options) === 'object') {
      var keyword = options.keyword,
        category = options.category;
      if (keyword) {
        try {
          this.searchKeyword = decodeURIComponent(keyword);
        } catch (e) {
          this.searchKeyword = keyword;
        }
      }
      if (category && ['food', 'scenic', 'heritage'].includes(category)) {
        this.activeCategory = category;
      }
    }

    // 定位完成后，locateAndLoad 内部会根据 cityName 自动调用 loadHotspots
    this.locateAndLoad();
  },
  // 监听页面滚动，用于控制“返回顶部”按钮展示
  onPageScroll: function onPageScroll(e) {
    var top = e && e.scrollTop || 0;
    this.showBackToTop = top > 600;
  },
  methods: {
    locateAndLoad: function locateAndLoad() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var info, latitude, longitude, baseInfo, rawCity, rawAddress, addr, cityMatch;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this2.locating) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _this2.locating = true;
                _this2.locationText = '定位中...';
                // 重新定位等同于一次新的搜索，重置分页
                _this2.page = 1;
                _this2.hasMore = true;
                _context.prev = 6;
                _context.next = 9;
                return fetchLocationCandidates();
              case 9:
                info = _context.sent;
                latitude = info && info.latitude;
                longitude = info && info.longitude;
                if (!(!latitude || !longitude)) {
                  _context.next = 14;
                  break;
                }
                throw new Error('定位失败');
              case 14:
                // 更新用户位置
                _this2.userLat = latitude;
                _this2.userLng = longitude;

                // 当前搜索中心设为“我”
                _this2.centerType = 'user';
                _this2.centerLat = latitude;
                _this2.centerLng = longitude;

                // 地图中心也同步
                _this2.latitude = latitude;
                _this2.longitude = longitude;
                _this2.hasLocation = true;
                _this2.scale = 16;
                _this2.locationText = '当前位置附近';

                // 从返回的 city / formattedAddress 中解析城市名，用于 /hotspots 和 /pois
                // 后端返回结构可能是 { success, data: { city, formattedAddress } }
                baseInfo = info && (info.data || info);
                rawCity = baseInfo && baseInfo.city;
                rawAddress = baseInfo && baseInfo.formattedAddress;
                addr = String(rawCity || rawAddress || '').trim();
                if (addr) {
                  cityMatch = addr.match(/([^省市]+市)/); // 优先取“石家庄市”这类纯城市名，匹配不到就用原始字符串兜底
                  _this2.cityName = cityMatch && cityMatch[1] || addr;
                }

                // 默认 5km 内
                _this2.selectedRadius = 5000;
                _this2.page = 1;
                _this2.hasMore = true;
                _this2.selectedCategories = [];

                // 定位成功后，用当前城市刷新热门地标 + 美食列表
                _context.next = 35;
                return _this2.loadHotspots();
              case 35:
                _context.next = 37;
                return _this2.loadNearbyPois();
              case 37:
                _context.next = 47;
                break;
              case 39:
                _context.prev = 39;
                _context.t0 = _context["catch"](6);
                console.warn('[shanwei-map] locateAndLoad fail:', _context.t0);
                _this2.hasLocation = false;
                _this2.locationText = '定位失败，可尝试重新定位';
                uni.showToast({
                  title: '定位失败，请检查定位权限',
                  icon: 'none'
                });
                // 即便定位失败，也尝试按默认坐标加载一次附近点
                _context.next = 47;
                return _this2.loadNearbyPois();
              case 47:
                _context.prev = 47;
                _this2.locating = false;
                return _context.finish(47);
              case 50:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 39, 47, 50]]);
      }))();
    },
    loadHotspots: function loadHotspots() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var params, hotspots, list, scenic, foodStreet, business, groups;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                params = {}; // 按当前城市请求热门地标列表
                if (_this3.cityName) {
                  params.city = _this3.cityName;
                }
                _context2.next = 5;
                return getHotspots(params);
              case 5:
                hotspots = _context2.sent;
                list = Array.isArray(hotspots) ? hotspots : []; // 存一份原始列表，方便其他地方复用
                _this3.hotspots = list;
                scenic = [];
                foodStreet = [];
                business = [];
                list.forEach(function (h, index) {
                  if (!h) {
                    return;
                  }
                  var base = {
                    id: h.id != null && h.id !== '' ? String(h.id) : "hotspot-".concat(index),
                    label: h.name || '',
                    longitude: h.longitude,
                    latitude: h.latitude,
                    city: h.city || '',
                    rawCategory: h.category
                  };
                  var category = (h.category || '').toUpperCase();
                  if (category === 'SCENIC') {
                    scenic.push(base);
                  } else if (category === 'FOOD_STREET') {
                    foodStreet.push(base);
                  } else if (category === 'BUSINESS_DISTRICT') {
                    business.push(base);
                  }
                });
                groups = [];
                if (scenic.length) {
                  groups.push({
                    id: 'scenic',
                    label: '热门景区',
                    items: scenic
                  });
                }
                if (foodStreet.length) {
                  groups.push({
                    id: 'food_street',
                    label: '美食街',
                    items: foodStreet
                  });
                }
                if (business.length) {
                  groups.push({
                    id: 'business',
                    label: '热门商圈',
                    items: business
                  });
                }
                if (groups.length) {
                  _this3.nearbyLandmarkGroups = groups;
                  _this3.activeLandmarkGroupId = groups[0].id;
                }
                _context2.next = 22;
                break;
              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](0);
                console.warn('[shanwei-map] loadHotspots fail:', _context2.t0);
              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 19]]);
      }))();
    },
    // 手动选择当前位置（用户在地图上点选）
    chooseLocation: function chooseLocation() {
      var _this4 = this;
      uni.chooseLocation({
        type: 'gcj02',
        success: function success(res) {
          if (!res || !res.latitude || !res.longitude) {
            return;
          }

          // 更新用户位置为手动选择点
          _this4.userLat = res.latitude;
          _this4.userLng = res.longitude;

          // 当前搜索中心仍视为“我”
          _this4.centerType = 'user';
          _this4.centerLat = res.latitude;
          _this4.centerLng = res.longitude;

          // 地图中心
          _this4.latitude = res.latitude;
          _this4.longitude = res.longitude;
          _this4.hasLocation = true;
          _this4.scale = 16;

          // 尝试从地址中解析城市名
          var addr = (res.address || res.name || '').trim();
          if (addr) {
            var cityMatch = addr.match(/([^省市]+市)/);
            if (cityMatch && cityMatch[1]) {
              _this4.cityName = cityMatch[1];
            }
          }
          _this4.locationText = res.name || '已选择位置附近';
          // 手动选择位置后从第一页重新加载
          _this4.page = 1;
          _this4.hasMore = true;
          _this4.selectedCategories = [];
          // 选点之后也重新拉一次热门地标，让列表切换到该城市
          _this4.loadHotspots();
          _this4.loadNearbyPois();
        },
        fail: function fail() {
          uni.showToast({
            title: '未选择位置',
            icon: 'none'
          });
        }
      });
    },
    // 地图缩放 / 拖动结束时，根据缩放等级控制门店名字是否显示
    handleRegionChange: function handleRegionChange(e) {
      if (!e || e.type !== 'end') {
        return;
      }
      var scale = e.detail && e.detail.scale;
      if (typeof scale === 'number' && !Number.isNaN(scale)) {
        this.scale = scale;
      }
      // 根据当前缩放等级重新构造 markers，决定是否显示美食店名
      this.buildMarkers();
    },
    // 放大地图：高度增大到接近半屏
    expandMap: function expandMap() {
      this.isMapExpanded = true;
    },
    // 还原地图高度到初始大小
    resetMapSize: function resetMapSize() {
      this.isMapExpanded = false;
    },
    // 加载更多附近地点（分页）
    loadMorePois: function loadMorePois() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this5.loadingPois || !_this5.hasMore)) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return");
              case 2:
                _this5.page += 1;
                _context3.next = 5;
                return _this5.loadNearbyPois();
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    // 返回页面顶部，方便浏览长列表
    backToTop: function backToTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    getCurrentPoiType: function getCurrentPoiType() {
      if (this.activeCategory === 'food') {
        return 1;
      }
      if (this.activeCategory === 'scenic') {
        return 2;
      }
      return 3;
    },
    // 根据当前经纬度和 displayPoiList 构造地图标记，并在放大时适度展示名称
    // 使用 displayPoiList 确保地图标记与列表显示的数据一致
    buildMarkers: function buildMarkers() {
      var _this6 = this;
      var markers = [];

      // 当前用户位置：只显示图标，不显示"我在这里"文字
      if (this.latitude && this.longitude) {
        markers.push({
          id: 0,
          latitude: this.latitude,
          longitude: this.longitude,
          iconPath: '/static/assets/地点.png',
          width: 28,
          height: 28
        });
      }

      // 使用 displayPoiList 确保地图标记与列表显示的数据一致
      var list = this.displayPoiList || [];
      var scale = typeof this.scale === 'number' && !Number.isNaN(this.scale) ? this.scale : 0;

      // 只有在放大到一定级别时才显示店名，避免拥挤
      // - <=16：从不显示
      // - 17：仅在门店数量较少时显示
      // - 18+：逐步放开数量
      var shouldShowLabels = false;
      if (scale >= 19) {
        shouldShowLabels = list.length > 0;
      } else if (scale >= 18) {
        shouldShowLabels = list.length > 0 && list.length <= 40;
      } else if (scale >= 17) {
        shouldShowLabels = list.length > 0 && list.length <= 25;
      }

      // 控制最多显示多少个名字，越放大越多
      var maxLabels = 0;
      if (shouldShowLabels) {
        if (scale >= 19) {
          maxLabels = 24;
        } else if (scale >= 18) {
          maxLabels = 16;
        } else {
          maxLabels = 8;
        }
      }

      // 选出需要显示名字的 POI（按距离由近到远）
      var labelTargetIds = new Set();
      if (shouldShowLabels && maxLabels > 0) {
        var sorted = list.filter(function (p) {
          return p.latitude && p.longitude && p.name;
        }).slice().sort(function (a, b) {
          var da = Number(a.distance);
          var db = Number(b.distance);
          var na = Number.isNaN(da) ? Number.POSITIVE_INFINITY : da;
          var nb = Number.isNaN(db) ? Number.POSITIVE_INFINITY : db;
          return na - nb;
        });
        sorted.slice(0, maxLabels).forEach(function (p) {
          labelTargetIds.add(p.markerId);
        });
      }

      // 名称相对于图标的偏移（上 / 下 / 左 / 右 轮流分布）
      var labelOffsets = [{
        anchorX: 0,
        anchorY: -40
      },
      // 上方
      {
        anchorX: 0,
        anchorY: 40
      },
      // 下方
      {
        anchorX: -60,
        anchorY: 0
      },
      // 左侧
      {
        anchorX: 60,
        anchorY: 0
      } // 右侧
      ];

      var labelIndex = 0;

      // 根据缩放级别调整字体大小，避免名字看起来过于粗大
      var labelFontSize = 10;
      if (scale >= 19) {
        labelFontSize = 14;
      } else if (scale >= 18) {
        labelFontSize = 12;
      } else if (scale >= 17) {
        labelFontSize = 11;
      }
      var poiMarkers = list.filter(function (p) {
        return p.latitude && p.longitude;
      }).map(function (p) {
        var poiIconPath = '/static/assets/热门推荐.png';
        if (_this6.activeCategory === 'food') {
          poiIconPath = '/static/assets/面.png';
        } else if (_this6.activeCategory === 'scenic') {
          poiIconPath = '/static/assets/旅游.png';
        } else {
          poiIconPath = '/static/assets/我的.png';
        }
        var marker = {
          id: p.markerId,
          latitude: p.latitude,
          longitude: p.longitude,
          iconPath: poiIconPath,
          width: 28,
          height: 28
        };
        if (shouldShowLabels && labelTargetIds.has(p.markerId) && p.name) {
          var offset = labelOffsets[labelIndex % labelOffsets.length];
          labelIndex += 1;
          marker.label = {
            content: p.name,
            color: '#ffffff',
            fontSize: labelFontSize,
            borderRadius: 16,
            bgColor: '#ff7a18',
            padding: 6,
            textAlign: 'center',
            anchorX: offset.anchorX,
            anchorY: offset.anchorY
          };
        }
        return marker;
      });
      this.markers = markers.concat(poiMarkers);
    },
    loadNearbyPois: function loadNearbyPois() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var currentPage, params, keyword, centerLng, centerLat, radius, categories, pois, rawList, mappedList, existing, existingIds, appended;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this7.loadingPois) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return");
              case 2:
                _this7.loadingPois = true;
                currentPage = _this7.page || 1;
                params = {
                  type: _this7.getCurrentPoiType(),
                  page: currentPage
                };
                keyword = _this7.searchKeyword || _this7.tagKeyword;
                if (keyword) {
                  params.keyword = keyword;
                }

                // 使用当前搜索中心（“我” 或 选中的地标）作为查询圆心
                centerLng = _this7.centerLng || _this7.longitude;
                centerLat = _this7.centerLat || _this7.latitude;
                if (centerLng && centerLat) {
                  params.userLng = centerLng;
                  params.userLat = centerLat;

                  // radius 单位为米，直接使用当前选中的半径；分页只通过 page 控制
                  radius = Number(_this7.selectedRadius) || 5000;
                  params.radius = radius;
                }

                // 传递城市名（如果有）
                if (_this7.cityName) {
                  params.city = _this7.cityName;
                }

                // 分类多选：selectedCategories → foodCategory（多选逗号分隔）
                categories = Array.isArray(_this7.selectedCategories) ? _this7.selectedCategories.filter(function (c) {
                  return c && c.trim();
                }) : [];
                if (categories.length) {
                  params.foodCategory = categories.join(',');
                }

                // 景点分类：使用 scenicLevel / scenicTags 传参
                if (_this7.activeCategory === 'scenic') {
                  if (_this7.scenicLevelFilter) {
                    params.scenicLevel = _this7.scenicLevelFilter;
                  }
                  if (_this7.scenicTagsFilter) {
                    params.scenicTags = _this7.scenicTagsFilter;
                  }
                }
                _context4.prev = 14;
                _context4.next = 17;
                return getPois(params);
              case 17:
                pois = _context4.sent;
                rawList = Array.isArray(pois) ? pois : [];
                mappedList = rawList.map(function (item, index) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    // 保留后端 id 用于详情页；没有 id 时使用 page-index 兜底，避免重复
                    id: item.id != null && item.id !== '' ? item.id : "".concat(currentPage, "-").concat(index),
                    name: item.name || '',
                    address: item.address || '',
                    distance: item.distance || '',
                    type: item.type || '',
                    latitude: item.latitude,
                    longitude: item.longitude
                  });
                });
                if (currentPage === 1) {
                  _this7.poiList = mappedList;
                } else {
                  existing = Array.isArray(_this7.poiList) ? _this7.poiList : [];
                  existingIds = new Set(existing.map(function (item) {
                    return item.id;
                  }));
                  appended = mappedList.filter(function (item) {
                    return !existingIds.has(item.id);
                  });
                  _this7.poiList = existing.concat(appended);
                }

                // 统一为所有 poi 生成连续的 markerId，保证与地图点击事件匹配
                _this7.poiList = (Array.isArray(_this7.poiList) ? _this7.poiList : []).map(function (item, index) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    markerId: index + 1
                  });
                });

                // hasMore：只要当前页有数据，就允许继续加载下一页（同一半径）
                _this7.hasMore = rawList.length > 0;

                // 基于最新 poiList 和缩放等级构建 markers
                _this7.buildMarkers();
                _context4.next = 30;
                break;
              case 26:
                _context4.prev = 26;
                _context4.t0 = _context4["catch"](14);
                console.warn('[shanwei-map] loadNearbyPois fail:', _context4.t0);
                uni.showToast({
                  title: '附近地点获取失败',
                  icon: 'none'
                });
              case 30:
                _context4.prev = 30;
                _this7.loadingPois = false;
                return _context4.finish(30);
              case 33:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[14, 26, 30, 33]]);
      }))();
    },
    changeCategory: function changeCategory(id) {
      if (this.activeCategory === id) {
        return;
      }
      this.activeCategory = id;
      this.activeFilterPopup = '';
      // 切换大类时重置分页
      this.page = 1;
      this.hasMore = true;

      // 不同大类使用不同的筛选标签
      if (id === 'food') {
        this.filterTags = [{
          id: 'nearby',
          label: '附近',
          active: true,
          hasArrow: true
        }, {
          id: 'category',
          label: '分类',
          active: false,
          hasArrow: true
        }, {
          id: 'sort',
          label: '排序',
          active: false,
          hasArrow: true
        }];
        this.quickFilterTags = [{
          id: 'noodle',
          label: '面馆'
        }, {
          id: 'shaanxi',
          label: '陕西菜'
        }, {
          id: 'nearby500',
          label: '附近500m'
        }, {
          id: 'weijia',
          label: '魏家凉皮'
        }, {
          id: 'open',
          label: '营业中'
        }];
      } else if (id === 'scenic') {
        this.filterTags = [{
          id: 'nearby',
          label: '附近',
          active: true,
          hasArrow: true
        }, {
          id: 'category',
          label: '分类',
          active: false,
          hasArrow: true
        }, {
          id: 'sort',
          label: '排序',
          active: false,
          hasArrow: true
        }];
        // 景点下的快捷标签：人文景观 / 文物古迹 / 公园 / 免费景点
        this.quickFilterTags = [{
          id: 'scenic_culture',
          label: '人文景观'
        }, {
          id: 'scenic_relic',
          label: '文物古迹'
        }, {
          id: 'scenic_park',
          label: '公园'
        }, {
          id: 'scenic_free',
          label: '免费景点'
        }];
        this.activeScenicNearbyMenuId = 'distance';
      } else {
        // 非遗等其他类型，先使用与美食类似的标签文案
        this.filterTags = [{
          id: 'nearby',
          label: '附近',
          active: true,
          hasArrow: true
        }, {
          id: 'category',
          label: '分类',
          active: false,
          hasArrow: true
        }, {
          id: 'sort',
          label: '排序',
          active: false,
          hasArrow: true
        }];
        this.quickFilterTags = [];
      }

      // 切换大类时重置部分筛选状态
      if (id !== 'food') {
        this.selectedFoodCategoryId = 'all';
        this.activeSortId = 'recommend';
        this.activeQuickFilterId = '';
        this.onlyShowOpen = false;
        this.tagKeyword = '';
        this.selectedCategories = [];
      }
      this.selectedNearbyLandmarkId = '';

      // 切换大类时关闭搜索结果弹窗
      this.searchPanelVisible = false;
      this.loadNearbyPois();
    },
    handleSearchConfirm: function handleSearchConfirm(e) {
      var _arguments = arguments,
        _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var options, value, list;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
                value = e && e.detail && e.detail.value || _this8.searchKeyword || '';
                _this8.searchKeyword = String(value).trim();
                // 手动搜索时清空标签关键词
                _this8.tagKeyword = '';
                // 搜索时重置分页
                _this8.page = 1;
                _this8.hasMore = true;
                if (_this8.searchKeyword) {
                  _context5.next = 11;
                  break;
                }
                _this8.searchPanelVisible = false;
                _context5.next = 10;
                return _this8.loadNearbyPois();
              case 10:
                return _context5.abrupt("return");
              case 11:
                _context5.next = 13;
                return _this8.loadNearbyPois();
              case 13:
                // 显示搜索结果弹窗
                _this8.searchPanelVisible = true;
                if (options && options.navigateToDetail) {
                  list = _this8.displayPoiList;
                  if (Array.isArray(list) && list.length === 1) {
                    _this8.openPoiDetail(list[0]);
                  }
                }
              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    tapSearchButton: function tapSearchButton() {
      // 点击搜索图标时，除了筛选列表，还会在只有一个结果时直接进详情
      this.handleSearchConfirm({
        detail: {
          value: this.searchKeyword
        }
      }, {
        navigateToDetail: true
      });
    },
    clearSearch: function clearSearch() {
      if (!this.searchKeyword && !this.tagKeyword) {
        return;
      }
      this.searchKeyword = '';
      this.tagKeyword = '';
      this.searchPanelVisible = false;
      this.selectedNearbyLandmarkId = '';
      // 清空搜索时重置分页
      this.page = 1;
      this.hasMore = true;
      this.loadNearbyPois();
    },
    tapFilterTag: function tapFilterTag(tag) {
      if (!tag) {
        return;
      }
      this.filterTags = this.filterTags.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          active: item.id === tag.id
        });
      });
      if (['nearby', 'category', 'sort'].includes(tag.id)) {
        this.toggleFilterPopup(tag.id);
      }
    },
    toggleFilterPopup: function toggleFilterPopup(type) {
      this.activeFilterPopup = this.activeFilterPopup === type ? '' : type;
    },
    closeFilterPopup: function closeFilterPopup() {
      this.activeFilterPopup = '';
    },
    selectLandmarkGroup: function selectLandmarkGroup(group) {
      if (!group) {
        return;
      }
      this.activeLandmarkGroupId = group.id;
    },
    selectScenicNearbyMenu: function selectScenicNearbyMenu(menu) {
      if (!menu) {
        return;
      }
      this.activeScenicNearbyMenuId = menu.id;
    },
    selectNearbyDistance: function selectNearbyDistance(option) {
      if (!option) {
        return;
      }
      this.selectedRadius = option.value;
      // 切换距离时重置分页
      this.page = 1;
      this.hasMore = true;
      this.closeFilterPopup();
      this.loadNearbyPois();
    },
    selectNearbyLandmark: function selectNearbyLandmark(option) {
      if (!option) {
        return;
      }
      var hasCoordinate = option.longitude !== undefined && option.latitude !== undefined && option.longitude !== null && option.latitude !== null && option.longitude !== '' && option.latitude !== '';
      if (hasCoordinate) {
        // 当前搜索中心切换为选中的地标
        this.centerType = 'landmark';
        this.centerLat = option.latitude;
        this.centerLng = option.longitude;

        // 地图中心同步到该地标
        this.latitude = option.latitude;
        this.longitude = option.longitude;
        this.locationText = "".concat(option.label || '已选择地标', " \u9644\u8FD1");
        // 使用地标坐标作为圆心时，不再带关键词
        this.searchKeyword = '';
        this.tagKeyword = '';
      } else {
        var keyword = option.keyword || option.label;
        this.searchKeyword = keyword;
      }
      this.selectedNearbyLandmarkId = option.id;
      // 选地标相当于一次新的搜索，重置分页
      this.page = 1;
      this.hasMore = true;
      this.closeFilterPopup();
      this.loadNearbyPois();
    },
    selectFoodCategory: function selectFoodCategory(option) {
      var _this9 = this;
      if (!option) {
        return;
      }
      if (this.activeCategory === 'scenic') {
        // 景点分类：支持 scenicLevel 单选 + scenicTags 多选
        var hasLevel = !!option.scenicLevel;
        var hasTags = option.scenicTags !== undefined && option.scenicTags !== null && option.scenicTags !== '';
        if (option.id === 'all') {
          this.selectedScenicCategoryId = 'all';
          this.scenicLevelFilter = '';
          this.scenicTagsFilter = '';
          this.selectedScenicTagIds = [];
        } else if (hasLevel && !hasTags) {
          // A 级景区（5A / 4A）：视为单选
          this.selectedScenicCategoryId = option.id;
          this.scenicLevelFilter = option.scenicLevel || '';
          this.scenicTagsFilter = '';
          this.selectedScenicTagIds = [];
        } else if (hasTags) {
          // scenicTags 多选：点击即切换选中状态
          var id = option.id;
          var exists = Array.isArray(this.selectedScenicTagIds) && this.selectedScenicTagIds.includes(id);
          if (exists) {
            this.selectedScenicTagIds = this.selectedScenicTagIds.filter(function (x) {
              return x !== id;
            });
          } else {
            this.selectedScenicTagIds = (this.selectedScenicTagIds || []).concat(id);
          }

          // 标签多选时，清空 scenicLevelFilter，只使用 scenicTags 过滤
          this.scenicLevelFilter = '';
          var allTagValues = [];
          (this.selectedScenicTagIds || []).forEach(function (tagId) {
            var opt = _this9.scenicCategoryOptions.find(function (item) {
              return item.id === tagId;
            });
            if (!opt) {
              return;
            }
            var tagArr = Array.isArray(opt.scenicTags) ? opt.scenicTags : opt.scenicTags ? [opt.scenicTags] : [];
            tagArr.forEach(function (t) {
              if (t && allTagValues.indexOf(t) === -1) {
                allTagValues.push(t);
              }
            });
          });
          this.scenicTagsFilter = allTagValues.join(',');

          // scenicTags 多选时，不再依赖 selectedScenicCategoryId 做本地关键字过滤
          this.selectedScenicCategoryId = 'all';
        } else {
          // 兼容没有 scenicLevel/scenicTags 的旧配置
          this.selectedScenicCategoryId = option.id;
          this.scenicLevelFilter = '';
          this.scenicTagsFilter = '';
          this.selectedScenicTagIds = [];
        }

        // 切换景点分类时重置分页并重新加载（支持多选场景）
        this.page = 1;
        this.hasMore = true;
        this.loadNearbyPois();
      } else {
        this.selectedFoodCategoryId = option.id;

        // 将美食分类映射到 selectedCategories，用于传给后端的 foodCategory
        if (option.id === 'all') {
          this.selectedCategories = [];
        } else if (option.label) {
          this.selectedCategories = [option.label];
        }

        // 切换分类时重置分页并重新加载美食列表
        this.page = 1;
        this.hasMore = true;
        this.loadNearbyPois();
        this.closeFilterPopup();
      }
    },
    selectSortOption: function selectSortOption(option) {
      if (!option) {
        return;
      }
      this.activeSortId = option.id;
      this.closeFilterPopup();
    },
    tapQuickFilter: function tapQuickFilter(tag) {
      if (!tag) {
        return;
      }

      // 再次点击同一个快捷标签，则重置
      if (this.activeQuickFilterId === tag.id) {
        this.resetQuickFilter(tag.id);
        return;
      }
      this.activeQuickFilterId = tag.id;

      // 美食快捷筛选
      if (this.activeCategory === 'food') {
        if (tag.id === 'nearby500') {
          this.selectedRadius = 500;
          this.page = 1;
          this.hasMore = true;
          this.loadNearbyPois();
        } else if (tag.id === 'noodle') {
          // 面馆
          this.selectedFoodCategoryId = 'noodle';
          this.selectedCategories = ['面馆'];
          this.page = 1;
          this.hasMore = true;
          this.loadNearbyPois();
        } else if (tag.id === 'shaanxi') {
          // 陕西菜
          this.selectedFoodCategoryId = 'shaanxi';
          this.selectedCategories = ['陕西菜'];
          this.page = 1;
          this.hasMore = true;
          this.loadNearbyPois();
        } else if (tag.id === 'weijia') {
          // 使用标签关键词筛选魏家凉皮，但不在搜索框中展示文字
          this.searchKeyword = '';
          this.tagKeyword = '魏家凉皮';
          this.page = 1;
          this.hasMore = true;
          this.loadNearbyPois();
        }
        return;
      }

      // 景点快捷筛选：直接绑定到景点分类
      if (this.activeCategory === 'scenic') {
        if (tag.id === 'scenic_culture') {
          this.selectedScenicCategoryId = 'culture';
        } else if (tag.id === 'scenic_relic') {
          this.selectedScenicCategoryId = 'relic';
        } else if (tag.id === 'scenic_park') {
          this.selectedScenicCategoryId = 'park';
        } else if (tag.id === 'scenic_free') {
          this.selectedScenicCategoryId = 'free';
        }
        this.page = 1;
        this.hasMore = true;
        this.loadNearbyPois();
      }
    },
    resetQuickFilter: function resetQuickFilter(id) {
      this.activeQuickFilterId = '';
      if (this.activeCategory === 'food') {
        if (id === 'nearby500') {
          // 恢复到默认 5km 内
          this.selectedRadius = 5000;
          this.page = 1;
          this.hasMore = true;
          this.loadNearbyPois();
        } else if (id === 'noodle' || id === 'shaanxi') {
          this.selectedFoodCategoryId = 'all';
          this.selectedCategories = [];
          this.page = 1;
          this.hasMore = true;
          this.loadNearbyPois();
        } else if (id === 'weijia') {
          this.searchKeyword = '';
          this.tagKeyword = '';
          this.page = 1;
          this.hasMore = true;
          this.loadNearbyPois();
        }
      } else if (this.activeCategory === 'scenic') {
        if (id === 'scenic_culture' || id === 'scenic_relic' || id === 'scenic_park' || id === 'scenic_free') {
          this.selectedScenicCategoryId = 'all';
          this.page = 1;
          this.hasMore = true;
          this.loadNearbyPois();
        }
      }
    },
    // 判断景点分类弹窗中某个选项是否处于选中状态（用于多选高亮）
    isScenicCategoryActive: function isScenicCategoryActive(option) {
      if (!option) {
        return false;
      }

      // "全部分类"：当既没有 scenicLevelFilter，也没有 scenicTagsFilter，且未选中任何 scenicTags 时视为选中
      if (option.id === 'all') {
        return !this.scenicLevelFilter && !this.scenicTagsFilter && Array.isArray(this.selectedScenicTagIds) && this.selectedScenicTagIds.length === 0;
      }

      // A 级景区（5A / 4A）：与当前 scenicLevelFilter 匹配
      if (option.scenicLevel) {
        return this.scenicLevelFilter === option.scenicLevel;
      }

      // scenicTags：根据多选列表判断
      if (option.scenicTags) {
        return Array.isArray(this.selectedScenicTagIds) ? this.selectedScenicTagIds.includes(option.id) : false;
      }

      // 兼容没有 scenicLevel/scenicTags 的旧配置
      return this.selectedScenicCategoryId === option.id;
    },
    // 判断美食分类是否选中
    isFoodCategoryActive: function isFoodCategoryActive(option) {
      if (!option) {
        return false;
      }
      return this.selectedFoodCategoryId === option.id;
    },
    // 判断快捷标签是否选中
    isQuickFilterActive: function isQuickFilterActive(tagId) {
      return this.activeQuickFilterId === tagId;
    },
    matchPoiByKeywords: function matchPoiByKeywords(poi) {
      var keywords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!poi || !keywords || keywords.length === 0) {
        return true;
      }
      var baseText = [poi.name, poi.address, poi.type, poi.category, poi.tag, Array.isArray(poi.tags) ? poi.tags.join(' ') : ''].filter(Boolean).join(' ').toLowerCase();
      var keys = keywords.map(function (kw) {
        return String(kw).toLowerCase();
      });
      return keys.some(function (kw) {
        return baseText.indexOf(kw) !== -1;
      });
    },
    // 文档中的分类示例函数（美食）：
    // 使用高德原始 type + 店名进行本地过滤
    filterFoodPoisByCategoryDoc: function filterFoodPoisByCategoryDoc(pois, categoryLabel) {
      if (!Array.isArray(pois)) {
        return [];
      }
      var category = categoryLabel || '全部';
      if (!category || category === '全部') {
        return pois;
      }
      return pois.filter(function (poi) {
        var t = poi.type || '';
        var name = poi.name || '';
        switch (category) {
          case '中餐':
            return t.includes('中餐厅');
          case '小吃快餐':
            return t.includes('快餐') || t.includes('小吃');
          case '面馆':
            return t.includes('面馆') || name.includes('面');
          case '清真菜':
            return name.includes('清真') || t.includes('清真');
          case '陕西菜':
            return name.includes('陕西') || name.includes('陕菜');
          case '奶茶/茶饮':
            return name.includes('奶茶') || name.includes('茶饮');
          case '糕点/烘焙':
            return t.includes('糕饼店') || t.includes('面包房');
          case '泡馍':
            return name.includes('泡馍');
          case '肉夹馍':
            return name.includes('肉夹馍');
          case '早餐必吃':
            return name.includes('早餐') || name.includes('早点');
          case '非遗美食':
            return name.includes('非遗');
          case '夜市小吃':
            return name.includes('夜市') || name.includes('夜宵');
          case '自助餐':
            return name.includes('自助') || t.includes('自助');
          case '凉皮':
            return name.includes('凉皮');
          case '烤串':
            return name.includes('烤串') || name.includes('烧烤');
          default:
            return true;
        }
      });
    },
    hasOpenStatusField: function hasOpenStatusField(list) {
      if (!Array.isArray(list) || list.length === 0) {
        return false;
      }
      var item = list[0];
      return Object.prototype.hasOwnProperty.call(item, 'businessStatus') || Object.prototype.hasOwnProperty.call(item, 'openStatus') || Object.prototype.hasOwnProperty.call(item, 'is_open');
    },
    isPoiOpen: function isPoiOpen(poi) {
      if (!poi) {
        return false;
      }
      if (typeof poi.businessStatus !== 'undefined') {
        return String(poi.businessStatus) === '1' || poi.businessStatus === 1;
      }
      if (typeof poi.openStatus !== 'undefined') {
        return String(poi.openStatus) === '1' || poi.openStatus === 1;
      }
      if (typeof poi.is_open !== 'undefined') {
        return !!poi.is_open;
      }
      return true;
    },
    getScoreValue: function getScoreValue(poi) {
      if (!poi) {
        return 0;
      }
      var raw = poi.score || poi.rating || poi.commentScore || poi.comment_score;
      var num = Number(raw);
      if (Number.isNaN(num)) {
        return 0;
      }
      return num;
    },
    getDistanceValue: function getDistanceValue(poi) {
      if (!poi || poi.distance === undefined || poi.distance === null || poi.distance === '') {
        return Number.POSITIVE_INFINITY;
      }
      var num = Number(poi.distance);
      if (Number.isNaN(num)) {
        return Number.POSITIVE_INFINITY;
      }
      return num;
    },
    getAvgPriceValue: function getAvgPriceValue(poi) {
      if (!poi) {
        return Number.POSITIVE_INFINITY;
      }
      var raw = poi.avgPrice || poi.avg_price || poi.averagePrice || poi.average_price || poi.price;
      var num = Number(raw);
      if (Number.isNaN(num)) {
        return Number.POSITIVE_INFINITY;
      }
      return num;
    },
    sortByScoreDesc: function sortByScoreDesc(list) {
      var _this10 = this;
      if (!Array.isArray(list)) {
        return [];
      }
      var cloned = list.slice();
      cloned.sort(function (a, b) {
        return _this10.getScoreValue(b) - _this10.getScoreValue(a);
      });
      return cloned;
    },
    sortByPriceAsc: function sortByPriceAsc(list) {
      var _this11 = this;
      if (!Array.isArray(list)) {
        return [];
      }
      var cloned = list.slice();
      cloned.sort(function (a, b) {
        return _this11.getAvgPriceValue(a) - _this11.getAvgPriceValue(b);
      });
      return cloned;
    },
    // 排序函数：
    // - 推荐排序：按距离从近到远（缺失距离排在最后）
    // - 好评优先：按 rating 从高到低
    // - 低价优先：按 price 从低到高，缺失价格排在最后
    sortPoisByDoc: function sortPoisByDoc(list) {
      var _this12 = this;
      if (!Array.isArray(list)) {
        return [];
      }
      var cloned = list.slice();
      if (this.activeSortId === 'rating') {
        return cloned.sort(function (a, b) {
          var ra = a.rating != null ? Number(a.rating) : 0;
          var rb = b.rating != null ? Number(b.rating) : 0;
          return rb - ra;
        });
      }
      if (this.activeSortId === 'price_low') {
        return cloned.sort(function (a, b) {
          var pa = a.price != null ? Number(a.price) : Number.MAX_VALUE;
          var pb = b.price != null ? Number(b.price) : Number.MAX_VALUE;
          return pa - pb;
        });
      }

      // 推荐排序：统一按距离近 -> 远
      return cloned.sort(function (a, b) {
        return _this12.getDistanceValue(a) - _this12.getDistanceValue(b);
      });
    },
    handleMarkerTap: function handleMarkerTap(e) {
      var rawId = e.detail && (e.detail.markerId || e.detail.markerid);
      if (rawId === undefined || rawId === null) {
        return;
      }
      var markerId = Number(rawId);
      // id 为 0 的是“我在这里”，不做跳转
      if (!Number.isFinite(markerId) || markerId === 0) {
        return;
      }
      var found = this.poiList.find(function (p) {
        return Number(p.markerId) === markerId;
      });
      if (!found) {
        return;
      }
      // 直接复用卡片点击逻辑：美食进详情，景点/非遗走导航
      this.openPoiDetail(found);
    },
    openPoiDetail: function openPoiDetail(item) {
      var _this13 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var tags, query, push, queryStr, _tags, _query, _push, _queryStr, _tags2, _query2, _push2, _queryStr2, route, firstRoute, km, minutes;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (item) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return");
              case 2:
                if (!(_this13.activeCategory === 'food')) {
                  _context6.next = 22;
                  break;
                }
                tags = _this13.getPoiTags(item);
                query = [];
                push = function push(key, value) {
                  if (value === undefined || value === null || value === '') {
                    return;
                  }
                  query.push("".concat(key, "=").concat(encodeURIComponent(String(value))));
                };
                push('id', item.id);
                push('name', item.name);
                push('cover', _this13.getFoodCover(item));
                push('avgPrice', _this13.getAvgPriceValue(item));
                push('category', _this13.getPoiCategoryText(item));
                push('address', item.address);
                push('distance', item.distance);
                push('latitude', item.latitude);
                push('longitude', item.longitude);
                push('score', _this13.getScoreValue(item));
                if (Array.isArray(tags) && tags.length) {
                  push('tags', JSON.stringify(tags));
                }
                // 若后端有营业时间/电话字段，可按需追加
                if (item.businessTime) {
                  push('businessTime', String(item.businessTime));
                }
                if (item.phone) {
                  push('phone', item.phone);
                }
                queryStr = query.join('&');
                uni.navigateTo({
                  url: "/pages/index/FoodPoiDetail?".concat(queryStr)
                });
                return _context6.abrupt("return");
              case 22:
                if (!(_this13.activeCategory === 'scenic')) {
                  _context6.next = 39;
                  break;
                }
                _tags = _this13.getPoiTags(item);
                _query = [];
                _push = function _push(key, value) {
                  if (value === undefined || value === null || value === '') {
                    return;
                  }
                  _query.push("".concat(key, "=").concat(encodeURIComponent(String(value))));
                };
                _push('id', item.id);
                _push('name', item.name);
                _push('cover', _this13.getFoodCover(item));
                _push('category', _this13.getPoiCategoryText(item));
                _push('address', item.address);
                _push('distance', item.distance);
                _push('latitude', item.latitude);
                _push('longitude', item.longitude);
                _push('score', _this13.getScoreValue(item));
                if (Array.isArray(_tags) && _tags.length) {
                  _push('tags', JSON.stringify(_tags));
                }
                _queryStr = _query.join('&');
                uni.navigateTo({
                  url: "/pages/index/ScenicPoiDetail?".concat(_queryStr)
                });
                return _context6.abrupt("return");
              case 39:
                if (!(_this13.activeCategory === 'heritage')) {
                  _context6.next = 61;
                  break;
                }
                _tags2 = _this13.getPoiTags(item);
                _query2 = [];
                _push2 = function _push2(key, value) {
                  if (value === undefined || value === null || value === '') {
                    return;
                  }
                  _query2.push("".concat(key, "=").concat(encodeURIComponent(String(value))));
                };
                _push2('id', item.id);
                _push2('name', item.name);
                _push2('cover', _this13.getFoodCover(item));
                _push2('avgPrice', _this13.getAvgPriceValue(item));
                _push2('category', _this13.getPoiCategoryText(item));
                _push2('address', item.address);
                _push2('distance', item.distance);
                _push2('latitude', item.latitude);
                _push2('longitude', item.longitude);
                _push2('score', _this13.getScoreValue(item));
                if (Array.isArray(_tags2) && _tags2.length) {
                  _push2('tags', JSON.stringify(_tags2));
                }
                if (item.businessTime) {
                  _push2('businessTime', String(item.businessTime));
                }
                if (item.businessStatus !== undefined && item.businessStatus !== null) {
                  _push2('businessStatus', item.businessStatus);
                }
                if (item.openStatus !== undefined && item.openStatus !== null) {
                  _push2('openStatus', item.openStatus);
                }
                if (item.phone) {
                  _push2('phone', item.phone);
                }
                _queryStr2 = _query2.join('&');
                uni.navigateTo({
                  url: "/pages/index/HeritagePoiDetail?".concat(_queryStr2)
                });
                return _context6.abrupt("return");
              case 61:
                if (!(!item.latitude || !item.longitude)) {
                  _context6.next = 64;
                  break;
                }
                uni.showToast({
                  title: '该地点暂无位置信息',
                  icon: 'none'
                });
                return _context6.abrupt("return");
              case 64:
                if (!(!_this13.longitude || !_this13.latitude)) {
                  _context6.next = 67;
                  break;
                }
                uni.showToast({
                  title: '正在获取当前位置，请稍后再试',
                  icon: 'none'
                });
                return _context6.abrupt("return");
              case 67:
                _context6.prev = 67;
                uni.showLoading({
                  title: '正在规划路线...',
                  mask: true
                });

                // 这里的 getNavigationUrl 现在返回的是“路线对象”
                _context6.next = 71;
                return getNavigationUrl({
                  startLon: _this13.longitude,
                  startLat: _this13.latitude,
                  endLon: item.longitude,
                  endLat: item.latitude
                });
              case 71:
                route = _context6.sent;
                uni.hideLoading();
                if (route) {
                  _context6.next = 76;
                  break;
                }
                uni.showToast({
                  title: '路线规划失败，请稍后再试',
                  icon: 'none'
                });
                return _context6.abrupt("return");
              case 76:
                // 可选：从路线里取出距离/时间做提示
                firstRoute = route.result && Array.isArray(route.result.routes) && route.result.routes[0];
                if (firstRoute) {
                  km = (firstRoute.distance / 1000).toFixed(1);
                  minutes = Math.round(firstRoute.duration / 60);
                  uni.showToast({
                    title: "\u7EA6".concat(km, "\u516C\u91CC\uFF0C").concat(minutes, "\u5206\u949F"),
                    icon: 'none'
                  });
                }

                // 实际导航：用小程序内置地图打开目的地
                uni.openLocation({
                  latitude: Number(item.latitude),
                  longitude: Number(item.longitude),
                  name: item.name || '目的地',
                  address: item.address || '',
                  scale: 18
                });
                _context6.next = 86;
                break;
              case 81:
                _context6.prev = 81;
                _context6.t0 = _context6["catch"](67);
                uni.hideLoading();
                console.warn('[shanwei-map] openPoiDetail navigation error:', _context6.t0);
                uni.showToast({
                  title: '路线规划失败，请稍后再试',
                  icon: 'none'
                });
              case 86:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[67, 81]]);
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
    // 以下几个方法用于美食卡片展示（封面、时间、评分、标签等）
    // 这里给出一个兜底实现，便于在没有全量字段时也能正常渲染页面
    getFoodCover: function getFoodCover(item) {
      if (!item) {
        return '';
      }
      // 优先使用后端提供的封面字段：imageUrl > cover > image > thumbnail
      return item.imageUrl || item.cover || item.image || item.thumbnail || '/static/assets/热门推荐.png';
    },
    getFoodTravelTimeText: function getFoodTravelTimeText(item) {
      if (!item || !item.distance) {
        return '步行可达';
      }
      var meters = Number(item.distance);
      if (Number.isNaN(meters)) {
        return '步行可达';
      }
      // 简单估算：80m / 分钟
      var minutes = Math.max(1, Math.round(meters / 80));
      return "\u6B65\u884C\u7EA6".concat(minutes, "\u5206\u949F");
    },
    getPoiScore: function getPoiScore(item) {
      var score = this.getScoreValue(item);
      if (!score) {
        return '';
      }
      return score.toFixed(1).replace(/\.0$/, '');
    },
    getPoiCategoryText: function getPoiCategoryText(item) {
      if (!item) {
        return '';
      }
      // 美食场景下：优先使用去重 + 美化后的类型标签
      if (this.activeCategory === 'food') {
        var typeTags = this.getFoodTypeTags(item);
        if (Array.isArray(typeTags) && typeTags.length) {
          return typeTags[0];
        }
      }
      // 兼容常见字段：category/type + 自定义分类
      return item.categoryName || item.category || item.type || '';
    },
    // 美食类型标签：基于高德 type 做去重 + 近义词合并，并输出好看的文案
    getFoodTypeTags: function getFoodTypeTags(item) {
      if (!item) {
        return [];
      }
      var rawType = (item.type || item.category || item.categoryName || '').trim();
      if (!rawType) {
        return [];
      }
      var parts = rawType.split(/[;；]/).map(function (s) {
        return s.trim();
      }).filter(Boolean);
      if (!parts.length) {
        return [];
      }
      var result = [];
      var seenCanonical = [];
      parts.forEach(function (part) {
        if (!part || FOOD_TYPE_IGNORE_LIST.indexOf(part) !== -1) {
          return;
        }
        var canonical = FOOD_TYPE_SYNONYM_MAP[part] || part;
        if (seenCanonical.indexOf(canonical) !== -1) {
          return;
        }
        seenCanonical.push(canonical);
        var pretty = FOOD_TYPE_PRETTY_TEXT_MAP[canonical] || canonical;
        result.push(pretty);
      });
      if (!result.length && rawType) {
        result.push('美食');
      }
      return result.slice(0, 3);
    },
    // 景点类型标签：基于高德 type 做分割与简化，用作景点下方标签
    getScenicTypeTags: function getScenicTypeTags(item) {
      if (!item || !item.type) {
        return [];
      }
      var rawType = String(item.type).trim();
      if (!rawType) {
        return [];
      }
      var parts = rawType.split(/[;；]/).map(function (s) {
        return s.trim();
      }).filter(Boolean);
      if (!parts.length) {
        return [];
      }
      var result = [];
      var seen = [];
      parts.forEach(function (part) {
        if (!part) {
          return;
        }
        // 把“风景名胜相关”这类尾巴剪掉
        var base = part.replace(/相关$/, '');
        base = base.trim();
        if (!base) {
          return;
        }
        if (seen.indexOf(base) !== -1) {
          return;
        }
        seen.push(base);
        result.push(base);
      });
      return result.slice(0, 3);
    },
    getPoiAvgPriceText: function getPoiAvgPriceText(item) {
      var price = this.getAvgPriceValue(item);
      if (!price || !Number.isFinite(price) || price <= 0) {
        return '';
      }
      return "\u4EBA\u5747\xA5".concat(Math.round(price));
    },
    getPoiTags: function getPoiTags(item) {
      if (!item) {
        return [];
      }
      var tags = [];
      if (Array.isArray(item.tags)) {
        tags.push.apply(tags, (0, _toConsumableArray2.default)(item.tags));
      }
      if (item.special) {
        tags.push(item.special);
      }
      if (item.feature) {
        tags.push(item.feature);
      }
      // 美食列表下，把美食类型标签也一起作为标签传递给详情页
      if (this.activeCategory === 'food') {
        var typeTags = this.getFoodTypeTags(item);
        if (Array.isArray(typeTags) && typeTags.length) {
          tags.push.apply(tags, (0, _toConsumableArray2.default)(typeTags));
        }
      }
      // 景点列表下：把景点类型标签也拼到标签里
      if (this.activeCategory === 'scenic') {
        var scenicTypeTags = this.getScenicTypeTags(item);
        if (Array.isArray(scenicTypeTags) && scenicTypeTags.length) {
          tags.push.apply(tags, (0, _toConsumableArray2.default)(scenicTypeTags));
        }
      }
      // 去重
      return Array.from(new Set(tags)).slice(0, 3);
    },
    // 非遗卡片用的地区文案：优先使用 region/area，其次从地址里截取
    getHeritageAreaText: function getHeritageAreaText(item) {
      if (!item) {
        return '';
      }
      var region = (item.region || item.area || '').trim();
      if (region) {
        return region;
      }
      var address = (item.address || '').trim();
      if (!address) {
        return '';
      }
      // 简单从地址中截取“区/县/镇/街道”前后的片段，兜底直接返回地址
      var match = address.match(/(.{0,12}(区|县|镇|街道|乡|路|街).{0,8})/);
      return match ? match[1] : address;
    },
    // 非遗卡片用的一句话简介，从常见字段中取值并做长度截断
    getHeritageIntro: function getHeritageIntro(item) {
      if (!item) {
        return '';
      }
      var raw = item.briefIntro || item.highlight || item.comment || item.contentIntroduction || item.introduction || item.description || '';
      var text = String(raw).trim();
      if (!text) {
        return '';
      }
      return text.length > 24 ? "".concat(text.slice(0, 24), "...") : text;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 79:
/*!*********************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/index/Map-Flavors.vue?vue&type=style&index=0&id=2b8df97e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_style_index_0_id_2b8df97e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Map-Flavors.vue?vue&type=style&index=0&id=2b8df97e&lang=scss&scoped=true& */ 80);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_style_index_0_id_2b8df97e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_style_index_0_id_2b8df97e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_style_index_0_id_2b8df97e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_style_index_0_id_2b8df97e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_Map_Flavors_vue_vue_type_style_index_0_id_2b8df97e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/index/Map-Flavors.vue?vue&type=style&index=0&id=2b8df97e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[71,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/Map-Flavors.js.map
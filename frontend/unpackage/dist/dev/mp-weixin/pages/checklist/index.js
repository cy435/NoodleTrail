(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/checklist/index"],{

/***/ 158:
/*!****************************************************************************!*\
  !*** C:/myprojects2/frontend/main.js?{"page":"pages%2Fchecklist%2Findex"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/checklist/index.vue */ 159));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 159:
/*!*********************************************************!*\
  !*** C:/myprojects2/frontend/pages/checklist/index.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=743ed740&scoped=true& */ 160);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 162);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_743ed740_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=743ed740&scoped=true&lang=scss& */ 165);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "743ed740",
  null,
  false,
  _index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/checklist/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/*!****************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/checklist/index.vue?vue&type=template&id=743ed740&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=743ed740&scoped=true& */ 161);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_743ed740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 161:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/checklist/index.vue?vue&type=template&id=743ed740&scoped=true& ***!
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
  var g0 = _vm.displayedLists.length
  var l0 = _vm.__map(_vm.swiperItems, function (item, __i1__) {
    var $orig = _vm.__get_orig(item)
    var g1 = item.isCreatePage ? _vm.displayedLists.length : null
    var g2 = !item.isCreatePage ? item.items && item.items.length > 0 : null
    return {
      $orig: $orig,
      g1: g1,
      g2: g2,
    }
  })
  var l2 = _vm.showTemplateDialog
    ? _vm.__map(_vm.recommendLists, function (template, __i4__) {
        var $orig = _vm.__get_orig(template)
        var l1 = template.items.slice(0, 2)
        var g3 = template.items.length
        return {
          $orig: $orig,
          l1: l1,
          g3: g3,
        }
      })
    : null
  var g4 = _vm.showQuickTagDialog ? _vm.quickCustomTags.length : null
  var g5 = _vm.showRecommendImportDialog
    ? _vm.recommendImportChecklists.length
    : null
  var g6 = _vm.showRecommendImportDialog
    ? _vm.recommendImportChecklists.length
    : null
  var l3 = _vm.showQuickAddDialog
    ? _vm.__map(_vm.quickPresetTags, function (tag, __i6__) {
        var $orig = _vm.__get_orig(tag)
        var g7 = _vm.quickAddSelectedTags.includes(tag)
        return {
          $orig: $orig,
          g7: g7,
        }
      })
    : null
  var l4 = _vm.showQuickAddDialog
    ? _vm.__map(_vm.quickCustomTags, function (tag, idx) {
        var $orig = _vm.__get_orig(tag)
        var g8 = _vm.quickAddSelectedTags.includes(tag)
        return {
          $orig: $orig,
          g8: g8,
        }
      })
    : null
  var g9 = _vm.showQuickAddDialog ? _vm.quickCustomTags.length : null
  var g10 = _vm.showQuickAddDialog ? _vm.quickAddChecklists.length : null
  var g11 = _vm.showQuickAddDialog ? _vm.quickAddChecklists.length : null
  var g12 = _vm.showShareSelectDialog ? _vm.shareSelectChecklists.length : null
  var g13 = _vm.showShareSelectDialog ? _vm.shareSelectChecklists.length : null
  var g14 = _vm.showShareSelectDialog
    ? _vm.shareSelectChecklists.length === 0 ||
      !_vm.shareSelectedChecklistId ||
      !_vm.shareCode
    : null
  var g15 = _vm.showShareSelectDialog
    ? _vm.shareSelectChecklists.length === 0 ||
      !_vm.shareSelectedChecklistId ||
      !_vm.shareCode
    : null
  var g16 =
    _vm.showShareDialog && _vm.shareSelectedChecklistId
      ? (
          _vm.shareSelectChecklists.find(function (l) {
            return l.id === _vm.shareSelectedChecklistId
          }) || {}
        ).name || "我的清单"
      : null
  var g17 = _vm.showExportDialog ? _vm.exportChecklists.length : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.showAddDialog = false
    }
    _vm.e1 = function ($event) {
      _vm.showAddDialog = false
    }
    _vm.e2 = function ($event) {
      _vm.showTemplateDialog = false
    }
    _vm.e3 = function ($event) {
      _vm.showTemplateDialog = false
    }
    _vm.e4 = function ($event) {
      _vm.showCreateListDialog = false
    }
    _vm.e5 = function ($event) {
      _vm.showCreateListDialog = false
    }
    _vm.e6 = function ($event) {
      _vm.showDateDialog = false
    }
    _vm.e7 = function ($event) {
      _vm.showDateDialog = false
    }
    _vm.e8 = function ($event) {
      _vm.showRenameDialog = false
    }
    _vm.e9 = function ($event) {
      _vm.showRenameDialog = false
    }
    _vm.e10 = function ($event) {
      _vm.showQuickTagDialog = false
    }
    _vm.e11 = function ($event) {
      _vm.showQuickTagDialog = false
    }
    _vm.e12 = function ($event) {
      _vm.showShareDialog = false
    }
    _vm.e13 = function ($event) {
      _vm.showShareDialog = false
    }
    _vm.e14 = function ($event) {
      _vm.showExportDialog = false
    }
    _vm.e15 = function ($event) {
      _vm.showExportDialog = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
        l2: l2,
        g4: g4,
        g5: g5,
        g6: g6,
        l3: l3,
        l4: l4,
        g9: g9,
        g10: g10,
        g11: g11,
        g12: g12,
        g13: g13,
        g14: g14,
        g15: g15,
        g16: g16,
        g17: g17,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 162:
/*!**********************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/checklist/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 163);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 163:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/checklist/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _zonghepingjia = _interopRequireDefault(__webpack_require__(/*! ../../static/assets/zonghepingjia.png */ 164));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var _require = __webpack_require__(/*! ../../api/checklist.js */ 89),
  listTemplates = _require.listTemplates,
  myChecklists = _require.myChecklists,
  importFromTemplate = _require.importFromTemplate,
  createChecklist = _require.createChecklist,
  updateChecklist = _require.updateChecklist,
  deleteChecklist = _require.deleteChecklist,
  addItem = _require.addItem,
  updateItem = _require.updateItem,
  deleteItem = _require.deleteItem,
  exportChecklist = _require.exportChecklist,
  importItemsToChecklist = _require.importItemsToChecklist,
  createChecklistShareCode = _require.createChecklistShareCode,
  importChecklistFromShareCode = _require.importChecklistFromShareCode;
var _require2 = __webpack_require__(/*! ../../api/imageMap.js */ 47),
  IMG = _require2.IMG;
// 使用别名
var apiMyChecklists = myChecklists;
var apiAddItem = addItem;
var apiDeleteItem = deleteItem;
var _default = {
  data: function data() {
    return {
      IMG: IMG,
      iconZonghepingjia: _zonghepingjia.default,
      // 推荐清单模板
      recommendLists: [{
        id: 1,
        name: '3天西安吃面路线',
        type: '面食寻味',
        items: ['Day1: biángbiáng面 → 碑林博物馆', 'Day2: 油泼面 → 回民街小吃', 'Day3: 岐山臊子面 → 城墙骑行']
      }, {
        id: 2,
        name: '宝鸡面食一日游',
        type: '面食寻味',
        items: ['上午: 岐山臊子面（老字号）', '中午: 擀面皮配凉菜', '下午: 法门寺参观', '晚上: 扶风鹿糕馍']
      }, {
        id: 3,
        name: '西安非遗一日打卡',
        type: '非遗体验',
        items: ['上午10:00: 皮影戏表演（提前预约）', '下午2:00: 剪纸体验课', '晚上7:00: 秦腔演出（易俗社）']
      }, {
        id: 4,
        name: '春季槐花麦饭',
        type: '季节限定',
        items: ['寻找槐花盛开的农家', '体验槐花麦饭制作', '品尝农家野菜', '周边山林踏春']
      }, {
        id: 5,
        name: '秋季柿子之旅',
        type: '季节限定',
        items: ['富平柿子园采摘', '柿饼制作体验', '品尝柿子相关美食', '购买柿饼伴手礼']
      }, {
        id: 6,
        name: '非遗手工体验',
        type: '非遗体验',
        items: ['凤翔泥塑工作坊', '学习制作泥塑', '参观非遗展览馆', '购买泥塑作品']
      }],
      // 我的清单列表（从后端获取）
      myChecklists: [],
      loading: false,
      // 日期弹窗
      showDateDialog: false,
      dateTemp: '',
      selectedDate: new Date().toISOString().split('T')[0],
      // 当前显示的清单索引（兼容旧字段，不再直接使用）
      currentListIndex: 0,
      // 底部图标
      bottomIcons: [{
        id: 'qingdan',
        label: '陕游记',
        img: IMG.retouch_2025112414391093
      }, {
        id: 'fengwei',
        label: '陕味集',
        img: IMG.retouch_2025112414392946
      }, {
        id: 'feiyi',
        label: '陕非遗',
        img: IMG.retouch_2025112414400271
      }, {
        id: 'profile',
        label: '个人中心',
        img: IMG.retouch_2025112414394823
      }],
      activeNavId: 'qingdan',
      // 弹窗控制

      showAddDialog: false,
      showTemplateDialog: false,
      showCreateListDialog: false,
      showRecommendDetail: false,
      selectedRecommend: null,
      newItemContent: '',
      newItemNote: '',
      newListName: '',
      // 重命名弹窗与上下文
      showRenameDialog: false,
      renameTemp: '',
      targetRenameList: null,
      // 添加项/日期上下文
      activeListForAdd: null,
      activeDateList: null,
      // 当前Swiper索引
      currentSwiperIndex: 0,
      // 导出 / 分享相关
      showExportDialog: false,
      exportDate: new Date().toISOString().split('T')[0],
      exportDateTemp: '',
      exportChecklists: [],
      exportSelectedChecklistId: '',
      // 常用事项标签
      quickPresetTags: ['门票预约', '美食打卡', '交通规划', '住宿确认'],
      quickCustomTags: [],
      showQuickTagDialog: false,
      newQuickTagLabel: '',
      // 常用事项快速添加到清单弹窗
      showQuickAddDialog: false,
      quickAddDate: new Date().toISOString().split('T')[0],
      quickAddDateTemp: '',
      quickAddChecklists: [],
      quickAddSelectedChecklistId: '',
      quickAddSelectedTags: [],
      // 分享行程相关
      showShareDialog: false,
      shareCode: '',
      shareCodeExpireAt: '',
      shareQRCodeUrl: '',
      // 分享清单选择相关
      showShareSelectDialog: false,
      shareSelectDate: new Date().toISOString().split('T')[0],
      shareSelectDateTemp: '',
      shareSelectChecklists: [],
      shareSelectedChecklistId: '',
      // 推荐清单导入到我的清单弹窗相关
      showRecommendImportDialog: false,
      recommendImportDate: new Date().toISOString().split('T')[0],
      recommendImportDateTemp: '',
      recommendImportChecklists: [],
      recommendImportSelectedChecklistId: ''
    };
  },
  computed: {
    // 当前选中日期的清单（最多3个）
    displayedLists: function displayedLists() {
      var _this = this;
      return this.myChecklists.filter(function (l) {
        return l.date === _this.selectedDate;
      });
    },
    // Swiper显示的项目（包括创建页面）
    swiperItems: function swiperItems() {
      var lists = this.displayedLists;
      var items = (0, _toConsumableArray2.default)(lists);
      // 如果少于3个清单，添加创建页面
      if (lists.length < 3) {
        items.push({
          isCreatePage: true,
          id: 'create-page'
        });
      }
      // 如果没有清单，只显示创建页面
      if (lists.length === 0) {
        return [{
          isCreatePage: true,
          id: 'create-page'
        }];
      }
      return items;
    },
    // 当前显示的清单
    currentList: function currentList() {
      if (this.displayedLists.length === 0) return null;
      return this.displayedLists[this.currentSwiperIndex] || this.displayedLists[0] || null;
    }
  },
  onLoad: function onLoad(options) {
    console.log('[onLoad] 页面加载，参数:', options);
    // 检测是否有分享码参数，如果有则自动导入
    if (options && options.code) {
      console.log('[onLoad] 检测到分享码，开始导入:', options.code);
      console.log('[onLoad] 当前页面默认日期:', this.selectedDate);
      this.handleShareCodeImport(options.code);
      return; // 导入完成后会刷新页面，这里先返回
    }

    // 页面加载时获取清单列表
    this.loadChecklists();
    // 加载推荐模板列表
    this.loadTemplates();
    // 加载本地常用事项标签
    this.loadQuickTags();
  },
  onShow: function onShow() {
    // 页面显示时刷新清单列表
    this.loadChecklists();
  },
  methods: {
    // 测试方法 - 验证事件绑定是否正常
    testClick: function testClick() {
      console.log('[testClick] 测试点击事件被触发');
      uni.showToast({
        title: '点击事件正常',
        icon: 'success'
      });
    },
    // 加载清单列表
    loadChecklists: function loadChecklists() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var lists;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this2.loading = true;
                _context.next = 4;
                return apiMyChecklists({
                  date: _this2.selectedDate
                });
              case 4:
                lists = _context.sent;
                if (Array.isArray(lists)) {
                  _this2.myChecklists = lists;
                  // 确保当前索引有效
                  if (_this2.currentSwiperIndex >= _this2.displayedLists.length) {
                    _this2.currentSwiperIndex = Math.max(0, _this2.displayedLists.length - 1);
                  }
                }
                _context.next = 12;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error('加载清单列表失败', _context.t0);
                uni.showToast({
                  title: '加载清单失败',
                  icon: 'none'
                });
              case 12:
                _context.prev = 12;
                _this2.loading = false;
                return _context.finish(12);
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8, 12, 15]]);
      }))();
    },
    // 加载推荐模板列表
    loadTemplates: function loadTemplates() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var templates;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return listTemplates();
              case 3:
                templates = _context2.sent;
                if (Array.isArray(templates) && templates.length > 0) {
                  _this3.recommendLists = templates;
                }
                _context2.next = 10;
                break;
              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.error('加载模板列表失败', _context2.t0);
                // 模板加载失败不影响主功能，使用本地默认数据
              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    // Swiper切换
    onSwiperChange: function onSwiperChange(e) {
      this.currentSwiperIndex = e.detail.current;
    },
    // 查看推荐清单详情
    viewRecommendDetail: function viewRecommendDetail(list) {
      this.selectedRecommend = list;
      this.showRecommendDetail = true;
    },
    // 关闭推荐清单详情
    closeRecommendDetail: function closeRecommendDetail() {
      this.showRecommendDetail = false;
      this.selectedRecommend = null;
    },
    // 从详情页导入清单：先让用户选择日期和具体清单
    importFromDetail: function importFromDetail() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this4.selectedRecommend) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return");
              case 2:
                // 初始导入日期使用当前页面选中的日期，没有则使用今天
                _this4.recommendImportDate = _this4.selectedDate || new Date().toISOString().split('T')[0];
                _this4.recommendImportDateTemp = _this4.recommendImportDate;
                _this4.recommendImportSelectedChecklistId = '';

                // 加载该日期下的清单列表供选择
                _context3.next = 7;
                return _this4.loadChecklistsForRecommendImport(_this4.recommendImportDate);
              case 7:
                _this4.showRecommendImportDialog = true;
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    // 加载指定日期下可用于导入的清单列表
    loadChecklistsForRecommendImport: function loadChecklistsForRecommendImport(date) {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var lists;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _this5.loading = true;
                _context4.next = 4;
                return apiMyChecklists({
                  date: date
                });
              case 4:
                lists = _context4.sent;
                _this5.recommendImportChecklists = Array.isArray(lists) ? lists : [];
                _context4.next = 12;
                break;
              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.error('[loadChecklistsForRecommendImport] 加载清单列表失败', _context4.t0);
                _this5.recommendImportChecklists = [];
              case 12:
                _context4.prev = 12;
                _this5.loading = false;
                return _context4.finish(12);
              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8, 12, 15]]);
      }))();
    },
    // 导入弹窗里日期变更
    onRecommendImportDateChange: function onRecommendImportDateChange(e) {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var newDate;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                newDate = e.detail.value;
                if (newDate) {
                  _context5.next = 3;
                  break;
                }
                return _context5.abrupt("return");
              case 3:
                _this6.recommendImportDate = newDate;
                _this6.recommendImportDateTemp = newDate;
                _this6.recommendImportSelectedChecklistId = '';
                _context5.next = 8;
                return _this6.loadChecklistsForRecommendImport(newDate);
              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    // 选择要导入到的清单
    selectRecommendImportChecklist: function selectRecommendImportChecklist(list) {
      if (!list || !list.id) return;
      this.recommendImportSelectedChecklistId = list.id;
    },
    // 确认将推荐清单内容导入到选中的清单中
    confirmRecommendImport: function confirmRecommendImport() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var rawItems, lines, text, result, message, imported, duplicated, errors;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this7.selectedRecommend) {
                  _context6.next = 3;
                  break;
                }
                uni.showToast({
                  title: '未选择推荐清单',
                  icon: 'none'
                });
                return _context6.abrupt("return");
              case 3:
                if (_this7.recommendImportSelectedChecklistId) {
                  _context6.next = 6;
                  break;
                }
                uni.showToast({
                  title: '请选择清单',
                  icon: 'none'
                });
                return _context6.abrupt("return");
              case 6:
                // 将推荐清单的 items 转成多行文本，每行一个条目，复用批量导入接口
                rawItems = Array.isArray(_this7.selectedRecommend.items) ? _this7.selectedRecommend.items : [];
                lines = rawItems.map(function (item) {
                  if (!item) return '';
                  if (typeof item === 'string') return item;
                  if (item.content && typeof item.content === 'string') return item.content;
                  if (item.name && typeof item.name === 'string') return item.name;
                  return '';
                }).filter(Boolean);
                if (!(lines.length === 0)) {
                  _context6.next = 11;
                  break;
                }
                uni.showToast({
                  title: '该推荐清单暂无可导入内容',
                  icon: 'none'
                });
                return _context6.abrupt("return");
              case 11:
                text = lines.join('\n');
                _context6.prev = 12;
                _this7.loading = true;
                _context6.next = 16;
                return importItemsToChecklist(_this7.recommendImportSelectedChecklistId, text);
              case 16:
                result = _context6.sent;
                // 导入成功后，刷新当前日期对应的清单列表并切换到目标清单
                _this7.selectedDate = _this7.recommendImportDate;
                _context6.next = 20;
                return _this7.loadChecklists();
              case 20:
                // 找到刚才导入的目标清单索引，切换过去
                _this7.$nextTick(function () {
                  var index = _this7.displayedLists.findIndex(function (l) {
                    return l.id === _this7.recommendImportSelectedChecklistId;
                  });
                  if (index >= 0) {
                    _this7.currentSwiperIndex = index;
                  }
                });

                // 关闭弹窗和详情
                _this7.showRecommendImportDialog = false;
                _this7.closeRecommendDetail();

                // 组合提示信息（兼容不同返回结构）
                message = '导入成功';
                if (result) {
                  imported = result.importedCount || 0;
                  duplicated = result.duplicateCount || 0;
                  errors = Array.isArray(result.errors) ? result.errors.length : 0;
                  if (imported || duplicated || errors) {
                    message = "\u5BFC\u5165 ".concat(imported, " \u6761") + (duplicated ? "\uFF0C\u53BB\u91CD ".concat(duplicated, " \u6761") : '') + (errors ? "\uFF0C".concat(errors, " \u6761\u5931\u8D25") : '');
                  }
                }
                uni.showToast({
                  title: message,
                  icon: 'success',
                  duration: 3000
                });
                _context6.next = 32;
                break;
              case 28:
                _context6.prev = 28;
                _context6.t0 = _context6["catch"](12);
                console.error('[confirmRecommendImport] 导入清单内容失败', _context6.t0);
                uni.showToast({
                  title: _context6.t0.message || '导入失败',
                  icon: 'none'
                });
              case 32:
                _context6.prev = 32;
                _this7.loading = false;
                return _context6.finish(32);
              case 35:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[12, 28, 32, 35]]);
      }))();
    },
    // 关闭推荐清单导入弹窗
    closeRecommendImportDialog: function closeRecommendImportDialog() {
      this.showRecommendImportDialog = false;
      this.recommendImportSelectedChecklistId = '';
      this.recommendImportChecklists = [];
    },
    // 切换完成状态
    toggleCheck: function toggleCheck(item, list) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var newChecked;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(!list || !list.id || !item || !item.id)) {
                  _context7.next = 2;
                  break;
                }
                return _context7.abrupt("return");
              case 2:
                newChecked = !item.checked;
                _context7.prev = 3;
                // 先更新本地状态（乐观更新）
                item.checked = newChecked;

                // 调用接口更新
                _context7.next = 7;
                return updateItem(list.id, item.id, {
                  checked: newChecked
                });
              case 7:
                if (newChecked) {
                  uni.showToast({
                    title: '已完成',
                    icon: 'success'
                  });
                }
                _context7.next = 15;
                break;
              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](3);
                // 失败时回滚
                item.checked = !newChecked;
                console.error('更新完成状态失败', _context7.t0);
                uni.showToast({
                  title: '更新失败',
                  icon: 'none'
                });
              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[3, 10]]);
      }))();
    },
    // 删除清单项
    deleteItem: function deleteItem(item, list) {
      var _this8 = this;
      if (!list || !list.id || !item || !item.id) return;
      uni.showModal({
        title: '提示',
        content: '确定删除这个清单项吗？',
        success: function () {
          var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(res) {
            var index;
            return _regenerator.default.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!res.confirm) {
                      _context8.next = 17;
                      break;
                    }
                    _context8.prev = 1;
                    _this8.loading = true;
                    _context8.next = 5;
                    return apiDeleteItem(list.id, item.id);
                  case 5:
                    // 删除成功，从本地列表中移除
                    index = list.items.findIndex(function (i) {
                      return i.id === item.id;
                    });
                    if (index > -1) {
                      list.items.splice(index, 1);
                    }
                    uni.showToast({
                      title: '已删除',
                      icon: 'success'
                    });
                    _context8.next = 14;
                    break;
                  case 10:
                    _context8.prev = 10;
                    _context8.t0 = _context8["catch"](1);
                    console.error('删除清单项失败', _context8.t0);
                    uni.showToast({
                      title: '删除失败',
                      icon: 'none'
                    });
                  case 14:
                    _context8.prev = 14;
                    _this8.loading = false;
                    return _context8.finish(14);
                  case 17:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, null, [[1, 10, 14, 17]]);
          }));
          function success(_x) {
            return _success.apply(this, arguments);
          }
          return success;
        }()
      });
    },
    // 显示添加清单项弹窗
    showAddItem: function showAddItem(list) {
      this.activeListForAdd = list || this.currentList || null;
      if (!this.activeListForAdd) {
        uni.showToast({
          title: '请先创建清单',
          icon: 'none'
        });
        return;
      }
      this.newItemContent = '';
      this.newItemNote = '';
      this.showAddDialog = true;
    },
    // 添加清单项
    addItem: function addItem() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var target, result;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (_this9.newItemContent.trim()) {
                  _context9.next = 3;
                  break;
                }
                uni.showToast({
                  title: '请输入内容',
                  icon: 'none'
                });
                return _context9.abrupt("return");
              case 3:
                target = _this9.activeListForAdd;
                if (!(!target || !target.id)) {
                  _context9.next = 7;
                  break;
                }
                uni.showToast({
                  title: '请先选择清单',
                  icon: 'none'
                });
                return _context9.abrupt("return");
              case 7:
                _context9.prev = 7;
                _this9.loading = true;
                _context9.next = 11;
                return apiAddItem(target.id, {
                  content: _this9.newItemContent.trim(),
                  note: _this9.newItemNote.trim()
                });
              case 11:
                result = _context9.sent;
                if (!(result && result.id)) {
                  _context9.next = 22;
                  break;
                }
                // 添加成功，更新本地列表
                if (!target.items) {
                  target.items = [];
                }
                target.items.push(result);
                _this9.showAddDialog = false;
                _this9.activeListForAdd = null;
                _this9.newItemContent = '';
                _this9.newItemNote = '';
                uni.showToast({
                  title: '添加成功',
                  icon: 'success'
                });
                _context9.next = 23;
                break;
              case 22:
                throw new Error('添加失败：服务器返回数据格式异常');
              case 23:
                _context9.next = 29;
                break;
              case 25:
                _context9.prev = 25;
                _context9.t0 = _context9["catch"](7);
                console.error('添加清单项失败', _context9.t0);
                uni.showToast({
                  title: _context9.t0.message || '添加失败',
                  icon: 'none'
                });
              case 29:
                _context9.prev = 29;
                _this9.loading = false;
                return _context9.finish(29);
              case 32:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[7, 25, 29, 32]]);
      }))();
    },
    // 通过标签快速添加清单项
    quickAddItemFromTag: function quickAddItemFromTag(tagLabel, list) {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var content, target, result;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                content = (tagLabel || '').trim();
                if (content) {
                  _context10.next = 3;
                  break;
                }
                return _context10.abrupt("return");
              case 3:
                target = list || _this10.currentList;
                if (!(!target || !target.id)) {
                  _context10.next = 7;
                  break;
                }
                uni.showToast({
                  title: '请先创建清单',
                  icon: 'none'
                });
                return _context10.abrupt("return");
              case 7:
                _context10.prev = 7;
                _this10.loading = true;
                _context10.next = 11;
                return apiAddItem(target.id, {
                  content: content,
                  note: ''
                });
              case 11:
                result = _context10.sent;
                if (!(result && result.id)) {
                  _context10.next = 18;
                  break;
                }
                if (!target.items) {
                  target.items = [];
                }
                target.items.push(result);
                uni.showToast({
                  title: '已添加到清单',
                  icon: 'success'
                });
                _context10.next = 19;
                break;
              case 18:
                throw new Error('添加失败：服务器返回数据格式异常');
              case 19:
                _context10.next = 25;
                break;
              case 21:
                _context10.prev = 21;
                _context10.t0 = _context10["catch"](7);
                console.error('[quickAddItemFromTag] 添加常用事项失败', _context10.t0);
                uni.showToast({
                  title: _context10.t0.message || '添加失败',
                  icon: 'none'
                });
              case 25:
                _context10.prev = 25;
                _this10.loading = false;
                return _context10.finish(25);
              case 28:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[7, 21, 25, 28]]);
      }))();
    },
    // 加载本地常用事项标签
    loadQuickTags: function loadQuickTags() {
      try {
        var stored = uni.getStorageSync('checklist_quick_custom_tags');
        if (Array.isArray(stored)) {
          this.quickCustomTags = stored;
        }
      } catch (err) {
        console.error('加载常用事项标签失败', err);
      }
    },
    // 打开常用事项管理弹窗
    openQuickTagDialog: function openQuickTagDialog() {
      this.newQuickTagLabel = '';
      this.showQuickTagDialog = true;
    },
    // 新增自定义常用事项
    addCustomQuickTag: function addCustomQuickTag() {
      var label = (this.newQuickTagLabel || '').trim();
      if (!label) {
        uni.showToast({
          title: '请输入常用事项',
          icon: 'none'
        });
        return;
      }
      if (this.quickCustomTags.includes(label)) {
        uni.showToast({
          title: '该事项已存在',
          icon: 'none'
        });
        return;
      }
      if (this.quickCustomTags.length >= 20) {
        uni.showToast({
          title: '常用事项最多保存 20 个',
          icon: 'none'
        });
        return;
      }
      this.quickCustomTags.push(label);
      this.newQuickTagLabel = '';
      try {
        uni.setStorageSync('checklist_quick_custom_tags', this.quickCustomTags);
      } catch (err) {
        console.error('保存常用事项标签失败', err);
      }
      uni.showToast({
        title: '已加入常用事项',
        icon: 'success'
      });
    },
    // 删除自定义常用事项
    removeCustomQuickTag: function removeCustomQuickTag(index) {
      if (index < 0 || index >= this.quickCustomTags.length) return;
      this.quickCustomTags.splice(index, 1);
      try {
        uni.setStorageSync('checklist_quick_custom_tags', this.quickCustomTags);
      } catch (err) {
        console.error('保存常用事项标签失败', err);
      }
    },
    // 打开常用事项快速添加弹窗（左侧按钮）
    openQuickAddDialog: function openQuickAddDialog() {
      var _this11 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _this11.quickAddDate = _this11.selectedDate || new Date().toISOString().split('T')[0];
                _this11.quickAddDateTemp = _this11.quickAddDate;
                _this11.quickAddSelectedChecklistId = '';
                _this11.quickAddSelectedTags = [];
                _context11.next = 6;
                return _this11.loadQuickAddChecklists(_this11.quickAddDate);
              case 6:
                _this11.showQuickAddDialog = true;
              case 7:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    // 加载指定日期下的清单列表（用于常用事项快速添加）
    loadQuickAddChecklists: function loadQuickAddChecklists(date) {
      var _this12 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var lists;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _this12.loading = true;
                _context12.next = 4;
                return apiMyChecklists({
                  date: date
                });
              case 4:
                lists = _context12.sent;
                _this12.quickAddChecklists = Array.isArray(lists) ? lists : [];
                _context12.next = 12;
                break;
              case 8:
                _context12.prev = 8;
                _context12.t0 = _context12["catch"](0);
                console.error('[loadQuickAddChecklists] 加载清单列表失败', _context12.t0);
                _this12.quickAddChecklists = [];
              case 12:
                _context12.prev = 12;
                _this12.loading = false;
                return _context12.finish(12);
              case 15:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 8, 12, 15]]);
      }))();
    },
    // 常用事项快速添加弹窗中，日期变更
    onQuickAddDateChange: function onQuickAddDateChange(e) {
      var _this13 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var newDate;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                newDate = e.detail.value;
                if (newDate) {
                  _context13.next = 3;
                  break;
                }
                return _context13.abrupt("return");
              case 3:
                _this13.quickAddDate = newDate;
                _this13.quickAddDateTemp = newDate;
                _this13.quickAddSelectedChecklistId = '';
                _context13.next = 8;
                return _this13.loadQuickAddChecklists(newDate);
              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    // 选择要添加到的清单
    selectQuickAddChecklist: function selectQuickAddChecklist(list) {
      if (!list || !list.id) return;
      this.quickAddSelectedChecklistId = list.id;
    },
    // 选择常用事项标签（支持多选）
    selectQuickAddTag: function selectQuickAddTag(tag) {
      var label = (tag || '').trim();
      if (!label) return;
      if (!Array.isArray(this.quickAddSelectedTags)) {
        this.quickAddSelectedTags = [];
      }
      var index = this.quickAddSelectedTags.indexOf(label);
      if (index >= 0) {
        this.quickAddSelectedTags.splice(index, 1);
      } else {
        this.quickAddSelectedTags.push(label);
      }
    },
    // 确认添加常用事项到目标清单（支持多选标签批量添加）
    confirmQuickAdd: function confirmQuickAdd() {
      var _this14 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
        var selectedTags, successCount, _iterator, _step, rawTag, content, result;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                selectedTags = Array.isArray(_this14.quickAddSelectedTags) ? _this14.quickAddSelectedTags.filter(function (tag) {
                  return (tag || '').trim();
                }) : [];
                if (!(selectedTags.length === 0)) {
                  _context14.next = 4;
                  break;
                }
                uni.showToast({
                  title: '请先选择常用事项',
                  icon: 'none'
                });
                return _context14.abrupt("return");
              case 4:
                if (_this14.quickAddSelectedChecklistId) {
                  _context14.next = 7;
                  break;
                }
                uni.showToast({
                  title: '请选择清单',
                  icon: 'none'
                });
                return _context14.abrupt("return");
              case 7:
                _context14.prev = 7;
                _this14.loading = true;
                successCount = 0;
                _iterator = _createForOfIteratorHelper(selectedTags);
                _context14.prev = 11;
                _iterator.s();
              case 13:
                if ((_step = _iterator.n()).done) {
                  _context14.next = 30;
                  break;
                }
                rawTag = _step.value;
                content = (rawTag || '').trim();
                if (content) {
                  _context14.next = 18;
                  break;
                }
                return _context14.abrupt("continue", 28);
              case 18:
                _context14.prev = 18;
                _context14.next = 21;
                return apiAddItem(_this14.quickAddSelectedChecklistId, {
                  content: content,
                  note: ''
                });
              case 21:
                result = _context14.sent;
                if (result && result.id) {
                  successCount += 1;
                }
                _context14.next = 28;
                break;
              case 25:
                _context14.prev = 25;
                _context14.t0 = _context14["catch"](18);
                console.error('[confirmQuickAdd] 添加单个常用事项失败', _context14.t0);
              case 28:
                _context14.next = 13;
                break;
              case 30:
                _context14.next = 35;
                break;
              case 32:
                _context14.prev = 32;
                _context14.t1 = _context14["catch"](11);
                _iterator.e(_context14.t1);
              case 35:
                _context14.prev = 35;
                _iterator.f();
                return _context14.finish(35);
              case 38:
                if (!(successCount > 0)) {
                  _context14.next = 48;
                  break;
                }
                _this14.selectedDate = _this14.quickAddDate;
                _context14.next = 42;
                return _this14.loadChecklists();
              case 42:
                _this14.$nextTick(function () {
                  var index = _this14.displayedLists.findIndex(function (l) {
                    return l.id === _this14.quickAddSelectedChecklistId;
                  });
                  if (index >= 0) {
                    _this14.currentSwiperIndex = index;
                  }
                });
                _this14.showQuickAddDialog = false;
                _this14.quickAddSelectedTags = [];
                uni.showToast({
                  title: "\u5DF2\u6DFB\u52A0 ".concat(successCount, " \u6761"),
                  icon: 'success'
                });
                _context14.next = 49;
                break;
              case 48:
                uni.showToast({
                  title: '添加失败，请稍后重试',
                  icon: 'none'
                });
              case 49:
                _context14.next = 55;
                break;
              case 51:
                _context14.prev = 51;
                _context14.t2 = _context14["catch"](7);
                console.error('[confirmQuickAdd] 批量添加常用事项失败', _context14.t2);
                uni.showToast({
                  title: _context14.t2.message || '添加失败',
                  icon: 'none'
                });
              case 55:
                _context14.prev = 55;
                _this14.loading = false;
                return _context14.finish(55);
              case 58:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[7, 51, 55, 58], [11, 32, 35, 38], [18, 25]]);
      }))();
    },
    // 关闭常用事项快速添加弹窗
    closeQuickAddDialog: function closeQuickAddDialog() {
      this.showQuickAddDialog = false;
      this.quickAddSelectedTags = [];
      this.quickAddSelectedChecklistId = '';
    },
    // 处理分享按钮点击事件
    handleShareClick: function handleShareClick(e) {
      this.openShareDialog();
    },
    // 打开共享行程弹窗（先显示选择清单弹窗）
    openShareDialog: function openShareDialog() {
      var _this15 = this;
      try {
        // 默认日期使用当前选中的日期，没有则使用今天
        this.shareSelectDate = this.selectedDate || new Date().toISOString().split('T')[0];
        this.shareSelectDateTemp = this.shareSelectDate;
        this.shareSelectedChecklistId = '';
        this.shareCode = ''; // 重置分享码

        // 立即显示弹窗
        this.showShareSelectDialog = true;

        // 使用 $nextTick 确保 DOM 更新后再加载数据
        this.$nextTick( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
          return _regenerator.default.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.prev = 0;
                  _context15.next = 3;
                  return _this15.loadShareSelectChecklists(_this15.shareSelectDate);
                case 3:
                  if (!(_this15.currentList && _this15.currentList.id && _this15.currentList.date === _this15.shareSelectDate)) {
                    _context15.next = 10;
                    break;
                  }
                  _this15.shareSelectedChecklistId = _this15.currentList.id;
                  // 自动生成分享码
                  if (!(_this15.onShareChecklistSelected && typeof _this15.onShareChecklistSelected === 'function')) {
                    _context15.next = 8;
                    break;
                  }
                  _context15.next = 8;
                  return _this15.onShareChecklistSelected();
                case 8:
                  _context15.next = 15;
                  break;
                case 10:
                  if (!(_this15.shareSelectChecklists.length > 0)) {
                    _context15.next = 15;
                    break;
                  }
                  _this15.shareSelectedChecklistId = _this15.shareSelectChecklists[0].id;
                  // 自动生成分享码
                  if (!(_this15.onShareChecklistSelected && typeof _this15.onShareChecklistSelected === 'function')) {
                    _context15.next = 15;
                    break;
                  }
                  _context15.next = 15;
                  return _this15.onShareChecklistSelected();
                case 15:
                  _context15.next = 20;
                  break;
                case 17:
                  _context15.prev = 17;
                  _context15.t0 = _context15["catch"](0);
                  console.error('[openShareDialog] 加载清单列表失败', _context15.t0);
                case 20:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, null, [[0, 17]]);
        })));
      } catch (err) {
        console.error('[openShareDialog] 方法执行出错', err);
        uni.showToast({
          title: '打开分享弹窗失败',
          icon: 'none'
        });
      }
    },
    // 加载指定日期下的清单列表（用于分享选择）
    loadShareSelectChecklists: function loadShareSelectChecklists(date) {
      var _this16 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var lists;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _this16.loading = true;
                _context16.next = 4;
                return apiMyChecklists({
                  date: date
                });
              case 4:
                lists = _context16.sent;
                _this16.shareSelectChecklists = Array.isArray(lists) ? lists : [];
                _context16.next = 12;
                break;
              case 8:
                _context16.prev = 8;
                _context16.t0 = _context16["catch"](0);
                console.error('[loadShareSelectChecklists] 加载清单列表失败', _context16.t0);
                _this16.shareSelectChecklists = [];
              case 12:
                _context16.prev = 12;
                _this16.loading = false;
                return _context16.finish(12);
              case 15:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[0, 8, 12, 15]]);
      }))();
    },
    // 分享选择弹窗中，日期变更
    onShareSelectDateChange: function onShareSelectDateChange(e) {
      var _this17 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17() {
        var newDate;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                newDate = e.detail.value;
                if (newDate) {
                  _context17.next = 3;
                  break;
                }
                return _context17.abrupt("return");
              case 3:
                _this17.shareSelectDate = newDate;
                _this17.shareSelectDateTemp = newDate;
                _this17.shareSelectedChecklistId = '';
                _this17.shareCode = ''; // 重置分享码
                _context17.prev = 7;
                _context17.next = 10;
                return _this17.loadShareSelectChecklists(newDate);
              case 10:
                if (!(_this17.shareSelectChecklists.length > 0)) {
                  _context17.next = 15;
                  break;
                }
                _this17.shareSelectedChecklistId = _this17.shareSelectChecklists[0].id;
                // 自动生成分享码
                if (!(_this17.onShareChecklistSelected && typeof _this17.onShareChecklistSelected === 'function')) {
                  _context17.next = 15;
                  break;
                }
                _context17.next = 15;
                return _this17.onShareChecklistSelected();
              case 15:
                _context17.next = 20;
                break;
              case 17:
                _context17.prev = 17;
                _context17.t0 = _context17["catch"](7);
                console.error('[onShareSelectDateChange] 处理日期变更失败', _context17.t0);
              case 20:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[7, 17]]);
      }))();
    },
    // 选择要分享的清单
    selectShareChecklist: function selectShareChecklist(list) {
      var _this18 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18() {
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!(!list || !list.id)) {
                  _context18.next = 2;
                  break;
                }
                return _context18.abrupt("return");
              case 2:
                _this18.shareSelectedChecklistId = list.id;
                // 选择清单后自动生成分享码
                if (!(_this18.onShareChecklistSelected && typeof _this18.onShareChecklistSelected === 'function')) {
                  _context18.next = 6;
                  break;
                }
                _context18.next = 6;
                return _this18.onShareChecklistSelected();
              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }))();
    },
    // 选择清单时自动生成分享码（用于微信分享）
    onShareChecklistSelected: function onShareChecklistSelected() {
      var _this19 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19() {
        var success;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (_this19.shareSelectedChecklistId) {
                  _context19.next = 3;
                  break;
                }
                console.warn('[onShareChecklistSelected] 没有选中的清单ID');
                return _context19.abrupt("return");
              case 3:
                _context19.prev = 3;
                console.log('[onShareChecklistSelected] 开始生成分享码，清单ID:', _this19.shareSelectedChecklistId);
                _context19.next = 7;
                return _this19.prepareShareCodeForChecklist(_this19.shareSelectedChecklistId);
              case 7:
                success = _context19.sent;
                if (success) {
                  console.log('[onShareChecklistSelected] 分享码生成成功:', _this19.shareCode);
                } else {
                  console.warn('[onShareChecklistSelected] 分享码生成失败');
                }
                _context19.next = 15;
                break;
              case 11:
                _context19.prev = 11;
                _context19.t0 = _context19["catch"](3);
                console.error('[onShareChecklistSelected] 生成分享码失败', _context19.t0);
                uni.showToast({
                  title: '生成分享码失败，请稍后重试',
                  icon: 'none',
                  duration: 2000
                });
              case 15:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, null, [[3, 11]]);
      }))();
    },
    // 准备分享预览（在点击分享按钮时调用，关闭弹窗并切换到清单详情）
    prepareShareForPreview: function prepareShareForPreview() {
      var _this20 = this;
      // 立即关闭选择弹窗
      this.showShareSelectDialog = false;
      this.showShareDialog = false;

      // 如果有选中的清单，切换到该清单的详情页面
      if (this.shareSelectedChecklistId) {
        var checklist = this.shareSelectChecklists.find(function (l) {
          return l.id === _this20.shareSelectedChecklistId;
        }) || this.currentList;
        if (checklist) {
          // 切换到清单所在的日期
          if (checklist.date) {
            this.selectedDate = checklist.date;
          }
          // 立即加载清单并定位（同步执行，不等待）
          this.loadChecklists().then(function () {
            var index = _this20.displayedLists.findIndex(function (l) {
              return l.id === _this20.shareSelectedChecklistId;
            });
            if (index >= 0) {
              _this20.currentSwiperIndex = index;
            }
          }).catch(function () {
            // 静默失败
          });
        }
      }
    },
    // 关闭分享选择弹窗
    closeShareSelectDialog: function closeShareSelectDialog() {
      this.showShareSelectDialog = false;
      this.shareSelectedChecklistId = '';
      this.shareSelectChecklists = [];
    },
    // 为指定清单预生成分享码（用于微信分享）
    // 返回 true 表示成功，false 表示失败
    prepareShareCodeForChecklist: function prepareShareCodeForChecklist(checklistId) {
      var _this21 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20() {
        var result, data;
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (checklistId) {
                  _context20.next = 2;
                  break;
                }
                return _context20.abrupt("return", false);
              case 2:
                if (!(_this21.shareCode && _this21.shareSelectedChecklistId === checklistId)) {
                  _context20.next = 4;
                  break;
                }
                return _context20.abrupt("return", true);
              case 4:
                _context20.prev = 4;
                _context20.next = 7;
                return createChecklistShareCode(checklistId);
              case 7:
                result = _context20.sent;
                if (!result) {
                  _context20.next = 21;
                  break;
                }
                // 兼容 ApiResponse 格式 { success, data: { code, expireAt } }
                data = result.data || result;
                if (!(data.code || data.shareCode)) {
                  _context20.next = 17;
                  break;
                }
                _this21.shareCode = data.code || data.shareCode;
                _this21.shareCodeExpireAt = data.expireAt || data.expiredAt || '';
                _this21.shareQRCodeUrl = data.qrcodeUrl || data.qrCodeUrl || '';
                return _context20.abrupt("return", true);
              case 17:
                console.error('[prepareShareCodeForChecklist] 服务器返回数据格式异常，未包含分享码', data);
                return _context20.abrupt("return", false);
              case 19:
                _context20.next = 23;
                break;
              case 21:
                console.error('[prepareShareCodeForChecklist] 服务器未返回数据');
                return _context20.abrupt("return", false);
              case 23:
                _context20.next = 29;
                break;
              case 25:
                _context20.prev = 25;
                _context20.t0 = _context20["catch"](4);
                console.error('[prepareShareCodeForChecklist] 预生成分享码失败', _context20.t0);
                return _context20.abrupt("return", false);
              case 29:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, null, [[4, 25]]);
      }))();
    },
    // 预先生成分享码（用于微信分享，兼容旧方法）
    prepareShareCode: function prepareShareCode() {
      var _this22 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21() {
        var checklistId;
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                checklistId = _this22.shareSelectedChecklistId || _this22.currentList && _this22.currentList.id;
                if (checklistId) {
                  _context21.next = 3;
                  break;
                }
                return _context21.abrupt("return");
              case 3:
                return _context21.abrupt("return", _this22.prepareShareCodeForChecklist(checklistId));
              case 4:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }))();
    },
    // 生成当前选中清单的行程分享码
    generateShareCode: function generateShareCode() {
      var _this23 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22() {
        var checklistId, result, data;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                checklistId = _this23.shareSelectedChecklistId || _this23.currentList && _this23.currentList.id;
                if (checklistId) {
                  _context22.next = 4;
                  break;
                }
                uni.showToast({
                  title: '暂无可分享的清单',
                  icon: 'none'
                });
                return _context22.abrupt("return");
              case 4:
                _context22.prev = 4;
                _this23.loading = true;
                _context22.next = 8;
                return createChecklistShareCode(checklistId);
              case 8:
                result = _context22.sent;
                if (!result) {
                  _context22.next = 21;
                  break;
                }
                // 兼容 ApiResponse 格式 { success, data: { code, expireAt } }
                data = result.data || result;
                if (!(data.code || data.shareCode)) {
                  _context22.next = 18;
                  break;
                }
                _this23.shareCode = data.code || data.shareCode;
                _this23.shareQRCodeUrl = data.qrcodeUrl || data.qrCodeUrl || '';
                _this23.shareCodeExpireAt = data.expireAt || data.expiredAt || '';
                uni.showToast({
                  title: '分享码已生成',
                  icon: 'success'
                });
                _context22.next = 19;
                break;
              case 18:
                throw new Error('生成失败：服务器未返回分享码');
              case 19:
                _context22.next = 22;
                break;
              case 21:
                throw new Error('生成失败：服务器未返回分享码');
              case 22:
                _context22.next = 28;
                break;
              case 24:
                _context22.prev = 24;
                _context22.t0 = _context22["catch"](4);
                console.error('[generateShareCode] 生成行程分享码失败', _context22.t0);
                uni.showToast({
                  title: _context22.t0.message || '生成分享码失败',
                  icon: 'none'
                });
              case 28:
                _context22.prev = 28;
                _this23.loading = false;
                return _context22.finish(28);
              case 31:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, null, [[4, 24, 28, 31]]);
      }))();
    },
    // 复制分享码到剪贴板
    copyShareCode: function copyShareCode() {
      if (!this.shareCode) {
        uni.showToast({
          title: '请先生成分享码',
          icon: 'none'
        });
        return;
      }
      uni.setClipboardData({
        data: this.shareCode,
        success: function success() {
          uni.showToast({
            title: '分享码已复制',
            icon: 'success'
          });
        }
      });
    },
    // 扫码导入好友行程
    scanShareCodeImport: function scanShareCodeImport() {
      var _this24 = this;
      uni.scanCode({
        success: function () {
          var _success2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23(res) {
            var raw;
            return _regenerator.default.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    raw = res.result;
                    if (!raw) {
                      _context23.next = 4;
                      break;
                    }
                    _context23.next = 4;
                    return _this24.handleShareCodeImport(raw);
                  case 4:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23);
          }));
          function success(_x2) {
            return _success2.apply(this, arguments);
          }
          return success;
        }(),
        fail: function fail(err) {
          console.error('[scanShareCodeImport] 扫码失败', err);
          if (err.errMsg && !err.errMsg.includes('cancel')) {
            uni.showToast({
              title: '扫码失败',
              icon: 'none'
            });
          }
        }
      });
    },
    // 处理分享码导入行程（支持从 URL 参数或扫码）
    handleShareCodeImport: function handleShareCodeImport(rawCode) {
      var _this25 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25() {
        var code, result, data, checklist, verifyChecklist, recheckChecklist, cleanName, _iterator2, _step2, item, cleanContent, message;
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                code = (rawCode || '').trim();
                if (code) {
                  _context25.next = 4;
                  break;
                }
                uni.showToast({
                  title: '分享码无效',
                  icon: 'none'
                });
                return _context25.abrupt("return");
              case 4:
                _context25.prev = 4;
                _this25.loading = true;
                console.log('[handleShareCodeImport] 开始导入，分享码:', code, '当前页面日期:', _this25.selectedDate);

                // 导入时不传 date 参数，让后端使用分享码对应的清单的原始日期
                // 这样导入的清单会保持原始日期（1-05），而不是当前页面的日期（1-04）
                _context25.next = 9;
                return importChecklistFromShareCode(code, {});
              case 9:
                result = _context25.sent;
                // 处理返回结果，兼容不同的数据结构
                data = result.data || result;
                console.log('[handleShareCodeImport] 导入结果:', data);

                // 检查是否是分享人自己（后端应该返回 isOwner 或类似字段）
                if (!(data && data.isOwner === true)) {
                  _context25.next = 16;
                  break;
                }
                uni.showToast({
                  title: '这是您自己分享的清单，无需导入',
                  icon: 'none',
                  duration: 2000
                });
                _this25.loading = false;
                return _context25.abrupt("return");
              case 16:
                if (!(data && data.checklist)) {
                  _context25.next = 97;
                  break;
                }
                checklist = data.checklist;
                console.log('[handleShareCodeImport] 导入的清单信息:', {
                  id: checklist.id,
                  name: checklist.name,
                  date: checklist.date,
                  itemsCount: checklist.items ? checklist.items.length : 0
                });

                // 重要：先切换到清单的原始日期，再清理和刷新
                // 这样可以确保导入的清单显示在正确的日期下
                if (!checklist.date) {
                  _context25.next = 48;
                  break;
                }
                console.log('[handleShareCodeImport] 后端返回的清单日期:', checklist.date, '当前页面日期:', _this25.selectedDate);
                console.log('[handleShareCodeImport] 切换到清单的原始日期:', checklist.date);
                _this25.selectedDate = checklist.date;
                // 立即刷新清单列表，使用新的日期
                _context25.next = 25;
                return _this25.loadChecklists();
              case 25:
                // 验证导入的清单是否在正确的日期下
                verifyChecklist = _this25.myChecklists.find(function (l) {
                  return l.id === checklist.id;
                });
                if (!verifyChecklist) {
                  _context25.next = 48;
                  break;
                }
                console.log('[handleShareCodeImport] 验证清单日期 - 后端返回:', checklist.date, '实际保存:', verifyChecklist.date);
                if (!(verifyChecklist.date && verifyChecklist.date !== checklist.date)) {
                  _context25.next = 48;
                  break;
                }
                console.error('[handleShareCodeImport] 警告：后端返回的日期与实际保存的日期不一致！');
                console.error('[handleShareCodeImport] 后端返回日期:', checklist.date, '实际保存日期:', verifyChecklist.date);
                console.error('[handleShareCodeImport] 尝试修正清单日期...');
                // 如果后端保存到了错误的日期，尝试修正为正确的日期
                _context25.prev = 32;
                _context25.next = 35;
                return updateChecklist(checklist.id, {
                  date: checklist.date
                });
              case 35:
                console.log('[handleShareCodeImport] 已修正清单日期为:', checklist.date);
                // 刷新列表
                _context25.next = 38;
                return _this25.loadChecklists();
              case 38:
                // 再次验证
                recheckChecklist = _this25.myChecklists.find(function (l) {
                  return l.id === checklist.id;
                });
                if (recheckChecklist && recheckChecklist.date === checklist.date) {
                  console.log('[handleShareCodeImport] 日期修正成功！');
                  _this25.selectedDate = checklist.date;
                } else {
                  console.warn('[handleShareCodeImport] 日期修正失败，使用实际保存的日期');
                  _this25.selectedDate = verifyChecklist.date;
                }
                _context25.next = 48;
                break;
              case 42:
                _context25.prev = 42;
                _context25.t0 = _context25["catch"](32);
                console.error('[handleShareCodeImport] 修正清单日期失败', _context25.t0);
                // 如果修正失败，使用实际保存的日期
                _this25.selectedDate = verifyChecklist.date;
                _context25.next = 48;
                return _this25.loadChecklists();
              case 48:
                if (!checklist.name) {
                  _context25.next = 60;
                  break;
                }
                // 移除名称中的日期格式：-YYYY-MM-DD 或 (X月X日) 等
                cleanName = checklist.name.replace(/\s*-\s*\d{4}-\d{2}-\d{2}/g, '') // 移除 -2026-01-04
                .replace(/\s*\(\d{1,2}月\d{1,2}日\)/g, '') // 移除 (1月4日)
                .replace(/\s*\(\d{4}-\d{2}-\d{2}\)/g, '') // 移除 (2026-01-04)
                .trim(); // 如果名称被修改了，更新清单名称
                if (!(cleanName !== checklist.name && cleanName)) {
                  _context25.next = 60;
                  break;
                }
                _context25.prev = 51;
                _context25.next = 54;
                return updateChecklist(checklist.id, {
                  name: cleanName
                });
              case 54:
                console.log('[handleShareCodeImport] 已清理清单名称中的日期:', cleanName);
                _context25.next = 60;
                break;
              case 57:
                _context25.prev = 57;
                _context25.t1 = _context25["catch"](51);
                console.error('[handleShareCodeImport] 更新清单名称失败', _context25.t1);
                // 更新失败不影响导入流程
              case 60:
                if (!(checklist.items && Array.isArray(checklist.items))) {
                  _context25.next = 88;
                  break;
                }
                _iterator2 = _createForOfIteratorHelper(checklist.items);
                _context25.prev = 62;
                _iterator2.s();
              case 64:
                if ((_step2 = _iterator2.n()).done) {
                  _context25.next = 80;
                  break;
                }
                item = _step2.value;
                if (!(item.content && typeof item.content === 'string')) {
                  _context25.next = 78;
                  break;
                }
                // 移除内容开头的 [ ]、[√]、[x] 等标记
                cleanContent = item.content.replace(/^\[\s*\]\s*/, '') // 移除开头的 [ ]
                .replace(/^\[√\]\s*/, '') // 移除开头的 [√]
                .replace(/^\[x\]\s*/i, '') // 移除开头的 [x] 或 [X]
                .replace(/^\[X\]\s*/, '') // 移除开头的 [X]
                .trim(); // 如果内容被修改了，更新清单项
                if (!(cleanContent !== item.content && cleanContent)) {
                  _context25.next = 78;
                  break;
                }
                _context25.prev = 69;
                _context25.next = 72;
                return updateItem(checklist.id, item.id, {
                  content: cleanContent
                });
              case 72:
                console.log('[handleShareCodeImport] 已清理清单项内容:', cleanContent);
                _context25.next = 78;
                break;
              case 75:
                _context25.prev = 75;
                _context25.t2 = _context25["catch"](69);
                console.error('[handleShareCodeImport] 更新清单项内容失败', _context25.t2);
                // 更新失败不影响导入流程
              case 78:
                _context25.next = 64;
                break;
              case 80:
                _context25.next = 85;
                break;
              case 82:
                _context25.prev = 82;
                _context25.t3 = _context25["catch"](62);
                _iterator2.e(_context25.t3);
              case 85:
                _context25.prev = 85;
                _iterator2.f();
                return _context25.finish(85);
              case 88:
                _context25.next = 90;
                return _this25.loadChecklists();
              case 90:
                message = '导入成功';
                if (typeof data.importedCount === 'number') {
                  if (data.importedCount > 0) {
                    message = "\u5DF2\u5BFC\u5165 ".concat(data.importedCount, " \u6761\u884C\u7A0B");
                  } else {
                    message = '导入完成';
                  }
                }
                uni.showToast({
                  title: message,
                  icon: 'success',
                  duration: 3000
                });

                // 定位到导入的清单
                _this25.$nextTick( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24() {
                  var updatedChecklist, newIndex, retryIndex;
                  return _regenerator.default.wrap(function _callee24$(_context24) {
                    while (1) {
                      switch (_context24.prev = _context24.next) {
                        case 0:
                          _context24.next = 2;
                          return _this25.loadChecklists();
                        case 2:
                          // 查找导入的清单
                          updatedChecklist = _this25.myChecklists.find(function (l) {
                            return l.id === checklist.id;
                          });
                          if (!updatedChecklist) {
                            _context24.next = 27;
                            break;
                          }
                          console.log('[handleShareCodeImport] 找到导入的清单:', {
                            id: updatedChecklist.id,
                            name: updatedChecklist.name,
                            date: updatedChecklist.date,
                            selectedDate: _this25.selectedDate
                          });

                          // 如果清单的日期和当前选择的日期不一致，说明后端可能保存到了错误的日期
                          if (!(updatedChecklist.date && updatedChecklist.date !== _this25.selectedDate)) {
                            _context24.next = 10;
                            break;
                          }
                          console.warn('[handleShareCodeImport] 清单日期与选择的日期不一致，切换到清单的实际日期');
                          _this25.selectedDate = updatedChecklist.date;
                          _context24.next = 10;
                          return _this25.loadChecklists();
                        case 10:
                          newIndex = _this25.displayedLists.findIndex(function (l) {
                            return l.id === updatedChecklist.id;
                          });
                          if (!(newIndex >= 0)) {
                            _context24.next = 16;
                            break;
                          }
                          _this25.currentSwiperIndex = newIndex;
                          console.log('[handleShareCodeImport] 已定位到导入的清单，索引:', newIndex, '日期:', _this25.selectedDate, '清单实际日期:', updatedChecklist.date);
                          _context24.next = 25;
                          break;
                        case 16:
                          console.warn('[handleShareCodeImport] 未找到导入的清单，可能日期不匹配');
                          console.log('[handleShareCodeImport] 当前日期:', _this25.selectedDate, '清单日期:', updatedChecklist.date);
                          // 如果找不到，尝试切换到清单的实际日期
                          if (!(updatedChecklist.date && updatedChecklist.date !== _this25.selectedDate)) {
                            _context24.next = 25;
                            break;
                          }
                          console.log('[handleShareCodeImport] 尝试切换到清单的实际日期:', updatedChecklist.date);
                          _this25.selectedDate = updatedChecklist.date;
                          _context24.next = 23;
                          return _this25.loadChecklists();
                        case 23:
                          retryIndex = _this25.displayedLists.findIndex(function (l) {
                            return l.id === updatedChecklist.id;
                          });
                          if (retryIndex >= 0) {
                            _this25.currentSwiperIndex = retryIndex;
                            console.log('[handleShareCodeImport] 切换日期后找到清单，索引:', retryIndex);
                          }
                        case 25:
                          _context24.next = 29;
                          break;
                        case 27:
                          console.warn('[handleShareCodeImport] 未找到导入的清单，ID:', checklist.id);
                          console.log('[handleShareCodeImport] 当前所有清单:', _this25.myChecklists.map(function (l) {
                            return {
                              id: l.id,
                              name: l.name,
                              date: l.date
                            };
                          }));
                        case 29:
                        case "end":
                          return _context24.stop();
                      }
                    }
                  }, _callee24);
                })));
                _this25.showShareDialog = false;
                _context25.next = 98;
                break;
              case 97:
                throw new Error('导入失败：未获取到清单数据');
              case 98:
                _context25.next = 104;
                break;
              case 100:
                _context25.prev = 100;
                _context25.t4 = _context25["catch"](4);
                console.error('[handleShareCodeImport] 通过分享码导入失败', _context25.t4);
                // 检查错误信息，如果是分享人自己的清单，给出友好提示
                if (_context25.t4.message && (_context25.t4.message.includes('自己') || _context25.t4.message.includes('owner') || _context25.t4.message.includes('creator'))) {
                  uni.showToast({
                    title: '这是您自己分享的清单，无需导入',
                    icon: 'none',
                    duration: 2000
                  });
                } else {
                  uni.showToast({
                    title: _context25.t4.message || '导入失败',
                    icon: 'none'
                  });
                }
              case 104:
                _context25.prev = 104;
                _this25.loading = false;
                return _context25.finish(104);
              case 107:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, null, [[4, 100, 104, 107], [32, 42], [51, 57], [62, 82, 85, 88], [69, 75]]);
      }))();
    },
    // 导出清单：先选择日期和清单，再弹出导出方式
    exportList: function exportList() {
      var _this26 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                // 默认日期使用当前选中的日期，没有则使用今天
                _this26.exportDate = _this26.selectedDate || new Date().toISOString().split('T')[0];
                _this26.exportDateTemp = _this26.exportDate;
                _this26.exportSelectedChecklistId = '';
                _context26.next = 5;
                return _this26.loadExportChecklists(_this26.exportDate);
              case 5:
                // 如果当前 swiper 上有清单且日期匹配，默认选中当前清单，否则选中该日期下第一个清单
                if (_this26.currentList && _this26.currentList.id && _this26.currentList.date === _this26.exportDate) {
                  _this26.exportSelectedChecklistId = _this26.currentList.id;
                } else if (_this26.exportChecklists.length > 0) {
                  _this26.exportSelectedChecklistId = _this26.exportChecklists[0].id;
                }
                if (_this26.exportChecklists.length === 0) {
                  uni.showToast({
                    title: '该日期没有清单',
                    icon: 'none'
                  });
                }
                _this26.showExportDialog = true;
              case 8:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26);
      }))();
    },
    // 加载指定日期下的清单列表（用于导出）
    loadExportChecklists: function loadExportChecklists(date) {
      var _this27 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27() {
        var lists;
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.prev = 0;
                _this27.loading = true;
                _context27.next = 4;
                return apiMyChecklists({
                  date: date
                });
              case 4:
                lists = _context27.sent;
                _this27.exportChecklists = Array.isArray(lists) ? lists : [];
                _context27.next = 12;
                break;
              case 8:
                _context27.prev = 8;
                _context27.t0 = _context27["catch"](0);
                console.error('[loadExportChecklists] 加载清单列表失败', _context27.t0);
                _this27.exportChecklists = [];
              case 12:
                _context27.prev = 12;
                _this27.loading = false;
                return _context27.finish(12);
              case 15:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, null, [[0, 8, 12, 15]]);
      }))();
    },
    // 导出弹窗中，日期变更
    onExportDateChange: function onExportDateChange(e) {
      var _this28 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28() {
        var newDate;
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                newDate = e.detail.value;
                if (newDate) {
                  _context28.next = 3;
                  break;
                }
                return _context28.abrupt("return");
              case 3:
                _this28.exportDate = newDate;
                _this28.exportDateTemp = newDate;
                _this28.exportSelectedChecklistId = '';
                _context28.next = 8;
                return _this28.loadExportChecklists(newDate);
              case 8:
                if (_this28.exportChecklists.length > 0) {
                  _this28.exportSelectedChecklistId = _this28.exportChecklists[0].id;
                }
              case 9:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28);
      }))();
    },
    // 选择要导出的清单
    selectExportChecklist: function selectExportChecklist(list) {
      if (!list || !list.id) return;
      this.exportSelectedChecklistId = list.id;
    },
    // 导出为文本：调用接口，失败或无数据时使用本地导出
    exportListAsText: function exportListAsText() {
      var _this29 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
        var result, rawText, normalizedText, target, _target;
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                if (_this29.exportSelectedChecklistId) {
                  _context29.next = 3;
                  break;
                }
                uni.showToast({
                  title: '请选择清单',
                  icon: 'none'
                });
                return _context29.abrupt("return");
              case 3:
                _this29.showExportDialog = false;
                _context29.prev = 4;
                _this29.loading = true;
                _context29.next = 8;
                return exportChecklist(_this29.exportSelectedChecklistId, {
                  format: 'text'
                });
              case 8:
                result = _context29.sent;
                if (result && result.text) {
                  rawText = result.text || '';
                  normalizedText = rawText.replace(/\[(x|X)\]/g, '[√]').replace(/☑/g, '[√]').replace(/☐/g, '[ ]');
                  uni.setClipboardData({
                    data: normalizedText,
                    success: function success() {
                      uni.showToast({
                        title: '清单已复制到剪贴板',
                        icon: 'success'
                      });
                    }
                  });
                } else {
                  // 接口未返回文本时，使用本地导出逻辑（基于当前选中的清单）
                  target = _this29.exportChecklists.find(function (l) {
                    return l.id === _this29.exportSelectedChecklistId;
                  }) || _this29.displayedLists.find(function (l) {
                    return l.id === _this29.exportSelectedChecklistId;
                  });
                  _this29.exportListLocal(target);
                }
                _context29.next = 17;
                break;
              case 12:
                _context29.prev = 12;
                _context29.t0 = _context29["catch"](4);
                console.error('导出清单文本失败', _context29.t0);
                // 接口失败时，使用本地导出逻辑
                _target = _this29.exportChecklists.find(function (l) {
                  return l.id === _this29.exportSelectedChecklistId;
                }) || _this29.displayedLists.find(function (l) {
                  return l.id === _this29.exportSelectedChecklistId;
                });
                _this29.exportListLocal(_target);
              case 17:
                _context29.prev = 17;
                _this29.loading = false;
                return _context29.finish(17);
              case 20:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, null, [[4, 12, 17, 20]]);
      }))();
    },
    // 导出为图片：调用接口生成图片并保存到本地，相同接口失败时退化为文本复制
    exportListAsImage: function exportListAsImage() {
      var _this30 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30() {
        var result, target;
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (_this30.exportSelectedChecklistId) {
                  _context30.next = 3;
                  break;
                }
                uni.showToast({
                  title: '请选择清单',
                  icon: 'none'
                });
                return _context30.abrupt("return");
              case 3:
                _this30.showExportDialog = false;
                _context30.prev = 4;
                _this30.loading = true;
                _context30.next = 8;
                return exportChecklist(_this30.exportSelectedChecklistId, {
                  format: 'image'
                });
              case 8:
                result = _context30.sent;
                if (result && (result.imageUrl || result.imageBase64)) {
                  _this30.saveExportImage(result.imageUrl || result.imageBase64);
                } else if (result && result.text) {
                  // 后端暂未提供图片，仅有文本时，退化为文本复制
                  uni.setClipboardData({
                    data: result.text,
                    success: function success() {
                      uni.showToast({
                        title: '当前暂不支持图片导出，已复制文本',
                        icon: 'none'
                      });
                    }
                  });
                } else {
                  uni.showToast({
                    title: '暂无可导出的图片',
                    icon: 'none'
                  });
                }
                _context30.next = 17;
                break;
              case 12:
                _context30.prev = 12;
                _context30.t0 = _context30["catch"](4);
                console.error('导出清单图片失败', _context30.t0);
                // 图片导出失败时，退而求其次复制文本（基于当前选中的清单）
                target = _this30.exportChecklists.find(function (l) {
                  return l.id === _this30.exportSelectedChecklistId;
                }) || _this30.displayedLists.find(function (l) {
                  return l.id === _this30.exportSelectedChecklistId;
                });
                _this30.exportListLocal(target);
              case 17:
                _context30.prev = 17;
                _this30.loading = false;
                return _context30.finish(17);
              case 20:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, null, [[4, 12, 17, 20]]);
      }))();
    },
    // 本地导出（接口失败时的备用方案）
    exportListLocal: function exportListLocal(targetList) {
      var list = targetList || this.currentList;
      if (!list) return;
      var text = "\u3010".concat(list.name, "\u3011\n\u65E5\u671F\uFF1A").concat(list.date, "\n\n");
      (list.items || []).forEach(function (item, index) {
        var status = item.checked ? '[√]' : '[ ]';
        text += "".concat(index + 1, ". ").concat(status, " ").concat(item.content, "\n");
        if (item.note) {
          text += "   \u5907\u6CE8\uFF1A".concat(item.note, "\n");
        }
      });
      uni.setClipboardData({
        data: text,
        success: function success() {
          uni.showToast({
            title: '已复制到剪贴板',
            icon: 'success'
          });
        }
      });
    },
    // 保存导出图片
    saveExportImage: function saveExportImage(imageUrlOrBase64) {
      if (typeof imageUrlOrBase64 !== 'string' || !imageUrlOrBase64) {
        uni.showToast({
          title: '图片数据无效',
          icon: 'none'
        });
        return;
      }
      if (imageUrlOrBase64.startsWith('data:image')) {
        // dataURL 形式的 Base64 图片
        var base64 = imageUrlOrBase64.split(',')[1];
        var filePath = "".concat(wx.env.USER_DATA_PATH, "/checklist_").concat(Date.now(), ".png");
        var fs = wx.getFileSystemManager();
        fs.writeFile({
          filePath: filePath,
          data: base64,
          encoding: 'base64',
          success: function success() {
            uni.saveImageToPhotosAlbum({
              filePath: filePath,
              success: function success() {
                uni.showToast({
                  title: '图片已保存',
                  icon: 'success'
                });
              },
              fail: function fail() {
                uni.showToast({
                  title: '保存失败',
                  icon: 'none'
                });
              }
            });
          }
        });
      } else if (!imageUrlOrBase64.startsWith('http')) {
        // 纯 Base64 字符串（后端像你现在这样只返回 imageBase64）
        var _base = imageUrlOrBase64;
        var _filePath = "".concat(wx.env.USER_DATA_PATH, "/checklist_").concat(Date.now(), ".png");
        var _fs = wx.getFileSystemManager();
        _fs.writeFile({
          filePath: _filePath,
          data: _base,
          encoding: 'base64',
          success: function success() {
            uni.saveImageToPhotosAlbum({
              filePath: _filePath,
              success: function success() {
                uni.showToast({
                  title: '图片已保存',
                  icon: 'success'
                });
              },
              fail: function fail() {
                uni.showToast({
                  title: '保存失败',
                  icon: 'none'
                });
              }
            });
          }
        });
      } else {
        // URL 图片，需要先下载
        uni.downloadFile({
          url: imageUrlOrBase64,
          success: function success(res) {
            if (res.statusCode === 200) {
              uni.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function success() {
                  uni.showToast({
                    title: '图片已保存',
                    icon: 'success'
                  });
                },
                fail: function fail() {
                  uni.showToast({
                    title: '保存失败',
                    icon: 'none'
                  });
                }
              });
            }
          }
        });
      }
    },
    // 显示清单模板选择
    showTemplates: function showTemplates() {
      this.showTemplateDialog = true;
    },
    // 打开日期选择（全局）
    openDateDialog: function openDateDialog() {
      this.dateTemp = this.selectedDate;
      this.showDateDialog = true;
    },
    // 日期变更
    onDateChange: function onDateChange(e) {
      this.dateTemp = e.detail.value;
    },
    // 确认日期（全局）
    confirmDate: function confirmDate() {
      var _this31 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31() {
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                if (!_this31.dateTemp) {
                  _context31.next = 6;
                  break;
                }
                _this31.selectedDate = _this31.dateTemp;
                // 切换日期后重新加载清单
                _context31.next = 4;
                return _this31.loadChecklists();
              case 4:
                _this31.currentSwiperIndex = 0;
                uni.showToast({
                  title: '已切换日期',
                  icon: 'success'
                });
              case 6:
                _this31.showDateDialog = false;
              case 7:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31);
      }))();
    },
    // 重命名清单
    renameList: function renameList(list) {
      this.targetRenameList = list;
      this.renameTemp = list && list.name || '';
      this.showRenameDialog = true;
    },
    // 删除清单（点击左下角删除按钮）
    deleteList: function deleteList(list) {
      var _this32 = this;
      if (!list || !list.id) return;
      uni.showModal({
        title: '提示',
        content: "\u786E\u5B9A\u5220\u9664\u6E05\u5355\"".concat(list.name, "\"\u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002"),
        success: function () {
          var _success3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(res) {
            var deletedIndex;
            return _regenerator.default.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    if (!res.confirm) {
                      _context32.next = 19;
                      break;
                    }
                    _context32.prev = 1;
                    _this32.loading = true;
                    deletedIndex = _this32.currentSwiperIndex;
                    _context32.next = 6;
                    return deleteChecklist(list.id);
                  case 6:
                    _context32.next = 8;
                    return _this32.loadChecklists();
                  case 8:
                    // 调整当前索引：如果删除的是最后一个，显示前一个；如果删除后没有清单了，显示创建页面
                    if (_this32.displayedLists.length === 0) {
                      // 没有清单了，显示创建页面（swiperItems 会自动包含创建页面）
                      _this32.currentSwiperIndex = 0;
                    } else {
                      // 还有清单，调整索引
                      if (deletedIndex >= _this32.displayedLists.length) {
                        // 删除的是最后一个，显示前一个
                        _this32.currentSwiperIndex = Math.max(0, _this32.displayedLists.length - 1);
                      } else {
                        // 删除的不是最后一个，保持当前索引（因为后面的会前移）
                        _this32.currentSwiperIndex = deletedIndex;
                      }
                    }
                    uni.showToast({
                      title: '已删除',
                      icon: 'success'
                    });
                    _context32.next = 16;
                    break;
                  case 12:
                    _context32.prev = 12;
                    _context32.t0 = _context32["catch"](1);
                    console.error('删除清单失败', _context32.t0);
                    uni.showToast({
                      title: '删除失败',
                      icon: 'none'
                    });
                  case 16:
                    _context32.prev = 16;
                    _this32.loading = false;
                    return _context32.finish(16);
                  case 19:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, null, [[1, 12, 16, 19]]);
          }));
          function success(_x3) {
            return _success3.apply(this, arguments);
          }
          return success;
        }()
      });
    },
    confirmRename: function confirmRename() {
      var _this33 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33() {
        var name;
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                if (!(!_this33.targetRenameList || !_this33.targetRenameList.id)) {
                  _context33.next = 3;
                  break;
                }
                _this33.showRenameDialog = false;
                return _context33.abrupt("return");
              case 3:
                name = (_this33.renameTemp || '').trim();
                if (name) {
                  _context33.next = 7;
                  break;
                }
                uni.showToast({
                  title: '名称不能为空',
                  icon: 'none'
                });
                return _context33.abrupt("return");
              case 7:
                _context33.prev = 7;
                _this33.loading = true;
                _context33.next = 11;
                return updateChecklist(_this33.targetRenameList.id, {
                  name: name
                });
              case 11:
                // 更新成功
                _this33.targetRenameList.name = name;
                _this33.showRenameDialog = false;
                _this33.targetRenameList = null;
                uni.showToast({
                  title: '已重命名',
                  icon: 'success'
                });
                _context33.next = 21;
                break;
              case 17:
                _context33.prev = 17;
                _context33.t0 = _context33["catch"](7);
                console.error('重命名失败', _context33.t0);
                uni.showToast({
                  title: '重命名失败',
                  icon: 'none'
                });
              case 21:
                _context33.prev = 21;
                _this33.loading = false;
                return _context33.finish(21);
              case 24:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, null, [[7, 17, 21, 24]]);
      }))();
    },
    // 导入模板
    importTemplate: function importTemplate(template) {
      var _this34 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34() {
        var currentDateLists, result;
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                if (!(!template || !template.id)) {
                  _context34.next = 2;
                  break;
                }
                return _context34.abrupt("return");
              case 2:
                _context34.next = 4;
                return _this34.loadChecklists();
              case 4:
                // 检查当前日期的清单数量
                currentDateLists = _this34.displayedLists;
                if (!(currentDateLists.length >= 3)) {
                  _context34.next = 8;
                  break;
                }
                uni.showToast({
                  title: '每个日期最多3个清单',
                  icon: 'none'
                });
                return _context34.abrupt("return");
              case 8:
                _context34.prev = 8;
                _this34.loading = true;
                _context34.next = 12;
                return importFromTemplate(template.id, {
                  date: _this34.selectedDate
                });
              case 12:
                result = _context34.sent;
                if (!(result && result.id)) {
                  _context34.next = 21;
                  break;
                }
                _context34.next = 16;
                return _this34.loadChecklists();
              case 16:
                _this34.showTemplateDialog = false;
                uni.showToast({
                  title: '导入成功',
                  icon: 'success'
                });

                // 切换到新导入的清单
                _this34.$nextTick(function () {
                  var newIndex = _this34.displayedLists.findIndex(function (l) {
                    return l.id === result.id;
                  });
                  if (newIndex >= 0) {
                    _this34.currentSwiperIndex = newIndex;
                  }
                });
                _context34.next = 22;
                break;
              case 21:
                throw new Error('导入失败');
              case 22:
                _context34.next = 37;
                break;
              case 24:
                _context34.prev = 24;
                _context34.t0 = _context34["catch"](8);
                console.error('[importTemplate] 导入模板失败', _context34.t0);
                uni.showToast({
                  title: _context34.t0.message || '导入失败',
                  icon: 'none'
                });
                // 导入失败后也刷新列表，避免重复导入冲突顺序
                _context34.prev = 28;
                _context34.next = 31;
                return _this34.loadChecklists();
              case 31:
                console.log('[importTemplate] 导入失败后已刷新列表，确保数据同步');
                _context34.next = 37;
                break;
              case 34:
                _context34.prev = 34;
                _context34.t1 = _context34["catch"](28);
                console.error('[importTemplate] 刷新列表失败', _context34.t1);
              case 37:
                _context34.prev = 37;
                _this34.loading = false;
                return _context34.finish(37);
              case 40:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, null, [[8, 24, 37, 40], [28, 34]]);
      }))();
    },
    // 显示创建清单弹窗
    showCreateList: function showCreateList() {
      this.newListName = '';
      this.showCreateListDialog = true;
    },
    // 创建新清单
    createNewList: function createNewList() {
      var _this35 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35() {
        var currentDateLists, nextOrder, existingList, payload;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (_this35.newListName.trim()) {
                  _context35.next = 3;
                  break;
                }
                uni.showToast({
                  title: '请输入清单名称',
                  icon: 'none'
                });
                return _context35.abrupt("return");
              case 3:
                _context35.next = 5;
                return _this35.loadChecklists();
              case 5:
                // 检查当前日期的清单数量（基于最新数据）
                currentDateLists = _this35.displayedLists;
                if (!(currentDateLists.length >= 3)) {
                  _context35.next = 9;
                  break;
                }
                uni.showToast({
                  title: '每个日期最多3个清单',
                  icon: 'none'
                });
                return _context35.abrupt("return");
              case 9:
                // 计算下一个 order（基于最新列表）
                nextOrder = currentDateLists.length + 1; // 检查是否已存在相同日期和顺序的清单（避免重复提交）
                existingList = currentDateLists.find(function (list) {
                  return list.date === _this35.selectedDate && list.order === nextOrder;
                });
                if (!existingList) {
                  _context35.next = 17;
                  break;
                }
                console.warn('[createNewList] 检测到已存在相同日期和顺序的清单:', existingList);
                uni.showToast({
                  title: '该日期和顺序的清单已存在，请刷新后重试',
                  icon: 'none',
                  duration: 2000
                });
                // 刷新列表以同步最新状态
                _context35.next = 16;
                return _this35.loadChecklists();
              case 16:
                return _context35.abrupt("return");
              case 17:
                _context35.prev = 17;
                _this35.loading = true;
                payload = {
                  name: _this35.newListName.trim(),
                  date: _this35.selectedDate,
                  order: nextOrder,
                  items: [] // 确保 items 是空数组，不能是 null
                };
                _context35.next = 22;
                return createChecklist(payload);
              case 22:
                _context35.next = 24;
                return _this35.loadChecklists();
              case 24:
                // 刷新列表

                _this35.showCreateListDialog = false;
                _this35.newListName = '';

                // 延迟切换，等待DOM更新
                _this35.$nextTick(function () {
                  if (_this35.displayedLists.length > 0) {
                    _this35.currentSwiperIndex = _this35.displayedLists.length - 1;
                  }
                });
                uni.showToast({
                  title: '创建成功',
                  icon: 'success'
                });
                _context35.next = 36;
                break;
              case 30:
                _context35.prev = 30;
                _context35.t0 = _context35["catch"](17);
                console.error('创建清单失败', _context35.t0);
                uni.showToast({
                  title: _context35.t0.message || '创建失败',
                  icon: 'none'
                });
                _context35.next = 36;
                return _this35.loadChecklists();
              case 36:
                _context35.prev = 36;
                _this35.loading = false;
                return _context35.finish(36);
              case 39:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, null, [[17, 30, 36, 39]]);
      }))();
    },
    // 页面跳转
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

      // 如果是当前页，不跳转
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
  },
  // 微信分享功能
  onShareAppMessage: function onShareAppMessage(options) {
    // 确保所有弹窗都已关闭（在 prepareShareForPreview 中已经关闭，这里再次确保）
    this.showShareSelectDialog = false;
    this.showShareDialog = false;

    // 优先使用选中的清单ID
    var checklistId = this.shareSelectedChecklistId || this.currentList && this.currentList.id;

    // 如果选中的清单且有分享码，使用分享码分享
    if (checklistId && this.shareCode) {
      // 找到清单名称
      var checklist = this.shareSelectChecklists.find(function (l) {
        return l.id === checklistId;
      }) || this.currentList || {};
      var title = checklist.name || '我的清单';
      var path = "/pages/checklist/index?code=".concat(encodeURIComponent(this.shareCode));
      console.log('[onShareAppMessage] 使用分享码分享', {
        checklistId: checklistId,
        shareCode: this.shareCode,
        path: path
      });
      return {
        title: title,
        path: path
      };
    }

    // 如果没有分享码但有清单，尝试同步获取（但分享是同步的，无法等待异步）
    // 如果用户从分享弹窗点击分享，分享码应该已经准备好了
    if (checklistId) {
      var _checklist = this.shareSelectChecklists.find(function (l) {
        return l.id === checklistId;
      }) || this.currentList || {};
      var _title = _checklist.name || '我的清单';

      // 如果分享码还没准备好，提示用户
      if (!this.shareCode) {
        console.warn('[onShareAppMessage] 分享码未生成，尝试异步生成', checklistId);
        // 尝试异步生成分享码（不影响当前分享）
        this.prepareShareCodeForChecklist(checklistId).then(function (success) {
          if (success) {
            console.log('[onShareAppMessage] 分享码生成成功，但当前分享已发出，建议用户重新分享');
          }
        }).catch(function () {
          // 静默失败，不影响分享流程
        });

        // 返回不带 code 的路径，好友点击后无法自动导入，但可以正常打开页面
        return {
          title: _title,
          path: '/pages/checklist/index'
        };
      }

      // 有分享码，使用分享码分享
      var _path = "/pages/checklist/index?code=".concat(encodeURIComponent(this.shareCode));
      return {
        title: _title,
        path: _path
      };
    }

    // 默认分享
    return {
      title: '陕游记 - 我的清单',
      path: '/pages/checklist/index'
    };
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 165:
/*!*******************************************************************************************************************!*\
  !*** C:/myprojects2/frontend/pages/checklist/index.vue?vue&type=style&index=0&id=743ed740&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_743ed740_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.4.66.2025051912/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=743ed740&scoped=true&lang=scss& */ 166);
/* harmony import */ var _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_743ed740_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_743ed740_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_743ed740_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_743ed740_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_4_66_2025051912_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_743ed740_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 166:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/myprojects2/frontend/pages/checklist/index.vue?vue&type=style&index=0&id=743ed740&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[158,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/checklist/index.js.map
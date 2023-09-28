/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Quicksand-VariableFont_wght.ttf */ \"./src/fonts/Quicksand-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/PlayfairDisplay-VariableFont_wght.ttf */ \"./src/fonts/PlayfairDisplay-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! img/img1.jpg */ \"./src/img/img1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! img/img3.jpg */ \"./src/img/img3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! img/img5.jpg */ \"./src/img/img5.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! img/img7.jpg */ \"./src/img/img7.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Quicksand\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: \"Playfair Display\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#header {\n  font-family: \"Quicksand\";\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 36px;\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0.8; /* Прозрачност на header */\n  z-index: 2;\n}\n\n#header ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n\n#header li {\n  cursor: pointer;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style-type: none;\n  margin-top: 5px;\n  padding-right: 20px;\n}\n#header li:hover {\n  color: rgb(240, 179, 122);\n}\n#header li:first-child {\n  font-family: \"Playfair Display\";\n  font-size: 30px;\n  margin-top: 0;\n  padding-right: 20%;\n  color: rgb(240, 179, 122);\n}\n.fab.fa-facebook {\n  margin-left: 50vh;\n}\n.fab.fa-facebook,\n.fab.fa-instagram,\n.fab.fa-twitter {\n  transition: transform 0.3s ease-in-out;\n  color: white;\n  cursor: pointer;\n  font-size: 25px;\n}\n\n.fab.fa-facebook:hover,\n.fab.fa-instagram:hover,\n.fab.fa-twitter:hover {\n  color: rgb(240, 179, 122);\n  transform: scale(1.5);\n}\n\n#home {\n  color: white;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  z-index: 1;\n}\n\n#home h3 {\n  font-family: \"Playfair Display\";\n  font-size: 4vh;\n  margin-bottom: 10px;\n  padding-top: 15%;\n  padding-left: 10%;\n  color: rgb(240, 179, 122);\n}\n\n#home h1 {\n  font-family: \"Playfair Display\";\n  font-size: 12vh;\n  margin-bottom: 20px;\n  padding-left: 10%;\n}\n\n#home button:first-of-type {\n  margin-left: 10%;\n}\n\n#home button {\n  background-color: rgba(0, 0, 0, 0.2); /* Прозрачен фон */\n  transition: transform 0.3s ease-in-out;\n  color: white;\n  border: 1px solid rgb(240, 179, 122);\n  border-radius: 3px;\n  cursor: pointer;\n  margin: 10px;\n  font-size: 12px;\n  padding: 20px;\n}\n\n#home button:hover {\n  transform: scale(1.2);\n  color: rgb(240, 179, 122);\n}\n\n/* -------------------------Start Menu-------------------------------*/\n\n#menu {\n  display: flex;\n  color: white;\n  background-color: #f5f5f5;\n  padding: 50px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-repeat: repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  height: 120vh;\n  width: 100%;\n  z-index: 1;\n  padding-left: 0;\n  padding-right: 0;\n}\n.menu {\n  font-family: \"Quicksand\";\n  display: grid;\n  grid-gap: 10px;\n  padding: 0;\n  max-width: 100%;\n  margin: 0 auto;\n  margin-top: 6%;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr 1fr 6fr;\n  padding: 20px;\n  padding-bottom: 50px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.menu h1 {\n  font-family: \"Playfair Display\";\n  grid-area: 1/1/1/4;\n  font-size: 36px;\n  justify-content: center;\n  display: flex;\n}\n.menu h5 {\n  display: grid;\n  font-family: \"Playfair Display\";\n  grid-area: 2/1/2/4;\n  font-style: italic;\n  align-items: center;\n  font-size: 15px;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.menu p {\n  display: grid;\n  font-family: \"Playfair Display\";\n  grid-area: 2/1/2/4;\n  font-size: 15px;\n  font-style: italic;\n  align-items: center;\n  color: rgb(240, 179, 122);\n  padding-left: 20px;\n}\n\n.steakMenu {\n  grid-area: 3/1/3/1;\n}\n.potatoesMenu {\n  grid-area: 3/2/3/2;\n}\n.drinksMenu {\n  grid-area: 3/3/3/3;\n}\n.menu li {\n  list-style-type: none;\n  padding: 5px;\n  font-size: 23px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.menu li:first-child {\n  margin-bottom: 20px;\n  font-family: \"Playfair Display\";\n  font-size: 25px;\n  color: white;\n}\n/* -------------------------End Menu-------------------------------*/\n\n/* -------------------------Start Contact-------------------------------*/\n#contact {\n  color: white;\n  background-color: #f5f5f5;\n  padding: 50px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  height: 120vh;\n  width: 100%;\n  z-index: 1;\n}\n#contact h1 {\n  grid-area: \"h1\";\n  font-family: \"Playfair Display\";\n  font-size: 36px;\n  display: flex;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n\n.contact {\n  font-family: \"Quicksand\";\n  padding-top: 6%;\n  list-style-type: none;\n}\n.contact ul {\n  color: rgb(240, 179, 122);\n  font-family: \"Playfair Display\";\n  padding-bottom: 20px;\n  font-size: 25px;\n}\n.contact li {\n  padding: 10px;\n  font-size: 18px;\n  padding-left: 0;\n}\n\n/* -------------------------Ende Contact-------------------------------*/\n\n/* -------------------------Start Book Table-------------------------------*/\n\n#bookTable {\n  color: white;\n  font-family: \"Quicksand\";\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n  padding: 50px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  z-index: 1;\n  align-items: center;\n  font-size: 20px;\n  padding-top: 6%;\n}\n/* .bookTable {\n  display: grid;\n  justify-content: center;\n} */\nform {\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n  max-width: 30%;\n}\n\ninput {\n  font-family: \"Quicksand\";\n  padding: 10px;\n  font-size: 20px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.bookTable h1 {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-family: \"Playfair Display\";\n  font-size: 36px;\n}\n.bookTable p {\n  color: rgb(240, 179, 122);\n  padding-bottom: 30px;\n}\n.submitButton {\n  background-color: rgba(0, 0, 0, 0.4);\n  transition: transform 0.3s ease-in-out;\n  color: white;\n  border: 1px solid rgb(240, 179, 122);\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 13px;\n  padding: 20px;\n}\n.submitButton:hover {\n  transform: scale(1.2);\n  color: rgb(240, 179, 122);\n}\n\n/* -------------------------Ende Book Table-------------------------------*/\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showSection: () => (/* binding */ showSection)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _moduls_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/nav */ \"./src/moduls/nav.js\");\n/* harmony import */ var _moduls_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/home */ \"./src/moduls/home.js\");\n/* harmony import */ var _moduls_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/menu */ \"./src/moduls/menu.js\");\n/* harmony import */ var _moduls_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/contact */ \"./src/moduls/contact.js\");\n/* harmony import */ var _moduls_bookTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/bookTable */ \"./src/moduls/bookTable.js\");\n\n\n\n\n\n\n\n(0,_moduls_nav__WEBPACK_IMPORTED_MODULE_1__.Navigation)();\n(0,_moduls_home__WEBPACK_IMPORTED_MODULE_2__.Home)();\n(0,_moduls_menu__WEBPACK_IMPORTED_MODULE_3__.Menu)();\n(0,_moduls_contact__WEBPACK_IMPORTED_MODULE_4__.Contact)();\n(0,_moduls_bookTable__WEBPACK_IMPORTED_MODULE_5__.BookTable)();\nconst content = document.querySelector(\"#content\");\n\nfunction showSection(sectionId) {\n  const sections = content.querySelectorAll(\"section\");\n  sections.forEach((section) => {\n    section.style.display = \"none\";\n  });\n\n  const targetSection = document.getElementById(sectionId);\n  if (targetSection) {\n    targetSection.style.display = \"block\";\n  }\n}\nconst ul = document.querySelector(\".liste\");\nul.addEventListener(\"click\", (e) => {\n  let targetId = e.target.textContent.toLowerCase();\n  if (targetId == \"Steak House Johny\".toLowerCase()) {\n    targetId = \"home\";\n  }\n  if (targetId == \"Book Table\".toLowerCase()) {\n    targetId = \"bookTable\";\n  }\n\n  showSection(targetId);\n});\nshowSection(\"home\");\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/moduls/bookTable.js":
/*!*********************************!*\
  !*** ./src/moduls/bookTable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookTable: () => (/* binding */ BookTable)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/moduls/functions.js\");\n\r\n\r\nfunction BookTable() {\r\n  const content = document.querySelector(\"#content\");\r\n  const bookTableSection = document.createElement(\"section\");\r\n  bookTableSection.id = \"bookTable\";\r\n  const bookTable = document.createElement(\"div\");\r\n  bookTable.classList.add(\"bookTable\");\r\n  const bookTableHeader = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\"h1\", \"p\"]);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(bookTableHeader, [\"Book Table\", \"Do you want to book today?\"]);\r\n  content.appendChild(bookTableSection);\r\n  bookTableSection.appendChild(bookTable);\r\n  bookTable.append(...bookTableHeader);\r\n  const reservationForm = document.createElement(\"form\");\r\n  const nameLabel = document.createElement(\"label\");\r\n  nameLabel.textContent = \"Your Name: \";\r\n\r\n  const nameInput = document.createElement(\"input\");\r\n  nameInput.setAttribute(\"type\", \"text\");\r\n  nameInput.setAttribute(\"name\", \"name\");\r\n\r\n  const dateLabel = document.createElement(\"label\");\r\n  dateLabel.textContent = \"Date: \";\r\n  const dateInput = document.createElement(\"input\");\r\n  dateInput.setAttribute(\"type\", \"date\");\r\n  dateInput.setAttribute(\"name\", \"date\");\r\n\r\n  const timeLabel = document.createElement(\"label\");\r\n  timeLabel.textContent = \"Time: \";\r\n  const timeInput = document.createElement(\"input\");\r\n  timeInput.setAttribute(\"type\", \"time\");\r\n  timeInput.setAttribute(\"name\", \"time\");\r\n\r\n  const submitButton = document.createElement(\"input\");\r\n  submitButton.classList.add(\"submitButton\");\r\n  submitButton.setAttribute(\"type\", \"submit\");\r\n  submitButton.setAttribute(\"value\", \"SUBMIT\");\r\n  bookTable.appendChild(reservationForm);\r\n  reservationForm.appendChild(nameLabel);\r\n  reservationForm.appendChild(nameInput);\r\n  reservationForm.appendChild(dateLabel);\r\n  reservationForm.appendChild(dateInput);\r\n  reservationForm.appendChild(timeLabel);\r\n  reservationForm.appendChild(timeInput);\r\n\r\n  reservationForm.appendChild(submitButton);\r\n}\r\n\r\n/* reservationForm.addEventListener(\"submit\", function (e) {\r\n  e.preventDefault();\r\n  // Тук можете да добавите логика за обработка на резервацията\r\n  alert(\"Reservation submitted!\");\r\n}); */\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/moduls/bookTable.js?");

/***/ }),

/***/ "./src/moduls/contact.js":
/*!*******************************!*\
  !*** ./src/moduls/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Contact: () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/moduls/functions.js\");\n\r\n\r\nfunction Contact() {\r\n  const content = document.querySelector(\"#content\");\r\n  const contactSection = document.createElement(\"section\");\r\n  contactSection.id = \"contact\";\r\n  const contact = document.createElement(\"div\");\r\n  contact.classList.add(\"contact\");\r\n  const contactHeader = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\"h1\"]);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(contactHeader, [\"Contact Us\"]);\r\n  const navLeft = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\"ul\", \"li\", \"li\", \"li\", \"li\", \"li\", \"li\"]);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(navLeft, [\r\n    \"Dine with us\",\r\n    \"Phone: 0316 / 0123456789\",\r\n    \"Email: steakhousejohny@gmail.com\",\r\n    \"Bruckerstrasse 7/9\",\r\n    \"8101 Gratkorn\",\r\n    \"Sunday-Thursday 11am-9pm\",\r\n    \"Friday & Saturday 11am-10pm\",\r\n  ]);\r\n  const navRight = document.createElement(\"div\");\r\n  const googleMap = document.getElementById(\"googleMap\");\r\n  googleMap.classList.toggle(\"hide\");\r\n  navRight.appendChild(googleMap);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.expandHtml)(contact, contactHeader);\r\n  content.appendChild(contactSection);\r\n  contactSection.appendChild(contact);\r\n  contact.append(...navLeft, navRight);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/moduls/contact.js?");

/***/ }),

/***/ "./src/moduls/functions.js":
/*!*********************************!*\
  !*** ./src/moduls/functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTags: () => (/* binding */ createTags),\n/* harmony export */   expandHtml: () => (/* binding */ expandHtml),\n/* harmony export */   nav: () => (/* binding */ nav)\n/* harmony export */ });\nfunction createTags(htmlTags) {\r\n  let tags = [];\r\n  for (let item of htmlTags) {\r\n    const tag = document.createElement(item);\r\n    tags.push(tag);\r\n  }\r\n  return tags;\r\n}\r\nfunction nav(elements, texts) {\r\n  if (elements.length === texts.length) {\r\n    for (let i = 0; i < elements.length; i++) {\r\n      elements[i].textContent = texts[i];\r\n    }\r\n  }\r\n}\r\nfunction expandHtml(expand, tags) {\r\n  for (let item of tags) {\r\n    expand.appendChild(item);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/moduls/functions.js?");

/***/ }),

/***/ "./src/moduls/home.js":
/*!****************************!*\
  !*** ./src/moduls/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/moduls/functions.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n\r\nfunction Home() {\r\n  const content = document.querySelector(\"#content\");\r\n  const homeSection = document.createElement(\"section\");\r\n  homeSection.id = \"home\";\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"container\");\r\n  const home = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\"h3\", \"h1\", \"button\", \"button\"]);\r\n  const menuButton = home[2];\r\n  const bookTableButton = home[3];\r\n  menuButton.addEventListener(\"click\", () => {\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_1__.showSection)(\"menu\");\r\n  });\r\n  bookTableButton.addEventListener(\"click\", () => {\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_1__.showSection)(\"bookTable\");\r\n  });\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(home, [\"Welcome to Johny\", \"Steakhouse and Bar\", \"MENU\", \"BOOK TABLE\"]);\r\n  content.appendChild(homeSection);\r\n  homeSection.appendChild(container);\r\n  container.append(...home);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/moduls/home.js?");

/***/ }),

/***/ "./src/moduls/menu.js":
/*!****************************!*\
  !*** ./src/moduls/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/moduls/functions.js\");\n\r\n\r\nfunction Menu() {\r\n  const content = document.querySelector(\"#content\");\r\n  const menuSection = document.createElement(\"section\");\r\n  menuSection.id = \"menu\";\r\n  const menu = document.createElement(\"div\");\r\n  menu.classList.add(\"menu\");\r\n\r\n  // Haupt Menu\r\n  const hauptMenu = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\"h1\", \"h5\"]);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(hauptMenu, [\r\n    \"Our Menu\",\r\n    \"Our steaks have been dry aged on the bone for at least 8 weeks. They are grilled at 1.000°C, giving them unique roasted flavors. All dry aged steaks will be percut in the kitchen, served on the bone with hot brown butter.\",\r\n  ]);\r\n\r\n  // Steak Menu\r\n  const steakMenu = document.createElement(\"ul\");\r\n  steakMenu.classList.add = \"steakMenu\";\r\n  const steakItems = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\r\n    \"li\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n  ]);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(steakItems, [\r\n    \"DRY AGED BEEF\",\r\n    \"Porterhouse\",\r\n    \"Seasoned and slow-roasted for hours to achieve peak tenderness and flavor\",\r\n    \"Parmesan Crusted Sirloin\",\r\n    \"A 12oz Sirloin topped with our Garlic & Parmesan crust\",\r\n    \"Bone-In New York Strip\",\r\n    \"A thick 12 oz. cut, perfectly aged and marbled\",\r\n    \"Bone-In Rib-Eye\",\r\n    \"A 14 oz. cut, aged and bursting with flavor, grilled to perfection\",\r\n    \"Porter House Steak\",\r\n    \"A hearty 20 oz. cut, combining New York strip and tender filet in one\",\r\n    \"Zotter Filet\",\r\n    \"Hand-trimmed filet, naturally-aged and tender\",\r\n  ]);\r\n\r\n  // Potatoes Menu\r\n  const potatoesMenu = document.createElement(\"ul\");\r\n  potatoesMenu.classList.add(\"potatoesMenu\");\r\n  const potatoesItems = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\r\n    \"li\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n  ]);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(potatoesItems, [\r\n    \"POTATOES\",\r\n    \"Potato Skins\",\r\n    \"Potato halves topped with cheese, bacon, and chives, served with sour cream\",\r\n    \"Baked\",\r\n    \"A one-pound potato, fully loaded\",\r\n    \"Mashed\",\r\n    \"Creamy potatoes with subtle hints of roasted garlic\",\r\n    \"Au Gratin\",\r\n    \"Sliced Idaho potatoes smothered in a three-cheese sauce\",\r\n    \"Hash Brown Casserole\",\r\n    \"Crispy shredded potatoes with a golden crust, baked to perfection\",\r\n    \"Sweet Potato Fries\",\r\n    \"Thinly sliced sweet potatoes, seasoned and baked until crispy\",\r\n  ]);\r\n\r\n  // Drinks Menu\r\n  const drinksMenu = document.createElement(\"ul\");\r\n  drinksMenu.classList.add(\"drinksMenu\");\r\n  const drinksItems = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\r\n    \"li\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n    \"li\",\r\n    \"p\",\r\n  ]);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(drinksItems, [\r\n    \"DRINKS\",\r\n    \"Yazoo Gerst Amber Ale\",\r\n    \"Smooth, malty amber ale with a hint of hops\",\r\n    \"Apple Cider Bourbon\",\r\n    \"Crisp apple cider meets smoky bourbon\",\r\n    \"Bearded Iris Homestyle IPA\",\r\n    \"Hoppy IPA with citrus and tropical notes\",\r\n    \"Nashville Brewing Co. Lager\",\r\n    \"Clean and crisp classic lager\",\r\n    \"Turtle Anarchy Brewing Co. Portly Stout\",\r\n    \"Rich, velvety stout with coffee and chocolate tones\",\r\n    \"Heineken 0.0\",\r\n    \"Non-alcoholic version of the classic Heineken lager\",\r\n  ]);\r\n\r\n  content.appendChild(menuSection);\r\n  menuSection.appendChild(menu);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.expandHtml)(menu, hauptMenu);\r\n  menu.appendChild(steakMenu);\r\n  menu.appendChild(potatoesMenu);\r\n  menu.appendChild(drinksMenu);\r\n\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.expandHtml)(steakMenu, steakItems);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.expandHtml)(potatoesMenu, potatoesItems);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.expandHtml)(drinksMenu, drinksItems);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/moduls/menu.js?");

/***/ }),

/***/ "./src/moduls/nav.js":
/*!***************************!*\
  !*** ./src/moduls/nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/moduls/functions.js\");\n\r\n\r\nfunction Navigation() {\r\n  const content = document.querySelector(\"#content\");\r\n  const header = document.createElement(\"header\");\r\n  header.id = \"header\";\r\n  const navContainer = document.createElement(\"nav\");\r\n  navContainer.classList.add(\"nav-container\");\r\n  const ul = document.createElement(\"ul\");\r\n  ul.classList.add(\"liste\");\r\n  const menuListe = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\"li\", \"li\", \"li\", \"li\", \"li\"]);\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.nav)(menuListe, [\r\n    \"Steak House Johny\",\r\n    \"Home\",\r\n    \"Menu\",\r\n    \"Book Table\",\r\n    \"Contact\",\r\n  ]);\r\n  const socialMediaLinks = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTags)([\"li\", \"li\", \"li\"]);\r\n  socialMediaLinks[0].innerHTML =\r\n    '<a href=\"https://www.facebook.com\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a>';\r\n  socialMediaLinks[1].innerHTML =\r\n    '<a href=\"https://instagram.com\" target=\"_blank\"><i class=\"fab fa-instagram\"></i>';\r\n  socialMediaLinks[2].innerHTML =\r\n    '<a href=\"https://www.twitter.com\" target=\"_blank\"><i class=\"fab fa-twitter\"></i>';\r\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.expandHtml)(ul, menuListe.concat(socialMediaLinks));\r\n  navContainer.appendChild(ul);\r\n  header.appendChild(navContainer);\r\n  content.appendChild(header);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/moduls/nav.js?");

/***/ }),

/***/ "./src/fonts/PlayfairDisplay-VariableFont_wght.ttf":
/*!*********************************************************!*\
  !*** ./src/fonts/PlayfairDisplay-VariableFont_wght.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20240034b80f50c3ad00.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/PlayfairDisplay-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/fonts/Quicksand-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/Quicksand-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf52df73d8529b4815ed.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Quicksand-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/img/img1.jpg":
/*!**************************!*\
  !*** ./src/img/img1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c13e089f942a92964612.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/img1.jpg?");

/***/ }),

/***/ "./src/img/img3.jpg":
/*!**************************!*\
  !*** ./src/img/img3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9f1d06f0687b55b4849.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/img3.jpg?");

/***/ }),

/***/ "./src/img/img5.jpg":
/*!**************************!*\
  !*** ./src/img/img5.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ed2d1f795552c0cad5c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/img5.jpg?");

/***/ }),

/***/ "./src/img/img7.jpg":
/*!**************************!*\
  !*** ./src/img/img7.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b9e952586cdda74fafb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/img7.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
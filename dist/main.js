/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before,\n*::after {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-component-clr: rgb(6, 6, 27);\n    --off-white-clr: rgb(255, 255, 255);\n    --alt-button-clr: #248d9e;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding-top: 40px;\n    background-color: var(--main-component-clr);\n    width: 100%;\n}\n\n.search-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.search-container > input {\n    padding: 7px 12px;\n    outline: none;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border: none;\n    background-color: var(--off-white-clr);\n}\n\n.search-bg {\n    display: flex;\n    background-color: var(--alt-button-clr);\n    height: 100%;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    transition: 250ms;\n}\n\n.search-bg:hover {\n    background-color: #1d7280;\n}\n\n.search-container > button,\n.search-bg > img {\n    background: none;\n    border-radius: 5px;\n    border: none;\n    color: white;\n    padding: 0 10px;\n    width: 40px;\n    cursor: pointer;\n    font-weight: bold;\n    filter: invert(91%) sepia(39%) saturate(0%) hue-rotate(137deg) brightness(111%) contrast(101%);\n    transition: 200ms;\n}\n\n.temp-toggle {\n    display: flex;\n    gap: 10px;\n    /* height: 1%; */\n    position: absolute;\n    top: -30px;\n}\n.temp-toggle > .celsius-radio,\n.temp-toggle > .fahrenheit-radio {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    height: 100%;\n    width: 30px;\n    color: var(--off-white-clr);\n    background: var(--main-component-clr);\n    background-color: var(--alt-button-clr);\n    padding: 0 2px;\n    cursor: pointer;\n    font-weight: bold;\n    position: relative;\n}\n\n.temp-toggle > .celsius-radio::after,\n.temp-toggle > .fahrenheit-radio::after {\n    content: '';\n    width: 0;\n    height: 3px;\n    background-color: var(--alt-button-clr);\n    position: absolute;\n    border-radius: 3px;\n    /* bottom: 2px; */\n    bottom: -8px;\n    transition: 250ms;\n}\n\n.temp-toggle > .celsius-radio.active::after,\n.temp-toggle > .fahrenheit-radio.active::after {\n    width: 100%;\n}\n\n/* .search-container > .celsius-radio {\n    position: absolute;\n    right: 50px;\n}\n\n.search-container > .fahrenheit-radio {\n    position: absolute;\n    right: 85px;\n} */\n\n.display-container {\n    width: 90%;\n    border-radius: 4px;\n    border-left: solid 5px var(--alt-button-clr);\n    /* background-color: var(--alt-button-clr); */\n    margin-bottom: 25px;\n    padding: 15px 15px;\n    position: relative;\n}\n.display-container > .display {\n    color: var(--off-white-clr);\n    font-weight: bold;\n    font-size: 3rem;\n}\n\np {\n    padding: 5px 0;\n}\n.display-container > .display-description {\n    font-weight: bold;\n}\n\n.display-container > .display-location,\n.display-container > .display-description,\n.display-container > .display-humidity,\n.display-container > .display-wind {\n    color: var(--off-white-clr);\n}\n\n.display-container > .display-humidity,\n.display-container > .display-wind {\n    font-size: 0.8rem;\n}\n\n.weather-gif {\n    width: 100%;\n}\n\n.refresh-icon {\n    opacity: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 50px;\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(44deg) brightness(102%) contrast(103%);\n    transition: 100ms;\n}\n\n.refresh-icon.visible {\n    opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,yBAAyB;IACzB,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,iBAAiB;IACjB,2CAA2C;IAC3C,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,YAAY;IACZ,4BAA4B;IAC5B,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,8FAA8F;IAC9F,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;AACA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,qCAAqC;IACrC,uCAAuC;IACvC,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,QAAQ;IACR,WAAW;IACX,uCAAuC;IACvC,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,WAAW;AACf;;AAEA;;;;;;;;GAQG;;AAEH;IACI,UAAU;IACV,kBAAkB;IAClB,4CAA4C;IAC5C,6CAA6C;IAC7C,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;AACA;IACI,iBAAiB;AACrB;;AAEA;;;;IAII,2BAA2B;AAC/B;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,+FAA+F;IAC/F,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd","sourcesContent":["*, *::before,\n*::after {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-component-clr: rgb(6, 6, 27);\n    --off-white-clr: rgb(255, 255, 255);\n    --alt-button-clr: #248d9e;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding-top: 40px;\n    background-color: var(--main-component-clr);\n    width: 100%;\n}\n\n.search-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.search-container > input {\n    padding: 7px 12px;\n    outline: none;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border: none;\n    background-color: var(--off-white-clr);\n}\n\n.search-bg {\n    display: flex;\n    background-color: var(--alt-button-clr);\n    height: 100%;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    transition: 250ms;\n}\n\n.search-bg:hover {\n    background-color: #1d7280;\n}\n\n.search-container > button,\n.search-bg > img {\n    background: none;\n    border-radius: 5px;\n    border: none;\n    color: white;\n    padding: 0 10px;\n    width: 40px;\n    cursor: pointer;\n    font-weight: bold;\n    filter: invert(91%) sepia(39%) saturate(0%) hue-rotate(137deg) brightness(111%) contrast(101%);\n    transition: 200ms;\n}\n\n.temp-toggle {\n    display: flex;\n    gap: 10px;\n    /* height: 1%; */\n    position: absolute;\n    top: -30px;\n}\n.temp-toggle > .celsius-radio,\n.temp-toggle > .fahrenheit-radio {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    height: 100%;\n    width: 30px;\n    color: var(--off-white-clr);\n    background: var(--main-component-clr);\n    background-color: var(--alt-button-clr);\n    padding: 0 2px;\n    cursor: pointer;\n    font-weight: bold;\n    position: relative;\n}\n\n.temp-toggle > .celsius-radio::after,\n.temp-toggle > .fahrenheit-radio::after {\n    content: '';\n    width: 0;\n    height: 3px;\n    background-color: var(--alt-button-clr);\n    position: absolute;\n    border-radius: 3px;\n    /* bottom: 2px; */\n    bottom: -8px;\n    transition: 250ms;\n}\n\n.temp-toggle > .celsius-radio.active::after,\n.temp-toggle > .fahrenheit-radio.active::after {\n    width: 100%;\n}\n\n/* .search-container > .celsius-radio {\n    position: absolute;\n    right: 50px;\n}\n\n.search-container > .fahrenheit-radio {\n    position: absolute;\n    right: 85px;\n} */\n\n.display-container {\n    width: 90%;\n    border-radius: 4px;\n    border-left: solid 5px var(--alt-button-clr);\n    /* background-color: var(--alt-button-clr); */\n    margin-bottom: 25px;\n    padding: 15px 15px;\n    position: relative;\n}\n.display-container > .display {\n    color: var(--off-white-clr);\n    font-weight: bold;\n    font-size: 3rem;\n}\n\np {\n    padding: 5px 0;\n}\n.display-container > .display-description {\n    font-weight: bold;\n}\n\n.display-container > .display-location,\n.display-container > .display-description,\n.display-container > .display-humidity,\n.display-container > .display-wind {\n    color: var(--off-white-clr);\n}\n\n.display-container > .display-humidity,\n.display-container > .display-wind {\n    font-size: 0.8rem;\n}\n\n.weather-gif {\n    width: 100%;\n}\n\n.refresh-icon {\n    opacity: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 50px;\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(44deg) brightness(102%) contrast(103%);\n    transition: 100ms;\n}\n\n.refresh-icon.visible {\n    opacity: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DomElements.js":
/*!****************************!*\
  !*** ./src/DomElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearElements": () => (/* binding */ clearElements),
/* harmony export */   "getLocationInput": () => (/* binding */ getLocationInput),
/* harmony export */   "renderDescription": () => (/* binding */ renderDescription),
/* harmony export */   "renderLocation": () => (/* binding */ renderLocation),
/* harmony export */   "renderTemp": () => (/* binding */ renderTemp),
/* harmony export */   "renderTempSwitch": () => (/* binding */ renderTempSwitch),
/* harmony export */   "renderWindAndHumidity": () => (/* binding */ renderWindAndHumidity)
/* harmony export */ });
let format;

const renderTemp = (obj) => {

    const display = document.querySelector('.display');
    if (format === 'celsius') {
        display.innerText = `${obj.celsius} °C`;
    } else {
        display.innerText = `${obj.fahrenheit} °F`
    }
}

const renderLocation = (location) => {
    const locationDisplay = document.querySelector('.display-location');

    locationDisplay.innerText = `The temperature in ${location} is:`;
}

const renderDescription = (desc) => {
    const descriptionDisplay = document.querySelector('.display-description');
    const capitalize = desc.charAt(0).toUpperCase() + desc.slice(1)
    descriptionDisplay.innerText = capitalize;
}

const renderWindAndHumidity = (windSpeed, humidity) => {
    const windDisplay = document.querySelector('.display-wind');
    const humidityDisplay = document.querySelector('.display-humidity');

    windDisplay.innerText = `Wind: ${windSpeed} mph`;
    humidityDisplay.innerText = `Humidity: ${humidity}%`
}

const renderTempSwitch = (obj) => {
    const container = document.querySelector('.temp-toggle');
    const celsiusSwitch = document.createElement('div');
    const fahrenheitSwitch = document.createElement('div');

    const switches = [celsiusSwitch, fahrenheitSwitch];

    celsiusSwitch.className = 'celsius-radio';
    fahrenheitSwitch.className = 'fahrenheit-radio';

    celsiusSwitch.dataset.toggle = 'celsius';
    fahrenheitSwitch.dataset.toggle = 'fahrenheit';

    celsiusSwitch.innerText = '°C';
    fahrenheitSwitch.innerText = '°F';

    addEventListeners(switches, obj);

    container.append(celsiusSwitch, fahrenheitSwitch);

}

function addEventListeners(toggles, obj) {
    toggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            toggles.forEach((toggle) => toggle.classList.remove('active'));
            toggle.classList.add('active');
            toggle.dataset.toggle === 'celsius' ? format = 'celsius' :
            format = 'fahrenheit';

            renderTemp(obj);
        });
    });
}

const clearElements = () => {
    const container = document.querySelector('.temp-toggle');

    container.replaceChildren();
}

const getLocationInput = () => {
    const inputField = document.getElementById('search-place').value;

    return inputField;
}




/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToCelsius": () => (/* binding */ convertToCelsius),
/* harmony export */   "convertToFahrenheit": () => (/* binding */ convertToFahrenheit)
/* harmony export */ });
const convertToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius;
}

const convertToFahrenheit = (kelvin) => {
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return fahrenheit;
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomElements */ "./src/DomElements.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");




const searchButton = document.querySelector('.search-button');

const getCurrentTempFromApi = async (city) => {

    const refresh = document.querySelector('.refresh-icon');
    try {
        refresh.classList.add('visible');
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8ff600f260cf77d42329c37dcecce5f4`, {
            mode: 'cors'
        });
        
        const data = await response.json();

        refresh.classList.remove('visible');

        const tempKelvin = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const windSpeed = Math.round(data.wind.speed);
        const humidity = data.main.humidity;

        const tempObj = convertFromKelvin(tempKelvin);

        if (tempObj === undefined) {
            return;
        }
        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderTemp)(tempObj);
        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderLocation)(city);
        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderDescription)(weatherDescription);
        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderWindAndHumidity)(windSpeed, humidity);

        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderTempSwitch)(tempObj);

        return { tempObj, weatherDescription, windSpeed, humidity }

    } catch(error) {
        alert('There are no results for the location you have entered');
    }

}

function convertFromKelvin(kelvinVal) {

    const celsius = Math.round((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.convertToCelsius)(kelvinVal));
    const fahrenheit = Math.round((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.convertToFahrenheit)(kelvinVal));

    return { celsius, fahrenheit };
}

// searchButton.addEventListener('click', () => {
//     clearElements();
//     const location = getLocationInput();
//     getCurrentTempFromApi(location)
//     .then((obj) => {
//         console.log(obj);
//         if (obj.tempObj === undefined) {
//             return;
//         }
//         renderTemp(obj.tempObj);
//         renderLocation(location);
//         renderDescription(obj.weatherDescription);
//         renderWindAndHumidity(obj);
//         return obj;
//     })
//     .then((obj) => {
//         renderTempSwitch(obj);
//     })
//     .catch((error) => console.log(error));
// });

searchButton.addEventListener('click', () => {
    (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.clearElements)();
    const location = (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.getLocationInput)();
    getCurrentTempFromApi(location);

})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1I7QUFDQSxJQUFJOztBQUVKO0FBQ0EsSUFBSSwyREFBYTtBQUNqQixxQkFBcUIsOERBQWdCO0FBQ3JDOztBQUVBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbXBvbmVudC1jbHI6IHJnYig2LCA2LCAyNyk7XFxuICAgIC0tb2ZmLXdoaXRlLWNscjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAtLWFsdC1idXR0b24tY2xyOiAjMjQ4ZDllO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29tcG9uZW50LWNscik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgPiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDdweCAxMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUtY2xyKTtcXG59XFxuXFxuLnNlYXJjaC1iZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1idXR0b24tY2xyKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcXG59XFxuXFxuLnNlYXJjaC1iZzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDcyODA7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyID4gYnV0dG9uLFxcbi5zZWFyY2gtYmcgPiBpbWcge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmaWx0ZXI6IGludmVydCg5MSUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTM3ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuXFxuLnRlbXAtdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDElOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcHg7XFxufVxcbi50ZW1wLXRvZ2dsZSA+IC5jZWxzaXVzLXJhZGlvLFxcbi50ZW1wLXRvZ2dsZSA+IC5mYWhyZW5oZWl0LXJhZGlvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbXBvbmVudC1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYnV0dG9uLWNscik7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZW1wLXRvZ2dsZSA+IC5jZWxzaXVzLXJhZGlvOjphZnRlcixcXG4udGVtcC10b2dnbGUgPiAuZmFocmVuaGVpdC1yYWRpbzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYnV0dG9uLWNscik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAvKiBib3R0b206IDJweDsgKi9cXG4gICAgYm90dG9tOiAtOHB4O1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcXG59XFxuXFxuLnRlbXAtdG9nZ2xlID4gLmNlbHNpdXMtcmFkaW8uYWN0aXZlOjphZnRlcixcXG4udGVtcC10b2dnbGUgPiAuZmFocmVuaGVpdC1yYWRpby5hY3RpdmU6OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIC5zZWFyY2gtY29udGFpbmVyID4gLmNlbHNpdXMtcmFkaW8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciA+IC5mYWhyZW5oZWl0LXJhZGlvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogODVweDtcXG59ICovXFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgNXB4IHZhcigtLWFsdC1idXR0b24tY2xyKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJ1dHRvbi1jbHIpOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmRpc3BsYXktY29udGFpbmVyID4gLmRpc3BsYXkge1xcbiAgICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbnAge1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuLmRpc3BsYXktY29udGFpbmVyID4gLmRpc3BsYXktZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyID4gLmRpc3BsYXktbG9jYXRpb24sXFxuLmRpc3BsYXktY29udGFpbmVyID4gLmRpc3BsYXktZGVzY3JpcHRpb24sXFxuLmRpc3BsYXktY29udGFpbmVyID4gLmRpc3BsYXktaHVtaWRpdHksXFxuLmRpc3BsYXktY29udGFpbmVyID4gLmRpc3BsYXktd2luZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUtY2xyKTtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyID4gLmRpc3BsYXktaHVtaWRpdHksXFxuLmRpc3BsYXktY29udGFpbmVyID4gLmRpc3BsYXktd2luZCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ud2VhdGhlci1naWYge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlZnJlc2gtaWNvbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg0NGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDMlKTtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXM7XFxufVxcblxcbi5yZWZyZXNoLWljb24udmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDhGQUE4RjtJQUM5RixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSDtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOzs7O0lBSUksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwrRkFBK0Y7SUFDL0YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tY29tcG9uZW50LWNscjogcmdiKDYsIDYsIDI3KTtcXG4gICAgLS1vZmYtd2hpdGUtY2xyOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tYWx0LWJ1dHRvbi1jbHI6ICMyNDhkOWU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb21wb25lbnQtY2xyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gICAgcGFkZGluZzogN3B4IDEycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZS1jbHIpO1xcbn1cXG5cXG4uc2VhcmNoLWJnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJ1dHRvbi1jbHIpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDI1MG1zO1xcbn1cXG5cXG4uc2VhcmNoLWJnOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNzI4MDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgPiBidXR0b24sXFxuLnNlYXJjaC1iZyA+IGltZyB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDkxJSkgc2VwaWEoMzklKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMzdkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoMTAxJSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG5cXG4udGVtcC10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIC8qIGhlaWdodDogMSU7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzBweDtcXG59XFxuLnRlbXAtdG9nZ2xlID4gLmNlbHNpdXMtcmFkaW8sXFxuLnRlbXAtdG9nZ2xlID4gLmZhaHJlbmhlaXQtcmFkaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlLWNscik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29tcG9uZW50LWNscik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1idXR0b24tY2xyKTtcXG4gICAgcGFkZGluZzogMCAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRlbXAtdG9nZ2xlID4gLmNlbHNpdXMtcmFkaW86OmFmdGVyLFxcbi50ZW1wLXRvZ2dsZSA+IC5mYWhyZW5oZWl0LXJhZGlvOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1idXR0b24tY2xyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIC8qIGJvdHRvbTogMnB4OyAqL1xcbiAgICBib3R0b206IC04cHg7XFxuICAgIHRyYW5zaXRpb246IDI1MG1zO1xcbn1cXG5cXG4udGVtcC10b2dnbGUgPiAuY2Vsc2l1cy1yYWRpby5hY3RpdmU6OmFmdGVyLFxcbi50ZW1wLXRvZ2dsZSA+IC5mYWhyZW5oZWl0LXJhZGlvLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogLnNlYXJjaC1jb250YWluZXIgPiAuY2Vsc2l1cy1yYWRpbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDUwcHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyID4gLmZhaHJlbmhlaXQtcmFkaW8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA4NXB4O1xcbn0gKi9cXG5cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggdmFyKC0tYWx0LWJ1dHRvbi1jbHIpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYnV0dG9uLWNscik7ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheSB7XFxuICAgIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxucCB7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1sb2NhdGlvbixcXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1kZXNjcmlwdGlvbixcXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1odW1pZGl0eSxcXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS13aW5kIHtcXG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZS1jbHIpO1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1odW1pZGl0eSxcXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS13aW5kIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi53ZWF0aGVyLWdpZiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVmcmVzaC1pY29uIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDQ0ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMyUpO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcztcXG59XFxuXFxuLnJlZnJlc2gtaWNvbi52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgZm9ybWF0O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyVGVtcCA9IChvYmopID0+IHtcblxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuICAgIGlmIChmb3JtYXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICBkaXNwbGF5LmlubmVyVGV4dCA9IGAke29iai5jZWxzaXVzfSDCsENgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXkuaW5uZXJUZXh0ID0gYCR7b2JqLmZhaHJlbmhlaXR9IMKwRmBcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJMb2NhdGlvbiA9IChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWxvY2F0aW9uJyk7XG5cbiAgICBsb2NhdGlvbkRpc3BsYXkuaW5uZXJUZXh0ID0gYFRoZSB0ZW1wZXJhdHVyZSBpbiAke2xvY2F0aW9ufSBpczpgO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyRGVzY3JpcHRpb24gPSAoZGVzYykgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgY2FwaXRhbGl6ZSA9IGRlc2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkZXNjLnNsaWNlKDEpXG4gICAgZGVzY3JpcHRpb25EaXNwbGF5LmlubmVyVGV4dCA9IGNhcGl0YWxpemU7XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJXaW5kQW5kSHVtaWRpdHkgPSAod2luZFNwZWVkLCBodW1pZGl0eSkgPT4ge1xuICAgIGNvbnN0IHdpbmREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktd2luZCcpO1xuICAgIGNvbnN0IGh1bWlkaXR5RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWh1bWlkaXR5Jyk7XG5cbiAgICB3aW5kRGlzcGxheS5pbm5lclRleHQgPSBgV2luZDogJHt3aW5kU3BlZWR9IG1waGA7XG4gICAgaHVtaWRpdHlEaXNwbGF5LmlubmVyVGV4dCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eX0lYFxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyVGVtcFN3aXRjaCA9IChvYmopID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC10b2dnbGUnKTtcbiAgICBjb25zdCBjZWxzaXVzU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmFocmVuaGVpdFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3Qgc3dpdGNoZXMgPSBbY2Vsc2l1c1N3aXRjaCwgZmFocmVuaGVpdFN3aXRjaF07XG5cbiAgICBjZWxzaXVzU3dpdGNoLmNsYXNzTmFtZSA9ICdjZWxzaXVzLXJhZGlvJztcbiAgICBmYWhyZW5oZWl0U3dpdGNoLmNsYXNzTmFtZSA9ICdmYWhyZW5oZWl0LXJhZGlvJztcblxuICAgIGNlbHNpdXNTd2l0Y2guZGF0YXNldC50b2dnbGUgPSAnY2Vsc2l1cyc7XG4gICAgZmFocmVuaGVpdFN3aXRjaC5kYXRhc2V0LnRvZ2dsZSA9ICdmYWhyZW5oZWl0JztcblxuICAgIGNlbHNpdXNTd2l0Y2guaW5uZXJUZXh0ID0gJ8KwQyc7XG4gICAgZmFocmVuaGVpdFN3aXRjaC5pbm5lclRleHQgPSAnwrBGJztcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKHN3aXRjaGVzLCBvYmopO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChjZWxzaXVzU3dpdGNoLCBmYWhyZW5oZWl0U3dpdGNoKTtcblxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyh0b2dnbGVzLCBvYmopIHtcbiAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4gdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRvZ2dsZS5kYXRhc2V0LnRvZ2dsZSA9PT0gJ2NlbHNpdXMnID8gZm9ybWF0ID0gJ2NlbHNpdXMnIDpcbiAgICAgICAgICAgIGZvcm1hdCA9ICdmYWhyZW5oZWl0JztcblxuICAgICAgICAgICAgcmVuZGVyVGVtcChvYmopO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFyRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9nZ2xlJyk7XG5cbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbklucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXBsYWNlJykudmFsdWU7XG5cbiAgICByZXR1cm4gaW5wdXRGaWVsZDtcbn1cblxuXG4iLCJleHBvcnQgY29uc3QgY29udmVydFRvQ2Vsc2l1cyA9IChrZWx2aW4pID0+IHtcbiAgICBjb25zdCBjZWxzaXVzID0ga2VsdmluIC0gMjczLjE1O1xuICAgIHJldHVybiBjZWxzaXVzO1xufVxuXG5leHBvcnQgY29uc3QgY29udmVydFRvRmFocmVuaGVpdCA9IChrZWx2aW4pID0+IHtcbiAgICBjb25zdCBmYWhyZW5oZWl0ID0gKGtlbHZpbiAtIDI3My4xNSkgKiA5LzUgKyAzMjtcbiAgICByZXR1cm4gZmFocmVuaGVpdDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjbGVhckVsZW1lbnRzLCBjbGVhcklucHV0LCBnZXRMb2NhdGlvbklucHV0LCByZW5kZXJEZXNjcmlwdGlvbiwgcmVuZGVyTG9jYXRpb24sIHJlbmRlclRlbXAsIHJlbmRlclRlbXBTd2l0Y2gsIHJlbmRlcldpbmRBbmRIdW1pZGl0eSB9IGZyb20gJy4vRG9tRWxlbWVudHMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjb252ZXJ0VG9DZWxzaXVzLCBjb252ZXJ0VG9GYWhyZW5oZWl0IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuXG5jb25zdCBnZXRDdXJyZW50VGVtcEZyb21BcGkgPSBhc3luYyAoY2l0eSkgPT4ge1xuXG4gICAgY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoLWljb24nKTtcbiAgICB0cnkge1xuICAgICAgICByZWZyZXNoLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9OGZmNjAwZjI2MGNmNzdkNDIzMjljMzdkY2VjY2U1ZjRgLCB7XG4gICAgICAgICAgICBtb2RlOiAnY29ycydcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIHJlZnJlc2guY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuXG4gICAgICAgIGNvbnN0IHRlbXBLZWx2aW4gPSBkYXRhLm1haW4udGVtcDtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSBNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuXG4gICAgICAgIGNvbnN0IHRlbXBPYmogPSBjb252ZXJ0RnJvbUtlbHZpbih0ZW1wS2VsdmluKTtcblxuICAgICAgICBpZiAodGVtcE9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyVGVtcCh0ZW1wT2JqKTtcbiAgICAgICAgcmVuZGVyTG9jYXRpb24oY2l0eSk7XG4gICAgICAgIHJlbmRlckRlc2NyaXB0aW9uKHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gICAgICAgIHJlbmRlcldpbmRBbmRIdW1pZGl0eSh3aW5kU3BlZWQsIGh1bWlkaXR5KTtcblxuICAgICAgICByZW5kZXJUZW1wU3dpdGNoKHRlbXBPYmopO1xuXG4gICAgICAgIHJldHVybiB7IHRlbXBPYmosIHdlYXRoZXJEZXNjcmlwdGlvbiwgd2luZFNwZWVkLCBodW1pZGl0eSB9XG5cbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KCdUaGVyZSBhcmUgbm8gcmVzdWx0cyBmb3IgdGhlIGxvY2F0aW9uIHlvdSBoYXZlIGVudGVyZWQnKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY29udmVydEZyb21LZWx2aW4oa2VsdmluVmFsKSB7XG5cbiAgICBjb25zdCBjZWxzaXVzID0gTWF0aC5yb3VuZChjb252ZXJ0VG9DZWxzaXVzKGtlbHZpblZhbCkpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSBNYXRoLnJvdW5kKGNvbnZlcnRUb0ZhaHJlbmhlaXQoa2VsdmluVmFsKSk7XG5cbiAgICByZXR1cm4geyBjZWxzaXVzLCBmYWhyZW5oZWl0IH07XG59XG5cbi8vIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBjbGVhckVsZW1lbnRzKCk7XG4vLyAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbklucHV0KCk7XG4vLyAgICAgZ2V0Q3VycmVudFRlbXBGcm9tQXBpKGxvY2F0aW9uKVxuLy8gICAgIC50aGVuKChvYmopID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2cob2JqKTtcbi8vICAgICAgICAgaWYgKG9iai50ZW1wT2JqID09PSB1bmRlZmluZWQpIHtcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZW5kZXJUZW1wKG9iai50ZW1wT2JqKTtcbi8vICAgICAgICAgcmVuZGVyTG9jYXRpb24obG9jYXRpb24pO1xuLy8gICAgICAgICByZW5kZXJEZXNjcmlwdGlvbihvYmoud2VhdGhlckRlc2NyaXB0aW9uKTtcbi8vICAgICAgICAgcmVuZGVyV2luZEFuZEh1bWlkaXR5KG9iaik7XG4vLyAgICAgICAgIHJldHVybiBvYmo7XG4vLyAgICAgfSlcbi8vICAgICAudGhlbigob2JqKSA9PiB7XG4vLyAgICAgICAgIHJlbmRlclRlbXBTd2l0Y2gob2JqKTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4vLyB9KTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyRWxlbWVudHMoKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGdldExvY2F0aW9uSW5wdXQoKTtcbiAgICBnZXRDdXJyZW50VGVtcEZyb21BcGkobG9jYXRpb24pO1xuXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
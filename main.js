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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before,\n*::after {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-component-clr: rgb(6, 6, 27);\n    --off-white-clr: rgb(255, 255, 255);\n    --alt-button-clr: #248d9e;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding-top: 40px;\n    background-color: var(--main-component-clr);\n    width: 100%;\n}\n\n.search-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.search-container > input {\n    padding: 7px 12px;\n    outline: none;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border: none;\n    background-color: var(--off-white-clr);\n}\n\n.search-bg {\n    display: flex;\n    background-color: var(--alt-button-clr);\n    height: 100%;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    transition: 250ms;\n}\n\n.search-bg:hover {\n    background-color: #1d7280;\n}\n\n.search-container > button,\n.search-bg > img {\n    background: none;\n    border-radius: 5px;\n    border: none;\n    color: white;\n    padding: 0 10px;\n    width: 40px;\n    cursor: pointer;\n    font-weight: bold;\n    filter: invert(91%) sepia(39%) saturate(0%) hue-rotate(137deg) brightness(111%) contrast(101%);\n    transition: 200ms;\n}\n\n.temp-toggle {\n    display: flex;\n    gap: 10px;\n    /* height: 1%; */\n    position: absolute;\n    top: -30px;\n}\n.temp-toggle > .celsius-radio,\n.temp-toggle > .fahrenheit-radio {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    height: 100%;\n    width: 30px;\n    color: var(--off-white-clr);\n    background: var(--main-component-clr);\n    background-color: var(--alt-button-clr);\n    padding: 0 2px;\n    cursor: pointer;\n    font-weight: bold;\n    position: relative;\n}\n\n.temp-toggle > .celsius-radio::after,\n.temp-toggle > .fahrenheit-radio::after {\n    content: '';\n    width: 0;\n    height: 3px;\n    background-color: white;\n    position: absolute;\n    border-radius: 3px;\n    /* bottom: 2px; */\n    bottom: -8px;\n    transition: 250ms;\n}\n\n.temp-toggle > .celsius-radio.active::after,\n.temp-toggle > .fahrenheit-radio.active::after {\n    width: 100%;\n}\n\n/* .search-container > .celsius-radio {\n    position: absolute;\n    right: 50px;\n}\n\n.search-container > .fahrenheit-radio {\n    position: absolute;\n    right: 85px;\n} */\n\n.display-container {\n    width: 90%;\n    border-radius: 4px;\n    border-left: solid 5px var(--alt-button-clr);\n    /* background-color: var(--alt-button-clr); */\n    margin-bottom: 25px;\n    padding: 15px 15px;\n    position: relative;\n}\n.display-container > .display {\n    color: var(--off-white-clr);\n    font-weight: bold;\n    font-size: 3rem;\n}\n\np {\n    padding: 5px 0;\n}\n.display-container > .display-description {\n    font-weight: bold;\n}\n\n.display-container > .display-location,\n.display-container > .display-description,\n.display-container > .display-humidity,\n.display-container > .display-wind {\n    color: var(--off-white-clr);\n}\n\n.display-container > .display-humidity,\n.display-container > .display-wind {\n    font-size: 0.8rem;\n}\n\n.weather-gif {\n    width: 100%;\n}\n\n.refresh-icon {\n    opacity: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 50px;\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(44deg) brightness(102%) contrast(103%);\n    transition: 100ms;\n}\n\n.refresh-icon.visible {\n    opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,yBAAyB;IACzB,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,iBAAiB;IACjB,2CAA2C;IAC3C,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,YAAY;IACZ,4BAA4B;IAC5B,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,8FAA8F;IAC9F,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;AACA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,qCAAqC;IACrC,uCAAuC;IACvC,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,QAAQ;IACR,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,WAAW;AACf;;AAEA;;;;;;;;GAQG;;AAEH;IACI,UAAU;IACV,kBAAkB;IAClB,4CAA4C;IAC5C,6CAA6C;IAC7C,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;AACA;IACI,iBAAiB;AACrB;;AAEA;;;;IAII,2BAA2B;AAC/B;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,+FAA+F;IAC/F,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd","sourcesContent":["*, *::before,\n*::after {\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-component-clr: rgb(6, 6, 27);\n    --off-white-clr: rgb(255, 255, 255);\n    --alt-button-clr: #248d9e;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    padding-top: 40px;\n    background-color: var(--main-component-clr);\n    width: 100%;\n}\n\n.search-container {\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.search-container > input {\n    padding: 7px 12px;\n    outline: none;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border: none;\n    background-color: var(--off-white-clr);\n}\n\n.search-bg {\n    display: flex;\n    background-color: var(--alt-button-clr);\n    height: 100%;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    transition: 250ms;\n}\n\n.search-bg:hover {\n    background-color: #1d7280;\n}\n\n.search-container > button,\n.search-bg > img {\n    background: none;\n    border-radius: 5px;\n    border: none;\n    color: white;\n    padding: 0 10px;\n    width: 40px;\n    cursor: pointer;\n    font-weight: bold;\n    filter: invert(91%) sepia(39%) saturate(0%) hue-rotate(137deg) brightness(111%) contrast(101%);\n    transition: 200ms;\n}\n\n.temp-toggle {\n    display: flex;\n    gap: 10px;\n    /* height: 1%; */\n    position: absolute;\n    top: -30px;\n}\n.temp-toggle > .celsius-radio,\n.temp-toggle > .fahrenheit-radio {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 3px;\n    height: 100%;\n    width: 30px;\n    color: var(--off-white-clr);\n    background: var(--main-component-clr);\n    background-color: var(--alt-button-clr);\n    padding: 0 2px;\n    cursor: pointer;\n    font-weight: bold;\n    position: relative;\n}\n\n.temp-toggle > .celsius-radio::after,\n.temp-toggle > .fahrenheit-radio::after {\n    content: '';\n    width: 0;\n    height: 3px;\n    background-color: white;\n    position: absolute;\n    border-radius: 3px;\n    /* bottom: 2px; */\n    bottom: -8px;\n    transition: 250ms;\n}\n\n.temp-toggle > .celsius-radio.active::after,\n.temp-toggle > .fahrenheit-radio.active::after {\n    width: 100%;\n}\n\n/* .search-container > .celsius-radio {\n    position: absolute;\n    right: 50px;\n}\n\n.search-container > .fahrenheit-radio {\n    position: absolute;\n    right: 85px;\n} */\n\n.display-container {\n    width: 90%;\n    border-radius: 4px;\n    border-left: solid 5px var(--alt-button-clr);\n    /* background-color: var(--alt-button-clr); */\n    margin-bottom: 25px;\n    padding: 15px 15px;\n    position: relative;\n}\n.display-container > .display {\n    color: var(--off-white-clr);\n    font-weight: bold;\n    font-size: 3rem;\n}\n\np {\n    padding: 5px 0;\n}\n.display-container > .display-description {\n    font-weight: bold;\n}\n\n.display-container > .display-location,\n.display-container > .display-description,\n.display-container > .display-humidity,\n.display-container > .display-wind {\n    color: var(--off-white-clr);\n}\n\n.display-container > .display-humidity,\n.display-container > .display-wind {\n    font-size: 0.8rem;\n}\n\n.weather-gif {\n    width: 100%;\n}\n\n.refresh-icon {\n    opacity: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 50px;\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(44deg) brightness(102%) contrast(103%);\n    transition: 100ms;\n}\n\n.refresh-icon.visible {\n    opacity: 1;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "getLocationInput": () => (/* binding */ getLocationInput),
/* harmony export */   "renderDescription": () => (/* binding */ renderDescription),
/* harmony export */   "renderLocation": () => (/* binding */ renderLocation),
/* harmony export */   "renderTemp": () => (/* binding */ renderTemp),
/* harmony export */   "renderWindAndHumidity": () => (/* binding */ renderWindAndHumidity)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.js");


const renderTemp = (obj) => {

    const display = document.querySelector('.display');
    if (_script__WEBPACK_IMPORTED_MODULE_0__.format === 'celsius') {
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

const renderWindAndHumidity = ({ windSpeed, humidity }) => {
    const windDisplay = document.querySelector('.display-wind');
    const humidityDisplay = document.querySelector('.display-humidity');

    windDisplay.innerText = `Wind: ${windSpeed} mph`;
    humidityDisplay.innerText = `Humidity: ${humidity}%`
}

const getLocationInput = () => {
    const inputField = document.getElementById('search-place').value;

    return inputField;
}



/***/ }),

/***/ "./src/gifGeneration.js":
/*!******************************!*\
  !*** ./src/gifGeneration.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchGif": () => (/* binding */ fetchGif)
/* harmony export */ });
const fetchGif = ({ weatherDescription }) => {
    const gif = document.querySelector('.weather-gif');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=AGuC5sBSpLwFCnqHU4p4po65KMPMse9G&s=${weatherDescription}`, {
    mode: 'cors'
})
.then((response) => {
    return response.json();
})
.then((response) => {
    gif.src = response.data.images.original.url;
})
.catch((error) => console.log(error))
}

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _DomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomElements */ "./src/DomElements.js");
/* harmony import */ var _gifGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifGeneration */ "./src/gifGeneration.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _src_assets_magnifying_glass_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/magnifying-glass.svg */ "./src/assets/magnifying-glass.svg");
/* harmony import */ var _src_assets_refresh_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/assets/refresh.svg */ "./src/assets/refresh.svg");







let format;

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

        return { tempObj, weatherDescription, windSpeed, humidity }

    } catch(error) {
        alert('There are no results for the location you have entered');
    }

}

function convertFromKelvin(kelvinVal) {

    const celsius = Math.round((0,_utilities__WEBPACK_IMPORTED_MODULE_3__.convertToCelsius)(kelvinVal));
    const fahrenheit = Math.round((0,_utilities__WEBPACK_IMPORTED_MODULE_3__.convertToFahrenheit)(kelvinVal));

    return { celsius, fahrenheit };
}

searchButton.addEventListener('click', () => {
    const location = (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.getLocationInput)();
    getCurrentTempFromApi(location)
    .then((obj) => {
        if (obj.tempObj === undefined) {
            return;
        }
        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderTemp)(obj.tempObj);
        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderLocation)(location);
        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderDescription)(obj.weatherDescription);
        (0,_DomElements__WEBPACK_IMPORTED_MODULE_0__.renderWindAndHumidity)(obj);
        return obj;
    })
    // .then((obj) => {
    //     fetchGif(obj);
    // })
    .catch((error) => console.log(error));
});

const toggles = document.querySelectorAll('[data-toggle]');
toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggles.forEach((toggle) => toggle.classList.remove('active'));
        toggle.classList.add('active');

        toggle.dataset.toggle === 'celsius' ? format = 'celsius' :
        format = 'fahrenheit';
    });
});






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

/***/ }),

/***/ "./src/assets/magnifying-glass.svg":
/*!*****************************************!*\
  !*** ./src/assets/magnifying-glass.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "magnifying-glass.svg";

/***/ }),

/***/ "./src/assets/refresh.svg":
/*!********************************!*\
  !*** ./src/assets/refresh.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "refresh.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dpZkdlbmVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tY29tcG9uZW50LWNscjogcmdiKDYsIDYsIDI3KTtcXG4gICAgLS1vZmYtd2hpdGUtY2xyOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tYWx0LWJ1dHRvbi1jbHI6ICMyNDhkOWU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb21wb25lbnQtY2xyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gICAgcGFkZGluZzogN3B4IDEycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZi13aGl0ZS1jbHIpO1xcbn1cXG5cXG4uc2VhcmNoLWJnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJ1dHRvbi1jbHIpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDI1MG1zO1xcbn1cXG5cXG4uc2VhcmNoLWJnOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNzI4MDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgPiBidXR0b24sXFxuLnNlYXJjaC1iZyA+IGltZyB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDkxJSkgc2VwaWEoMzklKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMzdkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoMTAxJSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG5cXG4udGVtcC10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIC8qIGhlaWdodDogMSU7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzBweDtcXG59XFxuLnRlbXAtdG9nZ2xlID4gLmNlbHNpdXMtcmFkaW8sXFxuLnRlbXAtdG9nZ2xlID4gLmZhaHJlbmhlaXQtcmFkaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlLWNscik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29tcG9uZW50LWNscik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1idXR0b24tY2xyKTtcXG4gICAgcGFkZGluZzogMCAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRlbXAtdG9nZ2xlID4gLmNlbHNpdXMtcmFkaW86OmFmdGVyLFxcbi50ZW1wLXRvZ2dsZSA+IC5mYWhyZW5oZWl0LXJhZGlvOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgLyogYm90dG9tOiAycHg7ICovXFxuICAgIGJvdHRvbTogLThweDtcXG4gICAgdHJhbnNpdGlvbjogMjUwbXM7XFxufVxcblxcbi50ZW1wLXRvZ2dsZSA+IC5jZWxzaXVzLXJhZGlvLmFjdGl2ZTo6YWZ0ZXIsXFxuLnRlbXAtdG9nZ2xlID4gLmZhaHJlbmhlaXQtcmFkaW8uYWN0aXZlOjphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiAuc2VhcmNoLWNvbnRhaW5lciA+IC5jZWxzaXVzLXJhZGlvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNTBweDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgPiAuZmFocmVuaGVpdC1yYWRpbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDg1cHg7XFxufSAqL1xcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCB2YXIoLS1hbHQtYnV0dG9uLWNscik7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1idXR0b24tY2xyKTsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5kaXNwbGF5LWNvbnRhaW5lciA+IC5kaXNwbGF5IHtcXG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZS1jbHIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5wIHtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVxcbi5kaXNwbGF5LWNvbnRhaW5lciA+IC5kaXNwbGF5LWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciA+IC5kaXNwbGF5LWxvY2F0aW9uLFxcbi5kaXNwbGF5LWNvbnRhaW5lciA+IC5kaXNwbGF5LWRlc2NyaXB0aW9uLFxcbi5kaXNwbGF5LWNvbnRhaW5lciA+IC5kaXNwbGF5LWh1bWlkaXR5LFxcbi5kaXNwbGF5LWNvbnRhaW5lciA+IC5kaXNwbGF5LXdpbmQge1xcbiAgICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlLWNscik7XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciA+IC5kaXNwbGF5LWh1bWlkaXR5LFxcbi5kaXNwbGF5LWNvbnRhaW5lciA+IC5kaXNwbGF5LXdpbmQge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLndlYXRoZXItZ2lmIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWZyZXNoLWljb24ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoNDRkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoMTAzJSk7XFxuICAgIHRyYW5zaXRpb246IDEwMG1zO1xcbn1cXG5cXG4ucmVmcmVzaC1pY29uLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw4RkFBOEY7SUFDOUYsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1Qyw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7OztJQUlJLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsK0ZBQStGO0lBQy9GLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbXBvbmVudC1jbHI6IHJnYig2LCA2LCAyNyk7XFxuICAgIC0tb2ZmLXdoaXRlLWNscjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAtLWFsdC1idXR0b24tY2xyOiAjMjQ4ZDllO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29tcG9uZW50LWNscik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgPiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDdweCAxMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtd2hpdGUtY2xyKTtcXG59XFxuXFxuLnNlYXJjaC1iZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1idXR0b24tY2xyKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAyNTBtcztcXG59XFxuXFxuLnNlYXJjaC1iZzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDcyODA7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyID4gYnV0dG9uLFxcbi5zZWFyY2gtYmcgPiBpbWcge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmaWx0ZXI6IGludmVydCg5MSUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTM3ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuXFxuLnRlbXAtdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDElOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcHg7XFxufVxcbi50ZW1wLXRvZ2dsZSA+IC5jZWxzaXVzLXJhZGlvLFxcbi50ZW1wLXRvZ2dsZSA+IC5mYWhyZW5oZWl0LXJhZGlvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbXBvbmVudC1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYnV0dG9uLWNscik7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZW1wLXRvZ2dsZSA+IC5jZWxzaXVzLXJhZGlvOjphZnRlcixcXG4udGVtcC10b2dnbGUgPiAuZmFocmVuaGVpdC1yYWRpbzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIC8qIGJvdHRvbTogMnB4OyAqL1xcbiAgICBib3R0b206IC04cHg7XFxuICAgIHRyYW5zaXRpb246IDI1MG1zO1xcbn1cXG5cXG4udGVtcC10b2dnbGUgPiAuY2Vsc2l1cy1yYWRpby5hY3RpdmU6OmFmdGVyLFxcbi50ZW1wLXRvZ2dsZSA+IC5mYWhyZW5oZWl0LXJhZGlvLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogLnNlYXJjaC1jb250YWluZXIgPiAuY2Vsc2l1cy1yYWRpbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDUwcHg7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyID4gLmZhaHJlbmhlaXQtcmFkaW8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA4NXB4O1xcbn0gKi9cXG5cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggdmFyKC0tYWx0LWJ1dHRvbi1jbHIpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYnV0dG9uLWNscik7ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheSB7XFxuICAgIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxucCB7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1sb2NhdGlvbixcXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1kZXNjcmlwdGlvbixcXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1odW1pZGl0eSxcXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS13aW5kIHtcXG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZS1jbHIpO1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS1odW1pZGl0eSxcXG4uZGlzcGxheS1jb250YWluZXIgPiAuZGlzcGxheS13aW5kIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi53ZWF0aGVyLWdpZiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVmcmVzaC1pY29uIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDQ0ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMyUpO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcztcXG59XFxuXFxuLnJlZnJlc2gtaWNvbi52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiLi9zY3JpcHRcIjtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRlbXAgPSAob2JqKSA9PiB7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcbiAgICBpZiAoZm9ybWF0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgZGlzcGxheS5pbm5lclRleHQgPSBgJHtvYmouY2Vsc2l1c30gwrBDYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5LmlubmVyVGV4dCA9IGAke29iai5mYWhyZW5oZWl0fSDCsEZgXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyTG9jYXRpb24gPSAobG9jYXRpb24pID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1sb2NhdGlvbicpO1xuXG4gICAgbG9jYXRpb25EaXNwbGF5LmlubmVyVGV4dCA9IGBUaGUgdGVtcGVyYXR1cmUgaW4gJHtsb2NhdGlvbn0gaXM6YDtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlckRlc2NyaXB0aW9uID0gKGRlc2MpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGNhcGl0YWxpemUgPSBkZXNjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGVzYy5zbGljZSgxKVxuICAgIGRlc2NyaXB0aW9uRGlzcGxheS5pbm5lclRleHQgPSBjYXBpdGFsaXplO1xufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyV2luZEFuZEh1bWlkaXR5ID0gKHsgd2luZFNwZWVkLCBodW1pZGl0eSB9KSA9PiB7XG4gICAgY29uc3Qgd2luZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS13aW5kJyk7XG4gICAgY29uc3QgaHVtaWRpdHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktaHVtaWRpdHknKTtcblxuICAgIHdpbmREaXNwbGF5LmlubmVyVGV4dCA9IGBXaW5kOiAke3dpbmRTcGVlZH0gbXBoYDtcbiAgICBodW1pZGl0eURpc3BsYXkuaW5uZXJUZXh0ID0gYEh1bWlkaXR5OiAke2h1bWlkaXR5fSVgXG59XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbklucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXBsYWNlJykudmFsdWU7XG5cbiAgICByZXR1cm4gaW5wdXRGaWVsZDtcbn1cblxuIiwiZXhwb3J0IGNvbnN0IGZldGNoR2lmID0gKHsgd2VhdGhlckRlc2NyaXB0aW9uIH0pID0+IHtcbiAgICBjb25zdCBnaWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1naWYnKTtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9QUd1QzVzQlNwTHdGQ25xSFU0cDRwbzY1S01QTXNlOUcmcz0ke3dlYXRoZXJEZXNjcmlwdGlvbn1gLCB7XG4gICAgbW9kZTogJ2NvcnMnXG59KVxuLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn0pXG4udGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBnaWYuc3JjID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xufSlcbi5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbn0iLCJpbXBvcnQgeyBjbGVhcklucHV0LCBnZXRMb2NhdGlvbklucHV0LCByZW5kZXJEZXNjcmlwdGlvbiwgcmVuZGVyTG9jYXRpb24sIHJlbmRlclRlbXAsIHJlbmRlcldpbmRBbmRIdW1pZGl0eSB9IGZyb20gJy4vRG9tRWxlbWVudHMnO1xuaW1wb3J0IHsgZmV0Y2hHaWYgfSBmcm9tICcuL2dpZkdlbmVyYXRpb24nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjb252ZXJ0VG9DZWxzaXVzLCBjb252ZXJ0VG9GYWhyZW5oZWl0IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuaW1wb3J0IG1hZ25pZnlpbmdHbGFzcyBmcm9tICcvc3JjL2Fzc2V0cy9tYWduaWZ5aW5nLWdsYXNzLnN2Zyc7XG5pbXBvcnQgcmVmcmVzaCBmcm9tICcvc3JjL2Fzc2V0cy9yZWZyZXNoLnN2Zyc7XG5cbmV4cG9ydCBsZXQgZm9ybWF0O1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuXG5jb25zdCBnZXRDdXJyZW50VGVtcEZyb21BcGkgPSBhc3luYyAoY2l0eSkgPT4ge1xuXG4gICAgY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoLWljb24nKTtcbiAgICB0cnkge1xuICAgICAgICByZWZyZXNoLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9OGZmNjAwZjI2MGNmNzdkNDIzMjljMzdkY2VjY2U1ZjRgLCB7XG4gICAgICAgICAgICBtb2RlOiAnY29ycydcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZWZyZXNoLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcblxuICAgICAgICBjb25zdCB0ZW1wS2VsdmluID0gZGF0YS5tYWluLnRlbXA7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkID0gTWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpO1xuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcblxuICAgICAgICBjb25zdCB0ZW1wT2JqID0gY29udmVydEZyb21LZWx2aW4odGVtcEtlbHZpbik7XG5cbiAgICAgICAgcmV0dXJuIHsgdGVtcE9iaiwgd2VhdGhlckRlc2NyaXB0aW9uLCB3aW5kU3BlZWQsIGh1bWlkaXR5IH1cblxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ1RoZXJlIGFyZSBubyByZXN1bHRzIGZvciB0aGUgbG9jYXRpb24geW91IGhhdmUgZW50ZXJlZCcpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBjb252ZXJ0RnJvbUtlbHZpbihrZWx2aW5WYWwpIHtcblxuICAgIGNvbnN0IGNlbHNpdXMgPSBNYXRoLnJvdW5kKGNvbnZlcnRUb0NlbHNpdXMoa2VsdmluVmFsKSk7XG4gICAgY29uc3QgZmFocmVuaGVpdCA9IE1hdGgucm91bmQoY29udmVydFRvRmFocmVuaGVpdChrZWx2aW5WYWwpKTtcblxuICAgIHJldHVybiB7IGNlbHNpdXMsIGZhaHJlbmhlaXQgfTtcbn1cblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb25JbnB1dCgpO1xuICAgIGdldEN1cnJlbnRUZW1wRnJvbUFwaShsb2NhdGlvbilcbiAgICAudGhlbigob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmoudGVtcE9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyVGVtcChvYmoudGVtcE9iaik7XG4gICAgICAgIHJlbmRlckxvY2F0aW9uKGxvY2F0aW9uKTtcbiAgICAgICAgcmVuZGVyRGVzY3JpcHRpb24ob2JqLndlYXRoZXJEZXNjcmlwdGlvbik7XG4gICAgICAgIHJlbmRlcldpbmRBbmRIdW1pZGl0eShvYmopO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0pXG4gICAgLy8gLnRoZW4oKG9iaikgPT4ge1xuICAgIC8vICAgICBmZXRjaEdpZihvYmopO1xuICAgIC8vIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn0pO1xuXG5jb25zdCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlXScpO1xudG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUpID0+IHtcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgdG9nZ2xlLmRhdGFzZXQudG9nZ2xlID09PSAnY2Vsc2l1cycgPyBmb3JtYXQgPSAnY2Vsc2l1cycgOlxuICAgICAgICBmb3JtYXQgPSAnZmFocmVuaGVpdCc7XG4gICAgfSk7XG59KTtcblxuXG5cblxuIiwiZXhwb3J0IGNvbnN0IGNvbnZlcnRUb0NlbHNpdXMgPSAoa2VsdmluKSA9PiB7XG4gICAgY29uc3QgY2Vsc2l1cyA9IGtlbHZpbiAtIDI3My4xNTtcbiAgICByZXR1cm4gY2Vsc2l1cztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb0ZhaHJlbmhlaXQgPSAoa2VsdmluKSA9PiB7XG4gICAgY29uc3QgZmFocmVuaGVpdCA9IChrZWx2aW4gLSAyNzMuMTUpICogOS81ICsgMzI7XG4gICAgcmV0dXJuIGZhaHJlbmhlaXQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
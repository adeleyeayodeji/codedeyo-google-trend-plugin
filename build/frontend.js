/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleTrendsWidgetContainer: () => (/* binding */ GoogleTrendsWidgetContainer),
/* harmony export */   "default": () => (/* binding */ GoogleTrends)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



function US() {
  var x = document.getElementById("trends-widget-1");
  x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=US";
  document.getElementById("codenewvalue").innerHTML = "United States";
}
function NG() {
  var x = document.getElementById("trends-widget-1");
  x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=NG";
  document.getElementById("codenewvalue").innerHTML = "Nigeria";
}
function AU() {
  var x = document.getElementById("trends-widget-1");
  x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=AU";
  document.getElementById("codenewvalue").innerHTML = "Australia";
}
function AR() {
  var x = document.getElementById("trends-widget-1");
  x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=AR";
  document.getElementById("codenewvalue").innerHTML = "Argentina";
}
function CA() {
  var x = document.getElementById("trends-widget-1");
  x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=CA";
  document.getElementById("codenewvalue").innerHTML = "Canada";
}
function GB() {
  var x = document.getElementById("trends-widget-1");
  x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=GB";
  document.getElementById("codenewvalue").innerHTML = "United Kingdom";
}
function ZA() {
  var x = document.getElementById("trends-widget-1");
  x.src = "https://trends.google.com:443/trends/embed/dailytrends?geo=ZA";
  document.getElementById("codenewvalue").innerHTML = "South Africa";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctioncode() {
  document.getElementById("myDropdowncode").classList.toggle("showcode");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtncode")) {
    var dropdowns = document.getElementsByClassName("dropdown-contentcode");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showcode")) {
        openDropdown.classList.remove("showcode");
      }
    }
  }
};

/**
 * Widget Iframe Container
 */
class GoogleTrendsWidgetContainer extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    //use iframe to render the widget
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "trends-widget-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
      id: "trends-widget-1",
      width: "100%",
      height: "400px",
      borderRadius: "5px",
      frameborder: "0",
      scrolling: "0",
      src: "https://trends.google.com:443/trends/embed/dailytrends?geo=NG"
    }));
  }
}

/**
 * Class component for the Google Trends widget.
 * @class GoogleTrends
 */
class GoogleTrends extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  /**
   * Constructor for the Google Trends widget.
   * @param {object} props - The props.
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render the Google Trends widget.
   * @returns {object} - The Google Trends widget.
   */
  render() {
    //get plugin dir url
    const pluginDirUrl = codedeyoGoogleTrends.plugin_dir_url;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "holder"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "holder2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "selectpart"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dropdowncode"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      onClick: myFunctioncode,
      className: "dropbtncode",
      id: "codenewvalue",
      title: "Select Country"
    }, "Select Country"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "myDropdowncode",
      className: "dropdown-contentcode"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:void(0)",
      onClick: US
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      onClick: US
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "flagn",
      onClick: US,
      src: pluginDirUrl + "img/us.png",
      height: "20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "countryn",
      onClick: US
    }, "United State"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:void(0)",
      onClick: NG
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      onClick: NG
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "flagn",
      onClick: NG,
      src: pluginDirUrl + "img/ng.png",
      height: "20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "countryn",
      onClick: NG
    }, "Nigeria"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:void(0)",
      onClick: AU
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      onClick: AU
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "flagn",
      onClick: AU,
      src: pluginDirUrl + "img/au.jpg",
      height: "20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "countryn",
      onClick: AU
    }, "Australia"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:void(0)",
      onClick: CA
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      onClick: CA
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "flagn",
      onClick: CA,
      src: pluginDirUrl + "img/ca.jpg",
      height: "20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "countryn",
      onClick: CA
    }, "Canada"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:void(0)",
      onClick: GB
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      onClick: GB
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "flagn",
      onClick: GB,
      src: pluginDirUrl + "img/uk.jpg",
      height: "20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "countryn",
      onClick: GB
    }, "United Kingdom"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:void(0)",
      onClick: ZA
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      onClick: ZA
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "flagn",
      onClick: ZA,
      src: pluginDirUrl + "img/south.jpg",
      height: "20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "countryn",
      onClick: ZA
    }, "South Africa"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:void(0)",
      onClick: AR
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      onClick: AR
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "flagn",
      onClick: AR,
      src: pluginDirUrl + "img/ar.gif",
      height: "20"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "countryn",
      onClick: AR
    }, "Argentina")))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "deyotitle"
    }, "Google daily trending searches ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", {
      className: "copyrightcode"
    }, "Developed by", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.adeleyeayodeji.com/",
      target: "_blank",
      className: "mainright"
    }, "Adeleye Ayodeji"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GoogleTrendsWidgetContainer, null)));
  }
}
//on document ready
document.addEventListener("DOMContentLoaded", () => {
  //load the google data
  const googleTrendsDiv = document.getElementById("google-trends-wp-container");
  react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GoogleTrends, null), googleTrendsDiv);
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map
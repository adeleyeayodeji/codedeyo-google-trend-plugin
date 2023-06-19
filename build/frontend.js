/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/GoogleTrends.js":
/*!****************************************!*\
  !*** ./src/components/GoogleTrends.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoogleTrends)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GoogleTrendsWidgetContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoogleTrendsWidgetContainer */ "./src/components/GoogleTrendsWidgetContainer.js");
/* harmony import */ var _TrendsHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrendsHeader */ "./src/components/TrendsHeader.js");





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
    this.state = {
      country: "NG",
      //countries
      countries: [{
        name: "Nigeria",
        code: "NG"
      }, {
        name: "United States",
        code: "US"
      }, {
        name: "United Kingdom",
        code: "GB"
      }, {
        name: "Australia",
        code: "AU"
      }, {
        name: "Canada",
        code: "CA"
      }, {
        name: "South Africa",
        code: "ZA"
      }],
      isOnline: navigator.onLine,
      error: null,
      searchKeyword: ""
    };
  }

  /**
   * Handle the change event.
   * @param {object} event - The event.
   * @returns {void}
   */
  componentDidMount() {
    //load the google data
    this.initIframe();
    //add event listener for online and offline
    window.addEventListener("online", this.handleConnectionChange);
    //add event listener for online and offline
    window.addEventListener("offline", this.handleConnectionChange);
  }

  /**
   * Handle the change event.
   * @param {object} event - The event.
   * @returns {void}
   */
  componentWillUnmount() {
    window.removeEventListener("online", this.handleConnectionChange);
    window.removeEventListener("offline", this.handleConnectionChange);
  }

  /**
   * check if the user is online
   * @returns {void}
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOnline !== this.state.isOnline) {
      if (this.state.isOnline) {
        //load the google data
        this.initIframe();
        try {
          //show gutenberg toast
          wp.data.dispatch("core/notices").createNotice("success", "Google Trends: You are back online!", {
            type: "snackbar",
            isDismissible: true
          });
        } catch (error) {}
      } else {
        try {
          //show gutenberg toast
          wp.data.dispatch("core/notices").createNotice("error", "Google Trends: You are offline!", {
            type: "snackbar",
            isDismissible: true
          });
        } catch (error) {}
      }
    }
  }

  /**
   * Handle the change event.
   * @param {object} event - The event.
   * @returns {void}
   */
  handleConnectionChange = () => {
    this.setState({
      isOnline: navigator.onLine
    });
  };

  /**
   * Handle the change event.
   * @param {string} newCountry
   * @returns {void}
   */
  updateCountry = ({
    country,
    searchKeyword
  }) => {
    //update the state
    this.setState({
      country: country ? country : this.state.country,
      searchKeyword: searchKeyword ? searchKeyword : this.state.searchKeyword
    });
    //check if search keyword is not empty
    if (searchKeyword) {
      //check if empty
      if (searchKeyword === "") {
        //load the google data
        this.initIframe(this.state.country);
        return;
      }
      //googleTrends-codedeyo-containers--trends-header--close
      let closeBtn = document.querySelector(".googleTrends-codedeyo-containers--trends-header--close");
      //show close button
      closeBtn.style.display = "inline-block";
      //load the google trends chart
      this.loadGoogleTrendsChart(searchKeyword);
      return;
    }
    //load the google data
    this.initIframe(country);
  };

  /**
   * Load the Google trends chart
   * @param {string} searchKeyword
   * @returns {void}
   */
  loadGoogleTrendsChart(searchKeyword) {
    let parentElement = document.querySelector(".trends-widget-container");
    //load the google chart iframe
    try {
      //check for old iframe
      this.checkForOldIframe();
      trends.embed.renderExploreWidgetTo(parentElement, "TIMESERIES", {
        comparisonItem: [{
          keyword: searchKeyword,
          geo: this.state.country,
          time: "today 12-m"
        }],
        category: 0,
        property: ""
      }, {
        exploreQuery: `q=${searchKeyword}&geo=${this.state.country}&date=today 12-m`,
        guestPath: "https://trends.google.com:443/trends/embed/"
      });
    } catch (error) {
      //get error message
      var errorMessage = error.message;
      try {
        //show gutenberg toast
        wp.data.dispatch("core/notices").createNotice("error", "Google Trends: Something went wrong. Please try again!", {
          type: "snackbar",
          isDismissible: true
        });
      } catch (error) {}

      //update the error state
      this.setState({
        error: errorMessage
      });
    }
  }

  /**
   * Check for old iframe
   * @returns {void}
   */
  checkForOldIframe() {
    let parentElement = document.querySelector(".trends-widget-container");
    //check for old iframe
    var iframe = parentElement.querySelector("iframe");
    //check if iframe exist
    if (iframe) {
      //remove the iframe
      parentElement.removeChild(iframe);
    }
  }

  /**
   * Init Iframe
   * @returns {void}
   */
  initIframe(country = null) {
    let parentElement = document.querySelector(".trends-widget-container");
    //load the google iframe
    try {
      //if country is null
      if (!country) {
        //check for old iframe
        this.checkForOldIframe();

        //load the google iframe
        trends.embed.renderWidgetTo(parentElement, "dailytrends", "", {
          geo: this.state.country,
          guestPath: "https://trends.google.com:443/trends/embed/"
        });
      } else {
        //update the iframe src with the country
        parentElement.querySelector("iframe").src = `https://trends.google.com:443/trends/embed/dailytrends?geo=${country}&guestPath=https://trends.google.com:443/trends/embed/`;
      }
    } catch (error) {
      //get error message
      var errorMessage = error.message;
      try {
        //show gutenberg toast
        wp.data.dispatch("core/notices").createNotice("error", "Google Trends: Something went wrong. Please try again!", {
          type: "snackbar",
          isDismissible: true
        });
      } catch (error) {
        //do nothing, gutenberg not found
      }
      //update the error state
      this.setState({
        error: errorMessage
      });
    }
  }

  /**
   * Clear the search keyword
   */
  clearSearchKeyword = () => {
    //get the search input
    let searchInput = document.querySelector(".googleTrends-codedeyo-containers--trends-header--input");
    //googleTrends-codedeyo-containers--trends-header--close
    let closeBtn = document.querySelector(".googleTrends-codedeyo-containers--trends-header--close");
    //clear the search input
    searchInput.value = "";
    //hide the close button
    closeBtn.style.display = "none";
    //update the state
    this.setState({
      searchKeyword: ""
    });
    //load the google data
    this.initIframe(this.state.country);
  };

  /**
   * Reload the google trends chart
   * @returns {void}
   */
  reload = () => {
    //load the google data
    this.initIframe(this.state.country);
  };

  /**
   * Render the Google Trends widget.
   * @returns {object} - The Google Trends widget.
   */
  render() {
    const {
      isOnline,
      error
    } = this.state;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers"
    }, isOnline ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, error ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends--offline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Error: ", error), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://adeleyeayodeji.com",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Contact Us, if you need help"))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TrendsHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      countryData: this.state,
      updateCountry: this.updateCountry,
      clearSearchKeyword: this.clearSearchKeyword,
      reload: this.reload
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GoogleTrendsWidgetContainer__WEBPACK_IMPORTED_MODULE_2__.GoogleTrendsWidgetContainer, null))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends--offline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "You are offline. Please check your internet connection and try again.")));
  }
}

/***/ }),

/***/ "./src/components/GoogleTrendsWidgetContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/GoogleTrendsWidgetContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleTrendsWidgetContainer: () => (/* binding */ GoogleTrendsWidgetContainer)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Widget Iframe Container
 */
class GoogleTrendsWidgetContainer extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    //use iframe to render the widget
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "trends-widget-container"
    });
  }
}

/***/ }),

/***/ "./src/components/TrendsHeader.js":
/*!****************************************!*\
  !*** ./src/components/TrendsHeader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Class component for the Google Trends widget.
 * @class GoogleTrends
 * @extends Component
 * @param {object} props - The props.
 * @constructor
 * @returns {object} - The Google Trends widget.
 */
class TrendsHeader extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    //get the countries
    const {
      countries
    } = this.props.countryData;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends-header--entry"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends-header--flex"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends-header--left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Daily Search Trends")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      className: "googleTrends-codedeyo-containers--trends-header--input",
      placeholder: "Enter a search term",
      name: "searchKeyword",
      onChange: this.onChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "googleTrends-codedeyo-containers--trends-header--close",
      onClick: this.props.clearSearchKeyword
    }, "x"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends-header--right"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      name: "country",
      onChange: this.onChange
    }, countries.map((country, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index,
      value: country.code
    }, country.name))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:;",
      className: "googleTrends-codedeyo-containers--trends-header--reload",
      onClick: this.props.reload
    }, "\u21BB Reload Content"))));
  }

  /**
   * Handle the change event.
   * @param {object} event - The event.
   */
  onChange(event) {
    //get the name and value
    const {
      name,
      value
    } = event.target;
    //update the country
    this.props.updateCountry({
      [name]: value
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendsHeader);

/***/ }),

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GoogleTrends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GoogleTrends */ "./src/components/GoogleTrends.js");
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");






//on document ready
document.addEventListener("DOMContentLoaded", () => {
  //load the google data
  const googleTrendsDiv = document.getElementById("google-trends-wp-container");
  react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_GoogleTrends__WEBPACK_IMPORTED_MODULE_3__["default"], null), googleTrendsDiv);
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map
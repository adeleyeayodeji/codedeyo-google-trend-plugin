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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);






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
      country: codedeyoGoogleTrends.default_country,
      //countries
      countries: [{
        name: "Afghanistan",
        code: "AF"
      }, {
        name: "Albania",
        code: "AL"
      }, {
        name: "Algeria",
        code: "DZ"
      }, {
        name: "American Samoa",
        code: "AS"
      }, {
        name: "Andorra",
        code: "AD"
      }, {
        name: "Angola",
        code: "AO"
      }, {
        name: "Anguilla",
        code: "AI"
      }, {
        name: "Antigua & Barbuda",
        code: "AG"
      }, {
        name: "Argentina",
        code: "AR"
      }, {
        name: "Armenia",
        code: "AM"
      }, {
        name: "Aruba",
        code: "AW"
      }, {
        name: "Australia",
        code: "AU"
      }, {
        name: "Austria",
        code: "AT"
      }, {
        name: "Azerbaijan",
        code: "AZ"
      }, {
        name: "Bahamas",
        code: "BS"
      }, {
        name: "Bahrain",
        code: "BH"
      }, {
        name: "Bangladesh",
        code: "BD"
      }, {
        name: "Barbados",
        code: "BB"
      }, {
        name: "Belarus",
        code: "BY"
      }, {
        name: "Belgium",
        code: "BE"
      }, {
        name: "Belize",
        code: "BZ"
      }, {
        name: "Benin",
        code: "BJ"
      }, {
        name: "Bermuda",
        code: "BM"
      }, {
        name: "Bhutan",
        code: "BT"
      }, {
        name: "Bolivia",
        code: "BO"
      }, {
        name: "Bosnia & Herzegovina",
        code: "BA"
      }, {
        name: "Botswana",
        code: "BW"
      }, {
        name: "Brazil",
        code: "BR"
      }, {
        name: "British Indian Ocean Territory",
        code: "IO"
      }, {
        name: "British Virgin Islands",
        code: "VG"
      }, {
        name: "Brunei",
        code: "BN"
      }, {
        name: "Bulgaria",
        code: "BG"
      }, {
        name: "Burkina Faso",
        code: "BF"
      }, {
        name: "Burundi",
        code: "BI"
      }, {
        name: "Cambodia",
        code: "KH"
      }, {
        name: "Cameroon",
        code: "CM"
      }, {
        name: "Canada",
        code: "CA"
      }, {
        name: "Cape Verde",
        code: "CV"
      }, {
        name: "Caribbean Netherlands",
        code: "BQ"
      }, {
        name: "Cayman Islands",
        code: "KY"
      }, {
        name: "Central African Republic",
        code: "CF"
      }, {
        name: "Chad",
        code: "TD"
      }, {
        name: "Chile",
        code: "CL"
      }, {
        name: "China",
        code: "CN"
      }, {
        name: "Colombia",
        code: "CO"
      }, {
        name: "Comoros",
        code: "KM"
      }, {
        name: "Congo - Brazzaville",
        code: "CG"
      }, {
        name: "Congo - Kinshasa",
        code: "CD"
      }, {
        name: "Cook Islands",
        code: "CK"
      }, {
        name: "Costa Rica",
        code: "CR"
      }, {
        name: "Côte d’Ivoire",
        code: "CI"
      }, {
        name: "Croatia",
        code: "HR"
      }, {
        name: "Cuba",
        code: "CU"
      }, {
        name: "Curaçao",
        code: "CW"
      }, {
        name: "Cyprus",
        code: "CY"
      }, {
        name: "Czechia",
        code: "CZ"
      }, {
        name: "Denmark",
        code: "DK"
      }, {
        name: "Djibouti",
        code: "DJ"
      }, {
        name: "Dominica",
        code: "DM"
      }, {
        name: "Dominican Republic",
        code: "DO"
      }, {
        name: "Ecuador",
        code: "EC"
      }, {
        name: "Egypt",
        code: "EG"
      }, {
        name: "El Salvador",
        code: "SV"
      }, {
        name: "Equatorial Guinea",
        code: "GQ"
      }, {
        name: "Eritrea",
        code: "ER"
      }, {
        name: "Estonia",
        code: "EE"
      }, {
        name: "Eswatini",
        code: "SZ"
      }, {
        name: "Ethiopia",
        code: "ET"
      }, {
        name: "Falkland Islands (Islas Malvinas)",
        code: "FK"
      }, {
        name: "Faroe Islands",
        code: "FO"
      }, {
        name: "Fiji",
        code: "FJ"
      }, {
        name: "Finland",
        code: "FI"
      }, {
        name: "France",
        code: "FR"
      }, {
        name: "French Guiana",
        code: "GF"
      }, {
        name: "French Polynesia",
        code: "PF"
      }, {
        name: "Gabon",
        code: "GA"
      }, {
        name: "Gambia",
        code: "GM"
      }, {
        name: "Georgia",
        code: "GE"
      }, {
        name: "Germany",
        code: "DE"
      }, {
        name: "Ghana",
        code: "GH"
      }, {
        name: "Gibraltar",
        code: "GI"
      }, {
        name: "Greece",
        code: "GR"
      }, {
        name: "Greenland",
        code: "GL"
      }, {
        name: "Grenada",
        code: "GD"
      }, {
        name: "Guadeloupe",
        code: "GP"
      }, {
        name: "Guam",
        code: "GU"
      }, {
        name: "Guatemala",
        code: "GT"
      }, {
        name: "Guinea",
        code: "GN"
      }, {
        name: "Guinea-Bissau",
        code: "GW"
      }, {
        name: "Guyana",
        code: "GY"
      }, {
        name: "Haiti",
        code: "HT"
      }, {
        name: "Honduras",
        code: "HN"
      }, {
        name: "Hong Kong",
        code: "HK"
      }, {
        name: "Hungary",
        code: "HU"
      }, {
        name: "Iceland",
        code: "IS"
      }, {
        name: "India",
        code: "IN"
      }, {
        name: "Indonesia",
        code: "ID"
      }, {
        name: "Iran",
        code: "IR"
      }, {
        name: "Iraq",
        code: "IQ"
      }, {
        name: "Ireland",
        code: "IE"
      }, {
        name: "Israel",
        code: "IL"
      }, {
        name: "Italy",
        code: "IT"
      }, {
        name: "Jamaica",
        code: "JM"
      }, {
        name: "Japan",
        code: "JP"
      }, {
        name: "Jordan",
        code: "JO"
      }, {
        name: "Kazakhstan",
        code: "KZ"
      }, {
        name: "Kenya",
        code: "KE"
      }, {
        name: "Kiribati",
        code: "KI"
      }, {
        name: "Kosovo",
        code: "XK"
      }, {
        name: "Kuwait",
        code: "KW"
      }, {
        name: "Kyrgyzstan",
        code: "KG"
      }, {
        name: "Laos",
        code: "LA"
      }, {
        name: "Latvia",
        code: "LV"
      }, {
        name: "Lebanon",
        code: "LB"
      }, {
        name: "Lesotho",
        code: "LS"
      }, {
        name: "Liberia",
        code: "LR"
      }, {
        name: "Libya",
        code: "LY"
      }, {
        name: "Liechtenstein",
        code: "LI"
      }, {
        name: "Lithuania",
        code: "LT"
      }, {
        name: "Luxembourg",
        code: "LU"
      }, {
        name: "Macao",
        code: "MO"
      }, {
        name: "Madagascar",
        code: "MG"
      }, {
        name: "Malawi",
        code: "MW"
      }, {
        name: "Malaysia",
        code: "MY"
      }, {
        name: "Maldives",
        code: "MV"
      }, {
        name: "Mali",
        code: "ML"
      }, {
        name: "Malta",
        code: "MT"
      }, {
        name: "Marshall Islands",
        code: "MH"
      }, {
        name: "Martinique",
        code: "MQ"
      }, {
        name: "Mauritania",
        code: "MR"
      }, {
        name: "Mauritius",
        code: "MU"
      }, {
        name: "Mexico",
        code: "MX"
      }, {
        name: "Micronesia",
        code: "FM"
      }, {
        name: "Moldova",
        code: "MD"
      }, {
        name: "Monaco",
        code: "MC"
      }, {
        name: "Mongolia",
        code: "MN"
      }, {
        name: "Montenegro",
        code: "ME"
      }, {
        name: "Montserrat",
        code: "MS"
      }, {
        name: "Morocco",
        code: "MA"
      }, {
        name: "Mozambique",
        code: "MZ"
      }, {
        name: "Myanmar (Burma)",
        code: "MM"
      }, {
        name: "Namibia",
        code: "NA"
      }, {
        name: "Nauru",
        code: "NR"
      }, {
        name: "Nepal",
        code: "NP"
      }, {
        name: "Netherlands",
        code: "NL"
      }, {
        name: "New Caledonia",
        code: "NC"
      }, {
        name: "New Zealand",
        code: "NZ"
      }, {
        name: "Nicaragua",
        code: "NI"
      }, {
        name: "Niger",
        code: "NE"
      }, {
        name: "Nigeria",
        code: "NG"
      }, {
        name: "Niue",
        code: "NU"
      }, {
        name: "Norfolk Island",
        code: "NF"
      }, {
        name: "North Korea",
        code: "KP"
      }, {
        name: "North Macedonia",
        code: "MK"
      }, {
        name: "Northern Mariana Islands",
        code: "MP"
      }, {
        name: "Norway",
        code: "NO"
      }, {
        name: "Oman",
        code: "OM"
      }, {
        name: "Pakistan",
        code: "PK"
      }, {
        name: "Palau",
        code: "PW"
      }, {
        name: "Palestine",
        code: "PS"
      }, {
        name: "Panama",
        code: "PA"
      }, {
        name: "Papua New Guinea",
        code: "PG"
      }, {
        name: "Paraguay",
        code: "PY"
      }, {
        name: "Peru",
        code: "PE"
      }, {
        name: "Philippines",
        code: "PH"
      }, {
        name: "Poland",
        code: "PL"
      }, {
        name: "Portugal",
        code: "PT"
      }, {
        name: "Puerto Rico",
        code: "PR"
      }, {
        name: "Qatar",
        code: "QA"
      }, {
        name: "Réunion",
        code: "RE"
      }, {
        name: "Romania",
        code: "RO"
      }, {
        name: "Russia",
        code: "RU"
      }, {
        name: "Rwanda",
        code: "RW"
      }, {
        name: "Samoa",
        code: "WS"
      }, {
        name: "San Marino",
        code: "SM"
      }, {
        name: "São Tomé & Príncipe",
        code: "ST"
      }, {
        name: "Saudi Arabia",
        code: "SA"
      }, {
        name: "Senegal",
        code: "SN"
      }, {
        name: "Serbia",
        code: "RS"
      }, {
        name: "Seychelles",
        code: "SC"
      }, {
        name: "Sierra Leone",
        code: "SL"
      }, {
        name: "Singapore",
        code: "SG"
      }, {
        name: "Sint Maarten",
        code: "SX"
      }, {
        name: "Slovakia",
        code: "SK"
      }, {
        name: "Slovenia",
        code: "SI"
      }, {
        name: "Solomon Islands",
        code: "SB"
      }, {
        name: "Somalia",
        code: "SO"
      }, {
        name: "South Africa",
        code: "ZA"
      }, {
        name: "South Korea",
        code: "KR"
      }, {
        name: "South Sudan",
        code: "SS"
      }, {
        name: "Spain",
        code: "ES"
      }, {
        name: "Sri Lanka",
        code: "LK"
      }, {
        name: "St. Barthélemy",
        code: "BL"
      }, {
        name: "St. Helena",
        code: "SH"
      }, {
        name: "St. Kitts & Nevis",
        code: "KN"
      }, {
        name: "St. Lucia",
        code: "LC"
      }, {
        name: "St. Martin",
        code: "MF"
      }, {
        name: "St. Pierre & Miquelon",
        code: "PM"
      }, {
        name: "St. Vincent & Grenadines",
        code: "VC"
      }, {
        name: "Sudan",
        code: "SD"
      }, {
        name: "Suriname",
        code: "SR"
      }, {
        name: "Sweden",
        code: "SE"
      }, {
        name: "Switzerland",
        code: "CH"
      }, {
        name: "Syria",
        code: "SY"
      }, {
        name: "Taiwan",
        code: "TW"
      }, {
        name: "Tajikistan",
        code: "TJ"
      }, {
        name: "Tanzania",
        code: "TZ"
      }, {
        name: "Thailand",
        code: "TH"
      }, {
        name: "Timor-Leste",
        code: "TL"
      }, {
        name: "Togo",
        code: "TG"
      }, {
        name: "Tokelau",
        code: "TK"
      }, {
        name: "Tonga",
        code: "TO"
      }, {
        name: "Trinidad & Tobago",
        code: "TT"
      }, {
        name: "Tunisia",
        code: "TN"
      }, {
        name: "Türkiye",
        code: "TR"
      }, {
        name: "Turkmenistan",
        code: "TM"
      }, {
        name: "Turks & Caicos Islands",
        code: "TC"
      }, {
        name: "Tuvalu",
        code: "TV"
      }, {
        name: "U.S. Virgin Islands",
        code: "VI"
      }, {
        name: "Uganda",
        code: "UG"
      }, {
        name: "Ukraine",
        code: "UA"
      }, {
        name: "United Arab Emirates",
        code: "AE"
      }, {
        name: "United Kingdom",
        code: "GB"
      }, {
        name: "United States",
        code: "US"
      }, {
        name: "Uruguay",
        code: "UY"
      }, {
        name: "Uzbekistan",
        code: "UZ"
      }, {
        name: "Vanuatu",
        code: "VU"
      }, {
        name: "Vatican City",
        code: "VA"
      }, {
        name: "Venezuela",
        code: "VE"
      }, {
        name: "Vietnam",
        code: "VN"
      }, {
        name: "Wallis & Futuna",
        code: "WF"
      }, {
        name: "Yemen",
        code: "YE"
      }, {
        name: "Zambia",
        code: "ZM"
      }, {
        name: "Zimbabwe",
        code: "ZW"
      }],
      isOnline: navigator.onLine,
      error: null,
      searchKeyword: "",
      showModal: false,
      closeModal: false
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
   * Settings Page
   * @returns {void}
   */
  showSettings = () => {
    //show alert dialog
    this.setState({
      showModal: true
    });
  };

  /**
   * Close the modal
   * @returns {void}
   */
  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  /**
   * Update the default country
   * @param {object} event - The event.
   * @returns {void}
   */
  updateDefaultCountry = event => {
    //get the name and value
    const {
      value
    } = event.target;
    //update the country save to database as option
    this.handleApiRequestForDefaultCountry(value);
    //show gutenberg toast
    try {
      wp.data.dispatch("core/notices").createNotice("success", "Google Trends: Default Country updated!", {
        type: "snackbar",
        isDismissible: true
      });
    } catch (error) {}
    //update the state
    this.setState({
      country: value
    });
    //update the iframe state
    this.reload();
  };

  /**
   * Handle API Request for Default Country
   * @param {string} country
   * @returns {void}
   */
  handleApiRequestForDefaultCountry(country) {
    // Save the selected country to WordPress options
    jQuery.ajax({
      url: codedeyoGoogleTrends.ajax_url,
      type: "POST",
      data: {
        action: "update_default_country_codedeyo_googletrend",
        country: country,
        nonce: codedeyoGoogleTrends.nonce
      },
      success: function (response) {
        // console.log("Default country saved to database:", response);
      }
    });
  }

  /**
   * Render the Google Trends widget.
   * @returns {object} - The Google Trends widget.
   */
  render() {
    const {
      isOnline,
      error,
      showModal,
      country
    } = this.state;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers"
    }, isOnline ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, error ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends--offline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Error: ", error), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://adeleyeayodeji.com",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Contact Us, if you need help"))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showModal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
      title: "Google Trends Settings",
      onRequestClose: this.closeModal
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "googleTrends-codedeyo-containers--trends--settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Set the default country for the Google Trends widget."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      onChange: this.updateDefaultCountry,
      className: "googleTrends-codedeyo-containers--trends-header--select"
    }, this.state.countries.map((countryd, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index,
      value: countryd.code,
      selected: countryd.code === country
    }, countryd.name)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://adeleyeayodeji.com",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Contact Us, if you need help")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TrendsHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      countryData: this.state,
      updateCountry: this.updateCountry,
      clearSearchKeyword: this.clearSearchKeyword,
      reload: this.reload,
      showSettings: this.showSettings
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
      countries,
      country
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
    }, countries.map((countryd, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index,
      value: countryd.code,
      selected: countryd.code === country
    }, countryd.name))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:;",
      className: "googleTrends-codedeyo-containers--trends-header--reload",
      onClick: this.props.reload
    }, "\u21BB Reload Content"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "javascript:;",
      onClick: this.props.showSettings
    }, "\u2699"))));
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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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
  //check if element exist
  if (googleTrendsDiv) {
    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_GoogleTrends__WEBPACK_IMPORTED_MODULE_3__["default"], null), googleTrendsDiv);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map
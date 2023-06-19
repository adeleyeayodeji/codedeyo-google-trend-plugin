import React from "react";
import { GoogleTrendsWidgetContainer } from "./GoogleTrendsWidgetContainer";
import TrendsHeader from "./TrendsHeader";

/**
 * Class component for the Google Trends widget.
 * @class GoogleTrends
 */
export default class GoogleTrends extends React.Component {
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
      countries: [
        { name: "Nigeria", code: "NG" },
        { name: "United States", code: "US" },
        { name: "United Kingdom", code: "GB" },
        { name: "Australia", code: "AU" },
        { name: "Canada", code: "CA" },
        { name: "South Africa", code: "ZA" }
      ],
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
          wp.data
            .dispatch("core/notices")
            .createNotice("success", "Google Trends: You are back online!", {
              type: "snackbar",
              isDismissible: true
            });
        } catch (error) {}
      } else {
        try {
          //show gutenberg toast
          wp.data
            .dispatch("core/notices")
            .createNotice("error", "Google Trends: You are offline!", {
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
    this.setState({ isOnline: navigator.onLine });
  };

  /**
   * Handle the change event.
   * @param {string} newCountry
   * @returns {void}
   */
  updateCountry = ({ country, searchKeyword }) => {
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
      let closeBtn = document.querySelector(
        ".googleTrends-codedeyo-containers--trends-header--close"
      );
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
      trends.embed.renderExploreWidgetTo(
        parentElement,
        "TIMESERIES",
        {
          comparisonItem: [
            {
              keyword: searchKeyword,
              geo: this.state.country,
              time: "today 12-m"
            }
          ],
          category: 0,
          property: ""
        },
        {
          exploreQuery: `q=${searchKeyword}&geo=${this.state.country}&date=today 12-m`,
          guestPath: "https://trends.google.com:443/trends/embed/"
        }
      );
    } catch (error) {
      //get error message
      var errorMessage = error.message;
      try {
        //show gutenberg toast
        wp.data
          .dispatch("core/notices")
          .createNotice(
            "error",
            "Google Trends: Something went wrong. Please try again!",
            {
              type: "snackbar",
              isDismissible: true
            }
          );
      } catch (error) {}

      //update the error state
      this.setState({ error: errorMessage });
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
        parentElement.querySelector(
          "iframe"
        ).src = `https://trends.google.com:443/trends/embed/dailytrends?geo=${country}&guestPath=https://trends.google.com:443/trends/embed/`;
      }
    } catch (error) {
      //get error message
      var errorMessage = error.message;
      try {
        //show gutenberg toast
        wp.data
          .dispatch("core/notices")
          .createNotice(
            "error",
            "Google Trends: Something went wrong. Please try again!",
            {
              type: "snackbar",
              isDismissible: true
            }
          );
      } catch (error) {
        //do nothing, gutenberg not found
      }
      //update the error state
      this.setState({ error: errorMessage });
    }
  }

  /**
   * Clear the search keyword
   */
  clearSearchKeyword = () => {
    //get the search input
    let searchInput = document.querySelector(
      ".googleTrends-codedeyo-containers--trends-header--input"
    );
    //googleTrends-codedeyo-containers--trends-header--close
    let closeBtn = document.querySelector(
      ".googleTrends-codedeyo-containers--trends-header--close"
    );
    //clear the search input
    searchInput.value = "";
    //hide the close button
    closeBtn.style.display = "none";
    //update the state
    this.setState({ searchKeyword: "" });
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
    const { isOnline, error } = this.state;
    return (
      <div className="googleTrends-codedeyo-containers">
        {isOnline ? (
          <>
            {error ? (
              <div className="googleTrends-codedeyo-containers--trends--offline">
                <p>Error: {error}</p>
                <p>
                  <a
                    href="https://adeleyeayodeji.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Contact Us, if you need help
                  </a>
                </p>
              </div>
            ) : (
              <>
                <TrendsHeader
                  countryData={this.state}
                  updateCountry={this.updateCountry}
                  clearSearchKeyword={this.clearSearchKeyword}
                  reload={this.reload}
                />
                <GoogleTrendsWidgetContainer />
              </>
            )}
          </>
        ) : (
          <div className="googleTrends-codedeyo-containers--trends--offline">
            <p>
              You are offline. Please check your internet connection and try
              again.
            </p>
          </div>
        )}
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";

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
export class GoogleTrendsWidgetContainer extends React.Component {
  render() {
    //use iframe to render the widget
    return (
      <div className="trends-widget-container">
        <iframe
          id="trends-widget-1"
          width="100%"
          height="400px"
          borderRadius="5px"
          frameborder="0"
          scrolling="0"
          src="https://trends.google.com:443/trends/embed/dailytrends?geo=NG"></iframe>
      </div>
    );
  }
}

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
  }

  /**
   * Render the Google Trends widget.
   * @returns {object} - The Google Trends widget.
   */
  render() {
    //get plugin dir url
    const pluginDirUrl = codedeyoGoogleTrends.plugin_dir_url;
    return (
      <div className="holder">
        <div className="holder2">
          <div className="selectpart">
            <div className="dropdowncode">
              <p
                onClick={myFunctioncode}
                className="dropbtncode"
                id="codenewvalue"
                title="Select Country">
                Select Country
              </p>
              <div id="myDropdowncode" className="dropdown-contentcode">
                <a href="javascript:void(0)" onClick={US}>
                  <p onClick={US}>
                    <img
                      className="flagn"
                      onClick={US}
                      src={pluginDirUrl + "img/us.png"}
                      height="20"
                    />
                    <p className="countryn" onClick={US}>
                      United State
                    </p>
                  </p>
                </a>
                <a href="javascript:void(0)" onClick={NG}>
                  <p onClick={NG}>
                    <img
                      className="flagn"
                      onClick={NG}
                      src={pluginDirUrl + "img/ng.png"}
                      height="20"
                    />
                    <p className="countryn" onClick={NG}>
                      Nigeria
                    </p>
                  </p>
                </a>
                <a href="javascript:void(0)" onClick={AU}>
                  <p onClick={AU}>
                    <img
                      className="flagn"
                      onClick={AU}
                      src={pluginDirUrl + "img/au.jpg"}
                      height="20"
                    />
                    <p className="countryn" onClick={AU}>
                      Australia
                    </p>
                  </p>
                </a>
                <a href="javascript:void(0)" onClick={CA}>
                  <p onClick={CA}>
                    <img
                      className="flagn"
                      onClick={CA}
                      src={pluginDirUrl + "img/ca.jpg"}
                      height="20"
                    />
                    <p className="countryn" onClick={CA}>
                      Canada
                    </p>
                  </p>
                </a>
                <a href="javascript:void(0)" onClick={GB}>
                  <p onClick={GB}>
                    <img
                      className="flagn"
                      onClick={GB}
                      src={pluginDirUrl + "img/uk.jpg"}
                      height="20"
                    />
                    <p className="countryn" onClick={GB}>
                      United Kingdom
                    </p>
                  </p>
                </a>
                <a href="javascript:void(0)" onClick={ZA}>
                  <p onClick={ZA}>
                    <img
                      className="flagn"
                      onClick={ZA}
                      src={pluginDirUrl + "img/south.jpg"}
                      height="20"
                    />
                    <p className="countryn" onClick={ZA}>
                      South Africa
                    </p>
                  </p>
                </a>
                <a href="javascript:void(0)" onClick={AR}>
                  <p onClick={AR}>
                    <img
                      className="flagn"
                      onClick={AR}
                      src={pluginDirUrl + "img/ar.gif"}
                      height="20"
                    />
                    <p className="countryn" onClick={AR}>
                      Argentina
                    </p>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="deyotitle">
            Google daily trending searches <br />
            <small className="copyrightcode">
              Developed by{" "}
              <a
                href="https://www.adeleyeayodeji.com/"
                target="_blank"
                className="mainright">
                Adeleye Ayodeji
              </a>
            </small>
          </div>
          <GoogleTrendsWidgetContainer />
        </div>
      </div>
    );
  }
}
//on document ready
document.addEventListener("DOMContentLoaded", () => {
  //load the google data
  const googleTrendsDiv = document.getElementById("google-trends-wp-container");
  ReactDOM.render(<GoogleTrends />, googleTrendsDiv);
});

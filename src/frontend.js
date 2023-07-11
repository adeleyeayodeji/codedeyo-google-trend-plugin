import React from "react";
import ReactDOM from "react-dom";
import GoogleTrends from "./components/GoogleTrends";
import "./frontend.scss";

//on document ready
document.addEventListener("DOMContentLoaded", () => {
  //load the google data
  const googleTrendsDiv = document.getElementById("google-trends-wp-container");
  //check if element exist
  if (googleTrendsDiv) {
    ReactDOM.render(<GoogleTrends />, googleTrendsDiv);
  }
});

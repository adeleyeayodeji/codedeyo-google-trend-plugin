import React, { Component } from "react";

/**
 * Class component for the Google Trends widget.
 * @class GoogleTrends
 * @extends Component
 * @param {object} props - The props.
 * @constructor
 * @returns {object} - The Google Trends widget.
 */
class TrendsHeader extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    //get the countries
    const { countries } = this.props.countryData;
    return (
      <div className="googleTrends-codedeyo-containers--trends-header">
        <div className="googleTrends-codedeyo-containers--trends-header--flex">
          <div className="googleTrends-codedeyo-containers--trends-header--left">
            <div>
              <p>Daily Search Trends</p>
            </div>
            <div>
              <input
                type="text"
                className="googleTrends-codedeyo-containers--trends-header--input"
                placeholder="Enter a search term"
                name="searchKeyword"
                onChange={this.onChange}
              />
              <span
                className="googleTrends-codedeyo-containers--trends-header--close"
                onClick={this.props.clearSearchKeyword}>
                x
              </span>
            </div>
          </div>
          <div className="googleTrends-codedeyo-containers--trends-header--right">
            <select name="country" onChange={this.onChange}>
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Handle the change event.
   * @param {object} event - The event.
   */
  onChange(event) {
    //get the name and value
    const { name, value } = event.target;
    //update the country
    this.props.updateCountry({ [name]: value });
  }
}

export default TrendsHeader;

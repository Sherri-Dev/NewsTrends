import React, { Component } from "react";
import ToggleMode from "./Toggler";
const countries = [
  {
    name: "United States",
    acro: "us",
  },
  {
    name: "Australia",
    acro: "au",
  },
  {
    name: "Austria",
    acro: "at",
  },
  {
    name: "Belgium",
    acro: "be",
  },
  {
    name: "Brazil",
    acro: "br",
  },
  {
    name: "Balgaria",
    acro: "bg",
  },
  {
    name: "Canada",
    acro: "ca",
  },
  {
    name: "China",
    acro: "cn",
  },
  {
    name: "Columbia",
    acro: "co",
  },
  {
    name: "Czec Rebublic",
    acro: "cz",
  },
  {
    name: "Egypt",
    acro: "eg",
  },
  {
    name: "France",
    acro: "fr",
  },
  {
    name: "Germany",
    acro: "de",
  },
  {
    name: "Greece",
    acro: "gr",
  },
  {
    name: "Hong Kong",
    acro: "hk",
  },
  {
    name: "Hungary",
    acro: "hu",
  },
  {
    name: "India",
    acro: "in",
  },
  {
    name: "Indonatia",
    acro: "id",
  },
  {
    name: "Ireland",
    acro: "ie",
  },
  {
    name: "Israel",
    acro: "il",
  },
  {
    name: "Italy",
    acro: "it",
  },
  {
    name: "Japan",
    acro: "jp",
  },
  {
    name: "Latvia",
    acro: "lv",
  },
  {
    name: "Lithuania",
    acro: "lt",
  },
  {
    name: "Malaysia",
    acro: "my",
  },
  {
    name: "Maxico",
    acro: "mx",
  },
  {
    name: "Morocco",
    acro: "ma",
  },
  {
    name: "Netherlands",
    acro: "nl",
  },
  {
    name: "New Zealand",
    acro: "nz",
  },
  {
    name: "Nigeria",
    acro: "ng",
  },
  {
    name: "Norway",
    acro: "no",
  },
  {
    name: "Philippines",
    acro: "ph",
  },
  {
    name: "Poland",
    acro: "pl",
  },
  {
    name: "Portugal",
    acro: "pt",
  },
  {
    name: "Romania",
    acro: "ro",
  },
  {
    name: "Saudi Arabia",
    acro: "sa",
  },
  {
    name: "Serbia",
    acro: "rs",
  },
  {
    name: "Singapore",
    acro: "sg",
  },
  {
    name: "Slovakia",
    acro: "sl",
  },
  {
    name: "Slovenia",
    acro: "si",
  },
  {
    name: "South Africa",
    acro: "za",
  },
  {
    name: "South Koria",
    acro: "kr",
  },
  {
    name: "Sweden",
    acro: "se",
  },
  {
    name: "Switzerland",
    acro: "ch",
  },
  {
    name: "Taiwan",
    acro: "tw",
  },
  {
    name: "Thailand",
    acro: "th",
  },
  {
    name: "Turkey",
    acro: "tr",
  },
  {
    name: "UAE",
    acro: "ae",
  },
  {
    name: "Ukraine",
    acro: "ua",
  },
  {
    name: "United Kingdom",
    acro: "gb",
  },
  {
    name: "Argentina",
    acro: "at",
  },
  {
    name: "Venuzuela",
    acro: "ve",
  },
];
const languages = [
  {
    name: "English",
    acro: "en",
  },
  {
    name: "German",
    acro: "de",
  },
  {
    name: "Arabic",
    acro: "ar",
  },
  {
    name: "Spanish",
    acro: "es",
  },
  {
    name: "French",
    acro: "fr",
  },
  {
    name: "Hebrew",
    acro: "he",
  },
  {
    name: "Italian",
    acro: "it",
  },
  {
    name: "Dutch",
    acro: "nl",
  },
  {
    name: "Norwegian",
    acro: "no",
  },
  {
    name: "Portoguese",
    acro: "pt",
  },
  {
    name: "Russian",
    acro: "ru",
  },
  {
    name: "Swedish",
    acro: "se",
  },
  {
    name: "Chinese",
    acro: "zh",
  },
];
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      country: "us",
      language: "en",
    };
  }
  handleChange = async (param, e) => {
    await this.setState({ [param]: e.target.value });
    await this.props.getParams(this.state.country, this.state.language);
  };
  render() {
    return (
      <header className="flex flex-wrap items-center justify-between gap-2 sm:gap-0 flex-col sm:flex-row px-6 py-3 w-full bg-blue-700 text-white fixed top-0 z-20 dark:bg-black">
        <a href="/" className="text-2xl font-bold dark:text-white">
          <span style={{ fontFamily: "Roboto Slab" }}>News Trends </span>
        </a>
        <div className="flex flex-wrap sm:items-center mx-auto sm:mx-0 justify-between flex-col sm:flex-row gap-2 sm:gap-6">
          <div>
            <span className="text-sm sm:text-base mr-3 text-blue-200">
              Select Country
            </span>
            <select
              name="lan-box"
              className="cursor-pointer text-sm sm:text-lg bg-blue-800 sm:px-2 py-1 focus:outline-none text-gray-300 rounded focus:ring-2 ring-blue-400 dark:bg-blue-900"
              onChange={(e) => this.handleChange("country", e)}
            >
              {countries.map((con, index) => {
                return (
                  <option value={con.acro} key={index} className="rounded">
                    {con.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <span className="text-sm sm:text-base  mr-3 text-blue-200">
              Select Language
            </span>
            <select
              name="lan-box"
              className="cursor-pointer text-sm sm:text-lg bg-blue-800 sm:px-2 py-1 focus:outline-none text-gray-300 rounded focus:ring-2 ring-blue-400 dark:bg-blue-900"
              onChange={(e) => this.handleChange("language", e)}
            >
              {languages.map((lan, index) => {
                return (
                  <option value={lan.acro} key={index} className="rounded">
                    {lan.name}
                  </option>
                );
              })}
            </select>
          </div>
          <ToggleMode />
        </div>
      </header>
    );
  }
}

import React, { Component } from "react";

export class Menu extends Component {
  handleMenuClick = (e) => {
    e.target.parentElement.querySelectorAll("li").forEach((item) => {
      item.classList.remove("bg-blue-700");
      item.classList.remove("text-white");
      item.classList.add("text-gray-700");
    });
    e.target.classList.add("bg-blue-700");
    e.target.classList.remove("text-gray-700");
    e.target.classList.add("text-white");
    this.props.setCategory(e.target.textContent.toLowerCase());
  };
  render() {
    return (
      <ul className="flex items-center justify-between flex-wrap border dark:border-gray-800 rounded w-fit overflow-hidden">
        <li
          className="px-4 py-2 hover:bg-blue-700 hover:text-white link  transition-colors duration-200 cursor-pointer bg-blue-700 text-white link dark:text-white"
          onClick={this.handleMenuClick}
        >
          General
        </li>
        <li
          className="px-4 py-2 hover:bg-blue-700 hover:text-white link  transition-colors duration-200 cursor-pointer  text-gray-700 dark:text-white"
          onClick={this.handleMenuClick}
        >
          Business{" "}
        </li>
        <li
          className="px-4 py-2 hover:bg-blue-700 hover:text-white link  transition-colors duration-200 cursor-pointer  text-gray-700 dark:text-white"
          onClick={this.handleMenuClick}
        >
          Entertainment
        </li>
        <li
          className="px-4 py-2 hover:bg-blue-700 hover:text-white link  transition-colors duration-200 cursor-pointer text-gray-700 dark:text-white"
          onClick={this.handleMenuClick}
        >
          Health
        </li>
        <li
          className="px-4 py-2 hover:bg-blue-700 hover:text-white link  transition-colors duration-200 cursor-pointer text-gray-700 dark:text-white"
          onClick={this.handleMenuClick}
        >
          Science
        </li>
        <li
          className="px-4 py-2 hover:bg-blue-700 hover:text-white link  transition-colors duration-200 cursor-pointer text-gray-700 dark:text-white"
          onClick={this.handleMenuClick}
        >
          Sports
        </li>
        <li
          className="px-4 py-2 hover:bg-blue-700 hover:text-white link  transition-colors duration-200 cursor-pointer text-gray-700 dark:text-white"
          onClick={this.handleMenuClick}
        >
          Technology
        </li>
      </ul>
    );
  }
}

export default Menu;

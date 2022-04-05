import React, { Component } from "react";

export default class Footer extends Component {
  getYear = () => {
    return new Date().getFullYear();
  };
  render() {
    return (
      <footer className=" px-8 py-3 bg-blue-800 text-gray-200 dark:bg-black">
        <p className="mx-auto w-fit">
          <span className="mr-2">&copy;</span>Manak Developers (Sheraz Saeed){" "}
          {this.getYear()}
        </p>
      </footer>
    );
  }
}

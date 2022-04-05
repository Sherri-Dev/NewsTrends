import React, { Component } from "react";
import loading from "../loading.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <img src={loading} alt="loader" />
      </div>
    );
  }
}

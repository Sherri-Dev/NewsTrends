import React, { Component } from "react";

export class Badge extends Component {
  render() {
    const { title, bgColor, color } = this.props;
    return (
      <div
        className={`text-white text-sm sm:text-base font-['Poppins'] uppercase w-fit rounded ${
          bgColor === "transparent" ? "p-0" : "p-2"
        }`}
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        {title}
      </div>
    );
  }
}

export default Badge;

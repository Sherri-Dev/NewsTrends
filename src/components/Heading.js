import React, { Component } from "react";

export class Heading extends Component {
  render() {
    return (
      <div className="flex-grow mb-2">
        <h1
          className="text-3xl font-bold before:content-[''] before:w-[0.6rem] before:h-[0.6rem] before:absolute before:top-1/2 before:left-[110%] relative before:rounded-full before:bg-blue-700 dark:text-white w-fit"
          style={{ fontFamily: "Roboto Slab" }}
        >
          {this.props.heading}
        </h1>
      </div>
    );
  }
}

export default Heading;

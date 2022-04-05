import React, { Component } from "react";
import Header from "./components/Header";
import TopStories from "./components/TopStories";
import WhatNew from "./components/WhatNew";
import Popular from "./components/Popular";
import Latest from "./components/Latest";
import Footer from "./components/Footer";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      country: "us",
      language: "en",
    };
  }
  getParams = (con, lan) => {
    this.setState({
      country: con,
      language: lan,
    });
  };
  render() {
    return (
      <>
        <Header getParams={this.getParams} />
        <TopStories
          country={this.state.country}
          language={this.state.language}
        />
        <WhatNew country={this.state.country} language={this.state.language} />
        <Popular country={this.state.country} language={this.state.language} />
        <Latest country={this.state.country} language={this.state.language} />
        <Footer />
      </>
    );
  }
}

export default News;

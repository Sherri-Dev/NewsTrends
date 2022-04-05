import React, { Component } from "react";
import Heading from "./Heading";
import NewsItem from "./NewsItem";
import MiniNews from "./MiniNews";
import Menu from "./Menu";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_NEW_API;
export default class WhatNew extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null,
      offset: 0,
      loading: false,
      category: "general",
    };
  }
  componentDidMount = async () => {
    this.setState({
      loading: true,
    });
    await this.updateNews();
  };
  setCategory = (category) => {
    this.setState({
      category: category,
      loading: true,
    });
    setTimeout(async () => {
      await this.updateNews();
    }, 1000);
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.country !== prevProps.country) {
      this.setState({
        loading: true,
      });
      this.updateNews();
    }
  };
  updateNews = async () => {
    let url = `http://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=${this.props.country}&languages=${this.props.language}&limit=4&offset=0&categories=${this.state.category}&sort=published_desc`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Oops! there was an error while fetching data");
        }
        return res.json();
      })
      .then((data) => {
        return this.setState({
          data: data.data,
          loading: false,
        });
      })
      .catch((err) => {
        return this.setState({
          error: err.message,
          loading: false,
          loadMore: false,
        });
      });
  };
  render() {
    return (
      <div className="px-6 pt-16">
        {" "}
        <div className=" mx-auto p-2 md:p-0 flex items-center justify-between flex-wrap">
          <Heading heading="What's New" />
          <Menu setCategory={this.setCategory} />
        </div>
        <div className="flex flex-wrap h-auto gap-4 mt-8">
          {this.state.loading && <Spinner />}
          {!this.state.loading && this.state.data && (
            <div className="w-full md:w-[58%] rounded overflow-hidden">
              <NewsItem
                size={window.innerWidth < 580 ? "15" : "30"}
                weight="700"
                title={this.state.data[0].title && this.state.data[0].title}
                badgeTitle={this.state.data[0].source}
                imgUrl={this.state.data[0].image}
                url={this.state.data[0].url}
                sourceBg={"#ddbe0f"}
                sourceColor={"white"}
                author={this.state.data[0].author}
                date={new Date(this.state.data[0].published_at).toGMTString()}
              />
            </div>
          )}
          {!this.state.loading && this.state.error && (
            <p className="text-lg font-['Poppins'] dark:text-white">
              {this.state.error}
            </p>
          )}
          {!this.state.loading && this.state.data && (
            <div className="w-full md:w-[38%]">
              {this.state.data.map((news, index) => (
                <MiniNews
                  title={news.title}
                  source={news.country}
                  imgUrl={news.image}
                  url={news.url}
                  author={news.author}
                  date={new Date(news.published_at).toDateString()}
                  badgeColor="#1d4ed8"
                  badgeBg="transparent"
                  badgeTitle={news.source}
                  key={index}
                  direction={window.innerWidth < 450 ? "column" : "row"}
                  width="10rem"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

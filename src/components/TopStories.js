import React, { Component } from "react";
import Heading from "./Heading";
import Spinner from "./Spinner";
import TopStory from "./TopStory";
const API_KEY = process.env.REACT_APP_NEW_API;
export default class TopStories extends Component {
  constructor() {
    super();
    this.state = { data: null, error: null, loading: true };
  }
  componentDidMount = () => {
    this.updateNews();
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
    let url = `http://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=${this.props.country}&languages=${this.props.language}&limit=4&sort=popularity`;
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
      <div className="px-6 pt-16 bg-blue-50/50 dark:bg-[#171818] mt-20 sm:mt-8 py-8">
        <Heading heading="Top Stories" />
        {this.state.loading && <Spinner />}
        {this.state.error && (
          <p className="text-lg font-['Poppins'] dark:text-white">
            {this.state.error}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {!this.state.loading &&
            this.state.data &&
            this.state.data.map((news, index) => (
              <TopStory
                author={news.author ? news.author : "Unknown"}
                title={news.title ? news.title : "..."}
                description={news.description ? news.description : "..."}
                source={news.source ? news.source : news.category}
                image={
                  news.image
                    ? news.image
                    : "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="
                }
                url={news.url}
                date={new Date(news.published_at).toGMTString()}
                key={index}
              />
            ))}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Heading from "./Heading";
import Menu from "./Menu";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_NEW_API;
export default class Popular extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null,
      totalResults: 0,
      loading: false,
      category: "general",
      offset: 0,
      country: "in",
      language: "en",
    };
  }
  componentDidMount = () => {
    this.setState({
      loading: true,
    });
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
  setCategory = (category) => {
    this.setState({
      category: category,
      loading: true,
    });
    setTimeout(() => {
      this.updateNews();
    }, 1000);
  };
  updateNews = () => {
    let url = `http://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=${this.props.country}&languages=${this.props.language}&limit=9&offset=${this.state.offset}&categories=${this.state.category}&sort=popularity`;

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
          totalResults: data.pagination.total,
          loading: false,
          loadMore: false,
        });
      })
      .catch((err) =>
        this.setState({ error: err.message, loading: false, loadMore: false })
      );
  };
  handleLoadMore = () => {
    this.setState({
      loadMore: true,
    });
    this.setState({
      offset: this.state.offset + 9,
    });
    setTimeout(async () => {
      let data = await fetch(
        `http://api.mediastack.com/v1/news?access_key=${API_KEY}&languages=en&limit=9&offset=${this.state.offset}&categories=${this.state.category}&sort=popularity`
      );
      let parsedData = await data.json();
      this.setState({
        data: this.state.data.concat(...parsedData.data),
        totalResults: parsedData.pagination.total,
        loadMore: false,
      });
    }, 1000);
  };
  render() {
    return (
      <div className="px-6 pt-20">
        <div className=" mx-auto p-2 md:p-0 flex items-center justify-between flex-wrap">
          <Heading heading="Popular News" />
          <Menu setCategory={this.setCategory} />
        </div>
        {this.state.loading && <Spinner />}
        {!this.state.loading && this.state.error && (
          <p className="text-lg font-['Poppins'] dark:text-white ">
            {this.state.error}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1 mt-8">
          {!this.state.loading &&
            this.state.data &&
            this.state.data.map((news, index) => (
              <div
                className="rounded overflow-hidden w-full  h-full"
                key={index}
              >
                <NewsItem
                  size={window.innerWidth < 580 ? "13" : "18"}
                  weight="400"
                  title={news.title}
                  badgeTitle={news.country}
                  imgUrl={news.image}
                  url={news.url}
                  sourceBg="#be185d"
                  sourceColor="white"
                  author={news.author}
                  date={new Date(news.published_at).toDateString()}
                />
              </div>
            ))}
        </div>
        {this.state.data && this.state.data.length <= this.state.totalResults && (
          <div className="w-full text-center mt-2">
            {this.state.loadMore && <Spinner />}
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded text-lg px-5 py-2.5 text-center mr-2 mt-4 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
              onClick={this.handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    );
  }
}

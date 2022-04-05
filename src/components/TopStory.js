import React, { Component } from "react";
import Badge from "./Badge";
export default class TopStory extends Component {
  render() {
    const { title, author, image, url, source, date } = this.props;
    return (
      <div className="news-card overflow-hidden flex flex-col gap-3">
        <div className="img-div relative before:content-[''] before:w-full before:h-full before:bg-black/50 before:z-10 before:absolute before:t-0 overflow-hidden w-full h-1/2 rounded">
          <img
            src={
              image
                ? image
                : "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="
            }
            alt="news"
            className="w-full h-full transition-transform duration-500"
          />
        </div>
        <div className="mt-2">
          <Badge title={source} color="grey" bgColor="transparent" />
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-base sm:text-lg mb-2 font-['Poppins'] font-bold dark:text-white hover:text-blue-700 dark:hover:text-blue-700 transition-colors"
          >
            {title}
          </a>
          <div className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
            By{" "}
            <span className="text-black dark:text-white font-semibold">
              {author}
            </span>
            <div className="text-sm sm:text-base">{date}</div>
          </div>
        </div>
      </div>
    );
  }
}

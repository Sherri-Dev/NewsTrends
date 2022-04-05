import React, { Component } from "react";
import Badge from "./Badge";

export class MiniNews extends Component {
  render() {
    const {
      title,
      description,
      imgUrl,
      url,
      badgeTitle,
      badgeColor,
      badgeBg,
      date,
      author,
      direction,
      width,
    } = this.props;
    return (
      <div
        className="news-card overflow-hidden flex gap-4 justify-between"
        style={{ flexDirection: `${direction}` }}
      >
        <div className="mt-2">
          <Badge title={badgeTitle} color={badgeColor} bgColor={badgeBg} />
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`${
              width === "10rem" ? "sm:text-base" : "sm:text-xl"
            } text-base text-black dark:text-white hover:text-blue-700 dark:hover:text-blue-700 font-['Poppins'] font-bold`}
          >
            {title}
          </a>
          {description && (
            <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base font-['Poppins'] mt-2">
              {description}
            </p>
          )}
          <div className="text-gray-600 dark:text-gray-400 mt-2">
            By{" "}
            <span className="text-black dark:text-white font-semibold">
              {author ? author : "Unknown"}
            </span>
            <div>{date}</div>
          </div>
        </div>
        <div className={`mb-2 ${direction === "column" ? "w-full" : "w-auto"}`}>
          <div
            className={`img-div relative before:content-[''] before:w-full before:h-full before:bg-black/50 before:z-10 before:absolute before:t-0 -z-10 overflow-hidden h-full rounded`}
            style={{ width: width }}
          >
            <img
              src={
                imgUrl
                  ? imgUrl
                  : "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="
              }
              alt="news"
              className="w-full h-full transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MiniNews;

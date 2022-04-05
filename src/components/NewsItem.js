import React, { Component } from "react";
import Badge from "./Badge";

export class NewsItem extends Component {
  render() {
    const {
      size,
      weight,
      title,
      badgeTitle,
      imgUrl,
      url,
      sourceBg,
      sourceColor,
      author,
      date,
    } = this.props;
    return (
      <a href={url} target="_blank" rel="noreferrer" className="w-full">
        <div className="relative news-card h-full w-full overflow-hidden cursor-pointer">
          <div className="img-div w-full h-full relative before:content-[''] before:w-full before:h-full before:bg-black/70 before:z-10 before:absolute before:t-0 -z-10  hover:scale-125">
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
          <div className="p-3 absolute bottom-4">
            <Badge title={badgeTitle} bgColor={sourceBg} color={sourceColor} />
            <h3
              className="text-gray-50 font-bold mb-2 tracking-wide mt-2"
              style={{
                fontFamily: "Roboto Slab",
                fontSize: `${size}px`,
                fontWeight: `${weight}`,
              }}
            >
              {title}
            </h3>
            <div className="text-gray-200 mt-2">
              By{" "}
              <span className="text-blue-500 font-semibold mr-4 text-sm sm:text-base">
                {author ? author : "Unknown"}
              </span>
              <span className="text-sm sm:text-base">{date}</span>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default NewsItem;

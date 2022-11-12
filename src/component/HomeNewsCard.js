import React from "react";

export const HomeNewsCard = (props) => {
  const { data } = props;
  return (
    <>
      <div className="Home-news-card">
        <div className="home-news-container">
          <h3>{data.title}</h3>
          <img align="left" src={data.urlToImage} />
          <p>
            {data.content}
            <a href={data.url} className="read-more-link">
              read more
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

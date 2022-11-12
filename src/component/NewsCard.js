import React from "react";

export const NewsCard = (props) => {
  const { data } = props;
  return (
    <div className="news-card-container">
      <div className="news-card">
        <div>
          <div className="news-head">
            <img src={data.urlToImage} />
          </div>
          <div className="card-body">
            <div>
              <p>{data.title}</p>
            </div>
          </div>
          <div className="card-discription">
            <div>{data.content}</div>
          </div>
          <div className="card-button">
            <a href={data.url}>
              <button>Read more</button>
            </a>
          </div>
          <div className="card-footer">
            <div></div>
            <div>
              <label>{data.publishedAt}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

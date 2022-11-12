import React, { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import loadingImage from "./images/loading.gif";
export const TechNews = () => {
  const [newsData, setNewsData] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    localStorage.setItem("scrollYPosition", position);
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollYPosition = localStorage.getItem("scrollYPosition");

  const fetchData = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=techcrunch&from=2022-10-12&sortBy=publishedAt&apiKey=e6b8404de1294692be9dfcd617d10e73"
    );
    const data = await res.json();
    const nData = [...newsData];
    console.log(nData);
    setNewsData([...newsData, ...data.articles]);
    setTotalResults(data.totalResults);
    console.log(data.totalResults);
    setLoading(false);
    window.scrollTo(0, scrollYPosition);
  };

  return (
    <>
      {loading ? (
        <div className="loading-image">
          <img src={loadingImage} />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={newsData.length} //This is important field to render the next data
          hasMore={true}
          next={fetchData}
          loader={<img width="100px" src={loadingImage} />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="newsCard">
            {newsData.map((data) => {
              return (
                <>
                  <NewsCard data={data} />
                </>
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

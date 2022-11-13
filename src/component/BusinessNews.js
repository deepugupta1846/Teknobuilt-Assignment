import React, { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import loadingImage from "./images/loading.gif";
export const BusinessNews = () => {
  const [newsData, setNewsData] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchData, setSearchDtata] = useState("");
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
      `https://news-app-api-ns.herokuapp.com/news-api/business?page=${pageNumber}`
    );
    const data = await res.json();
    const nData = [...newsData];
    console.log(nData);
    setNewsData([...newsData, ...data.articles]);
    setTotalResults(data.totalResults);
    console.log(data.totalResults);
    setLoading(false);
    setPageNumber(pageNumber + 1);
    window.scrollTo(0, scrollYPosition);
  };

  return (
    <>
      {loading ? (
        <div className="loading-image">
          <img src={loadingImage} />
        </div>
      ) : (
        <div>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search news"
              onChange={(e) => {
                setSearchDtata(e.target.value);
              }}
            />
          </div>
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
              {newsData
                .filter((d) => {
                  if (searchData === "") {
                    return d;
                  } else if (
                    d.title.toLowerCase().match(searchData.toLowerCase())
                  ) {
                    return d;
                  }
                })
                .map((data) => {
                  return (
                    <>
                      <NewsCard data={data} />
                    </>
                  );
                })}
            </div>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

import React, { useEffect, useState } from "react";
import "./TopNewsRow.css";
import instance, { baseURL } from "../axios";

const TopNewsRow = ({ title, fetchUrl }) => {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // console.log(baseURL)
      const request = await instance.get(baseURL + 'top-headlines', { params: fetchUrl });
      // console.log("Updated request", request.data)
      setTopNews(request.data.articles);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  // console.log(topNews);
  return (
    (<div className="topNewsRow">
      <h1 className="topNewsRow_title">{title}</h1>
      <div className="topNewsRow_posters">
        {topNews && topNews.map((news, key) => {
          if (news.urlToImage) {
            return (
              <a key={key} className="topNewsRow_card" href={news.url} target="_blank" rel="noreferrer">
                <img
                  className={`topNewsRow_newsPoster`}
                  src={news.urlToImage}
                  alt={"    "}
                />
                <div className="topNewsRow_cardContent">
                  <div className="topNewsRow_newsTitle">
                    {truncate(news.title, 140)}
                  </div>
                  <div className="topNewsRow_authorDetails">
                    <div className="topNewsRow_authorDetails_source">
                      {news.source.name ? "- " + news.source.name : ""}
                    </div>
                    <i className="fas fa-arrow-circle-right topNewsRow_storyLink"></i>
                  </div>
                </div>
              </a>
            );
          }
          return null;
        })}
      </div>
    </div>)
  );
};

export default TopNewsRow;

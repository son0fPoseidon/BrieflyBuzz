import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./CenterResult.css";
import appLogo from "../appLogo.png";

// import { dummyData } from "../data";
import { useParams } from "react-router-dom";

const CenterResult = ({ fetchUrl, type }) => {
  const [news, setNews] = useState([]);
  const { link } = useParams();

  let cat = link.split("=");
  if (type === "top-headlines") {
    // ["sources", "cnn&pageSize", "40"]
    cat = cat[1].split("&");
    cat = cat[0].toUpperCase();
  } else {
    // [category,general]
    cat = cat[1][0].toUpperCase() + cat[1].slice(1);
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        if (type === "sources") setNews(request.data.sources);
        else setNews(request.data.articles);
        // console.log(request);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  });

  return (
    <div className={`centerResult`}>
      <div className="centreResult_header">
        <span>
          {type.toUpperCase()}, {cat}
        </span>
        <span>TOTAL RESULTS: {news.length}</span>
      </div>
      {news &&
        news.map((myNews, key) => {
          const image = myNews.urlToImage ? myNews.urlToImage : appLogo;
          const title = myNews.title; //title
          // const description = myNews.description; //description
          const sourceName = myNews.source.name; //source
          const author = myNews.author ? ", " + myNews.author : ""; //author
          //date
          const time = new Date(myNews.publishedAt);
          const month = new Intl.DateTimeFormat("en-US", {
            month: "long",
          }).format(time);
          const timeline =
            month +
            " " +
            time.getDate() +
            ", " +
            time.getFullYear() +
            " " +
            time.getHours() +
            ":" +
            time.getMinutes(); // timeline

          return (
            <div key={key} className="resultCard">
              <div className="resultCard_img">
                <img src={`${image}`} alt="" />
              </div>
              <div className="resultCard_content">
                <a href={myNews.url} target="_blank" rel="noreferrer">
                  <div className="resultCard_title">
                    <h1>{title}</h1>
                  </div>
                  <div
                    className={`resultCard_description`}
                    dangerouslySetInnerHTML={{ __html: myNews.description }}
                  ></div>
                  <div className="resultCard_sourceRow">
                    <small className="resultCard_source">
                      {sourceName}
                      {author}
                    </small>
                    <small className="resultCard_source">{timeline}</small>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CenterResult;

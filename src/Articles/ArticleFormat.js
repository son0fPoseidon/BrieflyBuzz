import React, { useEffect, useState } from "react";
import axios from 'axios'; // Import axios for making HTTP requests
import "./ArticleFormat.css";
import appLogo from "../appLogo.png";
import { nyt } from "../axios";
import { nytKey } from "../API_KEY";

const ArticleFormat = ({ fetchUrl, setArticle }) => {
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from the server endpoint        
        fetchUrl = fetchUrl + "?api-key=" + (process.env.REACT_APP_NYT_KEY || nytKey);
        const response = await nyt.mostPopular.get(fetchUrl);
        // console.log(response.data)
        setUserArticles(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [fetchUrl]);

  let art = fetchUrl.split("/")[1];

  const artOptions = ['Emailed', 'Shared', 'Viewed']

  return (
    <>
      <div className="articles">
        <div className="centreResult_header">
          <span className='articleDetails'>Most :
            <ul className='articleDetails_optionList'>
              {artOptions.map((obj, key) => (
                <li key={key} onClick={() => setArticle(`/${obj.toLowerCase()}/7.json`)} className={`articleDetails_listItem ${obj.toLowerCase() === art.toLowerCase() ? 'activeArt' : ''}`}>{obj}</li>
              ))}
            </ul>
          </span>
          <span>TOTAL RESULTS: {userArticles.length}</span>
        </div>
        {userArticles.map((obj, key) => {
          let img = obj.media.length !== 0 ? [...obj.media][0]["media-metadata"] : [];
          img = img.length !== 0 ? img[2].url || img[1].url || img[0].url : appLogo;

          const ref = obj["adx_keywords"].split(";").join(", ");

          const time = new Date(obj.updated);
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
            <a key={key} href={obj["url"]} className="article" target="_blank" rel="noreferrer">
              <div className="article_content">
                <div className="article_title">
                  <h1>{obj["title"]}</h1>
                </div>
                <div className="article_section">
                  {obj["section"]}
                  {obj["subsection"] !== "" ? ", " + obj["subsection"] : ""}
                </div>
                <div className="article_abstract">{obj["abstract"]}</div>
                <div className="article_reference">
                  <span className="article_reference_title">Reference: </span>
                  {ref}
                </div>
                <div className="article_byline">
                  <span className={"article_byline_article"}>
                    -{obj["byline"]}
                  </span>
                  <span className="article_byline_timeline">{timeline}</span>
                </div>
              </div>
              <div className="article_image">
                <img src={img} alt="" />
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default ArticleFormat;

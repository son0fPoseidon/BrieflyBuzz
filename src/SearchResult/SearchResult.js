import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import LeftResult from "./LeftResult";
import RightResult from "./RightResult";
import CenterResult from "./CenterResult";
import ScrollBackBtn from "../ScrollBackBtn";
import "./SearchResult.css";
import API_KEY from "../API_KEY";

const SearchResult = () => {
  const { type, link } = useParams();
  const getLink = () => {
    let linkStr;
    linkStr = type + "?" + link + "&apiKey=" + API_KEY;
    // console.log(linkStr);
    return linkStr;
  };

  window.scrollTo(0, 0);

  return (
    <div>
      <Nav />
      {/* style={{position:'fixed', bottom:'0'}} */}      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'fixed', bottom:'0'}}>
        <path fill="#a2d9ff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <section className={`searchResult`} style={{ width: "95%" }}>
        <LeftResult />
        <CenterResult fetchUrl={getLink()} type={type} />
        <RightResult />
        <ScrollBackBtn />
      </section>
    </div>
  );
};

export default SearchResult;

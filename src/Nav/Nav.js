import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";
import appLogo from "../appLogo.png";

const Nav = () => {
  const [isScrolled, handleIsScrolled] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleIsScrolled(true);
    } else {
      handleIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);


  let location = (window.location.pathname.split("/"));
  return (
    <div className={`nav ${isScrolled ? "nav_dark nav_brandScrolled" : ""}`}>
      <Link to={'/'} className="nav_content">
        <img className={`nav_logo`} src={appLogo} alt="" />
        <div className={`nav_brand`}>News Express</div>
      </Link>
      <div className="nav_links">
        <ul className="nav_links_list">
          <Link to={'/'} className={`nav_links_linkItem ${location[1] === '' ? `link_active` : ''}`}>Home</Link>
          <Link to={'/search'} className={`nav_links_linkItem ${location[1] === 'search' ? `link_active` : ''}`}>Search</Link>
          <Link to={'/result/top-headlines/category=general&language=en'} className={`nav_links_linkItem ${location[1] === 'result' ? `link_active` : ''}`}>News</Link>
          <Link to={'/articles'} className={`nav_links_linkItem ${location[1] === 'articles' ? `link_active` : ''}`}>Articles</Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

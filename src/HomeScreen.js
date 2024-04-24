import React, { useState } from "react";
import Banner from "./Nav/Banner";
import Nav from "./Nav/Nav";
import TopNewsRow from "./Row/TopNewsRow";
import requests from "./Requests";
//import VerticalRunner from "./VerticalRunner/VerticalRunner";
import ScrollBackBtn from "./ScrollBackBtn";
//import SideButtons from "./VerticalRunner/SideButtons";
//import ArticleRunner from "./VerticalRunner/ArticleRunner";
//import ArticleSideButtons from "./VerticalRunner/ArticleSideButtons";
import Footer from "./Footer/Footer";

const HomeScreen = () => {
  const [customHeadlines, setCustomHeadlines] = useState([requests.fetchTopHeadlinesBusiness, 'Business']);
  const [articleHeadline, setArticleHeadline] = useState(['world', 'World']);
  return (
    <>
      <Nav />
      <Banner />

      <TopNewsRow
        title={'Top Headlines: United States'}
        fetchUrl={requests.fetchTopHeadlinesUS}
      />

      <div style={{ marginTop: '60px' }}>
        <TopNewsRow
          title={"Top Headlines: India"}
          fetchUrl={requests.fetchTopHeadlinesIndia}
        />
      </div>

      <div style={{ display: "flex", justifyContent: 'space-around', marginTop: '40px' }}>
        {/* <VerticalRunner
          fetchUrl={customHeadlines[0]}
          title={customHeadlines[1]}
        /> */}
        {/* <SideButtons headline={customHeadlines} setHeadline={setCustomHeadlines} /> */}
      </div>


      <div style={{ marginTop: '60px' }}>
        <TopNewsRow
          title={'Top Headlines: Netherlands'}
          fetchUrl={requests.fetchTopHeadlinesDutch}
        />
      </div>

      <div style={{ marginTop: '60px' }}>
        <TopNewsRow
          title={'Top Headlines: Korea'}
          fetchUrl={requests.fetchTopHeadlinesKorea}
        />
      </div>


      {/* <div style={{ display: "flex", justifyContent: 'space-around', marginTop: '40px' }}
      >
        <ArticleSideButtons article={articleHeadline} setArticle={setArticleHeadline} />
        <ArticleRunner fetchUrl={articleHeadline[0]} title={articleHeadline[1]} />
      </div> */}
      <ScrollBackBtn />
      <Footer />
    </>
  );
};

export default HomeScreen;

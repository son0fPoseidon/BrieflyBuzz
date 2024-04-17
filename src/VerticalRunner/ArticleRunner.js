import React, { useState, useEffect } from 'react'
import { nyt } from "../axios";
import Slider from 'react-slick';
import './VerticalRunner.css';
import appLogo from '../appLogo.png'
import { nytKey } from '../API_KEY';

const ArticleRunner = ({ fetchUrl = 'world', width = '600px', title }) => {

  let [topNews, setTopNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await nyt.topstories.get(fetchUrl + '.json?api-key=' + nytKey);
      // console.log(fetchUrl + '.json?api-key=' + nytKey)
      setTopNews(request.data.results.slice(0, 15));
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const Arrow = props => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ background: "#006db6", borderRadius: '100%', padding: '7px' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    }
  };

  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <>
      <div className='verticalRunners' style={{ width: width }}>
        <h1 className="runner_title">{title.toUpperCase()}</h1>
        <Slider {...settings}>
          {topNews.map((obj, key) => {
            let image;
            if (obj.multimedia === null) {
              image = appLogo;
            } else {
              image = obj.multimedia[obj.multimedia.length - 1]["url"];

            }
            return (

              <a key={key} href={obj.url} target="_blank" rel="noreferrer"  className="verticalRunner">
                <div className="verticalRunner_image">
                  <img src={image} alt="" height='240px' />
                </div>
                <div className="verticalRunner_content">
                  <div className="verticalRunner_title">
                    <h2>{truncate(obj.title, 80)}</h2>
                  </div>
                  <div className="verticalRunner_description">
                    {obj.abstract ? truncate(obj.abstract, 120) : ""}
                  </div>
                  <div className="verticalRunner_sourceName">
                    {/* - {obj.byline} */}
                    <span className="arrow">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default ArticleRunner;

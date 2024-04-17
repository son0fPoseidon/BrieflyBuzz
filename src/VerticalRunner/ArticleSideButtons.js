import React from 'react';
import './SideButtons.css';
import { articleDetails } from '../data';

const ArticleSideButtons = ({ article, setArticle }) => {
  return (
    <div className='sideButtons'>
      <span>
        <div className='sideButtons_title'>
          {'Get Some Top Articles'.toUpperCase()}
        </div>
        <div className='sideButtons_panel'>
          {articleDetails.map((obj, key) => {
            return (
              <div key={key}
                className={`sideButttons_btn 
                        ${
                          obj[0].toUpperCase() + obj.slice(1) === article[1]
                            ? 'btnActive'
                            : 'notActiveBtn'
                        }
                        `}
                onClick={() => {
                  console.log(obj, obj[0].toUpperCase() + obj.slice(1));
                  setArticle([obj, obj[0].toUpperCase() + obj.slice(1)]);
                }}
              >
                <span className={'btn'}>
                  {obj[0].toUpperCase() + obj.slice(1)}
                </span>
              </div>
            );
          })}
        </div>
      </span>
      {/* <span></span> */}
    </div>
  );
};

export default ArticleSideButtons;

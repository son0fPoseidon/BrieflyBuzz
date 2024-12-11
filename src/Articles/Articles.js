import React, { useState } from 'react';
import ScrollBackBtn from '../ScrollBackBtn';

import Nav from '../Nav/Nav';
import ArticleFormat from './ArticleFormat';

const Articles = () => {
  const [article, setArticle] = useState('/viewed/7.json')
  return (
    <>
      <Nav />
      <div>
        <ArticleFormat fetchUrl={article} setArticle={setArticle} />
        <ScrollBackBtn />
      </div>
    </>
  )
}

export default Articles

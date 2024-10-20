import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import axios from 'axios'



const ArticlePage = () => {
  let { articleId } = useParams();

  const [articleInfo,setArticleInfo] =  useState({upvotes:0 , comments: []})

  useEffect(()=>{
    const loadArticleInfo = async ()=>{
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }

    loadArticleInfo();

  },[])


  const article = articles.find(art=>
    art.name === articleId
  )

  if(!article){
    return <NotFoundPage/>
  }
  return (
    <> 
    <h1>{article.title}</h1>
    <p>This article has {articleInfo.upvotes} upvote(s)</p>
    {
      article.content.map((paragraph,index) => (
        <p key={index}>{paragraph}</p>
      ))
    }
    </>
  )
}

export default ArticlePage
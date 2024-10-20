import React from 'react'
import articles from './article-content'
import ArticleList from '../components/ArticleList';


const ArticlesListPage = () => {
  
  return (
    <>
    <h1>Articles</h1>
    {
      articles.map((article,i)=>(
       <ArticleList key={i} article={article}/>
      ))
    }
    </>

  )
}

export default ArticlesListPage
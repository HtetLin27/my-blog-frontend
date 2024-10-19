import React from 'react'
import { Link } from "react-router-dom";


const ArticleList = ({article}) => {
  return (
    <Link to={article.name}> 
    <h3>{article.title}</h3>
    <p>{article.content[0].substring(0,150)}...</p>
    <hr />
  </Link>
  )
}

export default ArticleList
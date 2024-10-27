import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import axios from 'axios'
import CommentsList from '../components/CommentsList';
import useUser from '../hooks/useUser';
import AddCommentForm from '../components/AddCommentForm';



const ArticlePage = () => {
  let { articleId } = useParams();

  const [articleInfo,setArticleInfo] =  useState({upvotes:0 , comments: [],canUpvote:false})

  const {canUpvote} =articleInfo

  const {user,isLoading} = useUser();

  useEffect(()=>{
    const loadArticleInfo = async ()=>{
      const token =  user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      const response = await axios.get(`/api/articles/${articleId}`,
        {headers},
      );
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
    if(!isLoading){
      loadArticleInfo();
    }
    
  },[isLoading,user])


  const article = articles.find(art=>
    art.name === articleId
  )

  const addUpvote =   async () =>{
    const token =  user && await user.getIdToken();
    const headers = token ? {authtoken: token} : {};
    const response = await axios.put(`/api/articles/${articleId}/upvote`,null,{headers});
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  

  }

  if(!article){
    return <NotFoundPage/>
  }
  return (
    <> 
    <h1>{article.title}</h1>
    <div className='upvotes-section'>
      {
        user ? <button onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button> :
        <button>Log in to upvote</button>
      }
      <p>This article has {articleInfo.upvotes} upvote(s)</p>
    </div>
    {
      article.content.map((paragraph,index) => (
        <p key={index}>{paragraph}</p>
      ))
    }
    {
      user ?  <AddCommentForm
      articleName={articleId}
      onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
    /> :
    <button>Log in to add a comment</button>
    }
   
    {articleInfo.comments && ( <CommentsList comments={articleInfo.comments}/>) }
   
    </>
  )
}

export default ArticlePage
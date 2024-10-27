import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "my-react-blog-9d323.firebaseapp.com",
  projectId: "my-react-blog-9d323",
  storageBucket: "my-react-blog-9d323.appspot.com",
  messagingSenderId: "604101939830",
  appId: "1:604101939830:web:8a773a08773661bbb04557"
};

const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);


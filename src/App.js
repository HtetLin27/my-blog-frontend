import './App.css';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import CreateAccountPage from './pages/CreateAccountPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';


import {
 Routes,Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div id='page-body'>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="about" element={<AboutPage/>}></Route>
          <Route path="articles" element={<ArticlesListPage/>}></Route>
          <Route path="/articles/:articleId" element={<ArticlePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/create-account' element={<CreateAccountPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
        
        
        
        
      </div>
    </div>
  );
}

export default App;

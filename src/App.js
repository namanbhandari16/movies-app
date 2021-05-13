import './App.css';
import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import {BrowserRouter as Router,Link,Route,useHistory,Switch} from 'react-router-dom'
import Nav from './components/Nav';
import MovieGrid from './components/MovieGrid';
import Bookmarks from './components/Bookmarks';
import FavoriteIcon from '@material-ui/icons/Favorite'

function App() {

  let history = useHistory()

  useEffect(() => {
    if(!localStorage.getItem('bookmarkedMovies')){
      let bookmarkedMovies=[]
      localStorage.setItem('bookmarkedMovies',JSON.stringify(bookmarkedMovies))
    }
  }, []);

  return (
    <>
      <Router history={history}>
      <Nav/>
      <Route exact path="/" component={MovieGrid}/>
      <Route path="/search/:term" component={MovieGrid}/>
      <Route exact path="/bookmarks" component={Bookmarks}/>
      </Router>
      <header style={{padding:'1.8rem',textAlign:'center',fontSize:'1.4rem'}}>Made with <FavoriteIcon style={{color:'red'}}/> by Naman</header>
    </>
  );
}

export default App;
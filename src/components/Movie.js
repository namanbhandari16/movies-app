import React, {useState,useEffect} from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ id, title, poster_path, overview, vote_average }) => {

    const [isBookmarked,setBookmarked] = useState(true)

    useEffect(()=>{
        checkBookmark()
    })
    const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const checkBookmark = () => {
      let bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies'))
      if(bookmarkedMovies.includes(id)) 
        {setBookmarked(true)
        return true}
      setBookmarked(false)
      return false
  }

  const addBookmark = () => {
    let bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies'))
    console.log(id)
    bookmarkedMovies.push(id)
    localStorage.setItem('bookmarkedMovies',JSON.stringify(bookmarkedMovies))
    checkBookmark()
}

    const remBookmark = () => {
        let bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies'))
        bookmarkedMovies = bookmarkedMovies.filter(item => item!==id)
        localStorage.setItem('bookmarkedMovies',JSON.stringify(bookmarkedMovies))
        checkBookmark()
    }

  return (
    <div className="movie">
    <div className="movie-img">
      {poster_path ? (
        <img src={IMAGE_API + poster_path} alt={title} />
      ) : (
        <img src="no-cover.png" alt={title} />
      )}
      <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        {isBookmarked ? <span className="bookmark" onClick={remBookmark}><BookmarkIcon/></span>
            : <span className="bookmark" onClick={addBookmark}><BookmarkBorderIcon/></span>
    }
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>
      
      
    </div>
  );
};

export default Movie;
import {useState,useEffect} from "react"
import Movie from './Movie'
import {FEATURED_API,SEARCH_API} from '../config'

function MovieGrid(props){
    
    const [movies, setMovies] = useState([]);
    
    const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {setMovies(data.results)
    console.log(data.results)});
    };

    useEffect(()=>{
        if(props.match.params.term){
            getMovies(SEARCH_API+props.match.params.term)
        }
        else getMovies(FEATURED_API)
    },[])

    return(<div className="movie-container">
        {movies &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>)
}

export default MovieGrid;
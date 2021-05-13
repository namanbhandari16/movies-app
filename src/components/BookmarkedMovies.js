import {useEffect} from "react"
import Movie from "./Movie";

function BookmarkedMovies(props){
    const pri = () => {console.log('sdf')
    console.log(props)}
    useEffect(()=>{
        pri()
    })
    return(<div className="movie-container">
        {props.movies && props.movies.map((m)=><Movie key={m.id} {...m}/>)}
    </div>)
}

export default BookmarkedMovies;
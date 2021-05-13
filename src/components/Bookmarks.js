import {useState,useEffect} from "react"
import Movie from "./Movie";
import {API_KEY} from '../config'
function Bookmarks(){
    const [bookmarked,setBookmarked] = useState(JSON.parse(localStorage.getItem('bookmarkedMovies')))
    const [movies,setMovies] = useState([])
    const [i,seti]=useState(0)
    var data=[]
    const getData = async (b) => {

        for(var i=0;i<bookmarked.length;i++){
            fetch('https://api.themoviedb.org/3/movie/'+bookmarked[i]+'?api_key='+API_KEY+'&language=en-US')
            .then((res)=>res.json())
            .then((d)=>{console.log(d)
            data.push(d)})
            console.log(data)
        }
        setTimeout(function(){setMovies(data)},1000)
    }
    useEffect(()=>{
        getData()
    },[])
    return(<div className="movie-container">
        {movies && movies.map((movie)=><Movie key={movie.id} {...movie}/>)}
        {movies.length===0 && <h2 style={{height:'70vh'}}>No movies bookmarked</h2>}
    </div>)
}

export default Bookmarks;
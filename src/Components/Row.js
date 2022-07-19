

import React,{useState,useEffect} from 'react'
import "../Css/Row.css";
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useRef } from 'react';
const base_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl,trending}) {
    const titleRef = useRef();

    const[movies,setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=> {

        //This will be called whenever the component is called for the first time

        async function fetchData(){

            const request = await axios.get(fetchUrl);

            console.log(request);
            setMovies(request.data.results);

        }
        fetchData();

    },[fetchUrl]);

    const handleClick = (movie) => {
        // console.table(movie?.title)
        if (trailerUrl) {
          setTrailerUrl('')
        } else {
          movieTrailer(movie?.title || "")
            .then(url => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error));
        }
        titleRef.current.scrollIntoView({ behavior: "smooth" });
      }
      const opts = {
        height: "390",
        width: "99%",
        playerVars: {
          autoplay: 0,
        }
      }
    

    
    return (
        <div className="row">
        <h2>{title}</h2>
        <div className='grid'>
        {/* <div className='left_scroll' >{'<'}</div> */}
        <div className = "row_posters">

            {movies.map(movie => {
 // <div className='square one'>
                return (
               
                    <img 
                    className = {`row_poster || ${trending && "trending"&&"trending_row-posters"}`}
                    key = {movie.id}
                    onClick={() => handleClick(movie)}
                    src = {`${base_url}${movie.poster_path}`}
                    alt = {movie.name}
                   
                />
                )
               
             
                
            }
            )}
               
        </div>
        {/* <div className='right_scroll'>{'>'}</div> */}
        <div  ref={titleRef} style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl}   opts={opts} />}
      
      </div>
        </div>
        
        </div>
    );
}
export default Row;
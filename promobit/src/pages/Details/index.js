 
 import {useParams} from 'react-router-dom';
 import { APIKEY } from "../../config/key";
 import { useState, useEffect } from "react";
 
 
  const Details = () => {
     
    const id = useParams()
     
     const [movie,setMovie]= useState([])
     const image_path = "https://image.tmdb.org/t/p/w500"
     
     useEffect (() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US&page=1`
          )
            .then((response) => response.json())
            .then((data) => {
                const movie ={
                    id,
                    title: data.title,
                    sinopse:data.overview,
                    image: `${image_path}$ {data.poster}`,
                    releaseDate: data.release_date
                
                }
            

                setMovie(movie)
           
            });
        }, [id]);

            return (
            <Container>
                 <div className ="movie">
                <img src={movie.image} alt = {movie.sinope}/>
                 <div className ="details">
                 <h1>{movie.title}</h1>
                 <span>Sinopse:{movie.sinopse}</span>
                 </div>
                 </div>

            </Container>

)
}

export default Details
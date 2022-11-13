import { Container, MovieList, Movie } from "./styles";
import { APIKEY } from "../../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
 
  if (!movies.length){
    return(<Container> <h1>Esperando</h1></Container>)
    

  }
  console.log(`${image_path}/${movies.poster_path}`)

  return (
    <Container>
      <h1> Movies </h1>

      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`} $>
                <img
                  src={`${image_path}/${movie.poster_path}`}
                  alt={movie.title}
                ></img>
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default Home;

import React from "react";
import { movies } from "../data";

function Movies() {
  return <div><h1>Movies Page</h1>
  {movies.map(movie => 
    <div key={movie.title}>
      <div>
        Title: {movie.title}
      </div>
      <div>
        Length: {movie.time}
      </div>
      <div>
        Genres: 
        <ul>
          {movie.genres.map(g => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
    )}
  </div>;
}

export default Movies;

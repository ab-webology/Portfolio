import React, { useState, useEffect } from "react";
// import axios from "./axios";

const base_Url = "https://image.tmdb.org/t/p/original/";
const base_fetch_URL = "https://api.themoviedb.org/3";

function Rows({ title, fetchLink }) {
  const [movies, setMovies] = useState([]);

  const fullUrl=base_fetch_URL+fetchLink;

  useEffect(() => {
    fetch(`${fullUrl}`)
      .then(res=>res.json())
      .then(data=>{
        const MOVIES=data.results;
        setMovies(MOVIES);
        // console.log(MOVIES)
      })
  }, [movies,fetchLink,fullUrl]);
  return (
    <div>
      <div className="row">
        {/* title  */}
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.forEach((movie) => {
            <img src={`${base_Url}${movie.poster_path}`} alt="" />;
            // <h1>{movie.genre_ids.name}</h1>;
            // console.log(`${base_Url}${movie.poster_path}`);
            <h1> {movie.genre_ids.id} </h1>
          })}
        </div>
        <div>
          {/* const link=`${https://drive.google.com/file/d/1Xli53Lfl3qz_pabgw0p-Gg9ssp7A8q7J/view?usp=drivesdk`}; */}
          <img src="https://drive.google.com/file/d/1Xli53Lfl3qz_pabgw0p-Gg9ssp7A8q7J/view?usp=sharing" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Rows;

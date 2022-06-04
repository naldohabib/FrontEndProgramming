import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";

function Hero() {
    // membuat state movie
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[1].key}`;

    // async function fetchMovie() {
    //     // melakukan side effects: fetch data movie (API);
    //     const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

    //     const data = await response.json();

    //     // set movie dengan data movie hasil fetch
    //     setMovie(data);
    // }
    useEffect(getDetailMovie, []);

    // mendapatkan 1 data dari trending movies
    async function getTrendingmovies() {
        const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
        const response = await axios(URL);
        return response.data.results[0];
    }

    // membuat fungsi untuk mendapatkan detail movie
    async function getDetailMovie() {
        // ambil id dari trending movie
        const trendingMovie = await getTrendingmovies();
        const id = trendingMovie.id;

        // fetch detail movie by id
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);
        console.log(response.data);

        setMovie(response.data);
    }


    return (
        <StyledHero>
            <section >
                <div>
                    <h2>{movie.title}</h2>
                    <h3>{genres}</h3>
                    <p>{movie.overview}</p>
                    <Button variant="secondary" size="medium" as="a" href={trailer} target="_blank">Watch</Button>
                </div>
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.Title} />
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;
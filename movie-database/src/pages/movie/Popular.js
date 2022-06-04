import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
    // simpan API_KEY dan URL Variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        // fetch data dari axios
        const response = await axios(URL);

        // simpan data ke state move
        setMovies(response.data.results);
    }


    return (
        <div>
            <Hero />
            <Movies title="Popular Movies" movies={movies} />
        </div>
    );
}

export default PopularMovie;
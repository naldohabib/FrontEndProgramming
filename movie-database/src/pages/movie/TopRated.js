import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function TopRated() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    // membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {
        // fetch data dari axios
        const response = await axios(URL);

        // simpan data ke state move
        setMovies(response.data.results);
    }

    return (
        <div>
            <Hero />
            <Movies title="Top Rated Movies" movies={movies} />
        </div>
    );
}

export default TopRated;
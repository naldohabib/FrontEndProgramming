import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function NowPlaying() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    // membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {
        // fetch data dari axios
        const response = await axios(URL);

        // simpan data ke state move
        setMovies(response.data.results);
    }


    return (
        <div>
            <Hero />
            <Movies title="Now Playing" movies={movies} />
        </div>
    );
}

export default NowPlaying;
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlaying() {
    // membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.NOW_PLAYING);

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
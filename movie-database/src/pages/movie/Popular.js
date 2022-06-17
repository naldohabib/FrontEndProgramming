import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
    // membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);

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
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRated() {
    // membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.TOP_RATED);

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
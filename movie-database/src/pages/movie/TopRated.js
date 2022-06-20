import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";

function TopRated() {
    // membuat state movies
    // const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    async function getTopRatedMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.TOP_RATED);

        // simpan data ke state move
        // setMovies(response.data.results);
        dispatch(updateMovies(response.data.results));
    }

    return (
        <div>
            <Hero />
            <Movies title="Top Rated Movies" />
        </div>
    );
}

export default TopRated;
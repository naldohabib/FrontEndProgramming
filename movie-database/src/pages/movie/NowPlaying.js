import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movieSlice";

function NowPlaying() {
    // membuat state movies
    // const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    async function getNowPlayingMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.NOW_PLAYING);

        // simpan data ke state move
        // setMovies(response.data.results);
        dispatch(updateMovies(response.data.results));
    }

    return (
        <div>
            <Hero />
            <Movies title="Now Playing" />
        </div>
    );
}

export default NowPlaying;
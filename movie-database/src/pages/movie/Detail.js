import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {
    const params = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRecommendationMovies();
    }, [params.id]);

    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
        setMovies(response.data.results);
    }

    console.log(movies);

    return (
        <>
            <DetailMovie />
            <Movies movies={movies} title="Recommendations" />
        </>
    );
}

export default Detail;
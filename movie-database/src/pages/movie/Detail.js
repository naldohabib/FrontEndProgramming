import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {
    const params = useParams();
    // const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    

    useEffect(() => {
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
        // setMovies(response.data.results);
        dispatch(updateMovies(response.data.results));
    }

    // console.log(movies);

    return (
        <>
            <DetailMovie />
            <Movies title="Recommendations" />
        </>
    );
}

export default Detail;
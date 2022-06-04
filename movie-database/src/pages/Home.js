import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constants/data";

function Home() {
    const [movies, setMovies] = useState(data);
    return (
        <>
            <Hero />
            <Movies title="Latest Movies" movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </>
    );

    // return(
    //     <Counter />
    // );
}

export default Home;
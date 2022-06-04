import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
    // destructing props
    const { movies, setMovies } = props;

    // dijalankan ketika tombol di klik
    function addMovie() {
        const movie = {
            id: nanoid(10),
            title: "Spiral Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/300/400"
        };

        // menambahkan movie ke state movies
        // spread operator: copy dan merge array
        setMovies([...movies, movie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{props.title}</h2>
                <div className={styles.movie__container}>
                    {
                        /**
                         * looping data movies : map.
                         * render component movie
                         * kirim props movie
                         */
                        movies.map(function (movie) {
                            return <Movie key={movie.id} movie={movie} />;
                        })
                    }
                </div>
                {/* menambahkan event on Click
                <button onClick={addMovie}>Add Movie</button> */}
            </section>
        </div>
    );
}

export default Movies;
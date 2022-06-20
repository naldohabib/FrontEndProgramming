 // import configureStore
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";

/**
 * buat store: state global
 * untuk menyimpan berbagai slice reducer
 */

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
})

// export default store
export default store;
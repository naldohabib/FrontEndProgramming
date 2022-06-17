import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movieSlice";

function AddMovieForm() {
    // buat dispatch
    const dispatch = useDispatch();

    // Buat Navigation
    const navigation = useNavigate();

    // membuat state object
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        image: "",
        type: "",
    });

    // membuat fungsi handleChange untuk handle semua input form
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // membuat state object error
    const [errors, setErrors] = useState({
        isTitleError: false,
        isDateError: false,
        isImageError: false,
        isTypeError: false,
    });


    function validate() {
        if (title === "") {
            setErrors({
                ...errors,
                isTitleError: true,
            });
            return false;
        }
        else if (date === "") {
            setErrors({
                ...errors,
                isTitleError: false,
                isDateError: true,
            });
            return false;
        }
        else if (image === "") {
            setErrors({
                ...errors,
                isTitleError: false,
                isDateError: false,
                isImageError: true,
            });
            return false;
        }
        else if (type === "") {
            setErrors({
                ...errors,
                isTitleError: false,
                isDateError: false,
                isImageError: false,
                isTypeError: true,
            });
            return false;
        }
        else {
            setErrors({
                ...errors,
                isTitleError: false,
                isDateError: false,
                isImageError: false,
                isTypeError: false,
            });
            return true;
        }
    }

    function submitMovie() {
        const movie = {
            id: nanoid(10),
            title: title,
            year: date,
            type: type,
            poster: image,
        };

        dispatch(addMovie(movie));

        navigation("/");
    }

    // handle form ketika disubmit
    function handleSubmit(e) {
        // mencegah perilaku default: refresh
        e.preventDefault();

        validate() && submitMovie();
    }

    const { title, date, image, type } = formData;
    const { isTitleError, isDateError, isImageError, isTypeError } = errors;

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src="https://picsum.photos/600/400" alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie Form</h2>
                    <form onSubmit={handleSubmit} className={styles.form__list}>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="title"
                                className={styles.form__label}>
                                Title
                            </label>
                            <input
                                onChange={handleChange}
                                id="title"
                                name="title"
                                type="text"
                                className={styles.form__input}
                                value={title}
                            />
                            {/* 
                            menambahkan conditional operator
                            Jika isTitleError true: munculkan error
                            Jika false: munculkan string kosong
                             */}
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="date"
                                className={styles.form__label}>
                                Year
                            </label>
                            <input
                                onChange={handleChange}
                                id="date"
                                name="date"
                                type="number"
                                className={styles.form__input}
                                value={date}
                            />
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="image"
                                className={styles.form__label}>
                                Image Address
                            </label>
                            <input
                                onChange={handleChange}
                                id="image"
                                name="image"
                                type="text"
                                className={styles.form__input}
                                value={image}
                            />
                            {isImageError && <Alert>Image Address Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="type"
                                className={styles.form__label}>
                                Genre
                            </label>
                            <select
                                id="type"
                                name="type"
                                className={styles.form__input}
                                value={type}
                                onChange={handleChange}>
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                                <option value="comedy">Comedy</option>
                                <option value="superhero">Superhero</option>
                                <option value="fantasy">Fantasy</option>
                            </select>
                            {isTypeError && <Alert>Genre Wajib Diisi</Alert>}
                        </div>
                        <div>
                            <Button full size="extralarge">Add Movie</Button>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    );
}

export default AddMovieForm;
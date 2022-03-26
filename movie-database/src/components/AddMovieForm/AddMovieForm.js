import styles from "./AddMoviewForm.module.css";

function AddMoviewForm() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className="section__left">
          <img
            className={styles.section__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        <div className={styles.section__right}>
          <h2 className={styles.section__title}>Add Movie</h2>
          <form>
            <label>Title</label>
            <input name="title" />
            <label>Year</label>
            <input name="year" />
            <input type="submit" className={styles.submit__button} />
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMoviewForm;

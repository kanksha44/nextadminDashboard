import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        previous
      </button>
      <button className={styles.button}>next</button>
    </div>
  );
};

export default Pagination;

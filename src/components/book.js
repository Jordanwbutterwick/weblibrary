import styles from "../../styles/Home.module.css";

function Book({ blocks }) {
  return (
    <ul className={styles.book}>
      {blocks.map((block, index) => (
        <li key={index}>{block}</li>
      ))}
    </ul>
  );
}

export default Book;

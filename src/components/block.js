import styles from "../../styles/Home.module.css";

function toggleContent(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function TextToggleBlock({ props }) {
  return (
    <div className={styles.textToggleBlock}>
      {props.texts.map((text, index) => (
        <div
          className={styles.toggleText}
          onclick={toggleContent("details_" + index)}
        >
          <p id={"text_" + index} key={"text_" + index} className={styles.line}>
            {text}
          </p>
        </div>
      ))}
      {props.details.map((details, index) => (
        <div className={styles.detailsBlock}>
          <p
            id={"details_" + index}
            key={"details_" + index}
            className={styles.details}
          >
            {details}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TextToggleBlock;

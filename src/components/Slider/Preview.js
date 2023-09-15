import React from "react";
import styles from "./Preview.module.css";

function Preview({ currImage }) {
  return (
    <div>
      <div className={styles.division}>
        <img src={currImage} alt="fails" className={styles.respective} />
      </div>
    </div>
  );
}

export default Preview;

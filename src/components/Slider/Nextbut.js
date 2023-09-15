import React from 'react'
import styles from "./Nextbut.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Custombut({ onClick, title }) {
  return (
    <div className={styles.but}>
        <button onClick={onClick} className={styles.buttoned}><BsFillArrowRightCircleFill/></button>
    </div>
  )
}

export default Custombut
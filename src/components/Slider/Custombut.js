import React from 'react'
import styles from "./Custombut.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Custombut({ onClick, title }) {
  return (
    <div className={styles.but}>
        <button onClick={onClick} className={styles.buttoned}><BsFillArrowLeftCircleFill/></button>
    </div>
  )
}

export default Custombut
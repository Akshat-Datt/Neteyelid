import React, { useEffect } from "react";
import styles from "./Preview.module.css";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import downloadImage from "../controller/downloadImage";

function Preview({ show, setShow, description, likes, access, index, innerArr}) {

  useEffect(()=>{
    if (show) {
      document.body.style.overflowY = 'hidden'
    }
    else{
      document.body.style.overflowY = 'scroll'
    }
    
  },[show])

  if (show) {
 
    return (
      <>
        <div className={styles.wrapper}></div>
        <div className={styles.container}>
          <button className={styles.cross} onClick={()=>setShow("")}><RxCross2/></button>
          <img src={show} alt="fails" className={styles.mapped}/>
          <button className={styles.cloud} onClick={()=>downloadImage(access, index, innerArr)}><BsFillCloudDownloadFill/></button>
          <p className={styles.para}>{`"${description}"`}</p>
          <p className={styles.para}>{`Liked By ${likes} people`}</p>
        </div>
      </>
    );
  }
}

export default Preview;

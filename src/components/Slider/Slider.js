import React, { useState } from 'react'
import Preview from './Preview';
import styles from "./Slider.module.css";
import Custombut from './Custombut';
import Nextbut from "./Nextbut";
import nextImage from '../../controller/nextImage';
import prevImage from '../../controller/prevImage';

function Slider() {
    
    const IMAGE_URLS = [
        "https://source.unsplash.com/random/1920x1080?sig=1",
        "https://source.unsplash.com/random/1920x1080?sig=2",
        "https://source.unsplash.com/random/1920x1080?sig=3",
        "https://source.unsplash.com/random/1920x1080?sig=4",
        "https://source.unsplash.com/random/1920x1080?sig=5",
        "https://source.unsplash.com/random/1920x1080?sig=6",
        "https://source.unsplash.com/random/1920x1080?sig=7",
        "https://source.unsplash.com/random/1920x1080?sig=8",
        "https://source.unsplash.com/random/1920x1080?sig=9",
        "https://source.unsplash.com/random/1920x1080?sig=10"
    ];

    const [current, setCurrent] = useState("https://source.unsplash.com/random/1920x1080?sig=1");

  return (
    <div className={styles.sliding}>
        <Preview currImage={current}></Preview>
        <Custombut onClick={()=>prevImage(IMAGE_URLS, current, setCurrent)}></Custombut>
        <Nextbut onClick={()=>nextImage(IMAGE_URLS, current, setCurrent)}></Nextbut>
    </div>
  )
}

export default Slider
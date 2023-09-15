import React, { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Gallery from "../components/Gallery/Gallery";
import axios from "axios";
import filterImages from "../controller/filterImages";

import Preview from "../modals/Preview";
import styles from "./Home.module.css";

const access = "ijZFIyyzv2uTb21T0Z9ulsowdbTigsZvilVowzY5Z_E";
const passing = createContext();
const changing = createContext();

function Home() {
  const [inner, setInner] = useState([]);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState("");
  const [desc, setDesc] = useState("");
  const [likes, setLikes] = useState();
  const fetched = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?count=30&client_id=${access}`
    );
    console.log(response);
    setInner(response.data);
  };
  useEffect(() => {
    fetched();
  }, []);
  let innerArr = [];
  for (let i = 0; i < inner.length; i++) {
    innerArr[i] = inner[i];
  }
  if (search) {
    innerArr = filterImages(innerArr, search);
  }
  return (
    <div>
      <passing.Provider value={search}>
        <changing.Provider value={(e) => setSearch(e.target.value)}>
          <Navbar></Navbar>
        </changing.Provider>
      </passing.Provider>
      <Slider></Slider>
      <div className={styles.previewer}>
        <Preview show={show} setShow={setShow} description={desc} likes={likes} access={access} index={index} innerArr={innerArr}></Preview>
      </div>
      <div>
      <Gallery individual={innerArr} innerArr={innerArr} setDisplay={setShow} setLikes={setLikes} setDesc={setDesc} setInd={setIndex}></Gallery>
      </div>
    </div>
  );
}

export default Home;
export { passing, changing };

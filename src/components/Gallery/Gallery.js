import React from "react";
import styles from "./Gallery.module.css";
import showImage from "../../controller/showImage";
import { Masonry } from "@mui/lab";

function Gallery({ individual, innerArr, setDisplay, setLikes, setDesc, setInd }) {
  return (
    <div className={styles.show}>
      <Masonry columns={3} spacing={1}>
        {individual.map((each) => (
          <img
            src={each.urls.small}
            alt={each.alt_description}
            onClick={() =>
              showImage(innerArr, setDisplay, each, setLikes, setDesc, setInd)
            }
          />
        ))}
      </Masonry>
    </div>
  );
}

export default Gallery;

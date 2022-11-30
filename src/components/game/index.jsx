import React, { useEffect, useState } from "react";
import "../../assets/css/index.css";

import { images } from "../../data/images";

export default function GameComponent({ ...props }) {
  // const [rndItem, setRndItem] = useState()

  // useEffect(() => {
  //   function getRandomItem(arr) {
  //     getRandomItem = function () { }
  //     const randomIndex = Math.floor(Math.random() * arr.length);
  //     const item = arr[randomIndex];
  //     setRndItem(item);
  //   }
  //   getRandomItem(images)
  // }, [])
  const targetId = 8
  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${props.row}, 0fr)` }}>
      {images.map((data) => (
        <img
          key={data?.id}
          id={data?.id}
          className={data?.className}
          src={data?.src}
          alt={data?.alt}
          onClick={
            // data?.id !== rndItem?.id
            data?.id !== targetId
              ? (e) => props.change(e)
              : (e) => props.result(e)
          }
        ></img>
      ))}
    </div>
  );
}

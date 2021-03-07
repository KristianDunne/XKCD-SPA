import React from "react";
import WithComic from "../hoc/WithComic";

const Comic = ({ comic }) => {
  const { title, img, alt } = comic;
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt={alt} title={alt}></img>
    </div>
  );
};

export default WithComic(Comic);

import React from "react";
import "./style.css";

const Face = ({ name, image, key, handleIncrement}) => (
  <div className="card" onClick={() => handleIncrement(key)}>
    <div className="img-container" data-tag={key}>
      <img alt={name} src={image} />
    </div>
  </div>
);

export default Face;

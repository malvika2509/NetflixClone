import React from "react";
import "./Content.css";

export default function Card(props) {
  return (
    <div>
      <div class="row">
        <div class="texts">
          <h2>{props.title}</h2>
          <p>{props.details}</p>
        </div>
        <div class="images">
          <img src={props.imgsrc} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
}

import React from "react";
import "./Content.css";
export default function Cards(props) {
  return (
    <div>
      <div class="row">
        <div class="images">
          <img src={props.imgsrc} alt="" />
        </div>
        <div class="texts">
          <h2>{props.title}</h2>
          <p>{props.details}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

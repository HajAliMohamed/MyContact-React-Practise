import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import Name from "./Name";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.key}</p>
        <Name name={props.name} />
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details tel={props.tel} email={props.email} />
      </div>
    </div>
  );
}

export default Card;

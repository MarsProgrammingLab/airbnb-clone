import React from "react";
import star from "../../public/img/star.png";

export default function Card(props) {
  let badgeText;
  if (props.cardData.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.cardData.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.cardData.stats.rating}</span>
        <span className="gray">({props.cardData.stats.reviewCount}) • </span>
        <span className="gray">{props.cardData.location}</span>
      </div>
      <p className="card--title">{props.cardData.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.cardData.price}</span> / person
      </p>
    </div>
  );
}

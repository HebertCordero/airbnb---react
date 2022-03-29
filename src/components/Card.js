import React from "react";
import star from "../img/star.png";

export default function Card(props) {
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        console.log("HERE");
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--image" alt="Card 1"/>
            <div className="card--stats">
                <img className="card--star" src={star} alt="rating"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From {props.price} /</span> person</p>
        </section>
    )
}
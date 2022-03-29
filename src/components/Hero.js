import React from "react";
import hero from "../img/hero.png";

export default function Hero(){
    return (
        <section className="hero">
            <img src={hero} className="hero-heroBanner" alt="Wherever you go, your home is here"/>
            <h1>The Best Experiencies</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
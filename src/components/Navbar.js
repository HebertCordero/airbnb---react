import React from "react"
import logo from "../img/logo.svg"

export default function Navbar() {
    return (
        <nav className="airbnb-nav">
            <img className="airbnb-nav__logo" src={logo} alt="logo"/>
        </nav>
    )
}
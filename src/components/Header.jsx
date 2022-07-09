import React from "react";
import logo from "../images/logo.png"

function Header(){
    return(
        <>
        <header>
            <img src={logo} alt="" className="logo"/>
            <h1>Meme Generator</h1>
        </header>
        </>
    )
}

export default Header;
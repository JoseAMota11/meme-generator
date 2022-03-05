import React from "react";
import Meme from "../image/TrollFace.svg"

export default function Navbar(){
    return (
        <header>
            <nav>
                <img src={Meme} alt="" />
                <h1>Meme Generator</h1>
            </nav>
        </header>
    );
}
import React from "react";

function Meme(){
    return(
        <>
        <section className="meme">
            <div className="form">
                <input type="text" placeholder="Top Text" className="form-input" />
                <input type="text" placeholder="Bottom Text" className="form-input" />
                <button className="form-btn">Get New Image✨</button>
            </div>
        </section>
        </>
    )
}

export default Meme;
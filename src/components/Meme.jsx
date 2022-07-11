import React from "react";

function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    console.log(allMemes)
    function getMemeImage(){
        // const memesArray = allMemes.data.memes
        const randomNo = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNo].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }
    return(
        <>
        <section>
            <div className="form">
                <input type="text" 
                placeholder="Top Text" 
                className="form-input"
                name="topText"
                value = {meme.topText} 
                onChange={handleChange}/>

                <input type="text" 
                placeholder="Bottom Text" 
                className="form-input"
                name="bottomText"
                value = {meme.bottomText}
                onChange={handleChange}/>

                <button className="form-btn" onClick={getMemeImage}>Get New Image✨</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
        </>
    )
}

export default Meme;
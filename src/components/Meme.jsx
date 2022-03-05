import React, {useState, useEffect} from "react";

export default function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    function randomMeme(){
        const random = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[random].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(result => setAllMemeImages(result.data.memes))
    }, [])

    function handleChange(event){
        const {value, name} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

        return (
            <section className="section__container">
                <div action="" className="form__container">
                    <div className="inputs__container">
                        <input 
                        type="text" 
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        />
                        
                        <input 
                        type="text" 
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        />

                    </div>
                    <button onClick={randomMeme}>Get a new meme image</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} alt="Meme" className="meme__image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </section>
    );
}

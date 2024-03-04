import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/GetGifs";
import searchIcon from "../Resources/searchIcon.svg"


export const GifVisualizer = () => {

    const [keyword, SetKeyWord] = useState();
    const [Gifs, SetGifs] = useState(['prueba']);

    useEffect(() => {
        getGifs(keyword).then(
            (GifUrls) => {
                SetGifs(GifUrls)
            }
        )
    }, [keyword]);

    const InputChanged = () => {
        SetKeyWord(document.getElementById("MainInput").value);
    }

    return (
        <>
            <div className="TitleDiv">
                <h1> Gif Visualizer in action! </h1>
            </div>
            <div className="UserInteraction">
                <input id="MainInput" type="text" placeholder="Write a keyword!" />
                <img className="SearchIcon" src={searchIcon} onClick={InputChanged} />
            </div>
            <div className="Gifs">
                {
                    Gifs.map(Gif => (
                        <img className="Gif" src={Gif} alt="" key={Gif} />
                    ))
                }
            </div>
        </>
    )

}
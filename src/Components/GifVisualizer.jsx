import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/GetGifs";

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
            <div>
                <h1> Gif Visualizer in action! </h1>
                <input id="MainInput" type="text" placeholder="Write a keyword!" onChange={InputChanged} />

            </div>
            <div>
                {
                    Gifs.map(Gif => (
                        <img src={Gif} alt="" key={Gif} />
                    ))
                }
            </div>
        </>
    )

}
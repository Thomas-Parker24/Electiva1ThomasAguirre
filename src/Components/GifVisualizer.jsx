import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/GetGifs";
import searchIcon from "../Resources/searchIcon.svg"
import clearIcon from "../Resources/clearIcon.svg"
import Swal from "sweetalert2";


export const GifVisualizer = () => {

    const [keyword, SetKeyWord] = useState("");
    const [Gifs, SetGifs] = useState([]);

    useEffect(() => {
        getGifs(keyword).then(
            (GifUrls) => {
                if (keyword != "" && (GifUrls == undefined || GifUrls.length == 0)) {
                    showNotFoundGifAlert();
                }

                SetGifs(GifUrls)
            }
        )
    }, [keyword]);

    const InputChanged = () => {
        SetKeyWord(document.getElementById("MainInput").value);
    }

    const clearInput = () => {
        SetKeyWord("");
        document.getElementById("MainInput").value = "";
    }

    const showNotFoundGifAlert = () => {
        Swal.fire({
            title: "No data",
            text: `We couldn't get any gif with the keyword ${keyword}.`,
            icon: "error"
        });

    }

    return (
        <>
            <div className="TitleDiv">
                <h1> Gif Visualizer! </h1>
            </div>
            <div className="UserInteraction">
                <div className="InteractionContainer">
                    <input id="MainInput" type="text" placeholder="Write a keyword!" />
                    <img className="SearchIcon" src={searchIcon} onClick={InputChanged} />
                    <img className="clearIcon" src={clearIcon} onClick={clearInput} />
                </div>
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
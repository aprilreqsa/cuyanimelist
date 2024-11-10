"use client"

import YouTube from "react-youtube"
import { useState } from "react"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen,setIsOpen] = useState(true)
    const handleClose = () => {
        setIsOpen((prev) => !prev)
    }
    const option = {
        width: "300",
        height: "250"
    }
    const Player  = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button onClick={handleClose} className="text-color-primary float-right bg-color-secondary px-3 mb-1">X</button>
                <YouTube 
                videoId={youtubeId} 
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={()=> alert("Video is broken, please try again")}
                /> 
            </div>
             )
    }
    const ButtonPlayer = () => {
        return ( 
        <button onClick={handleClose} className=" rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">Tonton Trailer</button>
        )
    }
    return isOpen ? 
        <Player />
        : <ButtonPlayer />
}
export default VideoPlayer
import React, { useRef, useState } from 'react';
import "../style/appVideo.css";

export const Video = () => {
    const [isPlay, setPlay] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const handleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
        setPlay(!isPlay);
        if (isPlay) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }

    
    return (
        <div className={(!isPlay ? "video-focus" : "video-margin")}>
            <div className={(!isPlay ? "video" : "video-pause")}>
                <video className={(!isPlay ? "player" : "player-pause")} ref={videoRef} onClick={handleClick} loop id="myVideo">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={(!isPlay ? "shadow" : "")}>
                <img className={(!isPlay ? "background" : "")} src={(!isPlay ? "https://www.gannett-cdn.com/-mm-/4d7045d509536954a1e35675975e4b15209a16d0/c=0-234-3000-1926/local/-/media/Phoenix/GenericImages/2014/06/27/1403887771000-phxdc5-6f2yumc8uuo8otui8k4-original.jpg?width=3200&height=1680&fit=crop" : "")} />
            </div>
        </div>
    );
}
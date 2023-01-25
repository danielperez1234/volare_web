import React, {  useRef, useState } from 'react';
import "../style/appVideo.css";

export const Video = () => {
    const [isPlay, setPlay] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const handleClick = (e:React.MouseEvent<HTMLVideoElement>)=>{
        setPlay(!isPlay);
        if(isPlay){
            videoRef.current?.play();
        }else{
            videoRef.current?.pause();
        }
    }
    return (
        <div className='video-margin'>
        <div className={"video "+(!isPlay?"":"video-pause")}>
            <video className={""+(!isPlay?"":"player-pause")} ref={videoRef}  onClick={handleClick}  loop id="myVideo">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
        </div>
        
        </div>
    );
}
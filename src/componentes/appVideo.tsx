import React from 'react';
import "../style/Video.css";

export const Video = () => {
    return (
        <div className="video">
            <video autoPlay muted loop id="myVideo">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
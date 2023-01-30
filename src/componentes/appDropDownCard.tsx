import React, { useState, KeyboardEvent, useEffect } from "react";

import '../style/appDropDownCard.css'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export const DropDownCard = ({ title, body }: { title: string, body: string }) => {
  const [open, setOpen] = useState(false);

  const handleKeyboardEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);

  };
  return (
    <div className='locator'>
      <div className={"card " + (open ? "cardOpen" : "")} onClick={handleKeyboardEvent}>
        <TitleElemnt title="What's this about?" imgSrc="./resources/Dron1.jpg" open={open} />
        <BodyCard open={open} body={body} />
        <div className={"ic " + (open ? "icOpen" : "")}>{<FiChevronDown />}</div>
      </div>
    </div>
  );
}

const BodyCard = ({ open, body }: { open: boolean, body: string }) => {
  return open ? (
    <div className="card-body">
      <div className="card-body-text">{body}</div>
    </div>
  ) : (<div></div>)
}

const TitleElemnt = ({ title, imgSrc, open }: { title: string, imgSrc: string, open: boolean }) => {
  function getWindowsize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  function handleResize() {
    setWindowSize(getWindowsize);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [windowSize, setWindowSize] = useState(getWindowsize());
  return (
    <div className="card-row-title ">
      <div className={(window.innerWidth <730?"card-title-sm ":"card-title ") + (open ? "title-open" : "")}>
        <h1>{title}</h1>
      </div>
      <div className={(window.innerWidth <730?"card-img-container-sm ":"card-img-container ") + (open ? "card-img-container-open" : "")}>
        <img className="imageCard" src={imgSrc} alt="" />
      </div>
    </div>
  )
}
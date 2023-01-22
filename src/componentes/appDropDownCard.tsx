import React, { useState,KeyboardEvent } from "react";

import '../style/appDropDownCard.css'
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
export const DropDownCard=({title,body}:{title: string,body: string})=>{
  const [open, setOpen] = useState(false);

  const handleKeyboardEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);

  };
  return(
    <div className='locator'>
      <div className={"card "+(open?"cardOpen":"")} onClick={handleKeyboardEvent}>
        <TitleElemnt title="Lorem Ipsum" imgSrc="./resources/Dron1.jpg" open={open}/>
        <BodyCard open={open} body={body}/>
        <div className={"ic "+(open?"icOpen":"")}>{<FiChevronDown/>}</div>
        
      </div>
    </div>
  );
}
const BodyCard=({open,body}:{open: boolean,body:string})=>{
  return open?(
    <div className="body">
      <h2>{body}</h2>
    </div>
  ):(<div></div>)
}
const TitleElemnt=({title,imgSrc,open}:{title:string,imgSrc:string,open:boolean})=>{
return (
  <div className="row-title ">
    <div className={"title "+(open?"title-open":"")}>          
      <h1>{title}</h1>
    </div>
    
    <div className={"img-container "+(open?"img-container-open":"")}>
      <img src={imgSrc} alt="" />
    </div>
  </div> 
)
}
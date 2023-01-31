import React, {useState} from "react";
import "../style/nav.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav_logo"></div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <label htmlFor="burger" className="burger">
        <input type="checkbox" id="burger" onClick={()=> setIsOpen(!isOpen)}/>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

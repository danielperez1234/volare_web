import { useEffect, useState } from "react";
import "../style/Iconos.css";

export const Iconos = () => {
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
    <div
      className={"iconos " + (windowSize.innerWidth < 1000 ? "iconos-sm" : "")}
      id="iconos"
    >
      <div className="Iconos-container">
        <img src="resources/Green-SVG-1.svg" className="icono" />
        <p className="text">ORDERS IN UNDER 5 MINUTES</p>
      </div>
      <div className="Iconos-container">
        <img src="resources/Speed-SVG-1.svg" className="icono" />
        <p className="text">{"CAPACITY FOR PACKAGES < 5 KG"}</p>
      </div>
      <div className="Iconos-container">
        <img src="resources/Green-SVG-1.svg" className="icono" />
        <p className="text">FRIENDS WITH THE ENVIROMENT</p>
      </div>
      <div className="Iconos-container">
        <img src="resources/Speed-SVG-1.svg" className="icono" />
        <p className="text">YOU ARE OUR PRIORITY</p>
      </div>
    </div>
  );
};

import "../style/Iconos.css"

export const Iconos = () => {
    return(
        <div className="iconos" id="iconos">
            <div className="container">
                <img src="resources/Green-SVG-1.svg" className="icono"/>
                <p className="text">ORDERS IN UNDER 5 MINUTES</p>
            </div>
            <div className="container">
                <img src="resources/Speed-SVG-1.svg" className="icono"/>
                <p className="text">{"CAPACITY FOR PACKAGES < 5 KG"}</p>
            </div>
            <div className="container">
                <img src="resources/Green-SVG-1.svg" className="icono"/>
                <p className="text">FRIENDS WITH THE ENVIROMENT</p>
            </div>
            <div className="container">
                <img src="resources/Speed-SVG-1.svg" className="icono"/>
                <p className="text">YOU ARE OUR PRIORITY</p>
            </div>
        </div>
    )
}
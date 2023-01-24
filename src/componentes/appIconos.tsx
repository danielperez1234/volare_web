import "../style/Iconos.css"

export const Iconos = () => {
    return(
        <div className="iconos" id="iconos">
            <div className="container">
                <img src="resources/Green-SVG-1.svg" className="icono"/>
                <p>ORDERS IN UNDER 5 MINUTES</p>
            </div>
            <div className="container">
                <img src="resources/Speed-SVG-1.svg" className="icono"/>
                <p>{"CAPACITY FOR PACKAGES < 5 KG"}</p>
            </div>
            <div className="container">
                <img src="resources/Green-SVG-1.svg" className="icono"/>
                <p>FRIENDS WITH THE ENVIROMENT</p>
            </div>
            <div className="container">
                <img src="resources/Speed-SVG-1.svg" className="icono"/>
                <p>YOU ARE OUR PRIORITY</p>
            </div>
        </div>
    )
}
import "../style/Iconos.css"

export const Iconos = () => {
    return (
        <div className="iconos" id="iconos">
            <div className="exContainer">
                <div className="container">
                    <img src="resources/Green-SVG-1.svg" className="icono" />
                </div>
                <div className="cajaTextos">
                    <p className="text">ORDERS IN UNDER 5 MINUTES</p>
                </div>
            </div>
            <div className="exContainer">
                <div className="container">
                    <img src="resources/Speed-SVG-1.svg" className="icono" />
                </div>
                <div className="cajaTextos">
                    <p className="text">{"CAPACITY FOR PACKAGES < 5 KG"}</p>
                </div>
            </div>
            <div className="exContainer">
                <div className="container">
                    <img src="resources/Green-SVG-1.svg" className="icono" />
                </div>
                <div className="cajaTextos">
                    <p className="text">FRIENDS WITH THE ENVIROMENT</p>
                </div>
            </div>
            <div className="exContainer">
                <div className="container">
                    <img src="resources/Speed-SVG-1.svg" className="icono" />
                </div>
                <div className="cajaTextos">
                    <p className="text">YOU ARE OUR PRIORITY</p>
                </div>
            </div>
        </div >
    )
}
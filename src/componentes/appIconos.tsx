import "../style/Iconos.css"

export const Iconos = () => {
    return (
        <div className="iconos" id="iconos">
            <div className="exContainer">
                <div className="container">
                    <img src="resources/Speed-SVG-1.svg" className="icono" />
                </div>
                <div className="cajaTextos">
                    <p className="text">ORDENES EN MENOS DE 5 MINUTOS</p>
                </div>
            </div>
            <div className="exContainer">
                <div className="container">
                    <img src="resources/Weight-SVG-1.svg" className="icono" />
                </div>
                <div className="cajaTextos">
                    <p className="text">{"CAPACIDAD DE HASTA 5 KILOS"}</p>
                </div>
            </div>
            <div className="exContainer">
                <div className="container">
                    <img src="resources/Green-SVG-1.svg" className="icono" />
                </div>
                <div className="cajaTextos">
                    <p className="text">AMIGOS CON EL AMBIENTE</p>
                </div>
            </div>
            <div className="exContainer">
                <div className="container">
                    <img src="resources/user-check.svg" className="icono" />
                </div>
                <div className="cajaTextos">
                    <p className="text">NUESTRA PRIORIDAD ERES TU</p>
                </div>
            </div>
        </div >
    )
}
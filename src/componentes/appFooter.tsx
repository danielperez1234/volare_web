import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../style/appFooter.css";

export const Footer = () => {
  return (
    <footer>
      <div className="appFooter-container">
        <div className="row">
          <div className="col-md-4">
            <h3>Volare</h3>
            <p>
              Volaré es una compañia que ofrece servicios de transporte de todo tipo
              de bienes y articulos de necesidad, con los mejores precios y el mejor servicio.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Contactanos</h3>
            <ul>
              <li>Telefono: +1 602 596 2459</li>
              <li>Email: Volare@tacos.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Siguenos en redes</h3>
            <ul className="social-icons">
                <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>
                <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                <li><a href="https://www.instagram.com/volare.mx/"><FaInstagram /></a></li>
                <li><a href="https://www.youtube.com/"><FaYoutube /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

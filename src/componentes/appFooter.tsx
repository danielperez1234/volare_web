import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../style/footerStyle.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Volare</h3>
            <p>
              Volare is a company that offers a service of transportation of
              people and goods, with the best prices and the best service.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Contact us</h3>
            <ul>
              <li>Phone: +1 602 596 2459</li>
              <li>Email: Volare@tacos.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow us</h3>
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

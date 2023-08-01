import React from "react";
import "./footer.css";
import image from "../../Assets/ANIK.png";
import icon from "../../Assets/Twitter.jpg";
import icon1 from "../../Assets/Facebook Circled.jpg";
import icon2 from "../../Assets/Instagram Circle.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer   bg-dark mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5 text-center">
              <img src={image} alt="" className="image " />
            </div>

            <div className="col-md-3 mt-5 ">
              <ul>
                <li>
                  <Link to="/ABOUT US">ABOUT US</Link>
                </li>
                <br />
                <li>
                  <Link to="/ORDER">ORDER</Link>
                </li>
                <br />
                <li>
                  <Link to="TESTIMONIAL">TESTIMONIAL</Link>
                </li>
                <br />
                <li>
                  <Link to="/LOCATE US">LOCATE US</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mt-5">
              <ul>
                <li>
                  <Link to="/POLICY LIBRARY">POLICY LIBRARY</Link>
                </li>
                <br />
                <li>
                  <Link to="/CONTACT">CONTACT</Link>
                </li>
                <br />
                <li>
                  <Link to="/VEGAN OPTION">VEGAN OPTION</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mt-5">
              <ul>
                <li>
                  <Link to="/FOLLOW US">FOLLOW US</Link>
                </li>
              </ul>
              <br />
              <img src={icon} alt="twitter-icon" />
              <img src={icon1} alt="facebook-icon" />
              <img src={icon2} alt="insta-icon" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import "./menu.css";

import image2 from "../Assets/Rice Bowl.png";
import image3 from "../Assets/Room Service.png";
import image4 from "../Assets/Pizza.png";
import image5 from "../Assets/Poultry Leg.png";
import image6 from "../Assets/Vegan Food.png";
import image7 from "../Assets/jollof-rice-stew.jpg";
import image8 from "../Assets/jollof-rice-nigeria 1.jpg";
import image9 from "../Assets/amala 1.jpg";
import image10 from "../Assets/EGUSI-WITH-BALL-8-1-500x500 1.jpg";
import image11 from "../Assets/JollySpaghetti_600x480px 1.jpg";
import image12 from "../Assets/pasta.jpg";
import image13 from "../Assets/tuwo.jpg";
import image14 from "../Assets/Afang-Soup 1.jpg";

// import userlocation from "../Assets/User Location.jpg";

// import searchicon from "../Assets/Search (1).jpg"
// import multiply from "../Assets/Multiply.jpg"

const Menu = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center text-light mt-5">
            <h1>MENU</h1>
            {/* <img src={searchicon} alt="searchicon" /> */}
            {/* <img src={multiply} alt="multiply" /> */}
            <input
              type="text"
              id="text"
              name="input"
              placeholder="what are you craving"
              className="text mt-4"
            />

            <div className="container mt-4">
              <div className="row">
                <div className="col-md-2 menu men text-center me-nu">
                  <img src={image2} alt="" className="img-fluid mb-4" />
                  <p>Locals</p>
                </div>

                <div className="col-md-3 menu men text-center">
                  <img src={image3} alt="" className="img-fluid mb-4 " />
                  <p>International</p>
                </div>

                <div className="col-md-3 menu men text-center">
                  <img src={image4} alt="" className="img-fluid mb-4" />
                  <p>
                    Appertizers & <br /> Fast Food
                  </p>
                </div>

                <div className="col-md-3 menu men text-center">
                  <img src={image5} alt="" className="img-fluid mb-4" />
                  <p>Chicken</p>
                </div>

                <div className="col-md-3 menu men text-center">
                  <img src={image6} alt="" className="img-fluid mb-4" />
                  <p>Veggies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            {/* <img src={userlocation} alt="" /> */}
            <p>Best near you</p>

            <div className="intact">
              <img src={image7} alt="" className="rice-image" />
              <p className="text-center bold word">Jollof Rice</p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src={image8}
              alt=""
              className="rice-image mt-5"
              height={"265px"}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="intact">
              <img src={image9} alt="amala" className="rice-image mt-5" />
              <p className="text-center bold word">Amala</p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src={image10}
              alt="egusi"
              className="rice-image mt-5 "
              height={"259px"}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="intact">
              <img src={image11} alt="spaghetti" className="rice-image mt-5" />
              <p className="text-center bold word">Spaghetti</p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src={image12}
              alt="pasta"
              className="rice-image mt-5"
              height={"250px"}
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="intact">
                <img src={image13} alt="" className="rice-image mt-5" />
                <p className="text-center bold word">Tuwo</p>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src={image14}
                alt=""
                className="rice-image mt-5"
                height={"250px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

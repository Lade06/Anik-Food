import React from "react";
import "./menu2.css";
import kimchi from "../Assets/Kimchi 1.jpg";
import caribean from "../Assets/Caribbean-Foods.jpg";
import spag from "../Assets/Spag 2.jpg";
import friedrice from "../Assets/freid-rice.jpg";

const Menu2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="intact">
              <img src={kimchi} alt="kimchi" width={"100%"} className="mt-5" />
              <p className="text-center bold word mt-4 mx-5">Kimchi</p>
            </div>

            <div className="intact">
              <img
                src={caribean}
                alt="caribean"
                width={"100%"}
                className="mt-5"
              />
              <p className="text-center bold word mt-4">Carribean Rice</p>
            </div>

            <div className="intact">
              <img src={spag} alt="spaghetti" width={"100%"} className="mt-5" />
              <p className="text-center bold word mt-4 mx-5">Spaghetti</p>
            </div>

            <div className="intact">
              <img
                src={friedrice}
                alt="fried-rice"
                width={"100%"}
                className="mt-5"
              />
              <p className="text-center bold word mt-4 mx-5">Fried Rice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu2;

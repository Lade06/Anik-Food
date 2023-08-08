import React from "react";

import sushi from "../Assets/sushi-rows.jpg";
import corndog from "../Assets/corn dog.jpg";
import pizaa from "../Assets/pizaa.jpg";
import potatoebites from "../Assets/potato-bites 1.jpg";
const Menu3 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="intact">
              <img
                src={sushi}
                alt=""
                width={"100%"}
                height={"330em"}
                className="mt-5"
              />
              <p className="text-center bold word mx-5"> Sushi Rolls</p>
            </div>

            <div className="intact">
              <img
                src={corndog}
                alt=""
                width={"100%"}
                height={"330em"}
                className="mt-5"
              />
              <p className="text-center bold word">Cheesy Corn Dog</p>
            </div>

            <div className="intact">
              <img
                src={pizaa}
                alt=""
                width={"100%"}
                height={"330em"}
                className="mt-5"
              />
              <p className="text-center bold word mx-5">Pizza</p>
            </div>

            <div className="intact">
              <img
                src={potatoebites}
                alt=""
                width={"100%"}
                height={"330em"}
                className="mt-5"
              />
              <p className="text-center bold word mt-4 mx-5">Potatoe Bites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu3;

import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"

// import veggies from "../Assets/veggies-lifemag 1.jpg";
import seafood from "../Assets/sea-food.jpg";
import broccoli from "../Assets/broccoli 1.jpg";

const Menu5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
       <Carousel>
                <div>
                    <img src={seafood}  alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={broccoli} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={seafood} alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="intact">
              <img
                src={veggies}
                alt="veggies"
                width={"100%"}
                className="mt-5"
              />
              <p className="text-center bold word mt-5 mx-5">Veggy Salad</p>
            </div>

            <div className="intact">
              <img
                src={seafood}
                alt="seafood"
                width={"100%"}
                className="mt-5"
              />
              <p className="text-center bold word mt-5">Sea food Veggy</p>
            </div>

            <div className="intact">
              <img
                src={broccoli}
                alt="broccoli"
                width={"100%"}
                className="mt-5"
              />
              <p className="text-center bold word mt-5 mx-5">Broccoli</p>
            </div>
          </div>
        </div>
      </div>{" "} */}
    </div>
  );
};

export default Menu5;

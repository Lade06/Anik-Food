import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

   
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
      
      <Slider {...settings}>
        <div className="intact">
          <img src={seafood} alt="seafood" width={"600px"} className="mt-5" />
          {/* <p className="text-center bold word mt-5">Sea food Veggy</p> */}
        </div>
        <div className="intact">
          <img src={broccoli} alt="broccoli" width={"600px"} className="mt-5" />
          {/* <p className="text-center bold word mt-5 mx-5">Broccoli</p> */}
        </div>
        <div className="intact">
          <img src={seafood} alt="seafood" width={"600px"} className="mt-5" />
          {/* <p className="text-center bold word mt-5">Sea food Veggy</p> */}
        </div>

        <div className="intact">
          <img src={seafood} alt="seafood" width={"600px"} className="mt-5" />
          {/* <p className="text-center bold word mt-5">Sea food Veggy</p> */}
        </div>
        {/* Add more slides as needed */}
      </Slider>
      {" "}


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

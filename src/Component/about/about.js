import React from "react";
import "./about.css";
import pastaspag from "../../Assets/pasta-spag.jpg";
import egusi from "../../Assets/egusi-ball.png";
import jollof from "../../Assets/1200px-Jollof_Rice_with_Stew 2.jpg";
import kimch from "../../Assets/traditional-kimchi-569054 1.jpg";
import shush from "../../Assets/sushi-rows.jpg";
import chicken from "../../Assets/sunday-chick.jpg";
import afang from "../../Assets/Afang-Soup 2.jpg";
import vegge from "../../Assets/Sauteed-Vegetables-005 1.png";
import brocc from "../../Assets/broccoli 2.jpg";
import corndog from "../../Assets/corn-dog.jpg";
import cappuccino from "../../Assets/Cappuccino 1.jpg";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-5 text-light">
            <h1>About Us</h1>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 text-light">
            <h2>Who We Are</h2>
            <p>
              urna Nunc vel eu nulla, Cras elit. vehicula, <br />
              malesuada laoreet scelerisque at quam <br />
              sapien at tempor placerat lorem. odio <br /> adipiscing lobortis,
              adipiscing ipsum dolor <br />
              at Praesent viverra vitae Cras at, ex. id <br />
              diam viverra luctus placerat non, in cursus <br /> maximus
              Vestibulum luctus id ex amet, <br />
              nibh viverra tincidunt Nunc porta felis, sit <br />
              nisi Nunc non. In viverra amet, volutpat <br /> fringilla nec
              lacus, risus
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={pastaspag}
              alt="pasta"
              className="mt-5"
              width={"100%"}
              height={"260px"}
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <img src={egusi} alt="" className="mt-5" width={"100%"} />
          </div>

          <div className="col-md-6 mt-5 text-light">
            <h2>Choice For All</h2>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              sed do <br />
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Ut enim ad <br /> minim veniam, quis nostrud <br /> exercitation
              ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.{" "}
              <br /> Duis aute irure dolor in <br />
              reprehenderit in voluptate velit esse <br /> cillum dolore eu
              fugiat nulla pariatur. <br />
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>

        <div className="row mt-5 text-center text-light">
          <div className="col-md-12">
            <h2>Instagram</h2>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img src={shush} alt="sushi" width={"100%"}  height={"250px"} />
          </div>

          <div className="col-md-4">
            <img src={jollof} alt="jollo-rice" width={"100%"} />
          </div>

          <div className="col-md-4">
            <img src={kimch} alt="kimchi" width={"100%"} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <img src={chicken} alt="roasted-chicken" width={"100%"} />
          </div>

          <div className="col-md-4">
            <img src={afang} alt="afang-soup" width={"100%"} />
          </div>

          <div className="col-md-4">
            <img src={vegge} alt="vegetable" width={"100%"} height={"290px"}  />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <img src={brocc} alt="broccoli" width={"100%"} />
          </div>

          <div className="col-md-4">
            <img src={corndog} alt="corn-dog" width={"100%"} height={"300px"} />
          </div>

          <div className="col-md-4">
            <img src={cappuccino} alt="cappuccino" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

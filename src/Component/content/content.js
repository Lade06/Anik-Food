import React from "react";
import "./content.css";
import image1 from "../../Assets/rice.png";
import image2 from "../../Assets/Rice Bowl.png";
import image3 from "../../Assets/Room Service.png";
import image4 from "../../Assets/Pizza.png";
import image5 from "../../Assets/Poultry Leg.png";
import image6 from "../../Assets/Vegan Food.png";
import image7 from "../../Assets/Egusi.png";
import image8 from "../../Assets/rolls.png";
import image9 from "../../Assets/Spag 1.png";
import image10 from "../../Assets/nkwobi 1.png";
import star from "../../Assets/Star 1.png";
// import star3 from "../../Assets/Star 30 (1).png";
// import image11 from "../../Assets/roasted chicken.png";
import image12 from "../../Assets/Timer.png";
import image11 from "../../Assets/roasted chicken.png";
import image13 from "../../Assets/Food Bar.png";
import image14 from "../../Assets/Deliver Food.png";
import chef from "../../Assets/chef.png";
import ellipse6 from "../../Assets/Ellipse 6 (1).png";
// import woman from "../../Assets/woman.png";
import image01 from "../../Assets/O 1.png";
// import image02 from "../../Assets/O 2 (1).png";
import image03 from "../../Assets/O 2.png";
import image00 from "../../Assets/O 3.png";
import Veggies from "../../Assets/VEGGIES 2.png";
import green from "../../Assets/green.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import background from "../../Assets/img.jpg"
import { Carousel } from "react-responsive-carousel";
import background1 from "../../Assets/kk.jpg";
import background2 from "../../Assets/mm.jfif";

const Content = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 food mt-5 text-light">
            <h2>Good Food</h2>
            <span>
              <h4>Good Life</h4>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              <br />
              porttitor congue massa. Fusce posuere, magna sed pulvinar <br />
              ultricies, purus lectus malesuada libero, sit amet commodo magna
            </p>
            <input type="text" id="inputt" placeholder="what are you craving" />
            <button type="button" className="btnn mt-5">
              Order Now
            </button>
          </div>
          <div className="col-md-6 mt-5">
            <img width={300} src={image1} alt="food" />
          </div>
        </div>
      </div>
      {/* <div className="container basirat">
        <h2 className="ourmenu text-center">Our Menus</h2>
      </div> */}
      
       <div className="container mt-4">
        <div className="row">
        <div className="container basirat">
        <h2 className="ourmenu text-center">Our Menus</h2>
      </div>
          <div className="col-md-2 menu men text-center">
           
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
     

      <div className="container mt-5">
      <div>
        <h2 className="inspiration text-center mb-5">
          Inspiration For Your First Order
        </h2>
      </div>
        <div className="row">
          <div className="col-md-3 semo ">
            <button className="bg-dark back">
              <img src={image7} alt="" className="foo" />
              <p>Semo and <br /> Egusi soup</p>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <p>#1200.00</p>
            </button>
          </div>
          <div className="col-md-3 semo">
            <button className="bg-dark back">
              <img src={image8} alt="" className="foo" />
              <p>Cheezy corn <br /> dogs</p>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <p>#500.00</p>
            </button>
          </div>
          <div className="col-md-3 semo">
            <button className="bg-dark back">
              <img src={image9} alt="" className="foo" />
              <p>Spaghetti <br /> Bolognese</p>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <p>#800.00</p>
            </button>
          </div>
          <div className="col-md-3 semo">
            <button className="bg-dark back">
              <img src={image10} alt="" className="foo" />
              <p>Nkwobi</p>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <p>#1500.00</p>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="container basirat">
          <div className="row">
            <div className="col-md-6">
              <img src={image11} alt="" className="chick" />
            </div>

            <div className="col-md-6 text-light">
              <h2 className="inspiration">Why Choose Us?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                euismod pulvinar erat.
              </p>

              <h1>{/* <BsClockHistory />  24 Hours Services */}</h1>
              <div className="hours text-light">
                <img src={image12} alt="timer" />
                <p>
                  {" "}
                  <span>24 Hours Services</span> <br />
                  Our round-the-clock services allows you to order you food
                  anytime
                </p>
              </div>

              <div className="hours text-light">
                <img src={image13} alt="foodbar" />
                <p>
                  <span>Best Taste</span> <br /> Our experienced chefs gives you
                  food that makes your taste buds scream for more
                </p>
              </div>

              <div className="hours text-light">
                <img src={image14} alt="deliver" />
                <p>
                  <span>On-Time Delivery</span> <br /> Our delivery Services are
                  ever on time so you never have to worry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 text-light">
        <div className="row">
          <div className="col-md-6">
            <Carousel>
              <div>
                {/* <img src={background}  alt="" /> */}
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={background1} alt="" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={background2} alt="" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>

          <div className="col-md-6 mt-5">
            <div className="circle ">
              <img src={ellipse6} alt="ellipse" className="elli" />
              <img src={chef} alt="chef" className="chef" />
              <div className="veggie">
                <img src={image01} alt="" className="veg1" />
                {/* <img src={image02} alt=""  className="veg2" /> */}
                <img src={image03} alt="" className="veg3" />
                <img src={image00} alt="" className="veg4" />
                <img src={Veggies} alt="" className="veg5" />
                <img src={Veggies} alt="" className="veg6" />
                <img src={green} alt="" className="veg7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

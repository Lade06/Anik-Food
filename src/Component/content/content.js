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
import star3 from "../../Assets/Star 30 (1).png";
// import image11 from "../../Assets/roasted chicken.png";
import image12 from "../../Assets/Timer.png";
import image11 from "../../Assets/roasted chicken.png";
import image13 from "../../Assets/Food Bar.png";
import image14 from "../../Assets/Deliver Food.png";
import ellipse from "../../Assets/Ellipse 1.png";
import ellipse3 from "../../Assets/Ellipse 3.png";
import chef from "../../Assets/chef.png";
import ellipse6 from "../../Assets/Ellipse 6 (1).png";
import woman from "../../Assets/woman.png";
import image01 from "../../Assets/O 1.png";
import image02 from "../../Assets/O 2 (1).png";
import image03 from "../../Assets/O 2.png";
import image00 from "../../Assets/O 3.png";
import Veggies from "../../Assets/VEGGIES 2.png";
import green from "../../Assets/green.png";
// import {BsClockHistory} from 'react-icons/bs';

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
            <input type="text" id="" placeholder="what are you craving" />
            <button type="button" className="btnn mt-5">
              Order Now
            </button>
          </div>
          <div className="col-md-6 mt-5">
            <img width={300} src={image1} alt="food" />
          </div>
        </div>
      </div>
      <div className="container basirat">
      <h2 className="ourmenu text-center">
      Our Menus
        </h2>

        {/* <div className="row">
          <div className="col-md-3 menu text-center">
            
            <img src={image2} alt="" className="foodie" />
            <p>Locals</p>
          </div>

          <div className="col-md-2 menu ase text-center">
            <img src={image3} alt="" className="foodie" />
            <p>International</p>
          </div>

          <div className="col-md-2 menu asss text-center">
            <img src={image4} alt="" className="foodie" />
            <p>
              Appertizers & <br /> Fast Food
            </p>
          </div>

          <div className="col-md-2 menu asf text-center">
            <img src={image5} alt="" className="foodie" />
            <p>Chicken</p>
          </div>
          <div className="col-md-3 menu as text-center">
            <img src={image6} alt="" className="foodie" />
            <p>Veggies</p>
          </div>
        </div> */}

      </div>

      <div className="container mt-4">
    <div className="row">
    
      <div className="col-md-2 menu men">
        <img src={image2} alt="Image 1" className="img-fluid" />
      </div>
      
      <div className="col-md-3 menu men">
        <img src={image3} alt="Image 2" className="img-fluid" />
      </div>
 
      <div className="col-md-3 menu men">
        <img src={image4}  alt="Image 3" className="img-fluid" />
      </div>

      <div className="col-md-3 menu men">
        <img src={image5}  alt="Image 4" className="img-fluid" />
      </div>
     
      <div className="col-md-3 menu men">
        <img src={image6}  alt="Image 5" className="img-fluid" />
      </div>
    </div>
  </div>

      <div>
        <h2 className="inspiration basirat text-center">
          Inspiration For Your First Order
        </h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3 semo ">
            <button className="bg-dark back">
              <img src={image7} alt="" className="foo" />
              <p>Semo and Egusi soup</p>
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
              <p>Cheezy corn dogs</p>
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
              <p>Spaghetti Bolognese</p>
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
       
        <h6 className="what">What our customers say</h6>
      <div className="woman">
      <img src={woman} alt="" />
      <p><span>Coker Josephine </span><br />Data Analyst <br /><img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star3} alt="star" /></p>
      
      </div>
     
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing <br /> elit. Maecenas porttitor congue massa.
         Fusce <br />posuere, magna sed pulvinar
</p>
<div className="ellip mt-5 text-center">
<img src={ellipse} alt="ellipse" /><br />
<img src={ellipse3} alt="ellipse3" /><br />
<img src={ellipse3} alt="ellipse3" /><br />
<img src={ellipse3} alt="ellipse3" /><br />
</div>


        </div>
        


        <div className="col-md-6 mt-5">
    <div className="circle ">
      <img src={ellipse6} alt="ellipse" className="elli" />
        <img src={chef} alt="chef"  className="chef" />
    <div className="veggie">
        <img src={image01} alt=""  className="veg1" />
        <img src={image02} alt=""  className="veg2" />
        <img src={image03} alt=""  className="veg3" />
        <img src={image00} alt=""  className="veg4" />
        <img src={Veggies} alt=""  className="veg5" />
        <img src={Veggies} alt=""  className="veg6" />
        <img src={green} alt=""  className="veg7" />
    </div>
        </div>
    </div>
      </div>
     </div>


    </div>
  );
};

export default Content;

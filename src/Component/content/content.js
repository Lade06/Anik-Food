import React from "react";
import "./content.css"
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
// import image11 from "../../Assets/roasted chicken.png";
// import image12 from "../../Assets/Timer.png";
// import image11 from "../../Assets/roasted chicken.png";
import image11 from "../../Assets/roasted chicken.png";
import {BsClockHistory} from 'react-icons/bs';


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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas<br />
             porttitor congue massa. Fusce posuere,
            magna sed pulvinar <br /> 
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
          <div className="row">
            <div className="col-md-3 menu text-center">
           < img src={image2} alt="" className="foodie"/>
            <p>Locals</p>
            </div>

            <div className="col-md-2 menu ase text-center">
            <img src={image3} alt=""className="foodie" />
              <p>International</p>
            </div>

            <div className="col-md-2 menu asss text-center">
            <img src={image4} alt="" className="foodie" />
              <p>
                Appertizers & <br /> Fast Food
              </p>
            </div>

            <div className="col-md-2 menu asf text-center">
            <img src={image5} alt=""className="foodie"  />
              <p>Chicken</p>

            </div>
            <div className="col-md-3 menu as text-center">

            <img src={image6} alt="" className="foodie" />
              <p>Veggies</p>
            </div>
          </div>
        </div>

      <div>
        <h2 className="inspiration basirat text-center">Inspiration For Your First Order</h2>
      </div>

      
      <div className="container">
        <div className="row">
          <div className="col-md-3 semo ">
            <button className="bg-dark back">
            <img  src={image7} alt="" className="foo"  />
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

        <div className="col-md-6">
          <h6 className="inspiration">Why Choose Us?</h6>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer euismod pulvinar erat.</p>
          
          <h1>
            <BsClockHistory />  24 Hours Services
          </h1>
          <p className="hi"> 24 Hours Services</p>
          <p>Our round-the-clock services allows you to order your food anytime.</p>

        </div>


      </div>
    </div>
  </div>
  </div>
  );
};

export default Content;

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
// import image11 from "../../Assets/roasted chicken.png";

const Content = () => {
  return (
    <div className="cent">
      <div className="container">
        <div className="row">
          <div className="col-md-4 food mt-5">
            <h4>Good Food</h4>
            <span>
              <h4>Good Life</h4>
            </span>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
              <br />
              Integer euismod pulvinar erat, <br />
              eget.
            </p>
            <input type="text" id="" placeholder="what are you craving" />
            <button type="button" className="btnn">
              Order Now
            </button>
          </div>
          <div className="col-md-4 mt-5">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>

      <div>
      <p className="our">Our Menus</p>
      <div className="container text-center mt-5">
        <div className="row">
        <div className="meal">
            <div className="col-md-4 menu">
            <img src={image2} alt="" className="foodie"/>
            <p>Locals</p>
            </div>

            <div className="col-md-4 menu">
              <img src={image3} alt=""className="foodie" />
              <p>International</p>
            </div>

            <div className="col-md-4 menu">
              <img src={image4} alt="" className="foodie" />
              <p>
                Appertizers & <br /> Fast Food
              </p>
            </div>

            <div className="col-md-4 menu">
              <img src={image5} alt=""className="foodie"  />
              <p>Chicken</p>
            </div>

            <div className="col-md-4 menu">
              <img src={image6} alt="" className="foodie" />
              <p>Veggies</p>
            </div>
    
        </div> 
        </div>
      </div>
      </div>
        
        

      <div>
        <p className="our">Inspiration For Your First Order</p>
        <div className="meal2">
         <div className="container text-center mt-5">
          <div className="row">
            <div className="col-md-4 menu2">
            <img src={image7} alt="" />
            <p>Semo and Egusi soup</p>
            <img src={star} alt="" className="foo" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>#1200.00</p>
            </div>

            <div className="col-md-4 menu2">
         <img src={image8} alt="" className="foo" />
            <p>Cheezy corn dogs</p>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>#500.00</p>
          </div>
          
          <div className="col-md-4 menu2">
          <img src={image9} alt="" className="foo" />
            <p>Spaghetti Bolognese</p>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>#800.00</p>
          </div>

          
       <div className="col-md-4 menu2">
       <img src={image10} alt="" className="foo" />
            <p>Nkwobi</p>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>#1500.00</p>
       </div>
          </div>
         </div>      
        </div>
      </div>

      {/* <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={image11} alt="" className="chick" />
            </div>

            <div className="col-md-4">
              <h6>Why Choose Us?</h6>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer euismod pulvinar erat.</p>
              
              <img src={image12} alt="" />
              <p>24 Hours Services</p>
              <p>Our round-the-clock services allows you to order your food anytime.</p>

            </div>


          </div>
        </div>
      </div> */}


    </div>
  );
};

export default Content;

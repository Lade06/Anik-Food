import React from "react";
import './card4.css'
import anik from "../../Assets/ANIK.png";
import jollyrice from "../../Assets/jolly-rice.jpg"

const Card4 = () => {
  return (
    <div>
      <div className="container mt-5 text-center create-account">
        <div className="row">
          <div className="col-md-5 mt-5">
            <img src={anik} alt="" />
            <p className="place bold">Please create an account to place order</p>

            
              <button className="track mt-5">Track Order</button>
          
            <p className="text-center mb-5 have">
              <b>
                Already have an account, <span>Sign In</span>
              </b>
            </p>
          </div>

          <div className="col-md-7">
           <div className="jolly">
<img src={jollyrice} alt="" width={"100%"} height={"550px"} className="mr-5 pr-5" />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;

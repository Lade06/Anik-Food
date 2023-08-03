import React from "react";
import "./card.css";
import {BsFillCheckCircleFill} from 'react-icons/bs';


const Card = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          
       

          <div className="col-md-4 card-d text-center">
          <BsFillCheckCircleFill className="check mt-3"/>
            <div className="order mt-5 text-center">
              <p>Your have have successfully place your order</p>
            </div>
            <div className="row">
              <div className="d-flex gap-5  mx-5 time">
                <span>Estimated delivery time</span>
                <p>30mins</p>
              </div>
            </div>

            <div className="row">
              <div className="d-flex tracking mt-3 gap-5 mb-4">
                <button className="track">Track Order</button>
                <button className="track2 ">Go back to homepage</button>
              </div>
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { BsDoorOpen } from "react-icons/bs";

const Card3 = () => {
  return (
    <div>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-4 card-d text-center">
            <BsDoorOpen className="check mt-3" />
            <div className="order mt-5 text-center">
              <p>You have been logged out</p>
            </div>

            <div className="row">
              <div className="mt-3 gap-5 mb-4">
                <button className="track">Re-login</button>
              </div>
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Card3;

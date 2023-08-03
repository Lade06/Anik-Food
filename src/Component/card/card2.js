import React from "react";

import { BsFillCheckCircleFill } from "react-icons/bs";
const Card2 = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-4 card-d text-center">
            <BsFillCheckCircleFill className="check mt-3" />
            <div className="order mt-5 text-center">
              <p>Oh no! you're leaving...</p>
              <p>Are you sure you want to log out?</p>
            </div>

            <div className="row">
              <div className="d-flex tracking mt-3 gap-5 mb-4">
                <button className="track">No, cancel</button>
                <button className="track2 ">Yes,Log me out</button>
              </div>
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Card2;

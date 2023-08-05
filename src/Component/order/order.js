import React from "react";
import "./order.css";
import caribean from "../../Assets/Caribbean-Foods.jpg";
import image7 from "../../Assets/jollof-rice-stew.jpg";
import image11 from "../../Assets/JollySpaghetti_600x480px 1.jpg";

const Order = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12 text-center mt-5 text-light">
              <h1>Order</h1>
              <input
                type="text"
                id=""
                name="input"
                placeholder="Search..."
                className="text mt-4"
              />

              <div className="intact mt-5">
                <img src={image7} alt="" className="rice-image" />
                <p className="text-center bold word">Jollof Rice</p>
              </div>
            </div>

            <div className="row mt-5 text-light">
              <div className="col-md-6">
                <p>
                  <b>Jollof rice and chicken</b>
                </p>
                <p>
                  Nigerian jollof with fried crispy chicken <br /> +1 side
                </p>
                <p>
                  <b>#1300.00</b>
                </p>
                <p>
                  <b>Quantity</b>
                </p>
                <div className="btn-group">
                  <button className="b-tn">-</button>
                  <button className="b-tn">2</button>
                  <button className="b-tn">+</button>
                </div>
              </div>
            </div>

            <div className="intact mt-5">
              <img src={image11} alt="spaghetti" className="rice-image mt-5" />
              <p className="text-center bold word">Spaghetti</p>
            </div>

            <div className="intact">
              <img
                src={caribean}
                alt="caribean"
                width={"100%"}
                className="mt-5"
              />
              <p className="text-center bold word mt-4">Carribean Rice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

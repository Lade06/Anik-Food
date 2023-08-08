import React from "react";
import "./order.css";
import caribean from "../../Assets/Caribbean-Foods.jpg";
import image7 from "../../Assets/jollof-rice-stew.jpg";
import image11 from "../../Assets/JollySpaghetti_600x480px 1.jpg";
import star from "../../Assets/Star 30.png";
import star1 from "../../Assets/Star 1.png";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Order = () => {
  return (
    <div>
      <Navbar />
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
                <img
                  src={image7}
                  alt=""
                  className="rice-image"
                  height={"330em"}
                />
                <p className="text-center bold word">Jollof Rice</p>
              </div>
            </div>

            <div className="container">
              <div className="row mt-5 text-light">
                <div className="col-md-4">
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
                  </div>{" "}
                  <br />
                  <button className="mt-5 buy-but text-light">Buy Now</button>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4 starr">
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>

              <div className="col-md-4 select-o">
                <select>
                  <option>Salad</option>
                  <option>Plantain</option>
                  <option>Moi-Moi</option>
                  <option>Cole-Slaw</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
        
                <h3 className="col-md-12 text-light text-center mt-5 you"><b>You may also like</b></h3>
        
        <div className="intact ">
              <img src={image11} alt="spaghetti" className="rice-image mt-5" height={"330em"}  />
              <p className="text-center bold word">Spaghetti</p>
            </div>

            <div className="intact">
              <img
                src={caribean}
                alt="caribean"
                width={"100%"}
                className="mt-5"
                height={"330em"} 
              />
              <p className="text-center bold word mt-4">Carribean Rice</p>
            </div>
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default Order;

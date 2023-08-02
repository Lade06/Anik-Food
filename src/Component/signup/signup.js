import React from "react";
import "./signup.css"

import image from "../../Assets/Hide.png";
// import image1 from "../../Assets/ANIK.png";
// import image2 from "../../Assets/Right Arrow.jpg";
import imaget from "../../Assets/🦆 icon _google_.jpg";
import imageg from "../../Assets/🦆 icon _twitter original_.jpg";
import imagef from "../../Assets/🦆 icon _facebook_.jpg";
// import potatoe from "../../Assets/potatoe.jpg";
// import { Link } from "react-router-dom";
// import Navbar from "../navbar/navbar";
// import Footer from "../footer/footer";

const SignUp= () => {
  return (
    <div>
      <div className="">
        <div className="d-flex">
          <div className="col-md-5">
            <div className="bg-left">
              <div className="container">
                <div className="row">
                  <div className="col-md-12"></div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center mt-5">
                    <h1>ANIk</h1>
                    <big className="bold">Welcome, Create an account</big>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <form>
                      <p>
                        <input
                          type="email"
                          id="signup-email"
                          name="email"
                          placeholder="Email ID" required
                        />
                      </p>
                      <p>
                        <img src={image} alt=""  className="hide1 mt-2"/>
                        <input
                          type="password"
                          id="signup-password"
                          name="psw"
                          placeholder="Create Password" required
                        />
                      </p>
                      <p>
                        <img src={image} alt=""  className="hide1 mt-2"/>
                        <input
                          type="password"
                          id="sign-password"
                          name="psw"
                          placeholder="Confirm Password" required
                        />
                      </p>

                      <div className="d-flex column-gap-5">
                        <span className="check-box">
                          <input
                            className="mr-5"
                            type="checkbox"
                            id="agree"
                            name="checkbox"
                          />{" "}
                          I agree with the Terms of Services & Privacy Policies
                        </span>{" "}
                        
                      </div>

                      <br />
                      <button className="sign-up">Sign Up</button>
                     <div className="d-flex mt-4 gap-1">
                     <hr /> 
                      <p>Or sign up with</p>
                       <hr />
                     </div>
                     <div className="d-flex gap-5 text-center mt-4 mx-5">
                      <img src={imageg} alt="" />
                      <img src={imaget} alt="" />
                      <img src={imagef} alt="" />
                     </div>

                    
                     <p className="text-center mt-4"><b>Already have an account? <span>Sign In</span></b></p>




                    </form>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="bg-right-signup">
              
            </div>
         
          </div>
        </div>
      </div>
     


    </div>
  );
};

export default SignUp;

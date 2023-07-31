import React from "react";
import image from "../../Assets/Hide.png";

import image1 from "../../Assets/ANIK.png";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Login = () => {
  return (
    <div>
      <Navbar />

      <img src={image} alt="" />
      <img src={image1} alt="" />
      <h1>Hello Friends, Sign In</h1>

      <form action="/action_page.php">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      <Footer />
    </div>
  );
};

export default Login;

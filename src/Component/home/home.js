import React from "react";
import Navbar from "../navbar/navbar";
import Content from "../content/content";
import Footer from "../footer/footer";
import Login from "../login/login";
import SignUp from "../signup/signup";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
      <Login />
      <SignUp />
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "../navbar/navbar";
import Content from "../content/content";
import Footer from "../footer/footer";
import Login from "../login/login";
import SignUp from "../signup/signup";
import Menu from "../menu";
import Menu2 from "../menu2";
import Menu3 from "../menu3";
import Menu4 from "../menu4";
import Menu5 from "../menu5";
import Card from "../card/card";
import Card2 from "../card/card2";
import Card3 from "../card/card3";
import Card4 from "../card/card4";
import About from "../about/about";
import Contact from "../contact/contact";
import Order from "../order/order";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
      <Login />
      <SignUp />
      <Menu />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Card />
      <Card2 />
      <Card3 />
      <Card4 />
      <About />
      <Contact />
      <Order />
    </div>
  );
};

export default Home;

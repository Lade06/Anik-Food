import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar/navbar";
// import Content from "./Component/content/content";
import Home from "./Component/home/home";
import Footer from "./Component/footer/footer";
import Menu from "./Component/menu";
import Login from "./Component/login/login";
import About from "./Component/about/about";
import Contact from "./Component/contact/contact";
import Order from "./Component/order/order";
import SignUp from "./Component/signup/signup";
// import Content from './Component/content/content.js';
// import Footer from './Component/footer/footer';
// import Navbar from './Component/navbar/navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="navbar" element={<Navbar />} />
            {/* <Route path="content" element={<Content />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="menu" element={<Menu />} />
            <Route path="footer" element={<Footer />} />
            <Route path="about" element={<About />} />
            <Route path="order" element={<Order />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />


        
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Content />
      <Footer /> */}
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar/navbar";
import Content from "./Component/content/content";
import Home from "./Component/home/home";
import Footer from "./Component/footer/footer";
import Login from "./Component/login/login";
// import Content from './Component/content/content.js';
// import Footer from './Component/footer/footer';
// import Navbar from './Component/navbar/navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="navbar" element={<Navbar />} />
            <Route path="content" element={<Content />} />
            <Route path="login" element={<Login />} />
            <Route path="footer" element={<Footer />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Content />
      <Footer /> */}
    </div>
  );
}

export default App;

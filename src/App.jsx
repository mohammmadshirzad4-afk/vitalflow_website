import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Blog from "./pages/Blog";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

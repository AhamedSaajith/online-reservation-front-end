import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

import Login from "./components/login";
import Register from "./components/signup";
import Home from"./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Reviews from "./pages/reviews";
import Subscribe from "./pages/subscribe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/subscribe" element={<Subscribe/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react'
import AboutImg from "../../assets/images/about/res2.jpg";
import { Link } from "react-router-dom";
export default function AboutUs  ()  {
  return (
    <div className="container my-5">
    <div className="row">
      <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
        <img src={AboutImg} className="img-fluid w-50" alt="about img" />
      </div>
      <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
        <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
        <p>
          Welcome to Flavor Haven, where culinary excellence meets
          exceptional service in an inviting atmosphere. Nestled in the
          heart of Colombo.
        </p>
        <p className="mb-5">
          We take pride in offering a diverse menu that blends classic
          flavors with innovative twists, using only the freshest
          locally-sourced ingredients. Whether you're joining us for a
          casual lunch, a romantic dinner, or a special celebration, our
          warm and welcoming ambiance is the perfect backdrop for any
          occasion. From our signature dishes crafted by our experienced
          chefs to our carefully curated selection of fine wines and
          handcrafted cocktails, every detail is designed to offer you a
          memorable dining experience. At Flavor Haven, we believe that
          great food brings people together. Come indulge in our seasonal
          specialties, enjoy our exclusive membership perks, and let us
          make your meal truly unforgettable.
        </p>
        <Link to="/about" className="btn btn-success btn-lg mt-3">About Us</Link>
        
    
      </div>
    </div>
  </div>
  )
}

import React, { useState } from "react";
import Header from "../../components/header";
import "./style.css";
import HeaderImg from "../../assets/images/home/res6.jpg";
import ImageGallery from "../../components/imagegallery";
import ContactInfo from "../../components/contactnfo";
import ContactInfoImg from "../../assets/images/home/res1.jpg";
import AboutUs from "../../components/aboutus";
import ReservPopup from "../../components/popup/resrvPopup"; // Importing ReservPopup

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Header />
      <div className="Home-page">
        {/* Header Section with Background Image */}
        <header
          className="h-100 min-vh-100 d-flex align-items-center text-light shadow"
          style={{
            backgroundImage: `url(${HeaderImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                <h2 className="mb-0 text-light fw-bold">Welcome To</h2>
                <h1 className="mb-5 text-light fw-bold text-center text-sm-start">
                  Flavor Haven
                </h1>
                <button
                  className="btn btn-success btn-lg mt-3"
                  onClick={togglePopup} // Toggle popup when clicked
                >
                  Book Table
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Conditionally render ReservPopup */}
      {isPopupOpen && (
        <ReservPopup onClose={togglePopup} />
      )}

      <AboutUs />
      <ImageGallery />

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ContactInfoImg} className="img-fluid w-50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

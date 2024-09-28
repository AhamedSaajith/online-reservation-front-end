import React from "react";
import Header from "../../components/header";
import ContactInfo from "../../components/contactnfo"; // Fixed typo in contactnfo

import "./style.css";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">Contact</h1>
          </div>
        </header>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <ContactInfo />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

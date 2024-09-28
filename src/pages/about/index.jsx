import React from "react";
import Header from "../../components/header";
import ImageGallery from "../../components/imagegallery";
import "./style.css";
import ChefImg1 from "../../assets/images/about/res11.jpg";
import ChefImg2 from "../../assets/images/about/res12.jpg";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">About-Us</h1>
          </div>
        </header>

        <div className="container my-5">
          <p>
            Welcome to Flavor Haven, where culinary artistry meets impeccable
            service in a setting that invites you to relax and savor every
            moment. Nestled in the heart of Colombo, our restaurant is a haven
            for food lovers seeking an unforgettable dining experience. We take
            immense pride in curating a diverse and dynamic menu, thoughtfully
            designed to blend classic, time-honored flavors with modern,
            innovative twists, all while emphasizing the use of fresh,
            locally-sourced ingredients of the highest quality. Whether you're
            stopping by for a casual lunch with friends, celebrating a romantic
            dinner for two, or hosting a special gathering with loved ones, our
            elegantly cozy ambiance creates the perfect backdrop for any
            occasion. As you step through our doors, you'll be greeted by an
            inviting warmth, where each detail — from the ambient lighting to
            the carefully arranged décor — has been crafted to enhance your
            dining experience.
          </p>
          <p>
            We believe that great food has the power to bring people together,
            sparking conversations and creating memories that last a lifetime.
            As part of our commitment to offering an exceptional dining
            experience, we also provide exclusive membership perks to our loyal
            guests. These perks include access to special events, priority
            reservations, and exclusive discounts. Whether you're looking to
            indulge in a multi-course feast, sip on a perfectly crafted cocktail
            at the bar, or simply enjoy a relaxing meal in good company, Flavor
            Haven promises to make every visit truly unforgettable. Let us take
            you on a culinary journey, where flavors come to life and every bite
            tells a story.
          </p>

          <div className="row">
            <div className="col-lg-6">
              <img src={ChefImg1} className="img-fluid my-4" alt="Chef 1" />
            </div>
            <div className="col-lg-6">
              <img src={ChefImg2} className="img-fluid my-4" alt="Chef 2" />
            </div>
          </div>

          <p>
            At Flavor Haven, our chefs are the heart and soul of our kitchen,
            bringing a wealth of experience, passion, and creativity to every
            dish they craft. With diverse culinary backgrounds and a shared
            commitment to excellence, our talented team is dedicated to
            delivering a dining experience that is both innovative and deeply
            rooted in tradition. They carefully source the freshest ingredients,
            transforming them into beautifully presented dishes that delight
            both the palate and the senses. Whether perfecting timeless classics
            or experimenting with modern twists, our chefs approach each plate
            with artistry and precision, ensuring every meal at Flavor Haven is
            nothing short of extraordinary.
          </p>
        </div>

        <div className="bg-dark text-light">
          <ImageGallery />
        </div>
      </div>
    </>
  );
}

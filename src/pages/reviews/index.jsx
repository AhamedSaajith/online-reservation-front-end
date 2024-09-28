import React from "react";
import Header from "../../components/header";
import "./style.css";

export default function Reviews() {
  return (
    <>
      <Header />
      <div className="reviews-section container mt-5 pt-5">
        <h2 className="text-center mb-5 text-uppercase fw-bold fs-1 mt-2 pt-2">
          Reviews
        </h2>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-4">
            <div className="h-100 card shadow p-3">
              <div className="p-4">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  // src={Person1}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <div className="text-success">John Mike</div>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="col-lg-4">
            <div className="h-100 card shadow p-3">
              <div className="p-4">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  // src={Person2}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <div className="text-success">Maria Cruz</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4">
            <div className="h-100 card shadow p-3">
              <div className="p-4">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  // src={Person3}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <div className="text-success">Anna Gold</div>
              </div>
            </div>
          </div>

          {/* Add more cards as needed */}
        </div>
      </div>
    </>
  );
}

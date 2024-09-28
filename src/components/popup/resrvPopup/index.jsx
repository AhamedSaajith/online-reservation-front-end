import React, { useState } from "react";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Popup Heading</h2>
        <p className="text-center">
          This is a test paragraph inside the popup for testing purposes.
        </p>

        {/* Email Input Field */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        {/* Close Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-red-500 text-white mt-4 px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ResrvPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Popup is open by default

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {isPopupOpen && <Popup onClose={togglePopup} />}
    </div>
  );
}

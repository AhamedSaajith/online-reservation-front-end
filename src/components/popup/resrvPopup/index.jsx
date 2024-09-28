import React, { useState } from "react";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Popup Heading</h2>
        <p>This is a test paragraph inside the popup for testing purposes.</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white mt-4 px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function ResrvPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Show Popup
      </button>

      {isPopupOpen && <Popup onClose={togglePopup} />}
    </div>
  );
}

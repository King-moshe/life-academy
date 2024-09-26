import React, { useState } from "react";
import logoImg from "../design/images/image 5.jpg";
import profileImg from "../design/images/Ellipse 1.jpg";
import hoIcon from "../design/images/Group 189 (1).png";
import acadicon from "../design/images/Academyicon.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState();
  const [activeTab, setActiveTab] = useState("home"); // Track the selected tab

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50 w-full bg-[#FFFFFF] h-[56px] flex justify-center sticky top-0">
      <div className="h-[40px] w-[70%] flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center w-1/3">
          <img src={logoImg} alt="Logo" />
          <h2 className="font-bold">UniMastery</h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex h-[52px] max-w-[494px] w-1/3">
          <ul className="flex cursor-pointer">
            <li
              className={`flex items-center mr-5 cursor-pointer ${
                activeTab === "home" ? "text-black border-b-4 border-blue-500" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("home")}
            >
              <img src={hoIcon} alt="icon" className="mr-2" />
              Home
            </li>
            <li
              className={`flex items-center cursor-pointer ${
                activeTab === "academies" ? "text-black border-b-4 border-blue-500" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("academies")}
            >
              <img src={acadicon} alt="icon" className="mr-2" />
              My Academies
            </li>
          </ul>
        </div>

        {/* Profile Image */}
        <div className="hidden md:flex w-1/3 justify-end">
          <img src={profileImg} alt="Profile" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleModal} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal for smaller screens */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-[250px] bg-white shadow-lg z-50">
          <div className="p-4 relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <img src={profileImg} alt="Profile" className="rounded-full h-16 w-16" />
            </div>
            {/* Links */}
            <ul className="space-y-4 text-center">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">My Academies</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

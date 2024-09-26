import React from "react";
import logoImg from "../design/images/image 5.jpg";
import profileImg from "../design/images/Ellipse 1.jpg";
import hoIcon from "../design/images/Group 189 (1).png";
import acadicon from "../design/images/Academyicon.png";

export default function Header() {
  return (
    <div className="z-50 w-full bg-[#FFFFFF] h-[56px] flex justify-center sticky top-0">
      <div className="h-[40px] w-[70%] flex justify-between">
        <div className="flex items-center w-1/3">
          <img src={logoImg} alt="Logo" />
          <h2 className="font-bold">UniMastery</h2>
        </div>
        <div className="h-[52px] max-w-[494px] w-1/3">
          <ul className="flex cursor-pointer">
            <li className="flex items-center mr-5 cursor-pointer">
              <img src={hoIcon} alt="icon" />
              Home
            </li>
            <li className="flex items-center">
              <img src={acadicon} alt="icon" />
              My Academies
            </li>
          </ul>
        </div>
        <div className="w-1/3 justify-end flex">
          <img src={profileImg} alt="Profile"/>
        </div>
      </div>
    </div>
  );
}

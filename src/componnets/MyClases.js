import React from "react";
import arrowI from '../design/images/arrow.png'
import ClassCard from "./ClassCard";
export default function MyClases() {
  return (
    <div className="w-full mt-8 flex justify-center overflow-x-auto min-h-[400px]">
      <div className="w-[70%]">
        <div className="w-full mb-6 flex justify-between items-center">
          <h2 className="font-bold text-2xl">My Clases</h2>
          <img src={arrowI} alt="Arrow"/>
        </div>
        <ClassCard/>
      </div>
    </div>
  );
}

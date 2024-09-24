import React from "react";
import "../design/css/card.css";
import bookI from "../design/images/bookI.png";
import studentI from "../design/images/studyI.png";

export default function ClassCard({
    imageUrl,
    title,
    studentCount,
    classCount,
  }) {
  return (
    <div className="w-[330px] h-[365px] border rounded-[20px] shadow-md">
      <div class="banner">
        <div class="lc"></div>
        <figure>
          <img
            src={imageUrl}
            alt={title}
          />
        </figure>
        <div class="rc"></div>       
      </div>
      <div className="pt-12">
          <h3 className="font-bold text-lg mb-2 text-center">{title}</h3>
          <div className="flex gap-24 justify-center pt-14">
            <div className="text-center items-center">
              <img src={studentI} alt="Student-icon" className="mx-auto" />
              <span className="font-semibold">{studentCount}</span>
              <p className="text-sm text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <img src={bookI} alt="Book-icon" className="mx-auto" />
              <span className="font-semibold">{classCount}</span>
              <p className="text-sm text-gray-600">Clases</p>
            </div>
          </div>
        </div>
    </div>
  );
}

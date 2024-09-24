import React from "react";
import bookI from "../design/images/bookI.png";
import studentI from "../design/images/studyI.png";

export default function AcademyCard({
  imageUrl,
  title,
  studentCount,
  classCount,
}) {
  return (
    <div className="w-[320px] h-[340px] rounded-lg shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[150px] object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-center">{title}</h3>
        <div className="flex gap-20 my-16 justify-center">
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

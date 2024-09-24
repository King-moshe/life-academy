import React from "react";
import AcademyCard from "./AcademyCard";
import sportImg from '../design/images/Rectangle 12.png';
import flowerImg from '../design/images/flowers.png';
import yogaImg from '../design/images/yoga.png';



const academiesData = [
  {
    imageUrl: sportImg,
    title: "Sports Academy",
    studentCount: 1125,
    classCount: 14,
  },
  {
    imageUrl: flowerImg,
    title: "Flowers Academy Rome",
    studentCount: 1125,
    classCount: 14,
  },
  {
    imageUrl: yogaImg,
    title: "Yoga Academy",
    studentCount: 1125,
    classCount: 14,
  },
];

export default function MyAcademies() {
  return (
    <div className="w-full mt-8 flex justify-center">
      <div className="w-[70%]">
        <div className="w-full mb-6 flex justify-between items-center">
          <h2 className="font-bold text-2xl">My Academies</h2>
          <div className="flex">
            <button className="rounded-2xl border bg-gradient-to-tr from-[#C3F6B6] via-[#50A7F4] to-[#5664C4] mr-3 text-white px-4 py-2 font-semibold">
              Have an Academy Code?
            </button>
            <button className="rounded-2xl bg-[#D9D9D9] px-4 py-2">
              See All
            </button>
          </div>
        </div>
        <div className="flex justify-start gap-6">
          {academiesData.map((academy, index) => (
            <AcademyCard key={index} {...academy} />
          ))}
        </div>
      </div>
    </div>
  );
}
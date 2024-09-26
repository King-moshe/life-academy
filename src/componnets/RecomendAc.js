import React from 'react'
import AcademyCard from "./AcademyCard";
import sportImg from "../design/images/spoeL.png";
import flowerImg from "../design/images/Ellipse 5.png";


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
  ];


export default function RecomendAc() {
    return (
        <div className="w-full mt-8 flex justify-center overflow-x-auto min-h-[400px]">
          <div className="md:w-[70%] w-[90%]">
            <div className="w-full mb-6 flex justify-between items-center">
              <h2 className="font-bold text-2xl">Recommended Academies</h2>
            </div>
            <div className="relative justify-start flex overflow-x-auto gap-6 py-2">
              {academiesData.map((academy, index) => (
                <AcademyCard key={index} {...academy} />
              ))}
            </div>
          </div>
        </div>
      );
}

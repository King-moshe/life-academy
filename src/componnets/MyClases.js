import React from "react";
import "../design/css/cardOp2.css";
import CardOpt2 from "./CardOpt2";
import womenProf from "../design/images/image 8.png";
import racePro from "../design/images/spoeL.png";

const academiesData = [
  {
    imageUrl: womenProf,
    title: "Class Title",
    text: "Class Description Class Description",
  },
  {
    imageUrl: womenProf,
    title: "דוגמא לכותרת בעברית מיושרת לימין",
    text: "דוגמא לתיאור של כיתה בעברית מיושר לימין",
  },
  {
    imageUrl: racePro,
    title: "Class Title",
    text: "Class Description Class Description",
  },
  {
    imageUrl: racePro,
    title: "Class Title",
    text: "Class Description Class Description",
  },
];

export default function MyClases() {
  return (
    <div className="w-full mt-8 flex justify-center overflow-x-auto min-h-[400px]">
      <div className="w-[70%]">
        <div className="w-full mb-6 flex justify-between items-center">
          <h2 className="font-bold text-2xl">My Clases</h2>
        </div>
        <div className="relative justify-start flex overflow-x-auto gap-6 py-2">
          {academiesData.map((academy, index) => (
            <CardOpt2 key={index} {...academy} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function CardOpt2({ imageUrl, title, text }) {
  //   function to recognaise the lengvight
  const isHebrew = (text) => {
    const hebrewPattern = /[\u0590-\u05FF]/; //  range of Hebrew letter
    return hebrewPattern.test(text);
  };

  return (
    <div className="w-[330px] h-[365px] border rounded-[20px] shadow-md">
      <div className="banner-2">
        <div className="lc-2"></div>
        <figure>
          <img src={imageUrl} alt="logo" />
        </figure>
        <div className="rc-2"></div>
      </div>
      <div className="pt-12">
        {/* Text start left or right side - Hebrew or English */}
        <h3
          className={` text-lg mb-2 ${
            isHebrew(title) ? "text-right" : "text-left"
          }`}
        >
          {title}
        </h3>
        <div className="">
          <p
            className={` ${isHebrew(title) ? "text-right" : "text-left"}`}
          >
            {text}
          </p>
          <p
            className={` ${isHebrew(title) ? "text-right" : "text-left"}`}
          >
            {text}
          </p>
          <p
            className={` ${isHebrew(title) ? "text-right" : "text-left"}`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

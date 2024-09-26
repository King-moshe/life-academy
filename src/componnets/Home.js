import React from "react";
import Banner from "./Banner";
import MyAcademies from "./MyAcademies";
import RecomendAc from "./RecomendAc";
import MyClases from "./MyClases";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Banner />
      <MyAcademies />
      <MyClases />
      <RecomendAc />
    </div>
  );
}

import React from "react";

const HeroSection = ({ title, subheading, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center h-400 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, height: "400px" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative text-center">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <p className="text-2xl text-white mt-4">{subheading}</p>
      </div>
    </div>
  );
};

export default HeroSection;

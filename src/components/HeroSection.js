import React from "react";

const HeroSection = ({ title, subheading, backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
        <p className="text-2xl text-white mt-4">{subheading}</p>
      </div>
    </div>
  );
};

export default HeroSection;

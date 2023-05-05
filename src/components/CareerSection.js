import React from "react";
import Link from "next/link";
import AddLinkButton from "./AddLinkButton";

const CareerSection = ({ heading, subheading, careers }) => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-4">{heading}</h2>
      <p className="text-center mb-8">{subheading}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {careers.map((career) => (
          <div key={career.name} className="bg-white p-4 rounded shadow">
            <div>
              <h3 className="text-2xl font-bold mb-4">{career.name}</h3>
              <p>{career.description}</p>
            </div>

            <AddLinkButton href={`/edit/${encodeURIComponent(career.name)}`}>
              Edit Career
            </AddLinkButton>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;

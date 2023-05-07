
import React from "react";
import MetaHead from "../../components/MetaHead";
import landingData from "../../app/data/landingData.json";

const MobileDevelopment = ({ careerData, meta }) => (
  <>
    <MetaHead title={meta.title} description={meta.description} />
    <main className="bg-gray-100 min-h-screen">
      <section className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{careerData.name}</h1>
        <p className="text-lg">{careerData.description}</p>
      </section>
    </main>
  </>
);

export default MobileDevelopment;

export async function getStaticProps() {
  const careerData = landingData.career.careers.find(
    (career) => career.name === "MobileDevelopment"
  );

  const meta = {
    title: `CareerCheck - ${careerData.name}`,
    description: careerData.description,
  };

  return {
    props: {
      careerData,
      meta,
    },
  };
}

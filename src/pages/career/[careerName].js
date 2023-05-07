import React from "react";
import MetaHead from "../../components/MetaHead";
import landingData from "../../app/data/landingData.json";
import QuestionnaireSections from "../../components/QuestionnaireSections";

const CareerPage = ({ careerData, meta }) => {
  const handlePersonalInfoSubmit = (answers) => {
    console.log("Personal info answers:", answers);
  };

  return (
    <>
      <MetaHead
        title={meta.title}
        description={meta.description}
        favicon={meta.favicon}
      />
      <main className="bg-gray-100 min-h-screen">
        <section className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">{careerData.name}</h1>
          <p className="text-lg">{careerData.description}</p>
          <QuestionnaireSections onNext={handlePersonalInfoSubmit} />
        </section>
      </main>
    </>
  );
};

export default CareerPage;

export async function getStaticProps(context) {
  const careers = landingData.career.careers;
  const careerName = context.params.careerName;
  const careerData = careers.find(
    (career) => career.name.toLowerCase().replace(/ /g, "-") === careerName
  );

  const meta = {
    title: `CareerCheck - ${careerData.name}`,
    description: careerData.description,
    favicon: landingData.meta.favicon,
  };

  return {
    props: {
      careerData,
      meta,
    },
  };
}

export async function getStaticPaths() {
  const careers = landingData.career.careers;
  const paths = careers.map((career) => ({
    params: { careerName: career.name.toLowerCase().replace(/ /g, "-") },
  }));

  return {
    paths,
    fallback: false,
  };
}

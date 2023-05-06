import Head from "next/head";
import HeroSection from "../components/HeroSection";
import CareerSection from "../components/CareerSection";
import AuthorSection from "../components/AuthorSection";
import FooterSection from "../components/FooterSection";
import MetaHead from "../components/MetaHead";
import landingData from "../app/data/landingData.json";

export default function Home({ landingData }) {
  const { meta, hero, career, author, footer } = landingData;

  return (
    <div className="bg-gray-100 min-h-screen">
      <MetaHead {...meta} />
      <main>
        <HeroSection {...hero} />
        <CareerSection {...career} />
        <AuthorSection {...author} />
      </main>

      <FooterSection {...footer} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      landingData,
    },
  };
}

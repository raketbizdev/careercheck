import React from "react";
import AddLinkButton from "./AddLinkButton";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DeveloperModeOutlinedIcon from "@mui/icons-material/DeveloperModeOutlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PieChartSharpIcon from "@mui/icons-material/PieChartSharp";

const iconTable = {
  Schema: <SchemaOutlinedIcon />,
  Gavel: <GavelOutlinedIcon />,
  Code: <CodeOutlinedIcon />,
  "Developer Mode": <DeveloperModeOutlinedIcon />,
  "Mobile Friendly": <MobileFriendlyOutlinedIcon />,
  Share: <ShareOutlinedIcon />,
  Campaign: <CampaignOutlinedIcon />,
  "Pie Chart": <PieChartSharpIcon />,
};

const CareerSection = ({ heading, subheading, careers }) => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center mb-4">{heading}</h2>
      <p className="text-center mb-8">{subheading}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {careers.map((career) => (
          <div
            key={career.name}
            className="bg-white p-4 rounded shadow flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-600 mb-4">
              {iconTable[career.icon]}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">
              {career.name}
            </h3>
            <p className="text-center">{career.description}</p>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Evaluate Career
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;

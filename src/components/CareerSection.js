import React from "react";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DeveloperModeOutlinedIcon from "@mui/icons-material/DeveloperModeOutlined";
import MobileFriendlyOutlinedIcon from "@mui/icons-material/MobileFriendlyOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PieChartSharpIcon from "@mui/icons-material/PieChartSharp";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import AddLinkButton from "./AddLinkButton";

const iconTable = {
  "Data Science": <SchemaOutlinedIcon />,
  "Project Management": <GavelOutlinedIcon />,
  "Backend Development": <CodeOutlinedIcon />,
  "Frontend Development": <DeveloperModeOutlinedIcon />,
  "Mobile Development": <MobileFriendlyOutlinedIcon />,
  "Social Media Manager": <ShareOutlinedIcon />,
  "Digital Marketer": <CampaignOutlinedIcon />,
  "Business Analyst": <PieChartSharpIcon />,
  Cybersecurity: <SecurityOutlinedIcon />,
  "DevOps Engineer": <SettingsOutlinedIcon />,
  "Data Analyst": <InsertChartOutlinedIcon />,
  "IT Support Specialist": <DesktopWindowsOutlinedIcon />,
  "Bug Report": <PestControlOutlinedIcon />,
};

const CareerSection = ({ heading, subheading, careers }) => {
  return (
    <section className="container mx-auto p-4">
      <div className="my-8">
        <h2 className="text-4xl font-bold text-center mb-4 mb-4">{heading}</h2>
        <p className="text-center">{subheading}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {careers.map((career) => (
          <div
            key={career.name}
            className="bg-white p-4 rounded shadow flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 text-gray-600 mb-4">
              {iconTable[career.name]}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">
              {career.name}
            </h3>
            <p className="text-center">{career.description}</p>
            <div className="mt-4">
              <AddLinkButton
                href={`/career/${career.name.toLowerCase().replace(/ /g, "-")}`}
              >
                Evaluate Career
              </AddLinkButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;

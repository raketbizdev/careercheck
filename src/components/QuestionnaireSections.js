import React from "react";
import "../styles/tabs.css";
// import other necessary styles
import PersonalInfo from "./questionnaire/PersonalInfo";
import Education from "./questionnaire/Education";
import Training from "./questionnaire/Training";
import WorkExperience from "./questionnaire/WorkExperience.js";
import PersonalCircumstances from "./questionnaire/PersonalCircumstances";

const QuestionnaireSections = () => {
  const [activeTab, setActiveTab] = React.useState("Personal Info");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Personal Info":
        return <PersonalInfo />;
      case "Education":
        return <Education />;
      case "Training":
        return <Training />;
      case "Work Experience":
        return <WorkExperience />;
      case "Personal Circumstances":
        return <PersonalCircumstances />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <main>
      <section>
        <div className="container mx-auto">
          <div className="flex space-x-4">
            {[
              "Personal Info",
              "Education",
              "Training",
              "Work Experience",
              "Personal Circumstances",
            ].map((tabName) => (
              <button
                key={tabName}
                className={`px-4 py-2 text-sm font-medium rounded ${
                  activeTab === tabName
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-blue-200"
                }`}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </button>
            ))}
          </div>
          {renderTabContent()}
        </div>
      </section>
    </main>
  );
};

export default QuestionnaireSections;

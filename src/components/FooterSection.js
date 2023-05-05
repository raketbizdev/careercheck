import React from "react";

const FooterSection = ({ copyright }) => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto p-4 text-center text-white">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default FooterSection;

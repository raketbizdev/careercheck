import React from "react";
import Link from "next/link";

const AddLinkButton = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {children}
      </button>
    </Link>
  );
};

export default AddLinkButton;

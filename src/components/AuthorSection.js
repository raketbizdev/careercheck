import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
const AuthorSection = ({ heading, name, image, description, social }) => {
  return (
    <section className="bg-gray-100 py-8">
      <h2 className="text-4xl font-bold text-center mb-4">{heading}</h2>
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            className="mx-auto md:mx-0"
            src={image}
            alt={name}
            width={250}
            height={250}
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">{name}</h2>
          <p className="mb-4">{description}</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook fontSize="large" />
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="large" />
            </a>
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <GitHub fontSize="large" />
            </a>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram fontSize="large" />
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <YouTube fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;

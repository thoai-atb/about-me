import React from "react";
import BasePathImage from "./BasePathImage";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  flip?: boolean; // Optional prop to flip layout
  onImageClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  flip = false,
  onImageClick = null,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-6 items-center bg-white px-16 py-6 rounded-lg shadow-lg mb-6 h-80 ${
        flip ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left side: Title and Description */}
      <div className="flex-1 md:text-left ml-10">
        <h2
          className={`text-2xl font-bold mb-2 text-gray-800 ${
            flip ? "text-right" : "text-left"
          }`}
        >
          {title}
        </h2>
        <p className={`text-gray-600 ${flip ? "text-right" : "text-left"}`}>
          {description}
        </p>
      </div>

      {/* Right side: Image */}
      <div
        onClick={() => onImageClick?.()}
        className={`mt-4 md:mt-0 md:ml-6 h-full ${flip ? "text-right  " : ""}`}
      >
        <BasePathImage
          src={imageSrc}
          alt={imageAlt}
          width={20}
          height={20}
          className={`rounded-lg cursor-pointer shadow-md h-full w-auto border mx-auto md:max-w-none`}
        />
      </div>
    </div>
  );
};

export default ProjectCard;

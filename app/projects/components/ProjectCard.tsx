import React from "react";
import BasePathImage from "../../components/BasePathImage";
import { ProjectItem } from "../projectItem";

interface ProjectCardProps {
  project: ProjectItem;
  flip?: boolean; // Optional prop to flip layout
  onImageClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  flip = false,
  onImageClick = null,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-start gap-6 px-16 py-6 rounded-lg mb-6 animate-in fade-in-0 duration-500 ${
        flip
          ? "md:flex-row-reverse slide-in-from-right-10"
          : "slide-in-from-left-10"
      }`}
    >
      {/* Left side: Title and Description */}
      <div className={`w-1/2 bg-primary-100 p-6 md:text-left flex flex-col`}>
        <h2
          className={`text-2xl font-bold mb-2 text-primary-800`}
        >
          {project.title}
        </h2>
        <p className={`text-gray-600 max-w-xl mb-4 `}>
          {project.description}
        </p>
        <ul className={`custom-star-list`}>
          {project.highlights.map((point, i) => (
            <li key={i} className="list-inside">
              {point}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex-1 relative">sdf</div> */}
      {/* Right side: Image */}
      <div
        onClick={() => onImageClick?.()}
        className={`w-1/2 mt-4 bg-primary-200 md:mt-0 ${flip ? "" : ""}`}
      >
        <BasePathImage
          src={project.imageSrc}
          alt={project.imageAlt}
          className={`rounded-lg shadow-xl cursor-pointer w-full h-auto border mx-auto md:max-w-none`}
        />
      </div>
    </div>
  );
};

export default ProjectCard;

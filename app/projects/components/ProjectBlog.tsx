import React, { forwardRef } from "react";
import { ProjectItem } from "../projectItem";
import BasePathImage from "@/app/components/BasePathImage";
import TechnologyIcon, { Technology } from "./TechnologyIcon";
import StarRating from "./StarRating";

interface ProjectBlogProps {
  project: ProjectItem;
  onImageClick?: () => void;
}

const ProjectBlog = forwardRef<HTMLDivElement | null, ProjectBlogProps>(
  ({ project, onImageClick }, ref) => {
    return (
      <div
        ref={ref}
        className="rounded-lg text-base mb-12 animate-in fade-in-0 duration-1000"
      >
        <hr className="border-2 border-secondary-500 mb-12 mx-12"></hr>
        <div className=" bg-secondary-100 p-4 rounded mb-4">
          <div className="flex justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-secondary-900 items-center">
              {project.title}
            </h2>
            <div className="hidden md:flex gap-2">
              {project.labels.map((label, index) => (
                <div
                  className="bg-secondary-400 text-white px-4 py-2 rounded-lg italic duration-500 hover:bg-secondary-500"
                  key={index}
                  title={`This project has the label "${label}"`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-900 text-sm md:text-md font-thin mb-2 md:-translate-y-2">
            {project.timeline}
          </p>
          <p className="text-gray-700 mb-4">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className="list-disc list-inside mb-4">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="text-gray-600 md:hover:text-secondary-600 md:hover:translate-x-1 transition-transform duration-300"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-4 flex flex-wrap items-center">
              <strong className="hidden md:block text-secondary-900 mr-2">
                Technologies:
              </strong>{" "}
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="text-secondary-600 md:hover:text-secondary-300 cursor-default duration-300 flex items-center justify-center px-1 gap-1"
                >
                  <TechnologyIcon tech={tech as Technology} />
                  <span className="">{tech}</span>
                  <span className="text-black">
                    {index < project.technologies.length - 1 && ","}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between">
            <p className="mb-4">
              <strong className="text-secondary-900">Effort: </strong>
              {project.effort}
            </p>
            <div>
              {project.rating > 0 && (
                <div className="flex items-center">
                  <strong className="hidden md:block text-secondary-900 mr-2">
                    How much I like this:
                  </strong>
                  <StarRating rating={project.rating} />
                  <div className="mx-2">({project.rating.toFixed(1)})</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <BasePathImage
            src={project.imageSrc}
            alt={project.imageAlt}
            className={`h-full w-full rounded-lg shadow-md transition-transform duration-300 ${
              onImageClick ? "cursor-pointer" : ""
            }`}
            onClick={onImageClick || undefined}
          />
        </div>
        <div className="text-center text-black italic mt-4">
          {project.imageAlt}
        </div>
      </div>
    );
  }
);

ProjectBlog.displayName = "ProjectBlog";

export default ProjectBlog;

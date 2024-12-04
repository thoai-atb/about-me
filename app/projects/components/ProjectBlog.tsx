import React, { forwardRef } from "react";
import { ProjectItem } from "../projectItem";
import BasePathImage from "@/app/components/BasePathImage";

interface ProjectBlogProps {
  project: ProjectItem;
  onImageClick?: () => void;
}

const ProjectBlog = forwardRef<HTMLDivElement | null, ProjectBlogProps>(
  ({ project, onImageClick }, ref) => {
    return (
      <div
        ref={ref}
        className="rounded-lg text-lg mb-12 animate-in fade-in-0 duration-1000"
      >
        <hr className="border-2 border-secondary-500 mb-12 mx-12"></hr>
        <div className=" bg-secondary-100 p-4 rounded mb-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold text-secondary-900 items-center">
              {project.title}
            </h2>
            <div className="flex gap-2">
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
          <p className="text-gray-900 text-md font-thin mb-2 -translate-y-2">
            {project.timeline}
          </p>
          <p className="text-gray-700 mb-4">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className="list-disc list-inside mb-4">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="text-gray-600 hover:text-secondary-600 hover:translate-x-1 transition-transform duration-300"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <p className="text-secondary-600 mb-4">
              <strong className="text-secondary-900">Technologies:</strong>{" "}
              {project.technologies.join(", ")}
            </p>
          )}
          <div className="flex justify-between">
            <p className="mb-4">
              <strong className="text-secondary-900">Effort: </strong>
              {project.effort}
            </p>
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

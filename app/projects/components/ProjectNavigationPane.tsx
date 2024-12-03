import React from "react";
import { ProjectItem } from "../projectItem";

interface ProjectNavigationPaneProps {
  projects: ProjectItem[];
  activeIndex: number | null; // Allow for no active section initially
  onProjectClick: (project: ProjectItem) => void;
}

const ProjectNavigationPane: React.FC<ProjectNavigationPaneProps> = ({
  projects,
  activeIndex,
  onProjectClick,
}) => {
  return (
    <div className="sticky hidden lg:block left-4 top-4 w-96 p-4 h-5/6 bg-secondary-100 overflow-x-hidden transition-all animate-in slide-in-from-left-5 duration-500 overflow-y-auto scroll-hidden">
      <h2 className="text-2xl font-thin text-secondary-900 mb-2 uppercase">
        Project List
      </h2>
      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            className={`relative p-4 ml-4 h-14 text-lg flex items-center gap-4 rounded-lg cursor-pointer transition-all duration-100 ${
              activeIndex === index
                ? "text-secondary-600 font-bold"
                : "text-secondary-900"
            }`}
            onClick={() => onProjectClick(project)}
          >
            {index === 0 && (
              <div className="absolute bottom-0 left-0 h-1/2 border-2 w-0 border-secondary-900"></div>
            )}
            {index === projects.length - 1 && (
              <div className="absolute top-0 left-0 h-1/2 border-2 w-0 border-secondary-900"></div>
            )}
            {index > 0 && index < projects.length - 1 && (
              <div className="absolute top-0 left-0 h-full border-2 w-0 border-secondary-900"></div>
            )}
            {activeIndex === index ? (
              <div className="h-6 overflow-visible">
                <div className="absolute flex items-center justify-center z-20 bg-secondary-100 -translate-x-1/2 left-0.5 w-6 h-6 border-4 border-secondary-900 rounded-full">
                  <div className="bg-secondary-900 w-2 h-2 rounded-full"></div>
                </div>
              </div>
            ) : (
              <div className="h-4 overflow-visible">
                <div className="absolute z-10 bg-secondary-100 -translate-x-1/2 left-0.5 w-4 h-4 border-4 border-secondary-900 rounded-full"></div>
              </div>
            )}
            <h3 className="">{project.title}</h3>
            {/* <p className="text-sm">
              {project.technologies.join(", ")}
            </p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectNavigationPane;

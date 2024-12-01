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
    <div className="fixed top-8 left-8 w-64 bg-primary-100 p-4 h-5/6 overflow-y-auto">
      <h2 className="text-xl font-semibold text-primary-600 mb-4">Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            className={`p-3 mb-2 rounded-lg shadow cursor-pointer transition duration-300 ${
              activeIndex === index
                ? "bg-primary-400 text-white"
                : "bg-primary-50 hover:bg-primary-100 text-primary-700"
            }`}
            onClick={() => onProjectClick(project)}
          >
            <h3 className="text-base">{project.title}</h3>
            <p className="text-sm">
              {project.technologies.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectNavigationPane;

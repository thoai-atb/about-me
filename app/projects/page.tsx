"use client";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import PageContainer from "../components/PageContainer";
import ImageModal from "../components/ImageModal";
import { useState } from "react";

const projects = [
  {
    title: "Maze Escaper",
    description:
      "This is a brief description of the project, highlighting its purpose and key features.",
    imageSrc: "/maze_escaper.png",
    imageAlt: "Representative image of the project",
  },
  {
    title: "Texas Holdem",
    description:
      "This is a brief description of the project, highlighting its purpose and key features.",
    imageSrc: "/texas_holdem.png",
    imageAlt: "Representative image of the project",
  },
  {
    title: "Student Learning Progress System",
    description:
      "This is a brief description of the project, highlighting its purpose and key features.",
    imageSrc: "/student_learning_progress.png",
    imageAlt: "Representative image of the project",
  },
  {
    title: "Rubik's Cube OLL Distribution",
    description:
      "This is a brief description of the project, highlighting its purpose and key features.",
    imageSrc: "/oll_distribution.png",
    imageAlt: "Representative image of the project",
  },
];

export default function Projects() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  console.log(imageSrc);

  const handleModalClose = () => {
    setImageSrc(null); // Close the modal by setting the image source to null
  };

  return (
    <div className="min-h-screen bg-primary-100 font-sans">
      <Navigation />
      <PageContainer>
        <h1 className="text-2xl uppercase text-primary-900 font-bold text-center mb-8">
          My Projects
        </h1>
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              flip={index % 2 === 0}
              onImageClick={() => setImageSrc(project.imageSrc)}
            />
          ))}
        </div>
      </PageContainer>

      {imageSrc && (
        <ImageModal
          imageSrc={imageSrc}
          onClose={() => handleModalClose()} // Pass close handler to modal
        />
      )}
    </div>
  );
}

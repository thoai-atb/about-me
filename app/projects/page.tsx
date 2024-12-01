"use client";
import Navigation from "../components/Navigation";
import ImageModal from "../components/ImageModal";
import { useRef, useState, useEffect } from "react";
import { ProjectItem } from "./projectItem";
import projectData from "./projectData";
import ProjectBlog from "./components/ProjectBlog";
import ProjectNavigationPane from "./components/ProjectNavigationPane";

export default function Projects() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active section
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleModalClose = () => {
    setImageSrc(null); // Close the modal by setting the image source to null
  };

  const scrollToProject = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]!.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          setActiveIndex(index); // Update the active index
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <div>
        <div className="flex justify-center">
          <div className="bg-primary-400 rounded-full mx-20 text-primary-900 text-4xl font-thin text-center px-20 py-4">
            <span>This page contains projects that I did</span>
          </div>
        </div>

        <ProjectNavigationPane
          projects={projectData}
          activeIndex={activeIndex} // Pass active index
          onProjectClick={(project) => {
            const index = projectData.findIndex(
              (p) => p.title === project.title
            );
            scrollToProject(index);
          }}
        />

        <div className="max-w-screen-lg mx-auto p-6 md:p-12">
          {projectData.map((project: ProjectItem, index) => (
            <ProjectBlog
              key={project.title}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              project={project}
              onImageClick={() => setImageSrc(project.imageSrc)}
            />
          ))}
        </div>

        {imageSrc && (
          <ImageModal
            imageSrc={imageSrc}
            onClose={() => handleModalClose()} // Pass close handler to modal
          />
        )}
      </div>
    </div>
  );
}

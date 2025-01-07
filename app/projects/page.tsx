"use client";
import Navigation from "../components/Navigation";
import ImageModal from "./components/ImageModal";
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
      <div className="flex justify-center">
        <div className="bg-secondary-400 w-full rounded-full mx-8 mb-8 text-secondary-900 text-4xl font-thin text-center px-20 py-4 slide-in-from-right-10 duration-1000 animate-in">
          <span>Welcome to my </span>
          <span className="text-white">Personal Projects</span>
        </div>
      </div>
      <div>
        <div className="flex items-start gap-8 2xl:gap-16">
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

          <div className="mx-auto xl:mx-0 max-w-screen-md 2xl:max-w-screen-lg">
            {/* sort project data by timestamp */}
            {projectData
              .sort((a, b) => b.rating - a.rating)
              .map((project: ProjectItem, index) => (
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

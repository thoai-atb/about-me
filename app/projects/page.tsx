import React from 'react';
import Navigation from '../components/Navigation';
import ProjectCard from '../components/ProjectCard';
import PageContainer from '../components/PageContainer';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation Bar */}
      <Navigation />

      {/* Projects Section */}
      <PageContainer>

        <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

        {/* Example Project */}
        <ProjectCard
          title="Maze Escaper"
          description="This is a brief description of the project, highlighting its purpose and key features."
          imageSrc="/maze_escaper.png" // Replace with your image path
          imageAlt="Representative image of the project"
          flip={true}
        />
        <ProjectCard
          title="Awesome Project"
          description="This is a brief description of the project, highlighting its purpose and key features."
          imageSrc="/maze_escaper.png" // Replace with your image path
          imageAlt="Representative image of the project"
          flip={false}
        />
        <ProjectCard
          title="Awesome Project"
          description="This is a brief description of the project, highlighting its purpose and key features."
          imageSrc="/maze_escaper.png" // Replace with your image path
          imageAlt="Representative image of the project"
          flip={true}
        />
        <ProjectCard
          title="Awesome Project"
          description="This is a brief description of the project, highlighting its purpose and key features."
          imageSrc="/maze_escaper.png" // Replace with your image path
          imageAlt="Representative image of the project"
          flip={false}
        />

        {/* Add more <ProjectCard /> components for additional projects */}
      </PageContainer>
    </div>
  );
}

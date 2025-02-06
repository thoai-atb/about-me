import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Portfolio Website",
  description:
    "This is my personal portfolio website to show case my skills and projects that I did. Most probably, you're scrolling on it right now.",
  rating: 4.0,
  labels: ["website"],
  highlights: [
    "The 1st Profile page with my skills and experience like a CV",
    "The 2nd Projects page with all my projects with representative pictures",
    "The 3rd Others page just to symmectrically complete the navigation bar",
  ],
  timeline: "November - December 2024",
  timestamp: new Date("2024-11-01").getTime(),
  effort: "~1 Month",
  technologies: [Technology.NextJS, Technology.React, Technology.TailwindCSS],
  imageSrc: "/portfolio_website.png",
  imageAlt:
    "The Portfolio Website on home page showing my skills and experience",
};

export default projectItem;

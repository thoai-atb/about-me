import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Portfolio Website",
  description:
    'Well, it is this site that you are reading, this is my personal portfolio website to show case all projects that I did',
  labels: ["website"],
  highlights: [
    "The 1st Profile page with my skills and experience",
    "The 2nd Project page with all my projects with representative pictures",
    "The 3rd Page to be decided",
  ],
  timeline: "November - December 2024",
  effort: "~1 Month",
  technologies: ["NextJS", "TailwindCSS"],
  imageSrc: "/portfolio_website.png",
  imageAlt:
    'The Portfolio Website on a \"Projects\" page showing the first project is the Portfolio Website itself',
};

export default projectItem;

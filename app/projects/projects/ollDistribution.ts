import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Rubik's Cube OLL Distribution",
  description:
    "Calculate how likely we see an OLL case when solving a Rubik's cube using CFOP method.",
  labels: ["simulation"],
  highlights: [
    "Simulate all 57 OLL cases by random turnings",
    "Output image and probability of each case, group by orientations",
  ],
  effort: "< 1 day",
  timeline: "July 2022",
  technologies: ["Python"],
  imageSrc: "/oll_distribution.png",
  imageAlt:
    "The collection of OLL cases with their corresponding likelihood in percentage (%)",
};

export default projectItem;

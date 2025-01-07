import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Rubik's Cube OLL Distribution",
  description:
    'I can solve a Rubiks cube less than 20 seconds, but one thing I still wonder is that, "How often will the case with checker board pattern appear?". So I made this program to calculate how likely we see OLL cases when solving a Rubik\'s cube using the CFOP method.',
  rating: 2.5,
  labels: ["simulation"],
  highlights: [
    "Simulate all 57 OLL cases by random turnings",
    "Output image and probability of each case, group by orientations",
  ],
  effort: "< 1 day",
  timeline: "July 2022",
  timestamp: new Date("2022-07-01").getTime(),
  technologies: [Technology.Python],
  imageSrc: "/oll_distribution.png",
  imageAlt:
    "The collection of OLL cases with their corresponding likelihood in percentage (%)",
};

export default projectItem;

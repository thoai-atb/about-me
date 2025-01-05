import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Railway Management System",
  description:
    "This is the project from my university, I collaborated with my 2 other friends, it is used to manage the railway system, including the schedule and ticket booking. I did the front-end, map, trains, stations, schedules generation, implement route finding algorithm. My friends did the back-end, database, music, and admin page.",
  labels: ["website", "university project"],
  highlights: [
    "A page for users to search for the trains’ schedules, stations with a live map",
    "A page for users to find train routes between two stations, and book them",
    "A database to store the train schedule and passenger information",
    "An admin page for passenger management or related database management",
  ],
  timeline: "October - December 2021",
  timestamp: new Date("2021-12-01").getTime(),
  effort: "~3 Months",
  technologies: [
    Technology.PHP,
    Technology.MySQL,
    Technology.HTML,
    Technology.CSS,
  ],
  imageSrc: "/railway.png",
  imageAlt:
    "Screenshot of Railway Management System GUI where user are searching for the train schedule with the live map on the right",
};

export default projectItem;

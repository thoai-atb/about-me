import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Student Progress System",
  description:
    "This is my university thesis, it is an event-driven architecture applying the \"Mediator\" design pattern aims to manage student learning progress (in stages) in universities, including multiple microservices and website for management",
  rating: 3.5,
  labels: ["system", "university"],
  highlights: [
    "User interface for managing student progresses",
    "User interface for managing microservices",
    "A design for error handling mechanism",
  ],
  timeline: "January - July 2022",
  timestamp: new Date("2022-07-01").getTime(),
  effort: "> 2 months",
  technologies: [Technology.Kafka, Technology.Java, Technology.NodeJS, Technology.React],
  imageSrc: "/student_learning_progress.png",
  imageAlt:
    "A diagram that shows how all the Student System microservices working together with Kafka queues",
};

export default projectItem;

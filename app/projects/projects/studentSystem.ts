import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Student Progress System",
  description:
    "This is my university thesis, it is an event-driven architecture applying the \"Mediator\" design pattern aims to manage student learning progress (in stages) in universities, including multiple microservices and website for management",
  labels: ["system", "university project"],
  highlights: [
    "User interface for managing student progresses",
    "User interface for managing microservices",
    "A design for error handling mechanism",
  ],
  timeline: "January - July 2022",
  effort: "> 2 months",
  technologies: ["Kafka", "Java", "NodeJS", "ReactJS"],
  imageSrc: "/student_learning_progress.png",
  imageAlt:
    "A diagram that shows how all the Student System microservices working together with Kafka queues",
};

export default projectItem;

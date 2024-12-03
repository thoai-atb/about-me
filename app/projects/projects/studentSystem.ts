import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Student Progress System",
  description:
    "An event-driven architecture to manage student learning progress in universities.",
  highlights: [
    "User interface for managing services",
    "Error handling mechanism",
  ],
  effort: "> 2 months",
  technologies: ["Kafka", "Java", "NodeJS", "ReactJS"],
  imageSrc: "/student_learning_progress.png",
  imageAlt: "A diagram that shows how all the Student System microservices working together with Kafka queues",
};

export default projectItem;

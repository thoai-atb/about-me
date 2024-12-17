import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Command Runner (Slave)",
  description:
    "This is the command runner, I call it \"Slave\" as it will generate and run the commands to do the task that I request it to do. This is my first project that uses generative AI.",
  labels: ["tool", "AI"],
  highlights: [
    "Generate and run commands on Linux machine",
    "Ask users for clarification before generating and executing command",
    "Can read command output and suggest alternative solution if the command failed",
  ],
  timeline: "November 2024",
  effort: "< 1 day",
  technologies: ["OpenAI", "NodeJS"],
  imageSrc: "/command_runner.png",
  imageAlt:
    "Screenshot of \"Slave\", generating and executing command to clean docker volume on multiple remote hosts",
};

export default projectItem;

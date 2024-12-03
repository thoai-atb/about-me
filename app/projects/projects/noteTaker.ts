import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "AI Note Taker",
  description:
    "An AI assistant named \"Note Taker\" that takes notes as you chat, that information later can be asked and retrieved to help developers in a team to look up quickly.",
  highlights: [
    "Multiple users with shared database",
    "AI assisstant can manage notes (create, delete, rename, etc) as you chat in real time",
    "Support multiple features including querying for links, commands, tickets, internal knowledge",
    "It can be considered as a local \"Stack Overflow\" in the team",
  ],
  effort: "1 Month",
  technologies: ["OpenAI API", "MongoDB", "NodeJS", "SocketIO", "ReactJS"],
  imageSrc: "/note_taker.png",
  imageAlt: "A question about \"Quan\" posed to the AI Note Taker and its response",
};

export default projectItem;

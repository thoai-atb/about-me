import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "AI Note Taker",
  description:
    'Do you want to have an assistance that knows about you, the links you usually access, the commands you usually run, and the solutions to specific known problems that happens once in a while? Behold, this Note Taker is what I made, using OpenAI API, it will take notes as you chat that later can be retrieved as you ask.',
  labels: ["AI", "tool"],
  highlights: [
    "Multiple users with shared database",
    "AI assisstant can manage notes (create, delete, rename, etc) as you chat in real time",
    "Support multiple features including querying for links, commands, tickets, internal knowledge",
    'It can be considered as a local "Stack Overflow" in the team',
  ],
  timeline: "November 2024",
  effort: "~1 Month",
  technologies: ["OpenAI API", "MongoDB", "NodeJS", "SocketIO", "ReactJS"],
  imageSrc: "/note_taker.png",
  imageAlt:
    'A question about "Quan" posed to the AI Note Taker and its response',
};

export default projectItem;

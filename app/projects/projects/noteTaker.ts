import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "AI Note Taker",
  description:
    'Do you want to have a chat bot that knows about you, the internal links, internal commands you usually run? This is Note Taker, I made it using OpenAI API, it can take notes as you chat that later can be retrieved as you ask.',
  labels: ["AI", "tool"],
  highlights: [
    "Multiple users with shared database",
    "AI instance can manage notes (create, delete, rename, etc) as you chat in real time",
    "It can take notes about links, commands, tickets, internal knowledge",
    'It can also be considered as a local "Stack Overflow" in the team, as it can note down common errors and solutions',
  ],
  timeline: "November 2024",
  timestamp: new Date("2024-11-01").getTime(),
  effort: "~1 Month",
  technologies: [Technology.OpenAI, Technology.NodeJS, Technology.SocketIO, Technology.React, Technology.MongoDB],
  imageSrc: "/note_taker.png",
  imageAlt:
    'Questions about retrospective link, internal command posed to the AI Note Taker and its response',
};

export default projectItem;

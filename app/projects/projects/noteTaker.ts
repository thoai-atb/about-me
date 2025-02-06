import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "AI Note Taker",
  description:
    "This is a chat bot that knows about you, the links, commands, file paths you use, just like a developer's assistant. I made it using OpenAI API, it takes notes as you chat and later you can ask it back.",
  rating: 4.0,
  labels: ["AI", "tool"],
  highlights: [
    "Multiple users with shared database",
    "It writes notes about links, commands, tickets, knowledge, things that humans don't have to remember",
    "It can create, delete, rename notes, etc, as you chat in real time",
    "Basically it can do whatever ChatGPT can do plus the note taking feature",
  ],
  timeline: "November 2024",
  timestamp: new Date("2024-11-01").getTime(),
  effort: "~1 Month",
  technologies: [
    Technology.OpenAI,
    Technology.NodeJS,
    Technology.SocketIO,
    Technology.React,
    Technology.MongoDB,
  ],
  imageSrc: "/note_taker.png",
  imageAlt:
    "Questions about retrospective link, internal command posed to the AI Note Taker and its response",
};

export default projectItem;

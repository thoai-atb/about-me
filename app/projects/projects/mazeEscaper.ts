import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Maze Escaper",
  description:
    "You have to escape the maze with ghosts, collect the key, pass through portals and escape.",
  labels: ["game"],
  highlights: [
    "Random maze generation that is different everytime",
    "Players can only see part of the maze from where they are standing",
    "Two types of ghosts, normal and crazy-fast ghost",
    "Sound effects when players die (screaming, crying) and others",
    "Players can trap ghosts, revive other dead players",
    "Support map viewer standing place to x-ray the entire map walls",
    "Support object viewer standing place to x-ray ghosts and exit key",
    "Support portals that players and ghosts can teleport to different location",
  ],
  timeline: "January 2019",
  effort: "~2 weeks",
  technologies: ["P5JS", "JavaScript"],
  imageSrc: "/maze_escaper.png",
  imageAlt: "Screenshot of 4 players, after killing all ghosts, trying to escape the maze",
};

export default projectItem;

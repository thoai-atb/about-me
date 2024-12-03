import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Maze Escaper",
  description:
    "You have to escape the maze with ghosts, collect the key, pass through portals and escape.",
  highlights: [
    "Random maze generation that is different everytime",
    "Two types of ghosts, normal and fast ghost",
    "Sound effects when players die (screaming, crying) and others",
    "Support map viewer to view the entire map walls",
    "Support item viewer to view ghosts and exit key",
    "Support portals that players and ghosts can teleport to different location",
  ],
  effort: "2 weeks",
  technologies: ["P5JS", "JavaScript"],
  imageSrc: "/maze_escaper.png",
  imageAlt: "Screenshot of 4 players, after killing all ghosts, trying to escape the maze",
};

export default projectItem;

import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Multiplayer Poker",
  description: "A Multiplayer Poker game - Texas holdem",
  highlights: [
    "Support in-game chat",
    "Support bots that can chat and use advance Poker strategies (check-raise/bluff)",
    "Dark mode + 3 additional themes (Christmas, Halloween, Tet)",
    "Include how-to-play tutorial, UI aid for hand ranking probablity based on current cards",
  ],
  effort: "1 Month",
  technologies: ["NodeJS", "SocketIO", "ReactJS"],
  imageSrc: "/texas_holdem.png",
  imageAlt: "Representative image of the project",
};

export default projectItem;

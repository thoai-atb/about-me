import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Multiplayer Poker",
  description: "\"Wanna play some game tonight?\" my friend said. \"How about Poker?\" I replied, \"Sounds good, let's use your poker web app!\". One day, I decided to code the Poker game, and I did. Now my friends and I can play together over the network.",
  rating: 5.0,
  labels: ["game"],
  highlights: [
    "Support in-game chat",
    "Support bots that can also chat and use \"advance\" Poker strategies (check-raise/bluff)",
    "Dark mode + 3 additional themes (Christmas, Halloween, Tet)",
    "Include how-to-play tutorial, UI aid for hand ranking probablity based on current cards",
    "Sound effects when player wins like applause, when fold, bet and check, etc",
    "When a player is out of cash, they need to \"work\" by clicking on a red button",
    "Support CLI for client side that don't use GUI",
  ],
  timeline: "February 2022",
  timestamp: new Date("2022-02-01").getTime(),
  effort: "> 2 Months",
  technologies: [Technology.NodeJS, Technology.SocketIO, Technology.React, Technology.TailwindCSS],
  imageSrc: "/texas_holdem.png",
  imageAlt: "Screenshot during the game, 1 player and 8 bots, current turn belongs to the player and player is selecting the bet size",
};

export default projectItem;

"use client";
import React from "react";
import Navigation from "../components/Navigation";
import ItemCard from "./components/ItemCard";
import { Item } from "./components/ItemCard";

const items: Item[] = [
  {
    title: "Coding",
    description: "Creating software solutions and building cool projects.",
    highlights: ["Develop Web Applications, Games, Tools", "Problem-solving", "Learning new technologies"],
    imageSrc: "/hobby_code.jpg",
    imageAlt: "Coding hobby",
  },
  {
    title: "Rubik's Cube",
    description: "Solving puzzles and learn cube theory.",
    highlights: ["Speed-cubing", "3x3 4x4 5x5 2x2 Megaminx", "Cube theory (conjugates & commutators)"],
    imageSrc: "/hobby_cube.jpg",
    imageAlt: "Rubik's Cube hobby",
  },
  {
    title: "Piano",
    description: "Expressing creativity and emotions through music.",
    highlights: ["Classical music", "Improvisation", "Music theory (chords, scales)"],
    imageSrc: "/hobby_piano.jpg",
    imageAlt: "Piano hobby",
  },
  {
    title: "Ping Pong",
    description: "Afterwork exercise and bonding with team",
    highlights: ["Friendly matches", "Ping pong spin theory", "Bun cha sa doa"],
    imageSrc: "/hobby_pingpong.jpg",
    imageAlt: "Ping Pong hobby",
  },
];

export default function Others() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <div className="flex justify-center">
        <div className="bg-tertiary-400 rounded-full mx-8 mb-8 text-tertiary-900 text-4xl font-thin text-center px-20 py-4 slide-in-from-right-10 duration-1000 animate-in">
          <span>These are my </span>
          <span className="text-white">Hobbies</span>
        </div>
      </div>
      <div className="bg-white">
        <div className="px-16 max-w-screen-lg mx-auto bg-white border-tertiary-500">
          {items.map((item, index) => (
            <div key={index}>
              <ItemCard
                item={item}
                flip={index % 2 === 1} // Alternate layout for visual interest
                onImageClick={() => console.log(`Clicked on ${item.title}`)}
              />
              <hr className="border-tertiary-100 border-2"></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

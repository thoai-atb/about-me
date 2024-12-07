"use client";
import React from "react";
import Navigation from "../components/Navigation";
import ItemCard from "./components/ItemCard";
import { Item } from "./components/ItemCard";

const items: Item[] = [
  {
    title: "Coding",
    description: "Creating software solutions and building cool projects.",
    highlights: ["Web development", "Problem-solving", "Learning new technologies"],
    imageSrc: "/hobby_code.jpg",
    imageAlt: "Coding hobby",
  },
  {
    title: "Rubik's Cube",
    description: "Solving puzzles and improving problem-solving skills.",
    highlights: ["Speedcubing", "Learning algorithms", "Competitive solving"],
    imageSrc: "/hobby_cube.jpg",
    imageAlt: "Rubik's Cube hobby",
  },
  {
    title: "Piano",
    description: "Expressing creativity and emotions through music.",
    highlights: ["Classical music", "Improvisation", "Performance skills"],
    imageSrc: "/hobby_piano.jpg",
    imageAlt: "Piano hobby",
  },
  {
    title: "Ping Pong",
    description: "Staying active and competing in table tennis.",
    highlights: ["Improving reflexes", "Learning advanced techniques", "Friendly matches"],
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

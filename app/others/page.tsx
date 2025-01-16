"use client";
import React from "react";
import Navigation from "../components/Navigation";
import ItemCard from "./components/ItemCard";
import { Item } from "./components/ItemCard";

const items: Item[] = [
  {
    title: "Coding",
    description: "I must code more, I must make more stuff",
    highlights: ["I usually create web app, games and tools", "I learn new technologies as I build projects"],
    imageSrc: "/hobby/code.jpg",
    imageAlt: "Coding hobby",
  },
  {
    title: "Piano",
    description: "Yes, I also play piano, I'm a fan of Chopin",
    highlights: ["Waltz in C# minor, Minute Waltz, Nocturne Op 9 No 2", "I'm practicing to improvise in 12 scales in the piano"],
    imageSrc: "/hobby/piano.jpg",
    imageAlt: "Piano hobby",
  },
  {
    title: "Ping Pong",
    description: "You can play ping pong with me sometime!",
    highlights: ["I can do top spin and chopping, let's play!", "I play with my colleages after work"],
    imageSrc: "/hobby/pingpong.jpg",
    imageAlt: "Ping Pong hobby",
  },
  {
    title: "Guitar",
    description: "I also play guitar, both chords and solo",
    highlights: ["I'm a fan of Francisso Tarrega, very Spanish and classical", "I no longer practicing guitar though, it's my past hobby"],
    imageSrc: "/hobby/guitar.jpg",
    imageAlt: "Guitar hobby",
  },
  {
    title: "Reading",
    description: "I like reading books, mostly psychology books",
    highlights: ["I read psychology topics around communication, money and thinking", "I like to download and read ebook (PDFs)"],
    imageSrc: "/hobby/books.jpg",
    imageAlt: "Reading hobby",
  },
  {
    title: "Cubing",
    description: "I learned how to solve a Rubik's cube when I studied in high school, it's fun",
    highlights: ["I can do 3x3, 4x4, 5x5, 2x2, Megaminx", "They're also a decorative objects on my desk"],
    imageSrc: "/hobby/cube.jpg",
    imageAlt: "Rubik's Cube hobby",
  },
  {
    title: "L____ ________",
    description: "This activity is a secret, I can't tell you what it is until we meet",
    highlights: ["???", "???"],
    imageSrc: "/hobby/halfmoon.jpg",
    imageAlt: "Half moon",
  },
  {
    title: "____c",
    description: "I’ll keep this activity a mystery, you'll find out soon.",
    highlights: ["???", "???"],
    imageSrc: "/hobby/hand.jpg",
    imageAlt: "Hand",
  },
  {
    title: "______ge",
    description: "I can’t tell you what this activity is just yet, but you’ll know soon.",
    highlights: ["???", "???"],
    imageSrc: "/hobby/balls.jpg",
    imageAlt: "Rubik's Cube hobby",
  },
];

export default function Others() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <div className="flex justify-center">
        <div className="bg-tertiary-400 w-full md:w-auto md:rounded-full md:mx-8 mb-8 text-tertiary-900 text-4xl font-thin text-center px-4 md:px-20 py-4 slide-in-from-right-10 duration-1000 animate-in">
          <span>Other </span>
          <span className="text-white">things</span>
          <span> that I do</span>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-lg mx-auto bg-white border-tertiary-500">
          {items.map((item, index) => (
            <div key={index}>
              <ItemCard
                item={item}
                flip={index % 2 === 1} // Alternate layout for visual interest
                onImageClick={() => console.log(`Clicked on ${item.title}`)}
              />
              <hr className="hidden md:block border-tertiary-100 border-2"></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

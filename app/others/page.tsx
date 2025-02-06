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
    description: "Yes, I also play piano, a fan of Chopin",
    highlights: ["Waltz in C# minor, Minute Waltz, Nocturne Op 9 No 2", "Twinkle twinkle little star, Mary had a little lamb"],
    imageSrc: "/hobby/piano.jpg",
    imageAlt: "Piano hobby",
  },
  {
    title: "Ping Pong",
    description: "You can play ping pong with me sometime!",
    highlights: ["Ping pong, ping pong, ping pong", "I can play when I'm tired of coding"],
    imageSrc: "/hobby/pingpong.jpg",
    imageAlt: "Ping Pong hobby",
  },
  // {
  //   title: "Guitar",
  //   description: "I also play guitar, a fan of Tarrega",
  //   highlights: ["Because he's very Spanish and classical", "I no longer practicing guitar though, it's my past hobby"],
  //   imageSrc: "/hobby/guitar.jpg",
  //   imageAlt: "Guitar hobby",
  // },
  {
    title: "Reading",
    description: "I like reading books, mostly psychology",
    highlights: ["I read psychology topics, money and thinking", "I don't read novels, maybe I should start"],
    imageSrc: "/hobby/books.jpg",
    imageAlt: "Reading hobby",
  },
  // {
  //   title: "Cubing",
  //   description: "I learned how to solve a Rubik's cube when I studied in high school, it's fun",
  //   highlights: ["I can do like 2x2 - 5x5, Megaminx", "They're also a decorative objects on my desk"],
  //   imageSrc: "/hobby/cube.jpg",
  //   imageAlt: "Rubik's Cube hobby",
  // },
  {
    title: "_____ ________",
    description: "This activity is a secret, I can't tell you what it is until we meet",
    highlights: ["Is is related to the moon? I don't know.", "Is it related to the night? I don't know."],
    imageSrc: "/hobby/halfmoon.jpg",
    imageAlt: "Half moon",
  },
  // {
  //   title: "_____",
  //   description: "I’ll keep this activity a mystery, you'll find out soon.",
  //   highlights: ["???", "???"],
  //   imageSrc: "/hobby/hand.jpg",
  //   imageAlt: "Hand",
  // },
  {
    title: "________",
    description: "I can’t tell you what this is just yet, but you’ll know soon.",
    highlights: ["\"But it looks like some nerdy science thing\", you say", "\"Or maybe it's just some random stuff to fill the space\", he says"],
    imageSrc: "/hobby/lightcones.png",
    imageAlt: "Light cones",
  },
];

export default function Others() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <div className="flex justify-center">
        <div className="bg-tertiary-400 w-full md:w-auto md:rounded-full md:mx-8 mb-8 text-tertiary-900 text-3xl font-thin text-center px-4 md:px-20 py-4 slide-in-from-right-10 duration-1000 animate-in">
          <span>Other </span>
          <span className="text-white">things</span>
          <span> that I do</span>
        </div>
      </div>
      <div className="bg-white">
        <div className="lg:max-w-screen-md xl:max-w-screen-lg mx-auto bg-white border-tertiary-500">
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

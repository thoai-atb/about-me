import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "JavaScript Compiler",
  description: "This is a Python program to compile and execute a raw JavaScript file, using Abstract Syntax Tree (ATS)",
  labels: ["simulation", "university project"],
  highlights: [
    "Extracts tokens or \"keywords\" from the provided JavaScript file",
    "Builds an abstract syntax tree from the list of tokens",
    "Keeps a symbol table in memory to store the variables",
    "Provides a detail log of tokens, AST, symbol table and step-by-step code execution process",
  ],
  timeline: "April - July 2021",
  effort: "> 2 Months",
  technologies: ["Python"],
  imageSrc: "/javascript_compiler.png",
  imageAlt: "Demo example of a JavaScript factorial function being parsed, with detail log of tokens, syntax tree, and execution",
};

export default projectItem;

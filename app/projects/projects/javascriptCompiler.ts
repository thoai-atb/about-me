import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "JavaScript Compiler",
  description: "This is a Python program to compile and execute a raw JavaScript file, using Abstract Syntax Tree (ATS)",
  rating: 3.5,
  labels: ["simulation", "university"],
  highlights: [
    "Extracts tokens or \"keywords\" from the provided JavaScript file",
    "Builds an abstract syntax tree from the list of tokens",
    "Keeps a symbol table in memory to store the variables",
    "Provides a detail log of tokens, AST, symbol table and step-by-step code execution process",
  ],
  timeline: "April - July 2021",
  timestamp: new Date("2021-07-01").getTime(),
  effort: "> 2 Months",
  technologies: [Technology.Python],
  imageSrc: "/javascript_compiler.png",
  imageAlt: "Demo example of a JavaScript factorial function being parsed, with detail log of tokens, syntax tree, and execution",
};

export default projectItem;

import { Technology } from "../components/TechnologyIcon";
import { ProjectItem } from "../projectItem";

const projectItem: ProjectItem = {
  title: "Uni Course Arrangement App",
  description: "Back when I study in university, it was a real challenge to find a way to fit all the courses I need for the coming semester. So I made this, Scheduler, a Java GUI application that helps students find a good combination of classes to register.",
  rating: 4.0,
  labels: ["tool"],
  highlights: [
    "Classes can be created with day and time, categorized by subjects",
    "A list of possible timetables is shown after clicking \"Arrange\" and any of them can be saved",
    "A \"Required\" check box will force/unforce a subject to be included when arranging",
    "An SQL tab to perform SQL queries from SQLite database for debug/troubleshoot purpose"
  ],
  timeline: "April - July 2021",
  timestamp: new Date("2021-07-01").getTime(),
  effort: "~ 1 Month",
  technologies: [Technology.Java, Technology.Swing, Technology.SQLite],
  imageSrc: "/scheduler.png",
  imageAlt: "Screenshot of the Scheduler, above shows the main GUI for managing subjects, classes, time tables, and below shows the generated timetables",
};

export default projectItem;

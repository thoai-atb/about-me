import React from "react";
import BasePathImage from "@/app/components/BasePathImage"; // Assuming BasePathImage is already declared

// Enum for Technology Names
export enum Technology {
  NodeJS = "NodeJS",
  NextJS = "NextJS",
  React = "ReactJS",
  Express = "Express",
  TailwindCSS = "TailwindCSS",
  MongoDB = "MongoDB",
  Python = "Python",
  Java = "Java",
  Swing = "Java Swing",
  JavaScript = "JavaScript",
  SQLite = "SQLite",
  Kafka = "Kafka",
  P5JS = "P5JS",
  SocketIO = "Socket.IO",
  OpenAI = "OpenAI API",
  PHP = "PHP",
  MySQL = "MySQL",
  HTML = "HTML",
  CSS = "CSS",
}

// TechnologyIcon Component
interface TechnologyIconProps {
  tech: Technology;
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ tech }) => {
  // Mapping Technology Enum to Icon Paths
  const technologyIcons: { [key in Technology]: string } = {
    [Technology.NodeJS]: "/icons/nodejs.svg",
    [Technology.NextJS]: "/icons/nextjs.svg",
    [Technology.React]: "/icons/react.svg",
    [Technology.Express]: "/icons/express.svg",
    [Technology.TailwindCSS]: "/icons/tailwindcss.svg",
    [Technology.MongoDB]: "/icons/mongodb.svg",
    [Technology.Python]: "/icons/python.svg",
    [Technology.Java]: "/icons/java.svg",
    [Technology.Swing]: "/icons/java.svg",
    [Technology.JavaScript]: "/icons/javascript.svg",
    [Technology.SQLite]: "/icons/sqlite.png",
    [Technology.Kafka]: "/icons/kafka.svg",
    [Technology.P5JS]: "/icons/p5js.png",
    [Technology.SocketIO]: "/icons/socketio.png",
    [Technology.OpenAI]: "/icons/chatgpt.svg",
    [Technology.PHP]: "/icons/php.png",
    [Technology.MySQL]: "/icons/mysql.svg",
    [Technology.HTML]: "/icons/html.svg",
    [Technology.CSS]: "/icons/css.svg",
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "0.9rem",
      }}
    >
      <BasePathImage
        src={technologyIcons[tech]}
        alt={tech}
        width={40}
        height={40}
        // calasssname with size
        className={`inline-block w-6 h-6`}
      />
    </div>
  );
};

export default TechnologyIcon;

import React from "react";
import TechnologyIcon, { Technology } from "./TechnologyIcon";

const TechnologyIconsDisplay: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <TechnologyIcon tech={Technology.NodeJS} />
      <TechnologyIcon tech={Technology.NextJS} />
      <TechnologyIcon tech={Technology.React} />
      <TechnologyIcon tech={Technology.MongoDB} />
      {/* Add more TechnologyIcon components as needed */}
    </div>
  );
};

export default TechnologyIconsDisplay;

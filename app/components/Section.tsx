import React from "react";

interface SectionProps {
  title: string;
  bgColor?: string; // Background color, default is white
  textColor?: string; // Text color, default is gray-700
  animClass?: string; // Delay for animation start
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  bgColor = "bg-white",
  textColor = "text-gray-700",
  animClass = "",
  children,
}) => {
  return (
    <section className={`p-12 ${bgColor} text-center animate-in fade-in-0 duration-1000 ${animClass}`}>
      <h2 className={`text-2xl font-bold uppercase text-green-600`}>{title}</h2>
      <div className={`mt-6 text-2xl ${textColor} leading-relaxed`}>{children}</div>
    </section>
  );
};

export default Section;

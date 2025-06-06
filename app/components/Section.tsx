import React from "react";

interface SectionProps {
  title: string;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  className = "bg-white",
  contentClassName = "text-gray-700",
  children,
}) => {
  return (
    <section className={`px-4 md:px-12 py-12 ${className} text-center animate-in fade-in-0 duration-1000`}>
      <h2 className={`text-xl font-bold uppercase text-primary-600`}>{title}</h2>
      <div className={`mt-6 text-base ${contentClassName} leading-relaxed`}>{children}</div>
    </section>
  );
};

export default Section;

import SkillCell from "./SkillCell";

const SkillsSection = () => {
  return (
    <div className="max-w-screen-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <SkillCell
          title="Development Languages"
          skills={[
            "JavaScript",
            "Python",
            "Java",
            "HTML, CSS",
            "JSON, YAML",
            "TTCN-3",
          ]}
        />
        <SkillCell
          title="Frameworks & Technologies"
          skills={[
            "ReactJS, NextJS",
            "NodeJS, ExpressJS",
            "OpenAI API",
            "Flask",
            "HTML, Tailwind CSS",
          ]}
        />
        <SkillCell
          title="Database"
          skills={["MongoDB", "MySQL", "SQL Server", "PostgreSQL"]}
        />
        <SkillCell
          title="Tools and IDEs"
          skills={[
            "VSCode",
            "Vim",
            "Wireshark",
            "MobaXTerm",
            "Visual Studio",
            "Eclipse",
          ]}
        />
        <SkillCell
          title="DevOps Skills"
          skills={[
            "Linux",
            "Docker",
            "Kubernetes, Helm",
            "Jenkins",
            "Python",
            "Git",
            "Bash",
          ]}
        />
        <SkillCell
          title="Knowledge"
          skills={[
            "Scrum Agile, OOP",
            "Restful API, Socket API",
            "Containerization",
            "Generative AI",
            "Computer network",
            "Microservices",
          ]}
        />
        <SkillCell
          title="Soft Skills"
          className="col-span-2"
          skills={[
            "Use English everyday (IELTS 6.5)",
            "Independent researching and troubleshooting",
            "Clear communication and engaging presentation",
            "Problem solving through deep understanding",
            "Find new ways to enhance work efficiency of self and team",
          ]}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
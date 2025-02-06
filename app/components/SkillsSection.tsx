import SkillCell from "./SkillCell";

const SkillsSection = () => {
  return (
    <div className="max-w-screen-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <SkillCell
          title="Languages"
          skills={[
            "Python",
            "JavaScript",
            "Java",
            "HTML, CSS",
            "JSON, YAML",
            "TTCN-3",
          ]}
        />
        <SkillCell
          title="Technologies"
          skills={[
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "Socket IO",
            "Flask",
            "OpenAI API",
            "Tailwind",
          ]}
        />
        <SkillCell
          title="Database"
          skills={["MongoDB", "MySQL", "PostgreSQL"]}
        />
        <SkillCell
          title="Tools and IDEs"
          skills={[
            "VSCode",
            "Vim",
            "Visual Studio",
            "Eclipse",
            "Wireshark",
            "MobaXTerm",
            "Postman",
          ]}
        />
        <SkillCell
          title="DevOps Skills"
          skills={[
            "Linux",
            "Docker",
            "Kubernetes, Helm",
            "Jenkins",
            "Git",
            "Bash",
            "Nginx",
          ]}
        />
        <SkillCell
          title="Knowledge"
          skills={[
            "Scrum Agile, OOP",
            "Rest API, Socket API",
            "Containerization",
            "Generative AI",
            "Computer network",
            "Microservices",
          ]}
        />
        <SkillCell
          title="Soft Skills"
          className="md:col-span-2"
          skills={[
            "Use English daily (IELTS 6.5)",
            "Fast research and troubleshoot",
            "Communicate clear and teamwork",
            "Problem solving, planning",
            "Optimize way of working and productivity",
          ]}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
import Navigation from "./components/Navigation";
import BasePathImage from "./components/BasePathImage";
import Section from "./components/Section";
import SkillCell from "./components/SkillCell";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <div className="flex bg-white pb-12 flex-col lg:flex-row">
        <div className="flex-1 relative flex flex-col md:flex-row items-center p-12 bg-primary-400 shadow-lg rounded-r-lg lg:rounded-r-full slide-in-from-left-10 duration-1000 animate-in">
          <BasePathImage
            className="rounded-full w-48 h-48 border-4 border-primary-600 shadow-xl"
            src={`/thoai.png`}
            alt="Thoai"
            priority
          />
          <div className="text-center text-primary-900 text-4xl mt-6 md:mt-0 md:ml-8 leading-snug font-thin">
            Hi, I am <span className="text-white">Ly Bao Thoai</span>. <br />
            Software & DevOps Engineer
          </div>
        </div>
        {/* Introduction Section */}
        <Section
          title="About Myself"
          className="bg-white flex-1 duration-1000"
          contentClassName="text-xl"
        >
          I am a passionate Software and DevOps Engineer with{" "}
          <strong>
            2+ years experience in design, develop, and deploy software
          </strong>
          ,<i> proficient</i> in multiple programming languages such as{" "}
          <strong>Python, JavaScript, Java</strong> covering different domains
          like <strong>Front-End, Back-End, and DevOps</strong>. I can{" "}
          <i>quickly learn new technologies </i> through working on multiple
          personal projects from time to time.
        </Section>
      </div>

      {/* Skills Section */}
      <Section
        title="Skills"
        className="flex-1 bg-primary-100 py-8"
        contentClassName="flex justify-center"
      >
        <div className="max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <SkillCell
              title="Programming Languages"
              skills={["JavaScript", "Python", "Java", "TTCN-3", "C#"]}
            />
            <SkillCell
              title="Web Frameworks"
              skills={["ReactJS, NextJS", "NodeJS", "ExpressJS", "Flask", "HTML, CSS, Tailwind"]}
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
                "Kubernetes",
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
                "HTTP, TLS",
                "Containerization",
                "Design patterns",
                "Computer network",
                "Microservices",
                "CI/CD",
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
      </Section>

      {/* Work Experience Section */}
      <Section
        title="Work Experience"
        className="flex-1 bg-white duration-5000"
      >
        <p>
          <strong>Software Engineer</strong> at XYZ Company (2022 - Present)
        </p>
        <p>
          Developed and maintained scalable web applications using ReactJS and
          modern frameworks.
        </p>
      </Section>

      {/* Projects Section */}
      <Section title="Projects" className="flex-1 bg-primary-100 duration-5000">
        <p>
          <strong>Portfolio Website</strong>: A responsive portfolio showcasing
          my work using Next.js and TailwindCSS.
        </p>
        <p>
          <strong>E-commerce App</strong>: Built a feature-rich online store
          with React and Firebase.
        </p>
      </Section>
      {/* Education Section */}
      <Section title="Education" className="flex-1 bg-white duration-5000">
        Bachelor of Science in Computer Science, ABC University (2018 - 2022)
      </Section>
    </div>
  );
}

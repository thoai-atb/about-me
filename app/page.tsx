import Navigation from "./components/Navigation";
import BasePathImage from "./components/BasePathImage";
import Section from "./components/Section";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";

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
          title="About Me"
          className="bg-white flex-1 duration-1000"
          contentClassName="text-xl"
        >
          I am a passionate Software and DevOps Engineer with{" "}
          <strong>
            2+ years experience in design, develop, and deploy software
          </strong>
          ,<i> proficient</i> in multiple programming languages such as{" "}
          <strong>Python, JavaScript, Java</strong> covering different domains
          like <strong>Front-End, Back-End, and DevOps</strong>. I {" "}
          <i>learn new technologies </i> through working on multiple
          personal projects from time to time.
        </Section>
      </div>

      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col md:flex-row xl:flex-col items-center bg-white">
          {/* Contact Section */}
          <Section
            title="My Contact"
            className="xl:w-96 bg-white duration-3000"
          >
            <ContactSection />
          </Section>
          <div className="xl:w-5/6 xl:h-0 xl:border-2 border-primary-500 slide-in-from-left-10 fade-in-0 duration-3000 animate-in"></div>
          {/* Projects Section */}
          <Section
            title="My Projects"
            className="xl:w-96 bg-white duration-3000"
            contentClassName="text-lg text-left"
          >
            <p className="text-gray-600">
              I have worked on a variety of exciting projects that significantly enhanced my technical skills. You can explore them all on the dedicated projects page.
            </p>
            <a
              href="/projects"
              className="mt-4 p-2 px-4 rounded-3xl hover:rounded-xl transition-all inline-block bg-primary-500 text-white font-semibold hover:translate-x-2 duration-300"
            >
              View My Projects →
            </a>
          </Section>
        </div>
        {/* Skills Section */}
        <Section
          title="Skills"
          className="flex-1 bg-primary-100 py-8"
          contentClassName="flex justify-center"
        >
          <SkillsSection />
        </Section>
      </div>

      {/* Work Experience Section */}
      <Section
        title="Work Experience"
        className="flex-1 bg-white duration-3000"
      >
        <WorkSection />
      </Section>

      {/* Education Section */}
      <Section title="Education" className="flex-1 bg-primary-100 duration-3000">
        Bachelor of Science in Computer Science, ABC University (2018 - 2022)
      </Section>
    </div>
  );
}

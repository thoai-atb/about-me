import Navigation from "./components/Navigation";
import BasePathImage from "./components/BasePathImage";
import Section from "./components/Section";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 font-sans bg-white">
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
            Software Developer & DevOps
          </div>
        </div>
        {/* Introduction Section */}
        <Section
          title="About Me"
          className="bg-white flex-1 duration-1000"
          contentClassName="text-xl"
        >
          I am a passionate Software Developer and DevOps with{" "}
          <strong>2+ years of working experience</strong> in designing,
          developing, and deploying software, along with{" "}
          <a
            className="font-bold text-primary-700 hover:text-primary-500"
            href={process.env.NEXT_PUBLIC_BASE_PATH + "/projects"}
          >
            many personal projects
          </a>{" "}
          that I did myself. I can <i>proficiently use</i> programming languages
          such as <strong>Python, JavaScript, Java</strong> and other
          development tools, covering different domains like{" "}
          <strong>Front-End, Back-End, and DevOps</strong>. I also learned and
          did projects that uses <i>LLMs</i>, like <i>OpenAI API</i>.
        </Section>
      </div>

      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col md:flex-row xl:flex-col items-center bg-white">
          {/* Contact Section */}
          <Section
            title="My Contact"
            className="xl:w-96 bg-white duration-2000"
          >
            <ContactSection />
          </Section>
          <div className="xl:w-5/6 xl:h-0 xl:border-2 border-primary-500 slide-in-from-left-10 fade-in-0 duration-2000 animate-in"></div>
          {/* Projects Section */}
          <Section
            title="My Projects"
            className="xl:w-96 bg-white duration-2000"
            contentClassName="text-lg text-left"
          >
            <p className="text-gray-600">
              I have worked on a variety of exciting projects whenever an idea
              popped into my mind. You can explore them all on the dedicated
              projects page.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_BASE_PATH + "/projects"}
              className="mt-4 p-2 px-4 group rounded-3xl transition-all inline-block bg-primary-500 text-white font-semibold hover:translate-x-2 duration-300"
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
      <Section
        title="Education"
        className="flex-1 bg-primary-100 max-w-screen-lg mx-auto duration-3000"
        contentClassName="text-center flex justify-center"
      >
        <div className="max-w-screen-md flex flex-col md:flex-row items-center gap-10 w-full text-lg">
          <BasePathImage
            className="w-40 h-40"
            alt="HCMIU"
            src="/hcmiu_logo.png"
          ></BasePathImage>
          <div className="flex-col items-start">
            <h3 className="pl-8 text-xl text-left text-primary-800 font-bold">
              HCMC International University - VNU
            </h3>
            <div className="pl-8 text-sm text-left text-gray-500 mb-4">
              Bachelor’s Degree in Computer Science 2022
            </div>
            <ul className="list-disc list-inside text-left pl-8">
              <li className="hover:text-primary-600 hover:translate-x-1 transition-transform duration-300">
                Excellent student in 3 semesters (GPA ≥ 9.0 / 10.0)
              </li>
              <li className="hover:text-primary-600 hover:translate-x-1 transition-transform duration-300">
                Good student in 4 semesters (GPA ≥ 8.0 / 10.0)
              </li>
              <li className="hover:text-primary-600 hover:translate-x-1 transition-transform duration-300">
                Encouragement scholarship in 5 semesters
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

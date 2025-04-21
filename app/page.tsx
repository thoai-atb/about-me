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
        <div className="flex-1 relative flex flex-col md:flex-row items-center px-4 md:px-12 lg:px-4 xl:px-12 py-12 bg-primary-400 shadow-lg lg:rounded-r-3xl xl:rounded-r-full slide-in-from-left-10 duration-1000 animate-in">
          <BasePathImage
            className="rounded-full w-48 h-48 border-4 border-primary-600 shadow-xl"
            src={`/thoai.png`}
            alt="Thoai"
            priority
          />
          <div className="text-center text-primary-900 text-3xl mt-6 md:mt-0 md:ml-8 lg:ml-4 xl:ml-8 leading-snug font-thin">
            Hi, I am <br className="hidden lg:block xl:hidden"/><span className="text-white">Ly Bao Thoai</span>,
            <br className="block xl:hidden"/> <div className="inline-block">Software Engineer</div>
          </div>
        </div>
        {/* Introduction Section */}
        <Section
          title="About Me"
          className="bg-white flex-1 duration-1000"
          contentClassName="text-base"
        >
          I am a passionate Software Engineer with over two years of working experience in designing,
          developing, and deploying software. I can proficiently use <strong>Python, JavaScript</strong> and other
          technologies, covering {" "}
          <strong>Front-End, Back-End, and DevOps</strong>. I enhanced my skills with lots of{" "}
          <a
            className="font-bold text-primary-700 hover:text-primary-500"
            href={process.env.NEXT_PUBLIC_BASE_PATH + "/projects"}
          >
            personal projects.
          </a>{" "}I also learned to use <i>LLMs</i>, like <i>OpenAI API</i> in my projects.
        </Section>
      </div>
      <hr className="block lg:hidden border-2"></hr>
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
          <hr className="block md:hidden border-2 w-full"></hr>
          {/* Projects Section */}
          <Section
            title="My Projects"
            className="xl:w-96 bg-white duration-2000"
            contentClassName="px-4 md:px-0 text-left"
          >
            <p className="text-gray-600">
              I have worked on a variety of exciting personal projects whenever an idea
              comes to mind. You can explore them all on the dedicated page.
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
        className="flex-1 bg-white mx-auto duration-3000"
        contentClassName="text-center flex justify-center"
      >
        <div className="flex max-w-screen-xl w-full flex-col items-center md:items-start lg:flex-row gap-4 py-4 group">
          <BasePathImage
            className="w-52 h-52 bg-white shadow-xl p-4 rounded-lg object-contain transition-shadow duration-500 group-hover:shadow-2xl"
            alt="HCMIU"
            src="/hcmiu_logo.png"
          ></BasePathImage>
          <div className="h-0 w-0 lg:h-40 lg:w-0 lg:m-6 lg:border-2 border-primary-400 slide-in-from-top-10 fade-in-0 duration-500 animate-in group-hover:scale-y-125" />
          <div className="flex-1 text-left p-4 pl-10 text-base bg-primary-100 duration-500 w-full">
            <h3 className="text-xl font-semibold text-primary-600">
              HCMC International University - VNU
            </h3>
            <div className="text-sm text-gray-500 mb-4">
              Bachelor’s Degree in Computer Science 2022
            </div>
            <strong className="mb-2">Highlights</strong>
            <ul className="list-disc list-inside">
              <li className="md:hover:text-primary-600 md:hover:translate-x-1 transition-transform duration-300">
                Excellent student in 3 semesters (GPA ≥ 9.0 / 10.0)
              </li>
              <li className="md:hover:text-primary-600 md:hover:translate-x-1 transition-transform duration-300">
                Good student in 4 semesters (GPA ≥ 8.0 / 10.0)
              </li>
              <li className="md:hover:text-primary-600 md:hover:translate-x-1 transition-transform duration-300">
                Encouragement scholarship in 5 semesters
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

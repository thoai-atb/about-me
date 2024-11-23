import Navigation from "./components/Navigation";
import BasePathImage from "./components/BasePathImage";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 faustina font-sans">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center p-12 bg-green-500 shadow-lg">
        {/* <div className="absolute left-0 w-full h-full flex justify-end overflow-hidden">
          <BasePathImage
            className="h-full w-auto opacity-20"
            src={`/hero_background.png`}
            alt="desk"
            priority
          />
        </div> */}
        <BasePathImage
          className="rounded-full w-48 h-48 border-4 border-green-50 shadow-xl"
          src={`/thoai.png`}
          alt="Thoai"
          priority
        />
        <div className="text-center text-green-900 md:text-left text-2xl md:text-4xl mt-6 md:mt-0 md:ml-8 leading-snug font-bold">
          Hi, I am <span className="text-white">Ly Bao Thoai</span>. <br />
          Software Engineer & DevOps
        </div>
      </div>

      {/* Introduction Section */}
      <Section title="Introduction" bgColor="bg-white" animClass="duration-1000">
        I am a passionate developer focused on creating modern, user-friendly web applications with an emphasis on clean design and functionality.
      </Section>

      {/* Skills Section */}
      <Section title="Skills" bgColor="bg-green-100" animClass="duration-2000">
        <ul>
          <li>ReactJS & Next.js</li>
          <li>JavaScript & TypeScript</li>
          <li>HTML, CSS, TailwindCSS</li>
          <li>Git & Version Control</li>
        </ul>
      </Section>

      {/* Work Experience Section */}
      <Section title="Work Experience" bgColor="bg-white" animClass="duration-3000">
        <p>
          <strong>Software Engineer</strong> at XYZ Company (2022 - Present)
        </p>
        <p>Developed and maintained scalable web applications using ReactJS and modern frameworks.</p>
      </Section>

      {/* Projects Section */}
      <Section title="Projects" bgColor="bg-green-100" animClass="duration-4000">
        <p>
          <strong>Portfolio Website</strong>: A responsive portfolio showcasing my work using Next.js and TailwindCSS.
        </p>
        <p>
          <strong>E-commerce App</strong>: Built a feature-rich online store with React and Firebase.
        </p>
      </Section>

      {/* Education Section */}
      <Section title="Education" bgColor="bg-white" animClass="duration-5000">
        Bachelor of Science in Computer Science, ABC University (2018 - 2022)
      </Section>
    </div>
  );
}

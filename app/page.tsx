import Navigation from "./components/Navigation";
import BasePathImage from "./components/BasePathImage";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center p-8 bg-gray-100">
        <BasePathImage
          className="rounded-full w-40 h-40 border-4 border-gray-300 shadow-lg"
          src={`/thoai.png`}
          alt="Thoai"
          // width={180}
          // height={10}
          priority
        />
        <div className="text-center md:text-left text-3xl md:text-5xl font-mono mt-6 md:mt-0 md:ml-8 leading-snug">
          Hi, I am <span className="text-indigo-600">Thoai</span>. <br />
          Welcome to my website!
        </div>
      </div>
    </div>
  );
}

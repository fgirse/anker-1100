import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import BentoGrid from "../components/Bento";
import Sportarena from "../components/Sportarena";
export default function Home() {
  return (
    <div className="container bg-black flex flex-col min-h-screen items-center justify-center  font-sans dark:bg-black">
      <Hero />
      <About />
      <BentoGrid />
      <Sportarena />
    </div>
  );
}

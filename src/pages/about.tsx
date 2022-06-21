import React from "react";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";
import Navbar from "../components/navbar/navbar";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import fakerlogo from "../../public/fakerjslogo.svg";

const About = () => {
  return (
    <div className="about bg-gradient-to-tr from-red-300 to-red-600 dark:from-zinc-900 dark:to-slate-900 h-screen ">
      <Navbar />
      <HamburgerMenu />

      <main className="main flex  mt-20  text-2xl ">
        <section className="left w-1/2 flex items-center justify-center">
          <h1 className="max-w-2xl m-16 text-7xl font-bold text-neutral-300 drop-shadow-xl">
            Ecommerce website is one of the best and interesting projects that a
            Web developer can build!
          </h1>
        </section>
        <section className="right w-1/2 flex flex-col items-center justify-center gap-4 ">
          <p className="max-w-xl glass p-4 hover:scale-110 transition-all rounded-xl hover:font-semibold text-neutral-300">
            Building Ecommerce website 🛒, requires complex State Management and
            diverse logic to control the flow of the state and the Components{" "}
          </p>

          <p className="max-w-xl glass p-4 hover:scale-110 transition-all  rounded-xl hover:font-semibold text-neutral-300">
            This is why I decided to Build this project, as a pre-junior
            developer👨‍💻 It was a really long journey! I knew this and I
            sharpened my skills, which made me who I am today!🦾
          </p>

          <p className="max-w-xl glass p-4 hover:scale-110 transition-all rounded-xl hover:font-semibold text-neutral-300">
            But most important🚀 and most exciting thing which I could not
            identify early with, is that now I have infinite number of ideas
            about how to improve code quality and make it more readible for
            fellow developers!
          </p>

          <p className="max-w-xl glass p-4 hover:scale-110 transition-all rounded-xl hover:font-semibold text-neutral-300">
            if you or your team liked my projects, I&apos;m EAGER to help with
            ZEST and WONDERWORKING!
          </p>
        </section>
      </main>
      <footer className="techs px-8 flex justify-between glass  absolute w-full rounded-t-xl p-4 bottom-0 items-center text-8xl">
        <div className="techs flex flex-row justify-start">
          <FaReact className="mr-10 text-blue-400 drop-shadow-lg" />
          <SiNextdotjs className="mr-10 text-white drop-shadow-lg" />
          <SiTypescript className="mr-10 text-blue-600 drop-shadow-lg" />
          <SiTailwindcss className="mr-10 text-blue-500 drop-shadow-lg" />
          <Image src={fakerlogo} alt="fakerjs logo" width={96} height={96} />
          <a
            href="https://exchangerate.host/#/"
            target="_blank"
            rel="noreferrer"
            className="text-xl font-bold my-auto mx-4 "
          >
            exchangerate.host (API)
          </a>
        </div>

        <div className="tex w-24 h-24 ">
          <Image src={logo} alt="a3 logo" className="rounded-full" />
        </div>
      </footer>
    </div>
  );
};

export default About;

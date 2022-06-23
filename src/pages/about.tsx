import React from "react";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";
import Navbar from "../components/navbar/navbar";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import fakerlogo from "../../public/fakerjslogo.svg";
import { AiOutlineGithub } from "react-icons/ai";

//describing why I made this app

const About = () => {
  return (
    <div className="about bg-gradient-to-tr from-red-300 to-red-600 dark:from-zinc-900 dark:to-slate-900 md:h-screen">
      <Navbar />
      <HamburgerMenu />

      <main className="main md:h-[calc(100%-76px-132px)] flex flex-col justify-center items-center  lg:flex-row  2xl:text-2xl">
        <section className="left w-1/2 flex items-center justify-center">
          <h1 className="2xl:max-w-2xl min-w-[300px] sm:max-w-md text-3xl my-4 lg:text-4xl 2xl:m-16 xl:m-8 2xl:text-7xl font-bold text-neutral-300 drop-shadow-xl">
            Ecommerce App is one of the best and interesting project that a Web
            developer can build!
          </h1>
        </section>

        <section className="right w-1/2 flex flex-col items-center justify-center gap-4 ">
          <p className="glass aboutP">
            Building Ecommerce App 🛒, requires complex State Management and
            diverse logic to control the flow of the state and the Components{" "}
          </p>

          <p className="glass aboutP">
            This is why I decided to Build this project, as a pre-junior
            developer👨‍💻 It was a really long journey! I knew this and I
            sharpened my skills, which made me who I am today!🦾
          </p>

          <p className="glass aboutP">
            But most important🚀 and most exciting thing which I could not
            identify early with, is that now I have infinite number of ideas
            about how to improve code quality and make it more readible for
            fellow developers!
          </p>

          <p className="glass aboutP">
            if you or your team liked my projects, I&apos;m EAGER to help with
            ZEST and WONDERWORKING!
          </p>
        </section>
      </main>

      <footer className="techs  px-4 md:px-8 flex flex-col sm:flex-row justify-center sm:justify-between glass md:absolute mt-4 md:mt-0 w-full rounded-t-xl p-4 bottom-0 items-center text-9xl sm:text-4xl lg:text-8xl">
        <div className="techs flex flex-col items-center sm:flex-row sm:justify-start">
          <FaReact className="m-4 md:m-0 md:mr-10 sm:mr-5 text-blue-400 drop-shadow-lg" />
          <SiNextdotjs className="m-4 md:m-0 md:mr-10 sm:mr-5 text-white drop-shadow-lg" />
          <SiTypescript className="m-4 md:m-0 md:mr-10 sm:mr-5 text-blue-600 drop-shadow-lg" />
          <SiTailwindcss className="m-4 md:m-0 md:mr-10 sm:mr-5 text-blue-500 drop-shadow-lg" />
          <AiOutlineGithub className="m-4 md:m-0 md:mr-10 sm:mr-5 drop-shadow-lg" />
          <div className="fakerjswrapper w-32 h-32 sm:w-9 sm:h-9 lg:w-24 lg:h-24">
            <Image src={fakerlogo} alt="fakerjs logo" />
          </div>
          <a
            href="https://exchangerate.host/#/"
            target="_blank"
            rel="noreferrer"
            className=" sm:text-xs md:text-sm  text-xl font-bold my-4 sm:mx-4 "
          >
            exchangerate.host API
          </a>
        </div>

        <div className="text w-12  md:w-24 md:h-24">
          <Image src={logo} alt="a3 logo" className="rounded-full" />
        </div>
      </footer>
    </div>
  );
};

export default About;

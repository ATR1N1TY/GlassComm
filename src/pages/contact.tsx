import React from "react";
import Navbar from "../components/navbar/navbar";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import logo from "../../public/LOGO.jpg";
import Image from "next/image";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";

// from here you can check my social media platforms

const Contact = () => {
  return (
    <div className="bg-gradient-to-tr h-screen from-red-300 to-red-600 dark:from-zinc-900 dark:to-slate-900">
      <Navbar />
      <HamburgerMenu />

      <div className="wrap flex items-center justify-center flex-col h-5/6 ">
        <p className=" text-5xl  lg:mb-16 dark:text-indigo-50">FIND ME ON</p>
        <div className="socialPlatforms flex flex-col items-center md:flex-row text-black dark:text-indigo-50">
          <div className="margn m-4 w-32 h-32 lg:w-64 lg:h-64">
            <Image
              className="a3Logo rounded-full hover:animate-spin"
              width={256}
              height={256}
              src={logo}
              alt="atrinity logo"
            />
          </div>
          <BsFacebook className="w-32 h-32 lg:w-64 lg:h-64 hover:text-blue-500" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/indiespace"
            className="block"
          >
            <AiFillYoutube className="w-32 h-32 lg:w-64 lg:h-64 hover:text-red-600 " />
          </a>
          <AiFillLinkedin className="w-32 h-32 lg:w-64 lg:h-64 hover:text-blue-800 block" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Navbar from "../components/navbar/navbar";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import logo from "../../public/LOGO.jpg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-gradient-to-tr h-screen from-red-300 to-red-600 dark:from-zinc-900 dark:to-slate-900">
      <Navbar />
      <div className="wrap flex items-center justify-center flex-col h-5/6 ">
        <p className=" text-5xl mb-16 dark:text-indigo-50">FIND ME ON</p>
        <div className="socialPlatforms flex text-black dark:text-indigo-50">
          <BsFacebook className=" w-64 h-64 hover:text-blue-500" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/indiespace"
          >
            <AiFillYoutube className=" w-64 h-64 hover:text-red-600" />
          </a>
          <Image
            className="a3Logo rounded-full hover:animate-spin"
            width={256}
            height={256}
            src={logo}
            alt="atrinity logo"
          />
          <AiFillLinkedin className=" w-64 h-64 hover:text-blue-800" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

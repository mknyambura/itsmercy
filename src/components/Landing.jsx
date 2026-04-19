import React from "react";
import { Link } from "react-router-dom";

import LandingNavbar from "./LandingNavbar";
import profilePic from "../assets/dp.jpg";
import dsImage from "../assets/ds-image.png";
import rdImage from "../assets/rd-image.png";

import { BsBoxArrowUpRight, BsEmojiWink } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaMapMarkedAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import data from "../../db.json";
import { useState } from "react";
import { useEffect } from "react";
import LandingFooter from "./LandingFooter";

const Landing = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("./react")
      .then((response) => response.json())
      .then(setSkills);
  }, []);

  return (
    <div>
      <LandingNavbar />
      <div className="bg-[#FF9B00]/90 text-white flex flex-row items-center justify-between px-12 py-12 gap-8">
        <div className="flex flex-col justify-between gap-8">
          <h1 className="flex flex-col justify-between gap-8 text-xl md:text-xl lg:text-2xl">
            <span className="text-4xl  font-bold">
              Hi! I'm Mercy.
            </span>{" "}
            Great seeing you here! I'm a Data Scientist and a Front-End React
            Developer based in UK and Kenya
          </h1>
          <div className="flex flex-row gap-8">
            <a
              href="https://www.linkedin.com/in/mercy-faith-kariuki/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="text-3xl md:text-3xl lg:text-5xl hover:text-[#FF9B00] hover:transition-all hover:duration-300 hover:ease-in-out" />
            </a>
            <a
              href="https://github.com/mknyambura"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl md:text-3xl lg:text-5xl hover:text-[#FF9B00] hover:transition-all hover:duration-300 hover:ease-in-out" />
            </a>
          </div>
        </div>
        <div className="rounded-full w-3/4 md:w-3/4 lg:w-3/4">
          <img src={profilePic} alt="" className="rounded-full ml-5" />
        </div>
      </div>
      {/* About Me */}
      <div
        className="mt-16 mb-16 flex flex-col md:flex-col 
      lg:flex-col justify-evenly items-center"
      >
        <div>
          <h1 className="text-[#FF9B00] font-bold text-2xl uppercase m-5">
            About Me
          </h1>
        </div>
        <div className="lg:w-[80%]  flex items-center justify-center flex-row px-2 py-2  md:m-10 lg:m-20">
          <div
            className="hover:text-2xl relative flex items-center
           justify-center h-[30vh] w-[calc(50%-40px)] 
           hover:w-[calc(50%+500px)] transition-all ease-in-out duration-700"
          >
            <img src={dsImage} alt="" width={600} />
            <a
              href="/data-science-portfolio"
              target="_blank"
              rel="noreferrer"
              className="absolute text-center items-center justify-center
               font-bold text-sm hover:text-2xl text-[#f5f5f5]"
            >
              Data Scientist
            </a>
          </div>
          <div
            className="hover:text-2xl relative flex items-center
            justify-center h-[30vh] lg:h-[50vh] w-[calc(50%-40px)] 
            hover:w-[calc(50%+500px)] transition-all ease-in-out duration-700"
          >
            <img
              src={rdImage}
              alt=""
              className="absolute top-[15px] lg:top-[30px]"
              width={600}
            />
            <a
              href="/react-developer-portfolio"
              target="_blank"
              rel="noreferrer"
              className="absolute top-[70px] text-center items-center justify-center 
              font-bold text-sm hover:text-2xl text-[#f5f5f5]"
            >
              Front-End React Developer
            </a>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-8">
          <div
            id="about"
            className="flex flex-row gap-2 lg:gap-16 px-1 py-6  
            lg:px-6 lg:py-6 justify-between"
          >
            {/* Data Science icon skill list*/}
            <div
              className="w-1/2 md:w-1/2 lg:w-1/2 flex flex-col 
            lg:items-center gap-8 m-10  md:m-10 lg:m-10"
            >
              <h1 className="font-bold text-xl md:text-2xl lg:text-2xl">Data Scientist</h1>
              <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 mdlg:gap-8">
                {/* <ul className='list-disc marker:text-[#FF9B00]'> */}
                {data.dataScience.map((dataScienceSkills) => (
                  <img
                    src={dataScienceSkills.image}
                    alt=""
                    className="rounded-full w-[100%] md:w-[50%] lg:w-[60%] "
                  />
                ))}
                {/* </ul> */}
              </div>
            </div>
            {/* React Developer  icon skill list*/}
            <div
              className="w-1/2 md:w-1/2 lg:w-[48%] flex flex-col lg:items-center 
            gap-8 m-10 md:m-10 lg:m-10 "
            >
              <h1 className="font-bold text-xl md:text-2xl lg:text-2xl">React Developer</h1>
              <div className="grid grid-cols-5 gap-4">
                {/* <ul className='list-disc marker:text-[#FF9B00]'> */}
                {data.react.map((reactSkills) => (
                  // <div key={reactSkills.id}>
                  <img
                    src={reactSkills.image}
                    alt=""
                    className="rounded-full w-[85%] md:w-[50%] lg:w-[60%]"
                  />
                  // </div>
                ))}
                {/* </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF9B00] text-white flex flex-col gap-8 px-16 lg:px-36 py-16 lg:py-36 items-center">
        <h1 className="font-bold text-xl md:text-3xl lg:text-3xl">Check out my respective projects</h1>
        <ul className="list-disc marker:text-white flex flex-col gap-4 px-4 py-4">
          <li
            className="text-md hover:font-3xl lg:hover:font-3xl hover:font-bold hover:transition
           hover:transition-all hover:duration-500 hover:ease-in-out"
          >
            <a
              className=" gap-4 flex flex-row items-center"
              href="/data-science-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Data Science Projects
              <BsBoxArrowUpRight className="text-sm" />
            </a>
          </li>
          <li
            className="text-md hover:font-3xl lg:hover:font-3xl hover:font-bold
           hover:transition hover:transition-all hover:duration-500 hover:ease-in-out"
          >
            <a
              className=" gap-4 flex flex-row items-center"
              href="/react-developer-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              React Developer Projects
              <BsBoxArrowUpRight className="text-sm" />
            </a>
          </li>
        </ul>
      </div>
      {/* Get in touch */}
      <div
        id="contact"
        className="flex flex-col items-start gap-8 py-36 px-12 md:px-12 lg:px-48"
      >
        <h1 className="text-[#FF9B00] uppercase text-2xl font-bold">
          Get in touch
        </h1>
        <div className=" flex flex-row gap-8 items-center">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Don't be shy! Let's talk more</h1>
          <BsEmojiWink className="text-5xl md:text-6xl lg:text-7xl text-[#FF9B00] px-1.5" />
        </div>
        <div
          className="flex flex-col md:flex-col
         lg:flex-row justify-evenly items-center gap-12"
        >
          <div className="flex flex-row justify-center items-center gap-3">
            <button
              className="m-2  w-1/2 md:w-3/4 lg:w-[30%] px-7 py-5  lg:px-6 lg:py-6 bg-white shadow-xl shadow-slate-400 rounded-full"
              disabled="disabled"
            >
              <FaMapMarkedAlt className="text-[#FF9B00] font-bold text-5xl" />
            </button>
            <div>
              <h1 className="font-bold text-2xl">Location</h1>
              <h1 className="text-black/30 text-xl font-light">
                United Kingdom || Kenya
              </h1>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <button
              className=" m-2  w-1/2 md:3/4 lg:w-1/2 px-7 py-5  md:px-8 md:py-6  lg:px-6 lg:py-6    bg-white shadow-xl shadow-slate-400 rounded-full">
              <a href="mailto:mercyfaith.kariuki@gmail.com">
                <TfiEmail className="text-[#FF9B00] font-bold text-5xl" />
              </a>
            
              
            </button>
            <div>
              <h1 className="font-bold text-2xl">Mail</h1>
              <a
                href="mailto:mercyfaith.kariuki@gmail.com"
                className="text-black/30 text-xl font-light hover:text-[#FF9B00] hover:ease-in-out duration-500"
              >
                mercyfaith.kariuki@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default Landing;

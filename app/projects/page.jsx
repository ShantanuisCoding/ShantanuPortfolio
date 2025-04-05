"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'WEB',
    title: "Search Engine using GoLang",
    description: "A fast and efficient search engine built using GoLang with optimized search algorithms.",
    stack: [{ name: "GoLang" }, { name: "Search Algorithms" }, { name: "Backend" }],
    image: "/assets/work/thumb3.png", // Add image URL here
    github: "https://github.com/ShantanuisCoding/Search-Engine",
    live: ""
  },
  {
    num: '02',
    category: 'SECURITY',
    title: "DDoS Protection System for Cloud",
    description: "An intelligent system to detect and mitigate DDoS attacks on cloud platforms.",
    stack: [{ name: "Cybersecurity" }, { name: "AI" }, { name: "Cloud Security" }],
    image: "/assets/work/thumb3.png", // Add image URL here
    github: "https://github.com/ShantanuisCoding/DDoS-Protection-System-for-Cloud",
    live: ""
  },

  {
    num: '03',
    category: 'WEB',
    title: "My Portfolio",
    description: "A personal portfolio showcasing projects, skills, and achievements.",
    stack: [{ name: "React" }, { name: "Tailwinnd CSS" }, { name: "Next.js" }],
    image: "/assets/work/thumb3.png", // Add image URL here
    github: "https://github.com/ShantanuisCoding/Search-Engine",
    live: ""
  },

  {
    num: '04',
    category: 'AI',
    title: "EDMRS (Emotion Detection Music Recommendation System)",
    description: "An AI-based music recommendation system that detects emotions and suggests songs accordingly.",
    stack: [{ name: "AI" }, { name: "Python" }, { name: "Machine Learning" }],
    image: "/assets/work/thumb3.png", // Add image URL here
    github: "https://github.com/ShantanuisCoding/EDMRS"
  },
  {
    num: '05',
    category: 'AI',
    title: "Video Translator",
    description: "An AI-powered video translation tool that translates speech and subtitles in real time.",
    stack: [{ name: "AI" }, { name: "Deep Learning" }, { name: "NLP" }],
    image: "/assets/work/thumb3.png", // Add image URL here
    github: "https://github.com/ShantanuisCoding/Video-Translator"
  },
  {
    num: '06',
    category: 'AI',
    title: "Voice Cloner",
    description: "A deep learning-based system for cloning voices with high accuracy and realism.",
    stack: [{ name: "Deep Learning" }, { name: "AI" }, { name: "Speech Processing" }],
    image: "/assets/work/thumb3.png", // Add image URL here
    github: "https://github.com/ShantanuisCoding/Voice-Cloner"
  },
  {
    num: '07',
    category: 'GAME',
    title: "Sudoku Solver",
    description: "An AI-powered Sudoku solver that provides instant solutions using backtracking algorithms.",
    stack: [{ name: "AI" }, { name: "Python" }, { name: "Algorithms" }],
    image: "/assets/work/thumb3.png", // Add image URL here
    github: "https://github.com/ShantanuisCoding/Sudoku-Solver"
  },
]

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handelSlideChnge = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent" style={{ WebkitTextStroke: "2px white" }}>
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500">
                {project.title}
              </h2>

              <p className="text-white/60">{project.description}</p>

              {/* Tech Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <Link href={project.github}>
                    <BsGithub className="text-white text-3xl hover:text-accent" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="relative w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handelSlideChnge}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <button
        className="fixed left-5 top-1/2 -translate-y-1/2 z-50 bg-transparent text-white p-4 rounded-full hover:scale-150 transition-all duration-300"
        onClick={() => document.querySelector(".swiper")?.swiper?.slidePrev()}
      >
        <PiCaretLeftBold className="text-7xl" />
      </button>

      <button
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 bg-transparent text-white p-4 rounded-full hover:scale-150 transition-all duration-300"
        onClick={() => document.querySelector(".swiper")?.swiper?.slideNext()}
      >
        <PiCaretRightBold className="text-7xl" />
      </button>
    </motion.section>
  );
};

export default Projects;

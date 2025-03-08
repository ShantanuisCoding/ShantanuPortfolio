"use client";
import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode, FaNodeJs,
  FaPython, FaJava, FaDocker, FaGitAlt, FaGithub, FaLinkedin, FaGlobe
} from "react-icons/fa";

import {
  SiCplusplus, SiPytorch, SiSolidity, SiNextdotjs, SiPostgresql,
  SiMongodb, SiExpress, SiVercel, SiRust, SiJupyter, SiTailwindcss,
  SiOpencv, SiKeras, SiScikitlearn, SiFirebase, SiTensorflow, SiGo
} from "react-icons/si";

import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "AI & Blockchain Developer with expertise in IoT and Full-Stack Development. Passionate about building intelligent, scalable, and impactful tech solutions.",
  info: [
    { fieldName: "Name", fieldValue: "Shantanu Singh" },
    { fieldName: "Phone", fieldValue: "+91 7817874878" },
    { fieldName: "Experience", fieldValue: "3-month Internship" },
    { fieldName: "Email", fieldValue: "sshantanu781@gmail.com" },
    { fieldName: "Languages", fieldValue: "English" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Education", fieldValue: "Pursuing B.Tech (CSE)" },
    { fieldName: "Tech Stack", fieldValue: "C++, Java, Python, JavaScript, AI, Blockchain" },
  ],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/ShantanuisCoding", icon: <FaGithub size={22} /> },
    { name: "LinkedIn", url: "www.linkedin.com/in/shantanu-singh-8a3a78275", icon: <FaLinkedin size={22} /> },
    { name: "Portfolio", url: "https://shantanu.dev", icon: <FaGlobe size={22} /> },
  ],
};

// Education Data
const education = {
  title: "My Education",
  description: "Education background and achievements.",
  items: [
    { institution: "Chandigarh University", degree: "BE - Computer Science Engineering", year: "2022-Present" },
    { institution: "Dr. MPS World School", degree: "Intermediate (71.4%)", year: "2022" },
    { institution: "Dr. MPS World School", degree: "Matriculation (70.8%)", year: "2020" },
  ],
  coCurricular: {
    title: "Co-Curricular Activities & Achievements",
    items: [
      "Solved 50+ LeetCode problems on Data Structures & Algorithms.",
      "Hackathons Participated: Codex Ninja Hackathon, HashHacks 6.0, DevRev Forge, HackFest’24.",
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      "C & C++ Certification",
      "Python Certification",
      "Introduction to Web3",
      "Advanced DBMS",
      "Java Certification",
      "IoT Architecture",
      "Entrepreneurship Certification",
    ],
  },
};

// Skills Data
const skills = {
  title: "My Skills",
  description: "Passionate about AI, Blockchain, IoT, and Full-Stack Development.",
  categories: {
    "Programming Languages": [
      { icon: () => <FaPython />, name: "Python" },
      { icon: () => <FaJava />, name: "Java" },
      { icon: () => <SiCplusplus />, name: "C++" },
      { icon: () => <FaCode />, name: "C#" },
      { icon: () => <SiSolidity />, name: "Solidity" },
      { icon: () => <SiRust />, name: "Rust" },
    ],
    "AI & ML": [
      { icon: () => <SiTensorflow />, name: "TensorFlow" },
      { icon: () => <SiPytorch />, name: "PyTorch" },
      { icon: () => <SiOpencv />, name: "OpenCV" },
      { icon: () => <SiScikitlearn />, name: "Scikit-Learn" },
      { icon: () => <SiKeras />, name: "Keras" },
      { icon: () => <SiJupyter />, name: "Jupyter" },
    ],
    "Frontend": [
      { icon: () => <FaHtml5 />, name: "HTML" },
      { icon: () => <FaCss3Alt />, name: "CSS" },
      { icon: () => <FaJs />, name: "JavaScript" },
      { icon: () => <FaReact />, name: "React" },
      { icon: () => <SiNextdotjs />, name: "Next.js" },
      { icon: () => <SiTailwindcss />, name: "Tailwind CSS" },
    ],
    "Backend": [
      { icon: () => <FaNodeJs />, name: "Node.js" },
      { icon: () => <SiExpress />, name: "Express.js" },
      { icon: () => <SiPostgresql />, name: "PostgreSQL" },
      { icon: () => <SiMongodb />, name: "MongoDB" },
      { icon: () => <SiFirebase />, name: "Firebase" },
      { icon: () => <SiGo />, name: "Go" },
    ],
    "DevOps & Cloud": [
      { icon: () => <FaDocker />, name: "Docker" },
      { icon: () => <SiVercel />, name: "Vercel" },
    ],
  },
};

// Resume Component
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">

          {/* Tabs Navigation */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <div className="min-h-[70vh] w-full">

            {/* About Me Section */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-8">
                {/* Header */}
                <h3 className="text-5xl font-bold text-gray-100">{about.title}</h3>
                <p className="max-w-[600px] text-white/70 text-lg mx-auto xl:mx-0">{about.description}</p>

                {/* Info Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 max-w-[650px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="text-white/50 text-lg">{item.fieldName}:</span>
                      <span className="text-xl font-semibold">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="flex justify-center xl:justify-start gap-6 mt-6">
                  {about.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition"
                    >
                      {link.icon}
                      <span className="hidden sm:block text-lg">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </TabsContent>

          {/* Education Section */}

          <TabsContent value="education" className="w-full">
            <div className="mb-8"> {/* Bottom space kam kiya */}
              <h3 className="text-4xl font-bold text-white">{education.title}</h3>
              <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 text-base">
                {education.description}
              </p>

              {/* Scrollable Education List */}
              <ScrollArea className="h-[250px] mt-6">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#1e1e24] h-[120px] py-5 px-6 rounded-xl flex flex-col justify-center shadow-lg transition hover:bg-[#292933]"
                    >
                      <span className="text-accent text-sm font-semibold">{item.year}</span>
                      <h3 className="text-lg font-semibold">{item.institution}</h3>
                      <p className="text-white/60 text-sm flex items-center">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent mr-2"></span>
                        {item.degree}
                      </p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>

            {/* Co-Curricular Section */}
            <div className="mt-6"> {/* Top space bhi adjust kiya */}
              <h3 className="text-4xl font-bold text-white">{education.coCurricular.title}</h3>
              <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 text-base">
                Additional skills, competitions, and achievements beyond academics.
              </p>

              {/* Styled Co-Curricular List with Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {education.coCurricular.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1e1e24] p-6 rounded-xl shadow-lg transition hover:bg-[#292933] flex items-start"
                  >
                    <span className="text-accent text-xl font-semibold mr-3">•</span>
                    <p className="text-white/80 text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </TabsContent>


          {/* Skills Section */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px] max-h-[650px] p-4">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>

              <ScrollArea className="h-[500px] w-full rounded-lg p-4 z-10">
                <div className="pr-4">
                  {Object.entries(skills.categories).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="text-xl font-semibold mb-3">{category}</h4>
                      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-[10px]">
                        {skillList.map((skill, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[90px] bg-[#232329] rounded-lg flex justify-center items-center group">
                                  <div className="text-3xl group-hover:scale-150 group-hover:text-accent transition-transform duration-300">
                                    {skill.icon()}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

          </TabsContent>
      </div>
    </Tabs>
      </div >
    </motion.div >
  );
};

export default Resume;

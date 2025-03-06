"use client";
import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode, FaNodeJs,
  FaPython, FaJava, FaDocker, FaGitAlt
} from "react-icons/fa";

import {
  SiCplusplus, SiPytorch, SiSolidity, SiNextdotjs, SiPostgresql,
  SiMongodb, SiExpress, SiVercel, SiRust, SiJupyter, SiTailwindcss,
  SiOpencv, SiKeras, SiScikitlearn, SiFirebase, SiTensorflow, SiGo
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About Data
const about = {
  title: "About Me",
  description: "Passionate about AI, Blockchain, IoT, and Full-Stack Development.",
  info: [
    { fieldName: "Name", fieldValue: "Shantanu Singh" },
    { fieldName: "Phone", fieldValue: "+91 7817874878" },
    { fieldName: "Experience", fieldValue: "3 months internship" },
    { fieldName: "Email", fieldValue: "sshantanu781@gmail.com" },
    { fieldName: "Languages", fieldValue: "English" },
    { fieldName: "Freelance", fieldValue: "Available" },
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
      { icon: FaPython, name: "Python" },
      { icon: FaJava, name: "Java" },
      { icon: SiCplusplus, name: "C++" },
      { icon: FaCode, name: "C#" },
      { icon: SiSolidity, name: "Solidity" },
      { icon: SiRust, name: "Rust" },
    ],
    "AI & ML": [
      { icon: SiTensorflow, name: "TensorFlow" },
      { icon: SiPytorch, name: "PyTorch" },
      { icon: SiOpencv, name: "OpenCV" },
      { icon: SiScikitlearn, name: "Scikit-Learn" },
      { icon: SiKeras, name: "Keras" },
      { icon: SiJupyter, name: "Jupyter" },
    ],
    "Frontend": [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
    "Backend": [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiFirebase, name: "Firebase" },
      { icon: SiGo, name: "Go" },
    ],
    "DevOps & Cloud": [
      { icon: FaDocker, name: "Docker" },
      { icon: SiVercel, name: "Vercel" },
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
            <TabsContent value="about" className="w-full">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="text-white/60">{about.description}</p>
              <ul className="mt-4 space-y-2 text-white/80">
                {about.info.map((info, index) => (
                  <li key={index}><strong>{info.fieldName}:</strong> {info.fieldValue}</li>
                ))}
              </ul>
            </TabsContent>


            {/* Education Section */}

            <TabsContent value="education" className="w-full">
              <div className="mb-6"> {/* Bottom space kam kiya */}
                <h3 className="text-3xl font-bold text-white">{education.title}</h3>
                <p className="max-w-[500px] text-white/70 mx-auto xl:mx-0 text-sm">
                  {education.description}
                </p>

                {/* Scrollable Education List */}
                <ScrollArea className="h-[320px] mt-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#1e1e24] h-[90px] py-3 px-5 rounded-lg flex flex-col justify-center shadow-md transition hover:bg-[#292933]"
                      >
                        <span className="text-accent text-xs font-semibold">{item.year}</span>
                        <h3 className="text-base font-medium">{item.institution}</h3>
                        <p className="text-white/60 text-xs flex items-center">
                          <span className="w-[5px] h-[5px] rounded-full bg-accent mr-2"></span>
                          {item.degree}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              {/* Co-Curricular Section */}
              <div className="mt-6"> {/* Top space bhi adjust kiya */}
                <h3 className="text-3xl font-bold text-white">{education.coCurricular.title}</h3>
                <p className="max-w-[500px] text-white/70 mx-auto xl:mx-0 text-sm">
                  Additional skills, competitions, and achievements beyond academics.
                </p>

                {/* Styled Co-Curricular List with Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                  {education.coCurricular.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#1e1e24] p-4 rounded-lg shadow-md transition hover:bg-[#292933] flex items-start"
                    >
                      <span className="text-accent text-lg font-semibold mr-2">•</span>
                      <p className="text-white/70 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

            </TabsContent>


            {/* Skills Section */}
            <TabsContent value="skills" className="w-full">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="text-white/60">{skills.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {Object.entries(skills.categories).map(([category, skillList], index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-2">{category}</h3>
                    <ul className="space-y-2">
                      {skillList.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2">
                          {React.createElement(skill.icon, { className: "w-5 h-5 text-blue-500" })} {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div >
    </motion.div >
  );
};

export default Resume;

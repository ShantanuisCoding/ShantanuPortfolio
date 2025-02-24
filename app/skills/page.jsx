"use client"

import { BsArrowDownRight } from 'react-icons/bs'
import Link from "next/link";

const skills = [
  {
    name: "HTML",
    level: "90%",
  },
  {
    name: "CSS",
    level: "80%",
  },
  {
    name: "JavaScript",
    level: "70%",
  },
  {
    name: "React",
    level: "60%",
  },
  {
    name: "Node.js",
    level: "50%",
  },
  {
    name: "MongoDB",
    level: "40%",
  },
  {
    name: "Express",
    level: "30%",
  },
  {
    name: "Next.js",
    level: "20%",
  },
];

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grod grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {skills.map((skill, index) => {
            return (
              <div key={index} className="flex-1 flex felx-col justify-center gap-6 group">
                <div>{skill.name}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};


export default Skills;

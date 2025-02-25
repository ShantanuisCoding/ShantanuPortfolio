"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiPytorch, SiSolidity, SiNextdotjs, SiPostgresql, SiMongodb, SiExpress, SiPrisma, SiZod, SiVercel, SiRust, SiJupyter, SiTailwindcss, SiOpencv, SiKeras, SiScikitlearn, SiFirebase, SiTensorflow, SiGo, SiKubernetes } from "react-icons/si";
import { useState } from "react";

const skillsCategories = {
    "Programming Languages": [
        { icon: <FaPython className="text-blue-400 text-5xl" />, name: "Python", level: 90 },
        { icon: <FaJava className="text-red-500 text-5xl" />, name: "Java", level: 80 },
        { icon: <SiCplusplus className="text-blue-600 text-5xl" />, name: "C++", level: 85 },
        { icon: <FaCode className="text-purple-400 text-5xl" />, name: "C#", level: 70 },
        { icon: <SiSolidity className="text-gray-500 text-5xl" />, name: "Solidity", level: 65 },
        { icon: <SiRust className="text-orange-500 text-5xl" />, name: "Rust", level: 60 }
    ],
    "AI & ML": [
        { icon: <SiTensorflow className="text-orange-500 text-5xl" />, name: "TensorFlow", level: 85 },
        { icon: <SiPytorch className="text-red-500 text-5xl" />, name: "PyTorch", level: 80 },
        { icon: <SiOpencv className="text-blue-400 text-5xl" />, name: "OpenCV", level: 75 },
        { icon: <SiScikitlearn className="text-yellow-500 text-5xl" />, name: "Scikit-Learn", level: 70 },
        { icon: <SiKeras className="text-red-400 text-5xl" />, name: "Keras", level: 65 },
        { icon: <SiJupyter className="text-orange-400 text-5xl" />, name: "Jupyter", level: 90 }
    ],
    "Frontend": [
        { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML", level: 95 },
        { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS", level: 90 },
        { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript", level: 85 },
        { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React", level: 80 },
        { icon: <SiNextdotjs className="text-gray-500 text-5xl" />, name: "Next.js", level: 75 },
        { icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, name: "Tailwind CSS", level: 70 }
    ],
    "Backend": [
        { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js", level: 85 },
        { icon: <SiExpress className="text-gray-500 text-5xl" />, name: "Express.js", level: 80 },
        { icon: <SiPostgresql className="text-blue-500 text-5xl" />, name: "PostgreSQL", level: 85 },
        { icon: <SiMongodb className="text-green-400 text-5xl" />, name: "MongoDB", level: 80 },
        { icon: <SiFirebase className="text-yellow-400 text-5xl" />, name: "Firebase", level: 75 },
        { icon: <SiGo className="text-blue-500 text-5xl" />, name: "Go", level: 75 }
    ],
    // "DevOps & Others": [
    //     { icon: <FaDocker className="text-blue-500 text-5xl" />, name: "Docker", level: 80 },
    //     { icon: <SiVercel className="text-black text-5xl" />, name: "Vercel", level: 70 },
    // ],
    // "Interpersonal Skills": [
    //     { icon: "🤝", name: "Teamwork", level: 95 },
    //     { icon: "🗣️", name: "Communication", level: 90 },
    //     { icon: "🧩", name: "Problem Solving", level: 85 },
    //     { icon: "⏳", name: "Time Management", level: 90 },
    //     { icon: "🔄", name: "Adaptability", level: 98 },
    //     { icon: "👑", name: "Leadership", level: 82 },
    //     { icon: "🎨", name: "Creativity", level: 100 },
    //     { icon: "🤔", name: "Critical Thinking", level: 85 },
    //     { icon: "💡", name: "Emotional Intelligence", level: 75 },
    //     { icon: "⚖️", name: "Conflict Resolution", level: 92 }
    // ]
};

const interpersonalSkills = [
    { name: "Communication", icon: "🗣️", level: 90 },
    { name: "Teamwork", icon: "🤝", level: 85 },
    { name: "Leadership", icon: "🎯", level: 80 },
    { name: "Problem Solving", icon: "🧠", level: 88 },
    { name: "Time Management", icon: "⏳", level: 82 },
    { name: "Adaptability", icon: "🔄", level: 87 },
];

const Skills = () => {
    return (
        <section className="p-12 text-white min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-5xl font-extrabold mb-10 tracking-wide text-green-400">My Skills</h2>

            {/* Technical Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl">
                {Object.entries(skillsCategories).map(([category, skills]) => (
                    <div key={category} className="p-6 bg-gray-800 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-white border-b-2 border-gray-600 pb-2 text-center">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center text-center relative group">
                                    <span className="text-4xl">{skill.icon}</span>
                                    <p className="text-lg font-medium">{skill.name}</p>

                                    {/* Hover-activated Progress Bar */}
                                    <div className="w-24 h-1 bg-gray-600 rounded-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="h-1 bg-green-400 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Interpersonal Skills - Flex Layout Below */}
            <h2 className="text-4xl font-extrabold mt-12 mb-6 tracking-wide text-accent">Interpersonal Skills</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                {interpersonalSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-center relative group">
                        <span className="text-4xl">{skill.icon}</span>
                        <p className="text-lg font-medium">{skill.name}</p>

                        {/* Hover-activated Progress Bar */}
                        <div className="w-24 h-1 bg-gray-600 rounded-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="h-1 bg-blue-400 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};




// const Skills = () => {
//     return (
//         <section className="p-16 text-white min-h-screen flex flex-col items-center">
//             <h2 className="text-7xl font-extrabold mb-16 tracking-wide text-accent">My Skills</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
//                 {Object.entries(skillsCategories).map(([category, skills]) => (
//                     <div key={category} className="p-8">
//                         <h3 className="text-4xl font-bold mb-6 text-white border-b-4 border-gray-600 pb-3 text-center">{category}</h3>
//                         <div className="flex flex-wrap gap-6 justify-center">
//                             {skills.map((skill, index) => (
//                                 <div key={index} className="flex flex-col items-center text-center relative group">
//                                     <span className="text-4xl">{skill.icon || "⚡"}</span> {/* Increased size */}
//                                     <p className="mt-3 text-xl font-medium text-white">{skill.name}</p>
//                                     <div className="absolute bottom-[-10px] left-0 w-full h-2 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all">
//                                         <div className="h-2 bg-green-400 rounded-full" style={{ width: `${skill.level}%` }}></div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

export default Skills;

// "use client"

// import { BsArrowDownRight } from 'react-icons/bs'
// import Link from "next/link";

// const skills = [
//   {
//     name: "HTML",
//     level: "90%",
//   },
//   {
//     name: "CSS",
//     level: "80%",
//   },
//   {
//     name: "JavaScript",
//     level: "70%",
//   },
//   {
//     name: "React",
//     level: "60%",
//   },
//   {
//     name: "Node.js",
//     level: "50%",
//   },
//   {
//     name: "MongoDB",
//     level: "40%",
//   },
//   {
//     name: "Express",
//     level: "30%",
//   },
//   {
//     name: "Next.js",
//     level: "20%",
//   },
// ];

// import { motion } from "framer-motion";

// const Skills = () => {
//   return (
//     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
//           }}
//           className="grod grid-cols-1 md:grid-cols-2 gap-[60px]"
//         >
//           {skills.map((skill, index) => {
//             return (
//               <div key={index} className="flex-1 flex felx-col justify-center gap-6 group">
//                 <div>{skill.name}</div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };


// export default Skills;
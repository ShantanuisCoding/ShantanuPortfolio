"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-20">


<motion.div
    initial={{ opacity: 0 }}
    animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
    }}
    className="relative w-[95vw] max-w-[450px] h-auto flex justify-center items-center"
>

                {/* Circle Animation (Surrounding the Image & Centered) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[110%] h-[110%] flex justify-center items-center"
                >
                    <motion.svg
                        className="w-full h-full"
                        fill="transparent"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="300"
                            cy="300"
                            r="280"
                            stroke="#00ff99"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    </motion.svg>
                </motion.div>

                {/* Image (Inside the Circle & Centered) */}
                <div className="relative w-[105%] max-w-[650px]">
                    <Image
                        src="/assets/cropped_image.png"
                        priority
                        quality={100}
                        width={350}
                        height={350}
                        alt="Profile Image"
                        className="object-contain w-full h-auto mix-blend-screen z-10"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Photo;

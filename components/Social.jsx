"use client";
import Link from 'next/link';

// import CIcon from '@coreui/icons-react';
// import { cibLeetcode } from '@coreui/icons';
import { AiFillCode } from "react-icons/ai";

import { FaGithub, FaLinkedin, FaInstagram, } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/ShantanuisCoding" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/shaaantaaanu/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/shaaanttaaanu?igsh=ZDgyNGFhYnRia3U=" },
    // {
    //     icon: (
    //         <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center">
    //             <CIcon icon={cibLeetcode} className="w-3 h-3 text-white" />
    //         </div>
    //     ),
    //     path: "https://leetcode.com/u/Shaaantaaanu/"
    // },
    {
        icon: (
            <div className="w-4 h-4  flex items-center justify-center">
                <AiFillCode className="text-accent w-4 h-4"/>
            </div>
        ),
        path: "https://codolio.com/profile/Shaaantaaanu",
    }

];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Social;


"use client";
import Link from 'next/link';
import CIcon from '@coreui/icons-react';
import { cibLeetcode } from '@coreui/icons';

import { FaGithub, FaLinkedin, FaInstagram, } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: ""},
    { icon: <FaLinkedin />, path: ""},
    { icon: <FaInstagram />, path: ""},
    { icon: (
        <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <CIcon icon={cibLeetcode} className="w-3 h-3 text-white" />
            </div>
    ), 
    path: ""  },
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon} 
                    </Link>
                );
            })}
            </div>
    );
}

export default Social;

{/* <CIcon icon={cibLeetcode} /> */}
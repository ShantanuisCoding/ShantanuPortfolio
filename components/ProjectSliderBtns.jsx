"use client";

import { useSwiper } from "swiper/react";
import "swiper/css";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const ProjectSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    
    if(!swiper) return null;

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div>
    );
};

export default ProjectSliderBtns;
// "use client";

// import { useSwiper } from "swiper/react";
// import "swiper/css";
// import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// const ProjectSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
//     const swiper = useSwiper();

//     if (!swiper) return null;

//     return (
//         <div className={containerStyles}>
//             {/* Left Arrow */}
//             <button
//                 className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/50 text-white p-4 rounded-full"
//                 onClick={() => swiper.slidePrev()}
//             >
//                 <PiCaretLeftBold className="text-4xl" />
//             </button>

//             {/* Right Arrow */}
//             <button
//                 className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/50 text-white p-4 rounded-full"
//                 onClick={() => swiper.slideNext()}
//             >
//                 <PiCaretRightBold className="text-4xl" />
//             </button>
//         </div>
//     );
// };

// export default ProjectSliderBtns;


// <button className={btnStyles} onClick={() => swiper.slidePrev()}>
//                 <PiCaretLeftBold className={iconStyles} />
//             </button>
//             <button className={btnStyles} onClick={() => swiper.slideNext()}>
//                 <PiCaretRightBold className={iconStyles} />
//             </button>


"use client";

import { useSwiper } from "swiper/react";
import "swiper/css";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const ProjectSliderBtns = () => {
    const swiper = useSwiper();

    if (!swiper) return null;

    return (
        <>
            {/* Left Arrow - Extreme Left of the Page */}
            <button
                className="fixed left-5 top-1/2 -translate-y-1/2 z-50 bg-transparent hover:bg-accent text-white p-4 rounded-full  shadow-lg"
                onClick={() => swiper.slidePrev()}
            >
                <PiCaretLeftBold className="text-4xl" />
            </button>

            {/* Right Arrow - Extreme Right of the Page */}
            <button
                className="fixed right-5 top-1/2 -translate-y-1/2 z-50 bg-transparent hover:bg-accent text-white p-4 rounded-full shadow-lg"
                onClick={() => swiper.slideNext()}
            >
                <PiCaretRightBold className="text-4xl" />
            </button>
        </>
    );
};

export default ProjectSliderBtns;

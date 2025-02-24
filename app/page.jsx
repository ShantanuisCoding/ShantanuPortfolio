import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Shantanu Singh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in creating seamless digital experiences and have
              expertise in a wide range of programming languages and
              technologies, including AI, blockchain, and IoT.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              {/* Social Icons Wrapper - Fixed Alignment */}
              <div className="flex items-center">
                <Social
                  containerStyles="flex gap-6 items-center"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

// import { FiDownload } from "react-icons/fi";
// import { Button } from "@/components/ui/button";

// import Social from "@/components/Social";
// import Photo from "@/components/Photo";
// import Stats from "@/components/Stats";

// const Home = () => {
//   return (
//     <section className="h-full py-12">
//       <div className="container mx-auto h-full">
//         <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:py-12">
          
//           {/* Right - Text Section (Appears Below Image on Small Screens) */}
//           <div className="text-center xl:text-left flex-1 px-6 xl:px-12 order-2 xl:order-1">
//             <span className="text-lg sm:text-xl">Software Developer</span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//               Hello, I&apos;m <br />
//               <span className="text-accent">Shantanu Singh</span>
//             </h1>
//             <p className="max-w-[500px] mb-8 text-white/80 text-sm sm:text-base">
//               I specialize in creating seamless digital experiences and have
//               expertise in AI, blockchain, and IoT.
//             </p>
            
//             {/* Buttons & Socials */}
//             <div className="flex flex-col xl:flex-row items-center gap-6">
//               <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
//                 <span>Download CV</span>
//                 <FiDownload className="text-xl" />
//               </Button>

//               {/* Social Icons */}
//               <Social
//                 containerStyles="flex gap-6 items-center"
//                 iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
//               />
//             </div>
//           </div>
          
//           {/* Left - Photo Section (Appears First on Small Screens) */}
//           <div className="flex-1 flex justify-center xl:justify-end order-1 xl:order-2">
//             <Photo />
//           </div>
          
//         </div>
//       </div>
      
//       {/* Stats Section */}
//       <Stats />
//     </section>
//   );
// };

// export default Home;

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

import Social from "@/components/Social";
import Photo from "@/components/Photo";

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
    </section>
  );
};

export default Home;

import React from "react";
import { CardWithGradient } from "src/components/CardWithGradient";
import Footer from "./Footer";
import { SpotlightButton } from "src/fancy/components/button/spotlight-button";
import { IconPhone } from "@tabler/icons-react";

const About: React.FC = () => {
  return (
    <>
      <div className="relative min-h-[100vh] bg-white dark:bg-black flex">
        <div className="w-full p-8 flex flex-col justify-center">
          <CardWithGradient colors={["#FF4D4D", "#F9CB28", "#FF8F00"]}>
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="mb-6 text-center">
                About Me
              </h1>
              <p className="text-lg text-black dark:text-white">
                I am a passionate full-stack developer with a focus on creating
                user-friendly and accessible web applications. My journey in tech
                has been driven by a desire to solve real-world problems through
                innovative solutions.
              </p>
              <div className="group relative inline-block mt-4">
                <a href="https://cal.com/coderhema/15min">
                  <SpotlightButton icon={<IconPhone size={16} stroke={1.5} />}>
                    Book a call
                  </SpotlightButton>
                </a>
              </div>
            </div>
          </CardWithGradient>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

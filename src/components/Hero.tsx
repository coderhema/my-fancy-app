import React, { useRef, useEffect } from "react";
import BreathingText from "@/fancy/components/text/breathing-text";
import ScrambleHover from "@/fancy/components/text/scramble-hover";
import ScrambleIn, {
  ScrambleInHandle,
} from "@/fancy/components/text/scramble-in";
import { CardWithGradient } from "@/components/CardWithGradient";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import { SpotlightButton } from "@/fancy/components/button/spotlight-button";
import {
  IconFileText,
  IconUserCircle,
  IconMoon,
  IconSun,
  IconPhone,
} from "@tabler/icons-react";
import { SparklesCore } from "@/fancy/components/particles/sparkles";

import { IconButton } from "./IconButton";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { ScrollProgress } from "@/fancy/components/background/scrollprogress";
import { useDarkMode } from "@/fancy/components/hooks/useDarkMode";

const Hero: React.FC = () => {
  const descriptionRef = useRef<ScrambleInHandle>(null);
  const { theme, setTheme } = useDarkMode();

  useEffect(() => {
    // Start animation after a delay
    setTimeout(() => {
      descriptionRef.current?.start();
    }, 1000);
  }, []);

  return (
    <>
      <ScrollProgress className="top-0" />

      {/* Logo Group */}
      <div className="fixed top-4 md:top-8 left-4 md:left-8 z-50">
        <h1 className="relative z-10 text-center font-semibold font-overusedGrotesk text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          coderhema
        </h1>
        <div className="relative w-28 h-8">
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[#FF4D4D] to-transparent h-[2px] w-full blur-sm" />

          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[#FF4D4D] to-transparent h-px w-full" />

          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[#F9CB28] to-transparent h-[2px] w-full blur-sm" />

          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[#FF8F00] to-transparent h-px w-full" />

          {/* Sparkles */}
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={0.5}
            particleDensity={600}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>

      <div className="relative min-h-[150vh] bg-white dark:bg-black">
        <div className="sticky top-0 pt-8 md:pt-16 pb-16 md:pb-32 z-10 w-full bg-white dark:bg-black">
          <div className="w-[95%] md:w-[90%] max-w-4xl mx-auto aspect-[16/9]">
            <CardWithGradient colors={["#FF4D4D", "#F9CB28", "#FF8F00"]}>
              <div className="flex flex-col items-center justify-center h-full p-8">
                <div className="text-center">
                  <h1 className="mb-6">
                    <BreathingText
                      labels={[
                        "Hello, I'm Tolu ",
                        "I build Websites",
                        "and Apps",
                      ]}
                      className="font-overusedGrotesk text-[clamp(2rem,8vw,5rem)] text-black dark:text-white
                                leading-[1.1] md:leading-[1.2] break-words tracking-tight
                                [text-wrap:balance] px-2 md:px-0"
                      fromFontVariationSettings="'wght' 100, 'slnt' 0"
                      toFontVariationSettings="'wght' 800, 'slnt' -10"
                      transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                      }}
                      staggerDuration={0.08}
                      repeatDelay={0.5}
                      staggerFrom="first"
                    />
                  </h1>
                </div>

                <motion.div
                  className="group relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
<a href="https://cal.com/coderhema/15min">
  <SpotlightButton icon={<IconPhone size={16} stroke={1.5} />}>
                    <ScrambleHover
                      text={"Book a call"}
                      scrambleSpeed={10}
                      sequential={true}
                      revealDirection="center"
                      useOriginalCharsOnly={false}
                      className="font-overusedGrotesk font-light"
                      characters="abcdefghijklmnopqrstuvwxyz"
                    />
  </SpotlightButton>
</a>
                </motion.div>
              </div>
            </CardWithGradient>
          </div>

          <div className="w-[95%] md:w-[90%] max-w-4xl mx-auto mt-6 md:mt-12 px-4 md:px-0">
            <ScrambleIn
              ref={descriptionRef}
              text="I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using cutting-edge web technologies."
              scrambleSpeed={3}
              scrambledLetterCount={6}
              autoStart={false}
              className="tracking-wide md:text-lg font-[200] text-black dark:text-white font-overusedGrotesk leading-relaxed break-words"
            />
          </div>
        </div>

        <div className="relative z-20 bg-white">
          <ProjectSection />
        </div>

        <Tooltip.Provider delayDuration={200}>
          <div className="fixed top-4 md:top-8 right-4 md:right-8 px-2 rounded-full bg-white dark:bg-black flex gap-2 md:gap-4 z-50 border border-neutral-200 dark:border-neutral-800">
            <IconButton
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              icon={
                theme === "light" ? (
                  <IconMoon
                    size={24}
                    stroke={1.5}
                    className="text-black dark:text-white"
                  />
                ) : (
                  <IconSun
                    size={24}
                    stroke={1.5}
                    className="text-black dark:text-white"
                  />
                )
              }
              tooltip={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            />

            <IconButton
              href="/documents"
              icon={
                <IconFileText
                  size={24}
                  stroke={1.5}
                  className="text-black dark:text-white"
                />
              }
              tooltip="Documents"
              className="text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            />

            <IconButton
              href="/about"
              icon={
                <IconUserCircle
                  size={24}
                  stroke={1.5}
                  className="text-black dark:text-white"
                />
              }
              tooltip="About"
              className="text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            />
          </div>
        </Tooltip.Provider>
      </div>
      <Footer />
    </>
  );
};

export default Hero;

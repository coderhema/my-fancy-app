import React, { useState, useRef, useEffect } from 'react';
import BreathingText from '@/fancy/components/text/breathing-text';
import ScrambleHover from '@/fancy/components/text/scramble-hover';
import ScrambleIn, { ScrambleInHandle } from "@/fancy/components/text/scramble-in";
import { CardWithGradient } from '@/components/CardWithGradient';
import ProjectSection from './ProjectSection';
import { SpotlightButton } from '@/fancy/components/button/spotlight-button';
import { IconFileText, IconUserCircle } from '@tabler/icons-react';

import { IconButton } from './IconButton';
import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { ScrollProgress } from '@/fancy/components/background/scrollprogress';

const Hero: React.FC = () => {
  const descriptionRef = useRef<ScrambleInHandle>(null);

  useEffect(() => {
    // Start animation after a delay
    setTimeout(() => {
      descriptionRef.current?.start();
    }, 1000);
  }, []);

  return (
    <>
      <ScrollProgress className="top-0" />
      <div className="relative min-h-[150vh] bg-white">
        <div className="sticky top-0 pt-8 md:pt-16 pb-16 md:pb-32 z-10 w-full bg-white">
          <div className="w-[95%] md:w-[90%] max-w-4xl mx-auto aspect-[16/9]">
            <CardWithGradient colors={["#FF4D4D", "#F9CB28", "#FF8F00"]}>
              <div className="flex flex-col items-center justify-center h-full p-8">
                <div className="text-center">
                  <h1 className="mb-6">
                    <BreathingText
                      labels={["Hello, I'm Tolu ", "I build Websites", "and Apps"]}
                      className="font-overusedGrotesk text-[clamp(2rem,8vw,5rem)] text-black 
                                leading-[1.1] md:leading-[1.2] break-words tracking-tight
                                [text-wrap:balance] px-2 md:px-0"
                      fromFontVariationSettings="'wght' 100, 'slnt' 0"
                      toFontVariationSettings="'wght' 800, 'slnt' -10"
                      transition={{ 
                        duration: 2.5, 
                        ease: "easeInOut" 
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
                  <SpotlightButton>
                    <ScrambleHover
                      text={"Book a call"}
                      scrambleSpeed={10}
                      sequential={true}
                      revealDirection="center"
                      useOriginalCharsOnly={false}
                      className="font-overusedGrotesk font-light"
                      characters="abcdefghijklmnopqrstuvwxyz"
                    /> </SpotlightButton>
                </motion.div>
              </div>
            </CardWithGradient>
          </div>

          <div className="w-[95%] md:w-[90%] max-w-4xl mx-auto mt-6 md:mt-12 px-4 md:px-0">
            <ScrambleIn
              ref={descriptionRef}
              text="I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using cutting-edge web technologies."
              scrambleSpeed={5}
              scrambledLetterCount={6}
              autoStart={false}
              className="text-base md:text-lg font-overusedGrotesk leading-relaxed break-words"
            />
          </div>
        </div>

        <div className="relative z-20 bg-white">
          <ProjectSection />
        </div>

        <Tooltip.Provider delayDuration={200}>
          <div className="fixed top-4 md:top-8 right-4 md:right-8 px-2 rounded-full bg-white flex gap-2 md:gap-4 z-50">
          <IconButton
          href="/documents" 
          icon={<IconFileText size={24} stroke={1.5} />}
          tooltip="Documents"
          />
          <IconButton
          href="/about"
          icon={<IconUserCircle size={24} stroke={1.5} />} 
          tooltip="About"
          />
          </div>
        </Tooltip.Provider>
      </div>
    </>
  );
};

export default Hero;
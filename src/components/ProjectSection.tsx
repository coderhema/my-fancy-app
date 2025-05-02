import React from "react";
import { Timeline } from "src/fancy/components/background/timeline"; // Corrected import statement

interface Project {
  year: string;
  name: string; // Added name field
  description: string;
  images: string[];
  techStack: string[];
}

const projects: Project[] = [
  {
    year: "2023",
    name: "PollMaster", // Added project name
    description: "Developed full-stack applications and APIs",
    images: [
      "/images/Polls.png",
      "/images/Polls2.png",
    ],

    techStack: ["Node.js", "Express", "MongoDB"],
  },
  {
    year: "2023",
    name: "G.A.S", // Added project name
    description: "Built modern web applications with React and TypeScript",
    images: [
      "/images/gas.png",
      "/images/gas2.png",
    ],

    techStack: ["React", "TypeScript", "Tailwind"],
  },
  {
    year: "2023",
    name: "QuickVocab", // Added project name
    description: "Built modern web applications with React and TypeScript",
    images: [
      "/images/quick.png",
      "/images/quick2.png",
    ],

    techStack: ["React", "TypeScript", "Tailwind"],
  },
  {
    year: "2024",
    name: "EVII", // Added project name
    description: "Built modern web applications with React and TypeScript",
    images: [
      "/images/EVII.png",
      "/images/evii1.png",
    ],

    techStack: ["React", "TypeScript", "Tailwind"],
  },
];

const ProjectSection = () => {
  const projectData = projects.map(
    ({ year, name, description, images, techStack }) => ({
      title: year,
      content: (
        <div>
          <h1 className="font-overusedGrotesk text-neutral-800 dark:text-neutral-200 text-lg md:text-md font-bold mb-2">
            {name}
          </h1>
          <p className="font-overusedGrotesk text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-light mb-8">
            {description}
          </p>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-4">
            {images.slice(0, 2).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Project ${index + 1}`}
                className="rounded-lg object-cover h-44 lg:h-60 w-full
                       border border-neutral-200 dark:border-neutral-800
                       transition-colors hover:border-neutral-300
                       dark:hover:border-neutral-700"
              />
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="md:hidden -mx-4">
            <div className="flex overflow-x-auto snap-x snap-mandatory px-4 gap-4 pb-6 scrollbar-hide">
              {images.map((src, index) => (
                <div key={index} className="flex-none w-[85%] snap-center">
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="rounded-lg object-cover h-48 w-full
                           border border-neutral-200 dark:border-neutral-800
                           transition-colors hover:border-neutral-300
                           dark:hover:border-neutral-700"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"
                />
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 flex gap-2 flex-wrap">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="font-overusedGrotesk px-3 py-1 text-black dark:text-white bg-gray-200 dark:bg-gray-800/40
                       rounded-full text-xs transition-colors
                       hover:bg-gray-400 dark:hover:bg-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    }),
  );

  return (
    <div className="w-full font-overusedGrotesk">
      <Timeline data={projectData} />
    </div>
  );
};

export default ProjectSection;

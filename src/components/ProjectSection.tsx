import React from "react";
import { Timeline } from "@/fancy/components/background/timeline";

interface Project {
  year: string;
  description: string;
  images: string[];
  techStack: string[];
}

const projects: Project[] = [
  {
    year: "2024",
    description: "Built modern web applications with React and TypeScript",
    images: [
      "/projects/project1.webp",
      "/projects/project2.webp",
      "/projects/project3.webp"
    ],
    techStack: ["React", "TypeScript", "Tailwind"]
  },
  {
    year: "2023",
    description: "Developed full-stack applications and APIs",
    images: [
      "/projects/project4.webp",
      "/projects/project5.webp",
      "/projects/project6.webp"
    ],
    techStack: ["Node.js", "Express", "MongoDB"]
  }
];

const ProjectSection = () => {
  const projectData = projects.map(({ year, description, images, techStack }) => ({
    title: year,
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
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
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 
                       rounded-full text-xs transition-colors
                       hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={projectData} />
    </div>
  );
};

export default ProjectSection;
import React from "react";
import { Timeline } from "@/fancy/components/background/timeline";

const ProjectSection = () => {
  const projectData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built modern web applications with React and TypeScript
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/project1.webp"
              alt="Project 1"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <img
              src="/projects/project2.webp"
              alt="Project 2"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
              Tailwind
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed full-stack applications and APIs
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/project3.webp"
              alt="Project 3"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <img
              src="/projects/project4.webp"
              alt="Project 4"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
              Node.js
            </span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
              Express
            </span>
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
              MongoDB
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={projectData} />
    </div>
  );
};

export default ProjectSection;
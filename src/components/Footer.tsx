import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/coderhema"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                initial: { y: 0, rotate: 0 },
                hover: {
                  y: -8,
                  rotate: [-8, 8, 0],
                  transition: {
                    rotate: { duration: 0.5, ease: "easeInOut" },
                    y: { duration: 0.3, ease: "easeOut" },
                  },
                },
              }}
              initial="initial"
              whileHover="hover"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <IconBrandGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/coderhema"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                initial: { y: 0, rotate: 0 },
                hover: {
                  y: -8,
                  rotate: [-8, 8, 0],
                  transition: {
                    rotate: { duration: 0.5, ease: "easeInOut" },
                    y: { duration: 0.3, ease: "easeOut" },
                  },
                },
              }}
              initial="initial"
              whileHover="hover"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <IconBrandLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://x.com/coderhema"
              variants={{
                initial: { y: 0, rotate: 0 },
                hover: {
                  y: -8,
                  rotate: [-8, 8, 0],
                  transition: {
                    rotate: { duration: 0.5, ease: "easeInOut" },
                    y: { duration: 0.3, ease: "easeOut" },
                  },
                },
              }}
              initial="initial"
              whileHover="hover"
              className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <IconBrandX size={24} />
            </motion.a>
          </div>

          <div className="text-center md:text-right text-sm text-neutral-600 dark:text-neutral-400">
            <a
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <p>
              &copy; {new Date().getFullYear()} coderhema. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

interface IconButtonProps {
  href?: string;
  icon: ReactNode;
  tooltip: string;
  onClick?: () => void;
  className?: string;
}

const iconHoverVariants = {
  initial: {
    y: 0,
    rotate: 0,
  },
  hover: {
    y: -8,
    rotate: [-8, 8, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: "easeInOut"
      },
      y: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }
};

const tooltipAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
};

export const IconButton: React.FC<IconButtonProps> = ({ 
  href, 
  icon, 
  tooltip, 
  onClick,
  className = '' 
}) => {
  const ButtonWrapper = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <ButtonWrapper
            {...props}
            variants={iconHoverVariants}
            initial="initial"
            whileHover="hover"
            className={`p-3 rounded-full
                       transition-colors ${className}`}
          >
            {icon}
          </ButtonWrapper>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            asChild
            sideOffset={5}
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tooltipAnimation}
              className="bg-black px-4 py-2 rounded-md text-white text-xs 
                         font-medium shadow-lg"
            >
              {tooltip}
              <Tooltip.Arrow className="fill-black" />
            </motion.div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
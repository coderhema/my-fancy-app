import React from 'react';
import { motion } from 'framer-motion';
import AnimatedGradient from '@/fancy/components/background/animated-gradient';

interface CardWithGradientProps {
  children: React.ReactNode;
  colors?: string[];
  delay?: number;
}

export const CardWithGradient: React.FC<CardWithGradientProps> = ({
  children,
  colors = ["#3B82F6", "#60A5FA", "#93C5FD"],
  delay = 0.2
}) => {
  return (
    <motion.div
      className="relative overflow-hidden py-10 px-10 mt-20 rounded-2xl bg-white/10 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  );
};
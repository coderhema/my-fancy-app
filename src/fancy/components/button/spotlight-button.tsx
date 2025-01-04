"use client";

import React from 'react';

interface SpotlightButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const SpotlightButton: React.FC<SpotlightButtonProps> = ({ children, icon }) => {
  return (
    <div style={{ transform: "none" }}>
      <button className="group relative inline-block cursor-pointer rounded-xl bg-zinc-900 p-px font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10">
          <span>{children}</span>
          {icon && <div className="w-4 h-4 text-white">{icon}</div>}
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#FF4D4D]/0 via-[#F9CB28]/90 to-[#FF8F00]/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </div>
  );
}

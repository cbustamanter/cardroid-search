"use client";
import { Moon, SunMoon } from "lucide-react";
import React from "react";

interface ThemeButtonProps {}

export const ThemeButton: React.FC<ThemeButtonProps> = ({}) => {
  //   const mq = window.matchMedia("(prefers-color-scheme: dark)");
  //   console.log(mq);
  return (
    <>
      <SunMoon size={16} />
      <Moon size={16} />
    </>
  );
};

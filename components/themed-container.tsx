"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";
import { cn } from "@/lib/utils";

interface ThemedContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ThemedContainer({ children, className }: ThemedContainerProps) {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if theme is dark or if system theme prefers dark
    if (theme === "dark") {
      setIsDarkMode(true);
    } else if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      
      // Listen for changes in system preference
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      setIsDarkMode(false);
    }
  }, [theme]);
  
  return (
    <div
      className={cn(
        isDarkMode
          ? "bg-[url('/images/bkg-dark.png')]"
          : "bg-[url('/images/bkg-light.png')]",
        "bg-left-top bg-repeat",
        className
      )}
    >
      {children}
    </div>
  );
} 
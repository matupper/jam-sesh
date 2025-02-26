"use client";

import Image from "next/image";
import { useTheme } from "@/context/theme-context";
import { useEffect, useState } from "react";

export default function MyLogo() {
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
  
  // Determine which logo to show based on isDarkMode
  const logoSrc = isDarkMode
    ? "/images/afol-logo-dark.png" 
    : "/images/afol-logo-light.png";
  
  return (
    <Image
      src={logoSrc}
      alt="AFOL Logo"
      width={112}
      height={38}
      style={{ margin: "10px 0px 0px 0px" }}
    />
  );
} 
"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={isDarkMode ? "ghost" : "secondary"}
          size="icon" 
          className={cn(
            "h-9 w-9 rounded-full",
            isDarkMode 
              ? "bg-gray-800 border border-gray-700 hover:bg-gray-700 text-gray-100" 
              : "bg-white border border-gray-200 shadow-sm"
          )}
        >
          {isDarkMode ? (
            <Moon className="h-[1.2rem] w-[1.2rem] text-gray-100" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className={cn(
          isDarkMode && "bg-gray-800 border-gray-700"
        )}
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={cn(
            isDarkMode && "hover:bg-gray-700 focus:bg-gray-700 text-gray-100"
          )}
        >
          <Sun className={cn("mr-2 h-4 w-4", isDarkMode && "text-gray-100")} />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={cn(
            isDarkMode && "hover:bg-gray-700 focus:bg-gray-700 text-gray-100"
          )}
        >
          <Moon className={cn("mr-2 h-4 w-4", isDarkMode && "text-gray-100")} />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={cn(
            isDarkMode && "hover:bg-gray-700 focus:bg-gray-700 text-gray-100"
          )}
        >
          <Laptop className={cn("mr-2 h-4 w-4", isDarkMode && "text-gray-100")} />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
"use client";

import React from "react";

interface AppContentProps {
  children: React.ReactNode;
}

export const AppContent = ({ children }: AppContentProps) => {
  return (
    <>
      <main>
        {/* Example: Theme Toggle Button */}
        {/* Theme toggle is now in NavBar */}
        {children}
      </main>
    </>
  );
}; 
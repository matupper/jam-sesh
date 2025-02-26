import React from 'react';
import { useTheme } from '@/context/theme-context';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccessibleErrorProps {
  message: string;
  className?: string;
}

export function AccessibleError({ message, className }: AccessibleErrorProps) {
  const { theme } = useTheme();
  
  // If no message, don't render anything
  if (!message) return null;
  
  return (
    <div 
      className={cn(
        "error-message flex items-center gap-2 text-sm mt-1 p-1",
        theme === "dark" ? "text-rose-300" : "text-red-600",
        className
      )}
      role="alert" // Accessibility attribute for screen readers
      aria-live="polite" // Screen readers will announce this when it appears
    >
      <AlertTriangle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
} 
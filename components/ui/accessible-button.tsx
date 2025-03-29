import React from 'react';
import { useTheme } from '@/context/theme-context';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function AccessibleButton({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  isLoading,
  leftIcon,
  rightIcon,
  disabled,
  ...props 
}: AccessibleButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Base classes for all buttons
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // Size classes
  const sizeClasses = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 py-2 px-4",
    lg: "h-11 px-8 text-base"
  };
  
  // Variant classes for both light and dark modes
  const variantClasses = {
    primary: isDark 
      ? "bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500"
      : "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary",
    secondary: isDark
      ? "bg-stone-700 text-white hover:bg-stone-600 focus-visible:ring-stone-700"
      : "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
    outline: isDark
      ? "border border-gray-500 bg-transparent hover:bg-gray-800 focus-visible:ring-gray-500"
      : "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-input",
    ghost: isDark
      ? "bg-transparent hover:bg-gray-800 hover:text-gray-100 focus-visible:ring-gray-500"
      : "bg-transparent hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent",
    destructive: isDark
      ? "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600"
      : "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive"
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        isDark && "focus-visible:ring-offset-gray-900",
        isLoading && "cursor-not-allowed",
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {!isLoading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </button>
  );
} 
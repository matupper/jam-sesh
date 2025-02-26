import React from 'react';
import { useTheme } from '@/context/theme-context';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AccessibleError } from './accessible-error';

// Accessible Input with better dark mode contrast
export function AccessibleInput({
  id,
  label,
  error,
  className,
  darkModeClass,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  darkModeClass?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="space-y-2">
      {label && (
        <Label 
          htmlFor={id} 
          className={cn(
            isDark && "text-gray-200 font-medium",
          )}
        >
          {label}
        </Label>
      )}
      <Input
        id={id}
        className={cn(
          error && "border-red-400 dark:border-red-400",
          isDark && "bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500",
          isDark && darkModeClass,
          className
        )}
        {...props}
      />
      {error && <AccessibleError message={error} />}
    </div>
  );
}

// Accessible Textarea with better dark mode contrast
export function AccessibleTextarea({
  id,
  label,
  error,
  className,
  darkModeClass,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  darkModeClass?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="space-y-2">
      {label && (
        <Label 
          htmlFor={id} 
          className={cn(
            isDark && "text-gray-200 font-medium",
          )}
        >
          {label}
        </Label>
      )}
      <Textarea
        id={id}
        className={cn(
          error && "border-red-400 dark:border-red-400",
          isDark && "bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500",
          isDark && darkModeClass,
          className
        )}
        {...props}
      />
      {error && <AccessibleError message={error} />}
    </div>
  );
}

// Accessible Select with better dark mode contrast
export function AccessibleSelect({
  id,
  label,
  error,
  children,
  className,
  darkModeClass,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  children: React.ReactNode;
  darkModeClass?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="space-y-2">
      {label && (
        <Label 
          htmlFor={id} 
          className={cn(
            isDark && "text-gray-200 font-medium",
          )}
        >
          {label}
        </Label>
      )}
      <select
        id={id}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-400 dark:border-red-400",
          isDark && "bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500",
          isDark && darkModeClass,
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <AccessibleError message={error} />}
    </div>
  );
}

// Accessible Checkbox with better dark mode contrast
export function AccessibleCheckbox({
  id,
  label,
  error,
  className,
  darkModeClass,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  darkModeClass?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="flex items-start space-x-2">
      <input
        id={id}
        type="checkbox"
        className={cn(
          "h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary",
          isDark && "bg-gray-700 border-gray-600 checked:bg-blue-500 focus:ring-blue-500",
          isDark && darkModeClass,
          className
        )}
        {...props}
      />
      {label && (
        <Label 
          htmlFor={id} 
          className={cn(
            "text-sm leading-tight",
            isDark && "text-gray-200",
          )}
        >
          {label}
        </Label>
      )}
      {error && <AccessibleError message={error} className="mt-1 ml-6" />}
    </div>
  );
} 
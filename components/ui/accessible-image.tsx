import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { useTheme } from '@/context/theme-context';
import { cn } from '@/lib/utils';

interface AccessibleImageProps extends Omit<ImageProps, 'alt'> {
  alt: string; // Make alt required
  className?: string;
  darkModeClass?: string;
  adjustBrightness?: boolean;
  contrastToggle?: boolean;
}

export function AccessibleImage({ 
  alt, 
  className, 
  darkModeClass,
  adjustBrightness = true,
  contrastToggle = false,
  ...props 
}: AccessibleImageProps) {
  const { theme } = useTheme();
  const [highContrast, setHighContrast] = useState(false);
  
  const isDark = theme === 'dark';
  
  // Base classes for the image
  const imageClasses = cn(
    className,
    isDark && darkModeClass,
    isDark && adjustBrightness && !props.src.toString().includes('logo') && 'brightness-90',
    highContrast && 'contrast-125 saturate-125'
  );
  
  return (
    <div className="relative group">
      <Image 
        alt={alt} 
        className={imageClasses}
        {...props} 
      />
      
      {contrastToggle && (
        <button
          onClick={() => setHighContrast(!highContrast)}
          className={cn(
            "absolute bottom-2 right-2 p-1 rounded-full text-xs",
            isDark 
              ? "bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700" 
              : "bg-black/40 text-white",
            "opacity-0 group-hover:opacity-100 transition-opacity",
            "focus:opacity-100 focus:outline-none focus-visible:ring-2"
          )}
          aria-label={highContrast ? "Disable high contrast" : "Enable high contrast"}
          type="button"
        >
          {highContrast ? "A-" : "A+"}
        </button>
      )}
    </div>
  );
} 
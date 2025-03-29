"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Music } from "lucide-react";

interface PlateFooterProps {
  showButton?: boolean;
}

export function PlateFooter({ showButton = true }: PlateFooterProps) {
  return (
    <div className="mt-auto flex flex-col items-center gap-8 pt-8 text-center">
      {showButton && (
        <Link href="http://app.afol.com/login">
          <Button className="bg-red-600 hover:bg-red-500 text-white">
            Register for early access!
          </Button>
        </Link>
      )}
      <div className="flex flex-col items-center gap-4">
        <p className="text-black font-bold">
          Follow us to get updates on our imminent launch.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://x.com/afoldotcom"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
            aria-label="Follow us on X (Twitter)"
          >
            <Twitter 
              size={24} 
              className="text-gray-500 transition-all group-hover:text-blue-400" 
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572390325285"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
            aria-label="Follow us on Facebook"
          >
            <Facebook 
              size={24} 
              className="text-gray-500 transition-all group-hover:text-blue-600" 
            />
          </a>
          <a
            href="https://www.instagram.com/afoldotcom/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
            aria-label="Follow us on Instagram"
          >
            <Instagram 
              size={24} 
              className="text-gray-500 transition-all group-hover:text-pink-500" 
            />
          </a>
          <a
            href="https://www.tiktok.com/@afoldotcom"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
            aria-label="Follow us on TikTok"
          >
            <Music 
              size={24} 
              className="text-gray-500 transition-all group-hover:text-black" 
            />
          </a>
          <a
            href="https://youtube.com/@afoldotcom"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
            aria-label="Subscribe to our YouTube channel"
          >
            <Youtube 
              size={24} 
              className="text-gray-500 transition-all group-hover:text-red-600" 
            />
          </a>
        </div>
      </div>
    </div>
  );
} 
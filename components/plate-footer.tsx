"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

export function PlateFooter() {
  return (
    <div className="mt-auto flex flex-col items-center gap-8 pt-8 text-center">
      <Link href="/login">
        <Button className="bg-red-600 hover:bg-red-500 text-white">
          Register for early access!
        </Button>
      </Link>
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
          >
            <Image
              src="/images/logo-x.png"
              alt="X"
              width={24}
              height={24}
              className="saturate-0 transition-all group-hover:saturate-100"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572390325285"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
          >
            <Image
              src="/images/logo-facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="saturate-0 transition-all group-hover:saturate-100"
            />
          </a>
          <a
            href="https://www.instagram.com/afoldotcom/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
          >
            <Image
              src="/images/logo-instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="saturate-0 transition-all group-hover:saturate-100"
            />
          </a>
          <a
            href="https://www.tiktok.com/@afoldotcom"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
          >
            <Image
              src="/images/logo-tiktok.png"
              alt="TikTok"
              width={32}
              height={32}
              className="saturate-0 transition-all group-hover:saturate-100"
            />
          </a>
          <a
            href="https://youtube.com/@afoldotcom"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "group px-3")}
          >
            <Image
              src="/images/logo-youtube.png"
              alt="YouTube"
              width={32}
              height={32}
              className="saturate-0 transition-all group-hover:saturate-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
} 
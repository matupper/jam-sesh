"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Homepage() {
  return (
    <section
      className="relative py-32 min-h-screen 
                 bg-[url('/images/bkg-light.png')] bg-repeat bg-left-top"
    >
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <Image
          src="https://shadcnblocks.com/images/block/hero12/background.svg"
          alt="AFOL.com"
          width={1200}
          height={600}
          className="[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/afol-logo-light.png"
              alt="logo"
              width={150}
              height={150}
            />
            <div>
              <h1 className="mb-6 text-2xl font-bold text-pretty lg:text-5xl">
                The platform for the brick economy.
              </h1>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-4">
              <p className="text-center: text-muted-foreground font-bold black lg:text-left">
                Follow us to get updates on our imminent launch.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://x.com/afoldotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
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
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
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
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <Image
                    src="/images/logo-instagram.png"
                    alt="company logo"
                    width={24}
                    height={24}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@afoldotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
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
                  href="https://www.tiktok.com/@https://youtube.com/@afoldotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <Image
                    src="/images/logo-youtube.png"
                    alt="TikTok"
                    width={32}
                    height={32}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

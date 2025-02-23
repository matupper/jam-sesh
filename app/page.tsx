"use client";

import { PlateHeader } from "@/components/plate-header";
import { PlateFooter } from "@/components/plate-footer";
import BrickCanvas from "@/components/brick-canvas";

export default function Homepage() {
  return (
    <section
      className="flex min-h-screen flex-col py-[70px] 
                 bg-[url('/images/bkg-light.png')] bg-left-top bg-repeat px-4"
    >
      <PlateHeader
        title="The platform for the brick economy."
      />

      <main className="flex-1 flex flex-col h-[80vh]">
        <BrickCanvas />
      </main>

      <PlateFooter />
    </section>
  );
}

"use client";

import { PlateHeader } from "@/components/plate-header";
import { PlateFooter } from "@/components/plate-footer";
import BrickCanvas from "@/components/brick-canvas";
import { ThemedContainer } from "@/components/themed-container";

export default function Homepage() {
  return (
    <ThemedContainer className="flex min-h-screen flex-col py-4 px-4">
      <PlateHeader
        title="The platform for the brick economy."
      />

      <main className="flex-1 flex flex-col">
        <BrickCanvas />
      </main>

      <PlateFooter />
    </ThemedContainer>
  );
}

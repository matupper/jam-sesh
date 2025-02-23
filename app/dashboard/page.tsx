"use client";

import { PlateHeader } from "@/components/plate-header";
import { PlateFooter } from "@/components/plate-footer";
import BrickCanvas from "@/components/brick-canvas";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "aws-amplify/auth";

export default function Homepage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(() => {
        // user is authenticated
        setLoading(false);
      })
      .catch(() => {
        // not authenticated → redirect
        router.replace("/login");
      });
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
      <h3 className="text-red-600 text-center font-bold">
        Thank you for your early registration and interest in AFOL.com
        <br />
        We&apos;ll reach out by email when you have been selected to access 
        the platform as a pre-release Beta user.
      </h3>
      <PlateFooter showButton={false} />
    </section>
  );
}

"use client";
import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LotsPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <main>
      <h1>Lots</h1>
      <p>Placeholder for a protected Lots page.</p>
    </main>
  );
} 
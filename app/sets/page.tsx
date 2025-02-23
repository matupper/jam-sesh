"use client";
import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SetsPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <main>
      <h1>Sets</h1>
      <p>Placeholder for a protected Sets page.</p>
    </main>
  );
} 
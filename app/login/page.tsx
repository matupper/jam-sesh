"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { useAuth } from "@/context/auth-context";
import MyLogo from "@/components/my-logo-light";
import Link from "next/link";
export default function LoginPage() {
  const router = useRouter();
  const { user } = useAuth();

  // If the user is already logged in, send them to the dashboard
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <section
      className="relative min-h-screen 
               bg-[url('/images/bkg-light.png')] bg-repeat bg-left-top"
    >
      <div className="bg-transparent flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 self-center font-medium"
          >
            <MyLogo />
          </Link>
          {/* The login form uses AuthContext behind the scenes */}
          <AuthForm />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { GalleryVerticalEnd } from "lucide-react"

import { AuthForm } from "@/components/auth-form"
import { useAuth } from "@/context/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { user } = useAuth()

  // If the user is already logged in, send them to the dashboard
  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  return (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="h-4 w-4" />
          </div>
          AFOL.com
        </a>

        {/* The login form uses AuthContext behind the scenes */}
        <AuthForm />
      </div>
    </div>
  )
}

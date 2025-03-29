import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/jackhammer-70.png"
              alt="jackhammer Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="inline-block font-tektur font-semibold !font-[600]">jackhammer</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="flex items-center text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="flex items-center text-sm font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="flex items-center text-sm font-medium">
              Blog
            </Link>
            <Link href="/docs" className="flex items-center text-sm font-medium">
              Documentation
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/download">Download</Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
} 
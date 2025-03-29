import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"
import { Metadata } from "next"
import { Schibsted_Grotesk, Tektur } from 'next/font/google'

const schibstedGrotesk = Schibsted_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-schibsted',
})

const tektur = Tektur({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tektur',
})

export const metadata: Metadata = {
  title: "jackhammer",
  description: "jackhammer - Your Development Companion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        schibstedGrotesk.variable,
        tektur.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import { Jost, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/auth-context";
import { ThemeProvider } from "@/context/theme-context";
import { ThemeSwitcher } from "@/components/theme-switcher";

const jost = Jost({ subsets: ["latin"] });

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// 1) DEFINE METADATA
export const metadata: Metadata = {
  // Title can be a string or an object with defaults and templates
  title: {
    default: "AFOL.com | Home",
    template: "AFOL.com | %s",
  },
  description: "Welcome to AFOL.com - The best place for brick enthusiasts!",
  // Open Graph config for link previews, etc.
  openGraph: {
    title: "AFOL.com",
    description: "Manage your bricks as an AFOL. IYKYK",
    url: "https://afol.com",
    siteName: "AFOL.com",
    images: [
      {
        url: "https://afol.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AFOL.com OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Basic icons
  icons: {
    icon: "/favicon.ico",
  },
  // Optionally, set your canonical URL, keywords, etc.
  // keywords: ["LEGO", "AFOL", "Sets", "Pieces"],
  // alternates: { canonical: "https://afol.com" },
};

// 2) LAYOUT COMPONENT (SERVER COMPONENT BY DEFAULT)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.className}>
      <body className={`${robotoMono.variable} antialiased`}>
        <AuthProvider>
          <ThemeProvider>
            <div className="fixed top-4 right-4 z-50">
              <ThemeSwitcher />
            </div>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

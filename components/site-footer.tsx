import { FaGithub, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Download", href: "/download" },
      { name: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Status", href: "/status" },
    ],
  },
];

export function SiteFooter() {
  return (
    <section className="border-t">
      <div className="container">
        <footer className="py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="Jackhammer Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </Link>
                <h2 className="text-xl font-tektur font-semibold">jackhammer</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                The AI IDE for Scaling Infrastructure as Code. Cutting through the bedrock like butter, making you extraordinarily efficient in scaling infrastructure.
              </p>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="https://github.com/jackhammer-ide" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://twitter.com/jackhammer_ide" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://discord.gg/jackhammer" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://linkedin.com/company/jackhammer-ide" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid w-full grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© {new Date().getFullYear()} Jackhammer IDE. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <Link href="/terms">Terms and Conditions</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
} 
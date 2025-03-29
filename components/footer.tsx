import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "/" },
      { name: "Features", href: "/#features" },
      { name: "Download", href: "/download" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
]

interface FooterProps {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
}

export function Footer({
  logo = {
    url: "https://jackhammer.dev",
    src: "/images/jackhammer-70.png",
    alt: "jackhammer Logo",
    title: "jackhammer",
  },
}: FooterProps) {
  return (
    <section className="border-t">
      <div className="container">
        <footer className="py-16">
          <div className="flex flex-col items-start justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </Link>
                <h2 className="text-xl font-semibold font-tektur">{logo.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                The AI IDE for Scaling Infrastructure as Code. Cutting through the bedrock like butter, making you extraordinarily efficient in scaling infrastructure.
              </p>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="https://instagram.com/jackhammer" target="_blank" rel="noreferrer">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://facebook.com/jackhammer" target="_blank" rel="noreferrer">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://twitter.com/jackhammer" target="_blank" rel="noreferrer">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://linkedin.com/company/jackhammer" target="_blank" rel="noreferrer">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
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
            <p>© {new Date().getFullYear()} jackhammer.dev. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <Link href="/terms">Terms and Conditions</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  )
} 
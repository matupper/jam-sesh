"use client";

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container flex flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
              The AI IDE for Scaling Infrastructure as Code
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Cutting through the bedrock like butter, making you extraordinarily efficient in scaling infrastructure.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#features">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  See Features
                </Link>
              </Button>
            </div>
            <div className="w-full max-w-[1200px]">
              <Image
                src="/images/jkh-screen-01.png"
                alt="Jackhammer IDE Screenshot"
                width={1200}
                height={675}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="container py-8 md:py-12">
          <div className="mx-auto text-center">
            <h2 className="text-lg font-medium text-muted-foreground mb-8">
              Trusted by engineers at
            </h2>
            <div className="flex flex-col gap-12">
              {/* Top row - 5 logos */}
              <div className="flex justify-center gap-12">
                <Image
                  src="/images/logo-aws.png"
                  alt="AWS"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/logo-netflix.png"
                  alt="Netflix"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/logo-salesforce.png"
                  alt="Salesforce"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/logo-discord.png"
                  alt="Discord"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/logo-nike.png"
                  alt="Nike"
                  width={100}
                  height={100}
                />
              </div>
              {/* Bottom row - 4 logos */}
              <div className="flex justify-center gap-12">
                <Image
                  src="/images/logo-target.png"
                  alt="Target"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/logo-puppet.png"
                  alt="Puppet"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/logo-fox.png"
                  alt="Fox"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/logo-pinterest.png"
                  alt="Pinterest"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section id="features" className="container py-8 md:py-12 lg:py-24">
          <div className="flex flex-col gap-16">
            {/* Feature 1 - Image Left */}
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/jkh-screen-03.png"
                    alt="Tab completion feature screenshot"
                    width={1200}
                    height={675}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Tab, Tab, Tab...</h3>
                <p className="text-muted-foreground">
                  <span className="font-tektur font-semibold">jackhammer</span> lets you breeze through infrastructure changes by predicting your next edit.
                </p>
              </div>
            </div>

            {/* Feature 2 - Image Right */}
            <div className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/jkh-screen-02.png"
                    alt="Account resources visualization screenshot"
                    width={1200}
                    height={675}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Knows your account resources</h3>
                <p className="text-muted-foreground">
                  Get visibility, answers and insights on infrastructure deployed across all your accounts. Deploy or remediate with one click.
                </p>
              </div>
            </div>

            {/* Feature 3 - Image Left */}
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/jkh-screen-04.png"
                    alt="Natural language deployment interface screenshot"
                    width={1200}
                    height={675}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Deploy resources with natural language</h3>
                <p className="text-muted-foreground">
                  Simply describe what you want to deploy, and <span className="font-tektur font-semibold">jackhammer</span> will handle the infrastructure code.
                </p>
              </div>
            </div>

            {/* Feature 4 - Image Right */}
            <div className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/jkh-screen-01.png"
                    alt="Infrastructure scaling interface screenshot"
                    width={1200}
                    height={675}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Scale infrastructure effortlessly</h3>
                <p className="text-muted-foreground">
                  From single instances to complex multi-region deployments, scale your infrastructure with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Qualities */}
        <section className="bg-muted py-8 md:py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-background p-6">
                <h3 className="mb-2 text-xl font-bold">Open Access to Bedrock Models</h3>
                <p className="text-muted-foreground">
                  Choose from all available AWS Bedrock foundation models for your specific needs.
                </p>
              </div>
              <div className="rounded-lg bg-background p-6">
                <h3 className="mb-2 text-xl font-bold">Feels Familiar</h3>
                <p className="text-muted-foreground">
                  Your favorite IDE as always, now supercharged with AI capabilities.
                </p>
              </div>
              <div className="rounded-lg bg-background p-6">
                <h3 className="mb-2 text-xl font-bold">Enterprise-grade Security</h3>
                <p className="text-muted-foreground">
                  Built with AWS security best practices and compliance in mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="container py-8 md:py-12">
          <div className="mx-auto max-w-[85rem]">
            <h2 className="mb-8 text-3xl font-bold">Latest from our Blog</h2>
            <div className="rounded-lg border bg-background p-6">
              <p className="text-sm text-muted-foreground">Coming soon</p>
              <h3 className="mt-2 text-xl font-bold">
                Revolutionizing Infrastructure as Code with AI
              </h3>
              <p className="mt-2 text-muted-foreground">
                Stay tuned for our upcoming post about how AI is transforming infrastructure management.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
                Trusted by developers
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-12">
                Don&apos;t just take our word for it
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6">
                <p className="text-muted-foreground">
                  &ldquo;<span className="font-tektur font-semibold">jackhammer</span> has completely transformed how we manage our AWS infrastructure. It&apos;s like having an expert pair programmer who knows everything about AWS.&rdquo;
                </p>
                <div className="mt-4">
                  <p className="font-bold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Senior DevOps Engineer</p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <p className="text-muted-foreground">
                  &ldquo;The natural language interface for deploying resources is a game-changer. It&apos;s made our team significantly more productive.&rdquo;
                </p>
                <div className="mt-4">
                  <p className="font-bold">Marcus Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Cloud Architect</p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <p className="text-muted-foreground">
                  &ldquo;Finally, an IDE that understands infrastructure as code as well as it understands application code.&rdquo;
                </p>
                <div className="mt-4">
                  <p className="font-bold">Emma Thompson</p>
                  <p className="text-sm text-muted-foreground">Platform Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
              Try <span className="font-tektur font-semibold">jackhammer</span> Now
            </h2>
            <div className="flex justify-center">
              <Image
                src="/images/jackhammer-512.png"
                alt="jackhammer Logo"
                width={256}
                height={256}
                className="mb-8"
              />
            </div>
            <Button size="lg" asChild>
              <Link href="/download">
                <Download className="mr-2 h-4 w-4" />
                Download for Free
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

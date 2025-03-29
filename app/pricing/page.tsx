import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the plan that best fits your needs. All plans include core IDE features.
            </p>
          </div>
        </section>

        <section className="container pb-8 md:pb-12 lg:pb-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-8">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">Free</h3>
                <p className="text-muted-foreground">Perfect for getting started with AI-powered development.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Basic AWS Bedrock integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Access to Claude and Llama models</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Standard code assistance</span>
                  </li>
                </ul>
                <Button className="mt-8" asChild>
                  <Link href="/download">Download Now</Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-background p-8">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">Pro</h3>
                <p className="text-muted-foreground">Enhanced features for professional developers.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$19</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>All Free features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Access to all AWS Bedrock models</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Knowledge Base integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Advanced code intelligence</span>
                  </li>
                </ul>
                <Button className="mt-8" asChild>
                  <Link href="/checkout?plan=pro">Get Pro</Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-background p-8">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">Enterprise</h3>
                <p className="text-muted-foreground">Custom solutions for large teams and organizations.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Custom AWS integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Custom training and onboarding</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              FAQ
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
              <div className="rounded-lg border bg-muted p-4">
                <h3 className="mb-2 font-bold">Do I need an AWS account?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you need an AWS account to use Jackhammer IDE. AWS charges for Bedrock usage separately.
                </p>
              </div>
              <div className="rounded-lg border bg-muted p-4">
                <h3 className="mb-2 font-bold">Can I use my own AWS credentials?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, Jackhammer IDE supports AWS IAM roles, access keys, and SSO authentication.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 
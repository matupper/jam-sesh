import { SiteHeader } from "@/components/site-header"
import { FeaturesList } from "@/components/features-list"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <FeaturesList 
          heading="Experience the power of AWS Bedrock"
          description="Enhance your development workflow with AWS Bedrock integration, providing enterprise-grade AI capabilities directly in your IDE."
          buttons={{
            primary: {
              text: "Get Started",
              url: "/pricing",
            },
            secondary: {
              text: "Learn More",
              url: "/docs",
            },
          }}
          features={[
            {
              image: "/images/jkh-screen-03.png",
              title: "AWS Bedrock Models",
              description:
                "Access Claude, Llama, Nova, and other foundation models directly in your IDE. Choose the best model for your task.",
            },
            {
              image: "/images/jkh-screen-02.png",
              title: "Enterprise Security",
              description:
                "Keep your code secure with AWS&apos;s enterprise-grade security features, including VPC endpoints and IAM role integration.",
            },
            {
              image: "/images/jkh-screen-04.png",
              title: "AWS Infrastructure Tools",
              description:
                "Built-in support for AWS CDK, CloudFormation, and other infrastructure tools. Deploy with confidence.",
            },
            {
              image: "/images/jkh-screen-01.png",
              title: "Knowledge Base Integration",
              description:
                "Leverage AWS Knowledge Bases to enhance AI responses with your organization&apos;s domain knowledge.",
            },
            {
              image: "/images/jkh-screen-03.png",
              title: "Agents Integration",
              description:
                "Harness the power of specialized AI agents for code review, testing, documentation, and more. Let agents handle repetitive tasks while you focus on core development.",
            },
            {
              image: "/images/jkh-screen-02.png",
              title: "Prompt Libraries",
              description:
                "Access curated collections of prompts optimized for software development. Share and reuse effective prompts across your team to maintain consistency.",
            },
          ]}
        />
        
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Coming Soon
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We&apos;re constantly adding new features to make Jackhammer IDE even better.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
              <div className="rounded-lg border bg-muted p-4">
                <h3 className="mb-2 font-bold">AWS Service Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Direct integration with CodeCommit, CodePipeline, CloudTrail, and more AWS services.
                </p>
              </div>
              <div className="rounded-lg border bg-muted p-4">
                <h3 className="mb-2 font-bold">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Share AI conversations, custom prompts, and knowledge bases with your team.
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
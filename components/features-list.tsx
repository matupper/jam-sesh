import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Feature {
  image: string;
  title: string;
  description: string;
}

interface FeaturesListProps {
  heading: string;
  description: string;
  buttons: {
    primary: {
      text: string;
      url: string;
    };
    secondary: {
      text: string;
      url: string;
    };
  };
  features: Feature[];
}

const defaultProps: FeaturesListProps = {
  heading: "Experience the power of AWS Bedrock",
  description: "Enhance your development workflow with AWS Bedrock integration, providing enterprise-grade AI capabilities directly in your IDE.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "/pricing",
    },
    secondary: {
      text: "Learn More",
      url: "/docs",
    },
  },
  features: [
    {
      image: "/images/jkh-screen-03.png",
      title: "AWS Bedrock Models",
      description:
        "Experience smart code suggestions and completions powered by AWS Bedrock's foundation models, making your development workflow faster and more efficient.",
    },
    {
      image: "/images/jkh-screen-02.png",
      title: "Enterprise Security",
      description:
        "Get clear visibility into your AWS infrastructure with interactive visualizations. Understand dependencies and relationships at a glance.",
    },
    {
      image: "/images/jkh-screen-04.png",
      title: "AWS Infrastructure Tools",
      description:
        "Let jackhammer predict and suggest your next infrastructure changes, making complex edits as simple as pressing tab.",
    },
    {
      image: "/images/jkh-screen-01.png",
      title: "Knowledge Base Integration",
      description:
        "Deploy and manage infrastructure using natural language commands. jackhammer translates your intent into precise infrastructure code.",
    },
    {
      image: "/images/jkh-screen-01.png",
      title: "Security Analysis",
      description:
        "Get real-time security insights and recommendations. Identify potential vulnerabilities and ensure compliance with best practices.",
    },
    {
      image: "/images/jkh-screen-02.png",
      title: "Collaborative Workflows",
      description:
        "Work seamlessly with your team using built-in collaboration features. Share configurations, review changes, and maintain consistency.",
    },
  ],
};

export function FeaturesList(props: FeaturesListProps = defaultProps): React.ReactElement {
  const { heading, description, buttons, features } = props;
  
  return (
    <section className="py-32">
      <div className="container max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="md:sticky top-48 self-start">
            <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
              {heading}
            </h2>
            <p className="font-medium text-muted-foreground md:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              <Button className="gap-2" size="lg" asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl border p-2">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1200}
                    height={675}
                    className="w-full rounded-xl"
                    priority={index === 0}
                    quality={90}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
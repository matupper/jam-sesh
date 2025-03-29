import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link 
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Documentation Coming Soon
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Our comprehensive documentation is under development. 
              Stay tuned for detailed guides and references about using <span className="font-tektur font-semibold">jackhammer</span>.
            </p>
          </div>
          
          <div className="w-full max-w-sm mx-auto">
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
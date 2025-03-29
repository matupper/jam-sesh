import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestThemePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Theme Switcher Test (afol-www)</h1>
      <p className="mb-6 text-muted-foreground">
        Try switching between light, dark, and system themes using the theme switcher in the corner of the screen.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a test card with some content to show how the theme affects UI elements.</p>
          </CardContent>
          <CardFooter>
            <Button>Primary Button</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Component Testing</CardTitle>
            <CardDescription>See how components look in different themes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Buttons:</span>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
            
            <div>
              <span className="text-sm font-medium">Text:</span>
              <p className="text-foreground">Regular text</p>
              <p className="text-muted-foreground">Muted text</p>
              <p className="text-primary">Primary text</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle>Highlighted Card</CardTitle>
            <CardDescription className="text-primary-foreground/80">With primary background</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p>This card uses the primary color to show how themed components adapt.</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 
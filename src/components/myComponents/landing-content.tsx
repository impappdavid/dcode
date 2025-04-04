import type React from "react"
import { ArrowRight, Bookmark, Search, Code2, Laptop, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { CodeBlock } from "./code-block"

export function LandingContent() {
  return (
    <div className="container mx-auto space-y-12 py-8 ">
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Developer Documentation <span className="text-primary">Simplified</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          A sleek, modern documentation hub for developers. Quickly search and explore programming syntax across
          multiple languages.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild>
            <a href="/docs/javascript">
              Browse Docs <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<Search className="h-6 w-6" />}
          title="Instant Search"
          description="Powerful search functionality for quick syntax lookups across all supported languages."
        />
        <FeatureCard
          icon={<Code2 className="h-6 w-6" />}
          title="Multi-Language Support"
          description="JavaScript, TypeScript, C#, Python, HTML, CSS, and more languages supported."
        />
        <FeatureCard
          icon={<Moon className="h-6 w-6" />}
          title="Dark & Minimalist UI"
          description="A developer-friendly interface with a dark theme and neon accents."
        />
        <FeatureCard
          icon={<Laptop className="h-6 w-6" />}
          title="Code Examples & Highlighting"
          description="Real-time syntax highlighting for better readability of code examples."
        />
        <FeatureCard
          icon={<Bookmark className="h-6 w-6" />}
          title="Bookmark & History"
          description="Save frequently used references for quick access and view your browsing history."
        />
        <FeatureCard
          icon={<ArrowRight className="h-6 w-6" />}
          title="Responsive Design"
          description="Optimized for desktops and mobile devices for documentation on the go."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-center text-3xl font-bold">Example Documentation</h2>
        <div className="overflow-hidden rounded-lg border">
          <div className="flex border-b bg-muted/50">
            <button className="language-tab active">JavaScript</button>
            <button className="language-tab">TypeScript</button>
            <button className="language-tab">Python</button>
          </div>
          <div className="p-6">
            <h3 className="mb-4 text-xl font-bold">Array.map()</h3>
            <p className="mb-4 text-muted-foreground">
              The <code className="rounded bg-secondary px-1 py-0.5">map()</code> method creates a new array populated
              with the results of calling a provided function on every element in the calling array.
            </p>
            <CodeBlock
              language="javascript"
              code={`
// Syntax
array.map(function(currentValue, index, arr), thisValue)

// Example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// With index
const indexed = numbers.map((num, index) => \`\${index}: \${num}\`);
console.log(indexed); // ["0: 1", "1: 2", "2: 3", "3: 4"]
            `}
            />
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Bookmark
                </Button>
                <Button variant="outline" size="sm">
                  Copy
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">Last updated: April 3, 2023</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-primary/10 p-2 text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}


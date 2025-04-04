export function WelcomeContent() {
    return (
      <div className="max-w-3xl mx-auto space-y-8 py-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome to D-Code</h1>
          <p className="text-muted-foreground">
            A sleek, modern documentation hub for developers. Quickly search and explore programming syntax across
            multiple languages.
          </p>
        </div>
  
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Getting Started</h2>
          <p>
            Select a programming language from the sidebar on the left to browse its documentation. You can also use the
            search bar to find specific methods, properties, or concepts.
          </p>
        </div>
  
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Featured Documentation</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-yellow-600 text-xs font-medium text-white">
                  JS
                </span>
                <h3 className="font-medium">JavaScript</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Modern JavaScript syntax, ES6+ features, and browser APIs.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Array Methods</li>
                <li>• Promises</li>
                <li>• Async/Await</li>
              </ul>
            </div>
  
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-xs font-medium text-white">
                  TS
                </span>
                <h3 className="font-medium">TypeScript</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Type definitions, interfaces, and TypeScript-specific features.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Types & Interfaces</li>
                <li>• Generics</li>
                <li>• Utility Types</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
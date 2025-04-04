"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Highlight, themes, type Language } from "prism-react-renderer"

interface DarkCodeBlockProps {
  language: string
  code: string
  className?: string
}

export function CodeBlock({ language, code, className }: DarkCodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Convert language string to a format Prism understands
  const getPrismLanguage = (lang: string): Language => {
    const languageMap: Record<string, Language> = {
      javascript: "jsx",
      typescript: "tsx",
      js: "jsx",
      ts: "tsx",
      jsx: "jsx",
      tsx: "tsx",
      html: "html",
      css: "css",
      json: "json",
      python: "python",
      py: "python",
      bash: "bash",
      shell: "bash",
      sh: "bash",
      markdown: "markdown",
      md: "markdown",
      sql: "sql",
      java: "java",
      c: "c",
      cpp: "cpp",
      "c++": "cpp",
      csharp: "csharp",
      "c#": "csharp",
      go: "go",
      rust: "rust",
      ruby: "ruby",
      php: "php",
      swift: "swift",
      kotlin: "kotlin",
      scala: "scala",
      yaml: "yaml",
      yml: "yaml",
      graphql: "graphql",
      gql: "graphql",
    }

    return (languageMap[lang.toLowerCase()] || "jsx") as Language
  }

  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      <div className="bg-zinc-900 px-4 py-1 flex justify-between items-center border-b border-zinc-700">
        <span className="text-zinc-400 text-sm ">{language}</span>
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded hover:bg-transparent transition-opacity hover:opacity-70 cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3 text-zinc-400" />}
        </button>
      </div>
      <div className="bg-zinc-800">
        <Highlight theme={themes.vsDark} code={code.trim()} language={getPrismLanguage(language)}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="p-4 overflow-x-auto " style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })} className="table-row text-sm">
                  <span className="table-cell text-right pr-4 select-none opacity-50 text-xs">{i + 1}</span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
      
    </div>
  )
}


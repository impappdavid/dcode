"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import { Button } from "../ui/button"

interface SearchBarProps {
    onSelectMethod?: (language: string, topic: string, method: string) => void
}

export function SearchBar({ onSelectMethod }: SearchBarProps) {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")

    // Mock search results - in a real app, this would be fetched from an API or filtered from your JSON
    const searchResults = [
        { title: "Array.push()", category: "JavaScript", language: "javascript", topic: "arrays", method: "push", fill: "#F0DB4F", icon: `M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583`, },
        { title: "Array.map()", category: "JavaScript", language: "javascript", topic: "arrays", method: "map", fill: "#F0DB4F", icon: `M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583`, },
        { title: "Object.keys()", category: "JavaScript", language: "javascript", topic: "objects", method: "keys" },
        { title: "Promise.all()", category: "JavaScript", language: "javascript", topic: "promises", method: "all" },
        { title: "interface", category: "TypeScript", language: "typescript", topic: "interfaces", method: "declaration" },
        { title: "List comprehension", category: "Python", language: "python", topic: "lists", method: "comprehension" },
        { title: "LINQ Where()", category: "C#", language: "csharp", topic: "linq", method: "where" },
        { title: "<form>", category: "HTML", language: "html", topic: "forms", method: "form" },
        { title: "display: flex", category: "CSS", language: "css", topic: "flexbox", method: "display" },
    ].filter(
        (item) =>
            query.length > 0 &&
            (item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())),
    )

    const handleSelect = (language: string, topic: string, method: string) => {
        setOpen(false)
        if (onSelectMethod) {
            onSelectMethod(language, topic, method)
        }
    }

    return (
        <>
            <Button
                size="icon"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-xs hover:bg-zinc-800 text-muted-foreground"
                onClick={() => setOpen(true)}
            >
                <Search className=" h-4 w-4" />
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search syntax, methods, etc." value={query} onValueChange={setQuery} />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Results">
                        {searchResults.map((result) => (
                            <CommandItem
                                key={`${result.category}-${result.title}`}
                                className="w-full cursor-pointer"
                                onSelect={() => handleSelect(result.language, result.topic, result.method)}
                                >
                                <div className="flex justify-between w-full items-center">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-zinc-300">{result.title}</span>
                                        <div className="text-xs text-zinc-400">May 21, 2024</div>
                                    </div>
                                    <span className="mr-2 rounded-sm bg-zinc-800 text-zinc-400 px-1.5 py-0.5 text-xs font-medium">{result.category}</span>

                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}


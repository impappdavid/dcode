"use client"
import { cn } from "../../lib/utils"
import { ScrollArea } from "../ui/scroll-area"

interface TopicSidebarProps {
    language: string
    selectedMethod: string | null
    onSelectMethod: (topic: string, method: string) => void
}

// This would typically come from an API or database
const topicsAndMethods: Record<string, { topic: string; methods: { id: string; name: string, date:string }[] }[]> = {
    javascript: [
        {
            topic: "Basics",
            methods: [
                { id: "comments", name: "Comments", date:"Apr 04, 2025" },
                { id: "let", name: "let", date:"Apr 04, 2025"},
                { id: "var", name: "var", date:"Apr 04, 2025"},
                { id: "const", name: "const", date:"Apr 04, 2025" },
                { id: "typeof", name: "typeof", date:"Apr 04, 2025" },
                { id: "ifelse", name: "If Else", date:"Apr 04, 2025" },
                { id: "switch", name: "Switch", date:"Apr 04, 2025" },
                { id: "for", name: "for", date:"Apr 04, 2025" },
                { id: "while", name: "while", date:"Apr 04, 2025" },
                { id: "dowhile", name: "do...while", date:"Apr 04, 2025" },
                { id: "break", name: "break", date:"Apr 04, 2025" },
                { id: "continue", name: "continue", date:"Apr 04, 2025" },
                { id: "trycatch", name: "try...catch", date:"Apr 04, 2025" },
                { id: "throw", name: "throw", date:"Apr 04, 2025" },
                { id: "finally", name: "finally", date:"Apr 04, 2025" },
                { id: "alert", name: "alert()", date:"Apr 04, 2025" },
                { id: "prompt", name: "prompt()", date:"Apr 04, 2025" },
                { id: "confirm", name: "confirm()", date:"Apr 04, 2025" },
            ],
        },
        {
            topic: "Data Types",
            methods: [
                { id: "number", name: "Number", date:"Apr 04, 2025" },
                { id: "string", name: "String", date:"Apr 04, 2025" },
                { id: "boolean", name: "Boolean", date:"Apr 04, 2025" },
                { id: "nullundefined", name: "null, undefined", date:"Apr 04, 2025" },
                { id: "object", name: "Object", date:"Apr 04, 2025" },
                { id: "array", name: "Array", date:"Apr 04, 2025" },
                { id: "symbol", name: "Symbol", date:"Apr 04, 2025" },
                { id: "bigint", name: "BigInt", date:"Apr 04, 2025" },
            ],
        },
        {
            topic: "Operators",
            methods: [
                { id: "arithmetic", name: "Arithmetic", date:"Apr 04, 2025" },
                { id: "assignment", name: "Assignment", date:"Apr 04, 2025" },
                { id: "comparison", name: "Comparison", date:"Apr 04, 2025" },
                { id: "logical", name: "Logical", date:"Apr 04, 2025" },
                { id: "ternary", name: "Ternary", date:"Apr 04, 2025" },
                { id: "spread", name: "Spread", date:"Apr 04, 2025" },
                { id: "destructuring", name: "Destructuring", date:"Apr 04, 2025" },
            ],
        },
        {
            topic: "Strings",
            methods: [
                { id: "stringlength", name: "String.length", date:"" },
                { id: "stringslice", name: "String.slice()", date:"" },
                { id: "stringsubstring", name: "String.substring()", date:"" },
                { id: "stringsubstr", name: "String.substr()", date:"" },
                { id: "stringreplace", name: "String.replace()", date:"" },
                { id: "stringtolowercase", name: "String.toLowerCase()", date:"" },
                { id: "stringtouppercase", name: "String.toUpperCase()", date:"" },
                { id: "stringconcat", name: "String.concat()", date:"" },
                { id: "stringtrim", name: "String.trim()", date:"" },
                { id: "stringsplit", name: "String.split()", date:"" },
                { id: "stringincludes", name: "String.includes()", date:"" },
                { id: "stringindexof", name: "String.indexOf()", date:"" },
                { id: "stringlastindexof", name: "String.lastIndexOf()", date:"" },
            ],
        },
        {
            "topic": "Arrays",
            "methods": [
              { "id": "push", "name": "Array.push()", "date": "" },
              { "id": "pop", "name": "Array.pop()", "date": "" },
              { "id": "map", "name": "Array.map()", "date": "" },
              { "id": "filter", "name": "Array.filter()", "date": "" },
              { "id": "reduce", "name": "Array.reduce()", "date": "" },
              { "id": "forEach", "name": "Array.forEach()", "date": "" },
              { "id": "find", "name": "Array.find()", "date": "" },
              { "id": "some", "name": "Array.some()", "date": "" },
              { "id": "includes", "name": "Array.includes()", "date": "" },
              { "id": "slice", "name": "Array.slice()", "date": "" },
              { "id": "splice", "name": "Array.splice()", "date": "" }
            ]
          },
          {
            "topic": "Objects",
            "methods": [
              { "id": "keys", "name": "Object.keys()", "date": "" },
              { "id": "values", "name": "Object.values()", "date": "" },
              { "id": "entries", "name": "Object.entries()", "date": "" },
              { "id": "assign", "name": "Object.assign()", "date": "" },
              { "id": "hasOwnProperty", "name": "Object.hasOwnProperty()", "date": "" }
            ]
          },
          {
            "topic": "Functions",
            "methods": [
              { "id": "declaration", "name": "Function declaration", "date": "" },
              { "id": "expression", "name": "Function expression", "date": "" },
              { "id": "arrow", "name": "Arrow function", "date": "" },
              { "id": "iife", "name": "IIFE", "date": "" },
              { "id": "callback", "name": "Callback function", "date": "" }
            ]
          },
          {
            "topic": "Loops",
            "methods": [
              { "id": "for", "name": "for loop", "date": "" },
              { "id": "while", "name": "while loop", "date": "" },
              { "id": "doWhile", "name": "do...while loop", "date": "" },
              { "id": "forIn", "name": "for...in", "date": "" },
              { "id": "forOf", "name": "for...of", "date": "" }
            ]
          },
          {
            "topic": "Events",
            "methods": [
              { "id": "addEventListener", "name": "addEventListener()", "date": "" },
              { "id": "onclick", "name": "onclick", "date": "" },
              { "id": "onchange", "name": "onchange", "date": "" },
              { "id": "oninput", "name": "oninput", "date": "" }
            ]
          },
          {
            "topic": "DOM",
            "methods": [
              { "id": "getElementById", "name": "document.getElementById()", "date": "" },
              { "id": "querySelector", "name": "document.querySelector()", "date": "" },
              { "id": "createElement", "name": "document.createElement()", "date": "" },
              { "id": "appendChild", "name": "element.appendChild()", "date": "" },
              { "id": "removeChild", "name": "element.removeChild()", "date": "" },
              { "id": "classList", "name": "element.classList.add()", "date": "" }
            ]
          },
          {
            "topic": "Storage",
            "methods": [
              { "id": "localStorage.setItem", "name": "localStorage.setItem()", "date": "" },
              { "id": "localStorage.getItem", "name": "localStorage.getItem()", "date": "" },
              { "id": "sessionStorage.setItem", "name": "sessionStorage.setItem()", "date": "" },
              { "id": "sessionStorage.getItem", "name": "sessionStorage.getItem()", "date": "" }
            ]
          }
    ],
    typescript: [
        {
            topic: "Types",
            methods: [
                { id: "basic", name: "Basic Types", date:"" },
                { id: "union", name: "Union Types", date:"" },
                { id: "intersection", name: "Intersection Types", date:"" },
            ],
        },
        {
            topic: "Interfaces",
            methods: [
                { id: "declaration", name: "Interface Declaration", date:"" },
                { id: "extending", name: "Extending Interfaces", date:"" },
            ],
        },
    ],
    
    
}

export function TopicSidebar({ language, selectedMethod, onSelectMethod }: TopicSidebarProps) {
    const topics = topicsAndMethods[language] || []

    return (
        <div className="w-64 border-r bg-zinc-900/70 backdrop-blur">
            <ScrollArea className="h-screen">
                <div className="px-4 py-4">
                    {topics.map((topicGroup) => (
                        <div key={topicGroup.topic} className="mb-2 flex flex-col gap-1">
                            <div className="text-white font-semibold">{topicGroup.topic}</div>

                            {topicGroup.methods.map((method) => (
                                <button
                                    key={method.id}
                                    className={cn("method-item w-full text-zinc-300 text-sm text-left flex flex-col py-1 px-3 hover:bg-zinc-800 rounded-lg cursor-pointer transition-all hover:text-white", selectedMethod === method.id && "bg-zinc-800 text-white")}
                                    onClick={() => onSelectMethod(topicGroup.topic.toLowerCase(), method.id)}
                                >
                                    {method.name}
                                    <div className="text-xs text-zinc-400">{method.date}</div>

                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}


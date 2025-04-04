"use client"

import { useState } from "react"
import { LanguageSidebar } from "./language-sidebar"
import { TopicSidebar } from "./topic-sidebar"
import { DocumentationContent } from "./documentation-content"
import { WelcomeContent } from "./welcome-content"
import { useIsMobile } from "../../hooks/use-mobile"

export function DocsLayout() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const isMobile = useIsMobile()

  return (
    <div className="flex h-screen overflow-hidden">
      <LanguageSidebar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={(language) => {
          setSelectedLanguage(language)
          setSelectedTopic(null)
          setSelectedMethod(null)
        }}
      />
      {selectedLanguage && (
        <TopicSidebar
          language={selectedLanguage}
          selectedMethod={selectedMethod}
          onSelectMethod={(topic, method) => {
            setSelectedTopic(topic)
            setSelectedMethod(method)
          }}
        />
      )}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-zinc-900/40">
        {selectedLanguage && selectedTopic && selectedMethod ? (
          <DocumentationContent language={selectedLanguage} topic={selectedTopic} method={selectedMethod} />
        ) : (
          <WelcomeContent />
        )}
      </main>
    </div>
  )
}


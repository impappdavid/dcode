"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  setIsSidebarOpen: (open: boolean) => void
}

export function MobileNav({ setIsSidebarOpen }: MobileNavProps) {
  return (
    <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={() => setIsSidebarOpen(true)}>
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle menu</span>
    </Button>
  )
}


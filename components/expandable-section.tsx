"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ExpandableSectionProps {
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
  summary?: React.ReactNode
}

export function ExpandableSection({ title, children, defaultExpanded = false, summary }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="mb-6">
      <div className="rounded-lg bg-white shadow-sm">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-start justify-between p-4 transition-all duration-200 hover:bg-zinc-100 hover:shadow-sm group"
        >
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            {!isExpanded && summary && (
              <div 
                className="text-sm text-zinc-600 transition-all duration-200 ease-in-out"
                style={{
                  opacity: isExpanded ? 0 : 1,
                  transform: isExpanded ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {summary}
              </div>
            )}
          </div>
          <ChevronDown
            className={cn(
              "h-6 w-6 transform transition-all duration-200 mt-1 text-zinc-400 group-hover:text-zinc-800",
              isExpanded ? "rotate-180" : ""
            )}
          />
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-200 ease-in-out border-t",
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 border-transparent"
          )}
        >
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  )
}


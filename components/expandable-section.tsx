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
    <div className="mb-8">
      <div className="rounded-3xl bg-white border border-zinc-100 dark:bg-white dark:border-zinc-100">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-start justify-between p-6 transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-50 rounded-3xl group"
        >
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-900">{title}</h2>
            {!isExpanded && summary && (
              <div 
                className="text-sm text-zinc-600 dark:text-zinc-600 transition-all duration-200 ease-in-out"
                style={{
                  opacity: isExpanded ? 0 : 1,
                  transform: isExpanded ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {summary}
              </div>
            )}
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-100 rounded-full p-2.5 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-200 transition-colors">
            <ChevronDown
              className={cn(
                "h-5 w-5 transform transition-all duration-200 text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-800",
                isExpanded ? "rotate-180" : ""
              )}
            />
          </div>
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-200 ease-in-out border-t border-zinc-100 dark:border-zinc-100",
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 border-transparent dark:border-transparent"
          )}
        >
          <div className="p-6 rounded-b-3xl">{children}</div>
        </div>
      </div>
    </div>
  )
}


"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

// Styled link with consistent styling
export const StyledLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'underline' | 'plain' | 'muted' }
>(({ className = "", variant = 'plain', ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "transition-colors",
      variant === 'underline'
        ? "underline text-zinc-800 hover:text-zinc-600 dark:text-zinc-800 dark:hover:text-zinc-600"
        : variant === 'muted'
          ? "text-zinc-400 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-600"
          : "text-zinc-800 hover:text-zinc-600 dark:text-zinc-800 dark:hover:text-zinc-600",
      className
    )}
    {...props}
  />
));
StyledLink.displayName = "StyledLink";

// Profile photo with hover effect
export function ProfilePhoto({ 
  src, 
  alt,
  width = 400,
  height = 400,
  className = "",
  priority = false
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Card className={cn("w-full h-48 md:h-auto md:aspect-square overflow-hidden shadow-lg border-none dark:border-zinc-200", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
      />
    </Card>
  );
}

// Contact item with icon
export function ContactItem({ 
  icon, 
  href, 
  children 
}: { 
  icon: React.ReactNode; 
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <StyledLink href={href} className="text-xs">{children}</StyledLink>
    </div>
  );
}

// Email icon
export function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

// Github icon
export function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

// Scholar icon (graduation cap)
export function ScholarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10L12 4 2 10l10 6 10-6" />
      <path d="M6 12v5c0 1.7 3.6 3 6 3s6-1.3 6-3v-5" />
    </svg>
  );
}

// Footer component
export function Footer({ className = "" }: { className?: string }) {
  return (
    <div className={cn("text-center text-[10px] text-zinc-400", className)}>
      <p>© 2025 Yizhuo Liang</p>
      <p className="mt-1">
        Welcome to fork my <StyledLink href="https://github.com/yizhuoliang/yizhuoliang.github.io">theme</StyledLink>!
      </p>
    </div>
  );
}

// Skill tag component
export function SkillTag({ 
  children, 
  variant = 'primary'
}: { 
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  return (
    <span
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium text-zinc-800 border shadow-sm",
        variant === 'primary' 
          ? "bg-zinc-100 border-zinc-200 dark:bg-zinc-100 dark:text-zinc-800 dark:border-zinc-200" 
          : "bg-zinc-200 border-zinc-300 dark:bg-zinc-200 dark:text-zinc-800 dark:border-zinc-300"
      )}
    >
      {children}
    </span>
  );
}

// Project item component
export function ProjectItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-lg bg-zinc-50 p-2.5 border border-zinc-100 shadow-sm dark:bg-zinc-50 dark:text-zinc-800 dark:border-zinc-100">
      {children}
    </li>
  );
}

// Expandable Section (moved from components/expandable-section.tsx)
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

// Link Section (non-expandable, arrow points right)
interface LinkSectionProps {
  title: string
  href: string
  description?: React.ReactNode
}

export function LinkSection({ title, href, description }: LinkSectionProps) {
  return (
    <div className="mb-8">
      <div className="rounded-3xl bg-white border border-zinc-100 dark:bg-white dark:border-zinc-100">
        <Link href={href} className="flex w-full items-start justify-between p-6 transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-50 rounded-3xl group">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-1 text-zinc-900 dark:text-zinc-900">{title}</h2>
            {description && (
              <div className="text-sm text-zinc-600 dark:text-zinc-600">
                {description}
              </div>
            )}
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-100 rounded-full p-2.5 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-200 transition-colors">
            <ChevronDown className="h-5 w-5 -rotate-90 transition-all duration-200 text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-800" />
          </div>
        </Link>
      </div>
    </div>
  )
}
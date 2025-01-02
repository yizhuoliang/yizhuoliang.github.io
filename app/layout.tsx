import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yizhuo Liang - Computer Science Researcher",
  description: "Personal website of Yizhuo Liang, featuring research work and experience in computer science",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-100 text-zinc-900`}>
        {children}
      </body>
    </html>
  )
}


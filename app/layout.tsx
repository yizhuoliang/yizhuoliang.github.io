import type { Metadata } from "next"
import localFont from 'next/font/local'
import "./globals.css"

const mapleMono = localFont({
  src: [
    {
      path: '../public/fonts/MapleMono-TTF/MapleMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MapleMono-TTF/MapleMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-maple-mono'
})

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
      <body className={`${mapleMono.variable} font-mono bg-zinc-100 text-zinc-900`}>
        {children}
      </body>
    </html>
  )
}


import type { Metadata } from "next"
import localFont from 'next/font/local'
import "./globals.css"

const jetbrainsMono = localFont({
  src: [
    {
      path: '../public/fonts/JetBrainsMono/webfonts/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono/webfonts/JetBrainsMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/JetBrainsMono/webfonts/JetBrainsMono-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/JetBrainsMono/webfonts/JetBrainsMono-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: "Yizhuo Liang - Computer Science Researcher",
  description: "Personal website of Yizhuo Liang, featuring research work and experience in computer science",
  verification: {
    google: "VC0wI7gYwY23H9Wq0mSdztu9HCarZs6eCjt2Gc9HjYw",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono bg-zinc-100 text-zinc-900`}>
        {children}
      </body>
    </html>
  )
}


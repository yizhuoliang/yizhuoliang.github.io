import Link from 'next/link'
import { Card } from "@/components/ui/card"
import { LinkSection } from "@/components/ui/shared-components"

export default function About() {
  return (
    <main className="min-h-screen p-4 pb-2 md:p-8 md:pb-4 bg-zinc-100 dark:bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-16">
          {/* Left column: Title card with back pill */}
          <div className="md:w-[30%] md:sticky md:top-8 md:self-start flex flex-col justify-between md:min-h-[calc(100vh-6rem)]">
            <div className="flex flex-col gap-8 mb-8">
              <Card className="overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900 shadow-lg border-none">
                <div className="p-8 text-white">
                  <h1 className="mb-2 text-3xl font-bold">About Coulson</h1>
                  <div className="mt-4">
                    <Link href="/" className="inline-flex items-center rounded-full bg-zinc-400 text-zinc-900 px-4 py-2 text-xs font-medium shadow-sm">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right column: About image + Link sections */
          }
          <div className="mt-0 md:mt-0 md:w-[70%]">
            <div className="mb-8">
              <img src="/pics/about.jpg" alt="About Coulson" className="w-full h-auto rounded-3xl" />
            </div>
            <LinkSection title="1" description="My Photos" href="/about/photos" />
            <LinkSection title="2" description="Music I Love" href="/about/music" />
            <LinkSection title="3" description="My Friends" href="/about/friends" />
          </div>
        </div>
      </div>
    </main>
  )
}



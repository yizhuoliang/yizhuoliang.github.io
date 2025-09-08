import Link from 'next/link'
import { Card } from "@/components/ui/card"

export default function FriendsPage() {
  return (
    <main className="min-h-screen p-4 pb-2 md:p-8 md:pb-4 bg-zinc-100 dark:bg-zinc-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <Link href="/about" className="inline-flex items-center rounded-full bg-zinc-300 text-zinc-900 px-4 py-2 text-xs font-medium border border-zinc-400 shadow-sm">
            Back to About
          </Link>
        </div>
        <h1 className="text-2xl font-semibold mb-8">My friends</h1>
        <p className="text-lg">You are, my friend :)</p>
      </div>
    </main>
  )
}



import Link from 'next/link'

export default function MusicPage() {
  return (
    <main className="min-h-screen p-4 pb-2 md:p-8 md:pb-4 bg-zinc-100 dark:bg-zinc-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <Link href="/about" className="inline-flex items-center rounded-full bg-zinc-300 text-zinc-900 px-4 py-2 text-xs font-medium border border-zinc-400 shadow-sm">
            Back to About
          </Link>
        </div>
        <h1 className="text-2xl font-semibold mb-8">Music I love</h1>

        <div className="flex flex-col gap-16">

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="/pics/music/spiral-longman-cover.jpeg" target="_blank" rel="noreferrer" className="md:w-2/3">
              <img src="/pics/music/spiral-longman-cover.jpeg" alt="LONGMAN - SPIRAL cover" className="rounded-2xl w-full h-auto" />
            </a>
            <div className="md:w-1/3 text-sm text-zinc-700">
              <p>Spiral - LONGMAN <br/> <br/> 一个烂透的人也配得到救赎，这是我见过最温柔的事。 </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="/pics/music/amusement-park.jpeg" target="_blank" rel="noreferrer" className="md:w-2/3">
              <img src="/pics/music/amusement-park.jpeg" alt="Amusement Park cover" className="rounded-2xl w-full h-auto" />
            </a>
            <div className="md:w-1/3 text-sm text-zinc-700">
              <p>Piano: Amusement Park - 帆足圭吾 </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="/pics/music/horizondreamer-cover.jpeg" target="_blank" rel="noreferrer" className="md:w-2/3">
              <img src="/pics/music/horizondreamer-cover.jpeg" alt="Horizon Dreamer cover" className="rounded-2xl w-full h-auto" />
            </a>
            <div className="md:w-1/3 text-sm text-zinc-700">
              <p>Horizon Dreamer - 三浦大知 </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}



import Link from 'next/link'

export default function PhotosPage() {
  return (
    <main className="min-h-screen p-4 pb-2 md:p-8 md:pb-4 bg-zinc-100 dark:bg-zinc-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <Link href="/about" className="inline-flex items-center rounded-full bg-zinc-300 text-zinc-900 px-4 py-2 text-xs font-medium border border-zinc-400 shadow-sm">
            Back to About
          </Link>
        </div>
        <h1 className="text-2xl font-semibold mb-8">My Photos</h1>

        <div className="md:w-1/3 text-sm text-zinc-700 mb-8">
              <p>Yes, that thing is my logo.</p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="/pics/photos/bk-bridge-park.jpg" target="_blank" rel="noreferrer" className="md:w-2/3">
              <img src="/pics/photos/bk-bridge-park.jpg" alt="Brooklyn Bridge Park" className="rounded-2xl w-full h-auto" />
            </a>
            <div className="md:w-1/3 text-sm text-zinc-700">
              <p>纽约最喜欢的地方，最喜欢的时间。</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="/pics/photos/sea-couple.jpg" target="_blank" rel="noreferrer" className="md:w-2/3">
              <img src="/pics/photos/sea-couple.jpg" alt="Sea Couple" className="rounded-2xl w-full h-auto" />
            </a>
            <div className="md:w-1/3 text-sm text-zinc-700">
              <p>一个小岛上的老夫妻。他们骑着自行车来的，所以应该是岛上的住户。那这片海，他们可能已经一起看过无数次了。</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="/pics/photos/rockerfeller.jpg" target="_blank" rel="noreferrer" className="md:w-2/3">
              <img src="/pics/photos/rockerfeller.jpg" alt="Backyard" className="rounded-2xl w-full h-auto" />
            </a>
            <div className="md:w-1/3 text-sm text-zinc-700">
              <p>一个小岛上某家人的后院。</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="/pics/photos/room-sunset.jpg" target="_blank" rel="noreferrer" className="md:w-2/3">
              <img src="/pics/photos/room-sunset.jpg" alt="Room at sunset" className="rounded-2xl w-full h-auto" />
            </a>
            <div className="md:w-1/3 text-sm text-zinc-700">
              <p>新泽西的房间.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="/pics/photos/room.jpg" target="_blank" rel="noreferrer" className="md:w-2/3">
              <img src="/pics/photos/room.jpg" alt="Room" className="rounded-2xl w-full h-auto" />
            </a>
            <div className="md:w-1/3 text-sm text-zinc-700">
              <p>新泽西的房间是朝西边的！</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}



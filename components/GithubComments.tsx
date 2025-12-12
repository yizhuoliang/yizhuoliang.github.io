"use client"

import Giscus from '@giscus/react'

export default function GithubComments() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      <p className="text-sm text-zinc-600 mb-4">
        Sign in with GitHub to leave a comment.
      </p>
      <div className="border border-zinc-300 rounded-lg bg-white p-2 sm:p-4">
        <Giscus
          repo="yizhuoliang/yizhuoliang.github.io"
          repoId="R_kgDONk8UTA"
          category="General"
          categoryId="DIC_kwDONk8UTM4CzsPi"
          mapping="pathname"
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="bottom"
          theme="light"
          lang="en"
          loading="lazy"
        />
      </div>
    </section>
  )
}


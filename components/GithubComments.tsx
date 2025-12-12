"use client"

import Giscus from '@giscus/react'

export default function GithubComments() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      <p className="text-sm text-zinc-600 mb-4">
        Sign in with GitHub to leave a comment.
      </p>
      <script src="https://giscus.app/client.js"
        data-repo="yizhuoliang/yizhuoliang.github.io"
        data-repo-id="R_kgDONk8UTA"
        data-category="General"
        data-category-id="DIC_kwDONk8UTM4CzsPi"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossOrigin="anonymous"
        async>
      </script>
    </section>
  )
}


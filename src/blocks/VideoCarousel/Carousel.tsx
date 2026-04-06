'use client'

import { useState } from 'react'

interface Video {
  youtubeUrl: string
  title?: string | null
}

function getYouTubeEmbedUrl(url: string): string {
  const videoIdMatch =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/) ||
    url.match(/^([a-zA-Z0-9_-]{11})$/)

  const videoId = videoIdMatch ? videoIdMatch[1] : url
  return `https://www.youtube.com/embed/${videoId}`
}

export function Carousel({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? videos.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === videos.length - 1 ? 0 : i + 1))

  const video = videos[current]

  return (
    <div className="relative">
      {/* Video */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <iframe
          key={current}
          src={getYouTubeEmbedUrl(video.youtubeUrl)}
          title={video.title || `Video ${current + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {/* Title */}
      {video.title && (
        <p className="mt-4 text-center text-lg font-semibold text-forest-green-800">
          {video.title}
        </p>
      )}

      {/* Controls */}
      {videos.length > 1 && (
        <>
          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Forrige video"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-forest-green-950/80 p-3 text-white shadow-lg transition-all hover:bg-forest-green-900 hover:scale-110 focus-visible:ring-2 focus-visible:ring-forest-green-400 focus-visible:ring-offset-2 md:-translate-x-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Næste video"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-forest-green-950/80 p-3 text-white shadow-lg transition-all hover:bg-forest-green-900 hover:scale-110 focus-visible:ring-2 focus-visible:ring-forest-green-400 focus-visible:ring-offset-2 md:translate-x-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Gå til video ${i + 1}`}
                className={`h-3 w-3 rounded-full transition-all ${
                  i === current
                    ? 'bg-forest-green-600 scale-125'
                    : 'bg-warm-gray hover:bg-forest-green-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

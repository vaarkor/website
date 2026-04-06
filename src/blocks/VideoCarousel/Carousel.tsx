'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Video {
  youtubeUrl: string
  title?: string | null
}

function getVideoId(url: string): string {
  const match =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/) ||
    url.match(/^([a-zA-Z0-9_-]{11})$/)
  return match ? match[1] : url
}

function getYouTubeEmbedUrl(url: string): string {
  return `https://www.youtube.com/embed/${getVideoId(url)}`
}

function getYouTubeThumbnail(url: string): string {
  return `https://img.youtube.com/vi/${getVideoId(url)}/hqdefault.jpg`
}

export function Carousel({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState(0)

  // Build visible slides: up to 2 on each side of current
  const getOffset = (index: number) => index - current

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Coverflow track */}
      <div className="relative w-full overflow-hidden" style={{ perspective: '1200px' }}>
        {/* Reserve height based on the center card */}
        <div className="relative mx-auto w-full" style={{ paddingBottom: '45%' }}>
          {videos.map((v, i) => {
            const offset = getOffset(i)
            const absOffset = Math.abs(offset)

            // Only render slides within 2 positions of current
            if (absOffset > 2) return null

            const isActive = offset === 0

            // Transform values based on position
            const translateX = offset * 38 // % shift left/right
            const translateZ = isActive ? 0 : -150 - absOffset * 50 // push back
            const scale = isActive ? 1 : 0.75 - absOffset * 0.05
            const opacity = isActive ? 1 : 0.6 - absOffset * 0.15
            const zIndex = 10 - absOffset

            return (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                disabled={isActive}
                aria-label={v.title || `Video ${i + 1}`}
                className="absolute inset-0 m-auto w-[65%] transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-forest-green-400 focus-visible:ring-offset-2"
                style={{
                  transform: `translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  cursor: isActive ? 'default' : 'pointer',
                }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  {/* Pre-render iframe so it's ready when slide becomes active */}
                  <iframe
                    src={getYouTubeEmbedUrl(v.youtubeUrl)}
                    title={v.title || `Video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    tabIndex={isActive ? 0 : -1}
                  />
                  {/* Thumbnail overlay — hides when active to reveal loaded iframe */}
                  <Image
                    src={getYouTubeThumbnail(v.youtubeUrl)}
                    alt={v.title || `Video ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 35vw"
                    className={`object-cover transition-opacity duration-300 ${
                      isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

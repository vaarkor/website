import type { Page } from '@/payload-types'
import Link from 'next/link'

type HeroVideoBlock = Extract<NonNullable<Page['blocks']>[number], { blockType: 'hero-video' }>

function getYouTubeEmbedId(url: string): string {
  const videoIdMatch =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/) ||
    url.match(/^([a-zA-Z0-9_-]{11})$/)

  return videoIdMatch ? videoIdMatch[1] : url
}

export function HeroVideo({ block }: { block: HeroVideoBlock }) {
  const isYouTube = block.videoSource === 'youtube'
  const videoUrl =
    !isYouTube && typeof block.video === 'object' && block.video ? block.video.url : null
  const youtubeId = isYouTube && block.youtubeUrl ? getYouTubeEmbedId(block.youtubeUrl) : null

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      {isYouTube && youtubeId ? (
        <div className="absolute inset-0 h-full w-full">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Background video"
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 ratio
              minHeight: '100vh',
              minWidth: '177.78vh', // 16:9 ratio
            }}
          />
        </div>
      ) : (
        videoUrl && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-4">
        <h1 className="text-center text-5xl font-bold text-white drop-shadow-lg md:text-7xl">
          VÅR — Vokalensemble Aarhus
        </h1>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={block.primaryButton.link}
            className="rounded-lg bg-forest-green-700 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:bg-forest-green-800 hover:scale-105 focus-visible:ring-2 focus-visible:ring-forest-green-400 focus-visible:ring-offset-2"
          >
            {block.primaryButton.label}
          </Link>

          <Link
            href={block.secondaryButton.link}
            className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-forest-green-900 shadow-xl transition-all hover:bg-gray-100 hover:scale-105 focus-visible:ring-2 focus-visible:ring-forest-green-400 focus-visible:ring-offset-2"
          >
            {block.secondaryButton.label}
          </Link>
        </div>
      </div>
    </section>
  )
}

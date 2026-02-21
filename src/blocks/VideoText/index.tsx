import type { Page } from '@/payload-types'
import { serializeLexical } from '@/lib/serializeLexical'

type VideoTextBlock = Extract<NonNullable<Page['blocks']>[number], { blockType: 'video-text' }>

function getYouTubeEmbedUrl(url: string): string {
  // Handle various YouTube URL formats
  const videoIdMatch =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/) ||
    url.match(/^([a-zA-Z0-9_-]{11})$/)

  const videoId = videoIdMatch ? videoIdMatch[1] : url

  return `https://www.youtube.com/embed/${videoId}`
}

export function VideoText({ block }: { block: VideoTextBlock }) {
  const embedUrl = getYouTubeEmbedUrl(block.youtubeUrl)
  const isLeft = block.videoPosition === 'left'

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid gap-8 md:grid-cols-2 md:gap-12 items-center ${
            isLeft ? '' : 'md:grid-flow-dense'
          }`}
        >
          {/* Video */}
          <div className={`relative ${isLeft ? '' : 'md:col-start-2'}`}>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                src={embedUrl}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-4 ${isLeft ? '' : 'md:col-start-1'}`}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {serializeLexical(block.content)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import type { Page } from '@/payload-types'
import { Carousel } from './Carousel'

type VideoCarouselBlock = Extract<
  NonNullable<Page['blocks']>[number],
  { blockType: 'video-carousel' }
>

export function VideoCarousel({ block }: { block: VideoCarouselBlock }) {
  if (!block.videos || block.videos.length === 0) return null

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="mx-auto max-w-4xl">
        {block.heading && (
          <h2 className="mb-8 text-center font-bold text-forest-green-950">{block.heading}</h2>
        )}
        <Carousel videos={block.videos} />
      </div>
    </section>
  )
}

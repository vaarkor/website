import type { Page as PageType } from '@/payload-types'
import { HeroVideo } from '@/blocks/HeroVideo'
import { ZigZag } from '@/blocks/ZigZag'
import { Parallax } from '@/blocks/Parallax'
import { VideoText } from '@/blocks/VideoText'
import { ContactFormBlock } from '@/blocks/ContactForm'
import { VideoCarousel } from '@/blocks/VideoCarousel'

export function RenderBlocks({ blocks }: { blocks: PageType['blocks'] }) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'hero-video':
            return <HeroVideo key={index} block={block} />

          case 'zig-zag':
            return <ZigZag key={index} block={block} />

          case 'parallax':
            return <Parallax key={index} block={block} />

          case 'video-text':
            return <VideoText key={index} block={block} />

          case 'contact-form':
            return <ContactFormBlock key={index} block={block} />

          case 'video-carousel':
            return <VideoCarousel key={index} block={block} />

          default:
            return null
        }
      })}
    </>
  )
}

import type { Page } from '@/payload-types'
import Image from 'next/image'
import { serializeLexical } from '@/lib/serializeLexical'

type ZigZagBlock = Extract<NonNullable<Page['blocks']>[number], { blockType: 'zig-zag' }>

export function ZigZag({ block }: { block: ZigZagBlock }) {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">
        {block.items?.map((item, index) => {
          const imageUrl = typeof item.image === 'object' && item.image?.url ? item.image.url : null
          const imageAlt = typeof item.image === 'object' && item.image?.alt ? item.image.alt : ''
          const isLeft = item.imagePosition === 'left'

          return (
            <div
              key={index}
              className={`grid gap-8 md:grid-cols-2 md:gap-12 items-center ${
                isLeft ? '' : 'md:grid-flow-dense'
              }`}
            >
              {/* Image */}
              <div className={`relative h-[400px] ${isLeft ? '' : 'md:col-start-2'}`}>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="rounded-lg object-cover shadow-lg"
                  />
                )}
              </div>

              {/* Content */}
              <div className={`space-y-4 ${isLeft ? '' : 'md:col-start-1'}`}>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {serializeLexical(item.content)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

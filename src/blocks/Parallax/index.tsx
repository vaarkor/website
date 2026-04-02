import type { Page } from '@/payload-types'
import { serializeLexical } from '@/lib/serializeLexical'

type ParallaxBlock = Extract<NonNullable<Page['blocks']>[number], { blockType: 'parallax' }>

export function Parallax({ block }: { block: ParallaxBlock }) {
  const imageUrl =
    typeof block.backgroundImage === 'object' && block.backgroundImage?.url
      ? block.backgroundImage.url
      : null

  const heightClasses = {
    small: 'min-h-[400px]',
    medium: 'min-h-[600px]',
    large: 'min-h-[800px]',
  }

  const minHeight =
    heightClasses[block.minHeight as keyof typeof heightClasses] || heightClasses.medium

  return (
    <section className={`relative ${minHeight} flex items-center overflow-hidden`}>
      {/* Fixed Background Image */}
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16">
        <div className="rounded-lg bg-white/90 dark:bg-forest-green-900/90 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {serializeLexical(block.content)}
          </div>
        </div>
      </div>
    </section>
  )
}

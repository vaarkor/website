import type { Page } from '@/payload-types'
import { ContactForm } from './Form'

type ContactFormBlock = Extract<NonNullable<Page['blocks']>[number], { blockType: 'contact-form' }>

export function ContactFormBlock({ block }: { block: ContactFormBlock }) {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="mx-auto max-w-2xl">
        {block.heading && (
          <h2 className="mb-4 text-center font-bold text-forest-green-950">{block.heading}</h2>
        )}
        {block.description && (
          <p className="mb-8 text-center text-bark-brown">{block.description}</p>
        )}
        <ContactForm subject={block.emailSubject} />
      </div>
    </section>
  )
}

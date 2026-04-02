import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import config from '@/payload.config'
import { RenderBlocks } from '@/components/RenderBlocks'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    depth: 2,
  })

  const page = pages.docs[0]

  if (!page) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-forest-green-800">Welcome to VÅR</h1>
          <p className="mt-4 text-lg text-bark-brown">
            Please create a page with slug &ldquo;home&rdquo; in the Payload admin panel.
          </p>
          <Link
            href="/admin"
            className="mt-8 inline-block rounded-lg bg-forest-green-600 px-6 py-3 text-white hover:bg-forest-green-700 focus-visible:ring-2 focus-visible:ring-forest-green-400 focus-visible:ring-offset-2"
          >
            Go to Admin Panel
          </Link>
        </div>
      </div>
    )
  }

  return <RenderBlocks blocks={page.blocks} />
}

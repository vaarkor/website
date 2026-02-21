import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { RenderBlocks } from '@/components/RenderBlocks'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    limit: 100,
  })

  return pages.docs
    .filter((page) => page.slug !== 'home')
    .map((page) => ({
      slug: page.slug,
    }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })

  const page = pages.docs[0]

  if (!page) {
    notFound()
  }

  return <RenderBlocks blocks={page.blocks} />
}

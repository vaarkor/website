import React, { Fragment } from 'react'

type LexicalContent = {
  root?: {
    children?: LexicalNode[]
  }
}

type LexicalNode = {
  type: string
  text?: string
  format?: number
  children?: LexicalNode[]
  tag?: string
  listType?: string
  fields?: {
    url?: string
    newTab?: boolean
  }
}

export function serializeLexical(content: LexicalContent): React.ReactNode {
  if (!content?.root?.children) {
    return null
  }

  return <>{content.root.children.map((node, i: number) => serializeNode(node, i))}</>
}

function serializeNode(node: LexicalNode, key: number): React.ReactNode {
  if (!node) return null

  // Text node
  if (node.type === 'text') {
    let content: React.ReactNode = node.text

    const fmt = node.format ?? 0

    if (fmt & 1) content = <strong>{content}</strong>
    if (fmt & 2) content = <em>{content}</em>
    if (fmt & 8) content = <u>{content}</u>
    if (fmt & 16) content = <s>{content}</s>
    if (fmt & 32) content = <code>{content}</code>

    return <Fragment key={key}>{content}</Fragment>
  }

  // Element nodes
  const children = node.children?.map((child: LexicalNode, i: number) => serializeNode(child, i))

  switch (node.type) {
    case 'paragraph':
      return <p key={key}>{children}</p>

    case 'heading': {
      const HeadingTag = (node.tag ?? 'h2') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
      return <HeadingTag key={key}>{children}</HeadingTag>
    }

    case 'list':
      const ListTag = node.listType === 'bullet' ? 'ul' : 'ol'
      return <ListTag key={key}>{children}</ListTag>

    case 'listitem':
      return <li key={key}>{children}</li>

    case 'quote':
      return <blockquote key={key}>{children}</blockquote>

    case 'link':
      return (
        <a
          key={key}
          href={node.fields?.url}
          target={node.fields?.newTab ? '_blank' : undefined}
          rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )

    case 'linebreak':
      return <br key={key} />

    default:
      return <Fragment key={key}>{children}</Fragment>
  }
}

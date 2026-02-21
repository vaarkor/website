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
    let text = <span key={key}>{node.text}</span>

    if (node.format & 1) {
      // Bold
      text = <strong key={key}>{node.text}</strong>
    }
    if (node.format & 2) {
      // Italic
      text = <em key={key}>{node.text}</em>
    }
    if (node.format & 8) {
      // Underline
      text = <u key={key}>{node.text}</u>
    }
    if (node.format & 16) {
      // Strikethrough
      text = <s key={key}>{node.text}</s>
    }
    if (node.format & 32) {
      // Code
      text = <code key={key}>{node.text}</code>
    }

    return text
  }

  // Element nodes
  const children = node.children?.map((child: LexicalNode, i: number) => serializeNode(child, i))

  switch (node.type) {
    case 'paragraph':
      return <p key={key}>{children}</p>

    case 'heading':
      const HeadingTag = `h${node.tag}` as keyof JSX.IntrinsicElements
      return <HeadingTag key={key}>{children}</HeadingTag>

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

import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL path for this page (e.g., "join-us" or "hire-us")',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      required: true,
      blocks: [
        {
          slug: 'hero-video',
          labels: {
            singular: 'Hero Video Block',
            plural: 'Hero Video Blocks',
          },
          fields: [
            {
              name: 'video',
              type: 'upload',
              relationTo: 'media',
              required: true,
              filterOptions: {
                mimeType: { contains: 'video' },
              },
            },
            {
              name: 'primaryButton',
              type: 'group',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  defaultValue: 'Want to join us?',
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Slug of the page to link to (e.g., "/join-us")',
                  },
                },
              ],
            },
            {
              name: 'secondaryButton',
              type: 'group',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  defaultValue: 'Want to hire us?',
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Slug of the page to link to (e.g., "/hire-us")',
                  },
                },
              ],
            },
          ],
        },
        {
          slug: 'zig-zag',
          labels: {
            singular: 'Zig-Zag Block',
            plural: 'Zig-Zag Blocks',
          },
          fields: [
            {
              name: 'items',
              type: 'array',
              required: true,
              minRows: 1,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  filterOptions: {
                    mimeType: { contains: 'image' },
                  },
                },
                {
                  name: 'content',
                  type: 'richText',
                  required: true,
                },
                {
                  name: 'imagePosition',
                  type: 'select',
                  required: true,
                  defaultValue: 'left',
                  options: [
                    { label: 'Left', value: 'left' },
                    { label: 'Right', value: 'right' },
                  ],
                },
              ],
            },
            {
              name: 'contactEmail',
              type: 'email',
              admin: {
                description: 'Optional: Email address for the call-to-action button',
              },
            },
            {
              name: 'contactButtonText',
              type: 'text',
              defaultValue: 'Contact us for audition',
              admin: {
                description: 'Text for the email button (only shown if email is provided)',
              },
            },
          ],
        },
        {
          slug: 'parallax',
          labels: {
            singular: 'Parallax Block',
            plural: 'Parallax Blocks',
          },
          fields: [
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              filterOptions: {
                mimeType: { contains: 'image' },
              },
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
            },
            {
              name: 'minHeight',
              type: 'select',
              defaultValue: 'medium',
              options: [
                { label: 'Small (400px)', value: 'small' },
                { label: 'Medium (600px)', value: 'medium' },
                { label: 'Large (800px)', value: 'large' },
              ],
            },
          ],
        },
        {
          slug: 'video-text',
          labels: {
            singular: 'Video + Text Block',
            plural: 'Video + Text Blocks',
          },
          fields: [
            {
              name: 'youtubeUrl',
              type: 'text',
              required: true,
              admin: {
                description: 'YouTube video URL or embed ID',
              },
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
            },
            {
              name: 'videoPosition',
              type: 'select',
              required: true,
              defaultValue: 'left',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ],
            },
          ],
        },
      ],
    },
  ],
}

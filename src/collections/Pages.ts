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
              name: 'videoSource',
              type: 'select',
              required: true,
              defaultValue: 'youtube',
              options: [
                { label: 'YouTube URL', value: 'youtube' },
                { label: 'Upload Video File', value: 'upload' },
              ],
            },
            {
              name: 'youtubeUrl',
              type: 'text',
              admin: {
                description: 'YouTube video URL or ID',
                condition: (data, siblingData) => siblingData.videoSource === 'youtube',
              },
              validate: (
                value: string | null | undefined,
                { siblingData }: { siblingData: Record<string, unknown> },
              ) => {
                if (siblingData.videoSource === 'youtube' && !value) {
                  return 'YouTube URL is required'
                }
                return true
              },
            },
            {
              name: 'video',
              type: 'upload',
              relationTo: 'media',
              filterOptions: {
                mimeType: { contains: 'video' },
              },
              admin: {
                condition: (data, siblingData) => siblingData.videoSource === 'upload',
              },
              validate: (
                value: unknown,
                { siblingData }: { siblingData: Record<string, unknown> },
              ) => {
                if (siblingData.videoSource === 'upload' && !value) {
                  return 'Video file is required'
                }
                return true
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
        {
          slug: 'contact-form',
          labels: {
            singular: 'Contact Form Block',
            plural: 'Contact Form Blocks',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              defaultValue: 'Kontakt os',
              admin: {
                description: 'Optional heading above the form',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              admin: {
                description: 'Optional description text below the heading',
              },
            },
            {
              name: 'emailSubject',
              type: 'text',
              required: true,
              defaultValue: 'Ny henvendelse fra kontaktformularen',
              admin: {
                description: 'The email subject line (e.g., "Ny anmodning om at tilslutte koret")',
              },
            },
          ],
        },
        {
          slug: 'video-carousel',
          labels: {
            singular: 'Video Carousel Block',
            plural: 'Video Carousel Blocks',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              admin: {
                description: 'Optional heading above the carousel',
              },
            },
            {
              name: 'videos',
              type: 'array',
              required: true,
              minRows: 1,
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
                  name: 'title',
                  type: 'text',
                  admin: {
                    description: 'Optional title shown below the video',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

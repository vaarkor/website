import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'senderEmail', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true,
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation !== 'create') return

        const contactEmail = process.env.CONTACT_EMAIL
        if (!contactEmail) {
          req.payload.logger.error('CONTACT_EMAIL env var is not set — skipping email send')
          return
        }

        try {
          await req.payload.sendEmail({
            to: contactEmail,
            subject: `Kontaktformular: ${doc.subject}`,
            replyTo: doc.senderEmail,
            html: `
              <h2>Ny besked fra kontaktformularen</h2>
              <p><strong>Fra:</strong> ${doc.senderEmail}</p>
              <p><strong>Emne:</strong> ${doc.subject}</p>
              <hr />
              <p>${doc.message.replace(/\n/g, '<br />')}</p>
            `,
          })
        } catch (err) {
          req.payload.logger.error({ err }, 'Failed to send contact form email')
        }
      },
    ],
  },
  fields: [
    {
      name: 'senderEmail',
      type: 'email',
      required: true,
      label: 'Sender Email',
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Subject',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
  ],
}

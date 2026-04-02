import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(request: Request) {
  const body = await request.json()
  const { senderEmail, subject, message } = body

  if (!senderEmail || !subject || !message) {
    return Response.json({ error: 'All fields are required' }, { status: 400 })
  }

  if (typeof senderEmail !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 })
  }

  if (typeof subject !== 'string' || subject.length > 200) {
    return Response.json({ error: 'Subject must be under 200 characters' }, { status: 400 })
  }

  if (typeof message !== 'string' || message.length > 5000) {
    return Response.json({ error: 'Message must be under 5000 characters' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'form-submissions',
      data: {
        senderEmail,
        subject,
        message,
      },
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

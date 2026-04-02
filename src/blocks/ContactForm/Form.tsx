'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

export function ContactForm({ subject }: { subject: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      senderEmail: formData.get('senderEmail'),
      subject,
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Something went wrong')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-forest-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-forest-green-800">
          Tak for din besked! Vi vender tilbage hurtigst muligt.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="senderEmail" className="block text-sm font-semibold text-charcoal mb-1">
          Din e-mail
        </label>
        <input
          id="senderEmail"
          name="senderEmail"
          type="email"
          required
          placeholder="din@email.dk"
          className="w-full rounded-lg border border-warm-gray px-4 py-3 text-charcoal placeholder:text-bark-brown/50 focus:outline-none focus:ring-2 focus:ring-forest-green-400 focus:ring-offset-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-1">
          Besked
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="Skriv din besked her..."
          className="w-full rounded-lg border border-warm-gray px-4 py-3 text-charcoal placeholder:text-bark-brown/50 focus:outline-none focus:ring-2 focus:ring-forest-green-400 focus:ring-offset-2 resize-y"
        />
      </div>

      {status === 'error' && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-lg bg-forest-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-forest-green-700 hover:scale-105 focus-visible:ring-2 focus-visible:ring-forest-green-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'sending' ? 'Sender...' : 'Send besked'}
      </button>
    </form>
  )
}

import React from 'react'
import './styles.css'

export const metadata = {
  description: 'VÅR - Vokalensemble Aarhus - Join our choir or hire us for your event',
  title: 'VÅR - Vokalensemble Aarhus',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="da">
      <body className="bg-white text-charcoal">
        <main>{children}</main>
      </body>
    </html>
  )
}

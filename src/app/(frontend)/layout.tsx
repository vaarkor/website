import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import './styles.css'

export const metadata = {
  description: 'VÅR - Vokalensemble Aarhus - Join our choir or hire us for your event',
  title: 'VÅR - Vokalensemble Aarhus',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="light">
      <body className="bg-spring-50 text-gray-900 dark:bg-forest-950 dark:text-gray-100">
        <main>{children}</main>
        <ThemeToggle />
      </body>
    </html>
  )
}

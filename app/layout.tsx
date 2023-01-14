'use client'

import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
        <body className=" bg-[url('/cool-background2.png')] ">
          <SessionProvider refetchOnWindowFocus={false}>
          {children}
          </SessionProvider>
        </body>
    </html>
  )
}

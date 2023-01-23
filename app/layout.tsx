'use client'

import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()
  return (
    // TODO: Remove this once use hook is fixed
    <QueryClientProvider client={queryClient}>
    <html>
      <head />
        <body className=" bg-[url('/cool-background2.png')] ">
          <SessionProvider refetchOnWindowFocus={false}>
          {children}
          </SessionProvider>
        </body>
    </html>
    </QueryClientProvider>
  )
}

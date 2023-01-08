import TopBar from './topBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  )
}
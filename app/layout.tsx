import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className=" bg-[url('/cool-background2.png')] ">{children}</body>
    </html>
  )
}

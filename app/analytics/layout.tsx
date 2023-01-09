import MainMenu from './MainMenu'
import TopBar from './topBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div>
          <TopBar />
          {children}
        </div>
      </body>
    </html>
  )
}
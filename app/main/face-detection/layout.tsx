import FaceDetectionSelector from './faceDetectionSelector';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div>
            <FaceDetectionSelector />
          {children}
        </div>
  )
}
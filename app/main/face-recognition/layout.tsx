import FaceRecognitionSelector from './faceRecognitionSelector';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div>
            <FaceRecognitionSelector />
          {children}
        </div>
  )
}
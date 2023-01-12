import MainMenu from './MainMenu'
import TopBar from './topBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <TopBar />
        <div className='relative p-5 my-[2vh] mx-[2vw] md:mx-[8vw] lg:mx-[15vw]'>
          {/* Div Background */}
          <div className='absolute z-[-1] rounded-lg top-0 left-0 w-full h-full bg-[#221c28] opacity-95'></div>
        {children}
        </div>
      </>
  )
}
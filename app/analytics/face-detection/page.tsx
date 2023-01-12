import type { NextPage } from 'next'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { BiStopCircle } from 'react-icons/bi'

const FaceDetectionPage: NextPage = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div className='mx-1'>
                        <button className='bg-[#2b2532] text-gray-400 hover:bg-[#3f3847] hover:text-gray-200 active:bg-green-700 border 
                                    border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-2'>Live</button>
                        <button className='bg-[#2b2532] text-gray-400 hover:bg-[#3f3847] hover:text-gray-200 active:bg-green-700 border 
                                    border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-2'>Snap</button>
                </div>
                <video className='border border-green-600 rounded-lg w-full h-full'></video>
                <div className='bg-[#2b2532] focus:bg-[#3f3847] rounded-lg p-4 my-4'>
                    <div>
                        
                    </div>
                    <div className='flex items-center justify-center space-x-16'>
                        <h5 className="hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 active:bg-green-700 rounded-lg px-4 py-1 hover:bg-[#3f3847]
                                 active:translate-y-1 text-4xl cursor-pointer text-gray-400 "><AiOutlinePlayCircle/></h5>
                        <h5 className="hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 active:bg-green-700 rounded-lg px-4 py-1 hover:bg-[#3f3847]
                                 active:translate-y-1 text-4xl cursor-pointer text-gray-400 "><BiStopCircle/></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaceDetectionPage;
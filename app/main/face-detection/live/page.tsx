'use client';

import { useState } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BiStopCircle } from 'react-icons/bi';
import { FaceDetectionStream } from './FaceDetectionStream';
import VideoElement from './VideoElement';

function FaceDetectionLive(): any {
    const faceDetectionStream: FaceDetectionStream = new FaceDetectionStream();
    const [videoStream, setVideoStream] = useState<MediaStream>();

    const startVideo = async () => {
        const stream:MediaStream = await faceDetectionStream.start();
        setVideoStream(stream);
    };

    const stopVideo = () => {
        faceDetectionStream.stop();
    };

    return (
    <>
        <div className='flex flex-col'>
            {videoStream ? 
                <VideoElement className='border border-green-600 rounded-lg w-full h-full' srcObject={videoStream} autoPlay={true} controls={true}/>
                : <video className='border border-green-600 rounded-lg w-full h-full'/>}
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
    )
};

export default FaceDetectionLive;
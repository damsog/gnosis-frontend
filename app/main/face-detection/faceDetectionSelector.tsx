'use client'

import type { NextPage } from 'next'
import { useState } from 'react';
import Link from 'next/link';

const FaceDetectionSelector: NextPage = () => {
    const [ option, setOption ] = useState<string>();
    
    const selectOption = (option:string) => {
        setOption(option);
    }

    return (
        <>
            <div className='flex justify-center'>
                <h5 className='text-gray-300 text-lg'>Face Detection 
                    {option === "live" && <span className='rounded-md p-1 bg-green-700 font-light'>Live</span>}
                    {option === "snap" && <span className='rounded-md p-1 bg-green-700 font-light'>Snap</span>}
                </h5>
            </div>
            <div className='mx-1'>
                    <Link rel="stylesheet" href={`/main/face-detection/live`}>
                        <button className={`text-gray-400 hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-2 
                                ${option === "live" ? "bg-green-700 text-gray-200" : "bg-[#2b2532] hover:bg-[#3f3847]"}`} onClick={()=>selectOption("live")}>Live</button>
                    </Link>
                    <Link rel="stylesheet" href={`/main/face-detection/snap`}>
                        <button className={`text-gray-400 hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-2 
                                ${option === "snap" ? "bg-green-700 text-gray-200" : "bg-[#2b2532] hover:bg-[#3f3847]"}`} onClick={()=>selectOption("snap")}>Snap</button>
                    </Link>
            </div>
        </>
    );
};

export default FaceDetectionSelector;
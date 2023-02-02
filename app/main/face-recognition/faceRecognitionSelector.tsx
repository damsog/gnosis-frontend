'use client'

import type { NextPage } from 'next'
import { useState } from 'react';
import Link from 'next/link';
import GroupSelection from './GroupSelection';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import FaceDetectionLive from './FaceRecognitionLive';
import FaceDetectionSnap from './FaceRecognitionSnap';

const FaceRecognitionSelector: NextPage = () => {
    const [ option, setOption ] = useState<string>("live");
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        },
    })
    const router = useRouter();
    
    if(status === "loading") return <div className="text-green-700">Loading...</div> 
    
    const selectOption = (option:string) => {
        setOption(option);
    }

    return (
        <div>
            <div className='flex justify-center'>
                <h5 className='text-gray-300 text-lg'>Face Recognition 
                    {option === "live" && <span className='rounded-md p-1 bg-green-700 font-light'>Live</span>}
                    {option === "snap" && <span className='rounded-md p-1 bg-green-700 font-light'>Snap</span>}
                </h5>
            </div>
            <div className='relative'>
                <div className='absolute top-0 right-0'>
                    <div className='mx-1'>
                                <button className={`text-gray-400 hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-1
                                        ${option === "live" ? "bg-green-700 text-gray-200" : "bg-[#2b2532] hover:bg-[#3f3847]"}`} onClick={()=>selectOption("live")}>Live</button>
                                <button className={`text-gray-400 hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-1 
                                        ${option === "snap" ? "bg-green-700 text-gray-200" : "bg-[#2b2532] hover:bg-[#3f3847]"}`} onClick={()=>selectOption("snap")}>Snap</button>
                    </div>
                </div>
                <GroupSelection option={option} userId={session.userId as string} apikey={session.apikey as string}/>
            </div>
        </div>
    );
};

export default FaceRecognitionSelector;
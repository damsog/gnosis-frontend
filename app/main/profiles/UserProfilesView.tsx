'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ProfileList from "./ProfileList";
import { IoAddSharp } from 'react-icons/io5';
import { Suspense } from "react";

const UserProfilesView = () => {
    //const { data: session, status } = useSession({ required: true });
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        },
    })
    const router = useRouter();

    if(status === "loading") return <div className="text-green-700">Loading...</div>  

    return (
        <>              
            <div className='flex justify-center'>
                <h5 className='text-gray-300 text-lg'>Profiles</h5>
            </div>
            <div className='flex'>
                <h5 className="shadow-lg hover:shadow-green-700/50 rounded-lg py-1 px-2 hover:bg-[#3f3847]
                                active:translate-y-1 text-4xl font-thin cursor-pointer text-gray-400"><IoAddSharp/></h5>
            </div>
            <div>
                <hr className="p-2 border-green-700" />
            </div>
            <div className=' space-y-4'>
                <ProfileList userId={session.userId as string} apikey={session.apikey as string} />
            </div>
        </>
    );
};

export default UserProfilesView;
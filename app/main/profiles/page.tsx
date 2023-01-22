'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ProfileList from "./ProfileList";
import { IoAddSharp } from 'react-icons/io5';
import { Suspense } from "react";
import NewProfileDialog from "./NewProfileDialog";

const ProfilesPage = () => {
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
                <NewProfileDialog userId={session.userId as string} apikey={session.apikey as string} />
            </div>
            <div>
                <hr className="p-2 border-green-700" />
            </div>
            <div className=' space-y-4'>
                <Suspense fallback={<div className="text-green-700">Loading...</div>}>
                    <ProfileList userId={session.userId as string} apikey={session.apikey as string} />
                </Suspense>
            </div>
        </>
    );
};

export default ProfilesPage;
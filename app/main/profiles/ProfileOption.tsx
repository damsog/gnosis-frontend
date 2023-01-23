import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { GiCheckMark } from 'react-icons/gi'
import { BsExclamationLg } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQueryClient } from 'react-query'

interface ProfileOptionProps {
    profileId: string
    name: string
    description: string
    coded: boolean
    apikey: string
    className?: string
}

export default function ProfileOption({profileId, name, description, coded, apikey, className}:ProfileOptionProps) {
    const router = useRouter();
    // TODO: Remove this once use hook is fixed
    const queryClient = useQueryClient();

    const deleteProfile = async () => {
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/${profileId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': apikey
                },
            });
            console.log(`Response: ${JSON.stringify(response)}`);

            // TODO: Remove this once use hook is fixed
            //router.refresh();        
            queryClient.invalidateQueries('profiles');
        }catch(e){
            console.log(`Error: ${e}`);
        }
  };

  return (
    <div className={`flex flex-row items-center justify-between shadow-md shadow-green-700/50 p-1 rounded-lg 
                    bg-[#241f2a] hover:bg-[#2b2532] ${className} group`}>
        <Link href={`/main/profiles/${profileId}`}>
            <div className='mx-4 my-2 cursor-pointer flex items-center space-x-4'>
                <img className='w-10 h-10 rounded-full border border-green-700' src="/no_avatar.webp" alt="" />
                <div className=''>
                    <h5 className='text-gray-300'>{name}</h5>
                    <p className='text-gray-400 font-light text-sm'>{description}</p>
                </div>
            </div>
        </Link>
        <div className='flex'>
            <h5 className="invisible group-hover:visible shadow-lg hover:shadow-green-700/50 rounded-lg px-3 py-1 hover:bg-[#3f3847]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 ">{coded ? <GiCheckMark/> : <BsExclamationLg/> }</h5>
            <h5 className="invisible group-hover:visible shadow-lg hover:shadow-green-700/50 rounded-lg px-3 py-1 hover:bg-[#3f3847]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 " onClick={deleteProfile}><IoTrashOutline/></h5>
        </div>
    </div>
  )
}

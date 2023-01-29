import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { GiCheckMark } from 'react-icons/gi'
import { BsExclamationLg } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQueryClient } from 'react-query'

interface ProfileOptionProps {
    profileId: string
    groupId: string
    name: string
    description: string
    coded: boolean
    apikey: string
    className?: string
}

export default function ProfileOption({profileId, groupId, name, description, coded, apikey, className}:ProfileOptionProps) {
    const router = useRouter();
    // TODO: Remove this once use hook is fixed
    const queryClient = useQueryClient();

    const deleteProfile = async () => {
        const data = {
            "profileIds": [profileId],
            "groupId": groupId
        }

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile-group/profiles-in-group`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': apikey
                },
                body: JSON.stringify(data)
            });
            console.log(`Response: ${JSON.stringify(response)}`);

            // TODO: Remove this once use hook is fixed
            //router.refresh();        
            queryClient.invalidateQueries('group-profiles');
        }catch(e){
            console.log(`Error: ${e}`);
        }
  };

  return (
    <div className={`flex flex-row items-center justify-between p-1 rounded-lg 
                    bg-[#2b2532] hover:bg-[#3f3847] ${className} group`}>
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
            <h5 className="invisible group-hover:visible mx-1 rounded-lg px-3 py-1 hover:bg-[#2b2532]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 ">{coded ? <GiCheckMark/> : <BsExclamationLg/> }</h5>
            <h5 className="invisible group-hover:visible mx-1 rounded-lg px-3 py-1 hover:bg-[#2b2532]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 " onClick={deleteProfile}><IoTrashOutline/></h5>
        </div>
    </div>
  )
}

import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { GiCheckMark } from 'react-icons/gi'
import { BsExclamationLg } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQueryClient } from 'react-query'

interface GroupOptionProps {
    groupId: string
    name: string
    description: string
    dataset: string
    apikey: string
    className?: string
}

export default function GroupOption({groupId, name, description, dataset, apikey, className}:GroupOptionProps) {
    const router = useRouter();
    // TODO: Remove this once use hook is fixed
    const queryClient = useQueryClient();

    const deleteGroup = async () => {
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/group/${groupId}`, {
                method: "DELETE",
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                'Authorization': apikey
                },
            });
            console.log(`Response: ${JSON.stringify(response)}`);

            // TODO: Remove this once use hook is fixed
            //router.refresh();        
            queryClient.invalidateQueries('groups');
        }catch(e){
            console.log(`Error: ${e}`);
        }
  };

  return (
    <div className={`flex flex-row items-center justify-between p-1 rounded-lg 
                    bg-[#2b2532] hover:bg-[#3f3847] ${className} group`}>
        <Link href={`/main/groups/${groupId}`}>
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
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 ">{dataset ? <GiCheckMark/> : <BsExclamationLg/> }</h5>
            <h5 className="invisible group-hover:visible mx-1 rounded-lg px-3 py-1 hover:bg-[#2b2532]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 " onClick={deleteGroup}><IoTrashOutline/></h5>
        </div>
    </div>
  )
}

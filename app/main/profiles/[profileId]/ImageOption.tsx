import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { GiCheckMark } from 'react-icons/gi'
import { BsExclamationLg } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQueryClient } from 'react-query'

interface ImageOptionProps {
    imageId: string
    name: string
    coder: string
    isCoded: boolean
    apikey: string
    className?: string
}

export default function ImageOption({imageId, name, coder, isCoded, apikey, className}:ImageOptionProps) {
    const router = useRouter();
    // TODO: Remove this once use hook is fixed
    const queryClient = useQueryClient();

    const deleteImage = async () => {
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/image/${imageId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': apikey
                },
            });
            console.log(`Response: ${JSON.stringify(response)}`);

            // TODO: Remove this once use hook is fixed
            //router.refresh();        
            queryClient.invalidateQueries('images');
        }catch(e){
            console.log(`Error: ${e}`);
        }
  };

  return (
    <div className={`flex flex-row items-center justify-between p-1 rounded-lg 
                    bg-[#2b2532] hover:bg-[#3f3847] ${className} group`}>
        <div className='mx-4 my-2 cursor-pointer flex items-center space-x-4'>
            <img className='w-10 h-10 rounded-full border border-green-700' src="/no_avatar.webp" alt="" />
            <div className=''>
                <h5 className='text-gray-300'>{name}</h5>
            </div>
        </div>
        <div className='flex'>
            <h5 className="invisible group-hover:visible mx-1 rounded-lg px-3 py-1 hover:bg-[#2b2532]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 ">{isCoded ? <GiCheckMark/> : <BsExclamationLg/> }</h5>
            <h5 className="invisible group-hover:visible mx-1 rounded-lg px-3 py-1 hover:bg-[#2b2532]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 " onClick={deleteImage}><IoTrashOutline/></h5>
        </div>
    </div>
  )
}

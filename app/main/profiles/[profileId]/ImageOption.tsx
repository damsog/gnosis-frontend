import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { GiCheckMark } from 'react-icons/gi'
import { BsExclamationLg } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQueryClient } from 'react-query'
import { BiBarcodeReader } from 'react-icons/bi'

interface ImageOptionProps {
    imageId: string
    profileId: string
    name: string
    coder: string
    isCoded: boolean
    imgSrc: string
    apikey: string
    className?: string
}

interface EncodeImage {
    profileId: string,
    imageIds: string[]
}

export default function ImageOption({imageId, profileId, name, coder, isCoded, imgSrc, apikey, className}:ImageOptionProps) {
    const router = useRouter();
    // TODO: Remove this once use hook is fixed
    const queryClient = useQueryClient();


    const encodeImage = async () => {
        let encodeImageRequest: EncodeImage = {
            profileId: profileId,
            imageIds: [imageId]
        }

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/image/encode`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': apikey
                },
                body: JSON.stringify(encodeImageRequest)
            });
            console.log(`Response: ${JSON.stringify(response)}`);

            // TODO: Remove this once use hook is fixed
            //router.refresh();        
            queryClient.invalidateQueries('images');
        }catch(e){
            console.log(`Error: ${e}`);
        }
    };

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
        <div className='mx-4 my-2 cursor-pointer flex flex-col items-center space-x-4'>
                <div className='flex items-center'>
                    <div className='flex flex-col items-center'>
                        <img className=' h-48 w-auto rounded-lg border border-green-700 hover:transition-transform' src={imgSrc} alt={name} />
                        <h5 className='text-gray-300 font-thin mx-1 mt-2'>{name}</h5>
                    </div>
                    {isCoded  ? <h5 className=' p-2 rounded-lg mx-1 mt-2 text-green-700'> <GiCheckMark/> </h5>: 
                                <h5 className=' p-2 rounded-lg mx-1 mt-2 text-yellow-600'> <BsExclamationLg/> </h5> }
                </div>
        </div>
        <div className='flex'>
            <h5 className="invisible group-hover:visible mx-1 rounded-lg px-3 py-1 hover:bg-[#2b2532]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 " onClick={encodeImage}><BiBarcodeReader/></h5>
            <h5 className="invisible group-hover:visible mx-1 rounded-lg px-3 py-1 hover:bg-[#2b2532]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 " onClick={deleteImage}><IoTrashOutline/></h5>
        </div>
    </div>
  )
}

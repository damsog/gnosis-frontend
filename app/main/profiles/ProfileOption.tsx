import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { GiCheckMark } from 'react-icons/gi'
import { BsExclamationLg } from 'react-icons/bs'

interface ProfileOptionProps {
    name: string
    description: string
    coded: boolean
    className?: string
}

export default function ProfileOption({name, description, coded, className}:ProfileOptionProps) {
  return (
    <div className={`flex flex-row items-center justify-between shadow-md hover:shadow-lg shadow-green-700/50 p-1 rounded-lg 
                    bg-[#241f2a] hover:bg-[#2b2532] ${className} group`}>
        <div>
            <h5 className='text-gray-300'>{name}</h5>
            <p className='text-gray-400 font-light text-sm'>{description}</p>
        </div>
        <div className='flex'>
            <h5 className="invisible group-hover:visible shadow-lg hover:shadow-green-700/50 rounded-lg px-3 py-1 hover:bg-[#3f3847]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 ">{coded ? <GiCheckMark/> : <BsExclamationLg/> }</h5>
            <h5 className="invisible group-hover:visible shadow-lg hover:shadow-green-700/50 rounded-lg px-3 py-1 hover:bg-[#3f3847]
                                 active:translate-y-1 text-xl cursor-pointer text-gray-400 "><IoTrashOutline/></h5>
        </div>
    </div>
  )
}

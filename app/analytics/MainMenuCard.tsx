import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsCameraReels } from 'react-icons/bs';

interface MainMenuCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
}

const MainMenuCard = ({title,description,icon,className}:MainMenuCardProps) => {
    return (
        <>
            {/* Card */}
            <div className={`border rounded-lg border-green-700 shadow-md shadow-green-700/50 space-y-4 py-6 group ${className}`}>
                {/* Icon and Title */}
                <div className='flex flex-col items-center justify-between'>
                    <img  className="h-14 w-14 rounded-md hover:cursor-pointer" src={`${icon}`} />
                    <h5 className='text-gray-300 group-hover:text-gray-100 text-lg'>{title}</h5>
                </div>
                {/* Description */}
                <div className='flex flex-col items-center justify-between'>
                    <p className='text-gray-300 group-hover:text-gray-100 text-center'>{description}</p>
                </div>
                {/* Options. Selectable */}
                <div className='flex flex-col items-center justify-between'>
                    <div className='flex space-x-20'>
                        <h5 className="hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-1 hover:bg-[#3f3847]
                                 active:translate-y-1 text-4xl cursor-pointer text-gray-300 "><AiOutlineCamera/></h5>
                        <h5 className="hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-1 hover:bg-[#3f3847]
                                 active:translate-y-1 text-4xl cursor-pointer text-gray-300 "><BsCameraReels/></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainMenuCard;
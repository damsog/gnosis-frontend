import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import { IoLanguageSharp } from 'react-icons/io5';
import { MdViewSidebar } from 'react-icons/md';
import DropDownAccount from './DropDownAccount';

const TopBar = () => {
    return (
        <div className='bg-[#221c28] h-14 flex items-center'>
            <div className='w-full flex items-center justify-between px-4'>
                {/* Left Side */}
                <div>
                    <h5 className=" text-2xl cursor-pointer text-gray-300 hover:text-green-600"><MdViewSidebar/></h5>
                </div>
                {/* Right Side */}
                <div className='flex items-center space-x-4'>
                    <h5 className=" text-2xl cursor-pointer text-gray-300 hover:text-green-600"><MdDarkMode/></h5>
                    <h5 className=" text-2xl cursor-pointer text-gray-300 hover:text-green-600"><IoLanguageSharp/></h5>
                    {/* Logo. TODO: Substitute for dropdown */}
                    <div className='flex items-center'>
                        <DropDownAccount up={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
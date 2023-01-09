import React from 'react';
import MainMenuCard from './MainMenuCard';

const MainMenu = () => {
    return (
        <div className='bg-[#221c28] p-5 opacity-95 rounded-lg my-[2vh] mx-[2vw] md:mx-[8vw] lg:mx-[15vw]'>
            {/* Cards */}
            <div className=' space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4'>
                <MainMenuCard 
                    title='Face Detection'
                    description='Find faces in images or videos. Take a picture from your browser or upload it from your computer to get started. 
                    or start a video feed to detect faces in real time.'
                    icon='/main_menu_images/face_detection_icon.png'
                    redirectPath='/analytics/face-detection'
                    className='bg-[#2b2532] hover:bg-[#302a36]'
                />
                <MainMenuCard 
                    title='Face Recognition'
                    description='Find faces and identify them in images or videos. Create a dataset of known faces and then Take a picture from your browser or upload it from your computer to get started. 
                    or start a video feed to detect faces in real time.'
                    icon='/main_menu_images/face_recognition_icon.png'
                    redirectPath='/analytics/face-recognition'
                    className='bg-[#2b2532] hover:bg-[#302a36]'
                />
                <MainMenuCard 
                    title='Groups'
                    description='Create groups of profiles to create a reocnition dataset, access control, continuous vigilance.'
                    icon='/main_menu_images/groups_icon.png'
                    redirectPath='/analytics/groups'
                    className='bg-[#2b2532] hover:bg-[#302a36]'
                />
                <MainMenuCard 
                    title='Continuous Vigilance'
                    description='Start a video feed to detect and identify faces in real time and keep record of them.'
                    icon='/main_menu_images/continuous_vigilance_icon.png'
                    redirectPath='/analytics/continuous-vigilance'
                    className='bg-[#2b2532] hover:bg-[#302a36]'
                />
                <MainMenuCard 
                    title='Access Control'
                    description='Create acess lists and start a service to control access to a place or a building.'
                    icon='/main_menu_images/face_detection_icon.png'
                    redirectPath='/analytics/access-control'
                    className='bg-[#2b2532] hover:bg-[#302a36]'
                />
                <MainMenuCard 
                    title='Profiles'
                    description='Create profiles for people to be recognized in images or videos.'
                    icon='/main_menu_images/profiles_icon.png'
                    redirectPath='/analytics/profiles'
                    className='bg-[#2b2532] hover:bg-[#302a36]'
                />
            </div>
        </div>
    );
};

export default MainMenu;
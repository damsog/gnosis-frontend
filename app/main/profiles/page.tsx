import type { NextPage } from 'next'
import { IoAddSharp } from 'react-icons/io5';
import ProfileOption from './ProfileOption';

const ProfilesPage = () => {
    return (
        <>
            <div className='flex justify-center'>
                <h5 className='text-gray-300 text-lg'>Profiles</h5>
            </div>
            <div className='flex'>
                <h5 className="shadow-lg hover:shadow-green-700/50 rounded-lg py-1 px-2 hover:bg-[#3f3847]
                                 active:translate-y-1 text-4xl font-thin cursor-pointer text-gray-400"><IoAddSharp/></h5>
            </div>
            <div>
                <hr className="p-2 border-green-700" />
            </div>
            <div className=' space-y-4'>
                <ProfileOption
                    name='Profile 1'
                    description='This is a description of profile 1'
                    coded={true}
                />
                <ProfileOption
                    name='Profile 2'
                    description='This is a description of profile 2'
                    coded={false}
                />
             </div>
        </>
    );
};

export default ProfilesPage;
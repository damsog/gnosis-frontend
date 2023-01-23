'use client'

import { Profile } from '@prisma/client'
import React, { use } from 'react'

interface ProfileInfoProps {
    profileId: string
    apikey: string
}

const getProfile = async (profileId: string, apikey: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/${profileId}`, {
        method: 'GET',
        headers: {
            'Authorization': apikey
        }})
    const profile: Profile = await response.json();
    return profile;
}

export default function ProfileInfo( {profileId, apikey} : ProfileInfoProps ) {
    const profile = use( getProfile(profileId, apikey) );

    const capitalize = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    
    return (
        <>
            <h2 className='text-gray-200 text-2xl'>{capitalize(profile.name)}</h2>
            <p className=' mt-8 text-gray-400 text-sm'>{profile.bio}</p>
        </>
    )
}

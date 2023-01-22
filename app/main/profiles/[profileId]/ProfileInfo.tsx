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
    
    return (
        <div>ProfileInfo for {profile.name}</div>
    )
}

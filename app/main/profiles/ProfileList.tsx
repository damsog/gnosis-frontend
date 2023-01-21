import { Profile } from '@prisma/client';
import React, { use } from 'react'
import ProfileOption from './ProfileOption';

interface ProfilesProps {
    userId: string
    apikey: string
}

const getProfiles = async (userId: string, apikey: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/user/${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': apikey
        }})
    const profiles: Profile[] = await response.json();
    return profiles;
}

function ProfileList({userId, apikey}: ProfilesProps) {
    const profiles = use( getProfiles(userId, apikey) );

    return (
        <>
            {profiles.map( (profile) => (
                <div key={profile.id}>
                <ProfileOption
                    profileId={profile.id}
                    name={profile.name}
                    description={profile.bio!}
                    coded={true}
                />
                </div>
            ))}
        </>
    );
}

export default ProfileList;
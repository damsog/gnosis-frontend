import { Profile } from '@prisma/client';
import React, { use } from 'react'
import { useQuery } from 'react-query';
import ProfileOption from './ProfileOption';

interface ProfilesProps {
    groupId: string
    apikey: string
}

const getProfiles = async (groupId: string, apikey: string) => {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/group/${groupId}`, {
            method: 'GET',
            headers: {
                'Authorization': apikey
            }})
        const profiles: Profile[] = await response.json();
        return profiles;
    }catch(e){
        console.log(`Error: ${e}`);
        return [];
    }
}

function ProfileList({groupId, apikey}: ProfilesProps) {
    // TODO: Remove this once use hook is fixed
    //const profiles = use( getProfiles(userId, apikey) );
    const query = useQuery(["group-profiles",groupId, apikey], () => getProfiles(groupId, apikey) )
    if (query.isLoading) {
      return <h2>Loading...</h2>;
    }


    return (
        <>
            {query.data!.map( (profile) => (
                <div key={profile.id}>
                <ProfileOption
                    profileId={profile.id}
                    groupId={groupId}
                    name={profile.name}
                    description={profile.bio!}
                    apikey={apikey}
                    coded={true}
                />
                </div>
            ))}
        </>
    );
}

export default ProfileList;
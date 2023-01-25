import { Image } from '@prisma/client';
import React, { use } from 'react'
import { useQuery } from 'react-query';
import ImageOption from './ImageOption';

interface ImagesProps {
    profileId: string
    apikey: string
}

const getImages = async (profileId: string, apikey: string) => {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/image/profile/${profileId}`, {
            method: 'GET',
            headers: {
                'Authorization': apikey
            }})
        const images: Image[] = await response.json();
        return images;
    }catch(e){
        console.log(`Error: ${e}`);
        return [];
    }
}

function ProfileList({profileId, apikey}: ImagesProps) {
    // TODO: Remove this once use hook is fixed
    //const profiles = use( getProfiles(userId, apikey) );
    const query = useQuery(["images",profileId, apikey], () => getImages(profileId, apikey) )
    if (query.isLoading) {
      return <h2>Loading...</h2>;
    }


    return (
        <>
            {query.data!.map( (image) => (
                <div key={image.id}>
                <ImageOption
                    imageId={image.id}
                    name={image.name}
                    coder={image.coder ? image.coder : ""}
                    apikey={apikey}
                    isCoded={true}
                />
                </div>
            ))}
        </>
    );
}

export default ProfileList;
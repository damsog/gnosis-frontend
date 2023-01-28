'use client'

import { Group } from '@prisma/client'
import React, { use } from 'react'
import AddProfileToGroupDialog from './AddProfileToGroupDialog'

interface GroupInfoProps {
    groupId: string
    apikey: string
}   

const getGroup = async (groupId: string, apikey: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/group/${groupId}`, {
        method: 'GET',
        headers: {
            'Authorization': apikey
        }})
    const group: Group = await response.json();
    return group;
}

export default function GroupInfo( {groupId, apikey} : GroupInfoProps ) {
    const group = use( getGroup(groupId, apikey) );

    const capitalize = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    
    return (
        <div className='flex flex-col md:grid md:grid-cols-4'>
            <div className='md:col-span-1'>
                <h2 className='text-gray-200 text-2xl'>{capitalize(group.name)}</h2>
                <p className=' my-4 text-gray-400 text-sm'>{group.description}</p>
            </div>
            <div className='md:col-span-3'>
                <h2 className='text-gray-200 text-2xl'>Profiles</h2>
                <AddProfileToGroupDialog  apikey={apikey} groupId={groupId} />
                <div>
                    <hr className="p-2 border-green-700" />
                </div>
            </div>
        </div>
    )
}

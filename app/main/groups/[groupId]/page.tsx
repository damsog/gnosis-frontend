'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import GroupInfo from "./GroupInfo";

type GroupPageProps = {
    params: {
        groupId: string;
    }
}

const ProfilePage = ( {params: {groupId}}: GroupPageProps ) => {
    //const { data: session, status } = useSession({ required: true });
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        },
    })
    const router = useRouter();

    if(status === "loading") return <div className="text-green-700">Loading...</div>  

    return (
        <>                          
            <Suspense fallback={<div className="text-green-700">Loading...</div>}>
                <GroupInfo groupId={groupId} apikey={session.apikey as string} />
            </Suspense>
        </>
    );
};

export default ProfilePage;
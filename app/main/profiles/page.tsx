import UserProfilesView from "./UserProfilesView";
import { Suspense } from "react";

const ProfilesPage = () => {
    return (
        <>              
            <Suspense fallback={<div className="text-green-700">Loading...</div>}> <UserProfilesView /> </Suspense>
        </>
    );
};

export default ProfilesPage;
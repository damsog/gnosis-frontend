import { User } from "@prisma/client";
import UserSettings from "./UserSettings";

type PageProps = {
    params: {
        email: string;
    }
}

const getUserByEmail = async (email: string) => {
    const response = await fetch(`http://192.168.1.3:3000/api/user/email/${email}`);
    const data: User = await response.json();
    return data;
}

const settings = async ({params: {email}}: PageProps) => {
    const user: User = await getUserByEmail(email);
    return (
        <UserSettings user={user} />
    )
}

export default settings;


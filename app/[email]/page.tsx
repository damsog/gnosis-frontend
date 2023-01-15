
type PageProps = {
    params: {
        email: string;
    }
}

const settings = async ({params: {email}}: PageProps) => {
    return (
        <div>
            <h1>Settings for {email}</h1>
        </div>
    )
}

export default settings;

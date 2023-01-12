import SignupForm from "./signupForm";

const SignupPage = () => {
    return (
        <>
        <div className="h-screen w-auto flex items-center justify-center">
            <div className=" rounded-lg ">
                <img src="/login_bkg_image.png" className="w-[100vw] md:w-[80vw] lg:w-[50vw] h-[80vh] rounded-lg" alt="" />
            </div>
        </div>
        <div className="absolute w-screen h-screen top-0 left-0 flex flex-col items-center justify-between">
            <div></div>
            <SignupForm/>
            <div></div>
        </div>
        </>
    );
};

export default SignupPage;
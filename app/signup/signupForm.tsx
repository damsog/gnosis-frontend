'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';


interface SignupFormClassOptions {
    className?: string
}

interface SignupFormOptions {
    name: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

const SignupForm = ({className}: SignupFormClassOptions) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupFormOptions>();
    const router = useRouter();

    const onSubmit: SubmitHandler<SignupFormOptions> = data => console.log(data);
    const redirectToLogin = () => router.push('/login');

    return (
        <div className={`${className}`}>
            <form className=' px-16 py-8 bg-[#221c28] rounded-2xl flex-row justify-between ' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input 
                        {...register("name", { required: true })}
                        className='m-4 rounded-lg p-3 text-gray-400 text-lg bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                        type="text"
                        name="name"
                        placeholder="Username"
                    />                                
                </div>
                <div>
                    <input 
                        {...register("email", { required: true })}
                        className='m-4 rounded-lg p-3 text-gray-400 text-lg bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                        type="text"
                        name="email"
                        placeholder="email@domain.com"
                    />                                
                </div>
                <div>
                    <input
                        {...register("password", { required: true })} 
                        className='m-4 rounded-lg p-3 text-gray-400 text-lg bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                        type="password" 
                        name="password" 
                        placeholder="Password"
                    />
                </div>
                <div>
                    <input
                        {...register("firstName", { required: true })} 
                        className='m-4 rounded-lg p-3 text-gray-400 text-lg bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                        type="text" 
                        name="firstName" 
                        placeholder="firstName"
                    />
                </div>
                <div>
                    <input
                        {...register("lastName", { required: true })} 
                        className='m-4 rounded-lg p-3 text-gray-400 text-lg bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                        type="text" 
                        name="lastName" 
                        placeholder="lastName"
                    />
                </div>
                <div className='flex flex-col items-center justify-between m-4 hover:text-gray-200
                                 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg p-2 hover:bg-[#3f3847]
                                 active:translate-y-1'>
                    <input type="submit" value="Sign-Up" className='text-gray-400 text-lg'/>
                </div>
                <div className='px-4'>
                    <h1 className='text-gray-400 '>Already have an account? <span className='text-green-700 hover:text-green-600 hover:cursor-pointer' onClick={redirectToLogin}>Sign in</span></h1>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
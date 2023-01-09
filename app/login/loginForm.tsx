    'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface LoginFormClassOptions {
    className?: string
}

interface LoginFormOptions {
    username: string,
    password: string
}

const LoginForm = ({className}: LoginFormClassOptions) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFormOptions>();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFormOptions> = data => console.log(data);
    const redirectToSignup = () => router.push('/signup');
 
    return (
        <div className={`${className}`}>
            <form className=' px-16 py-8 bg-[#221c28] rounded-2xl flex-row justify-between ' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input 
                        {...register("username", { required: true })}
                        className='m-4 rounded-lg p-3 text-gray-400 text-lg bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                        type="text"
                        name="username"
                        placeholder="Username"
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
                <div className='flex flex-col items-center justify-between m-4 hover:text-gray-200
                                 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg p-2 hover:bg-[#3f3847]
                                 active:translate-y-1'>
                    <input type="submit" value="Login" className='text-gray-400 text-lg'/>
                </div>
                <div className='px-4'>
                    <h1 className='text-gray-400 '>Doesn't have an account? <span className='text-green-700 hover:text-green-600 hover:cursor-pointer' onClick={redirectToSignup}>sign-up!</span></h1>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
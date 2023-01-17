import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface DisplayFormCardProps {
    id: string,
    displayOption: string, 
    value: string, 
    description: string,
    className?: string
}

interface IFormInput {
    apiKey: string | null
}


const DisplayFormCard = ({id, displayOption, value, description, className}:DisplayFormCardProps) => {

    const [ showing, setShowing ] = useState(false);
    const [ apiKey, setApiKey ] = useState<string | null>(value);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<IFormInput>();

    const onCancel = () => {
        reset();
        setShowing(!showing) 
    }

    const onGenerate = async () => {
        try{
            const response = await fetch(`http://localhost:3000/api/user/genapikey/${id}`);
            const data: User = await response.json();
            console.log(`Data: ${JSON.stringify(data)}`);
            setApiKey(data.apiKey);
        }catch(e){
            console.log(`Error: ${e}`);
        }
    }
    
    return (
        <div className={`my-10 ${className}`}>
            <div className="flex justify-between ">
                <div>
                    <h1 className=" font-bold text-gray-300 py-1 text-xl" >{displayOption}</h1>
                    <label className="rounded-lg p-1 text-gray-400 bg-[#2b2532] w-10 h-4">{`${(apiKey && showing) ? apiKey : "********" }`}</label>
                </div>
                <div className="flex flex-row">
                    {showing && (
                        <button 
                            className="border px-4 py-1 text-gray-400 rounded-2xl
                            border-green-700 shadow-lg bg-[#2b2532] hover:text-gray-200 shadow-green-700/50 hover:bg-green-700" 
                         onClick={onGenerate}>Generate</button>
                    )}
                    <button type="button" onClick={onCancel} className="text-gray-300 border px-4 py-1 rounded-2xl
                                border-green-700 shadow-lg bg-[#2b2532] hover:text-gray-200
                                shadow-green-700/50 hover:bg-[#3f3847]">{showing ? "Hide" : "Show"}</button>
                </div>
            </div>
            <hr className="pb-2 border-green-700" />
            <p className=" text-sm text-gray-300 " >{description}</p>
        </div>
    );
}

export default DisplayFormCard;
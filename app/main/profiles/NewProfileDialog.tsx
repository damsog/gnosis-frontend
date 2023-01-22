import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoAddSharp } from 'react-icons/io5'

interface CreateProfileFormOptions {
    userId: string;
    name: string;
    bio?: string;
}

interface NewProfileDialogProps {
    userId: string;
    apikey: string;
}

export default function NewProfileDialog({userId, apikey}:NewProfileDialogProps) {
  let [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateProfileFormOptions>();

  const onSubmit: SubmitHandler<CreateProfileFormOptions> = async data => {
    console.log(`Submitting data:  ${JSON.stringify(data)}`);

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': apikey
            },
            body: JSON.stringify(data)
        });
        console.log(`Response: ${JSON.stringify(response)}`);
        setIsOpen(false);
        
    }catch(e){
        console.log(`Error: ${e}`);
        setIsOpen(false);
    }
  };

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md hover:bg-[#3f3847] hover:bg-opacity-60 shadow-lg hover:shadow-green-700/50 px-4 py-2 font-medium text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <IoAddSharp className='text-2xl font-thin text-gray-400"' />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#221c28] p-6 text-left shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-200"
                  >
                    New Profile
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">
                      Create a new profile to use on the face recognition app.
                    </p>
                    <form className='rounded-2xl flex-row justify-between ' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input 
                                {...register("userId", {required: true})}
                                type="hidden"
                                name="userId"
                                value={userId}
                            />
                        </div>
                        <div>
                            <input 
                                {...register("name", { required: true })}
                                className='m-4 rounded-lg p-3 text-gray-400 text-md bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                                type="text"
                                name="name"
                                placeholder="Name"
                            />                                
                        </div>
                        <div>
                            <input 
                                {...register("bio", { required: true })}
                                className='m-4 rounded-lg p-3 text-gray-400 text-md bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                                type="text"
                                name="bio"
                                placeholder="Bio"
                            />                                
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md bg-[#2b2532] hover:bg-[#3f3847] px-4 py-2 text-sm font-medium text-gray-400  focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2"
                            onClick={closeModal}
                            >
                            Cancel
                            </button>
                            <div className='inline-flex justify-center hover:text-gray-200 border border-green-700 shadow-lg shadow-green-700/50 rounded-lg px-4 py-2 bg-[#2b2532] hover:bg-[#3f3847]
                                                cursor-pointer'>
                                    <input type="submit" value="Create" className='text-gray-400 text-sm cursor-pointer'/>
                            </div>
                        </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

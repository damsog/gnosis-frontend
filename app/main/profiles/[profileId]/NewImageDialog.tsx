import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoAddSharp } from 'react-icons/io5'
import { useQueryClient } from 'react-query';

interface CreateImageFormOptions {
    profileId: string;
    name: string;
    profilePicture: File[];
}

interface NewImageDialogProps {
    profileId: string;
    apikey: string;
}

export default function NewimageDialog({profileId, apikey}:NewImageDialogProps) {
    let [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateImageFormOptions>();
    
    // TODO: Remove this once use hook is fixed
    const queryClient = useQueryClient();

    const onSubmit: SubmitHandler<CreateImageFormOptions> = async data => {
        console.log(data);
        
        let form = new FormData();
        form.append('profilePicture', data.profilePicture[0]);

        // Not setting the content type. aparently the browser will do that for us, including the boundary
        try{
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/image?name=${data.name}&profileId=${data.profileId}`, {
              method: "POST",
              headers: {
                  "ngrok-skip-browser-warning": "69420",
                'Authorization': apikey
              },
              body: form
          });
          console.log(`Response: ${JSON.stringify(response)}`);
          setIsOpen(false);

          // TODO: Remove this once use hook is fixed
          //router.refresh();        
          queryClient.invalidateQueries('images');
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
      <div className="inset-0 justify-center">
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
                    New Image
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">
                      Upload face images for the profile. this allows the face recognition app to identify the profile.
                    </p>
                    <form className='rounded-2xl flex-row justify-between ' onSubmit={handleSubmit(onSubmit)}>
                        <div className='mx-4'>
                            <div>
                                <input 
                                    {...register("profileId", {required: true})}
                                    type="hidden"
                                    name="userId"
                                    value={profileId}
                                />
                            </div>
                            <div>
                                <input 
                                    {...register("name", { required: true })}
                                    className='my-4 w-full rounded-lg p-3 text-gray-400 text-md bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />                                
                            </div>
                            <div>
                                <input 
                                    {...register("profilePicture", { required: true })}
                                    className='my-4 w-full rounded-lg p-3 text-gray-400 text-md bg-[#2b2532] focus:bg-[#3f3847] focus:outline-none'
                                    type="file"
                                    name="profilePicture"
                                />                                
                            </div>
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

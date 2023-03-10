import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
//import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {AiOutlineCheck, AiOutlineDown } from 'react-icons/ai'
import { Group } from '@prisma/client'
import { useQuery } from 'react-query'
import FaceRecognitionSnap from './FaceRecognitionSnap'
import FaceRecognitionLive from './FaceRecognitionLive'

const getCodedGroups = async (userId: string, apikey: string) => {
  try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/group/user/coded/${userId}`, {
          method: 'GET',
          headers: {
              "ngrok-skip-browser-warning": "69420",
                'Authorization': apikey
          }})
      const groups: Group[] = await response.json();
      return groups;
  }catch(e){
      console.log(`Error: ${e}`);
      return [];
  }
}

interface GroupSelectionProps {
  option: string;
  userId: string;
  apikey: string;
}

export default function GroupSelection({option, userId, apikey}: GroupSelectionProps) {
    const query = useQuery(["coded-groups", userId, apikey], () => getCodedGroups(userId, apikey) );
    const [selected, setSelected] = useState<Group | undefined>(undefined)
    
    // List of the coded available groups
    if(query.isLoading) return <div className="text-green-700">Loading...</div>

  return (
    <div>
    <div className="top-16 w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#2b2532] hover:bg-[#3f3847] text-gray-300 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected ? selected.name : "Select A Group"}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <AiOutlineDown
                className="h-4 w-4 text-gray-400 text-xs"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#2b2532] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {query.data!.map((group, groupIdx) => (
                <Listbox.Option
                  key={groupIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-[#3f3847] text-green-700' : 'text-gray-300'
                    }`
                  }
                  value={group}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {group.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-700">
                          <AiOutlineCheck className="h-4 w-4" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
    <div>
          {option === "live" && <FaceRecognitionLive groupId={selected?.dataset ? selected.dataset.split(".")[0] : ""}/>}
          {option === "snap" && <FaceRecognitionSnap groupId={selected?.dataset ? selected.dataset.split(".")[0] : ""}/>}
    </div>
    </div>
  )
}

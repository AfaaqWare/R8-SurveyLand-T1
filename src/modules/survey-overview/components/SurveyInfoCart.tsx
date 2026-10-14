import React from 'react'
import { User } from "@/assets/icons/icons";

const inputClass = "h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#0f9a9a] focus:ring-2 focus:ring-[#0f9a9a]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white";
export default function InfoCart() {
  return (
    <>
      <div className=" flex flex-col gap-4 bg-white px-3 py-2  rounded-2xl">
        {/* user icon */}
        <div className=" mt-2 flex-row flex gap-2 items-center ">
          <User className='size-6 text-cyan-500 '/>

          <h3 className=" text-{25px} font-bold text-black">
            Your Information 
          </h3>

        </div>
        {/* input  */}
        <div className=" grid gap-4 sm:grid-cols-2">
          <div className=" flex flex-col gap-1.5">
            <label htmlFor="fullName" className='text-{30px} font-medium text-black  dark:text-white'>

              fullName <span className='text-red-600'>*</span>
                
            </label>
            <input type="text" id='fullName' placeholder='Ammar Hassan' className={inputClass} />

          </div>
          <div className=" flex flex-col gap-1.5">
            <label htmlFor="Email" className='text-{30px} font-medium text-black  dark:text-white'>

               Email address <span className='text-red-600'>*</span>
                
            </label>
            <input type="email" id='email' placeholder='ammar@gmail.com ' className={inputClass} />

          </div>
          <p className=" m-3 text-{16px} text-gray-400">
                  Your information will be kept confidential.
          </p>

        </div>


         
         
           
      </div>
    </>
  )
}

import Image from 'next/image'
import React from 'react'
import { CalendarDays, Clock3 } from "@/assets/icons/icons";
import bgSurveyPreview from '@/assets/images/img-survey-preview.png'
import { useTranslations } from 'next-intl';
export default function Surveyheader() {

   // Translations
   const t = useTranslations("surveyPreview.header")

  return (
    <>
       <div className=" flex flex-col gap-4 bg-white px-6 py-5  rounded-2xl ">
        {/* img */}
        <div className="h-44 w-full  overflow-hidden rounded-2xl  sm:h-60 lg:h-72 ">
            <Image
               src={bgSurveyPreview} 
               alt="SurveyImg"
               className=' object-cover h-full w-full'
               width={500}
               height={500}
            />
        </div>
        {/* header & title  */}
        <div className=" flex flex-col gap-1">
        
          <h1 className="text-2xl font-bold text-black dark:text-white sm:text-3xl ">
            Frontend Training Survey
            {t('title')}
              
          </h1>
          <p className=" text-sm text-gray-400 dark:text-white/35 sm:text-base  ">
             {t('description')}
           </p>

              
        </div>
        {/* list & icon  */}
        <ul className=" flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400 dark:text-white/35  ">
           <li className='flex items-center gap-1.5'>
            <CalendarDays className=' size-3.5' />
            {t('deadline' , {data:'10 May 2026'})}
                
           </li>
           <li className='flex items-center gap-1.5 text-gray-400 '>
                 |
           </li>

           <li className='flex items-center gap-1.5'>
            <Clock3 className=' size-3.5' />
            {t('duration' , {time:'5-7'})}
           </li>

        </ul>

       </div>
    
    </>
  )
}

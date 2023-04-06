import Link from 'next/link'
import React from 'react'
import DarkModeButton from './DarkModeButton'
import { HomeIcon } from '@heroicons/react/24/solid'

function Title() {
  return (
    
     <div className='flex flex-cols-3 pt-8 pb-8 px-2 md:p-10 justify-between items-center'>
           <Link href="/" prefetch={false}>
            <HomeIcon className="md:h-8 md:w-8 h-6 w-6 cursor-pointer" />
            </Link>
            <Link href="/" prefetch={false}>
    <h1 className='font-serif md:text-4xl text-3xl text-center'>The{" "}<span className='underline decoration-6 decoration-orange-400'>MOVIE</span>{" "}Point</h1>
    </Link>
    <div className='flex justify-end'>
        <DarkModeButton />
    </div>
        </div> 
    
  )
}

export default Title
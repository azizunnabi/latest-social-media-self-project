import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 h-screen'>

        <div className='relative h-[80px] '>
          <nav>
           <ul  className="max-w-md space-y-1 text-gray-500
           text-[#2C2C2C] text-[14px] flex list-inside dark:text-gray-400 leading-10">
            <li>How it works</li>
            <li>Design gallery</li>
            <li>Architects</li>
           </ul>
         
           </nav>
          
        </div>
    </div>
  )
}

export default page
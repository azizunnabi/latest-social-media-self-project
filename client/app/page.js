import HomeComponent from '@/components/HomeComponent'
import { Nav } from '@/components/Nav'

import React from 'react'

 const page = () => {
  return (
    <main className='bg-[#787899] h-screen'>
      <Nav />

      <div className='max-w-screen-xl px-4 mx-auto w-full'>
      <HomeComponent />
      </div>
    </main>
  )
}
export default page

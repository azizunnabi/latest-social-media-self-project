import Image from 'next/image'

const Left = () => {
  return (
    
    <div className='relative bg-[#2c73cb] flex justify-center items-center'>
    <span className='absolute top-[65px] left-[90px] text-white text-[30px] font-bold leading-normal'>
        mygram
    </span>
    <div className='w-[500px] h-[500px] relative'>
        <Image src='/header.png' alt = "header image" fill className='w-full h-full object-cover'></Image>
    </div>
</div>

    
  )
}

export default Left
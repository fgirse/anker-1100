import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/LogoNeu.png'

const page = () => {
  return (
    <section className="bg-stone-300 min-h-screen flex flex-col items-center justify-start pt-20 relative z-10">
      <div className=''>
        <Image src={Logo} alt="Description" width={500} height={300} />
      </div>
      <div className="flex flex-cols  items-center justify-center min-h-screen py-2">
        <h1 className="text-[7vw] text-blue-300 uppercase text-shadow-lg font-bold">Blog</h1>
        <p className="mt-4">Welcome to the blog page!</p>
      </div>
    </section>
  )
}

export default page

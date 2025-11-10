import * as React from 'react'
import Image from 'next/image'
import Logo from '../../../public/LogoAlt.png'

const page = () => {
  return (
    <section className="bg-stone-600 min-h-screen flex flex-col items-center gap-y-12 justify-start z-10">
      <div className='relative top-[20vh]'>
        <Image src={Logo} alt="Logo Rettungsanker" width={500} height={300} className="border border-white shadow-2xl" />
      </div>
      <div className="flex flex-col items-center justify-center mt-36 mb-16 px-4">
        <h1 className="relative top-36 headingA text-center text-[4vw] text-yellow-600 -300 uppercase text-shadow-lg font-bold">Rettungsanker Bloq</h1>
        <p className="relative top-36 text-white text-[2vw] mt-36">Willkommen im Rettungsanker-Bloq</p>
      </div>
    </section>
  )
}

export default page

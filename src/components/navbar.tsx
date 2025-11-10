"use client"

import Image from 'next/image';
import Logo from '../../public/LogoNeu.png';
import Link from 'next/link';
import Bulleye from '../../public/Bulleye.svg';

export default function Header() {
  return (


    <header className="bg-[url('/Wood3.svg')] bg-cover bg-no-repeat h-[15vh] relative z-20 flex items-center justify-around gap-[10vw] shadow-md">
      <div className="">
        <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={80}
          className=""  
        />
        <span className="text-black font-bold text-lg"></span> 
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between space-x-8">
        <Image src={Bulleye} alt="Bulleye" width={50} className="" />
        <Link
          href="/"
          className="text-gray-50 font-black hover:text-white text-2xl uppercase px-5 py-2 rounded-xl hover:px-2 hover:py-3 hover:bg-white/50 transition-all duration-200"
        >
          home
        </Link>
        <Image src={Bulleye} alt="Bulleye" width={50} className="" />
        <Link
          href="/about"
          className="text-gray-50 font-black   hover:text-white text-2xl uppercase  px-5 py-2 rounded-xl hover:bg-white/50 transition-all duration-200"
        >
          über uns 
        </Link>
        <Image src={Bulleye} alt="Bulleye" width={50} className="" />
        <Link
          href="/drinks"
          className="text-gray-50 font-black hover:text-white text-2xl uppercase px-5 py-2 rounded-xl hover:bg-white/50 transition-all duration-200"
        >
          Drinks & Snacks
        </Link>
        <Image src={Bulleye} alt="Bulleye" width={50} className="" />
                <Link
          href="/sportarena"
          className="text-gray-50 font-black hover:text-white text-2xl uppercase px-5 py-2 rounded-xl hover:bg-white/50 transition-all duration-200"
        >
          Sportarena
        </Link>
        <Image src={Bulleye} alt="Bulleye" width={50} className="" />
        <Link
          href="/wohin"
          className="text-gray-50 font-black hover:text-white text-2xl uppercase px-5 py-2 rounded-xl hover:bg-white/50 transition-all duration-200"
        >
          Wohin
        </Link>
        <Image src={Bulleye} alt="Bulleye" width={50} className="" />
        <Link
          href="/blog"
          className="text-shadow-lg text-gray-50 font-black hover:text-white text-2xl uppercase px-5 py-2 rounded-xl hover:bg-white/50 transition-all duration-200"
        >
          Blog
        </Link>
      </nav>

      {/* Login Button Group with Arrow */}
      {/*<div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-xl bg-white text-black font-normal text-2xl uppercase transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className=" rounded-xl  bg-white text-black font-normal uppercase transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          Login
        </button>
      </div>*/}
    </header>
  )
}

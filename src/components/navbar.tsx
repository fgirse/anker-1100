"use client"

import Image from 'next/image';
import Logo from '../../public/LogoNeu.png';
import Link from 'next/link';
export default function Header() {
  return (


    <header className="bg-[url('/Wood3.svg')] bg-cover bg-no-repeat h-[13vh] relative z-20 flex items-center justify-between gap-x-12 p-6">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={80}
          className="ml-[2vw]"  
        />
        <span className="text-black font-bold text-lg"></span> 
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-8">
        <Link
          href="/"
          className="text-gray-50 hover:text-white text-2xl uppercase font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          home
        </Link>
        <Link
          href="/about"
          className="text-gray-50 hover:text-white text-2xl uppercase font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          über uns 
        </Link>
        <Link
          href="/drinks"
          className="text-gray-50 hover:text-white text-2xl uppercase font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Drinks & Snacks
        </Link>
                <Link
          href="/sportarena"
          className="text-gray-50 hover:text-white text-2xl uppercase font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Sportarena
        </Link>
        <Link
          href="/wohin"
          className="text-gray-50 hover:text-white text-2xl uppercase font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Wohin
        </Link>
        <Link
          href="/blog"
          className="text-shadow-lg text-gray-50 hover:text-white text-2xl uppercase font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Blog
        </Link>
      </nav>

      {/* Login Button Group with Arrow */}
      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-2xl uppercase transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-2xl uppercase transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          Login
        </button>
      </div>
    </header>
  )
}

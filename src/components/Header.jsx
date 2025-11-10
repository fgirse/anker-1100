'use client';
import { Button, Navbar, NavbarToggle, NavbarLink, NavbarCollapse, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { dark, light } from '@clerk/themes';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Header() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    router.push(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(searchParams);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [searchParams]);
  return (
    <Navbar className='hidden lg:border-b-2 lg:h-24  lg:w-full '>
      <Link
        href='/'
        className=' relative self-center whitespace-nowrap text-[4vw] sm:text-3xl font-semibold dark:text-white'
      >
        <span className='relative left-5 top-[2vh] px-2 py-1 bg-linear-to-r from-yellow-500 via-amber-500 to-green-500 rounded-lg text-white'>
          Rettungsanker-Bloq
        </span>
        
      </Link>
      <form className='relative top-[2vh]' onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        <SignedIn>
          <UserButton
            appearance={{
              baseTheme: theme === 'light' ? light : dark,
            }}
            userProfileUrl='/dashboard?tab=profile'
          />
        </SignedIn>
        <SignedOut>
          <Link href='/blog/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline className='relative right-[3vw] top-[2vh] w-24 uppercase bg-slate-600 text-white text-2xl hover:bg-amber-500'>
              Sign In
            </Button>
          </Link>
        </SignedOut>
        <NavbarToggle className='relative right-[3vw] top-[2vh] hover:text-amber-500' />
      </div>
      <NavbarCollapse>
        <Link href='/'>
          <NavbarLink active={path === '/'} as={'div'}>
            Home
          </NavbarLink>
        </Link>
        <Link href='/about'>
          <NavbarLink active={path === '/about'} as={'div'}>
            About
          </NavbarLink>
        </Link>
        <Link href='/projects'>
          <NavbarLink active={path === '/projects'} as={'div'}>
            Projects
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}

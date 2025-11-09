'use client';
import { Button, Navbar, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';

export default function Header() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const searchParams = useSearchParams();
  
  // Workaround: flowbite-react's Navbar Toggle/Collapse may not be present in the declared types,
  // so access them via a typed-any fallback to avoid the TypeScript error.
  const NavToggle = (Navbar as unknown as any).Toggle ?? (() => null);
  const NavCollapse = (Navbar as unknown as any).Collapse ?? (({ children }: any) => <>{children}</>);
  const NavLink = (Navbar as unknown as any).Link ?? ((props: any) => <a {...props} />);

  const handleSubmit = (e: React.FormEvent) => {
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
    <Navbar className='border-b-2'>
      <Link
        href='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sahand&apos;s
        </span>
        Blog
      </Link>
      <form onSubmit={handleSubmit}>
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
              baseTheme: theme === 'dark' ? dark : undefined,
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link href='/sign-in'>
            <Button color='purple' outline>
              Sign In
            </Button>
          </Link>
        </SignedOut>
        <NavToggle />
      </div>
      <NavCollapse>
        <Link href='/'>
          <NavLink active={path === '/'} as={'div'}>
            Home
          </NavLink>
        </Link>
        <Link href='/about'>
          <NavLink active={path === '/about'} as={'div'}>
            About
          </NavLink>
        </Link>
        <Link href='/projects'>
          <NavLink active={path === '/projects'} as={'div'}>
            Projects
          </NavLink>
        </Link>
      </NavCollapse>
    </Navbar>
  );
}

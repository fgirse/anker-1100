"use client";
import Header from "./Header";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import LogoNeu from "../../public/LogoNeu.png";
import Bulleye from "../../public/Bulleye.svg";

export default function Navigation() {
  return (
    <Navbar fluid rounded className="bg-red-900 lg:bg-[url('/Wood3.svg')] bg-cover bg-no-repeat bg-center px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <NavbarBrand href="/">
        <div className="relative left-5 top-5 w-24 h-24 lg:w-36 lg:h-36 ml-12">
          <Image src={LogoNeu} width={200} height={140} className="" alt="Rettungsanker Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </div>
      </NavbarBrand>

      <div className="flex md:order-2">

        <NavbarToggle className="text-white text-2xl relative lg:right-5" />
      </div>
      <NavbarCollapse >
        <div className="flex items-center gap-3  ">
          <Image src={Bulleye} width={50} height={50} className="" alt="Bulleye" />
          <NavbarLink className="px-2 py-1 text-white text-2xl uppercase hover:bg-amber-500 rounded-lg" href="/">Home</NavbarLink>
        </div>
        <div className="flex items-center gap-3  ">
          <Image src={Bulleye} width={50} height={50} className="" alt="Bulleye" />
          <Dropdown className="text-white text-2xl uppercase" label="über uns">
            <DropdownItem href="/about/team" onClick={() => alert("Team!")}>team</DropdownItem>
            <DropdownItem href="/about/geschichte" onClick={() => alert("Geschichte!")}>geschichte</DropdownItem>
          </Dropdown>
        </div>
        <div className="flex items-center gap-3  ">
      <Image src={Bulleye} width={50} height={50} className="" alt="Bulleye" />
      <Dropdown className="text-white text-2xl uppercase" label="drinks & snacks">
        <DropdownItem href="/menu/drinks" onClick={() => alert("Drinks!")}>drinks</DropdownItem>
        <DropdownItem href="/menu/snacks" onClick={() => alert("Snacks!")}>snacks</DropdownItem>
      </Dropdown>
      </div>
      <div className="flex items-center gap-3  ">
        <Image src={Bulleye} width={50} height={50} className="" alt="Bulleye" />
        <NavbarLink className="text-white text-2xl uppercase hover:bg-amber-500 rounded-lg" href="/sportarena">sportarena</NavbarLink>
      </div>
      <div className="flex items-center gap-3  ">
        <Image src={Bulleye} width={50} height={50} className="" alt="Bulleye" />
        <NavbarLink className="text-white text-2xl uppercase hover:bg-amber-500 rounded-lg" href="/wohin">wohin</NavbarLink>
      </div>
      <div className="flex items-center gap-3  ">
        <Image src={Bulleye} width={50} height={50} className="" alt="Bulleye" />
        <NavbarLink className="text-white text-2xl uppercase hover:bg-amber-500 rounded-lg" href="/blog">blog</NavbarLink>
      </div>
    </NavbarCollapse>
    <Header />
    </Navbar>
  );
}
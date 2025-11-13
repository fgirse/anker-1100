"use client";
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
    <Navbar fluid rounded className="lg:bg-[url('/Wood3.svg')] bg-cover bg-no-repeat bg-center border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <NavbarBrand href="/">
        <Image src={LogoNeu} width={200} height={140} className="" alt="Rettungsanker Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Logo</span>
      </NavbarBrand>
      <div className="flex md:order-2">
       
        <NavbarToggle className="text-white text-2xl mr-5"/>
      </div>
      <NavbarCollapse>
        <Image src={Bulleye} width={50} height={70} className="" alt="Bulleye" />
        <NavbarLink className="text-white text-2xl hover:bg-amber-500" href="/">Home</NavbarLink>


<Image src={Bulleye} width={50} height={70} className="" alt="Bulleye" />
    <Dropdown label="über uns">
      <DropdownItem onClick={() => alert("Dashboard!")}>team</DropdownItem>
      <DropdownItem onClick={() => alert("Settings!")}>geschichte</DropdownItem>
    </Dropdown>
<Image src={Bulleye} width={50} height={70} className="" alt="Bulleye" />
    <Dropdown label="drinks & snacks">
      <DropdownItem onClick={() => alert("Dashboard!")}>drinks</DropdownItem>
      <DropdownItem onClick={() => alert("Settings!")}>snacks</DropdownItem>
    </Dropdown>

<Image src={Bulleye} width={50} height={70} className="" alt="Bulleye" />
        <NavbarLink href="#">sportarena</NavbarLink>
        <Image src={Bulleye} width={50} height={70} className="" alt="Bulleye" />
        <NavbarLink href="#">wohin?</NavbarLink>
        <Image src={Bulleye} width={50} height={70} className="" alt="Bulleye" />
        <NavbarLink href="#">blog</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { LuSquare } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      id="navbar"
      className=" backdrop-filter backdrop-blur-lg bg-neutral-750 nav z-50 fixed top-0 left-0 w-full flex items-center justify-between shadow-none  text-center"
    >
      <div className="flex flex-shrink-0 items-center">
        <a href="#" className="">
          <Image className="mx-3 w-8" src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu-icon block md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <LuSquare className={`${isOpen ? "hidden" : "block"}`} />
        </button>
      </div>
      <div
        className={`navbar w-full ${isOpen ? "hidden" : "block"} md:flex-grow`}
      >
        <a
          href="#hero"
          className="block  mt-4 md:inline-block md:mt-0 mr-4 px-4"
        >
          Home
        </a>
        <a
          href="#about"
          className="block  mt-4 md:inline-block md:mt-0 mr-4 px-4"
        >
          About Me
        </a>
        <a
          href="#technologies"
          className="block  mt-4 md:inline-block md:mt-0 mr-4 px-4"
        >
          Technologies
        </a>
        <a
          href="#projects"
          className="block  mt-4 md:inline-block md:mt-0 mr-4 px-4"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block  mt-4 md:inline-block md:mt-0 mr-4 px-4"
        >
          Contact
        </a>
      </div>
      <div className="darkmode mx-3 w-8">
        <MdOutlineDarkMode />
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import { useState } from "react";
import {useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Menu from "./mobile/menu";
import SearchInput from "./searchInput";

const Navbar = () => {
  
   const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchPress, setIsSearchPress] = useState(false);

  const toggleSearch = () => {
    console.log("Search button clicked");
    setIsSearchPress((prev) => !prev);
    setIsMenuOpen(false); // Close menu if it's open
  };
  const toggleMenu = () => {
    if (isMenuOpen || isSearchPress) {
      setIsSearchPress(false);
      setIsMenuOpen(false);
      return;
    }
    setIsMenuOpen((prev) => !prev);
    setIsSearchPress(false); // Exit search mode if active
  };

  return (
    <nav className="flex justify-between items-center bg-white px-8 py-4 border-b border-gray-300">
      {/* Small screen: Hamburg button */}
      <button
        className="md:hidden text-black
          text-2xl
          xl:text-3xl"
        onClick={toggleMenu}
      >
        {isSearchPress || isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>

      {/* Center: Logo */}
      {!isSearchPress && (
        <div 
        onClick={() => {
          setIsMenuOpen(false)
          router.push('/')}} 
        className="flex items-center justify-between md:justify-start">
          <div
            className="overflow-hidden rounded-lg
          w-[60px] 
          md:w-[80px]
          lg:w-[100px]
          xl:w-[100px]
          h-[60px]
          md:h-[80px]
          lg:h-[100px]
          xl:h-[100px]
          "
          >
            <Image
              src={"/pettro-img.png"}
              alt="pettro"
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          </div>
          <span
            className="text-red-500 font-merienda font-bold 
          text-2xl
          md:text-3xl
          lg:text-4xl
          xl:text-5xl
          "
          >
            Pettro
          </span>
        </div>
      )}

      {/* Small screen: Search icon */}

      {!isSearchPress && (
        <button
          className="md:hidden text-black
          text-2xl
          md:text-2xl
          lg:text-2xl
          xl:text-3xl
          "
          onClick={toggleSearch}
        >
          <BsSearch />
        </button>
      )}

      {isSearchPress && (
        <div className="md:hidden flex h-[100px] items-center bg-white text-black rounded-lg overflow-hidden">
          <SearchInput />
        </div>
      )}

      {/* Search Section on Full screen*/}
      <div className="hidden md:flex items-center bg-white text-black rounded-lg overflow-hidden">
        <SearchInput />
      </div>

      {/* Small Screen: Dropdown Menu */}
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </nav>
  );
};

export default Navbar;

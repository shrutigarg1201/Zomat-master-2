
import React from "react";
import {FaUser} from "react-icons/fa";
import {TiLocation} from "react-icons/ti";
import {AiFillCaretDown} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";

const MobileNav = () => {
  return(
    <>
    <div className="justify-between items-center flex w-full md:hidden">
      {/* Logo */}
      <div className="w-28">
        <img 
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="logo"
        className="w-full h-full"
        />
      </div>
      {/* UseApp and user */}
      <div className="flex items-center gap-3 ">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        <span className="border p-2 boder-blue-300 text-zomato-400 rounded-full">
          <FaUser />
        </span>
      </div>
    </div>  
    </>
  );
};

const LgNav = () => {
  return(
    <>
    <div className="container justify-between items-center flex ">
      {/* logo and searchbar */}
      <div className="w-3/4 gap-5 flex ml-4">
        {/* Logo */}
        <div className="w-36 h-10 flex items-center">
          <img 
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="h-2/3"
          />
        </div>
        {/* searchbar */}
        <div className="flex items-center rounded-md border w-full h-14 -mt-1 gap-3 shadow-md">
          <div className="w-1/3 gap-5">
            <div className="flex gap-2 items-center">
              <TiLocation className="text-zomato-300 text-3xl ml-2"/>
              <input type="text" className="w-full focus:outline-none" placeholder="Kota"/>
              <AiFillCaretDown className="text-2xl"/>
            </div>
          </div>
          <div className="text-gray-400">|</div>
          <div className="w-3/5">
            <div className="flex items-center gap-3">
              <FiSearch className="text-2xl opacity-40"/>
              <input type="text" className="w-full text-sm placeholder-gray-500 placeholder-font-thin focus:outline-none" placeholder="Search for restaurant, cuisine or a dish"/>
            </div>
          </div>
        </div>
      </div>
      {/* user app and user */}
      <div className="flex items-center gap-3 ">
        <button className="text-gray-500 hover:text-black py-2 px-3 text-xl">
          Log in
        </button>
        <button className="text-gray-500 hover:text-black py-2 px-3 text-xl">
          Sign in
        </button>
      </div>
    </div>     
    </>
  );
};
const Navbar = () => {
    return(
    <>
    <nav className="py-4 bg-white items-center">
        <MobileNav/>
        <div className="hidden lg:flex">
        <LgNav/>
        </div>
 
    </nav>
    </>
    )
};

export default Navbar;
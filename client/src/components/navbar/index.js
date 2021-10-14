
import React from "react";
import {FaUser} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md";
import {AiFillCaretDown} from "react-icons/ai";

const MobileNav = () => {
    return(
        <>
        <div className="justify-between items-center flex w-full md:hidden">
            <div className="w-28">
                <img 
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
                />
            </div>
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
        <div className="container w-full justify-between items-center  flex mx-auto ">
            <div className="gap-8 flex">
                <div className="w-28 p-2">
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full"
                    />
                </div>
                <div className="flex rounded-md border w-full py-2 gap-3 shadow-md">
                    <div className="w-2/5 gap-5">
                        <div className="flex gap-5">
                            <MdLocationPin className="text-zomato-300 text-3xl"/>
                            <input type="text" className="w-full focus:outline-none" placeholder="Kota"/>
                            <AiFillCaretDown className="text-2xl"/>
                        </div>
                    </div>
                    <div className="w-3/5">
                        <div>
                            <input type="text" className="w-full" placeholder="Search for restaurant, cuisine or a dish"/>
                        </div>
                    </div>
                </div>
            </div>
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
const Navbar = () => {
    return(
    <>
    <nav className="py-4 bg-white items-center">
        <MobileNav/>
        <div className=" hidden lg:flex">
        <LgNav/>
        </div>
 
    </nav>
    </>
    )
};

export default Navbar;
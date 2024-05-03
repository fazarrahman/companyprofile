'use client'
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropDownMenu from "./drop-down-menu";
import Carousel from "./ui/carousel";

const Navbar = () => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible)
    }
    const closeDropDown = () => {
        setIsDropDownVisible(false)
    }
    return (
        <div className="p-6 md:p-10 flex items-center justify-between z-50">
            <div className="text-white">
                <Link className="cursor-pointer ml-2" href="/">
                    <Image
                        priority
                        src="/logo/logoipsum-224.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-10 h-10 md:w-14 md:h-14"
                    />
                </Link>
            </div>
            <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                <div className="hover:text-gray-50">Home</div>
                <div className="hover:text-gray-50">Service</div>
                <div className="hover:text-gray-50">Our Clients</div>
                <div className="hover:text-gray-50">About Us</div>
            </div>
            <div className="flex md:hidden">
                {isDropDownVisible ? (
                    <div onClick={toggleDropDown}
                        className="w-8 h-8 text-slate-300 cursor-pointer">
                        <X />
                        <DropDownMenu onClose={closeDropDown} />
                    </div>
                ) : (
                    <div>
                        <AlignJustify onClick={toggleDropDown}
                            className="w-8 h-8 text-slate-300 cursor-pointer" />
                    </div>
                )}
            </div>  
            <div className="hidden md:flex">
                <Link className="hover:text-gray-50  inline-flex h-10 animate-shimmer items-center 
                justify-center rounded-md border border-white-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2
                 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" href="/contact">
                    Contact
                </Link>
            </div>
      
      
        </div>
    );
}

export default Navbar;
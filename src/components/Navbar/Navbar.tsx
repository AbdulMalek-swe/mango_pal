"use client"
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
const Navbar = () => {
    const [active, setActive] = useState(false)
    function onToggleMenu(e: any) {
        setActive(!active)
    }
    return (
        <header className="bg-[#1C9E00]">
            <nav className="flex justify-between items-center w-[92%]  mx-auto">
                <div>
                    <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
                </div>
                <div
                    className={`nav-links ${active ? 'top-[10%]' : ' top-[-100%]'} duration-500 md:static absolute   bg-[#1C9E00]  md:min-h-fit min-h-[60vh] left-0  md:w-auto  w-full flex items-center px-5   `}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <Link href="/captcha" className="hover:text-gray-200">Captcha</Link>

                        </li>
                        <li>
                            <Link href="/sortable" className="hover:text-gray-200">Sortable</Link>

                        </li>
                        <li>
                            <Link href="/floating" className="hover:text-gray-200">Floating ui</Link>

                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="" className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</Link>
                    <button>
                        {!active ? <RiMenu3Line className="text-3xl cursor-pointer md:hidden" onClick={(e) => onToggleMenu("name")} /> :
                            <IoMdClose className="text-3xl cursor-pointer md:hidden" onClick={(e) => onToggleMenu("name")} />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
"use client"
import { useEffect, useState } from "react";


const Navbar = () => {


    const [active, setActive] = useState(false)
    const navLinks = document.querySelector('.nav-links') as any
    function onToggleMenu(e: any) {
        console.log(e);
        e = e === 'menu' ? 'close' : 'menu'
        // navLinks.classList.toggle('top-[9%]')
        setActive(!active)
    }
    return (


        <header className="bg-white">
            <nav className="flex justify-between items-center w-[92%]  mx-auto">
                <div>
                    <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
                </div>
                <div
                    className={`nav-links ${active ? 'top-[9%]' : ' top-[-100%]'} duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0  md:w-auto  w-full flex items-center px-5 border`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a className="hover:text-gray-500" href="#">Products</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Solution</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Resource</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Developers</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-6">
                    <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                    <span className="text-3xl cursor-pointer md:hidden" onClick={(e) => onToggleMenu("name")} >==</span>
                    {/* <ion-icon onclick="onToggleMenu(this)" name="menu" className="text-3xl cursor-pointer md:hidden"></ion-icon> */}
                </div>
            </nav>
        </header>

    );
};

export default Navbar;
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsChatFill, BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from 'react-icons/fa';
import style from './style.module.css'
import Image from 'next/image';
const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleOpenMenu = () => {
        setActive(!active)
    }
    return (
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <a href=""> <Image src="/assets/logo.png" width={200} height={200} alt='loading...' className='w-[40px] h-[30px] rounded-full' /> </a>
                </div>
                <div className={style.search}>
                    <form>
                        <input type="text" placeholder="search" />
                    </form>
                </div>
                <div className={style.icons}>
                    <Link href="" className="text-white text-xl"> <BsChatFill /> </Link>
                    <Link href="" className="text-white text-xl"> <FaShoppingCart /> </Link>
                    <Link href="/pages/auth/login" className="text-white text-xl"> <BsFillPersonFill /> </Link>

                    <button onClick={() => handleOpenMenu()} className="text-white text-xl">
                        {!active ? <GiHamburgerMenu /> :
                            <IoMdClose />}
                    </button>
                </div>
            </div>
            <div className={` ${!active ? "" : style.showmylinks} ${style.links}  `}>
                <a href="" className='text-center' >Home</a>
                <a href="" className='text-center' >Service</a>
                <a href=""> About</a>
                <a href=""> Contact</a>
                <a href="">Blog</a>
            </div >
        </div >


    );
};

export default Navbar;

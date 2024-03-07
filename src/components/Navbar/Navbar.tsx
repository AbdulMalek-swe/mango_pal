import React from 'react';
import style from './style.module.css'
const Navbar = () => {
    return (
        <div>

            <div className={style.header}>
                <div className={style.logo}>logo
                    <a href="">sdfsf <img src="flipkat.png" /> </a>
                </div>
                <div className={style.search}>
                    <form>
                        <input type="text" placeholder="search" />
                    </form>
                </div>
                <div className={style.icons}>
                    <a href="" className={style.fafa_heart}> sdfds</a>

                </div>
                <div className={style.links}>
                    <a href="" > sfs</a>
                    <a href=""> sfs</a>
                    <a href=""> sfs</a>
                    <a href=""> sfs</a>
                    <a href=""> sfs</a>
                </div >

            </div>
        </div>


    );
};

export default Navbar;

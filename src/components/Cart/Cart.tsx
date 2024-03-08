"use client"
import Button from '@/components/Button/Button';
import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosCloseCircleOutline } from 'react-icons/io';

const Cart = () => {
    const [counter, setCounter] = useState(0)
    const handleIncrease = (e: any) => {
        setCounter(counter + 1)
    }
    return (
        <div className='container mx-auto pt-[95px] sm:pt-[80px] h-full'>
            <div className=' relative  h-[calc(100vh-95px)] sm:h-[calc(100vh-80px)] bg-red-900 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <div className='flex justify-between items-center border'>
                        <div className=' flex flex-col items-center'>
                            <span className='cursor-pointer'><IoIosArrowDropup onClick={(e) => handleIncrease(e)} /></span>
                            <span>{counter}</span>
                            <span> <IoIosArrowDropdown /></span>
                        </div>
                        <div className='flex justify-between '>
                            <div><img /></div>
                            <div>
                                <span>ss</span>
                                <span>s</span>
                                <span>df</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center  gap-4'>
                            <div>
                                <span>welcome to </span>
                            </div>
                            <span> <IoIosCloseCircleOutline /></span>

                        </div>
                    </div>
                </div>
                {/* add to cart place footer placeorder area  */}
                <div className='bg-yellow-800  bottom-0 w-full absolute '>
                    <div className='bg-yellow'>sdf</div>
                    <div className='bg-green-700 flex justify-between'>
                        <Button className='w-[60%] text-center py-3 bg-blue-500 hover:bg-blue-400 transition-all ease-linear' text="Place Order" />
                        <Button className='w-[40%] text-center py-3 bg-blue-300 hover:bg-blue-400 transition-all ease-linear' text="50" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;
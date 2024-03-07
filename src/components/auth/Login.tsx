"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { BsEye, BsEyeFill } from 'react-icons/bs';
import { FiEyeOff } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const [userLoginInfo, setUserLoginInfo] = useState<any>({
        password: "",
        email: ""

    })
    const handleChange = (e: any) => {
        setUserLoginInfo({
            ...userLoginInfo,
            [e.target.name]: e.target.value
        })
    }
    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        axios.post("http://localhost:5000/api/v1/user/auth/signup", userLoginInfo)
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error?.response?.data?.error);
            })
        // setUserLoginInfo({
        //     password: "",
        //     email: ""
        // })
    }
    return (
        <div className='text-white  min-h-screen flex justify-center items-center bg-cover bg-fixed bg-no-repeat overflow-hidden ' style={{ background: "url('/assets/mango.jpg')", overflow: 'hidden' }}>
            <div >
                <form onSubmit={handleFormSubmit}>
                    <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative  w-[400px] space-y-1'>
                        <h1>Login</h1>
                        <div className='flex flex-col relative'>
                            <label htmlFor="">Email</label>
                            <input type="email" name='email' value={userLoginInfo?.email} placeholder='Enter your email' className='rounded-md px-2 py-1 outline-none bg-transparent border' onChange={handleChange} />
                            <button className='absolute right-2 top-1/2 mt-1 '  >  <MdOutlineAlternateEmail /></button>
                        </div>
                        <div className='  flex flex-col relative '>
                            <label htmlFor="">Password</label>
                            <input type={!showPass ? 'password' : 'text'} placeholder='Enter your password' className='rounded-md px-2 py-1 outline-none bg-transparent border' onChange={handleChange} name="password" value={userLoginInfo?.password} />
                            <button className='absolute right-2 top-1/2 mt-1 ' onClick={() => setShowPass(!showPass)}> {!showPass ? <BsEye /> : <FiEyeOff />}</button>
                        </div>
                        <div>
                            {/* <div>
                            <input type='checkbox' name="" id="" />
                            <label htmlFor='remember me'>remember me</label>
                        </div> */}
                            {/* <span>Forgot Password</span> */}
                        </div>
                        <button type='submit' className='rounded-md px-2 py-1 outline-none bg-transparent border hover:bg-red-700'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
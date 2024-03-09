
"use client"
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const SocketTest = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  useEffect(() => {
    const screenSize = containerRef.current;
    const textValue = textRef.current;
    console.log(screenSize?.offsetWidth);
    textValue.style.background = "blue";
    + "px"
  }, [])
  return (
    <div className='h-screen bg-red-900 flex justify-cen items-center  ' ref={containerRef}>
      <p ref={textRef} className='text-[27px]
      
      '>Resize the text</p>
    </div>
  );
};

export default SocketTest;

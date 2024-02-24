import React, { useEffect, useRef, useState } from 'react';

const ReCaptcha = ({ siteKey, callback }) => {
    const recaptchaRef = useRef(null);

    useEffect(() => {
        // captcha load /
        if (!window.grecaptcha) {
            const script = document.createElement('script');
            script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }, []);
    const handleClick = () => {
        // check if captcha is available then function work 
        window.grecaptcha && window.grecaptcha.render(recaptchaRef.current, {
            'sitekey': siteKey,
            'callback': (token) => {
                console.log(token);
            }
        });
    }
    return (
        <>
            <div ref={recaptchaRef}>
            </div>
            <button className='bg-red-800 p-4 mx-5' onClick={() => {
                handleClick()
            }}>Show recaptcha version 2</button></>

    );
};
export default ReCaptcha;
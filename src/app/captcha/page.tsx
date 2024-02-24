"use client"
import ReCaptcha from '@/components/RecaptchaV2/Recaptcha';
import RecaptchaV3 from '@/components/RecaptchaV2/RecaptchaV3';
import React from 'react';

const Captcha = () => {
    return (
        <div className='flex justify-around my-5'>
            <RecaptchaV3 />
            <ReCaptcha siteKey="6LeL7XwpAAAAAC8CrcaGBSZQMwvVzJwPvEOHdkNE" />
        </div>
    );
};

export default Captcha;
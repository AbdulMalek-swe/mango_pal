"use client";

import ReCaptcha from '@/components/RecaptchaV2/Recaptcha';
import RecaptchaV3 from '@/components/RecaptchaV2/RecaptchaV3';
import { useEffect } from 'react';

export default function Home() {


  return (
    <main className='text-left flex justify-start'>
      <RecaptchaV3 />
      <ReCaptcha siteKey="6LeL7XwpAAAAAC8CrcaGBSZQMwvVzJwPvEOHdkNE" />
      {/* <div className='g-recaptcha bg-red-900' data-sitekey="6Lf_8n0pAAAAAM1ibs5TZ-Xw2_lwAyW70kQu2yO-" data-size="invisible" /> */}
    </main>
  );
}

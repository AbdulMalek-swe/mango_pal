"use client";

import { useEffect } from 'react';

export default function Home() {
  const handleLoaded = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LeL7XwpAAAAAC8CrcaGBSZQMwvVzJwPvEOHdkNE", { action: "homepage" })
        .then((token) => {
          // Handle the token as needed
          console.log(token);
        });
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LeL7XwpAAAAAC8CrcaGBSZQMwvVzJwPvEOHdkNE';
    script.addEventListener("load", handleLoaded);
    document.body.appendChild(script);
  }, []);

  return (
    <main className='text-left flex justify-start'>
      <div className='g-recaptcha bg-red-900' data-sitekey="6LeL7XwpAAAAAC8CrcaGBSZQMwvVzJwPvEOHdkNE" data-size="invisible" />
    </main>
  );
}

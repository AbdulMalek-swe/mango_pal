import React, { useEffect } from 'react';

const RecaptchaV3 = () => {
    const handleLoaded = () => {
        // captcha token for this function 
        grecaptcha.ready(function () {
            grecaptcha.execute('6Lf_8n0pAAAAAM1ibs5TZ-Xw2_lwAyW70kQu2yO-', { action: 'submit' }).then(function (token) {
                alert(token)
            });
        });
    }
    useEffect(() => {
        // load captcha 
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=6Lf_8n0pAAAAAM1ibs5TZ-Xw2_lwAyW70kQu2yO-";
        document.body.appendChild(script);
    }, [])
    const handleClick = () => {
        // check if captcha is available then function work 
        window.grecaptcha && handleLoaded()
    }
    return (
        <div>
            {/* <div className='g-recaptcha bg-red-900' data-sitekey="6Lf_8n0pAAAAAM1ibs5TZ-Xw2_lwAyW70kQu2yO-" data-size="invisible" /> */}
            <button className='bg-red-800 p-4' onClick={() => {
                handleClick()
            }}>Show recaptcha token version -1</button>
        </div>
    );
};

export default RecaptchaV3;
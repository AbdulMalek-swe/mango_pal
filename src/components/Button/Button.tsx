import React from 'react';

const Button = ({ text = "", className = "" }) => {
    return (
        <button className={className ? className : ''}>
            {!text ? 'submit' : text}
        </button>
    );
};

export default Button;
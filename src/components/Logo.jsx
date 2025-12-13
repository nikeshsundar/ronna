import React from 'react';

export default function Logo() {
    return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2L6 18H16L14 30L26 14H16L18 2Z" fill="url(#paint0_linear_logo)" />
            <defs>
                <linearGradient id="paint0_linear_logo" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#D500F9" />
                </linearGradient>
            </defs>
        </svg>
    );
}

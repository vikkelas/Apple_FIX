import React from 'react';

const ColorPin:React.FC<{firstColor: string, secondColor: string, keyId: string}> = ({firstColor, secondColor, keyId}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7.5" fill={`url(#gradient1${keyId})`} stroke={`url(#gradient2${keyId})`}/>
            <defs>
                <linearGradient id={`gradient1${keyId}`} x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor={firstColor}/>
                    <stop offset="1" stopColor={secondColor}/>
                </linearGradient>
                <linearGradient id={`gradient2${keyId}`} x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor={secondColor}/>
                    <stop offset="1" stopColor={firstColor}/>
                </linearGradient>
            </defs>
        </svg>

    );
};
export default ColorPin;

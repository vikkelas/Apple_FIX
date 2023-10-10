import React from 'react';
const Icons =  '/icons/svg/sprite.svg';

const IconSVG= ({width,height, imageId}) => {
    return (
        <svg width={width} height={height}>
            <use xlinkHref={`${Icons}#${imageId}`}/>
        </svg>
    );
};

export default IconSVG;

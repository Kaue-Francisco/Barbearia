import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import servicosImage from '../../../../../images/servicos.png';
import servicosMobile from '../../../../../images/servicosMobile.png';

export default function Price () {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:601px) and (max-width:1224px)');

    let imageSource = servicosImage; // default image for desktop
    if (isMobile) {
        imageSource = servicosMobile;
    } else if (isTablet) {
        imageSource = servicosMobile;
    }

    return (
        <div className="text-3xl font-bold flex flex-col items-center mt-8">
            <img 
            src={imageSource} 
            alt="servicos"
            width={isMobile ? '90%' : '100%'}
            className='mx-auto rounded-3xl pb-4'/>
        </div>
    )
}
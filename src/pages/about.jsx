import AboutComp from '@/components/aboutPageComp/aboutComp';
import NavFooter from '@/components/navFooter/navFooter';
import React from 'react';

export default function AboutPage (){

    return(
        <div>
            <NavFooter>
                <div className='container mx-auto py-3 px-5 md:px-2 sm:py-5'>
                    <AboutComp/>
                </div>
            </NavFooter>
        </div>
    )
}
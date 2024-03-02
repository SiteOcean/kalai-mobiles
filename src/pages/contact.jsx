import ContactComp from '@/components/contactPageComp/contactComp';
import NavFooter from '@/components/navFooter/navFooter';
import React from 'react';

export default function ContactPage (){

    return(
        <div>
            <NavFooter>
               <div className='container mx-auto py-3 px-5 md:px-2 sm:py-5'>
                <ContactComp/>
               </div>
            </NavFooter>
        </div>
    )
}
import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

export default function NavFooter ({children}){

    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>

        </div>
    )

}
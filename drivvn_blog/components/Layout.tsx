import Head from 'next/head';
import React from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet"/>    
        </Head>
        <Navbar/>
        {children}
        </>
    )
}

export default Layout

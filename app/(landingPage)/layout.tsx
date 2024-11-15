import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-col h-[100vh] w-full'>
            <Navbar />
            <div className='flex-1'>
               {children} 
            </div>
            <Footer />
        </div>
    )
}
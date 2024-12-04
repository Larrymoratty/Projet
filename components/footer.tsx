import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import Logo from './logo';

type FooterPros = {
    className?: string;
}

const Footer: React.FC<FooterPros> = ({ className }) => {
    return (
        <div className={cn(className, 'border border-t flex flex-col items-center gap-y-1')}>
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className='bg-[#06806b] w-full pb-2'>
                <div className="flex flex-col justify-center items-center px-10 py-4">
                    {/* Section des logos sociaux */}
                    <ul className='flex items-center gap-x-10'>
                        <li className='border-2 rounded-full h-10 w-10 border-white flex items-center justify-center p-1'>
                            <Link href={''}>
                                <FaSquareFacebook size={25} />
                            </Link>
                        </li>
                        <li className='border-2 rounded-full h-10 w-10 border-white flex items-center justify-center p-1'>
                            <Link href={''}>
                                <FaLinkedin size={25} />
                            </Link>
                        </li>
                        <li className='border-2 rounded-full h-10 w-10 border-white flex items-center justify-center p-1'>
                            <Link href={''}>
                                <FaSquareXTwitter size={25} />
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Section Copyright */}
                <div className='w-full text-white text-center'>
                    <p>&copy; 2024 Gabon Connected, Tous droits réservés.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

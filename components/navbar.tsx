'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type NavbarPros = {
    className?: string
}


const Navbar: React.FC<NavbarPros> = ({ className }) => {

    const pathname = usePathname();
    const [activeButton, setActiveButton] = useState(false);

    const verifiedPathname = (link: string) => {
        if (pathname.toLowerCase() === link.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <div className={cn('flex flex-row justify-between w-full px-7 py-1 border border-b items-center', className)}>
            <Link href={'/'}>
                <Logo />
            </Link>
            <ul className='hidden lg:flex xl:flex gap-x-5 items-center font-bold '>
                <li>
                    <Link href={'/'} className={`${verifiedPathname('/') && 'text-[#06806b]'}`}> Accueil</Link>
                </li>
                <li>
                    <Link href={'/about'} className={`${verifiedPathname('/about') && 'text-[#06806b]'}`}> A propos de nous</Link>
                </li>
                <li>
                    <Link href={'/contact'} className={`${verifiedPathname('/contact') && 'text-[#06806b]'}`}>Contact</Link>
                </li>
            </ul>

            <div className='xl:items-center lg:items-center lg:gap-x-3 xl:gap-x-3 hidden lg:flex lg:flex-row xl:flex xl:flex-row'>
                <Link href={'/connexion'} className='font-bold border text-[#06806b] border-[#06806b] rounded-lg px-4 py-2'>
                    Connexion
                </Link>
                <Link href={'/inscription'} className='font-bold bg-[#06806b] text-white rounded-lg px-4 py-2'>
                    Inscription
                </Link>
            </div>

            <Popover open={activeButton} onOpenChange={() => setActiveButton(!activeButton)}>
                <PopoverTrigger asChild className='xl:hidden lg:hidden' onClick={() => setActiveButton(!activeButton)}>
                    {activeButton ? <FiX size={35} /> : <FiAlignJustify size={35} />}
                </PopoverTrigger>
                <PopoverContent className='mr-1 mt-3 flex flex-col gap-y-5'>
                    <ul className='flex flex-col gap-y-2 font-bold items-start'>
                        <li>
                            <Link href={'/'} className={`${verifiedPathname('/') && 'text-[#06806b]'}`}>Accueil</Link>
                        </li>
                        <li>
                            <Link href={'/about'} className={`${verifiedPathname('/about') && 'text-[#06806b]'}`}> A propos de nous</Link>
                        </li>
                        <li>
                            <Link href={'/contact'} className={`${verifiedPathname('/contact') && 'text-[#06806b]'}`}>Contact</Link>
                        </li>
                    </ul>
                    <div className='flex flex-col gap-y-3'>
                        <Link href={'/connexion'} className='font-bold border text-[#06806b] border-[#06806b] rounded-lg px-1 py-2 text-center'>
                            Connexion
                        </Link>
                        <Link href={'/inscription'} className='font-bold bg-[#06806b] text-white rounded-lg px-2 py-2 text-center'>
                            Inscription
                        </Link>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
        
    )
}

export default Navbar
'use client'
import React from 'react';
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { HiMiniHome } from 'react-icons/hi2';

type NavbarPros = {
    className?: string
}


const Navbar: React.FC<NavbarPros> = ({ className }) => {

    const pathname = usePathname();

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
                    <Link href={'/'} className={`${verifiedPathname('/') && 'text-[#06806b]'}`}>Accueil</Link>
                </li>
                <li>
                    <Link href={'/about'} className={`${verifiedPathname('/about') && 'text-[#06806b]'}`}> A propos de nous</Link>
                </li>
                <li>
                    <Link href={'/contact'} className={`${verifiedPathname('/contact') && 'text-[#06806b]'}`}>Contact</Link>
                </li>
            </ul>

            <div className='flex items-center gap-x-3 '>
                <Link href={'/connexion'} className='font-bold border text-[#06806b] border-[#06806b] rounded-lg px-4 py-2'>
                    Connexion
                </Link>
                <Link href={'/inscription'} className='font-bold bg-[#06806b] text-white rounded-lg px-4 py-2'>
                    Inscription
                </Link>
            </div>
        </div>
        
    )
}

export default Navbar
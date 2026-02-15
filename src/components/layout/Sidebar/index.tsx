"use client";
import styles from "../styles.module.css";
import Link  from 'next/link';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import {  useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { RiArrowGoBackFill } from "react-icons/ri";
type Props = {
    isOpen: boolean;
    toggleMenu: ()=>void;
}

export default function Sidebar({isOpen,toggleMenu}:Props) {
    const logo = useTranslations();

    const pathname = usePathname();
    const user = useSelector((state:any)=>state.user.user);
    const locale = useLocale();

  return (
    <aside className={`${styles.sidebar}  ${isOpen?`${styles.expanded}`:""} flex flex-col gap-8 overflow-x-hidden`}>
        <div className='flex justify-between items-center gap-3 px-3 pt-3 fs-4 fw-bold '> 
            <Link className='flex gap-1 items-center text-primaryRed w' href={`/${locale}`}>
                <Image 
                src={"/logo/logo-light.svg"} 
                priority 
                height={1000} 
                width={1000} 
                quality={100} 
                className='max-w-40' 
                alt='logo'
                />
            </Link>
            <span className='cursor-pointer  text-primaryA1 hover:text-secondaryA1  rounded-full' onClick={toggleMenu}>
                < RiArrowGoBackFill size={28}/>
            </span>
        </div>
        <hr className='border-2'/>
        {/* Language & Notifications */}
        <div className=' flex justify-between  pt-2  gap-2 px-10 '>
            <LanguageSwitcher 
            className='grow-0!'
            />


            
        </div>
        {/* <hr className='border-2'/> */}
        <div className='flex flex-col gap-1 px-10 grow'>
            <Link 
                className={`nav-link ${pathname === (`/${locale}`) ? "active":""}`} 
                href={`/${locale}`}
                onClick={toggleMenu}
                >
                Home
            </Link>
            <Link 
                className={`nav-link ${pathname.includes("/packages")?" active":""}`} 
                href={`/${locale}/packages`}
                onClick={toggleMenu}
                >
                Services
            </Link>

            <Link 
                className={`nav-link ${pathname.includes("/leaderboards")?" active":""}`} 
                href={`/${locale}/leaderboards`}
                onClick={toggleMenu}
                >
                Portfolio
            </Link>
            
            <Link 
                className={`nav-link ${pathname.includes("/games")?" active":""}`} 
                href={`/${locale}/games`}
                onClick={toggleMenu}
                >
                About
            </Link>
            <Link 
                className={`nav-link ${pathname.includes("/games")?" active":""}`} 
                href={`/${locale}/games`}
                onClick={toggleMenu}
                >
                Contact
            </Link>
            <Link 
                className={`nav-link ${pathname.includes("/games")?" active":""}`} 
                href={`/${locale}/games`}
                onClick={toggleMenu}
                >
                Blog
            </Link>
            
            {/* Bottom */}
            
            <div className='mt-auto pb-5'>
            <hr className='border-2 -mx-10 mb-5'/>
            {
                !user && 
                <Link 
                className={`nav-link ${pathname.includes("/login")?" active":""}`} 
                href={`/${locale}/login`}
                onClick={toggleMenu}
                >
                Login
                </Link>
            }
            </div>

        </div>


    </aside>
  )
}

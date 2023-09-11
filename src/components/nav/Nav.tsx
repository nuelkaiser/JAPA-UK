import React, {useState} from 'react';
import { H4, P2 } from '../shared/fonts/Fonts';
import Close from '../../assests/icons/close.svg'
import { Button } from '../shared/Button/Button';
import styles from './Nav.module.scss';
import Menu from '@/assests/icons/hamburger-menu.svg';
import Link from 'next/link';

const Nav = () => {

    const [toogle, setToogle] = useState(false);

    const handleToogle = () => {
        setToogle(!toogle)
    }

    return (
        <div>
            <div className={`${styles.nav}`}>
                <H4 className='text-[#FFFFFF] font-bold'>Japanow.uk</H4>

                <div className='hidden lg:flex lg:items-center lg:gap-6'>
                    <P2 className='text-[#FFF] hover:text-[#1111114D] hover:cursor-pointer'>Home</P2>
                    <P2 className='text-[#FFF] hover:text-[#1111114D] hover:cursor-pointer'>About us</P2>
                    <P2 className='text-[#FFF] hover:text-[#1111114D] hover:cursor-pointer'>Testimonial</P2>
                    <P2 className='text-[#FFF] hover:text-[#1111114D] hover:cursor-pointer'>Contact</P2>
                </div>

                <Button className='font-bold hidden lg:block'>
                    Book a consulatation
                </Button>

                <Menu className="lg:hidden w-6 h-6 text-[white]" onClick={handleToogle}/>
            </div>

            <div className={toogle ? `${styles.mobileNav} bg-white  py-14 top-0 shadow-2xl lg:hidden` : ` ${styles.mobileNav} top-[-100px]`}>
                <Close className={`${styles.mobileClose}`} onClick={handleToogle} />
                <Link href='/'>
                    <p className={`${styles.mobileLinks}`}>About Us</p>
                </Link>
                <Link href='/'>
                    <p className={`${styles.mobileLinks}`}>Testimonial</p>
                </Link>
                <Link href='/'>
                    <p className={`${styles.mobileLinks}`}>Contact</p>
                </Link>
            </div>
        </div>

    )
}

export default Nav
import React from 'react';
import Nav from '../nav/Nav';
import styles from './Header.module.scss';
import { H, H4 } from '../shared/fonts/Fonts';
import { Button1 } from '../shared/Button/Button';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Nav />

      <div className='flex flex-col gap-4 justify-center items-center mt-36 text-center'>
        <H className='text-[#FFF] font-bold max-[425px]:text-4xl'>Your Journey To The UK Begins Here</H>
        <H4 className='text-[#FFF] font-normal max-[725px]:text-2xl'>Discover new culture and take pictures for memories sake</H4>
        <Button1 className='font-bold'>Get Started</Button1>
      </div>
    </div>
  )
}

export default Header
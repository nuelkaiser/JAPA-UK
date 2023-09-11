import React from 'react';;
import Twitter from '@/assests/icons/twitter.svg'
import Linkedin from '@/assests/icons/linkedin.svg'
import Instagram from '@/assests/icons/instagram.svg';
import Facebook from '@/assests/icons/facebook.svg'
import { H4, H6, Label, P } from '../shared/fonts/Fonts';

const Footer = () => {
    return (
        <div className='bg-black px-10 pt-12 pb-14 mt-36 w-full'>
            <div className='flex items-start justify-between max-[768px]:flex-col max-[768px]:items-center'>
                <div className='max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center'>
                    <H4 className='text-white'>Japanow</H4>

                    <div className='flex items-center gap-8 my-6'>
                        <Label className='text-[#5C5F66] cursor-pointer'>
                            Home
                        </Label>

                        <Label className='text-[#5C5F66] cursor-pointer'>
                            About
                        </Label>

                        <Label className='text-[#5C5F66] cursor-pointer'>
                            Testimonial
                        </Label>

                        <Label className='text-[#5C5F66] cursor-pointer'>
                            Contact
                        </Label>
                    </div>

                    <div className='flex items-center gap-4'>
                        <Facebook className="text-[#5C5F66] cursor-pointer w-6 h-6" />
                        <Instagram className="text-[#5C5F66] cursor-pointer w-6 h-6" />
                        <Twitter className="text-[#5C5F66] cursor-pointer w-6 h-6" />
                        <Linkedin className="text-[#5C5F66] cursor-pointer w-6 h-6" />
                    </div>
                </div>
                
                <div>
                    <div className='max-[768px]:text-center max-[768px]:mt-10'>
                        <H6 className='text-white'>Join Our Newsletter</H6>
                        <P className='text-[#5C5F66] mt-2'>
                            Be the first to know about our latest updates, exclusive offers, and more.
                        </P>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <input className='w-[511px] max-[425px]:w-full p-3 border border-[#D6D6D6] rounded-lg bg-transparent outline-none text-[#FDFDFD] placeholder-shown:text-[#FDFDFD]' placeholder='Enter your email'/>
                        <div className='py-3 px-5 border border-white text-[#FDFDFD] cursor-pointer'>
                            Subscribe
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-full h-[1px] bg-[#E6E6E6] mt-24 mb-8 max-[768px]:mt-10' />
            <div className='flex justify-between max-[425px]:flex-col max-[425px]:items-center gap-8'>
                <div className='flex items-center gap-8'>
                    <Label className='text-[#5C5F66] cursor-pointer'>
                        English
                    </Label>

                    <Label className='text-[#5C5F66] cursor-pointer'>
                        Privacy
                    </Label>

                    <Label className='text-[#5C5F66] cursor-pointer'>
                        Legal
                    </Label>
                </div>

                <Label className='text-[#A6A7AB]'>
                    © 2023 Cadet UI. All Rights Reserved.
                </Label>
            </div>
        </div>
    )
}

export default Footer
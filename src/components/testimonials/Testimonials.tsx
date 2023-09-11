import React from 'react'
import { H, H1, H4, P } from '../shared/fonts/Fonts';
import Image from 'next/image';
import Stars from '@/assests/images/stars.png';
import User from '@/assests/images/user.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {


    return (
        <div className='mt-36 mx-10'>
            <H1 className='text-center mb-8'>Testimonials</H1>

            <div className='hidden lg:block'>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='py-2'>
                        <div className='px-12 py-14 shadow-lg flex flex-col gap-4'>
                            <Image src={Stars} alt='review stars' />
                            <H4>Lovely experience...</H4>
                            <P>
                                It was so lovely working with them cause they handled everything all i had to do was trust them.
                            </P>

                            <div className='flex items-center gap-4'>
                                <Image src={User} alt='User Profile' />
                                <P>Yasmin Mara</P>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide  className='py-2'>
                        <div className='px-12 py-14 shadow-lg flex flex-col gap-4'>
                            <Image src={Stars} alt='review stars' />
                            <H4>Lovely experience...</H4>
                            <P>
                                It was so lovely working with them cause they handled everything all i had to do was trust them.
                            </P>

                            <div className='flex items-center gap-4'>
                                <Image src={User} alt='User Profile' />
                                <P>Yasmin Mara</P>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide  className='py-2'>
                        <div className='px-12 py-14 shadow-lg  flex flex-col gap-4'>
                            <Image src={Stars} alt='review stars' />
                            <H4>Lovely experience...</H4>
                            <P>
                                It was so lovely working with them cause they handled everything all i had to do was trust them.
                            </P>

                            <div className='flex items-center gap-4'>
                                <Image src={User} alt='User Profile' />
                                <P>Yasmin Mara</P>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide  className='py-2'>
                        <div className='px-12 py-14 shadow-lg  flex flex-col gap-4'>
                            <Image src={Stars} alt='review stars' />
                            <H4>Lovely experience...</H4>
                            <P>
                                It was so lovely working with them cause they handled everything all i had to do was trust them.
                            </P>

                            <div className='flex items-center gap-4'>
                                <Image src={User} alt='User Profile' />
                                <P>Yasmin Mara</P>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


            <div className='lg:hidden'>
                <div className='px-12 py-14 shadow-lg flex flex-col gap-4'>
                    <Image src={Stars} alt='review stars' />
                    <H4>Lovely experience...</H4>
                    <P>
                        It was so lovely working with them cause they handled everything all i had to do was trust them.
                    </P>

                    <div className='flex items-center gap-4'>
                        <Image src={User} alt='User Profile' />
                        <P>Yasmin Mara</P>
                    </div>
                </div>

                <div className='px-12 py-14 shadow-lg flex flex-col gap-4'>
                    <Image src={Stars} alt='review stars' />
                    <H4>Lovely experience...</H4>
                    <P>
                        It was so lovely working with them cause they handled everything all i had to do was trust them.
                    </P>

                    <div className='flex items-center gap-4'>
                        <Image src={User} alt='User Profile' />
                        <P>Yasmin Mara</P>
                    </div>
                </div>

                <div className='px-12 py-14 shadow-lg flex flex-col gap-4'>
                    <Image src={Stars} alt='review stars' />
                    <H4>Lovely experience...</H4>
                    <P>
                        It was so lovely working with them cause they handled everything all i had to do was trust them.
                    </P>

                    <div className='flex items-center gap-4'>
                        <Image src={User} alt='User Profile' />
                        <P>Yasmin Mara</P>
                    </div>
                </div>

                <div className='px-12 py-14 shadow-lg flex flex-col gap-4'>
                    <Image src={Stars} alt='review stars' />
                    <H4>Lovely experience...</H4>
                    <P>
                        It was so lovely working with them cause they handled everything all i had to do was trust them.
                    </P>

                    <div className='flex items-center gap-4'>
                        <Image src={User} alt='User Profile' />
                        <P>Yasmin Mara</P>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Testimonials
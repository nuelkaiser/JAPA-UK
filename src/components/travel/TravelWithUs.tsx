import React from 'react';
import styles from './TravelWithUs.module.scss';
import { H, H1, H4, P } from '../shared/fonts/Fonts';
import TravelImg from '@/assests/images/travel.png';
import TravelMobileImg from '@/assests/images/travel-mobile.png';
import Image from 'next/image';

const TravelWithUs = () => {
  return (
    <div className={`${styles.travelContainer}`}>
      <H1 className='text-[#000] text-center font-bold mb-8 max-[425px]:text-xl'>Why you should travel with us</H1>

      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-40'>
        <div className='flex flex-col gap-20 mx-6 lg:mx-0'>
          <div>
            <H4 className='text-[#000] font-bold  max-[425px]:text-3xl max-[768px]:text-4xl'>Tour Guide</H4>
            <P className='text-[#000000CC] mt-4 '>
              We offer a free tour guide of the united kingdom were you would go and see places
            </P>
          </div>

          <div>
            <H4 className='text-[#000] font-bold max-[768px]:text-4xl'>3 years of travel experience</H4>
            <P className='text-[#000000CC] mt-4'>
              We have been in this industry for long that we are a trusted agency and 90% of our customers are happy
            </P>
          </div>

          <div>
            <H4 className='text-[#000] font-bold max-[768px]:text-4xl'>100% trusted agency</H4>
            <P className='text-[#000000CC] mt-4'>
              Our customers trust with confidential detail which would never be released to the public
            </P>
          </div>
        </div>

        <div>
          <Image src={TravelImg} alt='travel' className='hidden lg:block' />
          <Image src={TravelMobileImg}  alt='travel'  className='lg:hidden w-full' />
        </div>
      </div>
    </div>
  )
}

export default TravelWithUs
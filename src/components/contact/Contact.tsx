import React from 'react'
import { H, H1, P3 } from '../shared/fonts/Fonts';
import { Button2 } from '../shared/Button/Button';
import Phone from '@/assests/icons/phone.svg';
import Telephone from '@/assests/icons/telephone.svg';
import Envelope from '@/assests/icons/envelope.svg';

const Contact = () => {
    return (
        <div>
            <H1 className='mt-36 mb-8 text-center'>Contact Us</H1>

            <div className='mx-10 max-[425px]:mx-6 flex items-center justify-between max-[768px]:flex-col gap-9'>
                <H1 className='font-semibold max-[768px]:text-center lg:w-2/3'>
                    Feel free to message us for more information
                </H1>

                <form className='lg:w-2/3 w-full'>
                    <div className='flex flex-col gap-5'>
                        <input type='name' placeholder='Name' className='px-5 py-3 border border-[#E0E0E0]' />
                        <input type='name' placeholder='Email' className='px-5 py-3 border border-[#E0E0E0]' />
                        <Button2>
                            SEND
                        </Button2>
                    </div>

                    <div className='flex items-center justify-between mt-5 gap-5'>
                        <div className='flex items-center gap-4'>
                            <Phone className='max-[425px]:scale-[.5]'/>
                            <div>
                                <P3 className='font-bold'>PHONE</P3>
                                <P3>03 5432 1234</P3>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <Telephone  className='max-[425px]:scale-[.5]'/>
                            <div>
                                <P3 className='bold'>FAX</P3>
                                <P3>03 5432 1234</P3>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <Phone  className='max-[425px]:scale-[.5]'/>
                            <div>
                                <P3 className='font-bold'>EMAIL</P3>
                                <P3>info@marcc.com.au</P3>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
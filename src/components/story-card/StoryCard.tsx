import React from 'react'
import { H4, P } from '../shared/fonts/Fonts'
import Image from 'next/image';
import type { StaticImageData } from "next/image";



interface StoryProps {
    title: string,
    content: string
    img: string | StaticImageData
}

const StoryCard: React.FC<StoryProps> = ({title, content, img}) => {
    return (
        <div className='w-1/3 max-[768px]:w-full'>
            <Image src={img} alt='story card' className='w-full' />
            <div className='px-10 py-12 border border-t-0 border-[#00000080] h-64 max-[1024px]:h-72 max-[768px]:h-full'>
                <H4 className='mb-4'>{title}</H4>
                <P>
                    {content}
                </P>
            </div>
        </div>
    )
}

export default StoryCard
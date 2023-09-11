import React from 'react'
import { H, H1, H2, H3, H4, P } from '../shared/fonts/Fonts'
import StoryCard from '../story-card/StoryCard';
import StoryCard1 from '@/assests/images/story-card-1.png';
import StoryCard2 from '@/assests/images/story-card-2.png';
import StoryCard3 from '@/assests/images/story-card-3.png';


const Story = () => {
    return (
        <div className='mt-32'>
            <div className='flex flex-col gap-8 items-center text-center px-10'>
                <H1>Our Story</H1>
                <H2>World’s Best Travel Agency Since 2020</H2>
                <H3>Welcome to our travel agency. At Japa we are passionate about turning your dreams
                    into reality while curating an unforgettable experience for the traveler
                </H3>
            </div>

            <div className='mx-10 max-[320px]:mx-6 mt-8 flex max-[768px]:flex-col gap-4'>
                <StoryCard img={StoryCard1} title='Professionlasim' content='We value and uphold high standard of profestionalism in all interaction and services' />
                <StoryCard img={StoryCard2} title='Customer- Centric ' content='We put clients needs and satisfaction first which is crucial to ensure sucess at our agency'/>
                <StoryCard img={StoryCard3} title='Adaptabilty and Flexibilty' content='Relocation can be challenging, but we are experts at finding friendly solutions for your peace of mind.'/>
            </div>
        </div>
    )
}

export default Story
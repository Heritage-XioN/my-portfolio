import React from 'react';
import ResumeBtn from '../atom/resumeBtn';

const About = () => {
	return (
		<div className='lg:w-[55%]'>
			<h1 className='text-textColor font-bold text-4xl text-center lg:text-left mb-6'>
				Hi my name is <span className='font-black'>Heritage Iyoke</span> i am a
				full stack developer
			</h1>
			<p className='text-textColor text-center md:text-[1.2rem] lg:text-left lg:text-[1.2rem] mb-6'>
				I create beautiful and interactive website with technologies like{' '}
				<span className='font-bold'>TYPESCRIPT - REACT/NEXTJS</span> for
				frontend and <span className='font-bold'>PYTHON - FASTAPI</span> for
				back end I&apos;m a mechatronics engineering student. I&apos;m
				passionate about anything software related so I&apos;m driven to create
				innovative solutions that bridge the gap between conception and
				real-world implementation and application.
			</p>
			<ResumeBtn />
		</div>
	);
};

export default About;

import React from 'react'
import ResumeBtn from '../atom/resumeBtn';

const About = () => {
  return (
		<div>
			<h1 className='text-textColor font-black text-4xl text-center mb-6'>Hi my name is Heritage Iyoke i am a full stack developer</h1>
			<p className='text-textColor text-center mb-6'>
				Im a passionate software developer and mechatronics engineering student,
				Im driven to create innovative solutions that bridge the gap between
				technology and real-world problems.
			</p>
			<ResumeBtn />
		</div>
	);
}

export default About
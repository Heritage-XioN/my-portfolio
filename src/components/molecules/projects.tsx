import React from 'react'
import ProjectsCard from '../atom/projectsCard'
import Link from 'next/link';

const Projects = () => {
  return (
		<div className='px-paddingSm md:px-paddingmd lg:px-32 w-full py-5 mb-6'>
			<div className='flex justify-between font-bold mb-3 text-xs'>
				<p className='font-black'>PROJECTS</p>
				<Link className='text-blue-400' href={''}>
					View all
				</Link>
			</div>
			<div className='flex flex-col gap-4 w'>
				<ProjectsCard imageStyle='' cardStyles='border-b  md:flex md:flex-row' />
				<ProjectsCard imageStyle='' cardStyles='border-b  md:flex md:flex-row' />
			</div>
		</div>
	);
}

export default Projects
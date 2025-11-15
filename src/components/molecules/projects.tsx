import React from 'react'
import ProjectsCard from '../atom/projectsCard'
import Link from 'next/link';
import projects from '@/lib/projects';

const Projects = () => {
	const projectsCard = projects.map((items) => {
		return (
			<ProjectsCard key={items.id} {...items} imageStyle='' cardStyles='border-b  md:flex md:flex-row' />
		);
	});
  return (
		<div className='px-paddingSm md:px-paddingmd lg:px-32 w-full py-5 mb-6'>
			<div className='flex justify-between font-bold mb-3 text-xs'>
				<p className='font-black'>PROJECTS</p>
				<Link className='text-blue-400' href={'/projects'}>
					View all
				</Link>
			</div>
			<div className='flex flex-col gap-4 w'>
				{projectsCard}
			</div>
		</div>
	);
}

export default Projects
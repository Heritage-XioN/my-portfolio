import ProjectsCard from '@/components/atom/projectsCard';
import projects from '@/lib/projects';
import React from 'react'

const Page = () => {
	const projectsCard = projects.map((items) => {
		return (
			<ProjectsCard
				key={items.id}
				{...items}
				imageStyle='order-last md:h-96'
				cardStyles='flex flex-col px-4 md:px-8'
			/>
		);
	});
  return (
		<div className='w-full px-paddingSm py-4 mt-7 md:px-24 lg:px-40'>
			<div className='font-bold mb-2 text-xl'>
				<p className='font-black'>PROJECTS</p>
			</div>
			<div className='flex flex-col gap-4'>
				{projectsCard}
			</div>
		</div>
	);
}

export default Page
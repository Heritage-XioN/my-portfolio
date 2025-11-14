import ProjectsCard from '@/components/atom/projectsCard';
import React from 'react'

const Page = () => {
  return (
		<div className='w-full px-paddingSm py-4 mt-7'>
			<div className='font-bold mb-2 text-xl'>
				<p className='font-black'>PROJECTS</p>
			</div>
			<div className='flex flex-col gap-4'>
				<ProjectsCard imageStyle='order-last' cardStyles='flex flex-col' />
				<ProjectsCard imageStyle='order-last' cardStyles='flex flex-col' />
				<ProjectsCard imageStyle='order-last' cardStyles='flex flex-col' />
				<ProjectsCard imageStyle='order-last' cardStyles='flex flex-col' />
				<ProjectsCard imageStyle='order-last' cardStyles='flex flex-col' />
			</div>
		</div>
	);
}

export default Page
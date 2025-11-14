import React from 'react';
import BlogCard from '../atom/blogCard';
import Link from 'next/link';

const Blogs = () => {
	return (
		<div className='bg-blue-200 w-full px-paddingSm py-4'>
			<div className='flex justify-between font-bold mb-2 text-xs'>
				<p className='font-black'>RECENT POSTS</p>
				<Link className='text-blue-400' href={''}>
					View all
				</Link>
			</div>
			<div className='flex flex-col gap-4'>
				<BlogCard style=''/>
				<BlogCard style=''/>
			</div>
		</div>
	);
};

export default Blogs;

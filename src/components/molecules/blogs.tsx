import React from 'react';
import BlogCard from '../atom/blogCard';
import Link from 'next/link';
import blogs from '@/lib/blog';



const Blogs = () => {

	const blogCard = blogs.map((items) => {
		return <BlogCard key={items.id} {...items} style='' />;
	})

	return (
		<div className='bg-blue-200 w-full px-paddingSm md:px-paddingmd lg:px-32 lg:py-5 py-4'>
			<div className='flex justify-between font-bold mb-2 text-xs'>
				<p className='font-black'>RECENT POSTS</p>
				<Link className='text-blue-400' href={'/blog'}>
					View all
				</Link>
			</div>
			<div className='flex flex-col md:flex-row gap-4 pb-4'>
				{blogCard}
			</div>
		</div>
	);
};

export default Blogs;

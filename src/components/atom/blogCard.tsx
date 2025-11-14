import React from 'react';
interface blogCard {
    style: string
}

const BlogCard = ({style}: blogCard) => {
	return (
		<div className={`bg-background px-4 py-2 w-full rounded ${style}`}>
			<h1 className='text-[19px] font-black pb-1.5 leading-7'>
				Header of a post just testing
			</h1>
			<div className='flex pb-1.5 text-[10px]'>
				<p className='font-bold'>12 feb 2025</p>
				<div className='h-3.5 bg-textColor mx-5 w-0.5'></div>
				<p className='font-bold'>Category</p>
			</div>
			<p className='text-[11px] leading-[15.36px] font-normal mb-2'>
				long tex of the blogs Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Ipsa iste quasi corrupti doloribus esse harum facilis, unde error
				veniam
			</p>
		</div>
	);
};

export default BlogCard;

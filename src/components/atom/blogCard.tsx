interface blogCard {
	style: string;
}

const BlogCard = ({ style }: blogCard) => {
	return (
		<div
			className={`bg-background px-4 py-2 w-full rounded md:px-8 md:py-4 lg:py-8 ${style}`}
		>
			<h1 className='text-[19px] font-black pb-1.5 leading-7 md:text-[1.5rem] lg:text-[2rem] lg:pb-4 line-clamp-2'>
				Header of a post just testing
			</h1>
			<div className='flex pb-1.5 text-[10px] md:text-[0.8rem] lg:text-[1.2rem]'>
				<p className='font-bold'>12 feb 2025</p>
				<div className='h-3.5 bg-textColor mx-5 w-0.5'></div>
				<p className='font-bold'>Category</p>
			</div>
			<p className='text-[11px] leading-[15.36px] font-normal mb-2 md:text-[1rem] md:leading-4 lg:text-[1.2rem] lg:leading-6 line-clamp-3'>
				long tex of the blogs Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Ipsa iste quasi corrupti doloribus esse harum facilis, unde error
				veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
				quibusdam obcaecati mollitia perspiciatis voluptates id ad, ipsa fugit
				ea nostrum sed et natus, esse maiores eius laboriosam? Reiciendis, ipsum
				atque.
			</p>
		</div>
	);
};

export default BlogCard;

interface blogCard {
	style: string;
	header: string;
	date: string;
	category: string;
	body: string;
}

const BlogCard = ({ style, header, date, category, body }: blogCard) => {
	return (
		<div
			className={`bg-background px-4 py-2 w-full rounded md:px-8 md:py-4 lg:py-8 ${style}`}
		>
			<h1 className='text-[19px] mb-1.5 font-black leading-7 md:text-[1.5rem] lg:text-[2rem] lg:mb-4 line-clamp-1'>
				{header}
			</h1>
			<div className='flex pb-1.5 text-[10px] md:text-[0.8rem] lg:text-[1.2rem]'>
				<p className='font-bold'>{date}</p>
				<div className='h-3.5 md:h-4 lg:h-6 bg-textColor mx-5 w-0.5'></div>
				<p className='font-bold'>{category}</p>
			</div>
			<p className='text-[11px] leading-[15.36px] font-normal mb-2 md:text-[1rem] md:leading-4 lg:text-[1.2rem] lg:leading-6 line-clamp-3'>
				{body}
			</p>
		</div>
	);
};

export default BlogCard;

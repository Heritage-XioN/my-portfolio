import React from 'react'
import Image from 'next/image';

interface blogCard {
	imageStyle: string;
    cardStyles: string;
	header: string;
	image: string;
	status: string;
	category: string;
	body: string;
}

const ProjectsCard = ({ imageStyle, cardStyles, header, image, status, category, body }: blogCard) => {
	return (
		<div className={`${cardStyles}`}>
			<div className={`h-52 w-full bg-red-400 mb-4 ${imageStyle} md:mr-4 avatar`}>
				<Image src={image} alt='card image' width={700} height={700} />
			</div>
			<div className='px-4 md:py-8 flex flex-col justify-between '>
				<h1 className='text-[19px] font-black mb-1.5 leading-7 md:text-[1.5rem] lg:text-[2rem] md:mb-4 line-clamp-1'>
					{header}
				</h1>
				<div className='flex pb-1.5 md:text-[1rem] lg:text-[1.2rem]'>
					<p className='font-bold bg-success badge text-white mr-4'>{status}</p>
					<p className='font-bold'>{category}</p>
				</div>
				<p className='text-[11px] leading-[15.36px] font-normal mb-3 md:text-[1rem] md:leading-4 lg:text-[1.2rem] lg:leading-6 line-clamp-3'>
					{body}
				</p>
			</div>
		</div>
	);
};

export default ProjectsCard
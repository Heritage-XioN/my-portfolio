import React from 'react'

interface blogCard {
	imageStyle: string;
    cardStyles: string;
}

const ProjectsCard = ({ imageStyle, cardStyles }: blogCard) => {
	return (
		<div className={`${cardStyles}`}>
			<div className={`h-52 w-full bg-red-400 mb-4 ${imageStyle}`}></div>
			<div className=''>
				<h1 className='text-[19px] font-black pb-1.5 leading-7'>
					Header of a post just testing
				</h1>
				<div className='flex pb-1.5 '>
					<p className='font-bold bg-success badge text-white mr-4'>Live</p>
					<p className='font-bold'>Category</p>
				</div>
				<p className='text-[11px] leading-[15.36px] font-normal mb-3'>
					long tex of the blogs Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ipsa iste quasi corrupti doloribus esse harum
					facilis, unde error veniam
				</p>
			</div>
		</div>
	);
};

export default ProjectsCard
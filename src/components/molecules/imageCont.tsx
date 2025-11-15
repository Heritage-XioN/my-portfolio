import React from 'react'
import Image from 'next/image';

const ImageConatiner = () => {
  return (
		<div className='avatar w-60 mb-8 lg:w-68'>
			<div className='rounded-full'>
				<Image
					className='border-'
					src={'/Screenshot 2025-11-10 015949.png'}
					height={300}
					width={300}
					alt='add later'
				/>
			</div>
		</div>
	);
}

export default ImageConatiner;
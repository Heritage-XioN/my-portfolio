import React from 'react'
import Image from 'next/image';

const ImageConatiner = () => {
  return (
		<div className='avatar w-60 mb-8 lg:w-68'>
			<div className='rounded-full'>
				<Image
					className='border-'
					src={
						'https://res.cloudinary.com/ddg2pxgz0/image/upload/v1763986777/optimized-image_b0pi9c.webp'
					}
					height={300}
					width={300}
					alt='add later'
				/>
			</div>
		</div>
	);
}

export default ImageConatiner;
import React from 'react';
import About from '../molecules/about';
import ImageConatiner from '../molecules/imageCont';
import Blogs from '../molecules/blogs';
import Projects from '../molecules/projects';
import Footer from '../molecules/footer';

const Root = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='flex flex-col-reverse justify-center items-center md:flex-row p-paddingSm'>
				<About />
				<ImageConatiner />
			</div>
			<Blogs />
			<Projects />
			<Footer />
		</div>
	);
};

export default Root;

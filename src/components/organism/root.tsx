import About from '../molecules/about';
import ImageConatiner from '../molecules/imageCont';
import Blogs from '../molecules/blogs';
import Projects from '../molecules/projects';

const Root = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='flex flex-col-reverse justify-center items-center p-paddingSm md:px-paddingmd lg:px-36 lg:flex-row lg:justify-between'>
				<About />
				<ImageConatiner />
			</div>
			<Blogs />
			<Projects />
		</div>
	);
};

export default Root;

import BlogCard from '@/components/atom/blogCard';


const Page = () => {
  return (
		<div className='w-full px-paddingSm py-4 mt-7 md:px-28 lg:px-36'>
			<div className='font-bold mb-2 text-xl'>
				<p className='font-black'>BLOG POSTS</p>
			</div>
			<div className='flex flex-col gap-4'>
				<BlogCard style='border-b ' />
				<BlogCard style='border-b' />
				<BlogCard style='border-b ' />
				<BlogCard style='border-b' />
			</div>
		</div>
	);
}

export default Page
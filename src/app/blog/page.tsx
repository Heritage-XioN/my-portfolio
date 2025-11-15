import BlogCard from '@/components/atom/blogCard';
import blogs from '@/lib/blog';


const Page = () => {
	const blogCard = blogs.map((items) => {
		return <BlogCard key={items.id} {...items} style='border-b' />;
	});
  return (
		<div className='w-full px-paddingSm py-4 mt-7 md:px-28 lg:px-36'>
			<div className='font-bold mb-2 text-xl'>
				<p className='font-black'>BLOG POSTS</p>
			</div>
			<div className='flex flex-col gap-4'>
				{blogCard}
			</div>
		</div>
	);
}

export default Page
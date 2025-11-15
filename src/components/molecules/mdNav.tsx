import React from 'react';
import Navlink from '../atom/navlink';

const MdNav = () => {
	return (
		<div className='hidden md:flex flex-row-reverse w-full py-3 px-8'>
			<div className='flex-none'>
				<input
					type='checkbox'
					className='toggle checked:border-indigo-600 checked:bg-indigo-500 checked:text-indigo-800 border-orange-500 bg-orange-400 text-orange-800 toggle-lg'
				/>
			</div>
			<div className='px-4 mr-2'>
				<ul className='flex gap-6'>
					<li>
						<Navlink url='/' display='Home' />
					</li>
					<li>
						<Navlink url='/projects' display='Projects' />
					</li>
					<li>
						<Navlink url='/blog' display='Blog' />
					</li>
					<li>
						<Navlink url='/contact' display='Contact' />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MdNav;

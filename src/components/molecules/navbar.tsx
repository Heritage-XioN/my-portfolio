import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Navlink from "../atom/navlink";

const Navbar = () => {
  return (
		<div className='fixed w-full z-50 md:hidden'>
			<div className='navbar bg-base-100 px-4'>
				<div className='navbar-start w-[13%]'>
					<div className='dropdown'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost btn-circle text-3xl'
						>
							<GiHamburgerMenu />
						</div>
						<ul
							tabIndex={-1}
							className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
						>
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
				<div className='flex-1'>
					<Link href={'/'} className='btn btn-ghost text-2xl'>
						HI
					</Link>
				</div>
				<div className='flex-none'>
					<input
						type='checkbox'
						className='toggle checked:border-indigo-600 checked:bg-indigo-500 checked:text-indigo-800 border-orange-500 bg-orange-400 text-orange-800 toggle-lg'
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar
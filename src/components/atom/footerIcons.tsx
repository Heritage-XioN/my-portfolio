import Link from 'next/link'
import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


const FooterIcons = () => {
  return (
		<div className='flex flex-col justify-center items-center'>
			<div className='grid grid-cols-4 gap-4 text-5xl p-2'>
				<Link href={''}>
					<FaDiscord />
				</Link>
				<Link href={''}>
					<FaSquareXTwitter />
				</Link>
				<Link href={''}>
					<FaLinkedin />
				</Link>
				<Link href={''}>
					<FaWhatsapp />
				</Link>
			</div>
			<Link
				className='text-[11px] leading-[15.36px] font-normal mb-3'
				href={''}
			>
				design by insert name
			</Link>
		</div>
	);
}

export default FooterIcons
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Navlink {
	url: string;
	display: string;
}

const Navlink = ({ url, display }: Navlink) => {
	const path = usePathname();
	console.log(path);
	const active =
		path == url
			? 'text-orange-400'
			: ' text-black';
	return (
		<Link className={`font-extrabold font-ibm ${active} my-1.5`} href={url}>
			{display}
		</Link>
	);
};

export default Navlink;

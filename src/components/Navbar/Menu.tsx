import { dm } from '@/config/fonts';
import menuItems from '@/config/menuItems';
import Link from 'next/link';
import React from 'react';

export default function Menu() {
	return (
		<ul className='flex flex-col lg:flex-row items-center gap-3 lg:gap-6 xl:gap-9 text-sm lg:text-base mb-2 lg:mb-0'>
			{menuItems.map((menuItem, index) => <li
				key={index}
			>
				<Link href={menuItem.route} className={'text-black hover:text-primary font-medium transition-all duration-500 hover-underline-animation'}>
					{menuItem.name}
				</Link>
			</li>)}
		</ul>
	);
}

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import Search from './Search';
import Button from '../shared/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideBar from './SideBar';
import { integral } from '@/config/fonts';
import AOS from "aos";



export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const sidebarRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: any) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		AOS.init({
			duration: 700
		});
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	});

	return (
		<nav className='z-[999] sticky top-0 py-6 bg-white'>
			<div className='container flex justify-between items-center w-full h-full gap-4'>
				<div className='flex justify-between items-center gap-4 lg:gap-6 xl:gap-8'>
					<div className='pr-0 lg:pr-6 xl:pr-8 py-2 border-none lg:border-r border-custom-white h-full flex justify-center items-center'>
						<h1 className={`font-bold text-xl lg:text-2xl text-primary ${integral.className}`}>
							NFters
						</h1>
					</div>
					<div className='hidden lg:block'>
						<Menu />
					</div>
				</div>
				<div className='flex justify-center items-center gap-4 xl:gap-6'>
					<Search />
					<Button className='hidden lg:block btn-primary px-6 lg:px-8 xl:px-10 py-1.5 lg:py-2.5 font-medium' label='Upload' />
					<Button className='hidden lg:block btn-outline px-6 lg:px-8 xl:px-10 py-2 lg:py-3 font-bold' label={<p><span className='mr-1'>Connect</span><span>Wallet</span></p>} />
					<Button className='mr-2 block lg:hidden' startIcon={<GiHamburgerMenu size={20} onClick={toggleMenu} />} />
				</div>
			</div>
			<SideBar ref={sidebarRef} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
		</nav>
	);
}

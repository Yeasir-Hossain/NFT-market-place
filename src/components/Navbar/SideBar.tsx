import React, { ForwardedRef, MouseEventHandler, forwardRef } from 'react';
import { MdClose } from 'react-icons/md';
import Menu from './Menu';
import Button from '../shared/Button';

interface SideBarProps {
	toggleMenu: MouseEventHandler;
	isMenuOpen: boolean;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
	({ toggleMenu, isMenuOpen }, ref: ForwardedRef<HTMLDivElement>) => {
		return (
			<div
				className={`${isMenuOpen ? 'fixed' : 'hidden'} w-fit ml-auto min-h-screen z-[9999] shadow-2xl top-0 right-0 bg-white pt-10`}
				ref={ref}
			>
				<Button
					className='absolute top-0 right-2'
					startIcon={<MdClose size={24} onClick={toggleMenu} />}
				/>
				<Menu />
				<Button
					className='btn-primary py-1.5 font-medium rounded-none w-full mb-2'
					label='Upload'
				/>
				<Button
					className='btn-outline py-2 font-bold w-full rounded-none'
					label={<p><span className='mr-1'>Connect</span><span>Wallet</span></p>}
				/>
			</div>
		);
	}
);

SideBar.displayName = 'SideBar';

export default SideBar;

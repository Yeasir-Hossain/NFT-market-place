'use client';

import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '../shared/Button';


export default function Search() {

	const handleSubmit = (e: any) => {
		e.preventDefault();

		// eslint-disable-next-line no-console
		console.log(e.target.search.value);
		// do necessary operations
	};

	return (
		<div className='py-1 lg:py-2 px-3 lg:px-4 rounded-full border-2 border-custom-stroke'>
			<form onSubmit={handleSubmit} className='flex justify-between items-center'>
				<input type="text" name='search' className="focus:outline-none focus:border-transparent font-dm w-full" placeholder='Search' />
				<Button type='submit' className='rounded-none' endIcon={<CiSearch size={28} color='#757575' />} />
			</form>
		</div>
	);
}

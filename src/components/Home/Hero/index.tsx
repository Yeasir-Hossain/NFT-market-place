import React from 'react';
import Button from '../../shared/Button';
import Image from 'next/image';
import NFTCard from './HeroCard';
import { NFTItem } from '@/config/types';
import { dm, integral } from '@/config/fonts';


export default function Hero() {
	const NTFHolders: NFTItem[] = [
		{
			name: 'Abstr Gradient NFT',
			image: '/unsplash_tZCrFpSNiIQ.png',
			user: 'Arkhan17',
			avatar: '/avatar.png',
			current: '0.25',
			ends: '12h  43m  42s'
		},
		{
			name: 'Abstr Gradient NFT',
			image: '/unsplash_pVoEPpLw818.png',
			user: 'Arkhan17',
			avatar: '/avatar.png',
			current: '0.25',
			ends: '12h  43m  42s'
		},
		{
			name: 'Abstr Gradient NFT',
			image: '/unsplash_E8Ufcyxz514.png',
			user: 'Arkhan17',
			avatar: '/avatar.png',
			current: '0.25',
			ends: '12h  43m  42s'
		},
	];
	return (
		<div className='container flex flex-col lg:flex-row justify-between items-center my-16 gap-5'>
			<div data-aos="fade-right" data-aos-duration="500" className='flex flex-col justify-between items-center lg:items-start gap-5 lg:w-1/2'>
				<h1 className={`text-[30px] lg:text-[40px] font-bold ${integral.className}`}>Discover, and collect Digital Art  NFTs </h1>
				<p className={' text-light-text text-xl text-center lg:text-left'}>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
				<Button label='Explore Now' className='btn-primary px-6 lg:px-8 py-2.5 lg:py-3 font-medium' />
				<div className='flex justify-start items-center gap-4 leading-none'>
					<div>
						<p className={`text-[30px] lg:text-[40px] font-bold ${integral.className}`}>98K<span className={dm.className}>+</span></p>
						<p className='text-light-text m-0 p-0'>Artwork</p>
					</div>
					<div>
						<p className={`text-[30px] lg:text-[40px] font-bold ${integral.className}`}>12K<span className={dm.className}>+</span></p>
						<p className='text-light-text'>Auction</p>
					</div>
					<div>
						<p className={`text-[30px] lg:text-[40px] font-bold ${integral.className}`}>15K<span className={dm.className}>+</span></p>
						<p className='text-light-text'>Artist</p>
					</div>
				</div>
			</div>
			<div className='lg:w-1/2 flex justify-center items-center'>
				<div className={'relative'}>
					<div data-aos='fade-left' className='hidden lg:block absolute bottom-[95px] left-[-150px] z-[999]'>
						<Image src={'/live.png'} alt='' height={101} width={101} className='animate-spin-slow z-[1000]' />
					</div>
					<div className={'flex -space-x-[300px] md:-space-x-[450px]'}>
						{
							NTFHolders.map((holder: NFTItem, index) => <NFTCard key={index} data={holder} index={index} />)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

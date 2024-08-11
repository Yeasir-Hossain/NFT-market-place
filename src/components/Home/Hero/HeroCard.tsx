import { NFTItem } from '@/config/types';
import Image from 'next/image';
import React from 'react';
import { RiEthFill } from 'react-icons/ri';

export default function NFTCard({ data, index }: { data: NFTItem, index: number }) {
	const { image, name, avatar, user, current, ends } = data;
	return (
		<div style={{
			backgroundImage: `url(${image})`,
			scale: Math.max(0.5, 1 - (3 - 1 - index) * 0.15)
		}}
			data-aos="fade-left"
			data-aos-duration={700 * index + 1}
			data-aos-delay={150 * index}
			// data-aos-offset={500 * index + 1}
			className={'relative w-[300px] h-[300px] md:w-[400px] md:h-[440px] overflow-hidden rounded-3xl z-40 bg-cover bg-center bg-no-repeats'}>
			<div className='text-white py-8 px-7 flex flex-col justify-between h-full relative '>
				<div>
					<h3 className='font-bold text-[28px]'>{name}</h3>
					<div className='flex justify-start items-center gap-4'>
						<Image src={avatar} height={32} width={32} className='rounded-full w-8 h-8' alt='NFT' />
						<p className='font-bold'>{user}</p>
					</div>
				</div>
				<div style={{
					boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
					backdropFilter: 'blur(19px)',
					WebkitBackdropFilter: 'blur(16px)',
				}} className='flex justify-between items-center rounded-xl p-3'>
					<div>
						<p className='font-medium text-xs mb-2'>Current Bid</p>
						<div className='flex gap-2 -ml-1.5'>
							<RiEthFill size={22} />
							<p className='font-bold'>
								{current} ETH
							</p>
						</div>
					</div>
					<div>
						<p className='font-medium text-xs mb-2'>Ends in</p>
						<p className='font-bold'>
							{ends}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

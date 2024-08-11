import { integral } from '@/config/fonts';
import Image from 'next/image';
import React from 'react';

export default function Service() {
	return (
		<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='bg-[#D9E0EC] py-8'>
			<div className='container flex flex-col lg:flex-row justify-between items-center gap-4 my-32'>
				<h1 className={`font-bold text-[28px] max-w-[400px] ${integral.className}`}>The amazing NFT art of the world here</h1>
				<div className='flex justify-center gap-3 items-start max-w-[300px]'>
					<Image src={'/card_tick.png'} alt='' height={36} width={36} className='w-9 h-9' />
					<div>
						<p className='font-bold text-xl'>Fast Transaction</p>
						<p className='text-custom-slate text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
					</div>
				</div>
				<div className='flex justify-center gap-3 items-start max-w-[300px]'>
					<Image src={'/chart.png'} alt='' height={36} width={36} className='w-9 h-9' />
					<div>
						<p className='font-bold text-xl'>Growth Transaction</p>
						<p className='text-custom-slate text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
					</div>
				</div>
			</div>
		</div>
	);
}

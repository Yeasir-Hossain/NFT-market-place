import { integral } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../shared/Button';

export default function Footer() {
	return (
		<footer className="container">
			<div className=" py-20">
				<div className="mt-4 block font-medium">
					<div className="mt-4 block font-medium">
						<div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
							<div className="mt-4 block font-medium">
								<Link className="w-[60px]" href={'/'}>
									<h1 className={`font-bold text-xl lg:text-2xl ${integral.className} mb-4`}>
										NFters
									</h1>
								</Link>
								<p className="text-sm text-light-text">The world&apos;s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
								<div className="flex justify-start items-center gap-2">
									<Link className="mt-4 w-fit font-medium text-sm" href={'/'}>
										<Image src={'/facebook.png'} alt='' width={36} height={36} />
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href={'/'}>
										<Image src={'/facebook.png'} alt='' width={36} height={36} />
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href={'/'}>
										<Image src={'/facebook.png'} alt='' width={36} height={36} />
									</Link>
								</div>
							</div>
							<div className="mt-4  font-medium">
								<p className="block text-lg font-bold">Market Place</p>
								<div className="MuiStack-root css-yd8sa2 flex flex-col">
									<Link className="mt-4 w-fit font-medium text-sm" href="#">
										All NFTs
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href="#">
										New
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href="#">
										Art
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href="#">
										Sports
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href="#">
										Utility
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href="#">
										Music
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href="#">
										Domain Name
									</Link>
								</div>
							</div>
							<div className="mt-4 font-medium">
								<p className="block text-lg font-bold">My Account</p>
								<div className="MuiStack-root css-yd8sa2 flex flex-col">
									<Link className="mt-4 w-fit font-medium text-sm" href={'/'} target="_blank">
										Profile
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href={'/'} target="_blank">
										Favorite
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href={'/'}>
										My Collections
									</Link>
									<Link className="mt-4 w-fit font-medium text-sm" href={'/'}>
										Settings
									</Link>
								</div>
							</div>
							<div className="mt-4 flex flex-col font-medium gap-3">
								<p className="block text-lg font-bold">Stay in the loop</p>
								<p className="mt-4 w-fit font-medium text-sm">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
								<div>
									<div
										className="flex items-center justify-center rounded-full px-3 py-1 border-2 border-custom-stroke"
										style={{ width: '100%' }}
									>
										<input
											placeholder="Email Address"
											className=" focus:border-none focus:shadow-none focus:outline-none w-full "
											type="email"
											style={{
												boxShadow: '0 0 #0000',
											}}
										/>
										<Button className='text-nowrap px-7 py-4 btn-primary' label='Subscibe Now' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-2" />
			<p className="my-3 text-center text-light-text">© Copyright {new Date().getFullYear()} Avi Yansah</p>
		</footer>
	);
}

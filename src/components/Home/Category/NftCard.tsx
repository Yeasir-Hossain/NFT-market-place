import React from 'react';
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';
import { NFT } from '@/config/types';

export default function NftCard({ nft }: { nft: NFT }) {
  return (
    <div data-aos="fade-up" className='h-auto rounded-xl p-3 shadow-md lg:max-w-[245px] bg-white'>
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col space-y-6'>
          <div className='relative z-20 '>
            <div className='flex w-full flex-col items-center overflow-hidden rounded-xl'>
              <Image src={nft.nft} alt={nft.name} width={245} height={220} className='w-full transition-all duration-500 hover:scale-105' />
              <div className='absolute bottom-[-15px] left-3 z-30 flex -space-x-2 overflow-hidden'>
                {nft.users.map((user, i) => (
                  <div key={i} className='relative flex h-8 w-8 items-center overflow-hidden rounded-full border-2 border-white'>
                    <Image src={user.avatar} alt='' fill={true} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold'>{nft.name}</h3>
            <div className='flex items-center justify-between'>
              <div className='my-4 flex items-center justify-center gap-1 text-xs font-bold text-secondary'>
                <FaEthereum />
                <span>{nft.price}</span>
                <span>ETH</span>
              </div>
              <p className='font-medium text-slate-400'>{nft.outOf}</p>
            </div>
          </div>
        </div>
        <div className='mb-3 h-2 border-b border-slate-200'></div>
        <div className='flex items-center justify-between'>
          <div className='rounded-full bg-gray-200 px-2 py-1 text-primary'>
            <p className='text-[10px] font-medium'>{nft.timeLeft}</p>
          </div>
          <button className='text-primary hover-underline-animation font-medium'>Place a bid</button>
        </div>
      </div>
    </div>
  );
}

import Button from '@/components/shared/Button';
import Image from 'next/image';
import React from 'react';
import { FaEthereum } from 'react-icons/fa';

export default function SideImageCard() {
  return (
    <div data-aos='fade-up' className='flex items-center justify-between gap-4 lg:justify-center'>
      <div>
        <Image src={'/nft.png'} alt='' width={147} height={147} />
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-lg font-bold xl:text-xl'>The Futr Abstr</p>
        <div className='flex gap-2'>
          <div className='relative flex h-8 w-8 items-center'>
            <Image src={'/avatar.png'} alt='' fill={true} />
          </div>
          <div className='flex items-center justify-center gap-1 rounded-md border-2 border-secondary p-1 xl:p-2'>
            <FaEthereum className='text-base xl:text-2xl' />
            <p className='space-x-1 text-xs xl:text-base'>
              <span>0.25</span>
              <span>ETH</span>
            </p>
          </div>
          <p className='flex items-center text-xs xl:text-base'>
            <span className='mr-1'>1</span>of<span className='ml-1'>8</span>
          </p>
        </div>
        <div>
          <Button label='Place a bid' className='btn-outline px-5 py-2' />
        </div>
      </div>
    </div>
  );
}

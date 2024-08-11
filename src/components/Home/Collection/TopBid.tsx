import Image from 'next/image';
import React from 'react';
import { FaEthereum } from 'react-icons/fa';

export default function TopBid() {
  return (
    <div data-aos='fade-right' className='flex flex-col justify-center gap-10'>
      <div>
        <Image src={'/nft.png'} alt='' width={400} height={424} />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <div className='flex items-center overflow-hidden rounded-full'>
            <Image src={'/avatar.png'} alt='' width={48} height={48} className='h-12 w-12' />
          </div>
          <div>
            <p className='text-xl font-bold'>The Futr Abstr</p>
            <p className='text-sm'>10 in the stock</p>
          </div>
        </div>
        <div>
          <button className='px-5 py-3'>Place a bid</button>
        </div>
      </div>
    </div>
  );
}

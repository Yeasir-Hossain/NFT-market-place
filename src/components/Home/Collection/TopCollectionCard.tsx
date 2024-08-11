import React from 'react';
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';
import { Collection } from '@/config/types';

export default function TopCollectionCard({ data, index, totalLength }: { data: Collection; index: number; totalLength: number }) {
  return (
    <div
      data-aos='fade-up'
      className={`flex items-center justify-between gap-4 ${index === totalLength - 1 ? 'border-none' : 'border-b'} border-slate-200 py-3`}
    >
      <h3 className='text-lg font-bold lg:text-2xl'>{index + 1}</h3>
      <div className='relative flex h-[60px] w-[60px] items-center'>
        {data.verified && <Image src={'/verified.png'} alt='' width={26} height={26} className='absolute -right-1 -top-0 z-[80]' />}
        <Image src={'/collection_avatar.png'} alt='' fill={true} className='overflow-hidden rounded-full' />
      </div>
      <div>
        <p className='font-medium'>{data.name}</p>
        <p className='flex'>
          <FaEthereum size={20} />
          <span className='text-sm font-semibold'>{data.marketCap}</span>
        </p>
      </div>
      <p className={`align-middle text-xl font-semibold ${!data.raise ? 'text-danger' : 'text-teal-500'}`}>{data.rate}</p>
    </div>
  );
}

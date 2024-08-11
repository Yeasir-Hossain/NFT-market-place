import React from 'react';
import Filter from './Filter';
import NftCard from './NftCard';
import Button from '@/components/shared/Button';
import { NFTs } from '@/config/data';
import Heading from '@/components/shared/Heading';

export default function Category() {
  return (
    <div className='w-full py-20 bg-[#D9E0EC]'>
      <div className='container'>
        <Heading title='Discover more NFTs' />
        <Filter />
        <div className='my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {NFTs.map((nft, i) => (
            <NftCard key={i} nft={nft} />
          ))}
        </div>
        <div className='flex w-full items-center justify-center'>
          <Button label='More NFTs' className='btn-outline px-10 py-5' />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import FeaturedCard from './FeaturedCard';
import Heading from '@/components/shared/Heading';

export default function Featured() {
  return (
    <div className='w-full bg-[#D9E0EC] py-10'>
      <div className='container py-16'>
        <Heading title='Collection Featured NFTs' />
        <div className='flex flex-col justify-between gap-5 md:flex-row'>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </div>
  );
}

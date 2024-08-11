import React from 'react';
import TopBid from './TopBid';
import SideImageCard from './SideImageCard';
import TopCollection from './TopCollection';

export default function Collection() {
  return (
    <div className='container flex flex-col gap-3 lg:gap-6 md:flex-row my-32 justify-between'>
      <div className='flex flex-col gap-4 lg:gap-8 sm:flex-row  md:flex-col lg:flex-row'>
        <TopBid />
        <div className='grid grid-rows-3 gap-4 lg:gap-8'>
          <SideImageCard />
          <SideImageCard />
          <SideImageCard />
        </div>
      </div>
      <div className='hidden md:block bg-[#ECECEC] w-[1px]'></div>
      <TopCollection />
    </div>
  );
}

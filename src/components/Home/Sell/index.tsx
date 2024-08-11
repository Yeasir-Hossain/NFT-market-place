import React from 'react';
import ImageCard from './ImageCard';
import Button from '@/components/shared/Button';

export default function Sell() {
  return (
    <div data-aos='fade-up' className='container my-32 flex flex-col items-center justify-center gap-10 lg:flex-row'>
      <div className='relative grid grid-cols-1 gap-5 md:w-1/2 md:grid-cols-2 xl:grid-rows-2'>
        <ImageCard />
        <ImageCard className='xl:top-[180px] xl:scale-[0.8]' />
        <ImageCard className='xl:left-[40px] xl:scale-[0.7]' />
      </div>
      <div className='flex flex-col gap-5 space-y-7 md:w-1/2'>
        <h1 className='text-[32px] font-bold leading-10'>Create and sell your NFTs</h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et
          tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus
          faucibus.
        </p>
        <Button label='Sign Up Now' className='btn-primary px-6 lg:px-8 py-2.5 lg:py-3 font-medium w-fit' />
      </div>
    </div>
  );
}

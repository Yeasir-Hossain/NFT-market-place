import Button from '@/components/shared/Button';
import Image from 'next/image';
import React from 'react';

export default function FeaturedCard() {
  return (
    <div className='flex flex-col justify-between gap-6'>
      <div className='grid w-full grid-cols-5  gap-2 '>
        <div data-aos='fade-right' className='col-span-4 flex w-full items-center overflow-hidden rounded-xl'>
          <Image src={'/nft.png'} alt='' width={265} height={272} className='w-full transition-all duration-500 hover:scale-105' />
        </div>
        <div data-aos='fade-left' className=' grid w-full grid-rows-3 gap-4'>
          <div className='flex items-center overflow-hidden rounded-xl'>
            <Image src={'/nft2.png'} alt='' width={103} height={85} className='h-full w-full' />
          </div>
          <div className='flex items-center overflow-hidden rounded-xl'>
            <Image src={'/nft2.png'} alt='' width={103} height={85} className='h-full w-full' />
          </div>
          <div className='flex items-center overflow-hidden rounded-xl'>
            <Image src={'/nft2.png'} alt='' width={103} height={85} className='h-full w-full' />
          </div>
        </div>
      </div>
      <div data-aos='fade-up'>
        <h3 className='text-xl font-bold'>Amazing Collection</h3>
        <div className='mt-4 flex items-center justify-between'>
          <div className=' flex items-center justify-center gap-2'>
            <div className='flex items-center overflow-hidden rounded-full'>
              <Image src={'/avatar.png'} alt='' width={28} height={28} className='h-7 w-7' />
            </div>
            <p className='text-sm font-medium'>by Arkhan</p>
          </div>
          <div className='h-fit '>
            <Button label='Total 54 items' className='px-3 py-1 btn-outline' />
          </div>
        </div>
      </div>
    </div>
  );
}

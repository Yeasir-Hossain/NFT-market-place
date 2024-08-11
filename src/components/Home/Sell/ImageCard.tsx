import Image from 'next/image';
import React from 'react';

export default function ImageCard({ className = '' }) {
  return (
    <div className={`${className} relative rounded-xl`}>
      <Image src={'/nft.png'} alt='' width={300} height={300} className='h-full w-full' />
      <div className='-bottom-[20px] -right-[32px] hidden items-center overflow-hidden rounded-full border-4 border-white lg:absolute lg:flex '>
        <Image src={'/avatar.png'} alt='' width={70} height={70} className='h-10 w-10 xl:h-[70px] xl:w-[70px]' />
      </div>
    </div>
  );
}

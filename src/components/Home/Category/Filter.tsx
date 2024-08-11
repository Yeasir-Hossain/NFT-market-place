'use client';

import Button from '@/components/shared/Button';
import React, { useState } from 'react';
import { IoFilter } from 'react-icons/io5';

export default function Filter() {
  const filters = ['All Categories', 'Art', 'Celebrities', 'Gaming', 'Sport', 'Music', 'Crypto'];
  const [selectedFilter, setSelectedFilter] = useState<string>('All Categories');

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className='flex items-center justify-between gap-3'>
      <div className='flex flex-1 gap-3 overflow-scroll hide-scrollbar'>
        {filters.map((filter, i) => (
          <Button
            key={i}
            label={filter}
            className={`text-nowrap px-4 py-2 text-sm bg-[#DCDCDC] text-black font-medium hover:text-white hover:bg-primary transition-all duration-500 ${selectedFilter === filter && 'bg-primary text-white'}`}
            onClick={() => handleFilterClick(filter)}
          />
        ))}
      </div>
      <Button className='flex gap-2 justify-center items-center px-4 py-2 bg-[#DCDCDC] text-primary font-medium hover:text-white hover:bg-primary transition-all duration-500' startIcon={<IoFilter size={20} />} label='All Filters' />
    </div >
  );
}

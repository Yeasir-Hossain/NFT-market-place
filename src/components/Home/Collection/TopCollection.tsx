import React from 'react';
import TopCollectionCard from './TopCollectionCard';

export default function TopCollection() {
  const data = [
    {
      name: 'CryptoFunks',
      avatar: '/collection_avatar.png',
      marketCap: '19,769.39',
      rate: '+26.52%',
      raise: true,
      verified: true,
    },
    {
      name: 'CryptoFunks',
      avatar: '/collection_avatar.png',
      marketCap: '19,769.39',
      rate: '-10.56%',
      raise: false,
      verified: false,
    },
    {
      name: 'CryptoFunks',
      avatar: '/collection_avatar.png',
      marketCap: '19,769.39',
      rate: '+30.41%',
      raise: true,
      verified: true,
    },
    {
      name: 'CryptoFunks',
      avatar: '/collection_avatar.png',
      marketCap: '19,769.39',
      rate: '-27.52%',
      raise: false,
      verified: false,
    },
    {
      name: 'CryptoFunks',
      avatar: '/collection_avatar.png',
      marketCap: '19,769.39',
      rate: '+15.52%',
      verified: true,
      raise: true,
    },
  ];
  return (
    <div>
      <h1 data-aos='fade-up' className='text-xl font-bold'>Top Collections over</h1>
      <p data-aos='fade-down' className='text-lg font-bold text-primary'>Last 7 days</p>
      <div className='mt-10'>
        {data.map((d, i) => (
          <TopCollectionCard key={i} data={d} index={i} totalLength={data.length} />
        ))}
      </div>
    </div>
  );
}

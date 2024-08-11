import Category from '@/components/Home/Category';
import Collection from '@/components/Home/Collection';
import Featured from '@/components/Home/Featured';
import Hero from '@/components/Home/Hero';
import Service from '@/components/Home/Service';
import Sell from '@/components/Home/Sell';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <Service />
      <Collection />
      <Featured />
      <Sell />
      <Category />
    </main>
  );
}

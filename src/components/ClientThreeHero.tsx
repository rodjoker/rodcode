'use client';

import dynamic from 'next/dynamic';

const ThreeHero = dynamic(() => import('./ThreeHero'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-white text-opacity-50">Loading 3D Scene...</div>
    </div>
  )
});

export default function ClientThreeHero() {
  return <ThreeHero />;
}
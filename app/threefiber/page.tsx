// 'use client';
// import { useRef, Suspense } from 'react';
// import { useThree, useFrame, Canvas } from '@react-three/fiber';
// import { useScroll, Image, ScrollControls, Scroll } from '@react-three/drei';
// import { group } from 'console';
import { Hero } from '../_components/Three-fiber/Hero';
import { Message } from '../_components/Message';

// };

const Page = () => {
  return (
    <div className=" bg-slate-100">
      <Hero />
      <Message />
    </div>
  );
};
export default Page;

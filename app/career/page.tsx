'use client';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useState, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default async function Page() {
  const imageRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        width: '25vw',
        height: '25vw',
        borderRadius: '50% 50% 50% 50%',
      },
      {
        width: '100%',
        height: '100vh',
        borderRadius: '0%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center center',
          scrub: true,
          pin: true,
        },
      },
    );
  }, []);
  return (
    <div className="bg-green-main font-hiragino">
      <div ref={containerRef} className="relative pt-40 h-[500px] text-center font-bold">
        <h2 className="absolute font-oswald text-green-500 opacity-20 left-[-150px] text-end rotate-90 text-[288px]">
          CAREER
        </h2>
        <h1 className="text-[48px]">キャリア形成・研修制度</h1>
        <div ref={imageRef}>
          <Image src="/top/business-1.jpg" width={500} height={500} alt="キャリア形成・研修制度" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

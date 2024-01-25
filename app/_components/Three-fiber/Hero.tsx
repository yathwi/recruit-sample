'use client';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { useThree, useFrame, Canvas } from '@react-three/fiber';
import { useScroll, ScrollControls, Scroll } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = (props) => {
  const number = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeLine = gsap.timeline();

    timeLine
      .fromTo('.box-green', { width: '50px', duration: 2 }, { width: '900px' }, 'move')
      .to('.h1', { opacity: 1, duration: 0.2 }, 'move+=0.4')
      .to('.box-green', { width: '0px', x: '900px' }, 'move+=1');
  }, []);

  useEffect(() => {
    gsap.to('#h1', {
      scrollTrigger: {
        trigger: '#header',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      yPercent: 30,
      scale: 3,
      opacity: 0,
    });
    // Section 1 H2
    gsap.to('#image', {
      scrollTrigger: {
        trigger: '#image',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },

      opacity: 0,
    });
    gsap.to('#image2', {
      scrollTrigger: {
        trigger: '#image2',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },

      opacity: 0,
    });
    // Custom trigger
    ScrollTrigger.create({
      trigger: '#h3',
      start: 'top bottom+=-200px', // 200px after the top passes the bottom of the viewport
      endTrigger: '#section2',
      end: 'bottom top',
      onUpdate: (self) => {
        const progress = Math.max(2, Math.ceil(self.progress * 100)); //No lower than 2.
        if (number.current) {
          number.current.innerHTML = progress.toString();
        }
        // console.log(
        //   "progress:",
        //   self.progress.toFixed(3),
        //   "direction:",
        //   self.direction,
        //   "velocity",
        //   self.getVelocity()
        // );
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="header" className=" relative  lg:h-[1200px] h-[500px] lg:pt-72  pt-52 ">
      <Image
        id="image2"
        src="/add/news1.jpg"
        alt="太光設備株式会社"
        fill
        className=" object-cover"
      />
      <Image
        id="image"
        src="/add/noisy-gradients.jpg"
        alt="太光設備株式会社"
        fill
        className=" object-cover"
      />
      <div className=" relative text-left">
        <div className=" h1 opacity-0 absolute ml-40 text-white z-10">
          <h1 id="h1" className=" px-2 lg:text-[110px] text-2xl   leading-tight font-bold">
            Driving the World
            <br />
            with Technology.
          </h1>
        </div>
        <div className="  text-white z-10 mt-12 ">
          <div className="box-green h-[130px] w-0 ml-40 bg-white flex justify-center"></div>{' '}
          <div className="box-green h-[130px] mt-8 w-0 ml-40 bg-white flex justify-center"></div>
        </div>{' '}
      </div>
      {/* <div className="w-full absolute z-10 h-screen p-8 flex">
        <div className="box-red w-12 h-12 bg-red-500 text-white">エンジニア募集中</div>
        <div className="box-blue w-12 h-12 bg-blue-500"></div>
        <div className="box-green w-12 h-12 bg-green-500"></div>
        <div className="box-yellow w-12 h-12 bg-yellow-500"></div>
      </div> */}
    </div>
  );
};

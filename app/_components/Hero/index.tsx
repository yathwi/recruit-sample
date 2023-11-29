'use client';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = (props) => {
  const number = useRef<HTMLDivElement>(null);

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
    gsap.from('#h2', {
      scrollTrigger: {
        trigger: '#h2',
        start: 'top bottom',
        end: 'top 400px',
        // start: "top",
        // end: 'bottom',
        scrub: 1,
        // toggleActions: "play complete none reset"
      },
      xPercent: -100,
      opacity: 0,
    });
    // Execution heading
    gsap.from('#h3', {
      scrollTrigger: {
        trigger: '#h3',
        start: 'top bottom+=100px',
        // scrub: true
        toggleActions: 'play complete none reset',
      },
      xPercent: 100,
      opacity: 0.5,
      duration: 1,
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
    <div
      id="header"
      className=" flex relative  lg:h-[800px] h-[500px] lg:pt-72  pt-40 justify-center"
    >
      <Image src="/add/noisy-gradients.jpg" alt="太光設備株式会社" fill className=" object-cover" />
      <div className=" absolute text-white z-10">
        <h1 id="h1" className=" px-2 lg:text-[110px] text-2xl leading-tight font-cinzel">
          Driving the World
          <br />
          with Technology.
        </h1>
      </div>
    </div>
  );
};

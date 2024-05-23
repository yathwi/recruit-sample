'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Cta } from '../_components/Cta';
import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import { ProgressBar } from '../_components/ui/ProgessBar';

gsap.registerPlugin(ScrollTrigger);

export const revalidate = 60;

const cinzel = [
  {
    jobTitle: '土木施工管理',
    jobDescription:
      '発注者から受注した工事を計画・設計・予算・期日通りに、無事故無災害で完成へと導く「司令塔」。様々な状況下での臨機応変な対応と、現場をまとめるマネジメント力が求められる仕事です。',
    src: '/top/business-1.jpg',
  },
  {
    jobTitle: '建築施工管理',
    jobDescription:
      '建物の設計図をもとに、工事の進行管理を行う「司令塔」。現場の状況を把握し、工程通りに工事を進めるためには、的確な判断力と、現場をまとめるマネジメント力が求められます。',
    src: '/top/business-1.jpg',
  },
  {
    jobTitle: '設計',
    jobDescription:
      '建築や土木工事の設計図を作成する「設計士」。お客様の要望を形にするために、的確な提案力と、設計図を読み解く能力が求められます。',
    src: '/top/business-1.jpg',
  },
];
const navItems = [
  {
    jobTitle: '土木施工管理',
    jobDescription:
      '発注者から受注した工事を計画・設計・予算・期日通りに、無事故無災害で完成へと導く「司令塔」。様々な状況下での臨機応変な対応と、現場をまとめるマネジメント力が求められる仕事です。',
    src: '/top/business-1.jpg',
  },
  {
    jobTitle: '建築施工管理',
    jobDescription:
      '建物の設計図をもとに、工事の進行管理を行う「司令塔」。現場の状況を把握し、工程通りに工事を進めるためには、的確な判断力と、現場をまとめるマネジメント力が求められます。',
    src: '/top/business-1.jpg',
  },
  {
    jobTitle: '設計',
    jobDescription:
      '建築や土木工事の設計図を作成する「設計士」。お客様の要望を形にするために、的確な提案力と、設計図を読み解く能力が求められます。',
    src: '/top/business-1.jpg',
  },
  {
    jobTitle: '積算',
    jobDescription:
      '工事の費用を見積もる「積算士」。正確な見積もりを行うためには、建築や土木工事の知識と、的確な判断力が求められます。',
    src: '/top/business-1.jpg',
  },
];

export default async function Page() {
  const containerRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);
  const progressRef = useRef<any>(null);

  useEffect(() => {
    // ウィンドウのリサイズ時にも正確に機能させるために、関数内で設定を行います。
    const setupScrollTrigger = () => {
      // ScrollTriggerの設定前に既存のインスタンスをクリーンアップ
      const windowHeight = window.innerHeight;
      containerRef.current.style.height = `${windowHeight}px`;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const totalScrollWidth = scrollRef.current.scrollWidth; // 横スクロールの総距離
      containerRef.current.style.height = `${totalScrollWidth}px`;

      progressRef.current.style.paddingLeft = totalScrollWidth;

      // コンテナのピン留め設定
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalScrollWidth}`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
        scrub: true,
      });

      // 横スクロールアニメーション設定
      gsap.to(scrollRef.current.children, {
        x: () => -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalScrollWidth}`,
          scrub: true,
        },
      });
    };

    // 初期設定とウィンドウのリサイズ時の設定更新
    setupScrollTrigger();
    window.addEventListener('resize', setupScrollTrigger);

    return () => {
      window.removeEventListener('resize', setupScrollTrigger);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-green-main font-hiragino">
      <PageHeaderTextBlack />
      <div>
        <div className="relative pt-40 h-[500px] text-center font-bold">
          <h2 className="absolute font-oswald text-green-500 opacity-20 left-[-150px] text-end rotate-90 text-[288px]">
            JOBS
          </h2>
          <h1 className="text-[48px] pt-20 font-bold">仕事紹介</h1>
        </div>
        <div ref={containerRef} className={`overflow-x-hidden h-screen pt-20 w-full `}>
          <div ref={progressRef} className=" w-[40%] mx-auto h-2 bg-gray-200">
            <div className="h-full bg-blue-500 transition-all duration-100"></div>
          </div>
          <div className=" text-white bg-[#636363]">
            <div className=" flex justify-between px-[30%] py-2 font-bold">
              <p>土木</p>
              <p>建築</p>
              <p>機電</p>
              <p>事務</p>
            </div>
          </div>
          <div className="flex pt-20 bg-[#F7F7F7]" ref={scrollRef}>
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[732px] w-full flex items-center justify-center pl-8 pr-8"
              >
                <div className="flex items-center max-w-7xl">
                  <Image
                    src={item.src}
                    width={400}
                    height={400}
                    alt={item.jobTitle}
                    className="mr-8"
                  />
                  <div>
                    <h3 className="text-[24px] mt-8">{item.jobTitle}</h3>
                    <p className="text-[16px] mt-4">{item.jobDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Cta /> */}
    </div>
  );
}

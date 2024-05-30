'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Cta } from '../_components/Cta';
import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import { ProgressBar } from '../_components/ui/ProgessBar';
import { ScrollSmoother } from 'gsap-trial/dist/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const revalidate = 60;

const cinzel = [
  {
    jobTitle: '土木施工管理',
    jobDescription:
      '発注者から受注した工事を計画・設計・予算・期日通りに、無事故無災害で完成へと導く「司令塔」。様々な状況下での臨機応変な対応と、現場をまとめるマネジメント力が求められる仕事です。',
    src: '/top/jobs/job-1.jpg',
  },
  {
    jobTitle: '品質管理・試験業務',
    jobDescription:
      'より良い道路をつくるため、アスファルト合材の材料選定、配合設計、サンプル試験、舗装路面調査などを行い、舗装の品質を確認・検証・管理していきます。',
    src: '/top/jobs/job-2.jpg',
  },
  {
    jobTitle: '研究開発',
    jobDescription:
      '新しい舗装技術・材料の研究開発や改良を行う。品質・性能の試験や施工現場での技術的支援、社内外への技術研修など、「技を磨き、伝える」仕事です。',
    src: '/top/jobs/job-3.jpg',
  },
];
const navItems = [
  {
    jobTitle: '建築施工管理',
    jobDescription:
      '工場・流通、マンションからENEOS施設や米軍関連施設まで多様な案件について、建築工事の作業所における工程・出来形・安全・品質・原価等の管理業務を行います。',
    src: '/top/jobs/job-4.jpg',
  },
  {
    jobTitle: '意匠設計',
    jobDescription:
      'デザイン、プランニングの他、計画全体の総合的なとりまとめを行う設計の牽引役。関係法令の確認や行政協議に取り組みながら、BIM・CAD ソフトによるパース作成、図面作成も行います。お客様に満足していただけるよう、コストや施工性を考慮し積極的に提案することも大切な仕事。',
    src: '/top/jobs/job-5.jpg',
  },
  {
    jobTitle: '構造設計',
    jobDescription:
      '建築物の構造に関して耐久性、地震他災害に対する安全性を考慮の上、施工性に配慮した設計を行います。',
    src: '/top/jobs/job-6.jpg',
  },
  {
    jobTitle: '設備',
    jobDescription:
      '受注から工事完了まで携わる重要なポジション。建物の電気や空調、衛生、情報といった設備全般の「積算」「設計・工事管理」「施工管理」を行います。',
    src: '/top/jobs/job-7.jpg',
  },
];
const machine = [
  {
    jobTitle: '建設機械管理',
    jobDescription:
      '建設機械のオペレーティングだけでなく、管理・改良・開発などを通して、高品質で高機能な舗装の実現に寄与します。また、最新のセンサーやＩＣＴ技術を取り入れ、生産性向上を目指しています。',
    src: '/top/jobs/job-8.jpg',
  },
  {
    jobTitle: '舗装材料製造プラント管理',
    jobDescription:
      '舗装の材料であるアスファルト合材を作る工場で、機械の点検や修繕、製造および出荷などを行う職種。施工現場に製品を安定供給できるように管理しています。',
    src: '/top/jobs/job-9.jpg',
  },
];
const office = [
  {
    jobTitle: '総務事務',
    jobDescription:
      '総務・人事・経理など多岐にわたる業務で、事務所の運営をサポートするのが総務担当の役割。担当事業所の円滑な運営のため、確かな知識と判断力が求められます。',
    src: '/top/jobs/job-10.jpg',
  },
  {
    jobTitle: '営業',
    jobDescription:
      '官公庁や民間企業に対して、営業を行います。民間企業の自動車テストコースやサーキット場、工場や倉庫、店舗棟の構内道路や駐車場の舗装工事にあたって、社内の様々な部署と連携し、NIPPOならではの技術提案やプロジェクトを推進させていく役割を担います。',
    src: '/top/jobs/job-11.jpg',
  },
];

export default async function Page() {
  const containerRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);
  const progressRef = useRef<any>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1.5,
      effects: true,
    });

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
          <div className="flex flex-shrink-0 " ref={scrollRef}>
            <div className="h-[732px] bg-[#F7F7F7] ">
              <h2 className=" pt-20 ml-40 text-3xl font-bold">土木</h2>
              <div className=" h-[2px] bg-green-500 w-full mx-40 mb-10" />
              <div className=" ml-20 flex">
                {cinzel.map((item, index) => (
                  <div
                    key={index}
                    className=" w-[100vh] flex items-center justify-center pl-8 pr-8"
                  >
                    <div className="flex items-center max-w-7xl">
                      <Image
                        src={item.src}
                        width={410}
                        height={461}
                        alt={item.jobTitle}
                        className="mr-8"
                      />
                      <div>
                        <h3 className="text-[32px] font-bold mt-8">
                          <span className=" text-green-500">◼︎</span>
                          {item.jobTitle}
                        </h3>
                        <div className=" my-5 h-[2px] w-20 bg-green-500" />
                        <p className="text-[16px] mt-4 w-[340px]">{item.jobDescription}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full  flex">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="h-[732px] w-screen flex-shrink-0 bg-white flex items-center justify-center pl-8 pr-8"
                >
                  <div className="flex items-center max-w-7xl">
                    <Image
                      src={item.src}
                      width={410}
                      height={461}
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
            </div>{' '}
            <div className="  flex">
              {machine.map((item, index) => (
                <div
                  key={index}
                  className="h-[732px] w-screen flex-shrink-0 bg-[#F7F7F7] flex items-center justify-center pl-8 pr-8"
                >
                  <div className="flex items-center max-w-7xl">
                    <Image
                      src={item.src}
                      width={410}
                      height={461}
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
            </div>{' '}
            <div className="  flex">
              {office.map((item, index) => (
                <div
                  key={index}
                  className="h-[732px] w-screen flex-shrink-0 bg-white flex items-center justify-center pl-8 pr-8"
                >
                  <div className="flex items-center max-w-7xl">
                    <Image
                      src={item.src}
                      width={410}
                      height={461}
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
            {/* {navItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[732px] bg-white w-full flex items-center justify-center pl-8 pr-8"
              >
                <div className="flex items-center max-w-7xl">
                  <Image
                    src={item.src}
                    width={410}
                    height={461}
                    alt={item.jobTitle}
                    className="mr-8"
                  />
                  <div>
                    <h3 className="text-[24px] mt-8">{item.jobTitle}</h3>
                    <p className="text-[16px] mt-4">{item.jobDescription}</p>
                  </div>
                </div>
              </div>
            ))} */}
            {/* 
            {machine.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[732px] w-full bg-[#F7F7F7] flex items-center justify-center pl-8 pr-8"
              >
                <div className="flex items-center max-w-7xl">
                  <Image
                    src={item.src}
                    width={410}
                    height={461}
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
            {office.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[732px] bg-white w-full flex items-center justify-center pl-8 pr-8"
              >
                <div className="flex items-center max-w-7xl">
                  <Image
                    src={item.src}
                    width={410}
                    height={461}
                    alt={item.jobTitle}
                    className="mr-8"
                  />
                  <div>
                    <h3 className="text-[24px] mt-8">{item.jobTitle}</h3>
                    <p className="text-[16px] mt-4">{item.jobDescription}</p>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
}

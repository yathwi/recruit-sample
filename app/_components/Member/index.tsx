'use client';
import Image from 'next/image';
import { IoIosArrowDropright } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { Navigation } from 'swiper/modules';

import { EffectCards } from 'swiper/modules';
import Link from 'next/link';
import { useRef } from 'react';

const MemberList = [
  {
    name: 'Eriko Anzai',
    src: '/add/peaple1-4x.jpg',
  },
  {
    name: 'Akiyoshi Takahashi',
    src: '/add/peaple2-4x.jpg',
  },
  {
    name: 'Yuki Kato',
    src: '/add/peaple3-4x.jpg',
  },
  {
    name: 'Shogo Sato',
    src: '/add/peaple4-4x.jpg',
  },
  {
    name: 'Yuri Shimizu',
    src: '/add/peaple5-4x.jpg',
  },
];

export const Member: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative lg:my-40 mt-10 md:mt-20 ">
      <div className="bg-gray-100 mx-auto md:max-w-[80%] max-w-[95%] h-full absolute inset-y-0 left-0 right-0 z-0" />

      <motion.div
        variants={{
          offscreen: {
            y: 100,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 1,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
        className="relative z-10"
      >
        <div className="md:px-20 px-5 pt-10 pc:pt-20 pb-2 md:pb-10 ml-[10%]">
          <h2 className="pc:text-[70px] font-cinzel text-xl">{`Member's Voice`}</h2>
          <div className=" md:flex justify-between">
            <div className="flex items-center font-cinzel">
              <div className="w-10 border-t-2 border-gray-500 mr-3" />
              <p>社員インタビュー</p>
            </div>
            <div className=" flex items-center mr-[10%] hover:underline mt-5 md:mt-0 ml-5">
              一覧を見る <IoIosArrowDropright size={30} />
            </div>
          </div>
        </div>
        <div className="ml-[13%] pb-10 md:ml-[20%] hidden md:items-end md:flex">
          <div className=" mr-5">
            <div
              ref={prevRef}
              className="hover:bg-gray-300 border-2 p-3 border-gray-400 rounded-full"
            >
              <PiArrowLeftThin size={50} />
            </div>
            <div
              ref={nextRef}
              className="mt-3 hover:bg-gray-300 border-2 p-3 border-gray-400 rounded-full"
            >
              <PiArrowRightThin size={50} />
            </div>
          </div>
          <Swiper
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1.2}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              // スクリーンの幅が640ピクセル以下の場合
              640: {
                slidesPerView: 2.5, // モバイルではスライドを1つだけ表示
              },
              // それ以上の場合は2.5をデフォルト値として使用
            }}
            onSwiper={(swiper: any) => console.log(swiper)}
            className="  md:mt-10 "
          >
            {MemberList.map((member, index) => (
              <SwiperSlide key={index}>
                <Link href="/">
                  <div className=" h-auto w-[415px] bg-white border-2">
                    <Image src={member.src} alt={member.name} width={415} height={519} priority />
                    <p className="py-3 pl-3 font-cinzel text-left ">{member.name}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" mx-12 pb-10 md:hidden">
          <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="">
            {MemberList.map((member, index) => (
              <SwiperSlide key={index}>
                <Link href="/">
                  <div className=" w-fit">
                    <Image src={member.src} alt={member.name} width={415} height={519} priority />
                    <p className="py-3 pl-3 font-cinzel text-left bg-white">{member.name}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <Link href="/">
                <div className="  h-auto w-[415px] bg-white border-2">
                  <div className=" flex items-center mr-[10%] my-40 justify-center md:mt-0 ">
                    他のメンバーを見てみる <IoIosArrowDropright size={35} />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

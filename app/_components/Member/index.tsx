'use client';
import Image from 'next/image';
import { IoIosArrowDropright } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

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
  return (
    <div className="relative mt-20">
      {/* 背景 */}
      <div className="bg-gray-100 mx-auto lg:max-w-[80%] max-w-[95%] h-full absolute inset-y-0 left-0 right-0 z-0" />

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
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
        className="relative z-10"
      >
        <div className="lg:px-20 px-5 pt-10 pc:pt-20 pb-2 lg:pb-10 ml-[10%]">
          <h2 className="pc:text-[70px] font-cinzel text-xl">{`Member's Voice`}</h2>
          <div className=" lg:flex justify-between">
            <div className="flex items-center font-cinzel">
              <div className="w-10 border-t-2 border-gray-500 mr-3" />
              <p>社員インタビュー</p>
            </div>
            <div className=" flex items-center mr-[10%] mt-5 lg:mt-0 ml-5">
              一覧をを見る <IoIosArrowDropright size={35} />
            </div>
          </div>
        </div>
        <div className="ml-[13%] pb-10 lg:ml-[20%] hidden lg:block">
          <Swiper
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
            className="  lg:mt-10 "
          >
            {MemberList.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <Image src={member.src} alt={member.name} width={415} height={519} priority />
                  <p className="mt-5 font-cinzel text-left">{member.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" mx-12 pb-10 lg:hidden">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="  lg:mt-10 hidden lg:block"
          >
            {MemberList.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <Image src={member.src} alt={member.name} width={415} height={519} priority />
                  <p className="py-3 pl-3 font-cinzel text-left bg-white">{member.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

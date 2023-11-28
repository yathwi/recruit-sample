'use client';
import Image from 'next/image';
import { IoIosArrowDropright } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const MemberList = [
  {
    name: '安井海都',
    src: '/add/peaple1.jpg',
  },
  {
    name: '安井海都',
    src: '/add/peaple2.jpg',
  },
  {
    name: '安井海都',
    src: '/add/peaple3.jpg',
  },
];

export const Member: React.FC = () => {
  return (
    <div className="relative mt-20">
      {/* 背景 */}
      <div className="bg-gray-100 mx-auto max-w-[80%] h-full absolute inset-y-0 left-0 right-0 z-0" />

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
        <div className="lg:px-20 px-5 pt-10 pc:pt-20 pb-10 ml-[10%]">
          <h2 className="pc:text-[70px] text-xl">{`Member's Voice`}</h2>
          <div className=" lg:flex justify-between">
            <div className="flex items-center font-bold">
              <div className="w-10 border-t-2 border-gray-500 mr-3" />
              <p>社員インタビュー</p>
            </div>
            <div className=" flex items-center mr-[10%] mt-5 lg:mt-0 ml-5">
              一覧をを見る <IoIosArrowDropright size={35} />
            </div>
          </div>
        </div>
        <div className=" ml-[20%]">
          <Swiper
            spaceBetween={10}
            slidesPerView={2.5}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              // スクリーンの幅が640ピクセル以下の場合
              640: {
                slidesPerView: 1, // モバイルではスライドを1つだけ表示
              },
              // それ以上の場合は2.5をデフォルト値として使用
            }}
            onSwiper={(swiper: any) => console.log(swiper)}
            className="  lg:mt-10"
          >
            {MemberList.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <Image src={member.src} alt={member.name} width={415} height={519} priority />
                  <p className="mt-5 font-bold text-left">{member.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

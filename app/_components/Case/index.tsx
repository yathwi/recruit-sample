'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

const items = [
  {
    name: '土木',
    path: 'civil-engineering',
    image: '/top/case/case-1.jpg',
    category: 'インフラ',
    title: '新名神高速道路（兵庫県）',
  },
  {
    name: '建築',
    path: 'architecture',
    image: '/top/case/case-2.jpg',
    category: 'インフラ',
    title: '新千歳空港 滑走路（北海道）',
  },
  {
    name: '機電',
    path: 'environment',
    image: '/top/case/case-3.jpg',
    category: 'インフラ',
    title: '伊勢崎オートレース場（群馬県）',
  },
  {
    name: '事務',
    path: 'backoffice',
    image: '/top/case/case-4.jpg',
    category: 'インフラ',
    title: '皇居外苑（東京都）',
  },
  {
    name: '事務',
    path: 'backoffice',
    image: '/top/case/case-6.jpg',
    category: 'インフラ',
    title: '横浜国立大学（神奈川県）',
  },
  {
    name: '事務',
    path: 'backoffice',
    image: '/top/case/case-6.jpg',
    category: 'インフラ',
    title: '新名神高速道路（兵庫県）',
  },
  {
    name: '事務',
    path: 'backoffice',
    image: '/top/case/case-6.jpg',
    category: 'インフラ',
    title: '新名神高速道路（兵庫県）',
  },
];

export const Case: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <div className=" h-screen">
      <div className=" w-1/2 bg-[#34947A] h-[90%] text-white mt-20">
        <div className="ml-[12.5%]">
          <div className=" relative h-40 ">
            <h3 className=" absolute -ml-5 text-[96px] text-[#71B4A2] font-bold ">CASE</h3>
            <h2 className=" text-2xl absolute z-10 font-bold pt-20">{`私たちが作ってきた"道"`}</h2>
          </div>
          <p className=" mr-10">
            豊かな社会を実現するNIPPOの4つの事業領域
            私たちNIPPOは、アスファルト舗装工事を中心とする舗装・土木工事、および、アスファルト舗装の材料であるアスファルト合材の製造・販売を中核事業としています。
          </p>
        </div>
      </div>
      <div></div>
      <motion.div
        variants={{
          offscreen: { y: 20, opacity: 0 },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 },
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto  "
      >
        <div className="relative ml-[5%] -mt-[620px]">
          <div className=" flex gap-5 mb-10 mr-[5%] justify-end">
            <div
              className=" border-2 rounded-full font-bold text-center flex flex-col justify-center text-green-500 text-sm border-green-500 h-16 w-16 "
              ref={prevRef}
            >
              ＜
            </div>
            <div
              className=" border-2 font-bold rounded-full text-center flex flex-col justify-center text-green-500 text-sm border-green-500 h-16 w-16 "
              ref={nextRef}
            >
              ＞
            </div>{' '}
          </div>
          <Swiper
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4.5}
            spaceBetween={10}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              renderBullet: function (index: any, className: any) {
                return '<span class="' + className + '"></span>';
              },
              el: '.swiper-pagination',
            }}
            className="mySwiper "
            scrollbar={{ draggable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {items.map((item) => (
              <SwiperSlide key={item.path} className="drop-shadow-xl">
                <Link href={item.path} className=" hover:opacity-80">
                  <Image src={item.image} alt={item.name} width={337} height={366} />
                  <div className=" bg-white font-midium leading-tight h-20 py-3 px-3">
                    <p>{item.category}</p>
                    <p>{item.title}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
          <style jsx>{`
            :global(.swiper-pagination) {
              display: absolute;
              justify-content: center;
              bottom: 0;
              margin-top: 50px;
            }
            :global(.swiper-pagination-bullet) {
              width: 50px;
              height: 5px;
              border-radius: 0;
              background-color: #ccc;
              opacity: 1;
              margin: 0;
            }
            :global(.swiper-pagination-bullet-active) {
              background-color: green;
            }
          `}</style>
        </div>
      </motion.div>
    </div>
  );
};

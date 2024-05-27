'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useRef } from 'react';

const items = [
  { name: '土木', path: 'civil-engineering', image: '/top/business-1.jpg' },
  { name: '建築', path: 'architecture', image: '/top/business-2.jpg' },
  { name: '機電', path: 'environment', image: '/top/business-3.jpg' },
  { name: '機電', path: 'environment', image: '/top/business-3.jpg' },
  { name: '機電', path: 'environment', image: '/top/business-3.jpg' },
];

export const Member: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <div className="pt-20">
      <div className="max-w-[85%] mx-auto">
        <div className="relative h-40">
          <h3 className="absolute -ml-5 text-[96px] font-bold text-[#F4F4F4]">PEOPLE</h3>
          <h2 className="text-2xl absolute z-10 font-bold pt-20">社員紹介</h2>
        </div>
      </div>
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
        viewport={{ once: false, amount: 0.5 }}
        className="mx-auto lg:max-w-[65%] max-w-[95%] "
      >
        <div className="relative">
          <div className=" flex gap-5 mb-10 justify-end">
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
            slidesPerView={3}
            spaceBetween={30}
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
            className="mySwiper h-[400px]"
            scrollbar={{ draggable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {items.map((item) => (
              <SwiperSlide key={item.path}>
                <Link href={item.path} className=" hover:opacity-80">
                  <Image src={item.image} alt={item.name} width={337} height={366} />
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

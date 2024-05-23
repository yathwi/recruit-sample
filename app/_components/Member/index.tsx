'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const items = [
  { name: '土木', path: 'civil-engineering', image: '/top/business-1.jpg' },
  { name: '建築', path: 'architecture', image: '/top/business-2.jpg' },
  { name: '機電', path: 'environment', image: '/top/business-3.jpg' },
];

export const Member: React.FC = () => {
  return (
    <div>
      <div className=" max-w-[85%] mx-auto pt-20">
        <div className=" relative h-40 ">
          <h3 className=" absolute -ml-5 text-[96px] font-bold text-[#F4F4F4]">PEOPLE</h3>
          <h2 className=" text-2xl absolute z-10 font-bold pt-20">社員紹介</h2>
        </div>
      </div>
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
              delay: 0.5,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
        className="   mx-auto lg:max-w-[90%] max-w-[95%] pt-10 "
      >
        <div className="flex gap-10 justify-center">
          {items.map((item) => (
            <Link href={item.path} key={item.path} className=" hover:opacity-80">
              <Image src={item.image} alt={item.name} width={350} height={350} />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

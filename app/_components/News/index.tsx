'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const items = [
  { name: '土木', path: 'civil-engineering', image: '/top/business-1.jpg' },
  { name: '建築', path: 'architecture', image: '/top/business-2.jpg' },
  { name: '機電', path: 'environment', image: '/top/business-3.jpg' },
];

export const News: React.FC = () => {
  return (
    <div className=" pt-20 pb-40">
      <div className=" flex max-w-[85%] mx-auto">
        <div className=" relative w-1/3 h-40 ">
          <div>
            <h3 className=" absolute -ml-5 text-[96px] font-bold text-[#F4F4F4]">NEWS</h3>
            <h2 className=" text-2xl absolute z-10 font-bold pt-20">お知らせ</h2>
          </div>
        </div>
        <motion.div
          variants={{
            offscreen: {
              y: 20,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            },
          }}
          initial="offscreen" // 初期表示はoffscreen
          whileInView="onscreen" // 画面内に入ったらonscreen
          viewport={{ once: false, amount: 0.5 }}
          className="  mt-20  w-full ml-20"
        >
          <div className=" mt-5">
            <div className=" pl-5 border-b  py-5">
              <p>2023/01/01</p>
              <p>20XX年度 新卒採用エントリー受付開始しました</p>
            </div>
            <div className="  pl-5 border-b py-5">
              <p>2023/01/01</p>
              <p>20XX年度 新卒採用エントリー受付開始しました</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

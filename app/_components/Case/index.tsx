'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const items = [
  { name: '土木', path: 'civil-engineering', image: '/top/business-1.jpg' },
  { name: '建築', path: 'architecture', image: '/top/business-2.jpg' },
  { name: '機電', path: 'environment', image: '/top/business-3.jpg' },
  { name: '事務', path: 'backoffice', image: '/top/business-4.jpg' },
];

export const Case: React.FC = () => {
  return (
    <div className=" h-[750px]">
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
          offscreen: {
            y: 20,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0.5 }}
        className="   mx-auto lg:max-w-[90%] max-w-[95%]  "
      >
        <div className="flex -mt-96 gap-10 justify-center">
          {items.map((item) => (
            <Link href={item.path} key={item.path} className=" hover:opacity-80">
              <Image src={item.image} alt={item.name} width={280} height={280} />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

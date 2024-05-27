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

export const Business: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/top/bg-business.jpg')" }}
    >
      <div className=" max-w-[85%] mx-auto pt-20">
        <div className=" relative h-40 ">
          <h3 className=" absolute -ml-5 text-[96px] font-bold text-white">JOBS</h3>
          <h2 className=" text-2xl absolute z-10 pt-20">仕事紹介</h2>
        </div>
        <p>
          豊かな社会を実現するNIPPOの4つの事業領域 <br />
          私たちNIPPOは、アスファルト舗装工事を中心とする舗装・土木工事、および、アスファルト舗装の材料であるアスファルト合材の製造・販売を中核事業としています。{' '}
          <br />
          さらに、オフィスビルや工場などの建築工事、都市型マンションの分譲や、市街地再開発等の開発（不動産）事業、土壌浄化事業、海外事業といった戦略事業に取り組み、事業基盤を強化しています。
        </p>
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
        className="   mx-auto lg:max-w-[90%] max-w-[95%] pt-20 "
      >
        <div className="flex justify-center">
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

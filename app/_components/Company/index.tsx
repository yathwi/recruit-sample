'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const items = [
  { name: '土木', path: 'civil-engineering', image: '/top/business-1.jpg' },
  { name: '建築', path: 'architecture', image: '/top/business-2.jpg' },
  { name: '機電', path: 'environment', image: '/top/business-3.jpg' },
];

export const Company: React.FC = () => {
  return (
    <div>
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
        <div className=" flex justify-center gap-7">
          <div className="relative">
            <Link href="">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="  text-white font-bold text-[18px]">キャリア形成・研修制度</h2>
              </div>
              <Image src="/top/career.png" width={425} height={645} alt={''} />
            </Link>
          </div>
          <div className=" flex flex-col justify-between">
            <div className=" relative">
              <Link href="">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h2 className="  text-white font-bold text-lg">福利厚生</h2>
                </div>
                <Image src="/top/welfare.png" width={637} height={309} alt={''} />
              </Link>
            </div>
            <div className=" relative">
              <Link href="">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h2 className="  text-white font-bold text-lg">募集要項</h2>
                </div>
                <Image src="/top/joblist.png" width={637} height={309} alt={''} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

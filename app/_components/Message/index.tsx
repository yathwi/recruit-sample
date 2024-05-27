'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export const Message: React.FC = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/top/bg-message.jpg')" }}
      >
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
          className="   mx-auto lg:max-w-[90%] max-w-[95%] pt-32 "
        >
          <div className=" text-center text-[20px] flex flex-col gap-10  text-white ">
            <p className="">この道の先に広がる景色はどんなだろう。</p>
            <p className="">
              道は土地を繋ぐ。
              <br />
              道は土地を繋ぐ。
              <br /> 文化を繋ぐ。
              <br /> 人を繋ぐ。
              <br /> こころを繋ぐ
            </p>
            <p className="">
              「道」をつくることは、
              <br />
              豊かな社会を実現すること。
            </p>
            <p className="">
              確かなものづくりで信頼を築き、
              <br />
              人々の夢を応援する。
            </p>{' '}
            <motion.div
              variants={{
                offscreen: {
                  y: 0,
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
              className="   mx-auto lg:max-w-[90%] max-w-[95%] pt-20 "
            >
              <p className=" text-2xl font-bold">さあ、「この道の先に」、挑戦しよう。</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

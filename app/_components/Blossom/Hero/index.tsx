'use client';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import Particle from 'react-tsparticles';
import type { Engine, Container } from 'tsparticles-engine';
// `loadSlim` または必要な関数のインポート
import { loadSlim } from 'tsparticles-slim';
import template from '../ui/ts-particles-mask.json';

export const Hero: React.FC = () => {
  const params = template as typeof template;

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="relative h-[500px] font-mincho text-[#343434]">
      <Particle
        options={params as any}
        className="absolute -z-10  h-full w-full"
        init={particlesInit}
        loaded={particlesLoaded}
      />
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
        className="relative mx-auto max-w-[90%] font-bold"
      >
        <h1 className=" mt-40 text-3xl pc:mt-60  pc:text-[80px]">New Common Sence</h1>
        <p className="text-lg pc:text-[30px]">
          流入データを基に
          <br />
          毎月アップデートする採用サイト制作
        </p>
      </motion.div>
    </div>
  );
};

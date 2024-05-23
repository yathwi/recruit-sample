'use client';
import { InView } from 'react-intersection-observer';
import Image from 'next/image';
import { useMotionValue, motion, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import path from 'path';

const row2 = [
  {
    id: 'ReturnRate',
    name: '年間賞与',
    value: 6.33,
    unit: 'ヶ月分',
  },
  {
    id: 'ReturnRate',
    name: '平均勤続年数',
    value: 17.6,
    unit: '年',
  },
];

const row4 = [
  {
    id: 'paidLeave',
    name: '平均有給取得日数',
    value: 13.1,
    unit: '日',
    path: '/top/numbers/icon-4.jpg',
  },
  {
    id: 'overtimeWork',
    name: '平均時間外勤務時間',
    value: 27.6,
    unit: '時間/月',
    path: '/top/numbers/icon-4.jpg',
  },
  {
    id: 'maternityLeave',
    name: '育休取得率',
    value: 100,
    unit: '％',
    path: '/top/numbers/icon-4.jpg',
  },
  {
    id: 'ReturnRate',
    name: '復職率',
    value: 100,
    unit: '％',
    path: '/top/numbers/icon-4.jpg',
  },
];

export const Numbers: React.FC = () => {
  const count = useMotionValue(0);
  const age = useTransform(count, (latest) => Math.round(latest));
  const count2 = useMotionValue(0);
  const license = useTransform(count2, (latest) => Math.round(latest));
  const count3 = useMotionValue(0);
  const salary = useTransform(count3, (latest) => Math.round(latest));

  const turnoverCount = useMotionValue(0);
  const turnover = useTransform(turnoverCount, (latest) => Math.round(latest));

  const maleFemaleCount = useMotionValue(0);
  const maleFemale = useTransform(maleFemaleCount, (latest) => Math.round(latest));

  const startAnimation1 = (InView: boolean) => {
    if (InView) {
      animate(count, 4375, {
        duration: 2,
        delay: 0.5,
      });
      animate(count2, 1055, { duration: 2, delay: 0.5 });
      animate(count3, 1002, { duration: 2, delay: 0.5 });
      animate(turnoverCount, 5, { duration: 2, delay: 0.5 });
      animate(maleFemaleCount, 50, { duration: 2, delay: 0.5 });
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const motionValues = row2.map(() => useMotionValue(0));
  const transformedValues = motionValues.map((mv, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(mv, (latest) => (i === 0 ? latest.toFixed(2) : latest.toFixed(1))),
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const motionValues2 = row4.map(() => useMotionValue(0));
  const transformedValues2 = motionValues2.map((mv, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(mv, (latest) => (i === 0 || i === 1 ? latest.toFixed(1) : latest.toFixed(0))),
  );

  const startAnimation2 = () => {
    motionValues.forEach((mv, index) => {
      animate(mv, row2[index].value, { duration: 2, delay: 0.5 });
    });
  };
  const paidleaveCount = useMotionValue(0);
  const paidleave = useTransform(paidleaveCount, (latest) => Math.round(latest));

  const successRateCount = useMotionValue(0);
  const successRate = useTransform(successRateCount, (latest) => Math.round(latest));

  const startAnimation3 = () => {
    motionValues2.forEach((mv, index) => {
      animate(mv, row4[index].value, { duration: 2, delay: 0.5 });
    });
  };
  return (
    <div className=" w-full mt-20 bg-[#32727C] lg:h-[1800px] h-[1550px] bg-opacity-80 relative text-[#34947A]">
      <div
        className="w-full absolute h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/top/bg-data.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full  bg-opacity-80" />

        <div className=" max-w-[90%] relative mx-auto">
          <div className=" relative h-40 ">
            <h3 className=" absolute -ml-5 text-[96px] text-white font-bold ">DATA</h3>
            <h2 className=" text-2xl absolute z-10 font-bold pt-20">数字で見るNIPPO</h2>
          </div>
          <div className=" mt-10 lg:mt-10 mx-auto">
            <InView
              as="div"
              onChange={startAnimation1}
              className=" mx-auto pt-10 border-b-2 flex-wrap  flex justify-center"
            >
              <div className=" w-1/3 text-lg text-center">
                <p>連結売上高（2022年度）</p>
                <Image
                  src="/top/numbers/icon-1.png"
                  className=" mx-auto pt-5"
                  width={93}
                  height={93}
                  alt="売上"
                />
                <p>
                  <motion.span className=" text-[74px] font-bold">{age}</motion.span> 億円
                </p>
              </div>
              <div className=" w-1/3 border-x-2  text-lg text-center">
                <p>1級土木有資格者</p>
                <Image
                  src="/top/numbers/icon-2.png"
                  className=" mx-auto pt-5"
                  width={182}
                  height={107}
                  alt="資格者"
                />

                <p>
                  <motion.span className=" text-[74px] font-bold">{license}</motion.span>人
                </p>
              </div>
              <div className=" w-1/3 text-lg text-center">
                <p>平均年収</p>
                <Image
                  src="/top/numbers/icon-3.png"
                  className=" mx-auto pt-5"
                  width={69}
                  height={112}
                  alt="資格者"
                />
                <p className=" text-base">NIPPO総合職平均</p>
                <p className="-mt-7">
                  <motion.span className=" text-[74px]  font-bold">{salary}</motion.span>万円
                </p>
              </div>
            </InView>
            <InView
              as="div"
              onChange={(inView) => inView && startAnimation2()}
              className=" pt-10 border-white flex flex-wrap justify-center"
            >
              <div className=" mb-10   w-1/2 ">
                <p className=" text-center">連結売上高構成比</p>
                <div className=" flex justify-center mt-10">
                  <div>
                    <Image src="/add/graph-1.png" width={300} height={300} alt="graph" />
                  </div>
                  <div className=" -mt-5 leading-9">
                    <p>
                      男性
                      <motion.span className=" text-[64px] px-2">{maleFemale}</motion.span>%
                    </p>
                    <p>
                      女性
                      <motion.span className=" text-[64px] px-2">{maleFemale}</motion.span>%
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mb-10 mx-auto w-1/2 ">
                <p className=" text-center">官民受注割合（NIPPO単体）</p>
                <div className=" flex justify-center mt-10">
                  <div>
                    <Image src="/add/graph-1.png" width={300} height={300} alt="graph" />
                  </div>
                  <div className=" -mt-5 leading-9">
                    <p>
                      男性
                      <motion.span className=" text-[64px] px-2">{maleFemale}</motion.span>%
                    </p>
                    <p>
                      女性
                      <motion.span className=" text-[64px] px-2">{maleFemale}</motion.span>%
                    </p>
                  </div>
                </div>
              </div>
            </InView>
            <InView
              as="div"
              onChange={(inView) => inView && startAnimation2()}
              className="border-t pt-10 border-white flex flex-wrap justify-center"
            >
              <div className=" mb-10 mx-auto w-1/2 ">
                <p className=" text-center">官民受注割合（NIPPO単体）</p>
                <div className=" flex justify-center mt-10">
                  <div>
                    <Image src="/add/graph-1.png" width={300} height={300} alt="graph" />
                  </div>
                  <div className=" -mt-5 leading-9">
                    <p>
                      男性
                      <motion.span className=" text-[64px] px-2">{maleFemale}</motion.span>%
                    </p>
                    <p>
                      女性
                      <motion.span className=" text-[64px] px-2">{maleFemale}</motion.span>%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex">
                {row2.map((item, index) => (
                  <div key={item.id} className="  w-1/2 text-center">
                    <p>{item.name}</p>
                    <p>
                      <motion.span className=" text-[96px] font-bold">
                        {transformedValues[index]}
                      </motion.span>
                      {item.unit}
                    </p>
                  </div>
                ))}
              </div>
            </InView>
            <InView
              as="div"
              onChange={startAnimation3}
              className="border-t pt-10 border-white flex flex-wrap justify-center"
            >
              <div className=" w-full px-10 flex">
                {row4.map((item, index) => (
                  <div key={item.id} className="  w-1/4 text-center">
                    <p>{item.name}</p>
                    <Image
                      src={item.path}
                      width={120}
                      height={120}
                      alt="icon"
                      className=" mx-auto pt-5"
                    />
                    <p>
                      <motion.span className=" text-[96px] font-bold">
                        {transformedValues2[index]}
                      </motion.span>
                      {item.unit}
                    </p>
                  </div>
                ))}
              </div>
            </InView>
          </div>
        </div>
      </div>
    </div>
  );
};

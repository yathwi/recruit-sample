'use client';
import { InView } from 'react-intersection-observer';
import Image from 'next/image';
import { useMotionValue, motion, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import path from 'path';
import { OrderRatio } from '../ui/graph/OrderRatio';
import { EarningRatio } from '../ui/graph/EarningRatio';
import { GenderRatio } from '../ui/graph/GenderRatio';

const row2 = [
  {
    id: 'ReturnRate',
    name: '年間賞与',
    value: 6.33,
    unit: 'ヶ月分',
    path: '/top/numbers/icon-8.jpg',
  },
  {
    id: 'ReturnRate',
    name: '平均勤続年数',
    value: 17.6,
    unit: '年',
    path: '/top/numbers/icon-9.jpg',
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
    path: '/top/numbers/icon-10.jpg',
  },
  {
    id: 'maternityLeave',
    name: '育休取得率',
    value: 100,
    unit: '％',
    path: '/top/numbers/icon-11.jpg',
  },
  {
    id: 'ReturnRate',
    name: '復職率',
    value: 100,
    unit: '％',
    path: '/top/numbers/icon-12.jpg',
  },
];

export const Numbers: React.FC = () => {
  const count = useMotionValue(0);
  const earnings = useTransform(count, (latest) => {
    const roundedValue = Math.round(latest);
    return roundedValue.toLocaleString();
  });
  const count2 = useMotionValue(0);
  const license = useTransform(count2, (latest) => {
    const roundedValue = Math.round(latest);
    return roundedValue.toLocaleString();
  });
  const count3 = useMotionValue(0);
  const salary = useTransform(count3, (latest) => {
    const roundedValue = Math.round(latest);
    return roundedValue.toLocaleString();
  });

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
    <div
      id="numbers"
      className=" w-full mt-20 bg-[#32727C] lg:h-[1850px] h-[1550px] bg-opacity-80 relative "
    >
      <div
        className="w-full absolute h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/top/bg-data.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full  bg-opacity-80" />

        <div className=" max-w-[90%] relative mx-auto">
          <div className=" relative h-40 ">
            <h3 className=" absolute -ml-5 text-[96px] text-white font-bold">DATA</h3>
            <h2 className=" text-2xl absolute z-10 font-bold pt-20">数字で見るNIPPO</h2>
          </div>
          <div className=" mt-10 text-[#34947A] lg:mt-10 mx-auto">
            <InView
              as="div"
              onChange={startAnimation1}
              className=" mx-auto pt-10 border-b-2 flex-wrap  flex justify-center"
            >
              <div className=" w-1/3 text-lg text-center">
                <p className="font-bold text-lg">連結売上高（2022年度）</p>
                <Image
                  src="/top/numbers/icon-1.png"
                  className=" mx-auto pt-5"
                  width={93}
                  height={93}
                  alt="売上"
                />
                <p className=" font-oswald font-bold">
                  <motion.span className=" text-[74px]">{earnings}</motion.span> 億円
                </p>
              </div>
              <div className=" w-1/3 border-x-2  text-lg text-center">
                <p className="font-bold text-lg">1級土木有資格者</p>
                <Image
                  src="/top/numbers/icon-2.png"
                  className=" mx-auto pt-5"
                  width={182}
                  height={107}
                  alt="資格者"
                />

                <p className="font-bold font-oswald">
                  <motion.span className=" text-[74px] ">{license}</motion.span>人
                </p>
              </div>
              <div className=" w-1/3 text-lg text-center">
                <p className=" font-bold text-lg">平均年収</p>
                <Image
                  src="/top/numbers/icon-3.png"
                  className=" mx-auto pt-5"
                  width={69}
                  height={112}
                  alt="資格者"
                />
                <p className="  font-bold text-lg">NIPPO総合職平均</p>
                <p className="-mt-7 font-bold font-oswald">
                  <motion.span className=" text-[74px]  ">{salary}</motion.span>万円
                </p>
              </div>
            </InView>
            <InView
              as="div"
              onChange={(inView) => inView && startAnimation2()}
              className="flex border-b-2 flex-wrap justify-center"
            >
              <div className=" pb-10 pt-10  w-1/2 ">
                <p className=" text-center font-bold text-lg">連結売上高構成比</p>

                <EarningRatio
                  data={[
                    { name: '舗装・土木', value: 65 },
                    { name: '建築', value: 15 },
                    { name: '製造・販売', value: 14 },
                    { name: '開発・その他', value: 6 },
                  ]}
                />
              </div>
              <div className=" pb-10 pt-10 border-l-2  mx-auto w-1/2 ">
                <p className=" text-center font-bold text-lg">官民受注割合（NIPPO単体）</p>
                <div className="  relative mt-10">
                  <div className="flex justify-center mt-10">
                    <OrderRatio
                      data={[
                        { name: '民間', value: 52 },
                        { name: '官庁', value: 48 },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </InView>
            <InView
              as="div"
              onChange={(inView) => inView && startAnimation2()}
              className="border-t  border-white flex flex-wrap justify-center"
            >
              <div className="mb-10 mx-auto relative w-1/2 pt-10">
                <p className="text-center text-lg font-bold">男女比</p>
                <GenderRatio
                  data={[
                    { name: '男性', value: 83 },
                    { name: '女性', value: 17 },
                  ]}
                />
              </div>
              <div className="w-1/2 border-l-2  flex">
                {row2.map((item, index) => (
                  <div
                    key={item.id}
                    className={`pt-10 ${index === 1 ? 'border-l-2' : ''}  w-1/2 text-center`}
                  >
                    <p className=" text-lg  font-bold">{item.name}</p>
                    <Image
                      src={item.path}
                      width={120}
                      height={120}
                      alt="icon"
                      className=" mx-auto pt-5"
                    />
                    <p className=" text-lg font-bold font-oswald">
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
                    <p className=" text-lg font-bold">{item.name}</p>
                    <Image
                      src={item.path}
                      width={120}
                      height={120}
                      alt="icon"
                      className=" mx-auto pt-5"
                    />
                    <p className="font-bold font-oswald text-lg">
                      <motion.span className=" text-[96px] ">
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

'use client';
import { InView } from 'react-intersection-observer';
import Image from 'next/image';
import { useMotionValue, motion, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const row2 = [
  {
    id: 'ChildcareLeaveCount',
    name: '育休取得率',
    value: 90,
    unit: '%',
  },
  {
    id: 'ReturnRateCount',
    name: '復職率',
    value: 85,
    unit: '%',
  },
  {
    id: 'OverWorkHoursCount',
    name: '年間平均残業時間',
    value: 20,
    unit: '時間',
  },
  { id: 'TrainingRateCount', name: '研修受講率', value: 95, unit: '%' },
];

export const Numbers: React.FC = () => {
  const count = useMotionValue(0);
  const age = useTransform(count, (latest) => Math.round(latest));

  const turnoverCount = useMotionValue(0);
  const turnover = useTransform(turnoverCount, (latest) => Math.round(latest));

  const maleFemaleCount = useMotionValue(0);
  const maleFemale = useTransform(maleFemaleCount, (latest) => Math.round(latest));

  const startAnimation1 = (InView: boolean) => {
    if (InView) {
      animate(count, 29, {
        duration: 2,
        delay: 0.5,
      });
      animate(turnoverCount, 5, { duration: 2, delay: 0.5 });
      animate(maleFemaleCount, 50, { duration: 2, delay: 0.5 });
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const motionValues = row2.map(() => useMotionValue(0));
  const transformedValues = motionValues.map((mv) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(mv, (latest) => Math.round(latest)),
  );

  const startAnimation2 = () => {
    motionValues.forEach((mv, index) => {
      animate(mv, row2[index].value, { duration: 2, delay: 0.5 });
    });
  };

  const nationalityCount = useMotionValue(0);
  const nationality = useTransform(nationalityCount, (latest) => Math.round(latest));

  const successRateCount = useMotionValue(0);
  const successRate = useTransform(successRateCount, (latest) => Math.round(latest));

  const startAnimation3 = (InView: boolean) => {
    if (InView) {
      animate(nationalityCount, 15, {
        duration: 2,
        delay: 0.5,
      });
      animate(successRateCount, 30, { duration: 2, delay: 0.5 });
    }
  };
  return (
    <div className=" w-full mt-20 bg-[#32727C] lg:h-[1100px] h-[1550px] bg-opacity-80 relative text-white">
      <div
        className="w-full absolute h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/add/bg-numbers.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#32727C] bg-opacity-80" />

        <div className=" max-w-[90%] relative mx-auto">
          <h2 className=" text-xl pt-10 font-cinzel pc:text-[96px]">Numbers</h2>
          <div className=" flex items-center font-bold">
            <div className=" w-10 border-t-2 border-white mr-3" />
            <p>数字で見るテックイノベイト</p>
          </div>
          <div className=" mt-10 lg:mt-20 lg:max-w-[70%]   mx-auto">
            <InView
              as="div"
              onChange={startAnimation1}
              className=" mx-auto border-t pt-10 flex-wrap border-white flex justify-center"
            >
              <div className="lg:w-60 w-1/2 text-center">
                <p>平均年齢</p>
                <p>
                  <motion.span className=" text-[96px]">{age}</motion.span>歳
                </p>
              </div>
              <div className="lg:w-60 w-1/2 lg:hidden block text-center">
                <p className=" ">離職率</p>
                <p>
                  <motion.span className=" text-[96px]">{turnover}</motion.span>%
                </p>
              </div>
              <div className=" lg:w-80 mb-10 lg:mb-10">
                <p className=" text-center">男女比率</p>
                <div className=" flex mt-10">
                  <div>
                    <Image src="/add/graph-1.png" width={100} height={100} alt="graph" />
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
              <div className="w-60 hidden lg:block text-center">
                <p className=" ">離職率</p>
                <p>
                  <motion.span className=" text-[96px]">{turnover}</motion.span>%
                </p>
              </div>
            </InView>
            <InView
              as="div"
              onChange={(inView) => inView && startAnimation2()}
              className="border-t pt-10 border-white flex flex-wrap justify-center"
            >
              {row2.map((item, index) => (
                <div key={item.id} className=" lg:w-60 w-1/2 text-center">
                  <p>{item.name}</p>
                  <p>
                    <motion.span className=" text-[96px]">{transformedValues[index]}</motion.span>
                    {item.unit}
                  </p>
                </div>
              ))}
            </InView>
            <InView
              as="div"
              onChange={startAnimation3}
              className=" border-t pt-10 border-white lg:flex justify-center items-center lg:px-20"
            >
              <div className=" w-80 text-center">
                <div>
                  <p className=" text-center">社員の国際性</p>
                </div>
                <div className=" flex justify-center relative items-center">
                  <div className=" absolute">
                    <Image src="/add/map-bg.png" width={373} height={195} alt="graph" />
                  </div>

                  <motion.p className="text-[96px] mr-2">{nationality}</motion.p>
                  <p>
                    カ国以上の国籍を
                    <br />
                    持つ社員が在籍
                  </p>
                </div>
              </div>
              <div className=" w-80 text-center">
                <div>
                  <p>
                    社員の社内起業・
                    <br />
                    新規プロジェクト提案成功率
                  </p>
                </div>
                <p>
                  <motion.span className="text-[96px] mr-2">{successRate}</motion.span>%
                </p>
              </div>
            </InView>
          </div>
        </div>
      </div>
    </div>
  );
};

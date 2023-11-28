import Image from 'next/image';
import { Button } from '../ui/button';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export const News: React.FC = () => {
  return (
    <div className=" mt-10 pb-10 lg:mt-40 lg:h-[800px] relative bg-black">
      <div className=" absolute hidden lg:block -top-20 right-10">
        <Image
          src="/add/news1.jpg"
          alt="太光設備株式会社"
          className=" w-auto"
          width={600}
          height={300}
          priority
        />
      </div>

      <div className=" absolute top-60 hidden lg:block left-0">
        <Image
          src="/add/news2.jpg"
          alt="太光設備株式会社"
          className=" w-auto"
          width={300}
          height={100}
          priority
        />
      </div>
      <div className=" lg:ml-[30%] lg:flex max-w-[90%] mx-auto lg:w-full pt-10 lg:pt-80">
        <div className=" mr-5">
          <h2 className=" text-2xl font-cinzel lg:text-[70px] text-left text-white">News</h2>{' '}
          <div className=" flex items-center font-cinzel">
            <div className=" w-10 border-t-2 border-gray-500 mr-3" />
            <h3 className=" font-cinzel lg:text-lg text-white">お知らせ</h3>
          </div>
        </div>
        <div className=" mt-5 lg:mt-32 text-white lg:w-[500px]">
          <div className=" border-t  py-5">
            <p>2023/01/01</p>
            <p>20XX年度 新卒採用エントリー受付開始しました</p>
          </div>
          <div className=" border-y py-5">
            <p>2023/01/01</p>
            <p>20XX年度 新卒採用エントリー受付開始しました</p>
          </div>
        </div>
      </div>
    </div>
  );
};

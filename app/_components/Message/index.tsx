import Image from 'next/image';
import { Button } from '../ui/button';

export const Message: React.FC = () => {
  return (
    <div className=" max-w-[90%] mx-auto mt-10">
      <h2 className=" text-[70px] text-right">Message</h2>{' '}
      <div className=" flex">
        <div className=" max-w-[25%] mr-20 lg:mt-10">
          <h3 className=" font-bold text-lg">テクノロジーで世界を動かす</h3>
          <p className=" lg:mt-10 leading-loose">
            私たちテックイノベイト株式会社は、イノベーションを核とした技術ソリューションを提供するIT企業です。
          </p>
          <Button name="more >>" />
        </div>
        <div>
          <Image
            src="/img-aboutus.jpg"
            alt="太光設備株式会社"
            className=" w-auto"
            width={700}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};
